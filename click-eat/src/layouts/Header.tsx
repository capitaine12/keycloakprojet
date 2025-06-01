import { useKeycloak } from '../../contexts/KeycloakContext';

const Header = () => {
  const { isAuthenticated, userProfile, logout } = useKeycloak();

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">Click Eat</h1>
      {isAuthenticated && (
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">
            {userProfile?.firstName} {userProfile?.lastName}
          </span>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Déconnexion
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
