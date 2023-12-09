import React from "react";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>header</header>
      {children}
      <footer>footer</footer>
    </div>
  );
}

export default HomeLayout;
