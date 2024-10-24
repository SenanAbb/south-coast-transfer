/* eslint-disable @typescript-eslint/no-explicit-any */
function Container({ children }: any) {
  return <div className="lg:max-w-[1200px] mx-auto">{children}</div>;
}

export default Container;
