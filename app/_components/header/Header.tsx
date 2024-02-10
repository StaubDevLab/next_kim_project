import React from 'react';
import PageContainer from "@/components/page-container";
import HeaderNavigation from "@/components/header/HeaderNavigation";
import {Button} from "@/components/ui/button";
import HeaderLogo from "@/components/header/HeaderLogo";
import ResponsiveMenu from "@/components/header/ResponsiveMenu";
import HeaderButton from "@/components/header/HeaderButton";

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
