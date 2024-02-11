import React from 'react';
import PageContainer from "@/app/_components/ui/page-container";
import HeaderNavigation from "@/app/_components/header/HeaderNavigation";
import HeaderLogo from "@/app/_components/header/HeaderLogo";
import ResponsiveMenu from "@/app/_components/header/ResponsiveMenu";
import HeaderButton from "@/app/_components/header/HeaderButton";

const Header = () => {
    return (
        <header className={'p-4 '}>
            <PageContainer>
                <div className={'flex items-center justify-between'}>
                    <HeaderLogo/>

                    <HeaderNavigation/>
                    <div className="flex items-center">
                        <HeaderButton content={"Prendre rdv"}/>
                    </div>
                    <ResponsiveMenu/>
                </div>

            </PageContainer>

        </header>
    );
};

export default Header;
