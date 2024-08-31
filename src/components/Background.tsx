function BackgroundComponent() {
    return (
        <>
            <div className="fixed h-full w-full flex justify-center items-center -z-10">
                <img src="/public/img/background/bg_barber.png" className="fixed top-15 bg-[url('/public/img/background/bg_barber.png')] bg-no-repeat -z-10" />
            </div>
            <svg className="fixed top-100 -left-5 opacity-35 flex justify-center items-center" width="80" height="80" viewBox="0 0 42 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.107823 13.8344L13.6101 74.0564M39.2874 52.8011L-17.3527 28.288M17.6754 5.78303C21.1971 10.0374 20.6032 16.3411 16.3488 19.8628C12.0944 23.3845 5.79071 22.7905 2.26902 18.5362C-1.25267 14.2818 -0.658722 7.9781 3.59563 4.45642C7.84999 0.934727 14.1537 1.52867 17.6754 5.78303ZM-13.1374 31.2894C-9.61568 35.5437 -10.2096 41.8474 -14.464 45.3691C-18.7183 48.8908 -25.0221 48.2969 -28.5438 44.0425C-32.0654 39.7882 -31.4715 33.4844 -27.2171 29.9627C-22.9628 26.4411 -16.6591 27.035 -13.1374 31.2894Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <svg className="fixed -right-18 top-323 opacity-35" width="80" height="80" viewBox="0 0 40 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.8194 29.8639L2.92122 51.2368M27.3954 73.8671L44.177 14.4754M71.1304 46.208C67.3809 50.263 61.0541 50.5106 56.9991 46.7611C52.944 43.0116 52.6964 36.6848 56.4459 32.6298C60.1954 28.5748 66.5222 28.3272 70.5772 32.0767C74.6322 35.8262 74.8799 42.153 71.1304 46.208ZM41.7614 19.0517C38.0119 23.1067 31.6851 23.3544 27.6301 19.6049C23.5751 15.8554 23.3274 9.52855 27.0769 5.47354C30.8264 1.41853 37.1532 1.17087 41.2082 4.92037C45.2632 8.66987 45.5109 14.9967 41.7614 19.0517Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </>
    );
}

export default BackgroundComponent;