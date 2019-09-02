import React from 'react';
import NavBar from '../../features/NavBar/NavBar';
import PageContainer from '../../layouts/PageContainer/PageContainer';

const MainLayout = ({children}) => (
    <div>
        <PageContainer>
            <NavBar/>
            {children}
        </PageContainer>
    </div>
);

export default MainLayout;
