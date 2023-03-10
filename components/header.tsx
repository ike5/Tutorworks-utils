import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from './header.module.css'

// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
    const { data: session, status } = useSession()
    const loading = status === 'loading'

    return (
        <header>
            {/* <noscript>
                <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
            </noscript>
            <div className={styles.signedInStatus}>
                <p
                    className={`nojs-show ${
                        !session && loading ? styles.loading : styles.loaded
                    }`}
                >
                    {!session && (
                        <>
                            <span className={styles.notSignedInText}>
                                You are not signed in
                            </span>
                            <a
                                href={`/api/auth/signin`}
                                className={styles.buttonPrimary}
                                onClick={(e) => {
                                    e.preventDefault()
                                    signIn()
                                }}
                            >
                                Sign in
                            </a>
                        </>
                    )}
                    {session?.user && (
                        <>
                            {session.user.image && (
                                <span
                                    style={{
                                        backgroundImage: `url('${session.user.image}')`,
                                    }}
                                    className={styles.avatar}
                                />
                            )}
                            <span className={styles.signedInText}>
                                <small>Signed in as</small>
                                <br />
                                <strong>
                                    {session.user.email ?? session.user.name}
                                </strong>
                            </span>
                            <a
                                href={`/api/auth/signout`}
                                className={styles.button}
                                onClick={(e) => {
                                    e.preventDefault()
                                    signOut()
                                }}
                            >
                                Sign out
                            </a>
                        </>
                    )}
                </p>
            </div> */}

            <nav className='navbar bg-base-100'>
                <div className='flex-1'>
                    <a className='btn btn-ghost normal-case text-xl'>daisyUI</a>
                </div>
                <div className='flex-none'>
                    <div className='dropdown dropdown-end'>
                        <label
                            tabIndex={0}
                            className='btn btn-ghost btn-circle'
                        >
                            <div className='indicator'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-5 w-5'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                                    />
                                </svg>
                                <span className='badge badge-sm indicator-item'>
                                    8
                                </span>
                            </div>
                        </label>
                        <div
                            tabIndex={0}
                            className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'
                        >
                            <div className='card-body'>
                                <span className='font-bold text-lg'>
                                    8 Items
                                </span>
                                <span className='text-info'>
                                    Subtotal: $999
                                </span>
                                <div className='card-actions'>
                                    <button className='btn btn-primary btn-block'>
                                        View cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='dropdown dropdown-end'>
                        <label
                            tabIndex={0}
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div className='w-10 rounded-full'>
                                <img src='https://placeimg.com/80/80/people' />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li className={styles.navItem}>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href='/client'>Client</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href='/server'>Server</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href='/protected'>Protected</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href='/api-example'>API</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href='/admin'>Admin</Link>
                            </li>
                            <li className={styles.navItem}>
                                <Link href='/me'>Me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <nav>
                <ul className={styles.navItems}>
                   
                </ul>
            </nav> */}
        </header>
    )
}
