import "./header.scss";


const Header = () => {
  const headerData = [
    {
      id: 1,
      name: "Home",
      active: false,
      href: "/",
    },
    {
      id: 2,
      name: "Sign in",
      active: false,
      href: "/login",
    },
    {
      id: 3,
      name: "Sign up",
      active: false,
      href: "/Signup",
    },

    {
      id: 4,
      name: "Logout",
      active: false,
      href: "/logout",
    },
    {
       id : 5,
       name : "Cart",
       href : "/cart",
    }
  ];
  return (
    <>
      <nav>
        <h3>MyFitness</h3>
        <ul>
          {headerData?.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
