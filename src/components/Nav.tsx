"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, getProviders } from "next-auth/react";

const Nav = () => {
  const is_user_logged_in = true;
  const [providers, setProviders] = useState(null);

  const [toggleDropdown, setToggleDropdown] = useState(true);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 mt-5">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">AI Prompts</p>
      </Link>
      {/* {Desktop Navigation} */}
      <div className="sm:flex hidden">
        {is_user_logged_in ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create" className="white_btn">
              Create Post
            </Link>

            <button
              type="button"
              className="outline_btn"
              onClick={() => signOut}
            >
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
                onClick={() => setToggleDropdown((prev) => !prev)}
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  className="white_btn"
                  onClick={() => signIn(provider.id)}
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* {Mobile Navigation} */}
      <div className="sm:hidden flex relative">
        {is_user_logged_in ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  className="white_btn"
                  onClick={() => signIn(provider.id)}
                >
                  Sign in
                </button>
              ))}
          </>
        )}

        {toggleDropdown && (
          <div className="dropdown">
            <Link href="/profile" className="dropdown_link">
              <p className="text-sm">Profile</p>
            </Link>
            <Link href="/create" className="dropdown_link">
              <p className="text-sm">Create Prompt</p>
            </Link>
            <button
              type="button"
              className="mt-5 w-full white_btn"
              onClick={() => {
                signOut();
                setToggleDropdown(false);
              }}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
