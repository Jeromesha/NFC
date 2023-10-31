import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { Input, Button, Space, Col, Row } from 'antd';
import { ChromePicker } from 'react-color';
import '../../../Components/nfc.css';

export default function QrCode() {
    const [value, setValue] = useState('');
    const [back, setBack] = useState('#FFFFFF');
    const [fore, setFore] = useState('#000000');
    const [size, setSize] = useState(256);
    const [showBackgroundColorPicker, setShowBackgroundColorPicker] = useState(false);
    const [showForegroundColorPicker, setShowForegroundColorPicker] = useState(false);

    const handleGenerateQRCode = () => {
        if (value) {
            const qrSize = size ? size : 256;
            return (
                <QRCode
                    value={value}
                    bgColor={back}
                    fgColor={fore}
                    size={qrSize}
                />
            );
        }
        return null;
    };

    const handleBackgroundColorChange = (color) => {
        setBack(color.hex);
    };

    const handleForegroundColorChange = (color) => {
        setFore(color.hex);
    };

    const handleSubmit = () => {
        if (value && back && fore) {
        }
    };

    return (
        <Row style={{padding:'3%'}}>
            <Col sm={10} md={8} lg={8} style={{display:"flex", justifyContent:"center"}}></Col>
            <div>
                <br />
                <br />
                <Input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Value of Qr-code"
                />
                <br />
                <br />
                <Row gutter={16}>
                    <Col span={12}>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <button className='btn_qr_bck_clr' onClick={() => setShowBackgroundColorPicker(!showBackgroundColorPicker)}>
                                Set Background Color
                            </button>
                            {showBackgroundColorPicker && (
                                <ChromePicker color={back} onChange={handleBackgroundColorChange} />
                            )}
                        </div>
                        <br/>
                        <Input
                            value={back}
                            onChange={(e) => setBack(e.target.value)}
                            placeholder="Background color"
                        />
                    </Col>
                    <Col span={12}>
                        <div style={{display:"flex", justifyContent:"center"}}>
                            <button className='btn_qr_bck_clr' onClick={() => setShowForegroundColorPicker(!showForegroundColorPicker)}>
                                Set Foreground Color
                            </button>
                            {showForegroundColorPicker && (
                                <ChromePicker color={fore} onChange={handleForegroundColorChange} />
                            )}
                        </div>
                        <br />
                        <Input
                            value={fore}
                            onChange={(e) => setFore(e.target.value)}
                            placeholder="Foreground color"
                        />
                    </Col>
                </Row>
                <br />
                <Input
                    value={size}
                    onChange={(e) => setSize(parseInt(e.target.value === '' ? 0 : e.target.value, 10))}
                    placeholder="Size of Qr-code"
                />
                <br />
                <br />
                <Space style={{display:"flex", justifyContent:"end", padding:"3%"}}>
                    <Button type="primary" onClick={handleGenerateQRCode}>Generate QR Code</Button>
                    <Button type="primary" onClick={handleSubmit}>Submit</Button> {/* Add the Submit button */}
                </Space>
                <br />
                <br />
                {handleGenerateQRCode()}
            </div>
            <div>

            </div>
        </Row>
    );
}
