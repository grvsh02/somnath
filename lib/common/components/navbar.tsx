import React from "react";
import { Navbar, MobileNav, Button, IconButton} from "@material-tailwind/react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
} from "@material-tailwind/react";
import {
    Cog6ToothIcon,
    PowerIcon,
    InboxArrowDownIcon,
    UserCircleIcon,
    LifebuoyIcon,
} from "@heroicons/react/24/outline";

const CustomNavbar = () => {

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Pages
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Account
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Blocks
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Docs
                </a>
            </Typography>
        </ul>
    );

    return(
        <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-2 text-xl cursor-pointer py-1.5 font-medium"
                >
                    Attendify
                </Typography>
                <div className="flex items-center gap-4">
                    {/*<div className="mr-4 hidden lg:block">{navList}</div>*/}
                    <div className="mr-12">
                    <Menu>
                        <MenuHandler>
                            <Avatar
                                variant="circular"
                                alt="candice wu"
                                className="cursor-pointer"
                                size="sm"
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            />
                        </MenuHandler>
                        <MenuList>
                            <MenuItem className="flex items-center gap-2">
                                <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
                                <Typography variant="small" className="font-normal">
                                    My Profile
                                </Typography>
                            </MenuItem>
                            <MenuItem className="flex items-center gap-2">
                                <Cog6ToothIcon strokeWidth={2} className="h-4 w-4" />
                                <Typography variant="small" className="font-normal">
                                    Edit Profile
                                </Typography>
                            </MenuItem>
                            <MenuItem className="flex items-center gap-2">
                                <InboxArrowDownIcon strokeWidth={2} className="h-4 w-4" />
                                <Typography variant="small" className="font-normal">
                                    Inbox
                                </Typography>
                            </MenuItem>
                            <MenuItem className="flex items-center gap-2">
                                <LifebuoyIcon strokeWidth={2} className="h-4 w-4" />
                                <Typography variant="small" className="font-normal">
                                    Help
                                </Typography>
                            </MenuItem>
                            <hr className="my-2 border-blue-gray-50" />
                            <MenuItem className="flex items-center gap-2 ">
                                <PowerIcon strokeWidth={2} className="h-4 w-4" />
                                <Typography variant="small" className="font-normal">
                                    Sign Out
                                </Typography>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <MobileNav open={openNav}>
                {navList}
                <Button variant="gradient" size="sm" fullWidth className="mb-2">
                    <span>Buy Now</span>
                </Button>
            </MobileNav>
        </Navbar>
    )
}

export default CustomNavbar;