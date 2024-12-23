function UserStatus({isLoggedIn,isAdmin}) {
    return (
        <div>
            {isLoggedIn&&isAdmin&&<h1>Welcome Admin</h1>}
            {isLoggedIn&&!isAdmin&&<h1>Welcome User</h1>}
            {!isLoggedIn&&<h1>Please Try Again</h1>}

        </div>
    )
}
export default UserStatus;