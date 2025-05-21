import React, { useState } from 'react';

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isVisible, setIsVisible] = useState(true);

    return (
        <>
            {isVisible ? (
                <div style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    width: isOpen ? '360px' : '60px',
                    height: isOpen ? '400px' : '60px',
                    zIndex: 1000,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 0 12px rgba(0, 0, 0, 0.25)',
                    backgroundColor: '#fff',
                    transition: 'all 0.3s ease-in-out'
                }}>
                    {/* Chat Header */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: isOpen ? 'space-between' : 'center',
                        padding: '5px 10px',
                        backgroundColor: '#2e2e2e',
                        color: 'white',
                        height: '40px'
                    }}>
                        {isOpen && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <img
                                    src="/kassahun.jpg"
                                    alt="Kassahun"
                                    style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                                />
                                <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Kassahun</span>
                            </div>
                        )}
                        <div>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                    marginRight: isOpen ? '8px' : '0'
                                }}
                                title={isOpen ? 'Minimize' : 'Expand'}
                            >
                                {isOpen ? '➖' : <img src="/kassahun.jpg" alt="Open" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />}
                            </button>
                            {isOpen && (
                                <button
                                    onClick={() => setIsVisible(false)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'white',
                                        cursor: 'pointer',
                                        fontSize: '16px'
                                    }}
                                    title="Close"
                                >
                                    ✖️
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Assistant Chat */}
                    {isOpen && (
                        <iframe
                            src="https://kassahun-ai-persona-bot.lovable.app"
                            title="Kassahun AI Assistant"
                            style={{ width: '100%', height: 'calc(100% - 40px)', border: 'none' }}
                        />
                    )}
                </div>
            ) : (
                // Floating Chat Avatar Button
                <button
                    onClick={() => {
                        setIsOpen(true);
                        setIsVisible(true);
                    }}
                    title="Open Kassahun AI Assistant"
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        backgroundColor: '#2e2e2e',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer',
                        zIndex: 1000,
                        boxShadow: '0 0 12px rgba(0,0,0,0.3)',
                        padding: 0
                    }}
                >
                    <img
                        src="/kassahun.jpg"
                        alt="Kassahun"
                        style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                    />
                </button>
            )}
        </>
    );
};

export default AIAssistant;
