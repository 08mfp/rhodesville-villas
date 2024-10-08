export const styles = {
    container: "bg-gray-50 dark:bg-gray-800 p-4 md:p-8 min-h-screen",
    title: "text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center",
    skeletonItem: "bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12 animate-pulse",
    skeletonImage: "w-full h-48 md:h-64 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center",
    skeletonImageText: "text-gray-200 dark:text-gray-600 text-xl font-semibold",
    skeletonLineLarge: "h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2",
    skeletonLineMedium: "h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4",
    skeletonLineSmall: "h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2",
    skeletonLineSmaller: "h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-2/3 mb-2",
    skeletonContainer: "py-2 px-2 mx-auto max-w-screen-l lg:py-16",
    skeletonGrid: "grid md:grid-cols-3 gap-10 md:max-w-3/4 mx-auto",
    errorModalContainer: "p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",
    errorModalHeader: "text-lg font-medium",
    errorModalBody: "mt-2 mb-4 text-sm",
    errorButton: "text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
    errorDismissButton: "text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800",
    sectionContainer: "py-2 px-2 mx-auto max-w-screen-l lg:py-16",
    sectionGrid: "grid md:grid-cols-3 gap-10 md:max-w-3/4 mx-auto",
    sectionItem: "bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-12",
    sectionImage: "w-full h-48 md:h-64 object-cover border-4 border-gray-600 dark:border-gray-300 rounded-lg shadow-lg mb-4",
    sectionTitle: "text-gray-900 dark:text-white text-xl md:text-3xl font-extrabold mb-2",
    sectionContent: "text-sm md:text-lg font-normal text-gray-500 dark:text-gray-400 mb-4",

    //map

    buttonContainer: "flex items-center justify-center py-4 md:py-8 flex-wrap",
    categoryButton: (isSelected: boolean) =>
        `text-${isSelected ? 'white' : 'gray-900'} hover:text-red-500 border ${isSelected ? 'border-blue-600 bg-blue-700' : 'border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-800'} focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-4 py-2 text-center me-3 mb-3 dark:text-${isSelected ? 'white' : 'gray-300'} dark:focus:ring-gray-800 text-sm md:text-base`,
    galleryGrid: "grid grid-cols-2 md:grid-cols-3 gap-4",
    galleryImage: "h-auto max-w-full rounded-lg",
    homeContainer: "home",
    modalOverlay: "fixed inset-0 flex items-center justify-center z-50 overflow-y-auto",
    modalContent: "relative p-4 w-full max-w-2xl max-h-full mt-24 md:mt-32",
    modalBody: "relative bg-white rounded-lg shadow dark:bg-gray-700",
    modalHeader: "flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",
    modalTitle: "text-xl font-semibold text-gray-900 dark:text-white",
    modalCloseButton: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white",
    modalCloseIcon: "w-3 h-3",
    modalDescription: "p-4 md:p-5 space-y-4 text-base leading-relaxed text-gray-500 dark:text-gray-400",
    modalFooter: "flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600",
    modalActionButton: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    heroSection: "relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat",
    heroOverlay: "absolute inset-0 bg-gray-900/75 sm:bg-gray-900/75 sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l",
    heroContentContainer: "relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-12 lg:flex lg:h-screen lg:items-center lg:text-left",
    heroTextContainer: "max-w-xl text-center lg:text-left lg:max-w-full lg:pr-16",
    heroTitle: "text-4xl font-extrabold text-white sm:text-6xl lg:text-7xl",
    heroHighlight: "block font-extrabold text-rose-500",
    heroSubtitle: "mt-4 max-w-lg text-white sm:text-xl lg:text-2xl",
    heroButtonContainer: "mt-8 flex flex-wrap gap-4 text-center lg:text-left",
    heroPrimaryButton: "block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto",
    heroSecondaryButton: "block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto",
};
