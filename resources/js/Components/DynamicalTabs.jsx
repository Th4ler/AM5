import React, { useState } from 'react';

const DynamicalTabs = ({
    tabs,
    defaultActiveTab = null,
    className = '',
    tabClassName = '',
    contentClassName = ''
}) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleAccordion = (index) => {
        setExpandedItem(expandedItem === index ? null : index);
    };

    // Render different content types based on the content format
    const renderContent = (content) => {
        if (Array.isArray(content) && content[0]?.title) {
            // Render accordion if content is array of objects with title
            return (
                <div className="space-y-2">
                    {content.map((item, index) => (
                        <div key={index} className="border rounded">
                            <button
                                className="w-full px-4 py-2 text-left font-medium flex justify-between items-center hover:bg-gray-50"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="pr-2">{item.title}</span>
                                <span className="transform transition-transform duration-200 flex-shrink-0">
                                    {expandedItem === index ? '−' : '+'}
                                </span>
                            </button>
                            {expandedItem === index && (
                                <div className="px-4 py-2 bg-gray-50">
                                    <p className="text-gray-500">{item.content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            );
        } else if (Array.isArray(content)) {
            if (Array.isArray(content) && content.length > 1) {
                // Render bullet list if content is an array with more than one item
                return (
                    <ul className="list-['-_'] pl-5 space-y-2">
                        {content.map((item, index) => (
                            <li key={index} className="text-gray-700 md:text-justify">
                                {typeof item === 'string' ? (
                                    item.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i !== item.split('\n').length - 1 && <br />}
                                        </React.Fragment>
                                    ))
                                ) : (
                                    item
                                )}
                            </li>
                        ))}
                    </ul>
                );
            } else if (Array.isArray(content)) {
                // Render bullet list if content is a simple array
                return (
                    <ul className="pl-5 space-y-2">
                        {content.map((item, index) => (
                            <li key={index} className="text-gray-700 text-justify">{item}</li>
                        ))}
                    </ul>
                );
            } else {
                // Render simple content
                return <div className="text-gray-700">{content}</div>;
            }
        } else {
            // Render simple content
            return <div className="text-gray-700">{content}</div>;
        }
    };

    return (
        <div className={`bg-white rounded-lg shadow-lg ${className}`}>
            {/* Mobile Layout */}
            <div className="md:hidden">
                <div className="flex flex-col">
                    {/* Vertical Tabs */}
                    <div className="border-b">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`w-full px-4 py-3 text-left font-medium transition-all duration-200 border-l-4 ${activeTab === tab.id
                                        ? 'bg-yellow-50 text-gray-500 border-[#FFFF29]'
                                        : 'text-gray-600 border-transparent hover:bg-gray-50 hover:border-gray-300'
                                    } ${tabClassName}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Content */}
                    <div className={`p-4 ${contentClassName}`}>
                        {tabs.map((tab) => (
                            activeTab === tab.id && (
                                <div key={tab.id} className="animate-fadeIn">
                                    {renderContent(tab.content)}
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block">
                {/* Horizontal Tabs */}
                <div className="border-b">
                    <ul className="flex w-full">
                        {tabs.map((tab) => (
                            <li key={tab.id} className="flex-1">
                                <button
                                    className={`w-full h-full px-4 py-3 transition-colors duration-200 ${activeTab === tab.id
                                            ? 'bg-white border-t-8 border-x-8 border-[#FFFF29] text-gray-500 border-b-8 font-bold'
                                            : 'bg-gray-100 text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                                        } ${tab.id === tabs[0].id ? 'rounded-tl-lg' : ''
                                        } ${tab.id === tabs[tabs.length - 1].id ? 'rounded-tr-lg' : ''
                                        } ${tabClassName}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <span className="block text-center whitespace-nowrap overflow-hidden text-ellipsis">
                                        {tab.label}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop Content */}
                <div className={`p-6 ${contentClassName}`}>
                    {tabs.map((tab) => (
                        activeTab === tab.id && (
                            <div key={tab.id}>
                                {renderContent(tab.content)}
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DynamicalTabs;