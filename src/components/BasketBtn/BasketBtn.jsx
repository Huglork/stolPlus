import React, { useState } from 'react';

import { Button, Space} from 'antd';
export const BasketBtn = () => {
    const [size, setSize] = useState('large'); // default is 'middle'

    return (
        <>
            <Space direction="vertical">
                <Space wrap>
                    <Button type="primary" size={size}>
                        Добавить в корзину
                    </Button>
                </Space>
            </Space>
        </>
    );
}