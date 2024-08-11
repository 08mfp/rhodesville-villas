export const styles = {
    container: "bg-gray-50 dark:bg-gray-800 p-4 md:p-8 min-h-screen flex flex-col items-center",
    innerContainer: "w-full md:w-3/4",
    title: "text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8 text-center",
    subtitle: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4",
    gridContainer: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",
    card: "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md",
    cardImageContainer: "flex-shrink-0",
    cardImage: "w-16 h-16 rounded-full",
    cardContentContainer: "flex items-center space-x-4 rtl:space-x-reverse",
    cardTextContainer: "flex-1 min-w-0",
    cardTitle: "text-lg font-semibold text-gray-900 truncate dark:text-white",
    cardSubtitle: "text-base text-gray-500 truncate dark:text-gray-400",
    statusBadge: "inline-flex items-center text-sm font-medium px-3 py-1 rounded-full mt-4",
    dot: "w-3 h-3 me-1 rounded-full",

    // Status styles
    statusGreen: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    statusRed: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    dotGreen: "bg-green-500",
    dotRed: "bg-red-500",

    // Skeleton styles
    skeletonCard: "bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md animate-pulse",
    skeletonCardContentContainer: "flex items-center space-x-4 rtl:space-x-reverse",
    skeletonCardImageContainer: "flex-shrink-0",
    skeletonCardImage: "w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center",
    skeletonCardTextContainer: "flex-1 min-w-0",
    skeletonLineLarge: "h-4 bg-gray-200 rounded-full dark:bg-gray-600 w-3/4 mb-2",
    skeletonLineMedium: "h-4 bg-gray-200 rounded-full dark:bg-gray-600 w-1/2",
    skeletonLineSmall: "h-4 bg-gray-200 rounded-full dark:bg-gray-600 w-1/4 mt-4",
    skeletonGridContainer: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",

    // Error modal styles
    errorModal: "p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800",
    errorModalContent: "flex items-center",
    errorModalIcon: "flex-shrink-0 w-4 h-4 me-2",
    errorModalTitle: "text-lg font-medium",
    errorModalBody: "mt-2 mb-4 text-sm",
    errorButton: "text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
    errorDismissButton: "text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800",
};