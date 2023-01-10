import React, {FC} from 'react';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;


const MainLayout: FC<{children: JSX.Element, withHeader?: boolean, withFooter?: boolean, optionalHeader?: JSX.Element, optionalFooter?: JSX.Element}> = ({
                                                                                               children,
                                                                                               withFooter=false,
                                                                                               withHeader=false,
                                                                                               optionalHeader,
                                                                                               optionalFooter
}) => {
  return (
      <Layout>
        {withHeader && <Header>{optionalHeader}</Header>}
        <Content>{children}</Content>
        {withFooter && <Footer>Footer</Footer>}
      </Layout>
  );
};

export default MainLayout;
