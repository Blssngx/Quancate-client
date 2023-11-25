import { useState } from 'react';

const FloatingDisclaimer: React.FC = () => {
    const [showDisclaimer, setShowDisclaimer] = useState(false);

    const toggleDisclaimer = () => {
        setShowDisclaimer(!showDisclaimer);
    };

    return (
        <div
            className="fixed bottom-0 left-0 p-2 cursor-pointer"
            onMouseEnter={toggleDisclaimer}
            onMouseLeave={toggleDisclaimer}
        >
            <div className="bg-transparent text-white p-2 rounded-half">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 299.467 299.467"
                    className="mr-1 h-6 w-6 ml-4"
                    fill="yellow"
                >
                    <g>
                        <g>
                            <path
                                d="M300.462,255.858L168.603,27.477c-3.432-5.999-9.872-9.714-16.78-9.714 c-6.902,0-13.326,3.72-16.78,9.698L2.586,256.897c-3.448,5.972-3.448,13.386,0,19.358c3.454,5.988,9.877,9.703,16.78,9.703 h264.997c10.671,0,19.358-8.697,19.358-19.374C303.715,262.591,302.534,258.751,300.462,255.858z M160.966,103.613l-3.051,104.278 h-16.671l-3.04-104.278H160.966z M149.582,251.447c-7.919,0-13.674-6.016-13.674-14.321c0-8.278,5.755-14.294,13.674-14.294 c8.061,0,13.696,5.88,13.696,14.294C163.278,245.567,157.638,251.447,149.582,251.447z"
                            />
                        </g>
                    </g>
                </svg>
            </div>
            {showDisclaimer && (
                <div className="bg-gray-800 text-white p-2 rounded-md mt-2">
                    Trading and investing in financial markets, including stocks, options, futures, and cryptocurrencies, carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade or invest, you should carefully consider your investment objectives, level of experience, and risk appetite. Only trade with money you can afford to lose.
                </div>
            )}
        </div>
    );
};

export default FloatingDisclaimer;
