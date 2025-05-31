from rest_framework import serializers
from .models import Restaurant, Category, MenuItem, Order, OrderItem, UserProfile
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'phone', 'default_address']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'icon', 'color']

class MenuItemSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')
    
    class Meta:
        model = MenuItem
        fields = [
            'id', 'name', 'description', 'price', 'image', 
            'restaurant', 'category', 'category_name',
            'is_vegetarian', 'is_vegan', 'is_gluten_free', 'is_popular'
        ]

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = [
            'id', 'name', 'description', 'image', 'address',
            'phone', 'email', 'cuisine_type', 'delivery_time',
            'delivery_fee', 'rating'
        ]

class RestaurantDetailSerializer(serializers.ModelSerializer):
    menu_items = MenuItemSerializer(many=True, read_only=True)
    
    class Meta:
        model = Restaurant
        fields = [
            'id', 'name', 'description', 'image', 'address',
            'phone', 'email', 'cuisine_type', 'delivery_time',
            'delivery_fee', 'rating', 'menu_items'
        ]

class OrderItemSerializer(serializers.ModelSerializer):
    menu_item_name = serializers.ReadOnlyField(source='menu_item.name')
    menu_item_image = serializers.ReadOnlyField(source='menu_item.image')
    
    class Meta:
        model = OrderItem
        fields = ['id', 'menu_item', 'menu_item_name', 'menu_item_image', 'quantity', 'price', 'total']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)
    restaurant_name = serializers.ReadOnlyField(source='restaurant.name')
    user_email = serializers.ReadOnlyField(source='user.email')
    
    class Meta:
        model = Order
        fields = [
            'id', 'user', 'user_email', 'restaurant', 'restaurant_name',
            'status', 'created_at', 'updated_at', 'delivery_address',
            'delivery_fee', 'subtotal', 'total', 'items'
        ]
        read_only_fields = ['user', 'created_at', 'updated_at']

class OrderCreateSerializer(serializers.ModelSerializer):
    items = serializers.ListField(child=serializers.DictField(), write_only=True)
    
    class Meta:
        model = Order
        fields = ['restaurant', 'delivery_address', 'items']
    
    def create(self, validated_data):
        items_data = validated_data.pop('items')
        user = self.context['request'].user
        
        # Calculate order totals
        subtotal = 0
        restaurant = validated_data['restaurant']
        delivery_fee = restaurant.delivery_fee
        
        order = Order.objects.create(
            user=user,
            subtotal=0,  # Temporary value
            total=0,     # Temporary value
            delivery_fee=delivery_fee,
            **validated_data
        )
        
        # Create order items
        for item_data in items_data:
            menu_item = MenuItem.objects.get(id=item_data['menu_item_id'])
            quantity = item_data['quantity']
            price = menu_item.price
            
            OrderItem.objects.create(
                order=order,
                menu_item=menu_item,
                quantity=quantity,
                price=price
            )
            
            subtotal += price * quantity
        
        # Update order with correct totals
        total = subtotal + delivery_fee
        order.subtotal = subtotal
        order.total = total
        order.save()
        
        return order