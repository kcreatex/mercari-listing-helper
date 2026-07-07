const STORAGE_KEY = "mercari-listing-helper-items";
const INVENTORY_OPTIONS_OPEN_KEY = "mercari-listing-helper-inventory-options-open";
const SETTINGS_KEY = "mercari-listing-helper-settings";
const TEMPLATES_KEY = "mercari-listing-helper-templates";
const SORTING_STORAGE_KEY = "mercari-listing-helper-destination-sorting";
const SURUGAYA_ESTIMATE_STORAGE_KEY = "mercari-listing-helper-surugaya-estimates";
const UI_STATE_KEY = "mercari-listing-helper-ui-state";
const CLOUD_LAST_SYNC_KEY = "mercari-listing-helper-cloud-last-sync";
const CLOUD_SELECTED_HOUSEHOLD_KEY = "mercari-listing-helper-selected-household";
const CLOUD_APP_STATE_LOCAL_ID = "__app_state__";
const CLOUD_APP_STATE_RECORD_TYPE = "app_state";
const ITEM_SEQUENCE_KEY = "mercari-listing-helper-item-sequence";
const LOCAL_IMAGE_REFS_KEY = "mercari-listing-helper-local-image-refs";
const LOCAL_IMAGE_DB_NAME = "mercari-listing-helper-images";
const LOCAL_IMAGE_DB_VERSION = 1;
const LOCAL_IMAGE_STORE_NAME = "images";
const AUTO_BACKUP_STORAGE_KEY = "mercari-listing-helper-auto-backups";
const AUTO_BACKUP_MAX_GENERATIONS = 10;
const SUPABASE_URL = "https://pkbgvfurouxmghujlscs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_pJVEFb8bDDTrdOaCYU3BRQ_jUnbesuv";

const form = document.querySelector("#itemForm");
const formDetails = document.querySelector(".form-details");
const formDetailSections = document.querySelectorAll(".form-details");
const recentStorageList = document.querySelector("#recentStorageList");
const recentItemsList = document.querySelector("#recentItemsList");
const recentDockTableBody = document.querySelector("#recentDockTableBody");
const recentDockMobileList = document.querySelector("#recentDockMobileList");
const recentDockEmpty = document.querySelector("#recentDockEmpty");
const openFullListButton = document.querySelector("#openFullListButton");
const openBoxSearchButton = document.querySelector("#openBoxSearchButton");
const openShippingManagementButton = document.querySelector("#openShippingManagementButton");
const completionPanel = document.querySelector("#completionPanel");
const continueSameCategoryButton = document.querySelector("#continueSameCategoryButton");
const continueSameStorageButton = document.querySelector("#continueSameStorageButton");
const goToListAfterSaveButton = document.querySelector("#goToListAfterSaveButton");
const itemIdInput = document.querySelector("#itemId");
const nameInput = document.querySelector("#name");
const listingTitleInput = document.querySelector("#listingTitle");
const toastNotification = document.querySelector("#toastNotification");
const categoryInput = document.querySelector("#category");
const conditionInput = document.querySelector("#condition");
const conditionQuickButtons = document.querySelectorAll("[data-condition-value]");
const statusInput = document.querySelector("#status");
const listingDateInput = document.querySelector("#listingDate");
const listingUrlInput = document.querySelector("#listingUrl");
const storageLocationInput = document.querySelector("#storageLocation");
const purchaseDateInput = document.querySelector("#purchaseDate");
const measurementsInput = document.querySelector("#measurements");
const shippingMethodInput = document.querySelector("#shippingMethod");
const shippingSizeField = document.querySelector("#shippingSizeField");
const shippingSizeInput = document.querySelector("#shippingSize");
const plannedPriceInput = document.querySelector("#plannedPrice");
const shippingCostField = document.querySelector("#shippingCostField");
const shippingCostInput = document.querySelector("#shippingCost");
const purchaseCostInput = document.querySelector("#purchaseCost");
const feePreview = document.querySelector("#feePreview");
const profitPreview = document.querySelector("#profitPreview");
const minimumPricePreview = document.querySelector("#minimumPricePreview");
const feePreviewClones = document.querySelectorAll("[data-fee-preview-clone]");
const profitPreviewClones = document.querySelectorAll("[data-profit-preview-clone]");
const minimumPricePreviewClones = document.querySelectorAll("[data-minimum-price-preview-clone]");
const soldFields = document.querySelector("#soldFields");
const actualSalePriceInput = document.querySelector("#actualSalePrice");
const actualShippingCostInput = document.querySelector("#actualShippingCost");
const actualFeeInput = document.querySelector("#actualFee");
const soldDateInput = document.querySelector("#soldDate");
const actualProfitPreview = document.querySelector("#actualProfitPreview");
const soldMemoInput = document.querySelector("#soldMemo");
const memoInput = document.querySelector("#memo");
const descriptionTemplateInput = document.querySelector("#descriptionTemplate");
const descriptionInput = document.querySelector("#description");
const imageInput = document.querySelector("#imageInput");
const imagePreview = document.querySelector("#imagePreview");
const removeImageButton = document.querySelector("#removeImageButton");
const formCopyItemCodeButton = document.querySelector("#formCopyItemCodeButton");
const imageProviderInput = document.querySelector("#imageProvider");
const googlePhotoImageIdInput = document.querySelector("#googlePhotoImageId");
const localImageIdInput = document.querySelector("#localImageId");
const cloudImageIdInput = document.querySelector("#cloudImageId");
const generateGooglePhotoIdButton = document.querySelector("#generateGooglePhotoIdButton");
const copyFormGooglePhotoIdButton = document.querySelector("#copyFormGooglePhotoIdButton");
const submitButton = document.querySelector("#submitButton");
const cancelEditButton = document.querySelector("#cancelEditButton");
const formTitle = document.querySelector("#formTitle");
const itemCount = document.querySelector("#itemCount");
const sideNavLinks = document.querySelectorAll(".side-nav a[data-view]");
const appDialog = document.querySelector("#appDialog");
const appDialogTitle = document.querySelector("#appDialogTitle");
const appDialogMessage = document.querySelector("#appDialogMessage");
const appDialogCancel = document.querySelector("#appDialogCancel");
const appDialogConfirm = document.querySelector("#appDialogConfirm");
const cloudPanel = document.querySelector(".cloud-panel");
const cloudStatus = document.querySelector("#cloudStatus");
const cloudLoginForm = document.querySelector("#cloudLoginForm");
const cloudEmailInput = document.querySelector("#cloudEmailInput");
const cloudPasswordInput = document.querySelector("#cloudPasswordInput");
const cloudLoginButton = document.querySelector("#cloudLoginButton");
const cloudLogoutButton = document.querySelector("#cloudLogoutButton");
const migrateToSupabaseButton = document.querySelector("#migrateToSupabaseButton");
const cloudLastSync = document.querySelector("#cloudLastSync");
const cloudSyncState = document.querySelector("#cloudSyncState");
const cloudReloadButton = document.querySelector("#cloudReloadButton");
const mobileCloudReloadButton = document.querySelector("#mobileCloudReloadButton");
const cloudFetchCount = document.querySelector("#cloudFetchCount");
const cloudSyncStatusCard = document.querySelector("#cloudSyncStatusCard");
const cloudSyncStatusText = document.querySelector("#cloudSyncStatusText");
const cloudSyncStatusNote = document.querySelector("#cloudSyncStatusNote");
const cloudSyncStatusTime = document.querySelector("#cloudSyncStatusTime");
const detectAllStorageDataButton = document.querySelector("#detectAllStorageDataButton");
const analyzeIndexedImageStoreButton = document.querySelector("#analyzeIndexedImageStoreButton");
const analyzeLocalImageRefsButton = document.querySelector("#analyzeLocalImageRefsButton");
const diagnoseRecoveredImageCandidatesButton = document.querySelector("#diagnoseRecoveredImageCandidatesButton");
const diagnoseCloudAppStateButton = document.querySelector("#diagnoseCloudAppStateButton");
const detectLocalSortingDataButton = document.querySelector("#detectLocalSortingDataButton");
const detectCloudSortingDataButton = document.querySelector("#detectCloudSortingDataButton");
const dataRecoveryResults = document.querySelector("#dataRecoveryResults");
const cloudHouseholdTools = document.querySelector("#cloudHouseholdTools");
const cloudHouseholdInput = document.querySelector("#cloudHouseholdInput");
const cloudCopyHouseholdButton = document.querySelector("#cloudCopyHouseholdButton");
const cloudJoinHouseholdButton = document.querySelector("#cloudJoinHouseholdButton");
const cloudCreateHouseholdButton = document.querySelector("#cloudCreateHouseholdButton");
const searchInput = document.querySelector("#searchInput");
const listPhotoInput = document.querySelector("#listPhotoInput");
const listUnlistedCount = document.querySelector("#listUnlistedCount");
const listSearchNeededCount = document.querySelector("#listSearchNeededCount");
const listHighProfitCount = document.querySelector("#listHighProfitCount");
const quickSearchInput = document.querySelector("#quickSearchInput");
const quickSearchResults = document.querySelector("#quickSearchResults");
const listShowAllButton = document.querySelector("#listShowAllButton");
const listInventoryOnlyButton = document.querySelector("#listInventoryOnlyButton");
const listBoxSearchButton = document.querySelector("#listBoxSearchButton");
const listShippingManagementButton = document.querySelector("#listShippingManagementButton");
const normalListModeButton = document.querySelector("#normalListModeButton");
const storageListModeButton = document.querySelector("#storageListModeButton");
const statusFilter = document.querySelector("#statusFilter");
const storageFilter = document.querySelector("#storageFilter");
const sortOrderInput = document.querySelector("#sortOrder");
const inventoryImageOnlyFilter = document.querySelector("#inventoryImageOnlyFilter");
const inventoryStorageUnsetFilter = document.querySelector("#inventoryStorageUnsetFilter");
const listViewButton = document.querySelector("#listViewButton");
const cardViewButton = document.querySelector("#cardViewButton");
const viewToggle = document.querySelector(".view-toggle");
const inventoryDisplaySection = document.querySelector(".inventory-display-section");
const inventoryOptionSummary = document.querySelector("#inventoryOptionSummary");
const inventoryFilterSummary = document.querySelector("#inventoryFilterSummary");
const inventoryResultCount = document.querySelector("#inventoryResultCount");
const inventoryActiveFilterBar = document.querySelector("#inventoryActiveFilterBar");
const inventoryStorageQuickFilter = document.querySelector("#inventoryStorageQuickFilter");
const scrollTopButton = document.querySelector("#scrollTopButton");
const exportButton = document.querySelector("#exportButton");
const importButton = document.querySelector("#importButton");
const exportButtonTop = document.querySelector("#exportButtonTop");
const importButtonTop = document.querySelector("#importButtonTop");
const createManualBackupButton = document.querySelector("#createManualBackupButton");
const backupMemoInput = document.querySelector("#backupMemoInput");
const backupList = document.querySelector("#backupList");
const itemCsvExportButton = document.querySelector("#itemCsvExportButton");
const importSourceInput = document.querySelector("#importSource");
const importTextInput = document.querySelector("#importText");
const parseImportButton = document.querySelector("#parseImportButton");
const importResultSummary = document.querySelector("#importResultSummary");
const importVisibleCount = document.querySelector("#importVisibleCount");
const importResultList = document.querySelector("#importResultList");
const fillBlankImportFieldsButton = document.querySelector("#fillBlankImportFieldsButton");
const applyImportMatchesButton = document.querySelector("#applyImportMatchesButton");
const registerImportNewItemsButton = document.querySelector("#registerImportNewItemsButton");
const addImportSortingButton = document.querySelector("#addImportSortingButton");
const surugayaEstimateDateInput = document.querySelector("#surugayaEstimateDate");
const surugayaEstimateTextInput = document.querySelector("#surugayaEstimateText");
const parseSurugayaEstimateButton = document.querySelector("#parseSurugayaEstimateButton");
const saveSurugayaEstimateButton = document.querySelector("#saveSurugayaEstimateButton");
const restoreSurugayaEstimateOrderButton = document.querySelector("#restoreSurugayaEstimateOrderButton");
const createSurugayaShippingListButton = document.querySelector("#createSurugayaShippingListButton");
const createSurugayaNoSendListButton = document.querySelector("#createSurugayaNoSendListButton");
const surugayaEstimateSummary = document.querySelector("#surugayaEstimateSummary");
const surugayaEstimateStats = document.querySelector("#surugayaEstimateStats");
const surugayaEstimateList = document.querySelector("#surugayaEstimateList");
const surugayaShippingListOutput = document.querySelector("#surugayaShippingListOutput");
const backupControlsTop = document.querySelector(".backup-controls-top");
const importFileInput = document.querySelector("#importFileInput");
const tableWrap = document.querySelector("#tableWrap");
const compactTableGrid = document.querySelector("#compactTableGrid");
const storageLocationView = document.querySelector("#storageLocationView");
const inventoryShelfList = document.querySelector("#inventoryShelfList");
const mobileCardList = document.querySelector("#mobileCardList");
const emptyState = document.querySelector("#emptyState");
const emptyRegisterButton = document.querySelector("#emptyRegisterButton");
const itemTableBody = document.querySelector("#itemTableBody");
const dashboardMonthlyProfit = document.querySelector("#dashboardMonthlyProfit");
const dashboardTotalProfit = document.querySelector("#dashboardTotalProfit");
const dashboardMonthlySoldCount = document.querySelector("#dashboardMonthlySoldCount");
const dashboardTotalSoldCount = document.querySelector("#dashboardTotalSoldCount");
const dashboardHeroTotalProfit = document.querySelector("#dashboardHeroTotalProfit");
const dashboardHeroUnlistedCount = document.querySelector("#dashboardHeroUnlistedCount");
const dashboardHeroShippingWaitCount = document.querySelector("#dashboardHeroShippingWaitCount");
const dashboardHeroBuriedValue = document.querySelector("#dashboardHeroBuriedValue");
const mobileAssetItemCount = document.querySelector("#mobileAssetItemCount");
const mobileAssetStorageCount = document.querySelector("#mobileAssetStorageCount");
const mobileAssetProjectedProfit = document.querySelector("#mobileAssetProjectedProfit");
const mobileAssetTotalProfit = document.querySelector("#mobileAssetTotalProfit");
const mobileAssetMonthlyProfit = document.querySelector("#mobileAssetMonthlyProfit");
const mobileAssetSoldCount = document.querySelector("#mobileAssetSoldCount");
const mobileAssetMonthlySoldCount = document.querySelector("#mobileAssetMonthlySoldCount");
const analysisSummaryUnlistedCount = document.querySelector("#analysisSummaryUnlistedCount");
const analysisSummaryListedCount = document.querySelector("#analysisSummaryListedCount");
const analysisSummaryInputIssueCount = document.querySelector("#analysisSummaryInputIssueCount");
const analysisInputIssueCount = document.querySelector("#analysisInputIssueCount");
const analysisInputIssueItem = document.querySelector("#analysisInputIssueItem");
const analysisInputIssueText = document.querySelector("#analysisInputIssueText");
const analysisInputIssueEditButton = document.querySelector("#analysisInputIssueEditButton");
const todayCommandList = document.querySelector("#todayCommandList");
const todayBuriedSummary = document.querySelector("#todayBuriedSummary");
const todayBuriedButton = document.querySelector("#todayBuriedButton");
const destinationProfitSummary = document.querySelector("#destinationProfitSummary");
const destinationProfitButton = document.querySelector("#destinationProfitButton");
const dashboardTopProfitAmount = document.querySelector("#dashboardTopProfitAmount");
const dashboardTopProfitRate = document.querySelector("#dashboardTopProfitRate");
const dashboardTopCategory = document.querySelector("#dashboardTopCategory");
const dashboardTopStorage = document.querySelector("#dashboardTopStorage");
const dashboardLongInventoryCount = document.querySelector("#dashboardLongInventoryCount");
const dashboardSearchCount = document.querySelector("#dashboardSearchCount");
const dashboardBuriedTreasureTop = document.querySelector("#dashboardBuriedTreasureTop");
const dashboardInventoryValueTop = document.querySelector("#dashboardInventoryValueTop");
const dashboardUnlistedTreasureTop = document.querySelector("#dashboardUnlistedTreasureTop");
const missingStorageCount = document.querySelector("#missingStorageCount");
const missingPriceCount = document.querySelector("#missingPriceCount");
const missingMinimumPriceCount = document.querySelector("#missingMinimumPriceCount");
const missingCategoryCount = document.querySelector("#missingCategoryCount");
const missingConditionCount = document.querySelector("#missingConditionCount");
const missingImageCount = document.querySelector("#missingImageCount");
const missingDescriptionCount = document.querySelector("#missingDescriptionCount");
const toggleInputIssueButton = document.querySelector("#toggleInputIssueButton");
const inputIssueList = document.querySelector("#inputIssueList");
const toggleAnalysisButton = document.querySelector("#toggleAnalysisButton");
const analysisPanel = document.querySelector("#analysisPanel");
const excavationExpectedRankingList = document.querySelector("#excavationExpectedRankingList");
const sortingPriorityList = document.querySelector("#sortingPriorityList");
const shippingProfitPriorityList = document.querySelector("#shippingProfitPriorityList");
const excavationRankingList = document.querySelector("#excavationRankingList");
const storageReportSortInput = document.querySelector("#storageReportSort");
const storageReportList = document.querySelector("#storageReportList");
const toggleUnlistedTreasureButton = document.querySelector("#toggleUnlistedTreasureButton");
const unlistedTreasurePanel = document.querySelector("#unlistedTreasurePanel");
const toggleBuriedTreasureButton = document.querySelector("#toggleBuriedTreasureButton");
const buriedTreasurePanel = document.querySelector("#buriedTreasurePanel");
const buriedTreasureRankingList = document.querySelector("#buriedTreasureRankingList");
const inventoryValueRankingList = document.querySelector("#inventoryValueRankingList");
const unlistedTreasureRankingList = document.querySelector("#unlistedTreasureRankingList");
const soldEmptyState = document.querySelector("#soldEmptyState");
const soldTableWrap = document.querySelector("#soldTableWrap");
const soldTableBody = document.querySelector("#soldTableBody");
const soldSortInput = document.querySelector("#soldSort");
const totalProfit = document.querySelector("#totalProfit");
const totalSoldCount = document.querySelector("#totalSoldCount");
const monthlyProfit = document.querySelector("#monthlyProfit");
const monthlySoldCount = document.querySelector("#monthlySoldCount");
const toggleMonthlyProfitButton = document.querySelector("#toggleMonthlyProfitButton");
const monthlyProfitPanel = document.querySelector("#monthlyProfitPanel");
const monthlyProfitList = document.querySelector("#monthlyProfitList");
const profitRankingList = document.querySelector("#profitRankingList");
const profitAmountRankingList = document.querySelector("#profitAmountRankingList");
const profitRateRankingList = document.querySelector("#profitRateRankingList");
const categoryProfitRankingList = document.querySelector("#categoryProfitRankingList");
const storageProfitRankingList = document.querySelector("#storageProfitRankingList");
const sortingFormDrawer = document.querySelector("#sortingFormDrawer");
const sortingForm = document.querySelector("#sortingForm");
const sortingIdInput = document.querySelector("#sortingId");
const sortingNameInput = document.querySelector("#sortingName");
const sortingGenreInput = document.querySelector("#sortingGenre");
const sortingQuantityInput = document.querySelector("#sortingQuantity");
const sortingStorageLocationInput = document.querySelector("#sortingStorageLocation");
const sortingDestinationInput = document.querySelector("#sortingDestination");
const sortingStatusInput = document.querySelector("#sortingStatus");
const sortingShippingStatusInput = document.querySelector("#sortingShippingStatus");
const sortingBoxNumberInput = document.querySelector("#sortingBoxNumber");
const sortingImageInput = document.querySelector("#sortingImageInput");
const sortingImagePreview = document.querySelector("#sortingImagePreview");
const sortingRemoveImageButton = document.querySelector("#sortingRemoveImageButton");
const sortingImageProviderInput = document.querySelector("#sortingImageProvider");
const sortingGooglePhotoImageIdInput = document.querySelector("#sortingGooglePhotoImageId");
const sortingLocalImageIdInput = document.querySelector("#sortingLocalImageId");
const sortingCloudImageIdInput = document.querySelector("#sortingCloudImageId");
const sortingMercariPriceInput = document.querySelector("#sortingMercariPrice");
const sortingYahooPriceInput = document.querySelector("#sortingYahooPrice");
const sortingSurugayaPriceInput = document.querySelector("#sortingSurugayaPrice");
const sortingRyobanPriceInput = document.querySelector("#sortingRyobanPrice");
const sortingEcoRingPriceInput = document.querySelector("#sortingEcoRingPrice");
const sortingClothesPriceInput = document.querySelector("#sortingClothesPrice");
const sortingOtherPriceInput = document.querySelector("#sortingOtherPrice");
const sortingPriceGrid = document.querySelector("#sortingPriceGrid");
const sortingMemoInput = document.querySelector("#sortingMemo");
const sortingSubmitButton = document.querySelector("#sortingSubmitButton");
const sortingCancelButton = document.querySelector("#sortingCancelButton");
const sortingCsvButton = document.querySelector("#sortingCsvButton");
const sortingDestinationFilter = document.querySelector("#sortingDestinationFilter");
const sortingStatusFilter = document.querySelector("#sortingStatusFilter");
const sortingGenreFilter = document.querySelector("#sortingGenreFilter");
const sortingBoxSearchInput = document.querySelector("#sortingBoxSearch");
const sortingItemSearchInput = document.querySelector("#sortingItemSearch");
const sortingOrderInput = document.querySelector("#sortingOrder");
const sortingDensityButtons = document.querySelectorAll("[data-sorting-density]");
const sortingImageOnlyFilter = document.querySelector("#sortingImageOnlyFilter");
const sortingStorageUnsetFilter = document.querySelector("#sortingStorageUnsetFilter");
const sortingShippingModeButton = document.querySelector("#sortingShippingModeButton");
const sortingResultCount = document.querySelector("#sortingResultCount");
const sortingActiveFilterBar = document.querySelector("#sortingActiveFilterBar");
const sortingStorageQuickFilter = document.querySelector("#sortingStorageQuickFilter");
const sortingSummaryGrid = document.querySelector("#sortingSummaryGrid");
const sortingWorkCardList = document.querySelector("#sortingWorkCardList");
const sortingShippingRecommendation = document.querySelector("#sortingShippingRecommendation");
const sortingRecommendationTitle = document.querySelector("#sortingRecommendationTitle");
const sortingRecommendationMeta = document.querySelector("#sortingRecommendationMeta");
const sortingShippingSummary = document.querySelector("#sortingShippingSummary");
const sortingShippingPlannedCount = document.querySelector("#sortingShippingPlannedCount");
const sortingShippingPlannedTotal = document.querySelector("#sortingShippingPlannedTotal");
const sortingShippingCheckedCount = document.querySelector("#sortingShippingCheckedCount");
const shippingDashboardGrid = document.querySelector("#shippingDashboardGrid");
const shippingPriorityList = document.querySelector("#shippingPriorityList");
const analysisShippingPriorityList = document.querySelector("#analysisShippingPriorityList");
const shippingCompletedList = document.querySelector("#shippingCompletedList");
const analysisShippingCompletedList = document.querySelector("#analysisShippingCompletedList");
const shippingManagementStatusFilter = document.querySelector("#shippingManagementStatusFilter");
const shippingManagementList = document.querySelector("#shippingManagementList");
const boxSearchList = document.querySelector("#boxSearchList");
const storageSearchLocationList = document.querySelector("#storageSearchLocationList");
const togglePackingListButton = document.querySelector("#togglePackingListButton");
const packingListCsvButton = document.querySelector("#packingListCsvButton");
const packingListPanel = document.querySelector("#packingListPanel");
const packingList = document.querySelector("#packingList");
const sortingEmptyState = document.querySelector("#sortingEmptyState");
const sortingTableWrap = document.querySelector("#sortingTableWrap");
const sortingTableBody = document.querySelector("#sortingTableBody");
const categorySettingsList = document.querySelector("#categorySettingsList");
const categorySettingsCount = document.querySelector("#categorySettingsCount");
const toggleCategoryAddButton = document.querySelector("#toggleCategoryAddButton");
const categoryAddRow = document.querySelector("#categoryAddRow");
const newCategoryNameInput = document.querySelector("#newCategoryName");
const addCategoryButton = document.querySelector("#addCategoryButton");
const shippingSettingsList = document.querySelector("#shippingSettingsList");
const shippingSettingsCount = document.querySelector("#shippingSettingsCount");
const toggleShippingAddButton = document.querySelector("#toggleShippingAddButton");
const shippingAddRow = document.querySelector("#shippingAddRow");
const newShippingNameInput = document.querySelector("#newShippingName");
const newShippingCostInput = document.querySelector("#newShippingCost");
const addShippingMethodButton = document.querySelector("#addShippingMethodButton");
const appraisalSettingsList = document.querySelector("#appraisalSettingsList");
const appraisalSettingsCount = document.querySelector("#appraisalSettingsCount");
const toggleAppraisalAddButton = document.querySelector("#toggleAppraisalAddButton");
const appraisalAddRow = document.querySelector("#appraisalAddRow");
const newAppraisalNameInput = document.querySelector("#newAppraisalName");
const addAppraisalButton = document.querySelector("#addAppraisalButton");
const resetAppraisalButton = document.querySelector("#resetAppraisalButton");
const templateSettingsList = document.querySelector("#templateSettingsList");
const templateSettingsCount = document.querySelector("#templateSettingsCount");
const templateSettingsUsageCount = document.querySelector("#templateSettingsUsageCount");
const toggleTemplateAddButton = document.querySelector("#toggleTemplateAddButton");
const templateAddRow = document.querySelector("#templateAddRow");
const newTemplateNameInput = document.querySelector("#newTemplateName");
const newTemplateContentInput = document.querySelector("#newTemplateContent");
const addTemplateButton = document.querySelector("#addTemplateButton");
const storageSettingsList = document.querySelector("#storageSettingsList");
const storageSettingsCount = document.querySelector("#storageSettingsCount");
const storageSettingsUsageCount = document.querySelector("#storageSettingsUsageCount");
const toggleStorageAddButton = document.querySelector("#toggleStorageAddButton");
const storageAddRow = document.querySelector("#storageAddRow");
const newStorageNameInput = document.querySelector("#newStorageName");
const addStorageButton = document.querySelector("#addStorageButton");
const saveSettingsButton = document.querySelector("#saveSettingsButton");
const settingsSummaryItems = document.querySelector("#settingsSummaryItems");
const settingsSummaryCategories = document.querySelector("#settingsSummaryCategories");
const settingsSummaryStorage = document.querySelector("#settingsSummaryStorage");
const settingsSummaryTemplates = document.querySelector("#settingsSummaryTemplates");
const settingsSummarySync = document.querySelector("#settingsSummarySync");
const settingsSummaryStorageSize = document.querySelector("#settingsSummaryStorageSize");
const categorySettingsUsageCount = document.querySelector("#categorySettingsUsageCount");
const shippingSettingsUsageCount = document.querySelector("#shippingSettingsUsageCount");
const categoryUnusedInsight = document.querySelector("#categoryUnusedInsight");
const storageProfitInsight = document.querySelector("#storageProfitInsight");
const shippingUsageInsight = document.querySelector("#shippingUsageInsight");
const resetCategoriesButton = document.querySelector("#resetCategoriesButton");
const resetShippingButton = document.querySelector("#resetShippingButton");
const resetTemplatesButton = document.querySelector("#resetTemplatesButton");
const resetStorageButton = document.querySelector("#resetStorageButton");
const descriptionModal = document.querySelector("#descriptionModal");
const descriptionModalItemTitle = document.querySelector("#descriptionModalItemTitle");
const descriptionModalContent = document.querySelector("#descriptionModalContent");
const copyDescriptionModalButton = document.querySelector("#copyDescriptionModalButton");
const closeDescriptionModalButton = document.querySelector("#closeDescriptionModalButton");
const closeDescriptionModalFooterButton = document.querySelector("#closeDescriptionModalFooterButton");
const detailModal = document.querySelector("#detailModal");
const detailModalContent = document.querySelector("#detailModalContent");
const copyDetailTitleButton = document.querySelector("#copyDetailTitleButton");
const copyDetailDescriptionButton = document.querySelector("#copyDetailDescriptionButton");
const copyDetailItemIdButton = document.querySelector("#copyDetailItemIdButton");
const copyGooglePhotoIdButton = document.querySelector("#copyGooglePhotoIdButton");
const copyGooglePhotoTagButton = document.querySelector("#copyGooglePhotoTagButton");
const copyMercariUrlButton = document.querySelector("#copyMercariUrlButton");
const prepareRelistButton = document.querySelector("#prepareRelistButton");
const deleteDetailItemButton = document.querySelector("#deleteDetailItemButton");
const editDetailItemButton = document.querySelector("#editDetailItemButton");
const changeDetailLocalPhotoButton = document.querySelector("#changeDetailLocalPhotoButton");
const removeDetailLocalPhotoButton = document.querySelector("#removeDetailLocalPhotoButton");
const closeDetailModalButton = document.querySelector("#closeDetailModalButton");
const previousDetailItemButton = document.querySelector("#previousDetailItemButton");
const nextDetailItemButton = document.querySelector("#nextDetailItemButton");
const sortingDetailModal = document.querySelector("#sortingDetailModal");
const sortingDetailContent = document.querySelector("#sortingDetailContent");
const closeSortingDetailModalButton = document.querySelector("#closeSortingDetailModalButton");
const editSortingDetailButton = document.querySelector("#editSortingDetailButton");
const deleteSortingDetailButton = document.querySelector("#deleteSortingDetailButton");

let items = loadItems();
let sortingItems;
let settings;
let descriptionTemplates;
let appraisalPriceInputMap = new Map();
let currentDescriptionModalText = "";
let currentDetailItem = null;
let returnToDetailAfterEditId = "";
let currentSortingDetailItem = null;
let openMonthlyProfitKey = "";
let currentImageData = "";
let currentSortingImageData = "";
let localImageDbPromise = null;
const localImageCache = new Map();
let uiState = loadUiState();
let pendingFormItemCode = "";
let isImageProcessing = false;
let lastSavedShortcut = null;
let isFormDirty = false;
let currentView = uiState.currentView || "form";
let itemListViewMode = uiState.inventory?.viewMode || "list";
let itemListTargetMode = uiState.inventory?.targetMode || "inventory";
let itemListGroupMode = uiState.inventory?.groupMode || "normal";
let inventoryImageOnly = Boolean(uiState.inventory?.imageOnly);
let inventoryStorageUnsetOnly = Boolean(uiState.inventory?.storageUnsetOnly);
let inventoryOptionsCloseTimer = null;
let selectedStorageGroup = "";
let supabaseClient = null;
let supabaseSession = null;
let cloudUser = null;
let cloudHouseholdId = "";
let cloudHouseholdMemberIds = [];
let cloudUserHouseholdIds = [];
let isCloudReady = false;
let hasCloudSaveWarning = false;
let isApplyingCloudSnapshot = false;
let lastCloudReloadRequestAt = 0;
let cloudSyncStatusKind = "logged-out";
let sortingRecoveryCandidates = [];
let indexedImageRecoveryCandidate = null;
let localImageRefsRecoveryCandidate = null;
let recoveredImageCandidateDiagnostics = [];
let importParsedItems = [];
let surugayaEstimateRows = [];
let savedSurugayaEstimates = loadSurugayaEstimates();
let lastCloudSaveBackupAt = 0;
let isSettingsDirty = false;
let toastTimer = null;
let isSortingShippingMode = false;
let pendingPhotoItemId = "";
let pendingPhotoCollection = "items";
let pendingPhotoMode = "main";
let pendingImportReferenceId = "";
let pendingReferenceCategory = "";
let sortingImageOnly = Boolean(uiState.sorting?.imageOnly);
let sortingStorageUnsetOnly = Boolean(uiState.sorting?.storageUnsetOnly);
let sortingDensityMode = uiState.sorting?.densityMode || "compact";
const sortingShippingCheckedIds = new Set();

function isMobileViewport() {
  return window.matchMedia("(max-width: 700px)").matches;
}

function normalizeViewForDevice(view) {
  if (isMobileViewport() && view === "import") {
    return "list";
  }

  return view;
}

function loadUiState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(UI_STATE_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    console.warn("UI状態読み込み失敗:", error);
    return {};
  }
}

function getDetailsOpenState(selector) {
  return Array.from(document.querySelectorAll(selector)).reduce((state, details, index) => {
    const key = details.id || details.dataset.uiStateKey || `${details.className || details.tagName}-${index}`;
    state[key] = Boolean(details.open);
    return state;
  }, {});
}

function applyDetailsOpenState(selector, state = {}) {
  document.querySelectorAll(selector).forEach((details, index) => {
    const key = details.id || details.dataset.uiStateKey || `${details.className || details.tagName}-${index}`;
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      details.open = Boolean(state[key]);
    }
  });
}

function collectUiStatePatch() {
  return {
    currentView,
    inventory: {
      search: searchInput?.value || "",
      status: statusFilter?.value || "",
      storage: storageFilter?.value || "",
      sortOrder: sortOrderInput?.value || "newest",
      viewMode: itemListViewMode,
      targetMode: itemListTargetMode,
      groupMode: itemListGroupMode,
      imageOnly: inventoryImageOnly,
      storageUnsetOnly: inventoryStorageUnsetOnly,
      selectedStorageGroup,
    },
    sorting: {
      search: sortingItemSearchInput?.value || "",
      order: sortingOrderInput?.value || "offerDesc",
      destination: sortingDestinationFilter?.value || "",
      status: sortingStatusFilter?.value || "",
      genre: sortingGenreFilter?.value || "",
      boxSearch: sortingBoxSearchInput?.value || "",
      shippingMode: isSortingShippingMode,
      imageOnly: sortingImageOnly,
      storageUnsetOnly: sortingStorageUnsetOnly,
      densityMode: sortingDensityMode,
    },
    import: {
      filter: importResultFilter,
      hideCompleted: importCompletedDisplay === "hide",
      imageOnly: importImageOnly,
      storageUnsetOnly: importStorageUnsetOnly,
      selectedIds: Array.from(selectedImportResultIds),
      completedIds: Array.from(completedImportResultIds),
      scrollTop: importResultList?.scrollTop || 0,
    },
    scroll: {
      list: document.body.classList.contains("work-tab-list") ? getCurrentScrollTop() : (uiState.scroll?.list || 0),
      sorting: document.body.classList.contains("work-tab-sorting") ? getCurrentScrollTop() : (uiState.scroll?.sorting || 0),
    },
    accordions: getDetailsOpenState("details.settings-accordion, details.form-details"),
  };
}

function saveUiState() {
  uiState = {
    ...uiState,
    ...collectUiStatePatch(),
    savedAt: new Date().toISOString(),
  };
  delete uiState.scrollY;
  try {
    localStorage.setItem(UI_STATE_KEY, JSON.stringify(uiState));
  } catch (error) {
    console.warn("UI状態保存失敗:", error);
  }
}

function scheduleSaveUiState() {
  window.clearTimeout(scheduleSaveUiState.timer);
  scheduleSaveUiState.timer = window.setTimeout(saveUiState, 120);
}

function restoreUiControlValues() {
  if (searchInput && uiState.inventory?.search) searchInput.value = uiState.inventory.search;
  if (statusFilter && uiState.inventory?.status !== undefined) statusFilter.value = uiState.inventory.status;
  if (storageFilter && uiState.inventory?.storage !== undefined) storageFilter.value = uiState.inventory.storage;
  if (sortOrderInput && uiState.inventory?.sortOrder) sortOrderInput.value = uiState.inventory.sortOrder;
  if (inventoryImageOnlyFilter) inventoryImageOnlyFilter.checked = inventoryImageOnly;
  if (inventoryStorageUnsetFilter) inventoryStorageUnsetFilter.checked = inventoryStorageUnsetOnly;
  if (sortingItemSearchInput && uiState.sorting?.search) sortingItemSearchInput.value = uiState.sorting.search;
  if (sortingOrderInput && uiState.sorting?.order) sortingOrderInput.value = uiState.sorting.order;
  if (sortingDestinationFilter && uiState.sorting?.destination !== undefined) sortingDestinationFilter.value = uiState.sorting.destination;
  if (sortingStatusFilter && uiState.sorting?.status !== undefined) sortingStatusFilter.value = uiState.sorting.status;
  if (sortingGenreFilter && uiState.sorting?.genre !== undefined) sortingGenreFilter.value = uiState.sorting.genre;
  if (sortingBoxSearchInput && uiState.sorting?.boxSearch) sortingBoxSearchInput.value = uiState.sorting.boxSearch;
  if (sortingImageOnlyFilter) sortingImageOnlyFilter.checked = sortingImageOnly;
  if (sortingStorageUnsetFilter) sortingStorageUnsetFilter.checked = sortingStorageUnsetOnly;
  isSortingShippingMode = Boolean(uiState.sorting?.shippingMode);
}

function restoreUiAfterInitialRender() {
  applyDetailsOpenState("details.settings-accordion, details.form-details", uiState.accordions);
  if (importResultList && Number.isFinite(Number(uiState.import?.scrollTop))) {
    importResultList.scrollTop = Number(uiState.import.scrollTop);
  }
  requestAnimationFrame(() => {
    if (document.body.classList.contains("work-tab-list") && Number(uiState.scroll?.list) > 0) {
      window.scrollTo({ top: Number(uiState.scroll.list), left: 0, behavior: "auto" });
    }
    if (document.body.classList.contains("work-tab-sorting") && Number(uiState.scroll?.sorting) > 0) {
      window.scrollTo({ top: Number(uiState.scroll.sorting), left: 0, behavior: "auto" });
    }
    updateScrollTopButton();
  });
}

const SCROLL_TOP_BUTTON_THRESHOLD = 300;

function getCurrentScrollTop() {
  return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function getCurrentTopAnchor() {
  if (document.body.classList.contains("work-tab-list")) {
    return document.querySelector("#listTitle");
  }

  if (document.body.classList.contains("work-tab-sorting")) {
    return document.querySelector("#sortingListTitle") || document.querySelector("#sortingTitle");
  }

  if (document.body.classList.contains("work-tab-box")) {
    return document.querySelector("#boxSearchTitle");
  }

  if (document.body.classList.contains("shipping-view")) {
    return document.querySelector("#shippingManagementTitle");
  }

  return document.querySelector("main") || document.body;
}

function canShowScrollTopButton() {
  return (
    document.body.classList.contains("work-tab-list") ||
    document.body.classList.contains("work-tab-sorting") ||
    document.body.classList.contains("work-tab-box") ||
    document.body.classList.contains("shipping-view")
  );
}

function updateScrollTopButton() {
  if (!scrollTopButton) {
    return;
  }

  const shouldShow = canShowScrollTopButton() && getCurrentScrollTop() > SCROLL_TOP_BUTTON_THRESHOLD;
  scrollTopButton.classList.toggle("hidden", !shouldShow);
}

function scrollCurrentViewToTop(behavior = "smooth") {
  const anchor = getCurrentTopAnchor();
  if (anchor) {
    anchor.scrollIntoView({ behavior, block: "start" });
  } else {
    window.scrollTo({ top: 0, left: 0, behavior });
  }
  window.setTimeout(updateScrollTopButton, behavior === "smooth" ? 220 : 0);
}

function closeTransientWorkUi() {
  closeItemActionMenus?.();
  closeSortingActionMenus?.();
  closeSortingInlineEditor?.();
  document.querySelectorAll(".row-action-menu[open], .detail-more-action-menu[open]").forEach((menu) => {
    menu.open = false;
  });
}

function normalizePageLayoutState() {
  if (document.body.classList.contains("modal-scroll-locked")) {
    document.body.classList.remove("modal-scroll-locked");
  }
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
  document.body.style.top = "";
  document.body.style.width = "";
  document.body.style.transform = "";
  lockedScrollY = 0;
}

function stabilizeAfterViewSwitch(view) {
  closeTransientWorkUi();
  normalizePageLayoutState();

  if (view === "box" || view === "shipping") {
    document.querySelectorAll(".sorting-filter-panel[open]").forEach((details) => {
      details.open = false;
    });
  }

  requestAnimationFrame(() => {
    updateScrollTopButton();
    positionOpenItemActionMenus?.();
    if (view === "box" || view === "shipping") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
    requestAnimationFrame(updateScrollTopButton);
  });
}

function getInventorySortSummary() {
  const labels = {
    newest: "新しい順",
    oldest: "古い順",
    title: "商品名順",
    storageLocation: "保管場所順",
    profit: "利益順",
    plannedPrice: "価格順",
  };

  return labels[sortOrderInput?.value] || "新しい順";
}

function updateInventoryOptionSummary() {
  if (!inventoryOptionSummary) {
    return;
  }

  const groupLabel = itemListGroupMode === "storage" ? "保管場所別" : "通常一覧";
  const targetLabel = itemListTargetMode === "all" ? "全商品" : "在庫のみ";
  const viewLabel = itemListViewMode === "card" ? "カード" : "一覧";
  inventoryOptionSummary.textContent = `${groupLabel}・${targetLabel}・${getInventorySortSummary()}・${viewLabel}`;
}

function updateInventoryFilterSummary() {
  if (inventoryFilterSummary) {
    const labels = {
      "": "ステータスで絞る",
      highProfit: "高利益候補",
    };
    inventoryFilterSummary.textContent = labels[statusFilter?.value] || statusFilter?.value || "ステータスで絞る";
  }
}

function restoreInventoryOptionsOpenState() {
  if (!inventoryDisplaySection) {
    return;
  }

  inventoryDisplaySection.open = false;
  localStorage.setItem(INVENTORY_OPTIONS_OPEN_KEY, "false");
  updateInventoryOptionSummary();
  updateInventoryFilterSummary();
}

const DEFAULT_STATUS = "未出品";
const MERCARI_FEE_RATE = 0.1;
const MIN_PROFIT_RATE_COST = 1;
const MIN_PROFIT_RATE_PROFIT = 500;
const BACKUP_VERSION = 1;
const SORTING_UNDECIDED_DESTINATION = "未定";
const SORTING_STATUSES = ["未確認", "査定中", "出品予定", "送付待ち", "発送済み", "完了", "保留"];
const SHIPPING_STATUSES = ["未仕分け", "仕分け済", "箱詰め済", "発送済", "査定待ち", "入金済", "完了"];
const SHIPPING_WAITING_STATUSES = ["仕分け済", "箱詰め済"];
const SHIPPING_COMPLETED_STATUSES = ["発送済", "査定待ち", "入金済"];
const PACKING_LIST_STATUSES = ["仕分け済", "箱詰め済", "発送済"];
const CONDITION_OPTIONS = [
  "新品、未使用",
  "未使用に近い",
  "目立った傷や汚れなし",
  "やや傷や汚れあり",
  "傷や汚れあり",
  "全体的に状態が悪い",
];
const DEFAULT_STORAGE_LOCATIONS = [
  "未設定",
  "押し入れ",
  "黒い箱A",
  "かごA",
  "棚",
  "クローゼット",
  "実家",
  "その他",
];
sortingItems = loadSortingItems();
const DEFAULT_SETTINGS = {
  categories: [
    "おもちゃ・ホビー・グッズ",
    "本・音楽・ゲーム",
    "衣類",
    "雑貨",
    "アクセサリー",
    "家電・スマホ",
    "コスメ・美容",
    "スポーツ・レジャー",
    "ハンドメイド",
    "その他",
  ],
  shippingMethods: [
    { name: "ネコポス", cost: 210 },
    { name: "宅急便コンパクト", cost: 450 },
    { name: "宅急便 60サイズ", cost: 750 },
    { name: "宅急便 80サイズ", cost: 850 },
    { name: "宅急便 100サイズ", cost: 1050 },
    { name: "宅急便 120サイズ", cost: 1200 },
    { name: "宅急便 140サイズ", cost: 1450 },
    { name: "宅急便 160サイズ", cost: 1700 },
    { name: "宅急便 180サイズ", cost: 2100 },
    { name: "宅急便 200サイズ", cost: 2500 },
    { name: "ゆうパケットポストmini", cost: 160 },
    { name: "ゆうパケットポスト", cost: 215 },
    { name: "ゆうパケット", cost: 230 },
    { name: "ゆうパケットプラス", cost: 455 },
    { name: "ゆうパック 60サイズ", cost: 750 },
    { name: "ゆうパック 80サイズ", cost: 870 },
    { name: "ゆうパック 100サイズ", cost: 1070 },
    { name: "ゆうパック 120サイズ", cost: 1200 },
    { name: "ゆうパック 140サイズ", cost: 1450 },
    { name: "ゆうパック 160サイズ", cost: 1700 },
    { name: "定形外郵便", cost: 0 },
    { name: "その他", cost: 0 },
  ],
  storageLocations: DEFAULT_STORAGE_LOCATIONS,
  appraisalSources: [
    { id: "mercari", field: "mercariPrice", name: "メルカリ" },
    { id: "yahoo", field: "yahooPrice", name: "ヤフオク" },
    { id: "surugaya", field: "surugayaPrice", name: "駿河屋" },
    { id: "ryoban", field: "ryobanPrice", name: "良盤ディスク" },
    { id: "ecoRing", field: "ecoRingPrice", name: "エコリング" },
    { id: "clothes", field: "clothesPrice", name: "服買取" },
    { id: "mandarake", field: "mandarakePrice", name: "まんだらけ" },
    { id: "disposal", field: "disposalPrice", name: "処分" },
    { id: "other", field: "otherPrice", name: "その他" },
  ],
};
const DEFAULT_TEMPLATES = [
  {
    id: "default-plush",
    name: "ぬいぐるみ",
    content: "閲覧ありがとうございます。\n\n自宅保管品になります。\n\n状態は画像をご確認ください。\n\n気になる点がありましたらお気軽にコメントください。",
    categoryHint: "おもちゃ・ホビー・グッズ",
  },
  {
    id: "default-clothes",
    name: "古着",
    content: "閲覧ありがとうございます。\n\n中古品になりますのでご理解いただける方のみお願いいたします。\n\n状態は画像をご確認ください。",
    categoryHint: "衣類",
  },
  {
    id: "default-goods",
    name: "雑貨",
    content: "閲覧ありがとうございます。\n\n自宅保管品になります。\n\n状態は画像をご確認ください。\n\nよろしくお願いいたします。",
    categoryHint: "雑貨",
  },
];
const SHIPPING_SIZE_RATES = {
  "宅急便": {
    "60": 750,
    "80": 850,
    "100": 1050,
    "120": 1200,
    "140": 1450,
    "160": 1700,
    "180": 2100,
    "200": 2500,
  },
  "ゆうパック": {
    "60": 750,
    "80": 870,
    "100": 1070,
    "120": 1200,
    "140": 1450,
    "160": 1700,
  },
};
const MANUAL_SHIPPING_METHODS = ["定形外郵便", "定形外", "その他"];
const STATUS_CLASS_NAMES = {
  "未出品": "status-unlisted",
  "出品中": "status-listed",
  "売却済み": "status-sold",
  "保留": "status-hold",
  "要捜索": "status-searching",
};
const DEFAULT_REFERENCE_IMAGE_CATEGORIES = [
  "駿河屋スクショ",
  "公式画像",
  "購入時スクショ",
  "箱写真",
  "タグ写真",
  "バーコード",
  "付属品",
  "状態確認",
  "その他",
];
const MASTER_SETTINGS_DEFINITIONS = {
  categories: {
    label: "カテゴリ",
    description: "商品登録時のジャンル分類を管理",
    icon: "📂",
    rowClass: "category-setting-row",
    removeAction: "remove-category",
    fields: [{ name: "name", type: "text", label: "カテゴリ名" }],
  },
  storageLocations: {
    label: "保管場所",
    description: "商品の収納場所を管理",
    icon: "📦",
    rowClass: "storage-setting-row",
    removeAction: "remove-storage",
    fields: [{ name: "name", type: "text", label: "保管場所名" }],
  },
  shippingMethods: {
    label: "配送方法と送料",
    description: "送料計算で使用する配送設定",
    icon: "🚚",
    rowClass: "shipping-setting-row",
    removeAction: "remove-shipping",
    fields: [
      { name: "name", type: "text", label: "配送方法名" },
      { name: "cost", type: "number", label: "送料", inputMode: "numeric" },
    ],
  },
  appraisalSources: {
    label: "査定情報",
    description: "売却先ごとの査定額入力欄を管理",
    icon: "🏷",
    rowClass: "appraisal-setting-row",
    removeAction: "remove-appraisal",
    fields: [{ name: "name", type: "text", label: "査定先名" }],
  },
  templates: {
    label: "商品説明テンプレート",
    description: "説明文テンプレートを管理",
    icon: "📝",
    rowClass: "template-setting-row",
    removeAction: "remove-template",
    contentClass: "template-edit-fields",
    fields: [
      { name: "name", type: "text", label: "テンプレート名" },
      { name: "content", type: "textarea", label: "テンプレート内容", rows: 4 },
    ],
  },
};
const MASTER_MANAGEMENT_KEYS = Object.freeze(Object.keys(MASTER_SETTINGS_DEFINITIONS));

settings = loadSettings();
descriptionTemplates = loadTemplates();

function loadItems() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .map((item) => {
        try {
          return normalizeItem(item);
        } catch (error) {
          console.warn("商品データ読み込みスキップ:", { item, error });
          return null;
        }
      })
      .filter(Boolean);
  } catch (error) {
    console.warn("商品データ読み込み失敗:", error);
    return [];
  }
}

function normalizeEditHistory(value) {
  return Array.isArray(value)
    ? value
      .map((entry) => {
        const historyEntry = entry && typeof entry === "object" ? entry : {};
        return {
          updatedAt: String(historyEntry.updatedAt || "").trim(),
          changes: Array.isArray(historyEntry.changes)
            ? historyEntry.changes.map((change) => String(change || "").trim()).filter(Boolean)
            : [String(historyEntry.changes || historyEntry.change || "").trim()].filter(Boolean),
        };
      })
      .filter((entry) => entry.updatedAt && entry.changes.length > 0)
    : [];
}

function normalizeImageRefs(value) {
  const refs = value && typeof value === "object" ? value : {};

  return {
    provider: String(refs.provider || "").trim(),
    googlePhotoId: String(refs.googlePhotoId || refs.googlePhotosId || "").trim(),
    localImageId: String(refs.localImageId || "").trim(),
    cloudImageId: String(refs.cloudImageId || "").trim(),
  };
}

function normalizeReferenceImages(images = []) {
  if (!Array.isArray(images)) {
    return [];
  }

  return images
    .filter((image) => image && typeof image === "object")
    .map((image) => ({
      imageId: String(image.imageId || image.id || "").trim(),
      type: "reference",
      category: String(image.category || image.kind || image.label || "その他").trim() || "その他",
      source: String(image.source || "surugaya").trim() || "surugaya",
      memo: String(image.memo || "").trim(),
      createdAt: image.createdAt || new Date().toISOString(),
      linkedItemId: String(image.linkedItemId || "").trim(),
      linkedSortingId: String(image.linkedSortingId || "").trim(),
      ocrText: String(image.ocrText || "").trim(),
      ocrStatus: String(image.ocrStatus || "未実行").trim() || "未実行",
    }))
    .filter((image) => image.imageId);
}

function createReferenceImageId(target, collection = "items") {
  const prefix = collection === "sorting" ? "REF-SORTING" : "REF-ITEM";
  const baseId = getItemCode(target) || target?.id || "UNKNOWN";
  return `${prefix}-${baseId}-${Date.now()}`;
}

function createImportReferenceImageId(importedItem) {
  return `REF-IMPORT-${importedItem?.rowNumber || "ROW"}-${Date.now()}`;
}

function getReferenceImages(target) {
  return normalizeReferenceImages(target?.referenceImages);
}

function getReferenceImageData(referenceImage) {
  return localImageCache.get(referenceImage?.imageId) || "";
}

function getReferenceImageCount(target) {
  return getReferenceImages(target).length;
}

function getReferenceCategoryLabel(category, { compact = false } = {}) {
  const normalized = String(category || "その他").trim() || "その他";
  if (!compact) {
    return normalized;
  }

  const shortLabels = {
    "駿河屋スクショ": "駿河屋",
    "購入時スクショ": "購入時",
    "バーコード": "バーコード",
    "状態確認": "状態",
  };

  return shortLabels[normalized] || normalized.replace(/画像|写真|スクショ/g, "") || normalized;
}

function getProductImageKeys(target) {
  if (!target || typeof target !== "object") {
    return [];
  }

  const refs = normalizeImageRefs(target.imageRefs);
  const keys = [
    refs.googlePhotoId ? `google:${refs.googlePhotoId}` : "",
    refs.localImageId ? `local:${refs.localImageId}` : "",
    refs.cloudImageId ? `cloud:${refs.cloudImageId}` : "",
    !refs.localImageId && target.imageData ? `embedded:${target.id || target.itemCode || target.imageData}` : "",
  ].filter(Boolean);

  if (keys.length === 0 && target.imageData) {
    keys.push(`embedded:${target.id || target.itemCode || "image"}`);
  }

  return [...new Set(keys)];
}

function getImageSummary(...targets) {
  const productKeys = new Set();
  const referenceMap = new Map();

  targets.filter(Boolean).forEach((target) => {
    getProductImageKeys(target).forEach((key) => productKeys.add(key));
    getReferenceImages(target).forEach((image) => {
      const key = image.imageId || `${image.category}:${image.createdAt}:${image.memo}`;
      if (!referenceMap.has(key)) {
        referenceMap.set(key, image);
      }
    });
  });

  const referenceCategoryCounts = new Map();
  [...referenceMap.values()].forEach((image) => {
    const category = image.category || "その他";
    referenceCategoryCounts.set(category, (referenceCategoryCounts.get(category) || 0) + 1);
  });

  return {
    productCount: productKeys.size,
    referenceCount: referenceMap.size,
    referenceCategoryCounts,
  };
}

function getDisplayImageSummary(target) {
  return getImageSummary(target);
}

function getSortingDisplayImageSummary(item) {
  return getImageSummary(getSortingSourceItem(item), item);
}

function hasMainImage(target) {
  const refs = normalizeImageRefs(target?.imageRefs);
  return Boolean(
    target?.imageData
      || refs.googlePhotoId
      || refs.localImageId
      || refs.cloudImageId
      || (refs.localImageId && localImageCache.get(refs.localImageId)),
  );
}

function hasReferenceImage(target) {
  return getReferenceImageCount(target) > 0;
}

function hasAnyDisplayImage(target) {
  return hasMainImage(target) || hasReferenceImage(target);
}

function getProductImageCount(target) {
  return getDisplayImageSummary(target).productCount;
}

function getImageStateLabels(target) {
  const summary = getDisplayImageSummary(target);
  return [`📷${summary.productCount}`, `📚${summary.referenceCount}`];
}

function appendImageStateBadges(container, target, options = {}) {
  if (!container) {
    return;
  }

  const summary = options.summary || getDisplayImageSummary(target);
  [
    { label: `📷${summary.productCount}`, type: "product", count: summary.productCount },
    { label: `📚${summary.referenceCount}`, type: "reference", count: summary.referenceCount },
  ].forEach(({ label, type, count }) => {
    const badge = document.createElement("span");
    badge.className = type === "reference" ? "reference-image-badge" : "main-image-badge";
    badge.classList.toggle("image-badge-empty", count === 0);
    badge.textContent = label;
    container.append(badge);
  });

  const categories = [...summary.referenceCategoryCounts.entries()]
    .filter(([, count]) => count > 0)
    .map(([category, count]) => `${getReferenceCategoryLabel(category, { compact: true })}${count}`);

  if (categories.length > 0) {
    const categoryLine = document.createElement("small");
    categoryLine.className = "reference-category-summary";
    categoryLine.textContent = categories.join(" / ");
    container.append(categoryLine);
  }
}

function chooseReferenceImageCategory() {
  const optionsText = DEFAULT_REFERENCE_IMAGE_CATEGORIES
    .map((category, index) => `${index + 1}. ${category}`)
    .join("\n");
  const input = window.prompt(`参考画像カテゴリを選択してください\n\n${optionsText}`, "1");
  if (input === null) {
    return "";
  }

  const trimmed = String(input || "").trim();
  const selectedIndex = Number(trimmed);
  if (Number.isInteger(selectedIndex) && DEFAULT_REFERENCE_IMAGE_CATEGORIES[selectedIndex - 1]) {
    return DEFAULT_REFERENCE_IMAGE_CATEGORIES[selectedIndex - 1];
  }

  return trimmed || "その他";
}

function isBlankStorageValue(value) {
  const normalized = String(value ?? "").trim();
  return !normalized || normalized === "-" || normalized === "未設定" || normalized === "保管場所未設定";
}

function isStorageUnset(target) {
  if (!target || typeof target !== "object") {
    return true;
  }

  const values = [
    target.storageLocation,
    target.storage_location,
    target.boxNumber,
    target.box_number,
    target["保管場所"],
    target["箱番号"],
  ];

  return values.every(isBlankStorageValue);
}

function getStorageSearchValues(target) {
  if (!target || typeof target !== "object") {
    return [];
  }

  return [
    target.storageLocation,
    target.storage_location,
    target.storageLocationId,
    target.storage_location_id,
    target.storageMemo,
    target.storage_memo,
    target.boxNumber,
    target.box_number,
    target.name,
    target.title,
    target.itemTitle,
    target.memo,
    target["保管場所"],
    target["箱番号"],
  ];
}

function matchesStorageSearchKeyword(target, keyword) {
  const normalizedKeyword = String(keyword || "").trim().toLowerCase();
  if (!normalizedKeyword) {
    return true;
  }

  if (normalizedKeyword === "未設定") {
    return isStorageUnset(target);
  }

  return getStorageSearchValues(target).some((value) => String(value || "").toLowerCase().includes(normalizedKeyword));
}

function getImportStorageTarget(importedItem) {
  const matchTarget = getImportTargetByMatch(importedItem?.matchTarget);
  if (matchTarget) {
    return matchTarget;
  }

  const firstSortingMatch = (importedItem?.sortingMatches || [])
    .map((match) => getImportTargetByMatch(match))
    .find(Boolean);
  if (firstSortingMatch) {
    return firstSortingMatch;
  }

  const firstItemMatch = (importedItem?.itemMatches || [])
    .map((match) => getImportTargetByMatch(match))
    .find(Boolean);
  return firstItemMatch || importedItem;
}

function isImportStorageUnset(importedItem) {
  return isStorageUnset(getImportStorageTarget(importedItem));
}

function hasImportDisplayImage(importedItem) {
  const matchTarget = getImportTargetByMatch(importedItem?.matchTarget);
  const sourceItem = matchTarget && sortingItems.some((item) => item.id === matchTarget.id)
    ? getSortingSourceItem(matchTarget)
    : null;
  const summary = getImageSummary(importedItem, matchTarget, sourceItem);
  return summary.productCount > 0 || summary.referenceCount > 0;
}

function getImageProviderLabel(provider) {
  return {
    google_photos: "Googleフォト",
    local: "ローカル画像",
    cloud: "クラウド画像",
  }[provider] || "未設定";
}

function loadLocalImageRefs() {
  try {
    const parsed = JSON.parse(localStorage.getItem(LOCAL_IMAGE_REFS_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveLocalImageRefs(refsMap) {
  localStorage.setItem(LOCAL_IMAGE_REFS_KEY, JSON.stringify(refsMap || {}));
}

function getLocalImageRefKey(item) {
  return String(item?.id || item?.itemCode || "").trim();
}

function getLocalImageRefs(item) {
  const key = getLocalImageRefKey(item);
  if (!key) {
    return normalizeImageRefs({});
  }

  return normalizeImageRefs(loadLocalImageRefs()[key]);
}

function saveLocalImageRefsForItem(item, refs = {}) {
  const key = getLocalImageRefKey(item);
  if (!key) {
    return;
  }

  const refsMap = loadLocalImageRefs();
  refsMap[key] = {
    ...normalizeImageRefs(refsMap[key]),
    ...normalizeImageRefs(refs),
  };
  saveLocalImageRefs(refsMap);
}

function mergeLocalImageRefs(item) {
  const sharedRefs = normalizeImageRefs(item?.imageRefs);
  const localRefs = getLocalImageRefs(item);

  return {
    ...item,
    imageRefs: normalizeImageRefs({
      ...sharedRefs,
      localImageId: localRefs.localImageId || sharedRefs.localImageId,
    }),
  };
}

function normalizeItem(item = {}) {
  return mergeLocalImageRefs({
    ...item,
    id: String(item.id || createId()),
    imageRefs: normalizeImageRefs(item.imageRefs),
    referenceImages: normalizeReferenceImages(item.referenceImages),
    editHistory: normalizeEditHistory(item.editHistory),
    updatedAt: item.updatedAt || new Date().toISOString(),
  });
}

function loadSettings() {
  try {
    const saved = localStorage.getItem(SETTINGS_KEY);
    const parsed = saved ? JSON.parse(saved) : {};

    return normalizeSettings(parsed);
  } catch {
    return normalizeSettings({});
  }
}

function loadTemplates() {
  try {
    const saved = localStorage.getItem(TEMPLATES_KEY);
    return saved ? normalizeTemplates(JSON.parse(saved), []) : normalizeTemplates(DEFAULT_TEMPLATES, []);
  } catch {
    return normalizeTemplates(DEFAULT_TEMPLATES, []);
  }
}

function loadSortingItems() {
  try {
    const saved = localStorage.getItem(SORTING_STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .map((item) => {
        try {
          return normalizeSortingItem(item);
        } catch (error) {
          console.warn("売却先仕分けデータ読み込みスキップ:", { item, error });
          return null;
        }
      })
      .filter(Boolean);
  } catch (error) {
    console.warn("売却先仕分けデータ読み込み失敗:", error);
    return [];
  }
}

function normalizeSortingItem(item) {
  return {
    ...item,
    id: String(item.id || createId()),
    name: String(item.name || "").trim(),
    genre: String(item.genre || "").trim(),
    quantity: parseMoney(item.quantity) === "" ? 1 : Math.max(1, parseMoney(item.quantity)),
    storageLocation: String(item.storageLocation || "").trim(),
    mercariPrice: parseMoney(item.mercariPrice),
    yahooPrice: parseMoney(item.yahooPrice),
    surugayaPrice: parseMoney(item.surugayaPrice),
    ryobanPrice: parseMoney(item.ryobanPrice),
    ecoRingPrice: parseMoney(item.ecoRingPrice),
    clothesPrice: parseMoney(item.clothesPrice),
    mandarakePrice: parseMoney(item.mandarakePrice),
    disposalPrice: parseMoney(item.disposalPrice),
    otherPrice: parseMoney(item.otherPrice),
    destination: String(item.destination || SORTING_UNDECIDED_DESTINATION).trim() || SORTING_UNDECIDED_DESTINATION,
    status: SORTING_STATUSES.includes(item.status) ? item.status : "未確認",
    shippingStatus: SHIPPING_STATUSES.includes(item.shippingStatus) ? item.shippingStatus : "未仕分け",
    shippingDate: String(item.shippingDate || "").trim(),
    trackingNumber: String(item.trackingNumber || "").trim(),
    boxNumber: String(item.boxNumber || "").trim(),
    sourceItemId: String(item.sourceItemId || "").trim(),
    imageData: String(item.imageData || ""),
    imageRefs: normalizeImageRefs(item.imageRefs),
    referenceImages: normalizeReferenceImages(item.referenceImages),
    memo: String(item.memo || "").trim(),
    createdAt: item.createdAt || new Date().toISOString(),
    updatedAt: item.updatedAt || new Date().toISOString(),
  };
}

function looksLikeSortingItem(item) {
  if (!item || typeof item !== "object") {
    return false;
  }

  return Boolean(
    item.destination
      || item.shippingStatus
      || item.boxNumber
      || item.mercariPrice !== undefined
      || item.surugayaPrice !== undefined
      || item.yahooPrice !== undefined
      || item.ecoRingPrice !== undefined
      || item.clothesPrice !== undefined
      || item.mandarakePrice !== undefined,
  );
}

function normalizeSortingRecoveryItems(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  const likelyItems = value.filter(looksLikeSortingItem);
  if (likelyItems.length === 0) {
    return [];
  }

  return likelyItems.map(normalizeSortingItem);
}

function collectSortingArraysFromObject(value, path = "root", results = []) {
  if (!value || typeof value !== "object") {
    return results;
  }

  if (Array.isArray(value)) {
    const itemsFromArray = normalizeSortingRecoveryItems(value);
    if (itemsFromArray.length > 0) {
      results.push({ path, items: itemsFromArray });
    }
    value.slice(0, 25).forEach((child, index) => {
      collectSortingArraysFromObject(child, `${path}[${index}]`, results);
    });
    return results;
  }

  Object.entries(value).forEach(([key, child]) => {
    const childPath = path === "root" ? key : `${path}.${key}`;
    collectSortingArraysFromObject(child, childPath, results);
  });

  return results;
}

function createSortingRecoveryCandidate({ source, key = "", path = "", householdId = "", updatedAt = "", items: candidateItems }) {
  const normalizedItems = normalizeSortingRecoveryItems(candidateItems);
  if (normalizedItems.length === 0) {
    return null;
  }

  return {
    id: createId(),
    source,
    key,
    path,
    householdId,
    updatedAt,
    count: normalizedItems.length,
    items: normalizedItems,
  };
}

function dedupeSortingRecoveryCandidates(candidates) {
  const seen = new Set();
  return candidates.filter((candidate) => {
    const signature = JSON.stringify(candidate.items.map((item) => [
      item.id,
      item.name,
      item.destination,
      item.storageLocation,
      item.updatedAt,
    ]));
    if (seen.has(signature)) {
      return false;
    }
    seen.add(signature);
    return true;
  });
}

function renderSortingRecoveryCandidates(candidates, message = "") {
  if (!dataRecoveryResults) {
    return;
  }

  dataRecoveryResults.replaceChildren();

  if (!candidates.length) {
    const paragraph = document.createElement("p");
    paragraph.className = "muted";
    paragraph.textContent = message || "復元候補は見つかりませんでした。";
    dataRecoveryResults.append(paragraph);
    return;
  }

  candidates.forEach((candidate, index) => {
    const sourceLabel = [
      candidate.source,
      candidate.key ? `キー：${candidate.key}` : "",
      candidate.householdId ? `グループ：${candidate.householdId}` : "",
      candidate.updatedAt ? `更新：${formatDateTime(candidate.updatedAt)}` : "",
    ].filter(Boolean).join(" / ");

    const candidateElement = document.createElement("div");
    candidateElement.className = "data-recovery-candidate";

    const textBlock = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = `${candidate.count}件の復元候補`;
    const source = document.createElement("small");
    source.textContent = sourceLabel;
    const path = document.createElement("small");
    path.textContent = candidate.path || "";
    textBlock.append(title, source, path);

    const restoreButton = document.createElement("button");
    restoreButton.className = "ghost-button";
    restoreButton.type = "button";
    restoreButton.dataset.recoverSortingIndex = String(index);
    restoreButton.textContent = "この候補を復元";

    candidateElement.append(textBlock, restoreButton);
    dataRecoveryResults.append(candidateElement);
  });
}

function tryParseJsonValue(rawValue) {
  try {
    return { ok: true, value: JSON.parse(rawValue) };
  } catch {
    return { ok: false, value: rawValue };
  }
}

function hasMeaningfulText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function hasMeaningfulNumber(value) {
  return value !== "" && value !== null && value !== undefined && !Number.isNaN(Number(value));
}

function isImageOnlyObject(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  return hasMeaningfulText(value.dataUrl)
    && hasMeaningfulText(value.id)
    && !hasMeaningfulText(value.name)
    && !hasMeaningfulText(value.listingTitle)
    && !hasMeaningfulText(value.storageLocation);
}

function isProductLikeObject(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  const hasTitle = hasMeaningfulText(value.name)
    || hasMeaningfulText(value.listingTitle)
    || hasMeaningfulText(value.title);
  const hasProductField = hasMeaningfulText(value.itemCode)
    || hasMeaningfulText(value.category)
    || hasMeaningfulText(value.condition)
    || hasMeaningfulText(value.status)
    || hasMeaningfulText(value.storageLocation)
    || hasMeaningfulText(value.description)
    || hasMeaningfulText(value.memo)
    || hasMeaningfulNumber(value.plannedPrice)
    || hasMeaningfulNumber(value.purchaseCost)
    || hasMeaningfulNumber(value.shippingCost)
    || hasMeaningfulNumber(value.minimumPrice);

  return hasTitle && hasProductField;
}

function isSortingLikeObject(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  const hasTitle = hasMeaningfulText(value.name)
    || hasMeaningfulText(value.listingTitle)
    || hasMeaningfulText(value.title);
  const hasSortingField = hasMeaningfulText(value.destination)
    || hasMeaningfulText(value.shippingStatus)
    || hasMeaningfulText(value.boxNumber)
    || hasMeaningfulNumber(value.mercariPrice)
    || hasMeaningfulNumber(value.yahooPrice)
    || hasMeaningfulNumber(value.surugayaPrice)
    || hasMeaningfulNumber(value.ryobanPrice)
    || hasMeaningfulNumber(value.ecoRingPrice)
    || hasMeaningfulNumber(value.clothesPrice)
    || hasMeaningfulNumber(value.otherPrice);

  return hasTitle && hasSortingField;
}

function getMaxTimestampFromValue(value) {
  let maxTime = 0;
  const seen = new WeakSet();
  const timestampKeys = new Set(["updatedAt", "updated_at", "createdAt", "created_at", "savedAt", "saved_at", "timestamp", "time", "date"]);

  const walk = (currentValue) => {
    if (!currentValue || typeof currentValue !== "object") {
      return;
    }

    if (seen.has(currentValue)) {
      return;
    }
    seen.add(currentValue);

    Object.entries(currentValue).forEach(([key, nestedValue]) => {
      if (timestampKeys.has(key)) {
        const time = Date.parse(String(nestedValue || ""));
        if (!Number.isNaN(time)) {
          maxTime = Math.max(maxTime, time);
        }
      }

      if (nestedValue && typeof nestedValue === "object") {
        walk(nestedValue);
      }
    });
  };

  walk(value);
  return maxTime ? new Date(maxTime).toISOString() : "";
}

function analyzeStoredValue(value, rootPath = "") {
  const summary = {
    count: 0,
    productCount: 0,
    sortingCount: 0,
    imageOnlyCount: 0,
    arrayPaths: [],
    sampleTitles: [],
    lastUpdatedAt: getMaxTimestampFromValue(value),
  };
  const seen = new WeakSet();

  const addSampleTitle = (item) => {
    const title = item?.listingTitle || item?.name || item?.title || "";
    if (title && summary.sampleTitles.length < 5 && !summary.sampleTitles.includes(title)) {
      summary.sampleTitles.push(title);
    }
  };

  const walk = (currentValue, path) => {
    if (!currentValue || typeof currentValue !== "object") {
      return;
    }

    if (seen.has(currentValue)) {
      return;
    }
    seen.add(currentValue);

    if (Array.isArray(currentValue)) {
      const productCount = currentValue.filter(isProductLikeObject).length;
      const sortingCount = currentValue.filter(isSortingLikeObject).length;
      const imageOnlyCount = currentValue.filter(isImageOnlyObject).length;
      if (currentValue.length > 0) {
        summary.arrayPaths.push({
          path,
          count: currentValue.length,
          productCount,
          sortingCount,
          imageOnlyCount,
        });
      }
      summary.count = Math.max(summary.count, currentValue.length);
      summary.productCount += productCount;
      summary.sortingCount += sortingCount;
      summary.imageOnlyCount += imageOnlyCount;
      currentValue.forEach((item, index) => {
        if (isProductLikeObject(item) || isSortingLikeObject(item)) {
          addSampleTitle(item);
        }
        if (item && typeof item === "object") {
          walk(item, `${path}[${index}]`);
        }
      });
      return;
    }

    if (isProductLikeObject(currentValue)) {
      summary.productCount += 1;
      summary.count = Math.max(summary.count, 1);
      addSampleTitle(currentValue);
    }
    if (isSortingLikeObject(currentValue)) {
      summary.sortingCount += 1;
      summary.count = Math.max(summary.count, 1);
      addSampleTitle(currentValue);
    }
    if (isImageOnlyObject(currentValue)) {
      summary.imageOnlyCount += 1;
      summary.count = Math.max(summary.count, 1);
    }

    Object.entries(currentValue).forEach(([key, nestedValue]) => {
      if (nestedValue && typeof nestedValue === "object") {
        walk(nestedValue, path ? `${path}.${key}` : key);
      }
    });
  };

  walk(value, rootPath);
  return summary;
}

function createStorageScanRow({ area, key, parsed, value, error = "" }) {
  const summary = parsed ? analyzeStoredValue(value, key) : {
    count: 0,
    productCount: 0,
    sortingCount: 0,
    imageOnlyCount: 0,
    arrayPaths: [],
    sampleTitles: [],
    lastUpdatedAt: "",
  };
  const lowerKey = String(key || "").toLowerCase();
  const nameHints = ["items", "sorting", "backup", "old", "temp", "history", "archive", "cache", "mercari", "listing", "destination", "restore", "recovery"];
  const hasNameHint = nameHints.some((hint) => lowerKey.includes(hint));
  const type = summary.productCount > 0
    ? "商品データ"
    : summary.sortingCount > 0
      ? "売却先仕分け"
      : summary.imageOnlyCount > 0
        ? "画像だけ"
        : parsed
          ? "JSON/設定など"
          : "JSON以外";

  return {
    area,
    key,
    count: summary.count,
    type,
    isProductData: summary.productCount > 0 || summary.sortingCount > 0,
    isImageOnly: summary.imageOnlyCount > 0 && summary.productCount === 0 && summary.sortingCount === 0,
    productCount: summary.productCount,
    sortingCount: summary.sortingCount,
    imageOnlyCount: summary.imageOnlyCount,
    lastUpdatedAt: summary.lastUpdatedAt,
    sampleTitles: summary.sampleTitles,
    arrayPaths: summary.arrayPaths,
    hasNameHint,
    error,
  };
}

function scanWebStorage(storage, area) {
  const rows = [];
  if (!storage) {
    return rows;
  }

  for (let index = 0; index < storage.length; index += 1) {
    const key = storage.key(index);
    const rawValue = storage.getItem(key);
    const parsedValue = tryParseJsonValue(rawValue);
    rows.push(createStorageScanRow({
      area,
      key,
      parsed: parsedValue.ok,
      value: parsedValue.value,
    }));
  }

  return rows.sort((a, b) => a.key.localeCompare(b.key, "ja"));
}

async function getIndexedDbDatabaseNames() {
  if (!("indexedDB" in window)) {
    return [];
  }

  if (typeof indexedDB.databases === "function") {
    try {
      const databases = await indexedDB.databases();
      return databases.map((database) => database.name).filter(Boolean);
    } catch (error) {
      console.warn("IndexedDB一覧取得エラー:", error);
    }
  }

  return [LOCAL_IMAGE_DB_NAME];
}

function openIndexedDbByName(name) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(name);
    request.addEventListener("success", () => resolve(request.result));
    request.addEventListener("error", () => reject(request.error || new Error("IndexedDBを開けませんでした")));
    request.addEventListener("blocked", () => reject(new Error("IndexedDBが他のタブでブロックされています")));
  });
}

function readIndexedDbStore(db, storeName) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, "readonly");
    const store = transaction.objectStore(storeName);
    const request = store.getAll();
    request.addEventListener("success", () => resolve(request.result || []));
    request.addEventListener("error", () => reject(request.error || transaction.error || new Error("IndexedDBストアを読めませんでした")));
    transaction.addEventListener("error", () => reject(transaction.error || new Error("IndexedDBストアを読めませんでした")));
  });
}

async function scanIndexedDbStores() {
  if (!("indexedDB" in window)) {
    return [createStorageScanRow({
      area: "IndexedDB",
      key: "IndexedDB未対応",
      parsed: false,
      value: "",
      error: "このブラウザではIndexedDBを利用できません",
    })];
  }

  const rows = [];
  const names = Array.from(new Set(await getIndexedDbDatabaseNames()));
  for (const name of names) {
    let db = null;
    try {
      db = await openIndexedDbByName(name);
      const storeNames = Array.from(db.objectStoreNames || []);
      for (const storeName of storeNames) {
        try {
          const records = await readIndexedDbStore(db, storeName);
          rows.push(createStorageScanRow({
            area: "IndexedDB",
            key: `${name}/${storeName}`,
            parsed: true,
            value: records,
          }));
        } catch (error) {
          rows.push(createStorageScanRow({
            area: "IndexedDB",
            key: `${name}/${storeName}`,
            parsed: false,
            value: "",
            error: error.message || "読み込み失敗",
          }));
        }
      }
    } catch (error) {
      rows.push(createStorageScanRow({
        area: "IndexedDB",
        key: name,
        parsed: false,
        value: "",
        error: error.message || "DBを開けませんでした",
      }));
    } finally {
      db?.close();
    }
  }

  return rows;
}

function renderStorageScanResults(rows) {
  if (!dataRecoveryResults) {
    return;
  }

  dataRecoveryResults.replaceChildren();
  const productRows = rows.filter((row) => row.isProductData);
  const localStorageKeys = rows.filter((row) => row.area === "localStorage").map((row) => row.key);
  const sessionStorageKeys = rows.filter((row) => row.area === "sessionStorage").map((row) => row.key);

  const panel = document.createElement("section");
  panel.className = "storage-scan-results";

  const heading = document.createElement("div");
  heading.className = "storage-scan-heading";
  const foundText = productRows.length
    ? `見つかりました：商品データ候補 ${productRows.length}箇所`
    : "商品データ本体の候補は見つかりませんでした";
  heading.innerHTML = `
    <strong>${foundText}</strong>
    <small>復元は実行していません。localStorage / sessionStorage / IndexedDB の全キーを調査しました。</small>
  `;

  const keyList = document.createElement("div");
  keyList.className = "storage-scan-key-list";
  keyList.innerHTML = `
    <strong>localStorageキー一覧</strong>
    <small>${localStorageKeys.length ? localStorageKeys.join(" / ") : "なし"}</small>
    <strong>sessionStorageキー一覧</strong>
    <small>${sessionStorageKeys.length ? sessionStorageKeys.join(" / ") : "なし"}</small>
  `;

  const table = document.createElement("div");
  table.className = "storage-scan-table";
  table.innerHTML = `
    <div class="storage-scan-table-head">保存先</div>
    <div class="storage-scan-table-head">キー / Store</div>
    <div class="storage-scan-table-head">判定</div>
    <div class="storage-scan-table-head">件数</div>
  `;

  rows.forEach((row) => {
    const detail = [
      row.productCount ? `商品 ${row.productCount}` : "",
      row.sortingCount ? `仕分け ${row.sortingCount}` : "",
      row.imageOnlyCount ? `画像 ${row.imageOnlyCount}` : "",
      row.lastUpdatedAt ? `更新 ${formatDateTime(row.lastUpdatedAt)}` : "",
      row.sampleTitles.length ? `例：${row.sampleTitles.join(" / ")}` : "",
      row.error ? `エラー：${row.error}` : "",
    ].filter(Boolean).join(" / ");

    const areaCell = document.createElement("div");
    areaCell.textContent = row.area;
    const keyCell = document.createElement("div");
    keyCell.innerHTML = `<strong></strong><small></small>`;
    keyCell.querySelector("strong").textContent = row.key;
    keyCell.querySelector("small").textContent = detail || (row.hasNameHint ? "名前に復元関連キーワードあり" : "-");
    const typeCell = document.createElement("div");
    typeCell.className = row.isProductData ? "storage-scan-found" : row.isImageOnly ? "storage-scan-image" : "";
    typeCell.textContent = row.type;
    const countCell = document.createElement("div");
    countCell.textContent = `${row.count}件`;
    table.append(areaCell, keyCell, typeCell, countCell);
  });

  panel.append(heading, keyList, table);
  dataRecoveryResults.append(panel);
}

async function detectAllStoredProductData() {
  const rows = [
    ...scanWebStorage(localStorage, "localStorage"),
    ...scanWebStorage(sessionStorage, "sessionStorage"),
    ...await scanIndexedDbStores(),
  ];

  console.info("商品データ全探索結果", rows);
  renderStorageScanResults(rows);
  const foundCount = rows.filter((row) => row.isProductData).length;
  if (foundCount) {
    showSuccessMessage(`見つかりました：商品データ候補 ${foundCount}箇所`);
  } else {
    showErrorMessage("商品データ本体の候補は見つかりませんでした");
  }
}

function findImageRecordLinks(record) {
  const imageId = String(record?.id || record?.localImageId || "");
  const refsMap = loadLocalImageRefs();
  const linkedRefEntries = Object.entries(refsMap)
    .filter(([, refs]) => normalizeImageRefs(refs).localImageId === imageId)
    .map(([key]) => key);
  const linkedItems = items.filter((item) => {
    const refs = normalizeImageRefs(item.imageRefs);
    return refs.localImageId === imageId
      || linkedRefEntries.includes(String(item.id))
      || linkedRefEntries.includes(String(item.itemCode || ""));
  });
  const linkedSortingItems = sortingItems.filter((item) => {
    const refs = normalizeImageRefs(item.imageRefs);
    return refs.localImageId === imageId
      || linkedRefEntries.includes(String(item.id))
      || linkedRefEntries.includes(String(item.sourceItemId || ""));
  });

  return {
    linkedRefEntries,
    linkedItems,
    linkedSortingItems,
  };
}

function summarizeIndexedImageRecord(record, index) {
  const fields = record && typeof record === "object" ? Object.keys(record) : [];
  const imageId = String(record?.id || record?.localImageId || "");
  const itemCode = parseItemCodeFromImageId(imageId)
    || String(record?.itemCode || record?.productId || record?.itemId || record?.sourceItemId || "").trim();
  const title = String(record?.title || record?.itemTitle || record?.name || record?.metadata?.title || record?.metadata?.itemTitle || "").trim();
  const metadata = record?.metadata && typeof record.metadata === "object" ? record.metadata : null;
  const links = findImageRecordLinks(record);
  const linkedTitle = links.linkedItems.map(getListingTitle).find(Boolean)
    || links.linkedSortingItems.map((item) => item.name).find(Boolean)
    || "";

  return {
    index,
    id: imageId,
    fields,
    itemCode,
    title,
    linkedTitle,
    hasDataUrl: hasMeaningfulText(record?.dataUrl),
    hasMetadata: Boolean(metadata),
    metadataFields: metadata ? Object.keys(metadata) : [],
    bytes: record?.bytes || (record?.dataUrl ? getDataUrlByteSize(record.dataUrl) : ""),
    updatedAt: record?.updatedAt || record?.createdAt || "",
    linkedRefCount: links.linkedRefEntries.length,
    linkedItemCount: links.linkedItems.length,
    linkedSortingCount: links.linkedSortingItems.length,
  };
}

function renderIndexedImageStoreAnalysis(records) {
  if (!dataRecoveryResults) {
    return;
  }

  dataRecoveryResults.replaceChildren();
  const summaries = records.map(summarizeIndexedImageRecord);
  const allFieldNames = Array.from(new Set(summaries.flatMap((summary) => summary.fields))).sort((a, b) => a.localeCompare(b, "ja"));
  const linkedCount = summaries.filter((summary) => summary.itemCode || summary.title || summary.linkedTitle || summary.linkedItemCount || summary.linkedSortingCount || summary.linkedRefCount).length;
  const imageOnlyCount = summaries.length - linkedCount;

  const panel = document.createElement("section");
  panel.className = "indexed-store-analysis";
  panel.innerHTML = `
    <div class="indexed-store-analysis-heading">
      <strong>IndexedDB画像Store解析</strong>
      <small>DB：${LOCAL_IMAGE_DB_NAME} / Store：${LOCAL_IMAGE_STORE_NAME}</small>
      <small>画像レコード：${summaries.length}件 / 商品情報への参照候補：${linkedCount}件 / 画像のみ候補：${imageOnlyCount}件</small>
      <small>保存されている項目：${allFieldNames.length ? allFieldNames.join(" / ") : "なし"}</small>
    </div>
  `;

  const table = document.createElement("div");
  table.className = "indexed-store-analysis-table";
  table.innerHTML = `
    <div class="indexed-store-analysis-head">#</div>
    <div class="indexed-store-analysis-head">保存項目</div>
    <div class="indexed-store-analysis-head">ID / 商品参照</div>
    <div class="indexed-store-analysis-head">判定</div>
  `;

  summaries.forEach((summary) => {
    const fieldText = [
      summary.fields.join(" / ") || "-",
      summary.hasMetadata ? `metadata: ${summary.metadataFields.join(" / ") || "あり"}` : "",
      summary.hasDataUrl ? "dataUrl: あり" : "dataUrl: なし",
      summary.bytes ? `bytes: ${summary.bytes}` : "",
      summary.updatedAt ? `updatedAt: ${formatDateTime(summary.updatedAt)}` : "",
    ].filter(Boolean).join("\n");
    const linkText = [
      summary.id ? `id: ${summary.id}` : "",
      summary.itemCode ? `商品ID候補: ${summary.itemCode}` : "",
      summary.title ? `タイトル候補: ${summary.title}` : "",
      summary.linkedTitle ? `既存データ照合: ${summary.linkedTitle}` : "",
      summary.linkedRefCount ? `localImageRefs照合: ${summary.linkedRefCount}件` : "",
    ].filter(Boolean).join("\n") || "-";
    const resultText = summary.linkedItemCount || summary.linkedSortingCount
      ? `既存商品/仕分けと紐づきあり\n商品 ${summary.linkedItemCount}件 / 仕分け ${summary.linkedSortingCount}件`
      : summary.itemCode || summary.title
        ? "商品情報への参照候補あり"
        : "画像データのみ";

    const indexCell = document.createElement("div");
    indexCell.textContent = String(summary.index + 1);
    const fieldCell = document.createElement("div");
    fieldCell.textContent = fieldText;
    const linkCell = document.createElement("div");
    linkCell.textContent = linkText;
    const resultCell = document.createElement("div");
    resultCell.className = resultText === "画像データのみ" ? "indexed-store-image-only" : "indexed-store-linked";
    resultCell.textContent = resultText;
    table.append(indexCell, fieldCell, linkCell, resultCell);
  });

  panel.append(table);
  dataRecoveryResults.append(panel);
  console.info("IndexedDB画像Store解析", {
    database: LOCAL_IMAGE_DB_NAME,
    store: LOCAL_IMAGE_STORE_NAME,
    recordCount: records.length,
    fields: allFieldNames,
    summaries,
  });
}

async function analyzeIndexedImageStore() {
  const records = await getIndexedDbImageRecords();
  renderIndexedImageStoreAnalysis(records);
  showSuccessMessage(`IndexedDB画像解析：${records.length}件`);
}

function extractLocalStyleIdsFromText(text) {
  return Array.from(new Set(String(text || "").match(/LOCAL-SORTING-[A-Za-z0-9_-]+|LOCAL-[A-Za-z0-9_-]+/g) || []));
}

function valueContainsAnyTarget(value, targets) {
  if (!targets.length) {
    return false;
  }

  return targets.some((target) => target && String(value || "").includes(target));
}

function collectTargetMatchesFromObject(value, targets, basePath = "") {
  const matches = [];
  const seen = new WeakSet();

  const walk = (currentValue, path) => {
    if (currentValue === null || currentValue === undefined) {
      return;
    }

    if (typeof currentValue !== "object") {
      if (valueContainsAnyTarget(currentValue, targets)) {
        matches.push(path || "value");
      }
      return;
    }

    if (seen.has(currentValue)) {
      return;
    }
    seen.add(currentValue);

    if (Array.isArray(currentValue)) {
      currentValue.forEach((item, index) => walk(item, `${path}[${index}]`));
      return;
    }

    Object.entries(currentValue).forEach(([key, nestedValue]) => {
      walk(nestedValue, path ? `${path}.${key}` : key);
    });
  };

  walk(value, basePath);
  return Array.from(new Set(matches));
}

function getParsedStorageValue(key) {
  const rawValue = localStorage.getItem(key);
  if (!rawValue) {
    return null;
  }

  const parsed = tryParseJsonValue(rawValue);
  return parsed.ok ? parsed.value : rawValue;
}

function getLocalImageRefEntriesForImageId(imageId, refsMap) {
  return Object.entries(refsMap)
    .filter(([, refs]) => normalizeImageRefs(refs).localImageId === imageId)
    .map(([key, refs]) => ({ key, refs: normalizeImageRefs(refs) }));
}

function getCollectionImageMatches(collection, targets, label) {
  return collection
    .map((item, index) => {
      const refs = normalizeImageRefs(item.imageRefs);
      const searchObject = {
        id: item.id,
        itemCode: item.itemCode,
        sourceItemId: item.sourceItemId,
        name: item.name,
        listingTitle: item.listingTitle,
        storageLocation: item.storageLocation,
        imageRefs: refs,
      };
      const paths = collectTargetMatchesFromObject(searchObject, targets, label);
      if (!paths.length) {
        return null;
      }
      return {
        index,
        id: item.id || "",
        itemCode: item.itemCode || "",
        title: getListingTitle(item) || item.name || "",
        storageLocation: item.storageLocation || "",
        paths,
      };
    })
    .filter(Boolean);
}

function collectStorageMatchesForTargets(targets) {
  const matches = [];
  Object.keys(localStorage).forEach((key) => {
    const rawValue = localStorage.getItem(key) || "";
    if (!targets.some((target) => target && rawValue.includes(target))) {
      return;
    }

    const parsed = tryParseJsonValue(rawValue);
    const paths = parsed.ok
      ? collectTargetMatchesFromObject(parsed.value, targets, key)
      : targets.filter((target) => rawValue.includes(target)).map((target) => `${key}: ${target}`);
    matches.push({ key, paths: paths.slice(0, 8) });
  });
  return matches;
}

function isRecoveredPlaceholderTitle(value) {
  return /^復元候補\s*\d{3}$/.test(String(value || "").trim());
}

function getNestedValue(source, paths) {
  if (!source || typeof source !== "object") {
    return "";
  }

  for (const path of paths) {
    const keys = path.split(".");
    let value = source;
    for (const key of keys) {
      if (!value || typeof value !== "object" || !(key in value)) {
        value = undefined;
        break;
      }
      value = value[key];
    }
    if (hasMeaningfulText(value) || typeof value === "number") {
      return value;
    }
  }

  return "";
}

function getAnyTitleCandidate(value) {
  const title = getNestedValue(value, ["listingTitle", "name", "title", "itemTitle", "data.listingTitle", "data.name", "data.title"]);
  return isRecoveredPlaceholderTitle(title) ? "" : String(title || "").trim();
}

function getAnyStorageCandidate(value) {
  const storage = getNestedValue(value, ["storageLocation", "storage_location", "location", "data.storageLocation", "data.storage_location"]);
  const normalized = String(storage || "").trim();
  return normalized === "未設定" ? "" : normalized;
}

function getAnyDestinationCandidate(value) {
  const destination = getNestedValue(value, ["destination", "finalDestination", "sellingDestination", "sellDestination", "data.destination"]);
  const normalized = String(destination || "").trim();
  return normalized === SORTING_UNDECIDED_DESTINATION ? "" : normalized;
}

function getAnyMemoCandidate(value) {
  const memo = getNestedValue(value, ["memo", "soldMemo", "note", "data.memo", "data.soldMemo"]);
  const normalized = String(memo || "").trim();
  return normalized.includes("復元候補") && normalized.includes("画像由来") ? "" : normalized;
}

function getAnyAppraisalCandidates(value) {
  if (!value || typeof value !== "object") {
    return [];
  }

  const sources = [
    ...getAppraisalSources().map((source) => ({
      label: getAppraisalFieldLabel(source),
      field: getAppraisalFieldName(source),
    })),
    { label: "メルカリ", field: "mercariPrice" },
    { label: "ヤフオク", field: "yahooPrice" },
    { label: "駿河屋", field: "surugayaPrice" },
    { label: "良盤", field: "ryobanPrice" },
    { label: "エコリング", field: "ecoRingPrice" },
    { label: "服買取", field: "clothesPrice" },
    { label: "その他", field: "otherPrice" },
    { label: "予定買取額", field: "plannedPrice" },
    { label: "予定買取額", field: "planned_price" },
  ];
  const seen = new Set();

  return sources
    .map(({ label, field }) => {
      const rawValue = getNestedValue(value, [field, `data.${field}`]);
      const price = parseMoney(rawValue);
      if (price === "") {
        return null;
      }
      const key = `${label}:${price}`;
      if (seen.has(key)) {
        return null;
      }
      seen.add(key);
      return { label, field, value: price };
    })
    .filter(Boolean);
}

function objectContainsAnyTarget(value, targets) {
  if (!targets.length || value === null || value === undefined) {
    return false;
  }

  if (typeof value !== "object") {
    return valueContainsAnyTarget(value, targets);
  }

  return valueContainsAnyTarget(JSON.stringify(value), targets);
}

function isPotentialProductInfoObject(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  return Boolean(
    getAnyTitleCandidate(value)
    || getAnyStorageCandidate(value)
    || getAnyDestinationCandidate(value)
    || getAnyMemoCandidate(value)
    || getAnyAppraisalCandidates(value).length
    || normalizeImageRefs(value.imageRefs || value.data?.imageRefs).localImageId
  );
}

function collectProductInfoObjectsForTargets(value, targets, sourceLabel) {
  const matches = [];
  const seen = new WeakSet();

  const walk = (currentValue, path) => {
    if (!currentValue || typeof currentValue !== "object") {
      return;
    }
    if (seen.has(currentValue)) {
      return;
    }
    seen.add(currentValue);

    if (objectContainsAnyTarget(currentValue, targets) && isPotentialProductInfoObject(currentValue)) {
      matches.push({
        source: sourceLabel,
        path: path || sourceLabel,
        value: currentValue,
      });
    }

    if (Array.isArray(currentValue)) {
      currentValue.forEach((item, index) => walk(item, `${path}[${index}]`));
      return;
    }

    Object.entries(currentValue).forEach(([key, nestedValue]) => {
      if (nestedValue && typeof nestedValue === "object") {
        walk(nestedValue, path ? `${path}.${key}` : key);
      }
    });
  };

  walk(value, sourceLabel);
  return matches;
}

function readAllLocalDiagnosticSources() {
  const sources = [];
  const appendStorageSources = (storage, area) => {
    for (let index = 0; index < storage.length; index += 1) {
      const key = storage.key(index);
      const parsed = tryParseJsonValue(storage.getItem(key));
      if (parsed.ok) {
        sources.push({
          source: `${area}:${key}`,
          value: parsed.value,
        });
      }
    }
  };

  appendStorageSources(localStorage, "localStorage");
  appendStorageSources(sessionStorage, "sessionStorage");
  sources.push({ source: "現在の商品一覧", value: items });
  sources.push({ source: "現在の売却先仕分け", value: sortingItems });
  return sources;
}

async function readSupabaseDiagnosticSources() {
  if (!supabaseClient || !cloudUser) {
    return [];
  }

  await loadCloudHousehold();
  const householdIds = cloudUserHouseholdIds.length ? cloudUserHouseholdIds : [cloudHouseholdId].filter(Boolean);
  if (!householdIds.length) {
    return [];
  }

  const { data, error } = await supabaseClient
    .from("items")
    .select("household_id,local_id,title,status,category,storage_location,planned_price,data,updated_at")
    .in("household_id", householdIds);

  if (error) {
    console.warn("Supabase復元候補診断エラー:", error);
    return [];
  }

  return (data || []).map((row) => ({
    source: `Supabase:${row.household_id || "-"}:${row.local_id || "-"}`,
    value: row,
  }));
}

function buildRecoveryCandidateTargets(item, refsMap) {
  const refs = normalizeImageRefs(item.imageRefs);
  const refEntries = getLocalImageRefEntriesForImageId(refs.localImageId, refsMap);
  return Array.from(new Set([
    item.id,
    item.itemCode,
    refs.localImageId,
    refs.googlePhotoId,
    refs.cloudImageId,
    ...refEntries.map((entry) => entry.key),
  ].filter(Boolean).map(String)));
}

function summarizeRecoveryMatch(match) {
  const value = match.value;
  return {
    source: match.source,
    path: match.path,
    title: getAnyTitleCandidate(value),
    storageLocation: getAnyStorageCandidate(value),
    destination: getAnyDestinationCandidate(value),
    memo: getAnyMemoCandidate(value),
    appraisals: getAnyAppraisalCandidates(value),
  };
}

function mergeDiagnosticCandidateValues(summaries) {
  const uniqueValues = (values) => Array.from(new Set(values.filter(Boolean)));
  const appraisals = [];
  const appraisalKeys = new Set();

  summaries.flatMap((summary) => summary.appraisals).forEach((entry) => {
    const key = `${entry.field}:${entry.value}`;
    if (appraisalKeys.has(key)) {
      return;
    }
    appraisalKeys.add(key);
    appraisals.push(entry);
  });

  return {
    titles: uniqueValues(summaries.map((summary) => summary.title)),
    storageLocations: uniqueValues(summaries.map((summary) => summary.storageLocation)),
    destinations: uniqueValues(summaries.map((summary) => summary.destination)),
    memos: uniqueValues(summaries.map((summary) => summary.memo)),
    appraisals,
    sourceKeys: uniqueValues(summaries.map((summary) => `${summary.source} ${summary.path}`)),
  };
}

function getRecoveryConfidence(values) {
  const score = [
    values.titles.length,
    values.storageLocations.length,
    values.destinations.length,
    values.appraisals.length,
    values.memos.length,
  ].filter(Boolean).length;

  if (values.titles.length && score >= 3) {
    return "高";
  }
  if (score >= 2) {
    return "中";
  }
  if (score >= 1 || values.sourceKeys.length) {
    return "低";
  }
  return "低";
}

async function buildRecoveredImageCandidateDiagnostics() {
  const refsMap = loadLocalImageRefs();
  const sources = [
    ...readAllLocalDiagnosticSources(),
    ...await readSupabaseDiagnosticSources(),
  ];
  const recoveredItems = items.filter((item) => {
    const title = getListingTitle(item);
    return isRecoveredPlaceholderTitle(title) || String(item.memo || "").includes("復元候補");
  });

  return recoveredItems.map((item, index) => {
    const targets = buildRecoveryCandidateTargets(item, refsMap);
    const matches = sources.flatMap((source) => collectProductInfoObjectsForTargets(source.value, targets, source.source));
    const summaries = matches
      .map(summarizeRecoveryMatch)
      .filter((summary) => summary.title || summary.storageLocation || summary.destination || summary.memo || summary.appraisals.length);
    const values = mergeDiagnosticCandidateValues(summaries);

    return {
      id: item.id,
      index,
      item,
      targets,
      values,
      confidence: getRecoveryConfidence(values),
    };
  });
}

function formatAppraisalCandidateList(appraisals) {
  return appraisals.length
    ? appraisals.map((entry) => `${entry.label}: ${formatMoney(entry.value)}`).join(" / ")
    : "-";
}

function getDiagnosticApplySummary(diagnostic) {
  return [
    diagnostic.values.titles[0] ? `商品名：${diagnostic.values.titles[0]}` : "",
    diagnostic.values.storageLocations[0] ? `保管場所：${diagnostic.values.storageLocations[0]}` : "",
    diagnostic.values.destinations[0] ? `売却先：${diagnostic.values.destinations[0]}` : "",
    diagnostic.values.appraisals.length ? `査定額：${formatAppraisalCandidateList(diagnostic.values.appraisals)}` : "",
    diagnostic.values.memos[0] ? "メモあり" : "",
  ].filter(Boolean).join("\n") || "適用できる候補情報がありません";
}

function diagnosticHasApplyableValues(diagnostic) {
  return Boolean(
    diagnostic?.values?.titles?.length
    || diagnostic?.values?.storageLocations?.length
    || diagnostic?.values?.destinations?.length
    || diagnostic?.values?.appraisals?.length
    || diagnostic?.values?.memos?.length
  );
}

function applyRecoveredImageDiagnosticValues(diagnostic) {
  const item = items.find((currentItem) => currentItem.id === diagnostic.id);
  if (!item || !diagnosticHasApplyableValues(diagnostic)) {
    return false;
  }

  const title = diagnostic.values.titles[0] || "";
  const storageLocation = diagnostic.values.storageLocations[0] || "";
  const destination = diagnostic.values.destinations[0] || "";
  const memo = diagnostic.values.memos[0] || "";
  const updatedAt = new Date().toISOString();

  if (title) {
    item.name = title;
    item.listingTitle = title;
  }
  if (storageLocation) {
    item.storageLocation = storageLocation;
  }
  if (memo && !String(item.memo || "").includes(memo)) {
    item.memo = [item.memo, memo].filter(Boolean).join("\n");
  }
  item.updatedAt = updatedAt;

  const itemRefs = normalizeImageRefs(item.imageRefs);
  const linkedSortingItems = sortingItems.filter((sortingItem) => {
    const sortingRefs = normalizeImageRefs(sortingItem.imageRefs);
    return sortingItem.sourceItemId === item.id || (itemRefs.localImageId && sortingRefs.localImageId === itemRefs.localImageId);
  });
  const targetSortingItems = linkedSortingItems.length ? linkedSortingItems : [createRecoveredSortingItemFromRecoveredItem(item, { id: itemRefs.localImageId }, diagnostic.index)];

  targetSortingItems.forEach((sortingItem) => {
    if (!sortingItems.includes(sortingItem)) {
      sortingItems.push(sortingItem);
    }
    if (title) {
      sortingItem.name = title;
    }
    if (storageLocation) {
      sortingItem.storageLocation = storageLocation;
    }
    if (destination) {
      sortingItem.destination = destination;
    }
    if (!sortingItem.status || sortingItem.status === "未確認") {
      sortingItem.status = "未確認";
    }
    diagnostic.values.appraisals.forEach((entry) => {
      sortingItem[entry.field] = entry.value;
    });
    if (memo && !String(sortingItem.memo || "").includes(memo)) {
      sortingItem.memo = [sortingItem.memo, memo].filter(Boolean).join("\n");
    }
    sortingItem.updatedAt = updatedAt;
  });

  return true;
}

function saveRecoveryAppliedDataLocally() {
  const didSaveItems = saveItemsToLocalStorage();
  if (!didSaveItems) {
    return false;
  }

  try {
    localStorage.setItem(SORTING_STORAGE_KEY, JSON.stringify(serializeItemsForLocalStorage(sortingItems)));
    return true;
  } catch (error) {
    console.warn("復元情報の仕分け保存エラー:", error);
    showErrorMessage("売却先仕分けデータを保存できませんでした");
    return false;
  }
}

async function promptCloudSaveAfterRecoveryApply() {
  if (!isCloudReady || !supabaseClient || !cloudUser) {
    return;
  }

  const shouldSync = await showAppDialog({
    title: "クラウドへ保存しますか？",
    message: "適用した復元情報をSupabaseへ保存しますか？\n実行するとクラウド側の商品一覧・売却先仕分けデータが更新されます。",
    confirmText: "クラウドへ保存",
    cancelText: "あとで",
  });

  if (!shouldSync) {
    return;
  }

  await syncItemsToSupabase();
  await syncAppStateToSupabase();
  showSuccessMessage("復元情報をクラウドへ保存しました");
}

async function applyRecoveredImageDiagnostic(index) {
  const diagnostic = recoveredImageCandidateDiagnostics[index];
  if (!diagnostic || !diagnosticHasApplyableValues(diagnostic)) {
    showErrorMessage("適用できる候補情報がありません");
    return;
  }

  const shouldApply = await showAppDialog({
    title: "この候補を適用しますか？",
    message: `「${getListingTitle(diagnostic.item)}」へ以下を適用します。\n\n${getDiagnosticApplySummary(diagnostic)}`,
    confirmText: "適用する",
  });

  if (!shouldApply) {
    return;
  }

  if (!applyRecoveredImageDiagnosticValues(diagnostic)) {
    showErrorMessage("候補情報を適用できませんでした");
    return;
  }

  if (!saveRecoveryAppliedDataLocally()) {
    return;
  }
  renderSorting();
  render();
  showSuccessMessage("復元候補を適用しました");
  await promptCloudSaveAfterRecoveryApply();
}

async function applyHighConfidenceRecoveredImageDiagnostics() {
  const highConfidenceDiagnostics = recoveredImageCandidateDiagnostics.filter((diagnostic) => diagnostic.confidence === "高" && diagnosticHasApplyableValues(diagnostic));
  if (!highConfidenceDiagnostics.length) {
    showErrorMessage("高確度の適用候補がありません");
    return;
  }

  const shouldApply = await showAppDialog({
    title: "高確度だけ一括適用しますか？",
    message: `高確度の復元候補 ${highConfidenceDiagnostics.length}件を現在の商品へ適用します。\n既存商品は削除しません。よろしいですか？`,
    confirmText: "一括適用する",
  });

  if (!shouldApply) {
    return;
  }

  const appliedCount = highConfidenceDiagnostics.filter(applyRecoveredImageDiagnosticValues).length;
  if (!saveRecoveryAppliedDataLocally()) {
    return;
  }
  renderSorting();
  render();
  showSuccessMessage(`高確度候補を${appliedCount}件適用しました`);
  await promptCloudSaveAfterRecoveryApply();
}

function createRecoveredImageDiagnosticCard(diagnostic) {
  const card = document.createElement("article");
  card.className = `recovered-image-diagnostic-card confidence-${diagnostic.confidence}`;
  const imageData = getLocalItemImage(diagnostic.item);
  const imageBlock = document.createElement("div");
  imageBlock.className = "recovered-image-diagnostic-thumb";
  if (imageData) {
    const image = document.createElement("img");
    image.src = imageData;
    image.alt = "";
    imageBlock.append(image);
  } else {
    imageBlock.textContent = "画像なし";
  }

  const body = document.createElement("div");
  body.className = "recovered-image-diagnostic-body";
  const title = document.createElement("strong");
  title.textContent = `${diagnostic.index + 1}. ${getListingTitle(diagnostic.item) || "-"}`;
  const grid = document.createElement("div");
  grid.className = "recovered-image-diagnostic-grid";
  [
    ["現在の商品名", getListingTitle(diagnostic.item) || "-"],
    ["商品名候補", diagnostic.values.titles.join(" / ") || "-"],
    ["保管場所候補", diagnostic.values.storageLocations.join(" / ") || "-"],
    ["売却先候補", diagnostic.values.destinations.join(" / ") || "-"],
    ["査定額候補", formatAppraisalCandidateList(diagnostic.values.appraisals)],
    ["メモ候補", diagnostic.values.memos.join(" / ") || "-"],
    ["参照元キー", diagnostic.values.sourceKeys.slice(0, 6).join(" / ") || "-"],
    ["復元確度", diagnostic.confidence],
  ].forEach(([label, value]) => {
    const row = document.createElement("div");
    row.innerHTML = "<span></span><small></small>";
    row.querySelector("span").textContent = label;
    row.querySelector("small").textContent = value;
    grid.append(row);
  });

  const actions = document.createElement("div");
  actions.className = "recovered-image-diagnostic-actions";
  const applyButton = document.createElement("button");
  applyButton.type = "button";
  applyButton.className = "ghost-button";
  applyButton.dataset.applyRecoveredImageDiagnostic = String(diagnostic.index);
  applyButton.disabled = !diagnosticHasApplyableValues(diagnostic);
  applyButton.textContent = "この候補を適用";
  actions.append(applyButton);

  body.append(title, grid, actions);
  card.append(imageBlock, body);
  return card;
}

function renderRecoveredImageCandidateDiagnostics(diagnostics) {
  if (!dataRecoveryResults) {
    return;
  }

  dataRecoveryResults.replaceChildren();
  const panel = document.createElement("section");
  panel.className = "recovered-image-diagnostics";
  const highCount = diagnostics.filter((diagnostic) => diagnostic.confidence === "高" && diagnosticHasApplyableValues(diagnostic)).length;
  const applyableCount = diagnostics.filter(diagnosticHasApplyableValues).length;
  panel.innerHTML = `
    <div class="recovered-image-diagnostics-heading">
      <strong>復元候補の情報診断</strong>
      <small>対象：復元候補 ${diagnostics.length}件 / 情報候補あり ${applyableCount}件 / 高確度 ${highCount}件</small>
      <small>自動上書きはしていません。必要な候補だけ適用できます。</small>
    </div>
  `;

  const actions = document.createElement("div");
  actions.className = "recovered-image-diagnostic-actions";
  const bulkButton = document.createElement("button");
  bulkButton.type = "button";
  bulkButton.className = "primary-button";
  bulkButton.dataset.applyHighConfidenceRecoveredImages = "true";
  bulkButton.disabled = highCount === 0;
  bulkButton.textContent = `高確度だけ一括適用（${highCount}件）`;
  actions.append(bulkButton);

  const list = document.createElement("div");
  list.className = "recovered-image-diagnostic-list";
  diagnostics.forEach((diagnostic) => {
    list.append(createRecoveredImageDiagnosticCard(diagnostic));
  });

  panel.append(actions, list);
  dataRecoveryResults.append(panel);
  console.info("復元候補の情報診断", diagnostics);
}

async function diagnoseRecoveredImageCandidates() {
  recoveredImageCandidateDiagnostics = await buildRecoveredImageCandidateDiagnostics();
  renderRecoveredImageCandidateDiagnostics(recoveredImageCandidateDiagnostics);
  showSuccessMessage(`復元候補診断：${recoveredImageCandidateDiagnostics.length}件`);
}

function summarizeLocalImageRefRecord(record, index, refsMap) {
  const imageId = String(record?.id || "");
  const refEntries = getLocalImageRefEntriesForImageId(imageId, refsMap);
  const refKeys = refEntries.map((entry) => entry.key);
  const targets = Array.from(new Set([
    imageId,
    ...refKeys,
    parseItemCodeFromImageId(imageId),
  ].filter(Boolean)));
  const itemMatches = getCollectionImageMatches(items, targets, "items");
  const sortingMatches = getCollectionImageMatches(sortingItems, targets, "sortingItems");
  const destinationSortingValue = getParsedStorageValue(SORTING_STORAGE_KEY);
  const destinationSortingMatches = destinationSortingValue
    ? collectTargetMatchesFromObject(destinationSortingValue, targets, "destinationSorting")
    : [];
  const localStorageMatches = collectStorageMatchesForTargets(targets);
  const localStyleIds = Array.from(new Set([
    ...extractLocalStyleIdsFromText(imageId),
    ...refKeys.flatMap(extractLocalStyleIdsFromText),
    ...itemMatches.flatMap((match) => extractLocalStyleIdsFromText(JSON.stringify(match))),
    ...sortingMatches.flatMap((match) => extractLocalStyleIdsFromText(JSON.stringify(match))),
  ]));

  return {
    index,
    imageId,
    refEntries,
    refKeys,
    itemCode: parseItemCodeFromImageId(imageId) || refKeys.find((key) => /^ITEM-\d{6}$/.test(key)) || "",
    itemMatches,
    sortingMatches,
    destinationSortingMatches,
    localStorageMatches,
    localStyleIds,
  };
}

function getLocalStyleIdSummary() {
  const collections = [
    { label: "items", value: items },
    { label: "sortingItems", value: sortingItems },
    { label: "destinationSorting", value: getParsedStorageValue(SORTING_STORAGE_KEY) || [] },
  ];

  return collections.map((collection) => {
    const ids = extractLocalStyleIdsFromText(JSON.stringify(collection.value || ""));
    return {
      label: collection.label,
      count: ids.length,
      ids: ids.slice(0, 20),
    };
  });
}

function renderLocalImageRefsAnalysis(records, refsMap) {
  if (!dataRecoveryResults) {
    return;
  }

  dataRecoveryResults.replaceChildren();
  const summaries = records.map((record, index) => summarizeLocalImageRefRecord(record, index, refsMap));
  const refKeys = Object.keys(refsMap);
  const linkedCount = summaries.filter((summary) => summary.refEntries.length || summary.itemMatches.length || summary.sortingMatches.length || summary.destinationSortingMatches.length).length;
  const localStyleSummary = getLocalStyleIdSummary();
  localImageRefsRecoveryCandidate = createLocalImageRefsRecoveryCandidate(records, refsMap);

  const panel = document.createElement("section");
  panel.className = "local-image-ref-analysis";
  panel.innerHTML = `
    <div class="local-image-ref-heading">
      <strong>localImageRefs解析</strong>
      <small>localStorageキー：${LOCAL_IMAGE_REFS_KEY} / ${refKeys.length ? `${refKeys.length}件あり` : "存在しません、または空です"}</small>
      <small>IndexedDB画像：${records.length}件 / 紐付け候補あり：${linkedCount}件 / 紐付け未確認：${records.length - linkedCount}件</small>
      <small>LOCAL系ID：${localStyleSummary.map((entry) => `${entry.label} ${entry.count}件`).join(" / ")}</small>
    </div>
  `;

  const localStyleList = document.createElement("div");
  localStyleList.className = "local-image-ref-id-summary";
  localStyleList.innerHTML = localStyleSummary.map((entry) => `
    <strong>${entry.label}</strong>
    <small>${entry.ids.length ? entry.ids.join(" / ") : "LOCAL-SORTING- / LOCAL- 形式のIDなし"}</small>
  `).join("");

  const recoveryActions = document.createElement("div");
  recoveryActions.className = "indexed-image-recovery-actions local-image-ref-recovery-actions";
  const restoreButton = document.createElement("button");
  restoreButton.type = "button";
  restoreButton.className = "primary-button";
  restoreButton.dataset.createLocalImageRefsRecovery = "true";
  restoreButton.disabled = localImageRefsRecoveryCandidate.count === 0;
  restoreButton.textContent = localImageRefsRecoveryCandidate.count
    ? `localImageRefsの${localImageRefsRecoveryCandidate.count}件を追加統合`
    : "localImageRefs復元候補なし";
  const restoreNote = document.createElement("small");
  restoreNote.textContent = "既存商品は削除せず、画像付きの仮商品として追加します。";
  recoveryActions.append(restoreButton, restoreNote);

  const table = document.createElement("div");
  table.className = "local-image-ref-table";
  table.innerHTML = `
    <div class="local-image-ref-head">#</div>
    <div class="local-image-ref-head">画像ID / 参照キー</div>
    <div class="local-image-ref-head">items</div>
    <div class="local-image-ref-head">sorting / destination</div>
  `;

  summaries.forEach((summary) => {
    const refText = [
      `画像ID: ${summary.imageId || "-"}`,
      summary.refKeys.length ? `参照キー: ${summary.refKeys.join(" / ")}` : "参照キー: なし",
      summary.itemCode ? `商品ID候補: ${summary.itemCode}` : "",
      summary.localStyleIds.length ? `LOCAL系: ${summary.localStyleIds.join(" / ")}` : "",
    ].filter(Boolean).join("\n");
    const itemText = summary.itemMatches.length
      ? summary.itemMatches.map((match) => [
        match.title || match.id || "-",
        match.itemCode ? `商品ID ${match.itemCode}` : "",
        match.storageLocation ? `保管 ${match.storageLocation}` : "",
        `位置 ${match.index + 1}`,
      ].filter(Boolean).join(" / ")).join("\n")
      : "items内の紐付けなし";
    const sortingText = [
      summary.sortingMatches.length
        ? `sortingItems:\n${summary.sortingMatches.map((match) => [
          match.title || match.id || "-",
          match.storageLocation ? `保管 ${match.storageLocation}` : "",
          `位置 ${match.index + 1}`,
        ].filter(Boolean).join(" / ")).join("\n")}`
        : "sortingItems: なし",
      summary.destinationSortingMatches.length
        ? `destinationSorting: ${summary.destinationSortingMatches.slice(0, 4).join(" / ")}`
        : "destinationSorting: なし",
    ].join("\n");

    const indexCell = document.createElement("div");
    indexCell.textContent = String(summary.index + 1);
    const refCell = document.createElement("div");
    refCell.textContent = refText;
    const itemCell = document.createElement("div");
    itemCell.className = summary.itemMatches.length ? "local-image-ref-linked" : "";
    itemCell.textContent = itemText;
    const sortingCell = document.createElement("div");
    sortingCell.className = summary.sortingMatches.length || summary.destinationSortingMatches.length ? "local-image-ref-linked" : "";
    sortingCell.textContent = sortingText;
    table.append(indexCell, refCell, itemCell, sortingCell);
  });

  panel.append(localStyleList, recoveryActions, table);
  dataRecoveryResults.append(panel);
  console.info("localImageRefs解析", {
    localImageRefsExists: localStorage.getItem(LOCAL_IMAGE_REFS_KEY) !== null,
    localImageRefsCount: refKeys.length,
    indexedImageCount: records.length,
    linkedCount,
    localStyleSummary,
    summaries,
  });
}

async function analyzeLocalImageRefs() {
  const refsMap = loadLocalImageRefs();
  const records = await getIndexedDbImageRecords();
  renderLocalImageRefsAnalysis(records, refsMap);
  showSuccessMessage(`localImageRefs解析：画像${records.length}件 / 参照${Object.keys(refsMap).length}件`);
}

async function detectLocalSortingRecoveryData() {
  const candidates = [];

  Object.keys(localStorage).forEach((key) => {
    const rawValue = localStorage.getItem(key);
    if (!rawValue) {
      return;
    }

    try {
      const parsed = JSON.parse(rawValue);
      collectSortingArraysFromObject(parsed, key).forEach((result) => {
        const candidate = createSortingRecoveryCandidate({
          source: "localStorage",
          key,
          path: result.path,
          items: result.items,
        });
        if (candidate) {
          candidates.push(candidate);
        }
      });
    } catch {
      // JSON以外のlocalStorageは復旧候補対象外。
    }
  });

  let indexedImageCount = 0;
  let indexedImageRecords = [];
  if ("indexedDB" in window) {
    try {
      indexedImageRecords = await getIndexedDbImageRecords();
      indexedImageCount = indexedImageRecords.length;
    } catch (error) {
      console.warn("IndexedDB復旧確認エラー:", error);
    }
  }

  sortingRecoveryCandidates = dedupeSortingRecoveryCandidates(candidates);
  indexedImageRecoveryCandidate = indexedImageRecords.length
    ? createIndexedImageRecoveryCandidate(indexedImageRecords)
    : null;
  renderSortingRecoveryCandidates(
    sortingRecoveryCandidates,
    `localStorage内に仕分け復元候補はありませんでした。IndexedDB画像レコード：${indexedImageCount}件`,
  );
  if (indexedImageRecoveryCandidate) {
    renderIndexedImageRecoveryCandidate(indexedImageRecoveryCandidate);
  }
  showSuccessMessage(`ローカル復元候補：${sortingRecoveryCandidates.length}件 / IndexedDB画像：${indexedImageCount}件`);
}

async function detectCloudSortingRecoveryData() {
  if (!supabaseClient || !cloudUser) {
    showErrorMessage("先にクラウドへログインしてください");
    return;
  }

  await loadCloudHousehold();
  const householdIds = cloudUserHouseholdIds.length ? cloudUserHouseholdIds : [cloudHouseholdId].filter(Boolean);

  if (!householdIds.length) {
    showErrorMessage("共有グループが見つかりません");
    return;
  }

  const { data, error } = await supabaseClient
    .from("items")
    .select("household_id,local_id,data,updated_at")
    .in("household_id", householdIds)
    .order("updated_at", { ascending: false });

  if (error) {
    throw error;
  }

  const candidates = [];
  (Array.isArray(data) ? data : []).forEach((row) => {
    collectSortingArraysFromObject(row.data || {}, row.local_id || "cloud.data").forEach((result) => {
      const candidate = createSortingRecoveryCandidate({
        source: "Supabase",
        key: row.local_id || "",
        path: result.path,
        householdId: row.household_id || "",
        updatedAt: row.updated_at || row.data?.updatedAt || "",
        items: result.items,
      });
      if (candidate) {
        candidates.push(candidate);
      }
    });
  });

  sortingRecoveryCandidates = dedupeSortingRecoveryCandidates(candidates);
  renderSortingRecoveryCandidates(sortingRecoveryCandidates, "Supabase内に仕分け復元候補はありませんでした。");
  showSuccessMessage(`クラウド復元候補：${sortingRecoveryCandidates.length}件`);
}

function renderCloudAppStateDiagnosis(rows) {
  if (!dataRecoveryResults) {
    return;
  }

  dataRecoveryResults.replaceChildren();
  const panel = document.createElement("section");
  panel.className = "data-recovery-candidate";
  panel.style.gridTemplateColumns = "1fr";

  const heading = document.createElement("div");
  const title = document.createElement("strong");
  title.textContent = "__app_state__診断結果";
  const description = document.createElement("small");
  description.textContent = rows.length
    ? `Supabaseの__app_state__行：${rows.length}件`
    : "Supabaseに__app_state__行は見つかりませんでした。";
  heading.append(title, description);
  panel.append(heading);

  rows.forEach((row, index) => {
    const data = row.data && typeof row.data === "object" ? row.data : {};
    const sortingArray = Array.isArray(data.sortingItems) ? data.sortingItems : [];
    const templateArray = Array.isArray(data.descriptionTemplates) ? data.descriptionTemplates : [];
    const settingKeys = data.settings && typeof data.settings === "object" ? Object.keys(data.settings) : [];
    const samples = sortingArray.slice(0, 8).map((item) => [
      item.name || item.listingTitle || "商品名なし",
      item.storageLocation ? `保管:${item.storageLocation}` : "",
      item.destination ? `売却先:${item.destination}` : "",
      item.mercariPrice !== undefined && item.mercariPrice !== "" ? `メルカリ:${item.mercariPrice}` : "",
      item.surugayaPrice !== undefined && item.surugayaPrice !== "" ? `駿河屋:${item.surugayaPrice}` : "",
      item.memo ? "メモあり" : "",
    ].filter(Boolean).join(" / "));

    const rowBlock = document.createElement("div");
    rowBlock.className = "data-recovery-candidate";
    rowBlock.style.gridTemplateColumns = "1fr";
    rowBlock.innerHTML = `
      <strong>${index + 1}. household_id: ${row.household_id || "-"}</strong>
      <small>local_id: ${row.local_id || "-"}</small>
      <small>updated_at: ${formatDateTime(row.updated_at)}</small>
      <small>data.__recordType: ${data.__recordType || "-"}</small>
      <small>dataキー: ${Object.keys(data).join(" / ") || "-"}</small>
      <small>sortingItems: ${sortingArray.length}件</small>
      <small>settingsキー: ${settingKeys.join(" / ") || "-"}</small>
      <small>descriptionTemplates: ${templateArray.length}件</small>
      <small>サンプル: ${samples.length ? samples.join(" ｜ ") : "-"}</small>
    `;
    panel.append(rowBlock);
  });

  dataRecoveryResults.append(panel);
}

async function diagnoseCloudAppStateOnly() {
  if (!supabaseClient || !cloudUser) {
    showErrorMessage("先にクラウドへログインしてください");
    return;
  }

  await loadCloudHousehold();
  const householdIds = cloudUserHouseholdIds.length ? cloudUserHouseholdIds : [cloudHouseholdId].filter(Boolean);

  if (!householdIds.length) {
    showErrorMessage("共有グループが見つかりません");
    return;
  }

  const { data, error } = await supabaseClient
    .from("items")
    .select("household_id,local_id,data,updated_at")
    .in("household_id", householdIds)
    .eq("local_id", CLOUD_APP_STATE_LOCAL_ID)
    .order("updated_at", { ascending: false });

  if (error) {
    throw error;
  }

  const rows = Array.isArray(data) ? data : [];
  renderCloudAppStateDiagnosis(rows);
  console.info("__app_state__診断", {
    householdIds,
    rowCount: rows.length,
    rows: rows.map((row) => ({
      household_id: row.household_id,
      local_id: row.local_id,
      updated_at: row.updated_at,
      dataKeys: Object.keys(row.data || {}),
      sortingItemsCount: Array.isArray(row.data?.sortingItems) ? row.data.sortingItems.length : 0,
      settingsKeys: row.data?.settings && typeof row.data.settings === "object" ? Object.keys(row.data.settings) : [],
      templateCount: Array.isArray(row.data?.descriptionTemplates) ? row.data.descriptionTemplates.length : 0,
    })),
  });
  const totalSortingItems = rows.reduce((total, row) => total + (Array.isArray(row.data?.sortingItems) ? row.data.sortingItems.length : 0), 0);
  showSuccessMessage(`__app_state__診断：${rows.length}行 / 仕分け${totalSortingItems}件`);
}

async function restoreSortingRecoveryCandidate(index) {
  const candidate = sortingRecoveryCandidates[index];
  if (!candidate) {
    showErrorMessage("復元候補が見つかりません");
    return;
  }

  const shouldRestore = await showAppDialog({
    title: "売却先仕分けデータの復元",
    message: `現在の売却先仕分け：${sortingItems.length}件\n復元候補：${candidate.count}件\n\n現在のローカルデータが上書きされる可能性があります。\n売却先仕分けデータも対象です。\n\n復元前に現在データを退避してから、候補データで上書きします。続けますか？`,
    confirmText: "復元する",
    danger: true,
  });

  if (!shouldRestore) {
    return;
  }

  await createStoredBackup("復元前", { toast: true });
  const backupKey = `${SORTING_STORAGE_KEY}-recovery-backup-${Date.now()}`;
  localStorage.setItem(backupKey, JSON.stringify(serializeItemsForLocalStorage(sortingItems)));
  sortingItems = candidate.items.map(normalizeSortingItem);
  saveSortingItems();
  resetSortingForm();
  renderSorting();
  render();
  renderSortingRecoveryCandidates([candidate], `復元後：${sortingItems.length}件 / 復元前バックアップ：${backupKey}`);
  showSuccessMessage(`売却先仕分けを${sortingItems.length}件に復元しました`);
}

async function getIndexedDbImageRecords() {
  if (!("indexedDB" in window)) {
    return [];
  }

  try {
    const records = await runImageStoreTransaction("readonly", (store) => store.getAll());
    const imageRecords = Array.isArray(records) ? records.filter((record) => record?.id) : [];
    imageRecords.forEach((record) => {
      if (record.id && record.dataUrl) {
        localImageCache.set(record.id, record.dataUrl);
      }
    });
    return imageRecords;
  } catch (error) {
    console.warn("IndexedDB画像レコード取得エラー:", error);
    return [];
  }
}

function parseItemCodeFromImageId(imageId) {
  const match = String(imageId || "").match(/ITEM-\d{6}/);
  return match ? match[0] : "";
}

function findExistingDataForImageRecord(record) {
  const imageId = String(record?.id || "");
  const refsMap = loadLocalImageRefs();
  const linkedKeys = Object.entries(refsMap)
    .filter(([, refs]) => normalizeImageRefs(refs).localImageId === imageId)
    .map(([key]) => key);
  const itemCode = parseItemCodeFromImageId(imageId);
  const allCandidates = [
    ...items,
    ...sortingItems.map((sortingItem) => ({
      id: sortingItem.sourceItemId || sortingItem.id,
      itemCode: sortingItem.itemCode || itemCode,
      listingTitle: sortingItem.name,
      name: sortingItem.name,
      storageLocation: sortingItem.storageLocation,
      status: sortingItem.status,
      imageRefs: sortingItem.imageRefs,
      createdAt: sortingItem.createdAt,
      updatedAt: sortingItem.updatedAt,
    })),
  ];

  return allCandidates.find((item) => {
    const refs = normalizeImageRefs(item.imageRefs);
    return refs.localImageId === imageId
      || linkedKeys.includes(String(item.id))
      || (itemCode && String(item.itemCode || "") === itemCode);
  }) || null;
}

function createRecoveredItemFromImageRecord(record, index) {
  const imageId = String(record.id || "");
  const refsMap = loadLocalImageRefs();
  const linkedRefKeys = getLocalImageRefEntriesForImageId(imageId, refsMap).map((entry) => entry.key);
  const isSortingImage = imageId.startsWith("LOCAL-SORTING-") || linkedRefKeys.some((key) => key.startsWith("LOCAL-SORTING-"));
  const existingData = findExistingDataForImageRecord(record);
  const itemCode = existingData?.itemCode || parseItemCodeFromImageId(imageId) || "";
  const title = getListingTitle(existingData) || `復元候補 ${String(index + 1).padStart(3, "0")}`;
  const createdAt = record.createdAt || record.updatedAt || existingData?.createdAt || new Date().toISOString();
  const updatedAt = record.updatedAt || existingData?.updatedAt || createdAt;
  const recoveryMemo = [
    "復元候補",
    isSortingImage ? "売却先仕分け由来の画像" : "商品画像由来",
    imageId ? `画像ID:${imageId}` : "",
    linkedRefKeys.length ? `参照キー:${linkedRefKeys.join(", ")}` : "",
  ].filter(Boolean).join(" / ");

  return normalizeItem({
    ...(existingData || {}),
    id: existingData?.id || createId(),
    itemCode,
    name: existingData?.name || title,
    listingTitle: title,
    category: existingData?.category || "",
    condition: existingData?.condition || "",
    status: existingData?.status || "未出品",
    storageLocation: existingData?.storageLocation || "未設定",
    memo: existingData?.memo ? `${existingData.memo}\n${recoveryMemo}` : recoveryMemo,
    imageRefs: normalizeImageRefs({
      ...(existingData?.imageRefs || {}),
      provider: normalizeImageRefs(existingData?.imageRefs).provider || "local",
      localImageId: imageId,
    }),
    imageData: "",
    createdAt,
    updatedAt,
  });
}

function createRecoveredSortingItemFromRecoveredItem(item, record, index) {
  const imageId = normalizeImageRefs(item.imageRefs).localImageId || String(record.id || "");
  const refsMap = loadLocalImageRefs();
  const linkedRefKeys = getLocalImageRefEntriesForImageId(imageId, refsMap).map((entry) => entry.key);
  const isSortingImage = imageId.startsWith("LOCAL-SORTING-") || linkedRefKeys.some((key) => key.startsWith("LOCAL-SORTING-"));
  const existingSorting = sortingItems.find((sortingItem) => {
    const refs = normalizeImageRefs(sortingItem.imageRefs);
    return sortingItem.sourceItemId === item.id || refs.localImageId === imageId;
  });
  const recoveryMemo = [
    "復元候補",
    isSortingImage ? "売却先仕分け由来の画像" : "商品画像由来",
    imageId ? `画像ID:${imageId}` : "",
    linkedRefKeys.length ? `参照キー:${linkedRefKeys.join(", ")}` : "",
  ].filter(Boolean).join(" / ");

  return normalizeSortingItem({
    ...(existingSorting || {}),
    id: existingSorting?.id || createId(),
    sourceItemId: item.id,
    name: getListingTitle(item) || `復元候補 ${String(index + 1).padStart(3, "0")}`,
    storageLocation: existingSorting?.storageLocation || item.storageLocation || "未設定",
    destination: existingSorting?.destination || SORTING_UNDECIDED_DESTINATION,
    status: existingSorting?.status || "未確認",
    shippingStatus: existingSorting?.shippingStatus || "未仕分け",
    imageRefs: normalizeImageRefs({
      ...(existingSorting?.imageRefs || {}),
      provider: "local",
      localImageId: imageId,
    }),
    memo: existingSorting?.memo ? `${existingSorting.memo}\n${recoveryMemo}` : recoveryMemo,
    createdAt: existingSorting?.createdAt || item.createdAt || record.updatedAt || new Date().toISOString(),
    updatedAt: existingSorting?.updatedAt || item.updatedAt || record.updatedAt || new Date().toISOString(),
  });
}

function createIndexedImageRecoveryCandidate(records) {
  const recoveredItems = records.map(createRecoveredItemFromImageRecord);
  const recoveredSortingItems = recoveredItems.map((item, index) => createRecoveredSortingItemFromRecoveredItem(item, records[index], index));

  return {
    id: createId(),
    source: "IndexedDB画像",
    count: recoveredItems.length,
    records,
    items: recoveredItems,
    sortingItems: recoveredSortingItems,
  };
}

function getRecoveredItemDedupKey(item) {
  const refs = normalizeImageRefs(item.imageRefs);
  if (item.itemCode) {
    return `code:${item.itemCode}`;
  }

  if (refs.localImageId) {
    return `image:${refs.localImageId}`;
  }

  return `fallback:${getListingTitle(item)}|${item.storageLocation || ""}`;
}

function createLocalImageRefsRecoveredItem(record, index, refsMap) {
  const imageId = String(record?.id || "");
  const linkedRefKeys = getLocalImageRefEntriesForImageId(imageId, refsMap).map((entry) => entry.key);
  const isSortingImage = imageId.startsWith("LOCAL-SORTING-") || linkedRefKeys.some((key) => key.startsWith("LOCAL-SORTING-"));
  const title = `復元候補 ${String(index + 1).padStart(3, "0")}`;
  const createdAt = record?.createdAt || record?.updatedAt || new Date().toISOString();
  const updatedAt = record?.updatedAt || createdAt;
  const recoveryMemo = [
    "復元候補",
    "画像由来",
    "要確認",
    isSortingImage ? "売却先仕分け由来" : "",
    imageId ? `画像ID:${imageId}` : "",
    linkedRefKeys.length ? `参照キー:${linkedRefKeys.join(", ")}` : "",
  ].filter(Boolean).join(" / ");

  return normalizeItem({
    id: createId(),
    itemCode: "",
    name: title,
    listingTitle: title,
    category: "",
    condition: "",
    status: "未出品",
    storageLocation: "未設定",
    memo: recoveryMemo,
    imageRefs: normalizeImageRefs({
      provider: "local",
      localImageId: imageId,
    }),
    imageData: "",
    createdAt,
    updatedAt,
  });
}

function createLocalImageRefsRecoveredSortingItem(item, record, index, refsMap) {
  const imageId = normalizeImageRefs(item.imageRefs).localImageId || String(record?.id || "");
  const linkedRefKeys = getLocalImageRefEntriesForImageId(imageId, refsMap).map((entry) => entry.key);
  const isSortingImage = imageId.startsWith("LOCAL-SORTING-") || linkedRefKeys.some((key) => key.startsWith("LOCAL-SORTING-"));
  const recoveryMemo = [
    "復元候補",
    "画像由来",
    "要確認",
    isSortingImage ? "売却先仕分け由来" : "",
    imageId ? `画像ID:${imageId}` : "",
    linkedRefKeys.length ? `参照キー:${linkedRefKeys.join(", ")}` : "",
  ].filter(Boolean).join(" / ");

  return normalizeSortingItem({
    id: createId(),
    sourceItemId: item.id,
    name: getListingTitle(item) || `復元候補 ${String(index + 1).padStart(3, "0")}`,
    storageLocation: "未設定",
    destination: SORTING_UNDECIDED_DESTINATION,
    status: "未確認",
    shippingStatus: "未仕分け",
    imageRefs: normalizeImageRefs({
      provider: "local",
      localImageId: imageId,
    }),
    memo: recoveryMemo,
    createdAt: item.createdAt || record?.updatedAt || new Date().toISOString(),
    updatedAt: item.updatedAt || record?.updatedAt || new Date().toISOString(),
  });
}

function createLocalImageRefsRecoveryCandidate(records, refsMap) {
  const matchedRecords = records.filter((record) => getLocalImageRefEntriesForImageId(String(record?.id || ""), refsMap).length > 0);
  const recoveredItems = matchedRecords.map((record, index) => createLocalImageRefsRecoveredItem(record, index, refsMap));
  const recoveredSortingItems = recoveredItems.map((item, index) => createLocalImageRefsRecoveredSortingItem(item, matchedRecords[index], index, refsMap));

  return {
    id: createId(),
    source: "localImageRefs解析",
    count: recoveredItems.length,
    records: matchedRecords,
    items: recoveredItems,
    sortingItems: recoveredSortingItems,
    confirmationLabel: "localImageRefs解析結果",
  };
}

function getRecoveredSortingDedupKeys(item) {
  const refs = normalizeImageRefs(item.imageRefs);
  return [
    item.sourceItemId ? `source:${item.sourceItemId}` : "",
    refs.localImageId ? `image:${refs.localImageId}` : "",
    `fallback:${item.name}|${item.storageLocation}`,
  ].filter(Boolean);
}

function mergeRecoveredItems(currentItems, recoveredItems) {
  const existingKeys = new Set(currentItems.map(getRecoveredItemDedupKey));
  const mergedItems = [...currentItems];
  const addedItems = [];

  recoveredItems.forEach((item) => {
    const key = getRecoveredItemDedupKey(item);
    if (existingKeys.has(key)) {
      return;
    }

    existingKeys.add(key);
    mergedItems.push(item);
    addedItems.push(item);
  });

  return { mergedItems, addedItems };
}

function mergeRecoveredSortingItems(currentSortingItems, recoveredSortingItems, addedItems) {
  const addedItemIds = new Set(addedItems.map((item) => item.id));
  const existingKeys = new Set(currentSortingItems.flatMap(getRecoveredSortingDedupKeys));
  const mergedSortingItems = [...currentSortingItems];
  const addedSortingItems = [];

  recoveredSortingItems.forEach((item) => {
    if (item.sourceItemId && !addedItemIds.has(item.sourceItemId) && currentSortingItems.some((currentItem) => currentItem.sourceItemId === item.sourceItemId)) {
      return;
    }

    const keys = getRecoveredSortingDedupKeys(item);
    if (keys.some((key) => existingKeys.has(key))) {
      return;
    }

    keys.forEach((key) => existingKeys.add(key));
    mergedSortingItems.push(item);
    addedSortingItems.push(item);
  });

  return { mergedSortingItems, addedSortingItems };
}

function renderIndexedImageRecoveryCandidate(candidate) {
  if (!dataRecoveryResults || !candidate?.records?.length) {
    return;
  }

  const wrapper = document.createElement("section");
  wrapper.className = "indexed-image-recovery-candidate";

  const heading = document.createElement("div");
  heading.className = "indexed-image-recovery-heading";
  heading.innerHTML = `<strong>${candidate.source || "IndexedDB画像"} ${candidate.count}件</strong><small>画像レコードから商品一覧・売却先仕分けへ復元できます</small>`;

  const list = document.createElement("div");
  list.className = "indexed-image-recovery-list";
  candidate.items.forEach((item, index) => {
    const refs = normalizeImageRefs(item.imageRefs);
    const record = candidate.records[index] || {};
    const row = document.createElement("div");
    row.className = "indexed-image-recovery-row";
    row.innerHTML = `
      <div>
        <strong></strong>
        <span></span>
      </div>
      <small></small>
    `;
    row.querySelector("strong").textContent = getListingTitle(item) || "-";
    row.querySelector("span").textContent = [
      `保管場所：${item.storageLocation || "未設定"}`,
      `画像：${refs.localImageId ? "あり" : "なし"}`,
      item.itemCode ? `商品ID：${item.itemCode}` : "",
    ].filter(Boolean).join(" / ");
    row.querySelector("small").textContent = `作成/更新：${formatDateTime(record.updatedAt || item.createdAt || item.updatedAt)}`;
    list.append(row);
  });

  const actions = document.createElement("div");
  actions.className = "indexed-image-recovery-actions";

  const mergeButton = document.createElement("button");
  mergeButton.className = "primary-button";
  mergeButton.type = "button";
  mergeButton.dataset.recoverIndexedImagesMode = "merge";
  mergeButton.textContent = "画像付き復元候補を追加統合";

  const cancelButton = document.createElement("button");
  cancelButton.className = "ghost-button";
  cancelButton.type = "button";
  cancelButton.dataset.recoverIndexedImagesMode = "cancel";
  cancelButton.textContent = "復元しない";

  actions.append(mergeButton, cancelButton);
  wrapper.append(heading, list, actions);
  dataRecoveryResults.append(wrapper);
}

async function restoreIndexedImageRecoveryCandidate(mode = "merge") {
  const candidate = indexedImageRecoveryCandidate;
  if (!candidate?.items?.length) {
    showErrorMessage("IndexedDB画像の復元候補がありません");
    return;
  }

  if (mode === "cancel") {
    indexedImageRecoveryCandidate = null;
    renderSortingRecoveryCandidates(sortingRecoveryCandidates, "IndexedDB画像の復元は行いませんでした。");
    showSuccessMessage("復元をキャンセルしました");
    return;
  }

  const beforeItemCount = items.length;
  const beforeSortingCount = sortingItems.length;
  const sourceLabel = candidate.confirmationLabel || candidate.source || "IndexedDB画像";
  const confirmationMessage = `${sourceLabel}の画像付き復元候補${candidate.count}件を商品一覧へ追加します。現在の商品${beforeItemCount}件は削除しません。よろしいですか？`;

  const shouldRestore = await showAppDialog({
    title: "IndexedDB画像から復元",
    message: confirmationMessage,
    confirmText: "追加統合する",
    danger: false,
  });

  if (!shouldRestore) {
    return;
  }

  const backupSuffix = Date.now();
  const previousItems = [...items];
  const previousSortingItems = [...sortingItems];
  const previousLocalImageRefs = loadLocalImageRefs();
  try {
    await createStoredBackup("復元前", { toast: true });
    localStorage.setItem(`${STORAGE_KEY}-indexeddb-recovery-backup-${backupSuffix}`, JSON.stringify(serializeItemsForLocalStorage(previousItems)));
    localStorage.setItem(`${SORTING_STORAGE_KEY}-indexeddb-recovery-backup-${backupSuffix}`, JSON.stringify(serializeItemsForLocalStorage(previousSortingItems)));
  } catch (error) {
    console.warn("復元前バックアップ保存エラー:", error);
    const shouldContinueWithoutBackup = await showAppDialog({
      title: "バックアップを保存できません",
      message: "端末容量などの理由で復元前バックアップを保存できませんでした。このまま追加統合を続けますか？",
      confirmText: "続ける",
      cancelText: "中止",
      danger: true,
    });

    if (!shouldContinueWithoutBackup) {
      return;
    }
  }

  let restoredCount = 0;
  let restoredSortingCount = 0;

  const itemMergeResult = mergeRecoveredItems(items, candidate.items);
  const sortingMergeResult = mergeRecoveredSortingItems(sortingItems, candidate.sortingItems, itemMergeResult.addedItems);
  items = itemMergeResult.mergedItems;
  sortingItems = sortingMergeResult.mergedSortingItems;
  restoredCount = itemMergeResult.addedItems.length;
  restoredSortingCount = sortingMergeResult.addedSortingItems.length;

  const restoredLocalImageItems = items.filter((item) => candidate.items.some((candidateItem) => getRecoveredItemDedupKey(candidateItem) === getRecoveredItemDedupKey(item)));
  restoredLocalImageItems.forEach((item) => {
    const refs = normalizeImageRefs(item.imageRefs);
    if (refs.localImageId) {
      saveLocalImageRefsForItem(item, refs);
    }
  });

  const didSaveItems = saveItemsToLocalStorage();
  if (!didSaveItems) {
    items = previousItems;
    sortingItems = previousSortingItems;
    saveLocalImageRefs(previousLocalImageRefs);
    render();
    renderSorting();
    return;
  }

  try {
    localStorage.setItem(SORTING_STORAGE_KEY, JSON.stringify(serializeItemsForLocalStorage(sortingItems)));
  } catch (error) {
    items = previousItems;
    sortingItems = previousSortingItems;
    saveLocalImageRefs(previousLocalImageRefs);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serializeItemsForLocalStorage(previousItems)));
    localStorage.setItem(SORTING_STORAGE_KEY, JSON.stringify(serializeItemsForLocalStorage(previousSortingItems)));
    render();
    renderSorting();
    console.warn("売却先仕分け復元保存エラー:", error);
    showErrorMessage("売却先仕分けデータを保存できませんでした。端末容量を確認してください。");
    return;
  }

  const persistedItemCount = loadItems().length;
  const persistedSortingCount = loadSortingItems().length;
  console.info("IndexedDB復元完了", {
    mode: "追加統合",
    beforeItemCount,
    restoredCount,
    afterItemCount: items.length,
    persistedItemCount,
    beforeSortingCount,
    restoredSortingCount,
    afterSortingCount: sortingItems.length,
    persistedSortingCount,
  });
  resetSortingForm();
  renderSorting();
  render();
  renderIndexedImageRecoveryCompletion({
    beforeItemCount,
    restoredCount,
    afterItemCount: items.length,
    persistedItemCount,
    beforeSortingCount,
    restoredSortingCount,
    afterSortingCount: sortingItems.length,
    persistedSortingCount,
  });
  indexedImageRecoveryCandidate = null;
  localImageRefsRecoveryCandidate = null;

  if (isCloudReady && supabaseClient && cloudUser) {
    const shouldSync = await showAppDialog({
      title: "クラウドへ保存しますか？",
      message: "復元したデータをクラウドへ保存しますか？\n実行するとクラウド側の商品一覧・売却先仕分けデータが更新されます。",
      confirmText: "クラウドへ保存",
    });

    if (shouldSync) {
      await syncItemsToSupabase();
      await syncAppStateToSupabase();
      showSuccessMessage("復元データをクラウドへ同期しました");
      return;
    }
  }

  showSuccessMessage(`復元完了：${restoredCount}件追加 / 現在${items.length}件`);
}

function renderIndexedImageRecoveryCompletion({ beforeItemCount, restoredCount, afterItemCount, persistedItemCount, beforeSortingCount, restoredSortingCount, afterSortingCount, persistedSortingCount }) {
  if (!dataRecoveryResults) {
    return;
  }

  dataRecoveryResults.replaceChildren();
  const panel = document.createElement("div");
  panel.className = "indexed-image-recovery-complete";
  panel.innerHTML = `
    <strong>復元完了</strong>
    <span>復元前 ${beforeItemCount}件</span>
    <span>IndexedDB復元 ${restoredCount}件</span>
    <span>現在 ${afterItemCount}件</span>
    <small>再読み込み確認：商品 ${persistedItemCount}件 / 売却先仕分け ${persistedSortingCount}件</small>
    <small>仕分け：復元前 ${beforeSortingCount}件 / 復元 ${restoredSortingCount}件 / 現在 ${afterSortingCount}件</small>
  `;
  dataRecoveryResults.append(panel);
}

function normalizeSettings(value) {
  return {
    categories: normalizeList(value.categories, DEFAULT_SETTINGS.categories),
    shippingMethods: normalizeShippingMethods(value.shippingMethods),
    storageLocations: normalizeList(value.storageLocations, DEFAULT_SETTINGS.storageLocations),
    appraisalSources: normalizeAppraisalSources(value.appraisalSources),
  };
}

function normalizeAppraisalSources(value) {
  if (!Array.isArray(value)) {
    return DEFAULT_SETTINGS.appraisalSources.map((source) => ({ ...source }));
  }

  const normalized = value
    .map((source) => {
      const fallbackSource = DEFAULT_SETTINGS.appraisalSources.find((defaultSource) => defaultSource.id === source.id) || {};
      const id = String(source.id || createId()).trim();
      return {
        id,
        field: String(source.field || fallbackSource.field || `appraisal_${id}`).trim(),
        name: source.id === "ryoban" && String(source.name || "").trim() === "良盤"
          ? "良盤ディスク"
          : String(source.name || "").trim(),
      };
    })
    .filter((source) => source.name);

  const deduped = [];
  normalized.forEach((source) => {
    if (!deduped.some((currentSource) => currentSource.id === source.id || currentSource.field === source.field || currentSource.name === source.name)) {
      deduped.push(source);
    }
  });

  const legacyDefaultIds = ["mercari", "yahoo", "surugaya", "ryoban", "ecoRing", "clothes", "other"];
  const isLegacyDefaultSet = deduped.length === legacyDefaultIds.length
    && legacyDefaultIds.every((id) => deduped.some((source) => source.id === id));

  if (isLegacyDefaultSet) {
    DEFAULT_SETTINGS.appraisalSources.forEach((defaultSource) => {
      if (!deduped.some((source) => source.id === defaultSource.id)) {
        deduped.push({ ...defaultSource });
      }
    });
  }

  return deduped.length > 0 ? deduped : DEFAULT_SETTINGS.appraisalSources.map((source) => ({ ...source }));
}

function normalizeTemplates(value, fallback = DEFAULT_TEMPLATES) {
  const source = Array.isArray(value) ? value : fallback;
  const normalized = source
    .map((template) => ({
      id: String(template.id || createId()),
      name: String(template.name || "").trim(),
      content: String(template.content || "").trim(),
      categoryHint: String(template.categoryHint || "").trim(),
    }))
    .filter((template) => template.name && template.content);

  return normalized.length > 0 || fallback.length === 0
    ? normalized
    : DEFAULT_TEMPLATES.map((template) => ({ ...template }));
}

function normalizeList(value, fallback) {
  if (!Array.isArray(value)) {
    return [...fallback];
  }

  const normalized = value.map((item) => String(item).trim()).filter(Boolean);
  return normalized.length > 0 ? normalized : [...fallback];
}

function normalizeShippingMethods(value) {
  if (!Array.isArray(value)) {
    return DEFAULT_SETTINGS.shippingMethods.map((method) => ({ ...method }));
  }

  const normalized = value
    .map((method) => ({
      name: normalizeShippingMethodName(method.name),
      cost: parseMoney(method.cost) === "" ? 0 : parseMoney(method.cost),
    }))
    .filter((method) => method.name);

  const deduped = [];
  normalized.forEach((method) => {
    if (!deduped.some((currentMethod) => currentMethod.name === method.name)) {
      deduped.push(method);
    }
  });

  const methods = deduped.length > 0 ? deduped : DEFAULT_SETTINGS.shippingMethods.map((method) => ({ ...method }));
  DEFAULT_SETTINGS.shippingMethods.forEach((defaultMethod) => {
    if (!methods.some((method) => method.name === defaultMethod.name)) {
      methods.push({ ...defaultMethod });
    }
  });
  return methods;
}

function normalizeShippingMethodName(value) {
  const name = String(value || "").trim();
  return name === "定形外" ? "定形外郵便" : name;
}

function formatHistoryValue(value) {
  if (value === "" || value === null || value === undefined) {
    return "未設定";
  }

  return String(value);
}

function buildEditHistoryEntry(changes, updatedAt = new Date().toISOString()) {
  const normalizedChanges = Array.isArray(changes)
    ? changes.map((change) => String(change || "").trim()).filter(Boolean)
    : [String(changes || "").trim()].filter(Boolean);

  if (normalizedChanges.length === 0) {
    return null;
  }

  return {
    updatedAt,
    changes: normalizedChanges,
  };
}

function appendEditHistory(item, changes, updatedAt = new Date().toISOString()) {
  const entry = buildEditHistoryEntry(changes, updatedAt);

  if (!entry) {
    return normalizeEditHistory(item.editHistory);
  }

  return [entry, ...normalizeEditHistory(item.editHistory)].slice(0, 100);
}

function getItemChangeDescriptions(beforeItem = {}, afterItem = {}) {
  const fields = [
    ["listingTitle", "商品名", (item) => getListingTitle(item)],
    ["category", "カテゴリ"],
    ["condition", "状態"],
    ["status", "出品状態", (item) => getItemStatus(item)],
    ["storageLocation", "保管場所"],
    ["plannedPrice", "販売価格", (item) => parseMoney(item.plannedPrice)],
    ["shippingMethod", "配送方法"],
    ["shippingCost", "送料", (item) => parseMoney(item.shippingCost)],
    ["purchaseCost", "原価", (item) => parseMoney(item.purchaseCost)],
    ["description", "商品説明"],
    ["memo", "メモ"],
    ["listingUrl", "出品URL"],
    ["imageProvider", "画像管理方式", (item) => normalizeImageRefs(item.imageRefs).provider],
    ["googlePhotoId", "GoogleフォトID", (item) => normalizeImageRefs(item.imageRefs).googlePhotoId],
    ["localImageId", "ローカル画像ID", (item) => normalizeImageRefs(item.imageRefs).localImageId],
    ["cloudImageId", "クラウド画像ID", (item) => normalizeImageRefs(item.imageRefs).cloudImageId],
    ["soldDate", "売却日"],
    ["actualSalePrice", "実売価格", (item) => parseMoney(item.actualSalePrice)],
    ["actualShippingCost", "実送料", (item) => parseMoney(item.actualShippingCost)],
  ];

  return fields
    .map(([fieldName, label, getter]) => {
      const getValue = getter || ((item) => item[fieldName]);
      const beforeValue = getValue(beforeItem);
      const afterValue = getValue(afterItem);

      if (String(beforeValue ?? "") === String(afterValue ?? "")) {
        return "";
      }

      return `${label}: ${formatHistoryValue(beforeValue)} → ${formatHistoryValue(afterValue)}`;
    })
    .filter(Boolean);
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  syncAppStateToSupabase().catch((error) => {
    handleCloudSaveError(error);
  });
}

function stripImageDataForStorage(item) {
  const { imageData, ...rest } = item || {};
  return {
    ...rest,
    imageRefs: normalizeImageRefs(rest.imageRefs),
  };
}

function serializeItemsForLocalStorage(sourceItems) {
  return sourceItems.map(stripImageDataForStorage);
}

function saveTemplates() {
  localStorage.setItem(TEMPLATES_KEY, JSON.stringify(descriptionTemplates));
  syncAppStateToSupabase().catch((error) => {
    handleCloudSaveError(error);
  });
}

function saveSortingItems() {
  localStorage.setItem(SORTING_STORAGE_KEY, JSON.stringify(serializeItemsForLocalStorage(sortingItems)));
  syncAppStateToSupabase().catch((error) => {
    handleCloudSaveError(error);
  });
}

function saveItemsToLocalStorage() {
  ensureItemCodes(items);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serializeItemsForLocalStorage(items)));
    return true;
  } catch {
    showErrorMessage("商品データを保存できませんでした。端末容量を確認してください。");
    return false;
  }
}

function saveItems() {
  const didSaveLocal = saveItemsToLocalStorage();

  if (didSaveLocal) {
    syncItemsToSupabase().catch((error) => {
      handleCloudSaveError(error);
    });
  }

  return didSaveLocal;
}

function loadSupabaseConfig() {
  return {
    url: String(SUPABASE_URL || "").trim(),
    anonKey: String(SUPABASE_PUBLISHABLE_KEY || "").trim(),
  };
}

function setCloudStatus(message, type = "") {
  cloudStatus.textContent = message;
  if (cloudSyncState) {
    const syncLabel = type === "connected"
      ? "現在の保存先：Supabase"
      : type === "warning"
        ? "現在の保存先：注意あり"
        : "現在の保存先：localStorage";
    cloudSyncState.textContent = syncLabel;
  }
  cloudPanel.classList.toggle("cloud-connected", type === "connected");
  cloudPanel.classList.toggle("cloud-warning", type === "warning");
}

function formatCloudSyncTime(value) {
  const dateTime = formatCloudSyncDateTime(value);
  return dateTime === "-" ? "最終同期 -" : `最終同期 ${dateTime}`;
}

function formatCloudSyncDateTime(value) {
  if (!value) {
    return "-";
  }
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}/${month}/${day} ${hours}:${minutes}`;
}

function formatCloudSyncDisplay(value) {
  return `☁ 最終同期\n${formatCloudSyncDateTime(value)}`;
}

function updateCloudLastSyncDisplay() {
  if (!cloudLastSync) {
    return;
  }

  cloudLastSync.textContent = formatCloudSyncDisplay(localStorage.getItem(CLOUD_LAST_SYNC_KEY));
  updateCloudSyncStatusTime();
}

function updateCloudSyncStatusTime() {
  if (!cloudSyncStatusTime) {
    return;
  }

  cloudSyncStatusTime.textContent = formatCloudSyncDateTime(localStorage.getItem(CLOUD_LAST_SYNC_KEY));
}

function setCloudSyncStatus(kind, note = "") {
  cloudSyncStatusKind = kind;

  if (!cloudSyncStatusCard || !cloudSyncStatusText || !cloudSyncStatusNote) {
    return;
  }

  const statusMap = {
    synced: {
      label: "同期済み",
      note: "クラウドとこの端末は同期済みです。",
    },
    "cloud-update": {
      label: "クラウド更新あり",
      note: "新しいデータがあります。",
    },
    failed: {
      label: "同期失敗",
      note: "同期状態を確認できませんでした。",
    },
    "logged-out": {
      label: "未ログイン",
      note: "ログインすると同期状態を確認できます。",
    },
  };
  const status = statusMap[kind] || statusMap["logged-out"];

  cloudSyncStatusCard.dataset.syncStatus = kind;
  cloudSyncStatusText.textContent = status.label;
  cloudSyncStatusNote.textContent = note || status.note;
  updateCloudSyncStatusTime();
}

function updateCloudFetchCount(count = null) {
  if (!cloudFetchCount) {
    return;
  }

  cloudFetchCount.textContent = Number.isFinite(count)
    ? `取得商品数：${count}件`
    : "取得商品数：-";
}

function getLocalStorageDebugCounts() {
  return {
    items: loadItems().length,
    sortingItems: loadSortingItems().length,
    settingsCategories: loadSettings().categories.length,
    templates: loadTemplates().length,
  };
}

function logCloudDataSource(reason = "", fetchedCount = null) {
  const source = isCloudReady ? "Supabase" : "localStorage";
  const lastSync = formatCloudSyncTime(localStorage.getItem(CLOUD_LAST_SYNC_KEY));
  const localCounts = getLocalStorageDebugCounts();
  console.log(`現在の保存先：${source}`);
  console.log(`ログイン状態：${cloudUser ? "ログイン中" : "未ログイン"}`);
  console.log(`ログインユーザーID：${cloudUser?.id || "-"}`);
  console.log(`所属household_id：${cloudHouseholdId || "-"}`);
  console.log(`所属グループ一覧：${cloudUserHouseholdIds.length ? cloudUserHouseholdIds.join(", ") : "-"}`);
  console.log(`共有メンバーuser_id：${cloudHouseholdMemberIds.length ? cloudHouseholdMemberIds.join(", ") : "-"}`);
  console.log(`Supabase取得件数：${Number.isFinite(fetchedCount) ? `${fetchedCount}件` : "-"}`);
  console.log(`localStorage取得件数：商品${localCounts.items}件 / 仕分け${localCounts.sortingItems}件 / カテゴリ${localCounts.settingsCategories}件 / テンプレ${localCounts.templates}件`);
  console.log(lastSync);
  if (reason) {
    console.log(`同期理由：${reason}`);
  }
}

function showToast(message, type = "success") {
  if (!toastNotification) {
    return;
  }

  clearTimeout(toastTimer);
  toastNotification.textContent = message;
  toastNotification.classList.remove("hidden", "toast-success", "toast-error", "toast-visible");
  toastNotification.classList.add(type === "error" ? "toast-error" : "toast-success");

  requestAnimationFrame(() => {
    toastNotification.classList.add("toast-visible");
  });

  toastTimer = setTimeout(() => {
    toastNotification.classList.remove("toast-visible");
    setTimeout(() => {
      toastNotification.classList.add("hidden");
    }, 220);
  }, 1800);
}

function showSuccessMessage(message) {
  showToast(message, "success");
}

function showErrorMessage(message) {
  showToast(message, "error");
}

function showAppDialog({
  title = "確認",
  message = "",
  confirmText = "OK",
  cancelText = "キャンセル",
  danger = false,
} = {}) {
  if (!appDialog || !appDialogTitle || !appDialogMessage || !appDialogCancel || !appDialogConfirm) {
    showErrorMessage("確認ダイアログを表示できませんでした");
    return Promise.resolve(false);
  }

  return new Promise((resolve) => {
    const close = (result) => {
      appDialog.classList.add("hidden");
      appDialogConfirm.removeEventListener("click", onConfirm);
      appDialogCancel.removeEventListener("click", onCancel);
      appDialog.removeEventListener("click", onBackdrop);
      document.removeEventListener("keydown", onKeydown);
      resolve(result);
    };
    const onConfirm = () => close(true);
    const onCancel = () => close(false);
    const onBackdrop = (event) => {
      if (event.target === appDialog) {
        close(false);
      }
    };
    const onKeydown = (event) => {
      if (event.key === "Escape") {
        close(false);
      }
    };

    appDialogTitle.textContent = title;
    appDialogMessage.textContent = message;
    appDialogCancel.textContent = cancelText;
    appDialogConfirm.textContent = confirmText;
    appDialogConfirm.classList.toggle("danger-button", danger);
    appDialogConfirm.classList.toggle("primary-button", !danger);
    appDialog.classList.remove("hidden");
    appDialogConfirm.addEventListener("click", onConfirm);
    appDialogCancel.addEventListener("click", onCancel);
    appDialog.addEventListener("click", onBackdrop);
    document.addEventListener("keydown", onKeydown);
    appDialogConfirm.focus();
  });
}

function confirmDelete(message) {
  return showAppDialog({
    title: "削除確認",
    message,
    confirmText: "削除",
    danger: true,
  });
}

function confirmCancel(message) {
  return showAppDialog({
    title: "キャンセル確認",
    message,
    confirmText: "続ける",
  });
}

function markCloudSynced() {
  localStorage.setItem(CLOUD_LAST_SYNC_KEY, new Date().toISOString());
  updateCloudLastSyncDisplay();
  setCloudSyncStatus("synced");
  logCloudDataSource("同期完了");
}

function renderCloudAuthState() {
  const email = cloudUser?.email || "";
  const isLoggedIn = Boolean(cloudUser && cloudHouseholdId);

  cloudLoginButton.disabled = false;
  cloudLogoutButton.classList.toggle("hidden", !cloudUser);
  migrateToSupabaseButton.classList.toggle("hidden", !isLoggedIn);
  cloudReloadButton?.classList.toggle("hidden", !isLoggedIn);
  mobileCloudReloadButton?.classList.toggle("hidden", !isLoggedIn);
  cloudHouseholdTools?.classList.add("hidden");
  cloudPanel.classList.toggle("cloud-logged-in", isLoggedIn);
  cloudEmailInput.disabled = Boolean(cloudUser);
  cloudPasswordInput.disabled = Boolean(cloudUser);
  if (cloudHouseholdInput && cloudHouseholdId && cloudHouseholdInput !== document.activeElement) {
    cloudHouseholdInput.value = cloudHouseholdId;
  }
  if (cloudUser) {
    cloudPasswordInput.value = "";
  }

  if (isLoggedIn) {
    setCloudStatus(email, "connected");
    updateCloudLastSyncDisplay();
    if (!["cloud-update", "failed"].includes(cloudSyncStatusKind)) {
      setCloudSyncStatus("synced");
    }
    return;
  }

  if (cloudUser && !cloudHouseholdId) {
    setCloudStatus("共有グループ未設定", "warning");
    setCloudSyncStatus("failed", "共有グループが未設定のため同期できません。");
    updateCloudFetchCount(null);
    return;
  }

  setCloudStatus("未ログイン");
  setCloudSyncStatus("logged-out");
  updateCloudLastSyncDisplay();
  updateCloudFetchCount(null);
}

function confirmCloudOverwriteAction(actionName) {
  return showAppDialog({
    title: `${actionName}の確認`,
    message: `${actionName}を実行すると、クラウド側の内容でこの端末の表示データを更新します。\n\n現在のローカルデータが上書きされる可能性があります。\n売却先仕分けデータも対象です。\n\n不安な場合は先に「旧ローカルデータ検出」を実行してください。続けますか？`,
    confirmText: "続ける",
    danger: true,
  });
}

function collapseCloudPanelOnMobile() {
  if (cloudPanel && window.matchMedia("(max-width: 700px)").matches) {
    cloudPanel.removeAttribute("open");
  }
}

function collapseSortingExtrasOnMobile() {
  if (!window.matchMedia("(max-width: 700px)").matches) {
    return;
  }

  document.querySelectorAll(".sorting-extra-card").forEach((details) => {
    details.removeAttribute("open");
  });
}

function initializeSortingFormAccordions() {
  const sections = [...sortingForm.querySelectorAll(".sorting-form-card")];

  if (sections.length === 0) {
    return;
  }

  sections.forEach((details, index) => {
    if (!(details instanceof HTMLDetailsElement)) {
      return;
    }

    details.open = index === 0;
    details.addEventListener("toggle", () => {
      if (!details.open) {
        return;
      }

      sections.forEach((section) => {
        if (section !== details && section instanceof HTMLDetailsElement) {
          section.open = false;
        }
      });
    });
  });
}

function openSortingFormDrawer() {
  if (sortingFormDrawer) {
    sortingFormDrawer.open = true;
  }
}

function closeSortingFormDrawer() {
  if (sortingFormDrawer) {
    sortingFormDrawer.open = false;
  }
}

function initializeSupabaseClient() {
  const config = loadSupabaseConfig();

  if (!config.url || !config.anonKey) {
    setCloudStatus("Supabase接続情報がコード側に未設定です。設定されるまではローカル保存です。", "warning");
    return false;
  }

  if (!window.supabase?.createClient) {
    setCloudStatus("Supabaseライブラリを読み込めませんでした。ネット接続を確認してください。ローカル保存で継続します。", "warning");
    return false;
  }

  supabaseClient = window.supabase.createClient(config.url, config.anonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
    },
  });
  return true;
}

async function initializeCloud() {
  if (!initializeSupabaseClient()) {
    renderCloudAuthState();
    render();
    return;
  }

  try {
    const { data, error } = await supabaseClient.auth.getSession();

    if (error) {
      throw error;
    }

    supabaseSession = data.session;
    cloudUser = data.session?.user || null;

    if (cloudUser) {
      await loadCloudHousehold();
      await reloadCloudData({ reason: "アプリ起動" });
    }
  } catch (error) {
    setCloudSyncStatus("failed", "クラウド接続に失敗しました。");
    setCloudStatus(`Supabase接続に失敗しました。ローカル保存で継続します: ${error.message}`, "warning");
  } finally {
    renderCloudAuthState();
    render();
    restoreUiAfterInitialRender();
  }
}

async function loadCloudHousehold() {
  cloudHouseholdId = "";
  cloudHouseholdMemberIds = [];
  cloudUserHouseholdIds = [];
  isCloudReady = false;

  if (!supabaseClient || !cloudUser) {
    return;
  }

  const { data, error } = await supabaseClient
    .from("household_members")
    .select("household_id,user_id")
    .eq("user_id", cloudUser.id)
    .order("household_id", { ascending: true });

  if (error) {
    throw error;
  }

  const memberships = Array.isArray(data) ? data : [];
  cloudUserHouseholdIds = [...new Set(memberships.map((member) => String(member.household_id || "").trim()).filter(Boolean))];
  const selectedHouseholdId = String(localStorage.getItem(CLOUD_SELECTED_HOUSEHOLD_KEY) || "").trim();

  cloudHouseholdId = cloudUserHouseholdIds.includes(selectedHouseholdId)
    ? selectedHouseholdId
    : cloudUserHouseholdIds[0] || "";
  isCloudReady = Boolean(cloudHouseholdId);

  if (cloudHouseholdId) {
    localStorage.setItem(CLOUD_SELECTED_HOUSEHOLD_KEY, cloudHouseholdId);
    await loadCloudHouseholdMembers();
  }

  logCloudDataSource("共有グループ確認");
}

async function loadCloudHouseholdMembers() {
  cloudHouseholdMemberIds = [];

  if (!supabaseClient || !cloudHouseholdId) {
    return;
  }

  const { data, error } = await supabaseClient
    .from("household_members")
    .select("user_id")
    .eq("household_id", cloudHouseholdId)
    .order("user_id", { ascending: true });

  if (error) {
    console.warn("household_members確認エラー:", error);
    return;
  }

  cloudHouseholdMemberIds = Array.isArray(data)
    ? data.map((member) => String(member.user_id || "").trim()).filter(Boolean)
    : [];
}

function parseCloudSyncTimestamp(value) {
  const timestamp = Date.parse(value || "");
  return Number.isFinite(timestamp) ? timestamp : 0;
}

async function fetchCloudChangeSummary() {
  if (!supabaseClient || !cloudHouseholdId) {
    return {
      cloudUpdatedAt: "",
      cloudUpdatedAtMs: 0,
      localSyncedAt: localStorage.getItem(CLOUD_LAST_SYNC_KEY) || "",
      localSyncedAtMs: parseCloudSyncTimestamp(localStorage.getItem(CLOUD_LAST_SYNC_KEY)),
      shouldReload: false,
      strategy: "metadata-check",
    };
  }

  const localSyncedAt = localStorage.getItem(CLOUD_LAST_SYNC_KEY) || "";
  const { data, error } = await supabaseClient
    .from("items")
    .select("updated_at")
    .eq("household_id", cloudHouseholdId)
    .order("updated_at", { ascending: false })
    .limit(1);

  if (error) {
    throw error;
  }

  const cloudUpdatedAt = Array.isArray(data) && data[0]?.updated_at
    ? data[0].updated_at
    : "";
  const cloudUpdatedAtMs = parseCloudSyncTimestamp(cloudUpdatedAt);
  const localSyncedAtMs = parseCloudSyncTimestamp(localSyncedAt);

  return {
    cloudUpdatedAt,
    cloudUpdatedAtMs,
    localSyncedAt,
    localSyncedAtMs,
    shouldReload: cloudUpdatedAtMs > localSyncedAtMs,
    strategy: "metadata-check",
  };
}

function logCloudChangeSummary(summary, reason = "") {
  console.log("クラウド同期確認：更新時刻比較");
  console.log(`確認理由：${reason || "-"}`);
  console.log(`クラウド更新時刻：${formatCloudSyncDateTime(summary.cloudUpdatedAt)}`);
  console.log(`ローカル同期時刻：${formatCloudSyncDateTime(summary.localSyncedAt)}`);
  console.log(`同期方式：${summary.strategy || "metadata-check"}`);
  console.log(`同期判定：${summary.shouldReload ? "クラウドが新しいため再読み込み" : "再読み込み不要"}`);
}

async function loadItemsFromSupabase() {
  if (!isCloudReady) {
    return;
  }

  const { data, error } = await supabaseClient
    .from("items")
    .select("local_id,title,status,category,storage_location,planned_price,data,updated_at")
    .eq("household_id", cloudHouseholdId)
    .order("updated_at", { ascending: false });

  if (error) {
    throw error;
  }

  const cloudRows = Array.isArray(data) ? data : [];
  const appStateRow = cloudRows.find((row) => {
    const recordType = String(row.data?.__recordType || "").trim();
    return row.local_id === CLOUD_APP_STATE_LOCAL_ID || recordType === CLOUD_APP_STATE_RECORD_TYPE;
  });
  const itemRows = cloudRows.filter((row) => row !== appStateRow);
  const localItemsSnapshot = loadItems();

  if (itemRows.length === 0 && localItemsSnapshot.length > 0) {
    console.warn("Supabase取得0件のため、既存ローカル商品データを保持します。", {
      localItemCount: localItemsSnapshot.length,
      appStateExists: Boolean(appStateRow),
    });
    items = localItemsSnapshot;
    if (appStateRow?.data) {
      applyCloudAppState(appStateRow.data);
    }
    setCloudStatus("クラウド側の商品が0件だったため、この端末の商品データを保持しました。", "warning");
    updateCloudFetchCount(0);
    renderCloudAuthState();
    logCloudDataSource("クラウド0件・ローカル保持", 0);
    return;
  }

  const localItemsById = new Map(localItemsSnapshot.map((item) => [String(item.id), item]));
  if (localItemsSnapshot.length > 0) {
    await createStoredBackup("クラウド再読み込み前", {
      memo: `Supabase取得 ${itemRows.length}件 / ローカル保持 ${localItemsSnapshot.length}件`,
    });
  }
  items = itemRows
    .map((row) => {
      const itemId = String(row.data?.id || row.local_id || "");
      const localItem = localItemsById.get(itemId);
      return {
        ...(row.data || {}),
        id: itemId,
        listingTitle: row.data?.listingTitle || row.title || "",
        status: row.data?.status || row.status || DEFAULT_STATUS,
        category: row.data?.category || row.category || "",
        storageLocation: row.data?.storageLocation || row.storage_location || "",
	        plannedPrice: row.data?.plannedPrice ?? row.planned_price ?? "",
	        imageData: localItem?.imageData || "",
	        imageRefs: normalizeImageRefs({
	          ...(row.data?.imageRefs || {}),
	          localImageId: normalizeImageRefs(localItem?.imageRefs).localImageId || getLocalImageRefs({ id: itemId }).localImageId,
	        }),
	      };
    })
    .filter((item) => item.id);

  if (appStateRow?.data) {
    applyCloudAppState(appStateRow.data);
  } else {
    console.warn("Supabaseにapp_stateが見つかりません。売却先仕分け・設定・テンプレートのローカルデータは保持します。");
  }
  const didAddItemCodes = ensureItemCodes(items);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(serializeItemsForLocalStorage(items)));
  hasCloudSaveWarning = false;

  if (itemRows.length === 0) {
    setCloudStatus("クラウド側の商品はまだ空です。必要ならPC側から移行してください。", "connected");
  } else {
    setCloudStatus(cloudUser?.email || "クラウド同期中", "connected");
  }

  if (didAddItemCodes) {
    await syncItemsToSupabase();
  } else {
    markCloudSynced();
  }

  updateCloudFetchCount(itemRows.length);
  renderCloudAuthState();
  logCloudDataSource("クラウドから再読み込み", itemRows.length);
}

async function joinCloudHousehold(householdId) {
  const targetHouseholdId = String(householdId || "").trim();

  if (!supabaseClient || !cloudUser || !targetHouseholdId) {
    showErrorMessage("共有グループIDを入力してください");
    return;
  }

  const { error } = await supabaseClient
    .from("household_members")
    .upsert([{
      household_id: targetHouseholdId,
      user_id: cloudUser.id,
    }], { onConflict: "household_id,user_id" });

  if (error) {
    const { error: insertError } = await supabaseClient
      .from("household_members")
      .insert([{
        household_id: targetHouseholdId,
        user_id: cloudUser.id,
      }]);

    if (insertError) {
      throw insertError;
    }
  }

  localStorage.setItem(CLOUD_SELECTED_HOUSEHOLD_KEY, targetHouseholdId);
  await reloadCloudData({ reason: "共有グループ参加", showToast: true, force: true });
}

async function createCloudHousehold() {
  if (!supabaseClient || !cloudUser) {
    showErrorMessage("先にログインしてください");
    return;
  }

  let householdId = "";
  let insertError = null;

  for (const payload of [{ name: "共有グループ" }, {}]) {
    const { data, error } = await supabaseClient
      .from("households")
      .insert([payload])
      .select("id")
      .single();

    if (!error && data?.id) {
      householdId = String(data.id);
      break;
    }

    insertError = error;
  }

  if (!householdId) {
    throw insertError || new Error("共有グループを作成できませんでした");
  }

  await joinCloudHousehold(householdId);
  if (cloudHouseholdInput) {
    cloudHouseholdInput.value = householdId;
  }
  showSuccessMessage("共有グループを作成しました");
}

function applyCloudAppState(appStateData) {
  isApplyingCloudSnapshot = true;
  try {
    const hasCloudAppState = appStateData && appStateData.__recordType === CLOUD_APP_STATE_RECORD_TYPE;
    settings = hasCloudAppState
      ? normalizeSettings(appStateData.settings || {})
      : normalizeSettings({});
    descriptionTemplates = hasCloudAppState
      ? normalizeTemplates(appStateData.descriptionTemplates || appStateData.templates, [])
      : normalizeTemplates(DEFAULT_TEMPLATES, []);
    sortingItems = hasCloudAppState && Array.isArray(appStateData.sortingItems)
      ? appStateData.sortingItems.map(normalizeSortingItem)
      : [];

    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    localStorage.setItem(TEMPLATES_KEY, JSON.stringify(descriptionTemplates));
    localStorage.setItem(SORTING_STORAGE_KEY, JSON.stringify(serializeItemsForLocalStorage(sortingItems)));

    refreshCategoryOptions(categoryInput.value);
    refreshStorageLocationOptions(storageLocationInput.value);
    refreshShippingMethodOptions(shippingMethodInput.value);
    refreshTemplateOptions(descriptionTemplateInput.value);
    refreshSortingDestinationOptions(sortingDestinationInput?.value);
    renderSortingAppraisalFields(getSortingAppraisalValuesFromInputs());
  } finally {
    isApplyingCloudSnapshot = false;
  }
}

function createCloudAppStateData() {
  return {
    __recordType: CLOUD_APP_STATE_RECORD_TYPE,
    version: 1,
    settings,
    descriptionTemplates,
    sortingItems: serializeItemsForLocalStorage(sortingItems),
    updatedAt: new Date().toISOString(),
  };
}

async function syncAppStateToSupabase() {
  if (isApplyingCloudSnapshot || !isCloudReady || !supabaseClient || !cloudUser || !cloudHouseholdId) {
    return;
  }

  await createCloudSaveAutoBackup();
  const { error } = await supabaseClient
    .from("items")
    .upsert([{
      household_id: cloudHouseholdId,
      local_id: CLOUD_APP_STATE_LOCAL_ID,
      title: "アプリ設定",
      status: DEFAULT_STATUS,
      category: "",
      storage_location: "",
      planned_price: null,
      data: createCloudAppStateData(),
    }], { onConflict: "household_id,local_id" });

  if (error) {
    throw error;
  }

  hasCloudSaveWarning = false;
  markCloudSynced();
}

async function reloadCloudData({ reason = "手動同期", showToast = false, force = false } = {}) {
  if (!supabaseClient && !initializeSupabaseClient()) {
    showErrorMessage("Supabase接続情報が読み込めません");
    return;
  }

  if (!cloudUser) {
    const { data, error } = await supabaseClient.auth.getSession();

    if (error) {
      throw error;
    }

    supabaseSession = data.session;
    cloudUser = data.session?.user || null;
  }

  if (!cloudUser) {
    logCloudDataSource(`${reason}: 未ログイン`);
    return;
  }

  const now = Date.now();
  if (!force && now - lastCloudReloadRequestAt < 10000) {
    return;
  }
  lastCloudReloadRequestAt = now;

  await loadCloudHousehold();

  if (!force) {
    const cloudChangeSummary = await fetchCloudChangeSummary();
    logCloudChangeSummary(cloudChangeSummary, reason);

    if (cloudChangeSummary.shouldReload) {
      setCloudSyncStatus("cloud-update");
    }

    if (!cloudChangeSummary.shouldReload) {
      setCloudSyncStatus("synced");
      renderCloudAuthState();
      if (showToast) {
        showSuccessMessage("クラウドは最新です");
      }
      logCloudDataSource(`${reason}: 更新なし`);
      return;
    }
  }

  await loadItemsFromSupabase();
  render();

  if (showToast) {
    showSuccessMessage("クラウドから再読み込みしました");
  }

  logCloudDataSource(reason);
}

function reloadCloudDataIfReady(reason) {
  if (!cloudUser || !isCloudReady) {
    logCloudDataSource(`${reason}: ローカル表示`);
    return;
  }

  reloadCloudData({ reason }).catch((error) => {
    setCloudSyncStatus("failed", "クラウド同期に失敗しました。");
    setCloudStatus(`クラウド再読み込みに失敗しました: ${error.message}`, "warning");
    console.warn("Supabase再読み込みエラー:", error);
  });
}

function createCloudItemData(item) {
  const { imageData, ...cloudItem } = item;
  const imageRefs = normalizeImageRefs(cloudItem.imageRefs);
  cloudItem.imageRefs = normalizeImageRefs({
    ...imageRefs,
    localImageId: "",
  });
  return cloudItem;
}

function createSupabaseItemRows(targetItems) {
  if (!cloudUser || !cloudHouseholdId) {
    return [];
  }

  return targetItems
    .map((item) => {
      const localId = String(item.id || createId());
      return {
        household_id: cloudHouseholdId,
        local_id: localId,
        title: getListingTitle(item),
        status: getItemStatus(item),
        category: item.category || "",
        storage_location: item.storageLocation || "",
        planned_price: parseMoney(item.plannedPrice) === "" ? null : parseMoney(item.plannedPrice),
        data: createCloudItemData({ ...item, id: localId }),
      };
    });
}

async function syncItemsToSupabase() {
  if (!isCloudReady || !supabaseClient) {
    return;
  }

  await createCloudSaveAutoBackup();
  const rows = createSupabaseItemRows(items);

  if (rows.length === 0) {
    return;
  }

  const { error } = await supabaseClient
    .from("items")
    .upsert(rows, { onConflict: "household_id,local_id" });

  if (error) {
    throw error;
  }

  hasCloudSaveWarning = false;
  markCloudSynced();
  renderCloudAuthState();
}

async function deleteItemFromSupabase(itemId) {
  if (!isCloudReady || !supabaseClient || !itemId) {
    return;
  }

  const { error } = await supabaseClient
    .from("items")
    .delete()
    .eq("household_id", cloudHouseholdId)
    .eq("local_id", itemId);

  if (error) {
    throw error;
  }

  markCloudSynced();
}

function handleCloudSaveError(error) {
  console.warn("Supabase保存エラー:", error);

  if (hasCloudSaveWarning) {
    return;
  }

  hasCloudSaveWarning = true;
  setCloudSyncStatus("failed", "クラウド保存に失敗しました。端末内には保存済みです。");
  setCloudStatus(`クラウド保存に失敗しました。端末内には保存済みです: ${error.message}`, "warning");
  showErrorMessage("クラウド保存に失敗しました。端末内には保存済みです");
}

async function migrateLocalItemsToSupabase() {
  if (!isCloudReady) {
    showErrorMessage("先にSupabaseへログインしてください");
    return;
  }

  const localItems = loadItems();

  if (localItems.length === 0) {
    showErrorMessage("この端末に移行できる商品データがありません");
    return;
  }

  const shouldMigrate = await showAppDialog({
    title: "クラウド移行確認",
    message: `${localItems.length}件の商品データをSupabaseへアップロードしますか？`,
    confirmText: "アップロード",
  });

  if (!shouldMigrate) {
    return;
  }

  try {
    const rows = createSupabaseItemRows(localItems);
    const { error } = await supabaseClient
      .from("items")
      .upsert(rows, { onConflict: "household_id,local_id" });

    if (error) {
      throw error;
    }

    await syncAppStateToSupabase();
    items = localItems;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serializeItemsForLocalStorage(items)));
    hasCloudSaveWarning = false;
    markCloudSynced();
    render();
    renderCloudAuthState();
    showSuccessMessage("Supabaseへの移行が完了しました");
  } catch (error) {
    setCloudStatus(`Supabaseへの移行に失敗しました。ローカルデータは残っています: ${error.message}`, "warning");
    showErrorMessage("Supabaseへの移行に失敗しました。ローカルデータは消えていません");
  }
}

function createId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function parseItemCodeNumber(value) {
  const match = String(value || "").match(/^ITEM-(\d{6})$/);
  return match ? Number(match[1]) : 0;
}

function formatItemCode(number) {
  return `ITEM-${String(number).padStart(6, "0")}`;
}

function getCurrentItemSequence() {
  const storedSequence = Number(localStorage.getItem(ITEM_SEQUENCE_KEY) || 0);
  const maxExistingSequence = items.reduce((max, item) => Math.max(max, parseItemCodeNumber(item.itemCode)), 0);
  return Math.max(storedSequence, maxExistingSequence);
}

function generateItemCode() {
  const nextSequence = getCurrentItemSequence() + 1;
  localStorage.setItem(ITEM_SEQUENCE_KEY, String(nextSequence));
  return formatItemCode(nextSequence);
}

function ensureItemCodes(targetItems = items) {
  let changed = false;

  targetItems.forEach((item) => {
    if (!parseItemCodeNumber(item.itemCode)) {
      item.itemCode = generateItemCode();
      changed = true;
    }
  });

  return changed;
}

function getItemCode(item) {
  return item?.itemCode || "";
}

function getLocalItemImage(item) {
  const refs = normalizeImageRefs(item?.imageRefs);
  return String(item?.imageData || (refs.localImageId ? localImageCache.get(refs.localImageId) : "") || "");
}

function getDataUrlByteSize(value) {
  const dataUrl = String(value || "");
  const base64 = dataUrl.includes(",") ? dataUrl.split(",").pop() : dataUrl;
  return Math.ceil((base64.length * 3) / 4);
}

function formatMegabytes(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)}MB`;
}

function getLocalStorageUsageBytes() {
  return Object.keys(localStorage).reduce((total, key) => {
    const value = localStorage.getItem(key) || "";
    return total + ((key.length + value.length) * 2);
  }, 0);
}

async function logBrowserStorageEstimate(context = "画像保存") {
  if (!navigator.storage?.estimate) {
    console.log(`${context}容量見積：取得不可`);
    return;
  }

  try {
    const estimate = await navigator.storage.estimate();
    console.log(`${context}容量見積：使用 ${formatMegabytes(estimate.usage || 0)} / 上限 ${formatMegabytes(estimate.quota || 0)}`);
  } catch (error) {
    console.warn(`${context}容量見積エラー:`, error);
  }
}

function openLocalImageDb() {
  if (!("indexedDB" in window)) {
    return Promise.reject(new Error("IndexedDBが利用できません"));
  }

  if (localImageDbPromise) {
    return localImageDbPromise;
  }

  localImageDbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(LOCAL_IMAGE_DB_NAME, LOCAL_IMAGE_DB_VERSION);

    request.addEventListener("upgradeneeded", () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(LOCAL_IMAGE_STORE_NAME)) {
        db.createObjectStore(LOCAL_IMAGE_STORE_NAME, { keyPath: "id" });
      }
    });

    request.addEventListener("success", () => resolve(request.result));
    request.addEventListener("error", () => reject(request.error || new Error("IndexedDBを開けませんでした")));
    request.addEventListener("blocked", () => reject(new Error("IndexedDBが他のタブでブロックされています")));
  });

  return localImageDbPromise;
}

function runImageStoreTransaction(mode, callback) {
  return openLocalImageDb().then((db) => new Promise((resolve, reject) => {
    const transaction = db.transaction(LOCAL_IMAGE_STORE_NAME, mode);
    const store = transaction.objectStore(LOCAL_IMAGE_STORE_NAME);
    const request = callback(store);

    request.addEventListener("success", () => resolve(request.result));
    request.addEventListener("error", () => reject(request.error || transaction.error || new Error("画像保存先エラー")));
    transaction.addEventListener("error", () => reject(transaction.error || new Error("画像保存先エラー")));
  }));
}

async function saveImageToIndexedDb(id, dataUrl) {
  await runImageStoreTransaction("readwrite", (store) => store.put({
    id,
    dataUrl,
    updatedAt: new Date().toISOString(),
    bytes: getDataUrlByteSize(dataUrl),
  }));
  localImageCache.set(id, dataUrl);
}

async function deleteImageFromIndexedDb(id) {
  if (!id) {
    return;
  }

  await runImageStoreTransaction("readwrite", (store) => store.delete(id));
  localImageCache.delete(id);
}

async function hydrateLocalImagesFromIndexedDb() {
  if (!("indexedDB" in window)) {
    console.warn("画像保存先：IndexedDB未対応。画像本体は保存できません。");
    return;
  }

  try {
    await logBrowserStorageEstimate("IndexedDB復元前");
    const records = await runImageStoreTransaction("readonly", (store) => store.getAll());
    localImageCache.clear();
    (Array.isArray(records) ? records : []).forEach((record) => {
      if (record?.id && record?.dataUrl) {
        localImageCache.set(record.id, record.dataUrl);
      }
    });
    console.log(`画像保存先：IndexedDB / 復元画像数：${localImageCache.size}件`);
    await migrateLegacyLocalImagesToIndexedDb();
  } catch (error) {
    console.warn("IndexedDB画像復元エラー:", error);
  }
}

async function migrateLegacyLocalImagesToIndexedDb() {
  if (!("indexedDB" in window)) {
    return;
  }

  const migrateCollection = async (targetItems, storageKey, label) => {
    let migratedCount = 0;

    for (const item of targetItems) {
      const imageData = String(item?.imageData || "");
      if (!imageData) {
        continue;
      }

      const refs = normalizeImageRefs(item.imageRefs);
      const localImageId = refs.localImageId || createLocalImageId(item);

      try {
        console.log(`${label}既存画像移行：${getDataUrlByteSize(imageData)} bytes / 保存先 IndexedDB`);
        await saveImageToIndexedDb(localImageId, imageData);
        item.imageRefs = normalizeImageRefs({
          ...refs,
          provider: refs.provider || "local",
          localImageId,
        });
        item.imageData = "";
        saveLocalImageRefsForItem(item, { localImageId });
        migratedCount += 1;
      } catch (error) {
        console.error(`${label}既存画像移行失敗:`, {
          reason: classifyImageStorageError(error),
          storage: "IndexedDB",
          imageSize: formatMegabytes(getDataUrlByteSize(imageData)),
          error,
        });
      }
    }

    if (migratedCount > 0) {
      localStorage.setItem(storageKey, JSON.stringify(serializeItemsForLocalStorage(targetItems)));
      console.log(`${label}既存画像移行完了：${migratedCount}件 / localStorage画像本体を削除`);
    }
  };

  await migrateCollection(items, STORAGE_KEY, "商品");
  await migrateCollection(sortingItems, SORTING_STORAGE_KEY, "仕分け");
  console.log(`localStorage使用量：${formatMegabytes(getLocalStorageUsageBytes())}`);
}

function classifyImageStorageError(error) {
  const name = String(error?.name || "");
  const message = String(error?.message || "");

  if (name.includes("Quota") || message.includes("quota") || message.includes("容量")) {
    return "容量不足";
  }

  if (name.includes("Security") || message.includes("permission") || message.includes("権限")) {
    return "権限エラー";
  }

  return "保存先エラー";
}

function getImageRefsFromForm(existingRefs = {}) {
  const fallbackRefs = normalizeImageRefs(existingRefs);

  return normalizeImageRefs({
    provider: imageProviderInput ? imageProviderInput.value : fallbackRefs.provider,
    googlePhotoId: googlePhotoImageIdInput?.value || "",
    localImageId: localImageIdInput?.value || "",
    cloudImageId: cloudImageIdInput?.value || "",
  });
}

function getSortingImageRefsFromForm(existingRefs = {}) {
  const fallbackRefs = normalizeImageRefs(existingRefs);

  return normalizeImageRefs({
    provider: sortingImageProviderInput ? sortingImageProviderInput.value : fallbackRefs.provider,
    googlePhotoId: sortingGooglePhotoImageIdInput?.value || "",
    localImageId: sortingLocalImageIdInput?.value || "",
    cloudImageId: sortingCloudImageIdInput?.value || "",
  });
}

function createGooglePhotoId(itemCode) {
  return itemCode ? `PHOTO-${itemCode}` : "";
}

function createLocalImageId(item) {
  const code = getItemCode(item) || item?.id || "ITEM";
  return `LOCAL-${code}-${Date.now()}`;
}

function ensurePendingFormItemCode() {
  if (itemIdInput.value) {
    const existingItem = items.find((item) => item.id === itemIdInput.value);
    if (existingItem?.itemCode) {
      return existingItem.itemCode;
    }
  }

  if (!pendingFormItemCode) {
    pendingFormItemCode = generateItemCode();
  }

  return pendingFormItemCode;
}

function updateImageReferenceMode() {
  const provider = imageProviderInput?.value || "";
  const photoDetails = document.querySelector(".form-details-photo");
  if (photoDetails) {
    photoDetails.dataset.imageProvider = provider || "unset";
  }
}

function updateSortingImageReferenceMode() {
  const provider = sortingImageProviderInput?.value || "";
  const sortingPhotoDetails = document.querySelector(".sorting-image-card");
  if (sortingPhotoDetails) {
    sortingPhotoDetails.dataset.imageProvider = provider || "unset";
  }
}

async function saveLocalItemImage(item, imageData, collection = "items") {
  if (!item) {
    throw new Error("保存先エラー：対象データがありません");
  }

  const previousImage = item.imageData || "";
  const previousRefs = normalizeImageRefs(item.imageRefs);
  const nextLocalImageId = imageData ? (previousRefs.localImageId || createLocalImageId(item)) : "";
  const imageBytes = getDataUrlByteSize(imageData);

  try {
    console.log(`画像保存先：IndexedDB`);
    console.log(`保存前画像サイズ：${formatMegabytes(imageBytes)} (${imageBytes} bytes)`);
    console.log(`localStorage使用量：${formatMegabytes(getLocalStorageUsageBytes())}`);
    await logBrowserStorageEstimate("画像保存前");

    if (imageData) {
      await saveImageToIndexedDb(nextLocalImageId, imageData);
    } else {
      await deleteImageFromIndexedDb(previousRefs.localImageId);
    }

    item.imageData = imageData || "";
    item.imageRefs = normalizeImageRefs({
      ...previousRefs,
      provider: imageData && previousRefs.provider !== "google_photos" ? "local" : previousRefs.provider,
      localImageId: nextLocalImageId,
    });
    saveLocalImageRefsForItem(item, { localImageId: nextLocalImageId });

    if (collection === "sorting") {
      localStorage.setItem(SORTING_STORAGE_KEY, JSON.stringify(serializeItemsForLocalStorage(sortingItems)));
      syncAppStateToSupabase().catch((error) => {
        handleCloudSaveError(error);
      });
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(serializeItemsForLocalStorage(items)));
    }
  } catch (error) {
    item.imageData = previousImage;
    item.imageRefs = previousRefs;
    saveLocalImageRefsForItem(item, { localImageId: previousRefs.localImageId });
    const reason = classifyImageStorageError(error);
    console.error("画像保存失敗:", {
      reason,
      storage: "IndexedDB",
      imageSize: formatMegabytes(imageBytes),
      localStorageUsage: formatMegabytes(getLocalStorageUsageBytes()),
      error,
    });
    throw new Error(`${reason}：この端末へ画像を保存できませんでした`);
  }
}

async function saveReferenceImage(target, imageData, collection = "items", memo = "", category = "その他") {
  if (!target) {
    throw new Error("保存先エラー：対象データがありません");
  }

  const imageId = createReferenceImageId(target, collection);
  await saveImageToIndexedDb(imageId, imageData);
  const createdAt = new Date().toISOString();
  const nextReference = {
    imageId,
    type: "reference",
    category: String(category || "その他").trim() || "その他",
    source: "surugaya",
    memo: String(memo || "").trim(),
    createdAt,
    linkedItemId: collection === "items" ? target.id : String(target.sourceItemId || ""),
    linkedSortingId: collection === "sorting" ? target.id : "",
    ocrText: "",
    ocrStatus: "未実行",
  };

  target.referenceImages = normalizeReferenceImages([
    ...getReferenceImages(target),
    nextReference,
  ]);
  target.updatedAt = createdAt;

  if (collection === "sorting") {
    saveSortingItems();
  } else {
    saveItems();
  }

  return nextReference;
}

function requestReferenceImage(targetId, collection = "items") {
  const item = collection === "sorting"
    ? sortingItems.find((currentItem) => currentItem.id === targetId)
    : items.find((currentItem) => currentItem.id === targetId);

  if (!item) {
    showToast(collection === "sorting" ? "仕分けデータが見つかりません" : "商品データが見つかりません", "error");
    return;
  }

  const category = chooseReferenceImageCategory();
  if (!category) {
    return;
  }

  pendingPhotoItemId = targetId;
  pendingPhotoCollection = collection;
  pendingPhotoMode = "reference";
  pendingReferenceCategory = category;
  listPhotoInput.value = "";
  listPhotoInput.click();
}

function requestImportReferenceImage(importId) {
  const importedItem = importParsedItems.find((item) => item.importId === importId);
  if (!importedItem) {
    showToast("取込結果が見つかりません", "error");
    return;
  }

  pendingPhotoItemId = "";
  pendingPhotoCollection = "items";
  pendingImportReferenceId = importId;
  pendingPhotoMode = "importReference";
  pendingReferenceCategory = chooseReferenceImageCategory();
  if (!pendingReferenceCategory) {
    pendingImportReferenceId = "";
    pendingPhotoMode = "main";
    return;
  }
  listPhotoInput.value = "";
  listPhotoInput.click();
}

async function saveImportReferenceImage(importedItem, imageData, memo = "", category = "その他") {
  const imageId = createImportReferenceImageId(importedItem);
  await saveImageToIndexedDb(imageId, imageData);
  importedItem.referenceImages = normalizeReferenceImages([
    ...getReferenceImages(importedItem),
    {
      imageId,
      type: "reference",
      category: String(category || "その他").trim() || "その他",
      source: "surugaya",
      memo,
      createdAt: new Date().toISOString(),
      linkedItemId: "",
      linkedSortingId: "",
      ocrText: "",
      ocrStatus: "未実行",
    },
  ]);
}

function linkReferenceImagesForTarget(referenceImages, { linkedItemId = "", linkedSortingId = "" } = {}) {
  return normalizeReferenceImages(referenceImages).map((image) => ({
    ...image,
    linkedItemId: linkedItemId || image.linkedItemId,
    linkedSortingId: linkedSortingId || image.linkedSortingId,
  }));
}

function getSortingSourceItem(sortingItem) {
  if (!sortingItem) {
    return null;
  }

  return items.find((item) => item.id === sortingItem.sourceItemId)
    || items.find((item) => getListingTitle(item) === sortingItem.name)
    || null;
}

function getSortingImageDisplayItem(sortingItem) {
  const sourceItem = getSortingSourceItem(sortingItem);
  return getLocalItemImage(sortingItem) ? sortingItem : (sourceItem || sortingItem);
}

function createListThumbnail(item, options = {}) {
  const button = document.createElement("button");
  const imageData = getLocalItemImage(item);
  button.className = `list-thumbnail-button${options.compact ? " compact" : ""}`;
  button.type = "button";
  button.dataset.action = "change-photo";
  button.setAttribute("aria-label", imageData ? "商品写真を変更" : "商品写真を追加");

  if (imageData) {
    const image = document.createElement("img");
    image.src = imageData;
    image.alt = "";
    button.append(image);
  } else {
    const placeholder = document.createElement("span");
    placeholder.className = "list-thumbnail-placeholder";
    placeholder.textContent = "写真";
    button.append(placeholder);
  }

  return button;
}

function createBackupFileName() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `mercari-listing-helper-backup-${year}-${month}-${day}-${hours}${minutes}.json`;
}

async function getIndexedDbImageMetadataForBackup() {
  try {
    const records = await getIndexedDbImageRecords();
    return records.map((record) => ({
      id: record.id || record.localImageId || "",
      localImageId: record.localImageId || record.id || "",
      updatedAt: record.updatedAt || "",
      createdAt: record.createdAt || "",
      bytes: record.bytes || (record.dataUrl ? getDataUrlByteSize(record.dataUrl) : ""),
      hasDataUrl: Boolean(record.dataUrl),
      fields: record && typeof record === "object" ? Object.keys(record) : [],
    }));
  } catch (error) {
    console.warn("IndexedDB画像メタ情報バックアップ取得エラー:", error);
    return [];
  }
}

async function createBackupPayload(kind = "手動", memo = "") {
  const exportedAt = new Date().toISOString();
  const localImageRefs = loadLocalImageRefs();
  const indexedDbImages = await getIndexedDbImageMetadataForBackup();
  const backupMemo = String(memo || "").trim();

  return {
    appName: "メルカリ出品補助室",
    version: BACKUP_VERSION,
    backupKind: kind,
    memo: backupMemo,
    exportedAt,
    storageKeys: {
      items: STORAGE_KEY,
      settings: SETTINGS_KEY,
      templates: TEMPLATES_KEY,
      sortingItems: SORTING_STORAGE_KEY,
      localImageRefs: LOCAL_IMAGE_REFS_KEY,
      autoBackups: AUTO_BACKUP_STORAGE_KEY,
    },
    metadata: {
      itemCount: items.length,
      sortingItemCount: sortingItems.length,
      templateCount: descriptionTemplates.length,
      localImageRefCount: Object.keys(localImageRefs).length,
      indexedDbImageCount: indexedDbImages.length,
      cloudHouseholdId,
      memo: backupMemo,
    },
    data: {
      items: serializeItemsForLocalStorage(items),
      sortingItems: serializeItemsForLocalStorage(sortingItems),
      settings,
      descriptionTemplates,
      templates: descriptionTemplates,
      localImageRefs,
      imageRefs: localImageRefs,
      cloudHouseholdId,
      indexedDbImages,
    },
  };
}

function getBackupSummary(backup) {
  const data = backup?.data && typeof backup.data === "object" ? backup.data : backup || {};
  const metadata = backup?.metadata && typeof backup.metadata === "object" ? backup.metadata : {};
  const imageCount = Array.isArray(data.indexedDbImages)
    ? data.indexedDbImages.length
    : Number(metadata.indexedDbImageCount || metadata.localImageRefCount || 0);
  return {
    itemCount: Array.isArray(data.items) ? data.items.length : 0,
    sortingItemCount: Array.isArray(data.sortingItems || data.destinationSortingItems) ? (data.sortingItems || data.destinationSortingItems).length : 0,
    templateCount: Array.isArray(data.descriptionTemplates || data.templates) ? (data.descriptionTemplates || data.templates).length : 0,
    imageCount: Number.isFinite(imageCount) ? imageCount : 0,
  };
}

function getBackupKindLabel(entry) {
  const kind = String(entry?.kind || entry?.backup?.backupKind || "自動").trim();
  if (kind === "手動") {
    return "手動";
  }
  return kind === "自動" ? "自動" : `自動 / ${kind}`;
}

function loadStoredBackups() {
  try {
    const parsed = JSON.parse(localStorage.getItem(AUTO_BACKUP_STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveStoredBackups(backups) {
  const normalized = backups
    .filter((entry) => entry?.backup)
    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0))
    .slice(0, AUTO_BACKUP_MAX_GENERATIONS);
  try {
    localStorage.setItem(AUTO_BACKUP_STORAGE_KEY, JSON.stringify(normalized));
    renderBackupList();
  } catch (error) {
    console.warn("バックアップ保存エラー:", error);
    showErrorMessage("バックアップを保存できませんでした。端末容量を確認してください");
  }
}

async function createStoredBackup(kind = "自動", { toast = false, memo = "" } = {}) {
  const backup = await createBackupPayload(kind, memo);
  const summary = getBackupSummary(backup);
  const entry = {
    id: createId(),
    kind,
    memo: String(memo || "").trim(),
    createdAt: backup.exportedAt,
    summary,
    backup,
  };
  saveStoredBackups([entry, ...loadStoredBackups()]);
  if (toast) {
    showSuccessMessage(`${kind}バックアップを作成しました`);
  }
  return entry;
}

async function createCloudSaveAutoBackup() {
  const now = Date.now();
  if (now - lastCloudSaveBackupAt < 5000) {
    return;
  }
  lastCloudSaveBackupAt = now;
  await createStoredBackup("クラウド保存前");
}

const IMPORT_FIELD_LABELS = {
  jan: "JAN",
  platform: "機種",
  productName: "商品名",
  modelNumber: "型番",
  releaseDate: "発売日",
  manufacturer: "メーカー",
  quantity: "数量",
  condition: "コンディション",
  note: "備考",
};

const IMPORT_COMPLETION_FIELDS = [
  { key: "jan", label: "JAN", importedKey: "jan" },
  { key: "modelNumber", label: "型番", importedKey: "modelNumber" },
  { key: "releaseDate", label: "発売日", importedKey: "releaseDate" },
  { key: "manufacturer", label: "メーカー", importedKey: "manufacturer" },
  { key: "platform", label: "機種", importedKey: "platform" },
];

const IMPORT_PARSERS = {
  surugaya: parseSurugayaImportText,
  text: parseSurugayaImportText,
};

let importResultFilter = uiState.import?.filter || "all";
let importCompletedDisplay = uiState.import?.hideCompleted ? "hide" : "dim";
let importImageOnly = Boolean(uiState.import?.imageOnly);
let importStorageUnsetOnly = Boolean(uiState.import?.storageUnsetOnly);
let selectedImportResultIds = new Set(Array.isArray(uiState.import?.selectedIds) ? uiState.import.selectedIds : []);
let completedImportResultIds = new Set(Array.isArray(uiState.import?.completedIds) ? uiState.import.completedIds : []);

function isImportResultSelected(importedItem) {
  return selectedImportResultIds.has(importedItem.importId);
}

function isImportResultCompleted(importedItem) {
  return completedImportResultIds.has(importedItem.importId);
}

function setImportResultSelected(importedItem, selected) {
  if (!importedItem?.importId) {
    return;
  }

  if (selected) {
    selectedImportResultIds.add(importedItem.importId);
  } else {
    selectedImportResultIds.delete(importedItem.importId);
  }
  scheduleSaveUiState();
}

function getVisibleImportResults() {
  return importParsedItems.filter((item) => {
    if (importCompletedDisplay === "hide" && isImportResultCompleted(item)) {
      return false;
    }
    if (importImageOnly && !hasImportDisplayImage(item)) {
      return false;
    }
    if (importStorageUnsetOnly && !isImportStorageUnset(item)) {
      return false;
    }
    if (importResultFilter === "update") {
      return item.matchStatus === "更新候補";
    }
    if (importResultFilter === "new") {
      return item.matchStatus === "新規候補";
    }
    if (importResultFilter === "sorting") {
      return (item.sortingMatches || []).length > 0;
    }
    if (importResultFilter === "itemMatched") {
      return (item.itemMatches || []).length > 0;
    }
    if (importResultFilter === "itemUnmatched") {
      return !(item.itemMatches || []).length;
    }
    return true;
  });
}

function normalizeImportComparable(value) {
  return String(value || "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/\s+/g, "")
    .trim();
}

function getImportValueFromItem(item, keys) {
  return keys
    .map((key) => String(item?.[key] || "").trim())
    .find(Boolean) || "";
}

function getItemJanValue(item) {
  return getImportValueFromItem(item, ["jan", "JAN", "productJan", "barcode"]);
}

function getItemModelValue(item) {
  return getImportValueFromItem(item, ["modelNumber", "modelNo", "model", "productModel", "型番"]);
}

function getItemMakerValue(item) {
  return getImportValueFromItem(item, ["manufacturer", "maker", "メーカー"]);
}

function getImportTargetByMatch(matchTarget) {
  if (!matchTarget) {
    return null;
  }

  if (matchTarget.type === "item") {
    return items.find((item) => item.id === matchTarget.id) || null;
  }

  if (matchTarget.type === "sorting") {
    return sortingItems.find((item) => item.id === matchTarget.id) || null;
  }

  return null;
}

function getImportTargetTitle(matchTarget) {
  const target = getImportTargetByMatch(matchTarget);

  if (!target) {
    return matchTarget?.title || "";
  }

  return matchTarget.type === "item" ? getListingTitle(target) : target.name;
}

function getImportTargetFieldValue(targetItem, fieldKey) {
  if (!targetItem) {
    return "";
  }

  if (fieldKey === "jan") {
    return getItemJanValue(targetItem);
  }

  if (fieldKey === "modelNumber") {
    return getItemModelValue(targetItem);
  }

  if (fieldKey === "manufacturer") {
    return getItemMakerValue(targetItem);
  }

  return String(targetItem[fieldKey] || "").trim();
}

function setImportTargetFieldValue(targetItem, fieldKey, value) {
  if (!targetItem || !String(value || "").trim()) {
    return false;
  }

  targetItem[fieldKey] = String(value || "").trim();
  targetItem.updatedAt = new Date().toISOString();
  return true;
}

function hasImportRecordData(record) {
  return Object.values(record).some((value) => String(value || "").trim());
}

function getImportRecordSignalCount(record) {
  return ["platform", "productName", "jan", "modelNumber", "releaseDate", "manufacturer", "quantity"]
    .filter((key) => String(record?.[key] || "").trim()).length;
}

function shouldStartNewSurugayaRecord(currentRecord, fieldKey) {
  if (!hasImportRecordData(currentRecord)) {
    return false;
  }

  const hasFieldAlready = Boolean(String(currentRecord[fieldKey] || "").trim());
  const hasRecordStarted = getImportRecordSignalCount(currentRecord) >= 1;
  return hasRecordStarted && hasFieldAlready;
}

function getSurugayaValueLines(value) {
  return String(value || "")
    .split(/\n+/)
    .map((line) => line.replace(/^[\s\u3000]+|[\s\u3000]+$/g, "").trim())
    .filter(Boolean);
}

function isSurugayaFieldLabelLine(line) {
  return /^(JAN|機種|商品名|型番|発売日|メーカー|数量|コンディション|備考)\s*[:：]/.test(String(line || "").trim());
}

function isSurugayaTitleCandidateLine(line, platform) {
  const text = String(line || "").trim();
  if (!text || isSurugayaFieldLabelLine(text)) {
    return false;
  }

  const normalizedText = normalizeImportComparable(text);
  const normalizedPlatform = normalizeImportComparable(platform);
  if (normalizedPlatform && normalizedText === normalizedPlatform) {
    return false;
  }

  if (/^\d{1,4}$/.test(text) || /^[0-9]{8,14}$/.test(text)) {
    return false;
  }

  if (/^\d{4}[\/年.-]\d{1,2}([\/月.-]\d{1,2}日?)?$/.test(text)) {
    return false;
  }

  return /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}A-Za-z0-9]/u.test(text);
}

function getSurugayaTitleCandidateScore(line, fieldKey = "") {
  const text = String(line || "").trim();
  let score = Math.min(text.length, 120);

  if (/[「『【\[][^」』】\]]+[」』】\]]/.test(text)) {
    score += 90;
  }

  if (fieldKey === "productName") {
    score += 200;
  } else if (fieldKey === "platform") {
    score += 60;
  } else if (fieldKey === "note") {
    score += 30;
  } else {
    score += 15;
  }

  return score;
}

function findBestSurugayaTitleCandidate(lines, platform, fieldKey = "", startIndex = 0) {
  return lines
    .map((line, index) => ({
      text: line,
      index,
      score: isSurugayaTitleCandidateLine(line, platform)
        ? getSurugayaTitleCandidateScore(line, fieldKey)
        : -1,
    }))
    .filter((candidate) => candidate.index >= startIndex && candidate.score >= 0)
    .sort((a, b) => b.score - a.score || b.text.length - a.text.length || a.index - b.index)[0] || null;
}

function normalizeSurugayaRecord(rawRecord) {
  const rawLines = {
    jan: getSurugayaValueLines(rawRecord.jan),
    platform: getSurugayaValueLines(rawRecord.platform),
    productName: getSurugayaValueLines(rawRecord.productName),
    modelNumber: getSurugayaValueLines(rawRecord.modelNumber),
    releaseDate: getSurugayaValueLines(rawRecord.releaseDate),
    manufacturer: getSurugayaValueLines(rawRecord.manufacturer),
    quantity: getSurugayaValueLines(rawRecord.quantity),
    condition: getSurugayaValueLines(rawRecord.condition),
    note: getSurugayaValueLines(rawRecord.note),
  };
  const platform = rawLines.platform[0] || "";
  const titleCandidates = [];

  const addCandidates = (fieldKey, lines, startIndex = 0) => {
    lines.slice(startIndex).forEach((line, index) => {
      const score = isSurugayaTitleCandidateLine(line, platform)
        ? getSurugayaTitleCandidateScore(line, fieldKey)
        : -1;
      if (score < 0) return;
      titleCandidates.push({
        text: line,
        fieldKey,
        index: startIndex + index,
        score,
      });
    });
  };

  if (rawLines.productName[0]) {
    titleCandidates.push({
      text: rawLines.productName[0],
      fieldKey: "productName",
      index: 0,
      score: 200 + Math.min(rawLines.productName[0].length, 80),
    });
  }

  addCandidates("platform", rawLines.platform, 1);
  ["jan", "modelNumber", "releaseDate", "manufacturer", "quantity", "condition"].forEach((fieldKey) => {
    addCandidates(fieldKey, rawLines[fieldKey], 1);
  });
  addCandidates("note", rawLines.note, 0);

  const bestTitle = titleCandidates
    .sort((a, b) => b.score - a.score || a.index - b.index)[0]?.text || "";

  return {
    jan: rawLines.jan[0] || "",
    platform,
    productName: bestTitle,
    modelNumber: rawLines.modelNumber[0] || "",
    releaseDate: rawLines.releaseDate[0] || "",
    manufacturer: rawLines.manufacturer[0] || "",
    quantity: rawLines.quantity[0] || "",
    condition: rawLines.condition.join("\n"),
    note: rawLines.note.join("\n"),
  };
}

function extractTrailingSurugayaTitleForNextRecord(currentRecord, lastFieldKey) {
  if (!lastFieldKey || lastFieldKey === "productName") {
    return "";
  }

  const lines = getSurugayaValueLines(currentRecord[lastFieldKey]);
  const candidateStartIndex = lastFieldKey === "note" ? 0 : 1;
  if (lines.length <= candidateStartIndex) {
    return "";
  }

  const platform = getSurugayaValueLines(currentRecord.platform)[0] || "";
  const titleCandidate = findBestSurugayaTitleCandidate(lines, platform, lastFieldKey, candidateStartIndex);
  if (!titleCandidate) {
    return "";
  }

  currentRecord[lastFieldKey] = lines
    .filter((_, index) => index !== titleCandidate.index)
    .join("\n");
  return titleCandidate.text;
}

function parseSurugayaImportText(text) {
  const rows = [];
  let current = {};
  let lastFieldKey = "";
  const fieldMap = {
    JAN: { key: "jan" },
    "機種": { key: "platform" },
    "商品名": { key: "productName" },
    "型番": { key: "modelNumber" },
    "発売日": { key: "releaseDate" },
    "メーカー": { key: "manufacturer" },
    "数量": { key: "quantity" },
    "コンディション": { key: "condition" },
    "備考": { key: "note" },
  };

  const pushCurrent = () => {
    if (!hasImportRecordData(current)) {
      current = {};
      return;
    }

    const normalizedRecord = normalizeSurugayaRecord(current);
    const manufacturer = String(normalizedRecord.manufacturer || "").trim();
    const quantity = String(normalizedRecord.quantity || "").trim();
    const manufacturerQuantityMatch = !quantity
      ? manufacturer.match(/^(.+?)[\s\u3000]+(\d{1,4})$/)
      : null;

    rows.push({
      jan: String(normalizedRecord.jan || "").trim(),
      platform: String(normalizedRecord.platform || "").trim(),
      productName: String(normalizedRecord.productName || "").trim(),
      modelNumber: String(normalizedRecord.modelNumber || "").trim(),
      releaseDate: String(normalizedRecord.releaseDate || "").trim(),
      manufacturer: manufacturerQuantityMatch ? manufacturerQuantityMatch[1].trim() : manufacturer,
      quantity: manufacturerQuantityMatch ? manufacturerQuantityMatch[2].trim() : quantity,
      condition: String(normalizedRecord.condition || "").trim(),
      note: String(normalizedRecord.note || "").trim(),
    });
    current = {};
    lastFieldKey = "";
  };

  const normalizedText = String(text || "").replace(/\r\n?/g, "\n");
  const fieldPattern = /(JAN|機種|商品名|型番|発売日|メーカー|数量|コンディション|備考)\s*[:：]/g;
  const matches = [...normalizedText.matchAll(fieldPattern)];

  matches.forEach((match, index) => {
    const label = match[1];
    const field = fieldMap[label];
    const valueStart = match.index + match[0].length;
    const valueEnd = matches[index + 1]?.index ?? normalizedText.length;
    const value = normalizedText
      .slice(valueStart, valueEnd)
      .replace(/^[\s\u3000]+|[\s\u3000]+$/g, "")
      .trim();

    if (shouldStartNewSurugayaRecord(current, field.key)) {
      const carriedTitle = extractTrailingSurugayaTitleForNextRecord(current, lastFieldKey);
      pushCurrent();
      if (carriedTitle) {
        current.productName = carriedTitle;
        lastFieldKey = "productName";
      }
    } else if (index === 0) {
      const leadingTitle = getSurugayaValueLines(normalizedText.slice(0, match.index))
        .filter((line) => isSurugayaTitleCandidateLine(line, ""))
        .at(-1) || "";
      if (leadingTitle) {
        current.productName = leadingTitle;
        lastFieldKey = "productName";
      }
    }

    current[field.key] = [current[field.key], value].filter(Boolean).join("\n").trim();
    lastFieldKey = field.key;
  });

  pushCurrent();
  return rows;
}

function calculateImportTitleSimilarity(a, b) {
  const left = normalizeImportComparable(a);
  const right = normalizeImportComparable(b);

  if (!left || !right) {
    return 0;
  }

  if (left === right) {
    return 1;
  }

  if (left.includes(right) || right.includes(left)) {
    return 0.82;
  }

  const leftTokens = new Set(left.match(/[a-z0-9]+|[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}ー]+/gu) || []);
  const rightTokens = new Set(right.match(/[a-z0-9]+|[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}ー]+/gu) || []);
  const shared = [...leftTokens].filter((token) => rightTokens.has(token)).length;
  const union = new Set([...leftTokens, ...rightTokens]).size;
  return union ? shared / union : 0;
}

function createImportSearchTargets() {
  const itemTargets = items.map((item) => ({
    type: "item",
    id: item.id,
    title: getListingTitle(item),
    jan: getItemJanValue(item),
    modelNumber: getItemModelValue(item),
    item,
  }));
  const sortingTargets = sortingItems.map((sortingItem) => ({
    type: "sorting",
    id: sortingItem.id,
    title: sortingItem.name,
    jan: getItemJanValue(sortingItem),
    modelNumber: getItemModelValue(sortingItem),
    sourceItemId: sortingItem.sourceItemId || "",
    destination: sortingItem.destination || "",
    shippingStatus: sortingItem.shippingStatus || "",
    item: sortingItem,
  }));

  return [...itemTargets, ...sortingTargets];
}

function uniqueImportMatchTargets(targets) {
  const unique = new Map();
  targets.forEach((target) => {
    if (!target?.id || !target?.type) {
      return;
    }
    unique.set(`${target.type}:${target.id}`, target);
  });
  return [...unique.values()];
}

function collectImportMatchTargets(targets, predicate, reason) {
  return uniqueImportMatchTargets(
    targets
      .filter(predicate)
      .map((target) => ({ ...target, reason })),
  );
}

function getPreferredImportMatchTarget(candidates) {
  return candidates.find((candidate) => candidate.type === "item")
    || candidates.find((candidate) => candidate.type === "sorting")
    || candidates[0]
    || null;
}

function getLinkedImportSortingTargets(itemCandidates, sortingTargets) {
  const linkedItemIds = new Set(
    itemCandidates
      .map((candidate) => candidate.id)
      .filter(Boolean),
  );

  return sortingTargets
    .filter((target) => target.sourceItemId && linkedItemIds.has(target.sourceItemId))
    .map((target) => ({ ...target, reason: "商品一覧との連携" }));
}

function getBestImportMatch(parsedItem) {
  const targets = createImportSearchTargets();
  const sortingTargets = targets.filter((target) => target.type === "sorting");
  const jan = normalizeImportComparable(parsedItem.jan);
  const modelNumber = normalizeImportComparable(parsedItem.modelNumber);
  const title = String(parsedItem.productName || "").trim();
  const normalizedTitle = normalizeImportComparable(title);
  let candidates = [];
  let reason = "一致なし";

  if (jan) {
    candidates = collectImportMatchTargets(
      targets,
      (target) => normalizeImportComparable(target.jan) === jan,
      "JAN一致",
    );
    if (candidates.length) {
      reason = "JAN一致";
    }
  }

  if (!candidates.length && modelNumber) {
    candidates = collectImportMatchTargets(
      targets,
      (target) => normalizeImportComparable(target.modelNumber) === modelNumber,
      "型番一致",
    );
    if (candidates.length) {
      reason = "型番一致";
    }
  }

  if (!candidates.length && title) {
    candidates = collectImportMatchTargets(
      targets,
      (target) => String(target.title || "").trim() === title,
      "商品名完全一致",
    );
    if (candidates.length) {
      reason = "商品名完全一致";
    }
  }

  if (!candidates.length && normalizedTitle) {
    candidates = collectImportMatchTargets(
      targets,
      (target) => normalizeImportComparable(target.title) === normalizedTitle,
      "商品名正規化一致",
    );
    if (candidates.length) {
      reason = "商品名正規化一致";
    }
  }

  const itemMatches = candidates.filter((candidate) => candidate.type === "item");
  const directSortingMatches = candidates.filter((candidate) => candidate.type === "sorting");
  const linkedSortingMatches = getLinkedImportSortingTargets(itemMatches, sortingTargets);
  const sortingMatches = uniqueImportMatchTargets([...directSortingMatches, ...linkedSortingMatches]);
  const allCandidates = uniqueImportMatchTargets([...itemMatches, ...sortingMatches]);
  const target = getPreferredImportMatchTarget(allCandidates);

  if (allCandidates.length) {
    return {
      status: "一致",
      reason,
      target,
      candidates: allCandidates,
      itemMatches,
      sortingMatches,
      otherCandidates: [],
    };
  }

  return {
    status: "新規候補",
    reason: "一致なし",
    target: null,
    candidates: [],
    itemMatches: [],
    sortingMatches: [],
    otherCandidates: [],
  };
}

function analyzeImportedItems(parsedItems) {
  return parsedItems.map((parsedItem, index) => {
    const match = getBestImportMatch(parsedItem);
    const analyzedItem = {
      ...parsedItem,
      importId: parsedItem.importId || `import-${Date.now()}-${index}`,
      rowNumber: index + 1,
      matchStatus: match.status,
      matchReason: match.reason,
      matchTarget: match.target,
      matchCandidates: match.candidates,
      itemMatches: match.itemMatches || [],
      sortingMatches: match.sortingMatches || [],
      otherCandidates: match.otherCandidates || [],
    };
    if (analyzedItem.matchTarget && getImportUpdateCandidates(analyzedItem).some((candidate) => candidate.canUpdate)) {
      analyzedItem.matchStatus = "更新候補";
    }
    return analyzedItem;
  });
}

function getSelectedImportFields() {
  return new Set(
    [...document.querySelectorAll("[data-import-field]:checked")]
      .map((checkbox) => checkbox.dataset.importField)
      .filter(Boolean),
  );
}

function getImportUpdateCandidates(importedItem) {
  const targetItem = getImportTargetByMatch(importedItem.matchTarget);

  if (!targetItem) {
    return [];
  }

  return IMPORT_COMPLETION_FIELDS
    .map((field) => {
      const importedValue = String(importedItem[field.importedKey] || "").trim();
      const currentValue = getImportTargetFieldValue(targetItem, field.key);
      const hasImportedValue = Boolean(importedValue);
      const isBlank = !currentValue;
      const isDifferent = Boolean(currentValue && importedValue && normalizeImportComparable(currentValue) !== normalizeImportComparable(importedValue));
      const isSame = Boolean(currentValue && importedValue && normalizeImportComparable(currentValue) === normalizeImportComparable(importedValue));

      return {
        ...field,
        importedValue,
        currentValue,
        hasImportedValue,
        isBlank,
        isDifferent,
        isSame,
        shouldUpdateByDefault: hasImportedValue && isBlank,
        canUpdate: hasImportedValue && (isBlank || isDifferent),
      };
    })
    .filter((candidate) => candidate.hasImportedValue);
}

function createImportUpdateCandidateElement(importedItem, itemIndex) {
  const candidates = getImportUpdateCandidates(importedItem);
  const container = document.createElement("details");
  container.className = "import-update-candidates";

  const summary = document.createElement("summary");
  summary.className = "import-update-summary";
  const arrow = document.createElement("span");
  arrow.className = "accordion-arrow";
  arrow.textContent = "▶";
  const title = document.createElement("strong");
  title.textContent = `更新候補（${candidates.filter((candidate) => candidate.canUpdate).length}件）`;
  summary.append(arrow, title);
  container.append(summary);

  const targetName = document.createElement("p");
  targetName.className = "import-update-target";
  targetName.textContent = `一致商品：${getImportTargetTitle(importedItem.matchTarget) || "名称未設定"}`;
  container.append(targetName);

  if (!candidates.length) {
    const empty = document.createElement("p");
    empty.className = "import-update-empty";
    empty.textContent = "補完できる取込項目はありません";
    container.append(empty);
    return container;
  }

  candidates.forEach((candidate) => {
    const row = document.createElement("label");
    const updateTypeClass = candidate.isSame
      ? " import-update-none"
      : candidate.isDifferent
        ? " import-update-change"
        : candidate.isBlank
          ? " import-update-add"
          : "";
    row.className = `import-update-row${updateTypeClass}${candidate.isDifferent ? " import-update-conflict" : ""}${candidate.isSame ? " import-update-same" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.importUpdateIndex = String(itemIndex);
    checkbox.dataset.importUpdateField = candidate.key;
    checkbox.checked = candidate.shouldUpdateByDefault;
    checkbox.disabled = !candidate.canUpdate;

    const text = document.createElement("span");
    const currentText = candidate.currentValue || "空欄";
    const labelText = document.createElement("b");
    const updateIcon = candidate.isSame ? "⚪" : candidate.isDifferent ? "🟠" : "🟢";
    const actionText = candidate.isSame ? "変更なし" : candidate.isBlank ? "追加" : "変更";
    labelText.textContent = `${updateIcon} ${candidate.label}${actionText}`;
    const valueText = document.createElement("small");
    valueText.textContent = candidate.importedValue || "-";
    text.append(labelText, valueText);

    const compare = document.createElement("details");
    compare.className = "import-update-compare";
    const compareSummary = document.createElement("summary");
    compareSummary.textContent = "詳細";
    const compareText = document.createElement("small");
    compareText.textContent = `現在：${currentText} / 取込：${candidate.importedValue}`;
    compare.append(compareSummary, compareText);
    text.append(compare);

    if (candidate.isDifferent) {
      const warning = document.createElement("em");
      warning.textContent = "値が異なります。チェックした場合のみ上書きします。";
      text.append(warning);
    }

    if (candidate.isSame) {
      const same = document.createElement("em");
      same.textContent = "同じ値が入力済みです。";
      text.append(same);
    }

    row.append(checkbox, text);
    container.append(row);
  });

  return container;
}

function getImportSortingSummaryText(matchTarget) {
  const sortingItem = getImportTargetByMatch(matchTarget);
  if (!sortingItem) {
    return "";
  }

  const destination = getSortingDestinationLabel(sortingItem.destination);
  const bestOffer = getBestSortingOffer(sortingItem);
  const price = bestOffer ? formatMoney(bestOffer.value) : "未入力";
  const shippingStatus = sortingItem.shippingStatus || "未仕分け";
  return `${destination} / 仕分け登録済み / 予定額：${price} / 発送状態：${shippingStatus}`;
}

function createImportMatchRow(label, value) {
  const row = document.createElement("p");
  row.className = "import-match-row";
  const labelElement = document.createElement("span");
  const valueElement = document.createElement("b");
  labelElement.textContent = `${label}：`;
  valueElement.textContent = value || "-";
  row.append(labelElement, valueElement);
  return row;
}

function createImportSortingMatchDetail(matchTarget) {
  const sortingItem = getImportTargetByMatch(matchTarget);
  const detail = document.createElement("div");
  detail.className = "import-sorting-detail";

  if (!sortingItem) {
    detail.append(createImportMatchRow("状態", "仕分け登録済み"));
    return detail;
  }

  const bestOffer = getBestSortingOffer(sortingItem);
  const price = bestOffer ? formatMoney(bestOffer.value) : "未入力";
  detail.append(
    createImportMatchRow("売却先", getSortingDestinationLabel(sortingItem.destination)),
    createImportMatchRow("状態", "仕分け登録済み"),
    createImportMatchRow("予定額", price),
    createImportMatchRow("発送状態", sortingItem.shippingStatus || "未仕分け"),
  );

  const location = sortingItem.boxNumber || sortingItem.storageLocation || "";
  if (location) {
    detail.append(createImportMatchRow(sortingItem.boxNumber ? "箱番号" : "保管場所", location));
  }

  return detail;
}

function createImportMatchGroup(title, matches, emptyText, formatter) {
  const section = document.createElement("div");
  section.className = "import-match-group";

  const heading = document.createElement("strong");
  heading.textContent = title;
  section.append(heading);

  if (!matches.length) {
    const empty = document.createElement("p");
    empty.className = "import-match-empty";
    empty.textContent = emptyText;
    section.append(empty);
    return section;
  }

  matches.forEach((match) => {
    const row = document.createElement("p");
    row.className = "import-match-row";
    row.textContent = formatter(match);
    section.append(row);
  });

  return section;
}

function createImportMatchOverviewElement(importedItem) {
  const overview = document.createElement("div");
  overview.className = "import-match-overview";
  const itemMatches = importedItem.itemMatches || [];
  const sortingMatches = importedItem.sortingMatches || [];

  const itemGroup = createImportMatchGroup(
    itemMatches.length ? "✅ 一致商品あり" : "❌ 一致商品なし",
    itemMatches,
    "商品一覧側の一致：なし",
    (match) => `${match.reason || importedItem.matchReason}: ${getImportTargetTitle(match) || "名称未設定"}`,
  );
  overview.append(itemGroup);

  const sortingGroup = document.createElement("div");
  sortingGroup.className = "import-match-group import-sorting-group";
  const sortingHeading = document.createElement("strong");
  sortingHeading.textContent = sortingMatches.length ? "📦 関連仕分けあり" : "➕ 関連仕分けなし（追加可能）";
  sortingGroup.append(sortingHeading);

  if (!sortingMatches.length) {
    const empty = document.createElement("p");
    empty.className = "import-match-empty";
    empty.textContent = "関連仕分け：未登録 / 仕分けへ追加可能";
    sortingGroup.append(empty);
  } else {
    sortingMatches.forEach((match) => {
      sortingGroup.append(createImportSortingMatchDetail(match));
    });
  }

  overview.append(sortingGroup);

  return overview;
}

function createImportCandidateSelectElement(item) {
  const section = document.createElement("div");
  section.className = "import-candidate-block";
  const heading = document.createElement("strong");
  heading.textContent = "紐付け候補";
  section.append(heading);

  const label = document.createElement("label");
  label.className = "import-candidate-select-label";
  label.textContent = "更新・補完する対象を選択";
  const select = document.createElement("select");
  select.dataset.importMatchIndex = String(item.rowNumber - 1);

  const emptyOption = document.createElement("option");
  emptyOption.value = "";
  emptyOption.textContent = "紐付けしない";
  select.append(emptyOption);

  [
    ["商品一覧の一致", item.itemMatches || []],
    ["売却先仕分けの一致", item.sortingMatches || []],
    ["その他候補", item.otherCandidates || []],
  ].forEach(([groupLabel, candidates]) => {
    if (!candidates.length) {
      return;
    }
    const optgroup = document.createElement("optgroup");
    optgroup.label = groupLabel;
    candidates.forEach((candidate) => {
      const option = document.createElement("option");
      option.value = `${candidate.type}:${candidate.id}`;
      option.textContent = `${candidate.type === "item" ? "商品" : "仕分け"}: ${candidate.title || "名称未設定"}`;
      optgroup.append(option);
    });
    select.append(optgroup);
  });

  if (item.matchTarget) {
    select.value = `${item.matchTarget.type}:${item.matchTarget.id}`;
  }
  label.append(select);
  section.append(label);
  return section;
}

function createImportReferenceImageActionElement(item) {
  const section = document.createElement("div");
  section.className = "import-reference-action";
  const button = document.createElement("button");
  button.className = "ghost-button";
  button.type = "button";
  button.textContent = getReferenceImageCount(item)
    ? `📚 参考画像 ${getReferenceImageCount(item)}件`
    : "📚 参考画像追加";
  button.addEventListener("click", () => {
    if (item.matchTarget) {
      requestReferenceImage(item.matchTarget.id, item.matchTarget.type === "sorting" ? "sorting" : "items");
      return;
    }

    requestImportReferenceImage(item.importId);
  });

  const note = document.createElement("small");
  note.textContent = item.matchTarget
    ? "紐付け先へ確認用画像として保存します"
    : "新規登録・仕分け追加時に引き継ぎます";
  section.append(button, note);
  return section;
}

function getImportRowsWithoutSortingMatch() {
  return importParsedItems.filter((item) => !(item.sortingMatches || []).length);
}

function getImportResultStats() {
  const total = importParsedItems.length;
  const updateCandidates = importParsedItems.filter((item) => item.matchStatus === "更新候補").length;
  const newItems = importParsedItems.filter((item) => item.matchStatus === "新規候補").length;
  const itemMatchCount = importParsedItems.filter((item) => (item.itemMatches || []).length).length;
  const sortingMatchCount = importParsedItems.filter((item) => (item.sortingMatches || []).length).length;
  const sortingAddCount = getImportRowsWithoutSortingMatch().length;
  const completedCount = importParsedItems.filter(isImportResultCompleted).length;
  const remainingCount = Math.max(0, total - completedCount);

  return {
    total,
    updateCandidates,
    newItems,
    itemMatchCount,
    sortingMatchCount,
    sortingAddCount,
    completedCount,
    remainingCount,
  };
}

function renderImportResultSummary() {
  importResultSummary.innerHTML = "";
  const stats = getImportResultStats();

  if (!stats.total) {
    importResultSummary.textContent = "まだ解析していません";
    return;
  }

  const summary = document.createElement("span");
  summary.className = "import-summary-grid";
  [
    ["解析件数", `${stats.total}件`],
    ["更新候補", `${stats.updateCandidates}件`],
    ["新規候補", `${stats.newItems}件`],
    ["一致商品", `${stats.itemMatchCount}件`],
    ["関連仕分けあり", `${stats.sortingMatchCount}件`],
    ["完了 / 残り", `${stats.completedCount} / ${stats.remainingCount}`],
  ].forEach(([label, value]) => {
    const cell = document.createElement("span");
    const labelElement = document.createElement("small");
    const valueElement = document.createElement("b");
    labelElement.textContent = label;
    valueElement.textContent = value;
    cell.append(labelElement, valueElement);
    summary.append(cell);
  });

  importResultSummary.append(summary);
}

function createImportResultToolbar() {
  const toolbar = document.createElement("div");
  toolbar.className = "import-result-toolbar";

  const selection = document.createElement("div");
  selection.className = "import-bulk-actions";

  const selectAllButton = document.createElement("button");
  selectAllButton.className = "ghost-button";
  selectAllButton.type = "button";
  selectAllButton.textContent = "全選択";
  selectAllButton.addEventListener("click", () => {
    getVisibleImportResults().forEach((item) => setImportResultSelected(item, true));
    renderImportResults();
  });

  const clearButton = document.createElement("button");
  clearButton.className = "ghost-button";
  clearButton.type = "button";
  clearButton.textContent = "全解除";
  clearButton.addEventListener("click", () => {
    getVisibleImportResults().forEach((item) => setImportResultSelected(item, false));
    renderImportResults();
  });

  selection.append(selectAllButton, clearButton);

  const filters = document.createElement("div");
  filters.className = "import-filter-chip-list";
  [
    ["all", "全件"],
    ["update", "更新候補"],
    ["new", "新規候補"],
    ["sorting", "関連仕分けあり"],
    ["itemMatched", "一致商品あり"],
    ["itemUnmatched", "一致商品なし"],
  ].forEach(([value, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `import-filter-chip${importResultFilter === value ? " is-active" : ""}`;
    button.textContent = label;
    button.addEventListener("click", () => {
      importResultFilter = value;
      saveUiState();
      renderImportResults();
    });
    filters.append(button);
  });

  toolbar.append(selection, filters);

  const optionFilters = document.createElement("div");
  optionFilters.className = "import-option-filters";

  [
    ["hideCompleted", "反映済みを隠す", importCompletedDisplay === "hide"],
    ["imageOnly", "画像付きだけ表示", importImageOnly],
    ["storageUnsetOnly", "保管場所未設定だけ表示", importStorageUnsetOnly],
  ].forEach(([key, label, checked]) => {
    const control = document.createElement("label");
    control.className = "quick-filter-check";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checked;
    checkbox.addEventListener("change", () => {
      if (key === "hideCompleted") {
        importCompletedDisplay = checkbox.checked ? "hide" : "dim";
      } else if (key === "imageOnly") {
        importImageOnly = checkbox.checked;
      } else if (key === "storageUnsetOnly") {
        importStorageUnsetOnly = checkbox.checked;
      }
      saveUiState();
      renderImportResults();
    });
    const text = document.createElement("span");
    text.textContent = label;
    control.append(checkbox, text);
    optionFilters.append(control);
  });

  toolbar.append(optionFilters);
  return toolbar;
}

function renderImportResults() {
  if (!importResultList || !importResultSummary) {
    return;
  }

  importResultList.innerHTML = "";
  const total = importParsedItems.length;
  renderImportResultSummary();

  [fillBlankImportFieldsButton, applyImportMatchesButton, registerImportNewItemsButton, addImportSortingButton].forEach((button) => {
    if (button) {
      button.disabled = total === 0;
    }
  });

  if (fillBlankImportFieldsButton) {
    fillBlankImportFieldsButton.disabled = total === 0 || getImportUpdatePlan({ blankOnly: true }).length === 0;
  }
  if (applyImportMatchesButton) {
    applyImportMatchesButton.disabled = total === 0 || getImportUpdatePlan().length === 0;
  }

  if (!total) {
    updateImportVisibleCount(0, 0);
    const empty = document.createElement("div");
    empty.className = "import-empty-state";
    empty.textContent = "駿河屋の商品一覧テキストを貼り付けて解析してください";
    importResultList.append(empty);
    return;
  }

  importResultList.append(createImportResultToolbar());

  const visibleItems = getVisibleImportResults();
  updateImportVisibleCount(visibleItems.length, total);
  if (!visibleItems.length) {
    const empty = document.createElement("div");
    empty.className = "import-empty-state";
    empty.textContent = "この条件に一致する解析結果はありません";
    importResultList.append(empty);
    return;
  }

  visibleItems.forEach((item) => {
    const itemIndex = importParsedItems.findIndex((currentItem) => currentItem.importId === item.importId);
    const card = document.createElement("article");
    card.className = `import-result-card import-result-${item.matchStatus === "一致" ? "matched" : item.matchStatus === "更新候補" ? "candidate" : "new"}${isImportResultCompleted(item) ? " import-result-completed" : ""}`;
    card.tabIndex = 0;
    card.dataset.importId = item.importId;
    card.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        const cards = [...importResultList.querySelectorAll(".import-result-card")];
        const currentIndex = cards.indexOf(card);
        const nextIndex = event.key === "ArrowDown"
          ? Math.min(cards.length - 1, currentIndex + 1)
          : Math.max(0, currentIndex - 1);
        cards[nextIndex]?.focus();
      }
      if (event.key === " " && event.target === card) {
        event.preventDefault();
        setImportResultSelected(item, !isImportResultSelected(item));
        renderImportResults();
      }
      if (event.key === "Enter" && event.metaKey && applyImportMatchesButton && !applyImportMatchesButton.disabled) {
        event.preventDefault();
        applyImportMatchesButton.click();
      }
    });

    const heading = document.createElement("div");
    heading.className = "import-result-card-heading";

    const title = document.createElement("strong");
    title.textContent = item.productName || `名称未設定 ${item.rowNumber}`;

    const status = document.createElement("span");
    status.className = "import-status-pill";
    status.textContent = item.matchStatus;

    const reflectLabel = document.createElement("label");
    reflectLabel.className = "import-reflect-check";
    const reflectCheckbox = document.createElement("input");
    reflectCheckbox.type = "checkbox";
    reflectCheckbox.checked = isImportResultSelected(item);
    reflectCheckbox.dataset.importReflectId = item.importId;
    reflectCheckbox.addEventListener("click", (event) => event.stopPropagation());
    reflectCheckbox.addEventListener("change", () => {
      setImportResultSelected(item, reflectCheckbox.checked);
      renderImportResults();
    });
    const reflectText = document.createElement("span");
    reflectText.textContent = "この商品を反映";
    reflectLabel.append(reflectCheckbox, reflectText);

    const headingActions = document.createElement("div");
    headingActions.className = "import-card-actions";
    headingActions.append(status, reflectLabel);
    heading.append(title, headingActions);

    const meta = document.createElement("div");
    meta.className = "import-result-meta";
    [
      ["JAN", item.jan || "-"],
      ["型番", item.modelNumber || "-"],
      ["機種", item.platform || "-"],
      ["メーカー", item.manufacturer || "-"],
      ["数量", item.quantity || "-"],
    ].forEach(([label, value]) => {
      const row = document.createElement("span");
      row.textContent = `${label}: ${value}`;
      meta.append(row);
    });
    const importImageSource = getImportTargetByMatch(item.matchTarget) || item;
    appendImageStateBadges(meta, importImageSource);

    card.append(heading, meta);

    card.append(createImportMatchOverviewElement(item));

    if (item.matchCandidates.length > 0) {
      card.append(createImportCandidateSelectElement(item));
    }

    card.append(createImportReferenceImageActionElement(item));

    if (item.matchTarget) {
      card.append(createImportUpdateCandidateElement(item, itemIndex));
    }

    importResultList.append(card);
  });
}

function updateImportMatchSelection(select) {
  const index = Number(select?.dataset.importMatchIndex);
  const target = importParsedItems[index];

  if (!target) {
    return;
  }

  const selectedValue = select.value;
  target.matchTarget = target.matchCandidates.find((candidate) => `${candidate.type}:${candidate.id}` === selectedValue) || null;
  target.matchReason = target.matchTarget ? "手動選択" : "紐付けなし";
  saveUiState();
  renderImportResults();
}

function parseImportInput() {
  const source = importSourceInput?.value || "surugaya";
  const parser = IMPORT_PARSERS[source] || IMPORT_PARSERS.surugaya;
  const parsed = parser(importTextInput?.value || "");

  importParsedItems = analyzeImportedItems(parsed);
  selectedImportResultIds = new Set(importParsedItems.map((item) => item.importId));
  completedImportResultIds = new Set();
  importResultFilter = "all";
  importCompletedDisplay = "dim";
  importImageOnly = false;
  importStorageUnsetOnly = false;
  saveUiState();
  renderImportResults();

  if (importParsedItems.length) {
    showSuccessMessage(`${importParsedItems.length}件を解析しました`);
  } else {
    showErrorMessage("解析できる商品が見つかりませんでした");
  }
}

function getSelectedImportUpdateFieldsForIndex(index) {
  return new Set(
    [...document.querySelectorAll(`[data-import-update-index="${index}"]:checked`)]
      .map((checkbox) => checkbox.dataset.importUpdateField)
      .filter(Boolean),
  );
}

function getImportUpdatePlan({ blankOnly = false } = {}) {
  const plan = [];

  importParsedItems.forEach((importedItem, index) => {
    if (!isImportResultSelected(importedItem)) {
      return;
    }

    const targetItem = getImportTargetByMatch(importedItem.matchTarget);
    if (!targetItem) {
      return;
    }

    const selectedFields = blankOnly
      ? new Set(getImportUpdateCandidates(importedItem)
        .filter((candidate) => candidate.shouldUpdateByDefault)
        .map((candidate) => candidate.key))
      : getSelectedImportUpdateFieldsForIndex(index);

    const fields = IMPORT_COMPLETION_FIELDS
      .filter((field) => selectedFields.has(field.key))
      .map((field) => ({
        ...field,
        value: String(importedItem[field.importedKey] || "").trim(),
        currentValue: getImportTargetFieldValue(targetItem, field.key),
      }))
      .filter((field) => {
        if (!field.value) {
          return false;
        }

        if (blankOnly) {
          return !field.currentValue;
        }

        return normalizeImportComparable(field.currentValue) !== normalizeImportComparable(field.value);
      });

    if (fields.length > 0) {
      plan.push({
        importedItem,
        targetItem,
        targetType: importedItem.matchTarget.type,
        fields,
      });
    }
  });

  return plan;
}

function getImportUpdatePlanSummary(plan) {
  const summary = new Map();

  plan.forEach((entry) => {
    entry.fields.forEach((field) => {
      const isAddition = !field.currentValue;
      const key = `${field.label}${isAddition ? "追加" : "変更"}`;
      summary.set(key, (summary.get(key) || 0) + 1);
    });
  });

  return [...summary.entries()]
    .map(([label, count]) => `${label}：${count}件`)
    .join("\n");
}

function createImportApplyConfirmMessage(plan) {
  const stats = getImportResultStats();
  const updateItemCount = plan.length;
  const updateDetail = getImportUpdatePlanSummary(plan);

  return [
    `${stats.total}件解析`,
    "",
    `更新対象：${updateItemCount}件`,
    updateDetail || "更新項目：0件",
    "",
    `仕分け追加候補：${stats.sortingAddCount}件`,
    `新規商品候補：${stats.newItems}件`,
    "",
    "この内容で反映しますか？",
  ].join("\n");
}

function applyImportUpdatePlan(plan) {
  let itemUpdated = false;
  let sortingUpdated = false;
  let fieldCount = 0;

  plan.forEach((entry) => {
    entry.fields.forEach((field) => {
      if (setImportTargetFieldValue(entry.targetItem, field.key, field.value)) {
        fieldCount += 1;
      }
    });

    if (entry.targetType === "item") {
      itemUpdated = true;
    } else if (entry.targetType === "sorting") {
      sortingUpdated = true;
    }
  });

  return { itemUpdated, sortingUpdated, fieldCount };
}

function markImportPlanCompleted(plan) {
  plan.forEach((entry) => {
    if (entry.importedItem?.importId) {
      completedImportResultIds.add(entry.importedItem.importId);
      selectedImportResultIds.delete(entry.importedItem.importId);
    }
  });
  saveUiState();
}

async function fillBlankImportFields() {
  const plan = getImportUpdatePlan({ blankOnly: true });

  if (!plan.length) {
    showErrorMessage("空欄補完できる項目がありません");
    return;
  }

  const fieldCount = plan.reduce((total, entry) => total + entry.fields.length, 0);
  const confirmed = await showAppDialog({
    title: "空欄だけ補完",
    message: [
      createImportApplyConfirmMessage(plan),
      "",
      `空欄のみ：${fieldCount}項目`,
      "既に入力済みの項目は上書きしません。",
    ].join("\n"),
    confirmText: "補完する",
  });

  if (!confirmed) {
    return;
  }

  await createStoredBackup("実行前", { toast: true });
  const result = applyImportUpdatePlan(plan);

  if (result.itemUpdated) {
    saveItems();
  }
  if (result.sortingUpdated) {
    saveSortingItems();
  }

  render();
  renderSorting();
  markImportPlanCompleted(plan);
  importParsedItems = analyzeImportedItems(importParsedItems);
  renderImportResults();
  await createStoredBackup("更新後", { toast: true });
  showSuccessMessage(`${plan.length}件 / ${result.fieldCount}項目を補完しました`);
}

function applyImportFieldsToItem(targetItem, importedItem, selectedFields) {
  if (selectedFields.has("jan") && importedItem.jan) {
    targetItem.jan = importedItem.jan;
  }
  if (selectedFields.has("modelNumber") && importedItem.modelNumber) {
    targetItem.modelNumber = importedItem.modelNumber;
  }
  if (selectedFields.has("manufacturer") && importedItem.manufacturer) {
    targetItem.manufacturer = importedItem.manufacturer;
  }
  if (selectedFields.has("releaseDate") && importedItem.releaseDate) {
    targetItem.releaseDate = importedItem.releaseDate;
  }
  if (selectedFields.has("platform") && importedItem.platform) {
    targetItem.platform = importedItem.platform;
  }
  if (selectedFields.has("title") && importedItem.productName) {
    targetItem.name = importedItem.productName;
    targetItem.listingTitle = importedItem.productName;
  }
  if (selectedFields.has("memo")) {
    targetItem.memo = [targetItem.memo, "駿河屋取込", importedItem.condition, importedItem.note]
      .filter(Boolean)
      .join("\n");
  }
  targetItem.updatedAt = new Date().toISOString();
}

function applyImportFieldsToSortingItem(targetItem, importedItem, selectedFields) {
  if (selectedFields.has("jan") && importedItem.jan) {
    targetItem.jan = importedItem.jan;
  }
  if (selectedFields.has("modelNumber") && importedItem.modelNumber) {
    targetItem.modelNumber = importedItem.modelNumber;
  }
  if (selectedFields.has("manufacturer") && importedItem.manufacturer) {
    targetItem.manufacturer = importedItem.manufacturer;
  }
  if (selectedFields.has("releaseDate") && importedItem.releaseDate) {
    targetItem.releaseDate = importedItem.releaseDate;
  }
  if (selectedFields.has("platform") && importedItem.platform) {
    targetItem.platform = importedItem.platform;
    targetItem.genre = importedItem.platform;
  }
  if (selectedFields.has("title") && importedItem.productName) {
    targetItem.name = importedItem.productName;
  }
  if (selectedFields.has("destination")) {
    targetItem.destination = "駿河屋";
  }
  if (selectedFields.has("memo")) {
    targetItem.memo = [targetItem.memo, "駿河屋取込", importedItem.condition, importedItem.note]
      .filter(Boolean)
      .join("\n");
  }
  targetItem.updatedAt = new Date().toISOString();
}

async function applyImportMatchesToExistingItems() {
  const plan = getImportUpdatePlan();

  if (!plan.length) {
    showErrorMessage("反映できる選択項目がありません");
    return;
  }

  const confirmed = await showAppDialog({
    title: "更新候補を反映",
    message: [
      createImportApplyConfirmMessage(plan),
      "",
      "値が異なる項目は、チェックされたものだけ上書きします。",
    ].join("\n"),
    confirmText: "反映する",
  });

  if (!confirmed) {
    return;
  }

  await createStoredBackup("実行前", { toast: true });
  const result = applyImportUpdatePlan(plan);

  if (result.itemUpdated) {
    saveItems();
  }
  if (result.sortingUpdated) {
    saveSortingItems();
  }

  render();
  renderSorting();
  markImportPlanCompleted(plan);
  importParsedItems = analyzeImportedItems(importParsedItems);
  renderImportResults();
  await createStoredBackup("更新後", { toast: true });
  showSuccessMessage(`${plan.length}件 / ${result.fieldCount}項目を更新しました`);
}

function createItemFromImportedProduct(importedItem) {
  const title = importedItem.productName || `駿河屋取込 ${importedItem.rowNumber}`;
  const id = createId();
  const memoParts = [
    "駿河屋取込",
    importedItem.condition ? `コンディション: ${importedItem.condition}` : "",
    importedItem.note ? `備考: ${importedItem.note}` : "",
    importedItem.quantity ? `数量: ${importedItem.quantity}` : "",
  ].filter(Boolean);

  return normalizeItem({
    id,
    name: title,
    listingTitle: title,
    category: importedItem.platform || "",
    platform: importedItem.platform || "",
    jan: importedItem.jan || "",
    modelNumber: importedItem.modelNumber || "",
    manufacturer: importedItem.manufacturer || "",
    releaseDate: importedItem.releaseDate || "",
    quantity: importedItem.quantity || "",
    condition: "",
    status: DEFAULT_STATUS,
    storageLocation: "未設定",
    memo: memoParts.join("\n"),
    referenceImages: linkReferenceImagesForTarget(importedItem.referenceImages, { linkedItemId: id }),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

function getImportedItemDedupKey(importedItem) {
  const jan = normalizeImportComparable(importedItem.jan);
  const modelNumber = normalizeImportComparable(importedItem.modelNumber);
  const title = normalizeImportComparable(importedItem.productName);
  return jan ? `jan:${jan}` : modelNumber ? `model:${modelNumber}` : `title:${title}`;
}

async function registerImportNewItems() {
  const newRows = importParsedItems.filter((item) => item.matchStatus === "新規候補" && isImportResultSelected(item));

  if (!newRows.length) {
    showErrorMessage("新規登録できる候補がありません");
    return;
  }

  const confirmed = await showAppDialog({
    title: "新規商品として登録",
    message: `新規候補${newRows.length}件を商品一覧へ追加します。既存商品は削除・上書きしません。`,
    confirmText: "登録する",
  });

  if (!confirmed) {
    return;
  }

  await createStoredBackup("実行前", { toast: true });
  const existingKeys = new Set(items.map((item) => getImportedItemDedupKey({
    jan: getItemJanValue(item),
    modelNumber: getItemModelValue(item),
    productName: getListingTitle(item),
  })));
  let addedCount = 0;

  newRows.forEach((importedItem) => {
    const key = getImportedItemDedupKey(importedItem);
    if (key === "title:" || existingKeys.has(key)) {
      return;
    }

    const newItem = createItemFromImportedProduct(importedItem);
    items.push(newItem);
    existingKeys.add(key);
    completedImportResultIds.add(importedItem.importId);
    selectedImportResultIds.delete(importedItem.importId);
    addedCount += 1;
  });

  if (addedCount) {
    saveItems();
    render();
    importParsedItems = analyzeImportedItems(importParsedItems);
    renderImportResults();
    saveUiState();
  }
  showSuccessMessage(`${addedCount}件を商品一覧へ追加しました`);
}

function findItemForImportedProduct(importedItem) {
  const jan = normalizeImportComparable(importedItem.jan);
  const modelNumber = normalizeImportComparable(importedItem.modelNumber);
  const title = normalizeImportComparable(importedItem.productName);

  return items.find((item) => (
    (jan && normalizeImportComparable(getItemJanValue(item)) === jan)
      || (modelNumber && normalizeImportComparable(getItemModelValue(item)) === modelNumber)
      || (title && normalizeImportComparable(getListingTitle(item)) === title)
  ));
}

function getSurugayaAppraisalFieldName() {
  const source = getAppraisalSources().find((currentSource) => getAppraisalFieldLabel(currentSource).includes("駿河屋"));
  return source ? getAppraisalFieldName(source) : "surugayaPrice";
}

async function addImportItemsToSorting() {
  const selectedRows = importParsedItems.filter(isImportResultSelected);

  if (!selectedRows.length) {
    showErrorMessage("仕分けへ追加できる解析結果がありません");
    return;
  }

  const confirmed = await showAppDialog({
    title: "売却先仕分けへ追加",
    message: `選択中の解析結果${selectedRows.length}件を売却先「駿河屋」の仕分け候補として追加します。既存仕分けは削除・上書きしません。`,
    confirmText: "追加する",
  });

  if (!confirmed) {
    return;
  }

  await createStoredBackup("実行前", { toast: true });
  const surugayaField = getSurugayaAppraisalFieldName();
  const existingKeys = new Set(sortingItems.map((item) => getImportedItemDedupKey({
    jan: getItemJanValue(item),
    modelNumber: getItemModelValue(item),
    productName: item.name,
  })));
  let addedCount = 0;

  selectedRows.forEach((importedItem) => {
    const key = getImportedItemDedupKey(importedItem);
    if (key === "title:" || existingKeys.has(key)) {
      return;
    }

    const sourceItem = findItemForImportedProduct(importedItem);
    const sortingId = createId();
    sortingItems.push(normalizeSortingItem({
      id: sortingId,
      sourceItemId: sourceItem?.id || "",
      name: importedItem.productName || `駿河屋取込 ${importedItem.rowNumber}`,
      genre: importedItem.platform || sourceItem?.category || "",
      quantity: importedItem.quantity || 1,
      storageLocation: sourceItem?.storageLocation || "未設定",
      destination: "駿河屋",
      status: "未確認",
      shippingStatus: "未仕分け",
      jan: importedItem.jan || "",
      modelNumber: importedItem.modelNumber || "",
      manufacturer: importedItem.manufacturer || "",
      releaseDate: importedItem.releaseDate || "",
      memo: ["駿河屋取込", importedItem.condition, importedItem.note].filter(Boolean).join("\n"),
      referenceImages: linkReferenceImagesForTarget(importedItem.referenceImages, {
        linkedItemId: sourceItem?.id || "",
        linkedSortingId: sortingId,
      }),
      [surugayaField]: "",
    }));
    existingKeys.add(key);
    completedImportResultIds.add(importedItem.importId);
    selectedImportResultIds.delete(importedItem.importId);
    addedCount += 1;
  });

  if (addedCount) {
    saveSortingItems();
    renderSorting();
    render();
    importParsedItems = analyzeImportedItems(importParsedItems);
    renderImportResults();
    saveUiState();
  }
  showSuccessMessage(`${addedCount}件を仕分けへ追加しました`);
}

function loadSurugayaEstimates() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SURUGAYA_ESTIMATE_STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveSurugayaEstimates() {
  localStorage.setItem(SURUGAYA_ESTIMATE_STORAGE_KEY, JSON.stringify(savedSurugayaEstimates.slice(0, 50)));
}

function normalizeEstimateText(value) {
  return String(value || "")
    .replace(/[０-９]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0xfee0))
    .replace(/[，]/g, ",")
    .trim();
}

function parseSurugayaEstimateAmount(line) {
  const normalizedLine = normalizeEstimateText(line);
  if (/^※不可品/.test(normalizedLine) || /買取不可|お値段がつきません|値段がつきません|不可|対象外|キャンセル/i.test(normalizedLine)) {
    return { amount: null, rawAmount: "-", kind: "unavailable", decision: "no_send", reason: "買取不可" };
  }

  const leadingAmountMatch = normalizedLine.match(/^[\\￥¥]\s*([0-9][0-9,]*)/);
  if (leadingAmountMatch) {
    const amount = parseMoney(leadingAmountMatch[1]);
    if (amount === 0 && /現物査定になります/.test(normalizedLine)) {
      return { amount: 0, rawAmount: "0円", kind: "physical", decision: "send", reason: "現物査定" };
    }
    if (amount === 0) {
      return { amount: 0, rawAmount: "0円", kind: "zero", decision: "no_send", reason: "0円査定" };
    }
    if (amount >= 1 && amount <= 99) {
      return { amount, rawAmount: `${amount}円`, kind: "low", decision: "confirm", reason: "低額査定" };
    }
    if (amount >= 100) {
      return { amount, rawAmount: `${amount}円`, kind: "priced", decision: "send", reason: "査定額あり" };
    }
  }

  const yenMatch = normalizedLine.match(/(?:￥|¥)?\s*([0-9][0-9,]{0,8})\s*円/);
  if (yenMatch) {
    const amount = parseMoney(yenMatch[1]);
    return { amount: amount === "" ? null : amount, rawAmount: `${yenMatch[1].replace(/,/g, "")}円`, kind: "priced", decision: amount > 0 ? "send" : "no_send", reason: amount > 0 ? "査定額あり" : "0円査定" };
  }

  const trailingNumberMatch = normalizedLine.match(/(?:^|[\s\t:：])(?:￥|¥)?\s*([0-9][0-9,]{0,6})\s*$/);
  if (trailingNumberMatch && !/JAN|型番|注文|申込|電話|郵便|〒/i.test(normalizedLine)) {
    const amount = parseMoney(trailingNumberMatch[1]);
    return { amount: amount === "" ? null : amount, rawAmount: amount === "" ? "" : `${amount}円`, kind: "priced", decision: amount > 0 ? "send" : "no_send", reason: amount > 0 ? "査定額あり" : "0円査定" };
  }

  return { amount: null, rawAmount: "金額不明", kind: "unknown", decision: "confirm", reason: "金額不明" };
}

function stripEstimateAmountFromLine(line) {
  return normalizeEstimateText(line)
    .replace(/^※不可品\s*/g, "")
    .replace(/^[\\￥¥]\s*[0-9][0-9,]*\s*/g, "")
    .replace(/(?:￥|¥)?\s*[0-9][0-9,]{0,8}\s*円/g, "")
    .replace(/(?:^|[\s\t:：])(?:￥|¥)?\s*[0-9][0-9,]{0,6}\s*$/g, "")
    .replace(/買取不可|お値段がつきません|値段がつきません|対象外|キャンセル|現物査定になります/g, "")
    .replace(/^[・\-\s\t\d.]+/, "")
    .replace(/^(商品名|品名|タイトル|名称)\s*[:：]\s*/, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function isIgnorableEstimateLine(line) {
  const normalizedLine = normalizeEstimateText(line);
  return !normalizedLine || /^(合計|小計|総合計|点数|件数|査定結果|見積|お見積|買取見積|駿河屋|送付|注意|-----|={3,})/.test(normalizedLine);
}

function getEstimateInitialDecision(amountInfo) {
  if (amountInfo.decision) {
    return amountInfo.decision;
  }
  if (amountInfo.kind === "priced" && Number(amountInfo.amount) > 0) {
    return "send";
  }
  if (amountInfo.kind === "priced" && Number(amountInfo.amount) === 0) {
    return "no_send";
  }
  if (amountInfo.kind === "unavailable") {
    return "no_send";
  }
  return "confirm";
}

function getSurugayaEstimateDecisionLabel(decision) {
  if (decision === "send") {
    return "送る";
  }
  if (decision === "no_send") {
    return "送らない";
  }
  return "要判断";
}

function findEstimateItemCandidates(name) {
  const normalizedName = normalizeImportComparable(name);
  if (!normalizedName) {
    return [];
  }

  return items
    .map((item) => {
      const title = getListingTitle(item);
      const normalizedTitle = normalizeImportComparable(title);
      if (!normalizedTitle) {
        return null;
      }
      let score = 0;
      if (normalizedTitle === normalizedName) {
        score = 100;
      } else if (normalizedTitle.includes(normalizedName) || normalizedName.includes(normalizedTitle)) {
        score = 78;
      } else {
        const tokens = normalizedName.split(/\s+/).filter((token) => token.length >= 2);
        const matched = tokens.filter((token) => normalizedTitle.includes(token)).length;
        score = tokens.length ? Math.round((matched / tokens.length) * 65) : 0;
      }
      return score >= 35 ? { id: item.id, title, storageLocation: item.storageLocation || "", score } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function createSurugayaEstimateRow({ name, amountInfo, rawLine, rowNumber }) {
  const title = String(name || "").trim() || `要確認 ${String(rowNumber).padStart(3, "0")}`;
  return {
    id: `estimate-${Date.now()}-${rowNumber}-${Math.random().toString(36).slice(2, 7)}`,
    no: rowNumber,
    rowNumber,
    destination: "駿河屋",
    name: title,
    amount: amountInfo.amount,
    rawAmount: amountInfo.rawAmount,
    amountKind: amountInfo.kind,
    decision: getEstimateInitialDecision(amountInfo),
    reason: amountInfo.reason || (amountInfo.kind === "unknown" ? "金額不明" : ""),
    memo: amountInfo.kind === "unknown" ? "金額要確認" : "",
    rawLine: rawLine || "",
    candidates: findEstimateItemCandidates(title),
  };
}

function parseSurugayaEstimateText(text) {
  const lines = String(text || "").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const rows = [];
  let pendingName = "";

  lines.forEach((line) => {
    if (isIgnorableEstimateLine(line)) {
      return;
    }

    const amountInfo = parseSurugayaEstimateAmount(line);
    const titlePart = stripEstimateAmountFromLine(line);
    if (amountInfo.kind !== "unknown") {
      rows.push(createSurugayaEstimateRow({
        name: titlePart || pendingName,
        amountInfo,
        rawLine: line,
        rowNumber: rows.length + 1,
      }));
      pendingName = "";
      return;
    }

    if (pendingName) {
      rows.push(createSurugayaEstimateRow({
        name: pendingName,
        amountInfo: { amount: null, rawAmount: "金額不明", kind: "unknown" },
        rawLine: pendingName,
        rowNumber: rows.length + 1,
      }));
    }
    pendingName = titlePart || line;
  });

  if (pendingName) {
    rows.push(createSurugayaEstimateRow({
      name: pendingName,
      amountInfo: { amount: null, rawAmount: "金額不明", kind: "unknown" },
      rawLine: pendingName,
      rowNumber: rows.length + 1,
    }));
  }

  return rows;
}

function getSurugayaEstimateStats() {
  return surugayaEstimateRows.reduce((stats, row) => {
    if (row.decision === "send") {
      stats.sendCount += 1;
      stats.totalAmount += Number(row.amount) || 0;
    } else if (row.decision === "no_send") {
      stats.noSendCount += 1;
    } else {
      stats.confirmCount += 1;
    }
    if (row.reason === "買取不可") {
      stats.unavailableCount += 1;
    }
    if (row.reason === "現物査定") {
      stats.physicalCount += 1;
    }
    if (row.reason === "0円査定") {
      stats.zeroCount += 1;
    }
    return stats;
  }, { sendCount: 0, noSendCount: 0, confirmCount: 0, totalAmount: 0, unavailableCount: 0, physicalCount: 0, zeroCount: 0 });
}

function renderSurugayaEstimateStats() {
  if (!surugayaEstimateStats) {
    return;
  }
  const stats = getSurugayaEstimateStats();
  surugayaEstimateStats.innerHTML = `
    <span>送る：${stats.sendCount}点</span>
    <span>送らない：${stats.noSendCount}点</span>
    <span>要判断：${stats.confirmCount}点</span>
    <span>発送予定合計額：${formatMoney(stats.totalAmount)}</span>
    <span>買取不可：${stats.unavailableCount}点</span>
    <span>現物査定：${stats.physicalCount}点</span>
    <span>0円査定：${stats.zeroCount}点</span>
  `;
  if (surugayaEstimateSummary) {
    surugayaEstimateSummary.textContent = surugayaEstimateRows.length
      ? `${surugayaEstimateRows.length}件を解析済み / 送る ${stats.sendCount}点 ${formatMoney(stats.totalAmount)}`
      : "見積もりメールやテキストを貼り付けると、発送判断リストを作成できます";
  }
  [saveSurugayaEstimateButton, restoreSurugayaEstimateOrderButton, createSurugayaShippingListButton, createSurugayaNoSendListButton].forEach((button) => {
    if (button) {
      button.disabled = surugayaEstimateRows.length === 0;
    }
  });
}

function renderSurugayaEstimateRows() {
  if (!surugayaEstimateList) {
    return;
  }
  surugayaEstimateList.innerHTML = "";
  renderSurugayaEstimateStats();

  if (!surugayaEstimateRows.length) {
    const empty = document.createElement("div");
    empty.className = "import-empty-state";
    empty.textContent = "見積もり本文を貼り付けて解析してください";
    surugayaEstimateList.append(empty);
    return;
  }

  surugayaEstimateRows.forEach((row) => {
    const card = document.createElement("article");
    card.className = `surugaya-estimate-row is-${row.decision}`;
    card.dataset.estimateId = row.id;
    card.innerHTML = `
      <span class="surugaya-estimate-no"></span>
      <span class="surugaya-estimate-judgement"></span>
      <span class="surugaya-estimate-reason"></span>
      <span class="surugaya-estimate-amount"></span>
      <div class="surugaya-estimate-main">
        <strong></strong>
      </div>
      <div class="surugaya-estimate-decision">
        <button class="ghost-button" type="button" data-estimate-decision="send">送る</button>
        <button class="ghost-button" type="button" data-estimate-decision="no_send">送らない</button>
        <button class="ghost-button" type="button" data-estimate-decision="confirm">要判断</button>
      </div>
      <input class="surugaya-estimate-memo" type="text" placeholder="メモ" data-estimate-memo="${row.id}">
      <div class="surugaya-estimate-candidate"></div>
    `;
    card.querySelector(".surugaya-estimate-no").textContent = String(row.no || row.rowNumber || 0).padStart(3, "0");
    card.querySelector(".surugaya-estimate-judgement").textContent = getSurugayaEstimateDecisionLabel(row.decision);
    card.querySelector(".surugaya-estimate-reason").textContent = row.reason || "-";
    card.querySelector("strong").textContent = row.name;
    card.querySelector(".surugaya-estimate-amount").textContent = row.amountKind === "priced" && row.amount !== null
      ? formatMoney(row.amount)
      : row.rawAmount;
    card.querySelectorAll("[data-estimate-decision]").forEach((button) => {
      button.classList.toggle("active", button.dataset.estimateDecision === row.decision);
    });
    card.querySelector(".surugaya-estimate-memo").value = row.memo || "";
    card.querySelector(".surugaya-estimate-candidate").textContent = row.candidates.length
      ? `候補：${row.candidates.map((item) => item.storageLocation ? `${item.title}（${item.storageLocation}）` : item.title).join(" / ")}`
      : "候補：なし";
    surugayaEstimateList.append(card);
  });
}

function parseSurugayaEstimateInput() {
  surugayaEstimateRows = parseSurugayaEstimateText(surugayaEstimateTextInput?.value || "");
  if (surugayaShippingListOutput) {
    surugayaShippingListOutput.value = "";
  }
  renderSurugayaEstimateRows();
  if (surugayaEstimateRows.length) {
    showSuccessMessage(`${surugayaEstimateRows.length}件の見積もりを解析しました`);
  } else {
    showErrorMessage("解析できる見積もり行が見つかりませんでした");
  }
}

function getSurugayaEstimateRowsInMailOrder(sourceRows = surugayaEstimateRows) {
  return [...sourceRows].sort((a, b) => (Number(a.no || a.rowNumber) || 0) - (Number(b.no || b.rowNumber) || 0));
}

function createSurugayaShippingListText() {
  const orderedRows = getSurugayaEstimateRowsInMailOrder();
  const sendRows = orderedRows.filter((row) => row.decision === "send");
  const total = sendRows.reduce((sum, row) => sum + (Number(row.amount) || 0), 0);
  const formatRow = (row) => `${String(row.no || row.rowNumber || "").padStart(3, "0")} ${row.name}　${row.amountKind !== "unavailable" && row.amount !== null ? formatMoney(row.amount) : row.rawAmount}　理由：${row.reason || "-"}`;
  return [
    "【送る商品】",
    sendRows.length ? sendRows.map(formatRow).join("\n") : "なし",
    "",
    `合計：${sendRows.length}点 / ${formatMoney(total)}`,
  ].join("\n");
}

function createSurugayaNoSendListText() {
  const noSendRows = getSurugayaEstimateRowsInMailOrder().filter((row) => row.decision === "no_send");
  const formatRow = (row) => `${String(row.no || row.rowNumber || "").padStart(3, "0")} ${row.name}　理由：${row.reason || "-"}`;
  return [
    "【送らない商品】",
    noSendRows.length ? noSendRows.map(formatRow).join("\n") : "なし",
  ].join("\n");
}

function createSurugayaShippingList() {
  if (!surugayaEstimateRows.length) {
    showErrorMessage("先に見積もりを解析してください");
    return;
  }
  const text = createSurugayaShippingListText();
  if (surugayaShippingListOutput) {
    surugayaShippingListOutput.value = text;
    surugayaShippingListOutput.focus();
    surugayaShippingListOutput.select();
  }
  copyText(text, "発送リストを作成しました");
}

function createSurugayaNoSendList() {
  if (!surugayaEstimateRows.length) {
    showErrorMessage("先に見積もりを解析してください");
    return;
  }
  const text = createSurugayaNoSendListText();
  if (surugayaShippingListOutput) {
    surugayaShippingListOutput.value = text;
    surugayaShippingListOutput.focus();
    surugayaShippingListOutput.select();
  }
  copyText(text, "送らない商品リストを作成しました");
}

function restoreSurugayaEstimateMailOrder() {
  surugayaEstimateRows = getSurugayaEstimateRowsInMailOrder();
  renderSurugayaEstimateRows();
  showSuccessMessage("メール順に戻しました");
}

function saveCurrentSurugayaEstimate() {
  if (!surugayaEstimateRows.length) {
    showErrorMessage("保存する見積もり結果がありません");
    return;
  }
  const estimateDate = surugayaEstimateDateInput?.value || formatDateInputValue();
  const payload = {
    id: `surugaya-estimate-${Date.now()}`,
    estimateDate,
    destination: "駿河屋",
    savedAt: new Date().toISOString(),
    summary: getSurugayaEstimateStats(),
    rows: surugayaEstimateRows.map((row) => ({
      estimateDate,
      destination: "駿河屋",
      name: row.name,
      no: row.no || row.rowNumber,
      amount: row.amount,
      rawAmount: row.rawAmount,
      amountKind: row.amountKind,
      decision: row.decision,
      reason: row.reason || "",
      memo: row.memo || "",
      rawLine: row.rawLine || "",
      candidates: row.candidates || [],
    })),
  };
  savedSurugayaEstimates = [payload, ...savedSurugayaEstimates].slice(0, 50);
  saveSurugayaEstimates();
  showSuccessMessage(`見積もり結果${payload.rows.length}件を保存しました`);
}

function updateSurugayaEstimateRow(id, patch) {
  surugayaEstimateRows = surugayaEstimateRows.map((row) => row.id === id ? { ...row, ...patch } : row);
  renderSurugayaEstimateRows();
}

function downloadJsonFile(fileName, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function getSelectedBackupRestoreMode() {
  return document.querySelector('input[name="backupRestoreMode"]:checked')?.value || "merge";
}

function mergeBackupItemsByKey(currentItems, incomingItems) {
  const merged = [...currentItems];
  const existingKeys = new Set(currentItems.map(getRecoveredItemDedupKey));
  incomingItems.forEach((item) => {
    const normalized = normalizeItem(item);
    const key = getRecoveredItemDedupKey(normalized);
    if (existingKeys.has(key)) {
      return;
    }
    existingKeys.add(key);
    merged.push(normalized);
  });
  return merged;
}

function mergeBackupSortingItemsByKey(currentSortingItems, incomingSortingItems) {
  const merged = [...currentSortingItems];
  const existingKeys = new Set(currentSortingItems.flatMap(getRecoveredSortingDedupKeys));
  incomingSortingItems.forEach((item) => {
    const normalized = normalizeSortingItem(item);
    const keys = getRecoveredSortingDedupKeys(normalized);
    if (keys.some((key) => existingKeys.has(key))) {
      return;
    }
    keys.forEach((key) => existingKeys.add(key));
    merged.push(normalized);
  });
  return merged;
}

function normalizeBackupPayload(rawBackup) {
  const backupData = rawBackup?.data && typeof rawBackup.data === "object" ? rawBackup.data : rawBackup;
  const importedItems = Array.isArray(rawBackup) ? rawBackup : backupData?.items;
  if (!Array.isArray(importedItems)) {
    throw new Error("商品データが見つかりませんでした。");
  }

  return {
    items: importedItems,
    settings: backupData.settings,
    descriptionTemplates: backupData.descriptionTemplates || backupData.templates,
    sortingItems: backupData.sortingItems || backupData.destinationSortingItems || [],
    localImageRefs: backupData.localImageRefs || backupData.imageRefs || {},
    cloudHouseholdId: backupData.cloudHouseholdId || "",
  };
}

function applyLocalImageRefsFromBackup(localImageRefs, mode) {
  if (!localImageRefs || typeof localImageRefs !== "object") {
    return;
  }

  if (mode === "replace") {
    saveLocalImageRefs(localImageRefs);
    return;
  }

  saveLocalImageRefs({
    ...loadLocalImageRefs(),
    ...localImageRefs,
  });
}

function persistRestoredBackupData() {
  if (!saveItemsToLocalStorage()) {
    return false;
  }
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  localStorage.setItem(TEMPLATES_KEY, JSON.stringify(descriptionTemplates));
  localStorage.setItem(SORTING_STORAGE_KEY, JSON.stringify(serializeItemsForLocalStorage(sortingItems)));
  return true;
}

async function applyBackupPayload(rawBackup, mode = "merge") {
  const importedData = normalizeBackupPayload(rawBackup);
  await createStoredBackup("復元前", { toast: true });

  if (mode === "replace") {
    items = importedData.items.map(normalizeItem);
    sortingItems = Array.isArray(importedData.sortingItems) ? importedData.sortingItems.map(normalizeSortingItem) : [];
    settings = normalizeSettings(importedData.settings || settings);
    descriptionTemplates = normalizeTemplates(importedData.descriptionTemplates, descriptionTemplates);
  } else {
    items = mergeBackupItemsByKey(items, importedData.items);
    sortingItems = mergeBackupSortingItemsByKey(sortingItems, importedData.sortingItems || []);
    settings = normalizeSettings(importedData.settings || settings);
    descriptionTemplates = normalizeTemplates([
      ...descriptionTemplates,
      ...(Array.isArray(importedData.descriptionTemplates) ? importedData.descriptionTemplates : []),
    ], descriptionTemplates);
  }

  applyLocalImageRefsFromBackup(importedData.localImageRefs, mode);
  if (importedData.cloudHouseholdId && !cloudHouseholdId) {
    cloudHouseholdId = importedData.cloudHouseholdId;
    localStorage.setItem(CLOUD_SELECTED_HOUSEHOLD_KEY, cloudHouseholdId);
  }

  if (!persistRestoredBackupData()) {
    throw new Error("復元データを保存できませんでした。");
  }

  refreshCategoryOptions();
  refreshStorageLocationOptions();
  refreshShippingMethodOptions();
  refreshTemplateOptions();
  renderSettings();
  resetForm();
  resetSortingForm();
  render();
  renderSorting();
}

async function confirmAndApplyBackup(rawBackup, mode = getSelectedBackupRestoreMode()) {
  const summary = getBackupSummary(rawBackup);
  const isReplace = mode === "replace";
  const shouldRestore = await showAppDialog({
    title: isReplace ? "上書き復元の確認" : "追加統合復元の確認",
    message: `${summary.itemCount}件の商品、${summary.sortingItemCount}件の売却先仕分けを${isReplace ? "現在のデータへ上書き復元" : "現在のデータへ追加統合"}します。\n${isReplace ? "現在のデータが置き換わります。十分注意してください。" : "現在のデータは削除しません。"}\n続けますか？`,
    confirmText: isReplace ? "上書き復元する" : "追加統合する",
    danger: isReplace,
  });

  if (!shouldRestore) {
    return;
  }

  await applyBackupPayload(rawBackup, mode);
  showSuccessMessage(isReplace ? "バックアップで上書き復元しました" : "バックアップを追加統合しました");

  if (isCloudReady && supabaseClient && cloudUser) {
    const shouldSync = await showAppDialog({
      title: "クラウドへ保存しますか？",
      message: "復元後のデータをクラウドへ保存しますか？\n勝手にクラウド上書きはしません。",
      confirmText: "クラウドへ保存",
      cancelText: "あとで",
    });
    if (shouldSync) {
      await createStoredBackup("クラウド保存前", { toast: true });
      await syncItemsToSupabase();
      await syncAppStateToSupabase();
      showSuccessMessage("復元データをクラウドへ保存しました");
    }
  }
}

function renderBackupList() {
  if (!backupList) {
    return;
  }

  const backups = loadStoredBackups();
  backupList.replaceChildren();
  if (!backups.length) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = "保存済みバックアップはまだありません。";
    backupList.append(empty);
    return;
  }

  backups.forEach((entry) => {
    const backupSummary = getBackupSummary(entry.backup);
    const summary = {
      ...backupSummary,
      ...(entry.summary || {}),
      imageCount: Number.isFinite(Number(entry.summary?.imageCount)) ? Number(entry.summary.imageCount) : backupSummary.imageCount,
    };
    const memo = String(entry.memo || entry.backup?.memo || entry.backup?.metadata?.memo || "").trim();
    const row = document.createElement("div");
    row.className = "backup-list-row";
    row.innerHTML = `
      <div class="backup-list-main">
        <strong class="backup-list-date"></strong>
        <small class="backup-list-memo"></small>
        <small class="backup-list-kind"></small>
        <div class="backup-list-counts">
          <span data-backup-count="items"></span>
          <span data-backup-count="sorting"></span>
          <span data-backup-count="images"></span>
          <span data-backup-count="templates"></span>
        </div>
      </div>
      <div class="backup-list-actions">
        <button class="ghost-button" type="button" data-restore-backup-id="">復元</button>
        <button class="ghost-button" type="button" data-export-backup-id="">このバックアップを書き出し</button>
        <button class="ghost-button" type="button" data-edit-backup-memo-id="">メモ編集</button>
        <button class="danger-button" type="button" data-delete-backup-id="">削除</button>
      </div>
    `;
    row.querySelector(".backup-list-date").textContent = formatDateTime(entry.createdAt);
    row.querySelector(".backup-list-memo").textContent = `メモ：${memo || "未設定"}`;
    row.querySelector(".backup-list-kind").textContent = `種別：${getBackupKindLabel(entry)}`;
    row.querySelector('[data-backup-count="items"]').textContent = `📦 商品：${summary.itemCount}件`;
    row.querySelector('[data-backup-count="sorting"]').textContent = `📂 売却先仕分け：${summary.sortingItemCount}件`;
    row.querySelector('[data-backup-count="images"]').textContent = `🖼 画像：${summary.imageCount}件`;
    row.querySelector('[data-backup-count="templates"]').textContent = `📝 テンプレート：${summary.templateCount}件`;
    row.querySelector("[data-restore-backup-id]").dataset.restoreBackupId = entry.id;
    row.querySelector("[data-export-backup-id]").dataset.exportBackupId = entry.id;
    row.querySelector("[data-edit-backup-memo-id]").dataset.editBackupMemoId = entry.id;
    row.querySelector("[data-delete-backup-id]").dataset.deleteBackupId = entry.id;
    backupList.append(row);
  });
}

function formatDateInputValue(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDateTime(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "-";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  return `${year}/${month}/${day} ${hour}:${minute}`;
}

function normalizeText(value) {
  return value.trim();
}

function normalizeUrl(value) {
  return String(value || "").trim();
}

function getItemStatus(item) {
  if (item.status === "売却済" || item.status === "発送済") {
    return "売却済み";
  }

  return item.status || DEFAULT_STATUS;
}

function getListingTitle(item) {
  return item.listingTitle || item.name || "";
}

function createGooglePhotoTagText(item) {
  const imageRefs = normalizeImageRefs(item.imageRefs);
  return [
    imageRefs.googlePhotoId,
    getItemCode(item),
    getListingTitle(item) || "-",
    item.category || "-",
    item.storageLocation || "-",
    item.condition || "-",
  ].filter(Boolean).join("\n");
}

function getSelectPlaceholder(select) {
  if (select === categoryInput || select === sortingGenreInput) {
    return "カテゴリを選択";
  }

  if (select === conditionInput) {
    return "状態を選択";
  }

  if (select === shippingMethodInput) {
    return "配送方法を選択";
  }

  if (select === storageLocationInput) {
    return "保管場所を選択";
  }

  return "未選択";
}

function updateSelectPlaceholderState(select) {
  select.classList.toggle("placeholder-select", !select.value);
}

function updateFormSelectPlaceholderStates() {
  [categoryInput, conditionInput, storageLocationInput, shippingMethodInput, shippingSizeInput].forEach(updateSelectPlaceholderState);
}

function setSelectOptions(select, values, selectedValue = "") {
  const currentValue = selectedValue || select.value;
  select.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = getSelectPlaceholder(select);
  select.append(placeholder);

  values.forEach((value) => {
    const option = document.createElement("option");
    const label = typeof value === "string" ? value : value.label;
    const optionValue = typeof value === "string" ? value : value.value;
    option.value = optionValue;
    option.textContent = label;
    select.append(option);
  });

  const optionValues = values.map((value) => (typeof value === "string" ? value : value.value));
  if (currentValue && !optionValues.includes(currentValue)) {
    const legacyOption = document.createElement("option");
    legacyOption.value = currentValue;
    legacyOption.textContent = currentValue;
    select.append(legacyOption);
  }

  select.value = currentValue;
  updateSelectPlaceholderState(select);
}

function refreshCategoryOptions(selectedValue = "") {
  setSelectOptions(categoryInput, settings.categories, selectedValue);
  setSelectOptions(sortingGenreInput, settings.categories, sortingGenreInput.value || selectedValue);
}

function getStorageLocationOptions(selectedValue = "") {
  const values = [
    ...settings.storageLocations,
    ...items.map((item) => item.storageLocation),
    selectedValue,
  ];
  const seen = new Set();

  return values
    .map((value) => String(value || "").trim())
    .filter((value) => {
      if (!value || seen.has(value)) {
        return false;
      }

      seen.add(value);
      return true;
    });
}

function refreshStorageLocationOptions(selectedValue = "") {
  setSelectOptions(storageLocationInput, getStorageLocationOptions(selectedValue), selectedValue);
}

function refreshListStorageFilter() {
  if (!storageFilter) {
    return;
  }

  const selectedValue = storageFilter.value;
  storageFilter.innerHTML = '<option value="">保管場所</option>';
  getStorageLocationOptions(selectedValue).forEach((storageLocation) => {
    const option = document.createElement("option");
    option.value = storageLocation;
    option.textContent = storageLocation;
    storageFilter.append(option);
  });
  storageFilter.value = selectedValue;
}

function updateConditionQuickButtons() {
  conditionQuickButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.conditionValue === conditionInput.value);
  });
}

function refreshShippingMethodOptions(selectedValue = "") {
  settings.shippingMethods = normalizeShippingMethods(settings.shippingMethods);
  setSelectOptions(
    shippingMethodInput,
    settings.shippingMethods.map((method) => ({
      value: method.name,
      label: formatShippingMethodOption(method),
    })),
    selectedValue,
  );
}

function formatShippingMethodOption(method) {
  return MANUAL_SHIPPING_METHODS.includes(method.name) ? method.name : `${method.name}（${formatMoney(method.cost)}）`;
}

function refreshShippingSizeOptions(selectedValue = "") {
  const sizes = Object.keys(SHIPPING_SIZE_RATES[shippingMethodInput.value] || {});
  const currentValue = sizes.includes(selectedValue) ? selectedValue : "";
  shippingSizeInput.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "サイズを選択";
  shippingSizeInput.append(placeholder);

  sizes.forEach((size) => {
    const option = document.createElement("option");
    option.value = size;
    option.textContent = size;
    shippingSizeInput.append(option);
  });

  shippingSizeInput.value = currentValue;
  updateSelectPlaceholderState(shippingSizeInput);
}

function refreshTemplateOptions(selectedValue = "") {
  descriptionTemplateInput.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "テンプレート選択";
  descriptionTemplateInput.append(placeholder);

  descriptionTemplates.forEach((template) => {
    const option = document.createElement("option");
    option.value = template.id;
    option.textContent = template.name;
    descriptionTemplateInput.append(option);
  });

  descriptionTemplateInput.value = selectedValue;
}

async function applyDescriptionTemplate() {
  const template = descriptionTemplates.find((currentTemplate) => currentTemplate.id === descriptionTemplateInput.value);

  if (!template) {
    return;
  }

  const shouldReplace = !descriptionInput.value.trim() || await showAppDialog({
    title: "置き換え確認",
    message: "現在の説明文を置き換えますか？",
    confirmText: "置き換える",
  });

  if (shouldReplace) {
    descriptionInput.value = template.content;
  }

  descriptionTemplateInput.value = "";
  descriptionInput.focus();
}

function parseMoney(value) {
  if (value === "" || value === null || value === undefined) {
    return "";
  }

  const number = Number(value);
  return Number.isFinite(number) && number >= 0 ? Math.floor(number) : "";
}

function formatMoney(value) {
  if (value === "" || value === null || value === undefined || !Number.isFinite(Number(value))) {
    return "-";
  }

  return `${Number(value).toLocaleString("ja-JP")}円`;
}

function formatStatusDisplay(status) {
  const value = status || "未設定";
  return value === "要捜索" ? "🔍 要捜索" : `📤 ${value}`;
}

function parseDateValue(value) {
  if (!value) {
    return null;
  }

  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function calculateElapsedDays(listingDate) {
  const startDate = parseDateValue(listingDate);

  if (!startDate) {
    return "";
  }

  const today = parseDateValue(formatDateInputValue());
  const elapsed = Math.floor((today.getTime() - startDate.getTime()) / 86400000);
  return Math.max(0, elapsed);
}

function getLongInventoryLevel(elapsedDays) {
  if (elapsedDays === "" || elapsedDays < 30) {
    return null;
  }

  if (elapsedDays >= 90) {
    return {
      className: "long-inventory-high",
      label: "🔴 長期在庫",
    };
  }

  if (elapsedDays >= 60) {
    return {
      className: "long-inventory-middle",
      label: "🟠 長期在庫",
    };
  }

  return {
    className: "long-inventory-low",
    label: "🟡 長期在庫",
  };
}

function calculateFee(plannedPrice) {
  if (plannedPrice === "") {
    return "";
  }

  return Math.floor(plannedPrice * MERCARI_FEE_RATE);
}

function calculateProfit(item) {
  const plannedPrice = parseMoney(item.plannedPrice);

  if (plannedPrice === "") {
    return "";
  }

  const fee = calculateFee(plannedPrice);
  const shippingCost = parseMoney(item.shippingCost) || 0;
  const purchaseCost = parseMoney(item.purchaseCost) || 0;
  return plannedPrice - fee - shippingCost - purchaseCost;
}

function calculateMinimumPrice(item) {
  const purchaseCost = parseMoney(item.purchaseCost) || 0;
  const shippingCost = parseMoney(item.shippingCost) || 0;

  return Math.ceil((purchaseCost + shippingCost) / (1 - MERCARI_FEE_RATE));
}

function calculateActualProfit(item) {
  const actualSalePrice = parseMoney(item.actualSalePrice);

  if (actualSalePrice === "") {
    return "";
  }

  const purchaseCost = parseMoney(item.purchaseCost) || 0;
  const actualShippingCost = parseMoney(item.actualShippingCost) || 0;
  const actualFee = calculateActualFee(item) || 0;
  return actualSalePrice - purchaseCost - actualShippingCost - actualFee;
}

function calculateActualFee(item) {
  return calculateFee(parseMoney(item.actualSalePrice));
}

function calculateProfitRate(item) {
  const purchaseCost = parseMoney(item.purchaseCost);
  const actualProfit = calculateActualProfit(item);

  if (getItemStatus(item) !== "売却済み" || purchaseCost === "" || purchaseCost < MIN_PROFIT_RATE_COST || actualProfit === "") {
    return "";
  }

  return (actualProfit / purchaseCost) * 100;
}

function calculateProjectedProfitRate(item) {
  const purchaseCost = parseMoney(item.purchaseCost);
  const profit = calculateProfit(item);

  if (purchaseCost === "" || purchaseCost <= 0 || profit === "") {
    return "";
  }

  return (profit / purchaseCost) * 100;
}

function getProfitLevelClass(profit) {
  const value = parseMoney(profit);

  if (value === "" || value < 500) {
    return "profit-level-low";
  }

  if (value >= 3000) {
    return "profit-level-gold";
  }

  if (value >= 1500) {
    return "profit-level-blue";
  }

  return "profit-level-green";
}

function applyProfitLevel(element, profit) {
  element.classList.remove(
    "profit-positive",
    "profit-negative",
    "profit-level-low",
    "profit-level-green",
    "profit-level-blue",
    "profit-level-gold",
  );
  element.classList.add(getProfitLevelClass(profit));
}

function formatPercent(value) {
  if (value === "" || value === null || value === undefined || !Number.isFinite(Number(value))) {
    return "-";
  }

  return `${Math.round(Number(value)).toLocaleString("ja-JP")}%`;
}

function sortSoldItems(soldItems) {
  const sortedItems = [...soldItems];

  if (soldSortInput.value === "profitDesc") {
    return sortedItems.sort((first, second) => {
      const firstProfit = calculateActualProfit(first);
      const secondProfit = calculateActualProfit(second);
      return (secondProfit === "" ? -Infinity : secondProfit) - (firstProfit === "" ? -Infinity : firstProfit);
    });
  }

  return sortedItems.sort((first, second) => {
    const firstTime = parseDateValue(first.soldDate)?.getTime() || 0;
    const secondTime = parseDateValue(second.soldDate)?.getTime() || 0;
    return secondTime - firstTime;
  });
}

function updateMonthlySummary(soldItems) {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const monthlyItems = soldItems.filter((item) => {
    const soldDate = parseDateValue(item.soldDate);
    return soldDate && soldDate.getFullYear() === currentYear && soldDate.getMonth() === currentMonth;
  });
  const profitTotal = monthlyItems.reduce((total, item) => {
    const profit = calculateActualProfit(item);
    return total + (profit === "" ? 0 : profit);
  }, 0);

  monthlyProfit.textContent = formatMoney(profitTotal);
  monthlySoldCount.textContent = `${monthlyItems.length}件`;
}

function updateTotalSummary(soldItems) {
  const profitTotal = soldItems.reduce((total, item) => {
    const profit = calculateActualProfit(item);
    return total + (profit === "" ? 0 : profit);
  }, 0);

  totalProfit.textContent = formatMoney(profitTotal);
  totalSoldCount.textContent = `${soldItems.length}件`;
}

function getMonthlyProfitGroups(soldItems) {
  const groups = new Map();

  soldItems.forEach((item) => {
    const soldDate = parseDateValue(item.soldDate);

    if (!soldDate) {
      return;
    }

    const key = `${soldDate.getFullYear()}-${String(soldDate.getMonth() + 1).padStart(2, "0")}`;
    const currentGroup = groups.get(key) || {
      key,
      year: soldDate.getFullYear(),
      month: soldDate.getMonth() + 1,
      count: 0,
      profit: 0,
      items: [],
    };
    const profit = calculateActualProfit(item);
    currentGroup.count += 1;
    currentGroup.profit += profit === "" ? 0 : profit;
    currentGroup.items.push(item);
    groups.set(key, currentGroup);
  });

  return [...groups.entries()]
    .sort(([firstKey], [secondKey]) => secondKey.localeCompare(firstKey))
    .map(([, group]) => group);
}

function renderMonthlyProfitList(soldItems) {
  const groups = getMonthlyProfitGroups(soldItems);
  monthlyProfitList.innerHTML = "";
  setAnalysisListVisibility(monthlyProfitList, groups.length > 0);

  if (groups.length === 0) {
    return;
  }

  groups.forEach((group) => {
    const item = document.createElement("div");
    item.className = "monthly-profit-item";
    item.dataset.monthKey = group.key;
    item.setAttribute("role", "button");
    item.tabIndex = 0;
    item.innerHTML = `
      <strong>${group.year}年${group.month}月</strong>
      <span>売却件数：${group.count}件</span>
      <span>実利益：${formatMoney(group.profit)}</span>
      <span class="monthly-profit-toggle">${openMonthlyProfitKey === group.key ? "詳細を閉じる" : "詳細を見る"}</span>
    `;
    monthlyProfitList.append(item);

    if (openMonthlyProfitKey === group.key) {
      monthlyProfitList.append(createMonthlyProfitDetail(group.items));
    }
  });
}

function setAnalysisListVisibility(targetList, hasData, blockSelector = "") {
  const block = blockSelector ? targetList.closest(blockSelector) : null;

  if (block) {
    block.classList.toggle("hidden", !hasData);
    return;
  }

  targetList.classList.toggle("hidden", !hasData);

  let heading = targetList.previousElementSibling;

  while (heading && heading.classList.contains("ranking-note")) {
    heading.classList.toggle("hidden", !hasData);
    heading = heading.previousElementSibling;
  }

  if (heading && /^H[2-4]$/.test(heading.tagName)) {
    heading.classList.toggle("hidden", !hasData);
  }
}

function renderProfitRanking(soldItems) {
  const groups = getMonthlyProfitGroups(soldItems)
    .sort((first, second) => second.profit - first.profit);
  profitRankingList.innerHTML = "";
  setAnalysisListVisibility(profitRankingList, groups.length > 0);

  if (groups.length === 0) {
    return;
  }

  groups.forEach((group, index) => {
    const item = document.createElement("div");
    item.className = "profit-ranking-item";
    item.innerHTML = `
      <strong>${index + 1}位</strong>
      <span>${group.year}年${group.month}月</span>
      <span>${formatMoney(group.profit)}</span>
    `;
    profitRankingList.append(item);
  });
}

function getProfitAmountRanking(targetItems) {
  return targetItems
    .filter((item) => getItemStatus(item) === "売却済み")
    .map((item) => ({
      item,
      profit: calculateActualProfit(item),
    }))
    .filter((entry) => entry.profit !== "")
    .sort((first, second) => second.profit - first.profit);
}

function renderProfitAmountRanking(soldItems) {
  const rankingItems = getProfitAmountRanking(soldItems);
  profitAmountRankingList.innerHTML = "";
  setAnalysisListVisibility(profitAmountRankingList, rankingItems.length > 0);

  if (rankingItems.length === 0) {
    return;
  }

  rankingItems.forEach((entry, index) => {
    const item = document.createElement("div");
    item.className = "profit-ranking-item";
    item.innerHTML = `
      <strong>${index + 1}位</strong>
      <span></span>
      <span>利益 ${formatMoney(entry.profit)}</span>
    `;
    item.querySelector("span").textContent = getListingTitle(entry.item) || "-";
    profitAmountRankingList.append(item);
  });
}

function getProfitRateRanking(targetItems) {
  return targetItems
    .map((item) => ({
      item,
      rate: calculateProfitRate(item),
      profit: calculateActualProfit(item),
    }))
    .filter((entry) => entry.rate !== "" && entry.profit !== "" && entry.profit >= MIN_PROFIT_RATE_PROFIT)
    .sort((first, second) => second.rate - first.rate);
}

function renderProfitRateRanking(soldItems) {
  const rankingItems = getProfitRateRanking(soldItems);
  profitRateRankingList.innerHTML = "";
  setAnalysisListVisibility(profitRateRankingList, rankingItems.length > 0);

  if (rankingItems.length === 0) {
    return;
  }

  rankingItems.forEach((entry, index) => {
    const item = document.createElement("div");
    item.className = "profit-ranking-item";
    item.innerHTML = `
      <strong>${index + 1}位</strong>
      <span></span>
      <span>${Math.round(entry.rate).toLocaleString("ja-JP")}%</span>
    `;
    item.querySelector("span").textContent = getListingTitle(entry.item) || "-";
    profitRateRankingList.append(item);
  });
}

function getGroupedProfitRanking(soldItems, getGroupName) {
  const groups = new Map();

  soldItems.forEach((item) => {
    const groupName = getGroupName(item) || "未設定";
    const currentGroup = groups.get(groupName) || {
      name: groupName,
      count: 0,
      profit: 0,
    };
    const profit = calculateActualProfit(item);
    currentGroup.count += 1;
    currentGroup.profit += profit === "" ? 0 : profit;
    groups.set(groupName, currentGroup);
  });

  return [...groups.values()].sort((first, second) => second.profit - first.profit);
}

function renderGroupedProfitRanking(targetList, rankingItems, emptyMessage) {
  targetList.innerHTML = "";
  setAnalysisListVisibility(targetList, rankingItems.length > 0);

  if (rankingItems.length === 0) {
    return;
  }

  rankingItems.forEach((group, index) => {
    const item = document.createElement("div");
    item.className = "profit-ranking-item grouped-profit-ranking-item";
    item.innerHTML = `
      <strong>${index + 1}位</strong>
      <span></span>
      <span>利益 ${formatMoney(group.profit)}</span>
      <span>売却件数 ${group.count}件</span>
    `;
    item.querySelector("span").textContent = group.name;
    targetList.append(item);
  });
}

function renderCategoryProfitRanking(soldItems) {
  renderGroupedProfitRanking(
    categoryProfitRankingList,
    getGroupedProfitRanking(soldItems, (item) => item.category || "未設定"),
    "カテゴリー別利益ランキングはまだありません。",
  );
}

function renderStorageProfitRanking(soldItems) {
  renderGroupedProfitRanking(
    storageProfitRankingList,
    getGroupedProfitRanking(soldItems, (item) => item.storageLocation || "未設定"),
    "保管場所別利益ランキングはまだありません。",
  );
}

function getCurrentMonthSoldItems(soldItems) {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  return soldItems.filter((item) => {
    const soldDate = parseDateValue(item.soldDate);
    return soldDate && soldDate.getFullYear() === currentYear && soldDate.getMonth() === currentMonth;
  });
}

function sumActualProfit(soldItems) {
  return soldItems.reduce((total, item) => {
    const profit = calculateActualProfit(item);
    return total + (profit === "" ? 0 : profit);
  }, 0);
}

function getLongInventoryCount(allItems) {
  return allItems.filter((item) => {
    if (getItemStatus(item) === "売却済み") {
      return false;
    }

    const elapsedDays = calculateElapsedDays(item.listingDate);
    return elapsedDays !== "" && elapsedDays >= 30;
  }).length;
}

function getUnsoldItems(allItems) {
  return allItems.filter((item) => getItemStatus(item) !== "売却済み");
}

function getInventoryValueRanking(targetItems) {
  const groups = new Map();

  targetItems.forEach((item) => {
    const storageLocation = item.storageLocation || "未設定";
    const currentGroup = groups.get(storageLocation) || {
      name: storageLocation,
      count: 0,
      plannedPriceTotal: 0,
      minimumPriceTotal: 0,
      purchaseCostTotal: 0,
      projectedProfitTotal: 0,
    };
    const plannedPrice = parseMoney(item.plannedPrice);
    const purchaseCost = parseMoney(item.purchaseCost);
    const projectedProfit = calculateProfit(item);

    currentGroup.count += 1;
    currentGroup.plannedPriceTotal += plannedPrice === "" ? 0 : plannedPrice;
    currentGroup.minimumPriceTotal += calculateMinimumPrice(item);
    currentGroup.purchaseCostTotal += purchaseCost === "" ? 0 : purchaseCost;
    currentGroup.projectedProfitTotal += projectedProfit === "" ? 0 : projectedProfit;
    groups.set(storageLocation, currentGroup);
  });

  return [...groups.values()].sort((first, second) => second.projectedProfitTotal - first.projectedProfitTotal);
}

function formatInventoryTop(group) {
  return group ? `${group.name} / ${formatMoney(group.projectedProfitTotal)}` : "-";
}

function createAnalysisEmptyState(message, description = "商品登録をすると、ここに分析結果が表示されます。") {
  const empty = document.createElement("div");
  const icon = document.createElement("span");
  const text = document.createElement("div");
  const title = document.createElement("strong");
  const note = document.createElement("small");
  const button = document.createElement("button");

  empty.className = "analysis-empty-state";
  icon.className = "analysis-empty-icon";
  icon.textContent = "📦";
  title.textContent = message;
  note.textContent = description;
  button.className = "ghost-button analysis-empty-action";
  button.type = "button";
  button.textContent = "商品登録はこちら";
  button.addEventListener("click", () => {
    setActiveNavigation("form");
    document.querySelector("#formTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  text.append(title, note);
  empty.append(icon, text, button);
  return empty;
}

function renderAnalysisEmptyState(targetList, message, description) {
  targetList.innerHTML = "";
  targetList.append(createAnalysisEmptyState(message, description));
}

function renderExcavationRanking(storageRanking) {
  excavationRankingList.innerHTML = "";
  setAnalysisListVisibility(excavationRankingList, true, ".excavation-panel");

  if (storageRanking.length === 0) {
    renderAnalysisEmptyState(
      excavationRankingList,
      "利益実績はまだありません",
      "売却済み商品が増えると、利益が出やすい保管場所を確認できます。",
    );
    return;
  }

  storageRanking.forEach((group, index) => {
    const item = document.createElement("div");
    const rank = document.createElement("strong");
    const name = document.createElement("span");
    const profit = document.createElement("span");
    const count = document.createElement("span");

    item.className = "excavation-ranking-item";
    rank.textContent = `${index + 1}位`;
    name.textContent = group.name;
    profit.textContent = `過去利益 ${formatMoney(group.profit)}`;
    count.textContent = `売却件数 ${group.count}件`;
    item.append(rank, name, profit, count);
    excavationRankingList.append(item);
  });
}

function getExcavationExpectedRanking(storageRanking) {
  return storageRanking
    .filter((group) => group.count >= 3)
    .map((group) => ({
      ...group,
      expectedValue: group.profit / group.count,
    }))
    .sort((first, second) => second.expectedValue - first.expectedValue);
}

function renderExcavationExpectedRanking(storageRanking) {
  const expectedRanking = getExcavationExpectedRanking(storageRanking);
  excavationExpectedRankingList.innerHTML = "";
  setAnalysisListVisibility(excavationExpectedRankingList, true, ".excavation-panel");

  if (expectedRanking.length === 0) {
    renderAnalysisEmptyState(
      excavationExpectedRankingList,
      "期待値ランキングはまだありません",
      "同じ保管場所で売却実績が3件以上になると表示されます。",
    );
    return;
  }

  expectedRanking.forEach((group, index) => {
    const item = document.createElement("div");
    const rank = document.createElement("strong");
    const name = document.createElement("span");
    const expectedValue = document.createElement("span");
    const count = document.createElement("span");

    item.className = "excavation-ranking-item excavation-expected-ranking-item";
    rank.textContent = `${index + 1}位`;
    name.textContent = group.name;
    count.textContent = `${group.count}件`;
    expectedValue.textContent = `期待値 ${formatMoney(Math.round(group.expectedValue))}`;
    item.append(rank, name, count, expectedValue);
    excavationExpectedRankingList.append(item);
  });
}

function createRankMap(rankingItems) {
  return rankingItems.reduce((rankMap, group, index) => {
    rankMap.set(group.name, index + 1);
    return rankMap;
  }, new Map());
}

function getStorageReports(allItems, storageProfitRanking, expectedRanking) {
  const reports = new Map();
  const profitRankMap = createRankMap(storageProfitRanking);
  const expectedRankMap = createRankMap(expectedRanking);

  allItems.forEach((item) => {
    const storageName = item.storageLocation || "未設定";
    const currentReport = reports.get(storageName) || {
      name: storageName,
      totalCount: 0,
      soldCount: 0,
      unlistedCount: 0,
      listedCount: 0,
      searchCount: 0,
      inputIssueCount: 0,
      totalProfit: 0,
      maxProfit: 0,
      firstSoldDate: "",
      lastSoldDate: "",
      unlistedPlannedPriceTotal: 0,
      unlistedMinimumPriceTotal: 0,
      unlistedProjectedProfitTotal: 0,
    };
    const status = getItemStatus(item);

    currentReport.totalCount += 1;
    currentReport.inputIssueCount += getInputIssues(item).length > 0 ? 1 : 0;

    if (status === "売却済み") {
      const profit = calculateActualProfit(item);
      const soldDate = parseDateValue(item.soldDate);
      const normalizedProfit = profit === "" ? 0 : profit;

      currentReport.soldCount += 1;
      currentReport.totalProfit += normalizedProfit;
      currentReport.maxProfit = Math.max(currentReport.maxProfit, normalizedProfit);

      if (soldDate) {
        const timestamp = soldDate.getTime();
        const firstTimestamp = parseDateValue(currentReport.firstSoldDate)?.getTime();
        const lastTimestamp = parseDateValue(currentReport.lastSoldDate)?.getTime();

        if (!firstTimestamp || timestamp < firstTimestamp) {
          currentReport.firstSoldDate = item.soldDate;
        }

        if (!lastTimestamp || timestamp > lastTimestamp) {
          currentReport.lastSoldDate = item.soldDate;
        }
      }
    }

    if (status === "未出品") {
      const plannedPrice = parseMoney(item.plannedPrice);
      const projectedProfit = calculateProfit(item);

      currentReport.unlistedCount += 1;
      currentReport.unlistedPlannedPriceTotal += plannedPrice === "" ? 0 : plannedPrice;
      currentReport.unlistedMinimumPriceTotal += calculateMinimumPrice(item);
      currentReport.unlistedProjectedProfitTotal += projectedProfit === "" ? 0 : projectedProfit;
    }

    if (status === "出品中") {
      currentReport.listedCount += 1;
    }

    if (status === "要捜索") {
      currentReport.searchCount += 1;
    }

    reports.set(storageName, currentReport);
  });

  return [...reports.values()].map((report) => ({
    ...report,
    averageProfit: report.soldCount === 0 ? 0 : Math.round(report.totalProfit / report.soldCount),
    soldRate: report.totalCount === 0 ? 0 : report.soldCount / report.totalCount,
    profitRank: profitRankMap.get(report.name) || "",
    expectedRank: expectedRankMap.get(report.name) || "",
  }));
}

function sortStorageReports(reports) {
  const sortType = storageReportSortInput.value;
  const sortedReports = [...reports];

  const sorters = {
    averageProfit: (first, second) => second.averageProfit - first.averageProfit,
    totalProfit: (first, second) => second.totalProfit - first.totalProfit,
    soldRate: (first, second) => second.soldRate - first.soldRate,
    unlistedCount: (first, second) => second.unlistedCount - first.unlistedCount,
    projectedProfit: (first, second) => second.unlistedProjectedProfitTotal - first.unlistedProjectedProfitTotal,
  };

  return sortedReports.sort((first, second) => {
    const result = (sorters[sortType] || sorters.averageProfit)(first, second);
    return result || first.name.localeCompare(second.name, "ja");
  });
}

function getStoragePriorityLabel(report) {
  if (report.unlistedCount > 0 && report.unlistedProjectedProfitTotal >= 3000) {
    return "優先度 ★★★";
  }

  if (report.unlistedCount > 0 && report.unlistedProjectedProfitTotal > 0) {
    return "整理推奨";
  }

  if (report.searchCount > 0) {
    return "要捜索あり";
  }

  return "確認済み";
}

function renderStorageReports(allItems, storageProfitRanking, expectedRanking) {
  const reports = sortStorageReports(getStorageReports(allItems, storageProfitRanking, expectedRanking));
  storageReportList.innerHTML = "";

  if (reports.length === 0) {
    storageReportList.append(createAnalysisEmptyState(
      "保管場所カルテはまだありません",
      "保管場所を入れて商品登録すると、場所ごとの利益や入力不足を確認できます。",
    ));
    return;
  }

  reports.forEach((report) => {
    const card = document.createElement("details");
    const summary = document.createElement("summary");
    const detail = document.createElement("dl");

    card.className = "storage-report-card app-accordion";
    summary.innerHTML = `
      <h4></h4>
      <dl>
        <div><dt>商品数</dt><dd>${report.totalCount}件</dd></div>
        <div><dt>未出品</dt><dd>${report.unlistedCount}件</dd></div>
        <div><dt>見込み利益</dt><dd>${formatMoney(report.unlistedProjectedProfitTotal)}</dd></div>
        <div><dt>平均利益</dt><dd>${formatMoney(report.averageProfit)}</dd></div>
        <div><dt>最高利益</dt><dd>${formatMoney(report.maxProfit)}</dd></div>
        <div><dt>入力不足</dt><dd>${report.inputIssueCount}件</dd></div>
        <div><dt>評価</dt><dd>${getStoragePriorityLabel(report)}</dd></div>
      </dl>
      <span class="storage-report-arrow">›</span>
    `;
    detail.className = "storage-report-detail";
    detail.innerHTML = `
      <div><dt>商品数</dt><dd>${report.totalCount}件</dd></div>
      <div><dt>売却済</dt><dd>${report.soldCount}件</dd></div>
      <div><dt>出品中</dt><dd>${report.listedCount}件</dd></div>
      <div><dt>要捜索</dt><dd>${report.searchCount}件</dd></div>
      <div><dt>平均利益</dt><dd>${formatMoney(report.averageProfit)}</dd></div>
      <div><dt>最高利益</dt><dd>${formatMoney(report.maxProfit)}</dd></div>
      <div><dt>売却率</dt><dd>${Math.round(report.soldRate * 100)}%</dd></div>
      <div><dt>未出品見込み</dt><dd>${formatMoney(report.unlistedProjectedProfitTotal)}</dd></div>
      <div><dt>入力不足</dt><dd>${report.inputIssueCount}件</dd></div>
    `;
    summary.querySelector("h4").textContent = report.name;
    card.append(summary, detail);
    storageReportList.append(card);
  });
}

function renderInventoryRanking(targetList, rankingItems, options) {
  targetList.innerHTML = "";
  setAnalysisListVisibility(targetList, true, "section");

  if (rankingItems.length === 0) {
    renderAnalysisEmptyState(
      targetList,
      options.emptyMessage || "まだデータがありません",
      "商品を登録すると、在庫や利益候補をここで確認できます。",
    );
    return;
  }

  rankingItems.forEach((group, index) => {
    const item = document.createElement("div");
    const rank = document.createElement("strong");
    const name = document.createElement("span");
    const count = document.createElement("span");
    const projectedProfit = document.createElement("span");

    item.className = "buried-ranking-item";
    rank.textContent = `${index + 1}位`;
    name.textContent = group.name;
    count.textContent = `${group.count}件`;
    projectedProfit.textContent = `見込み利益 ${formatMoney(group.projectedProfitTotal)}`;
    item.append(rank, name, count, projectedProfit);
    targetList.append(item);
  });
}

function updateInventoryRankings(allItems) {
  const unsoldItems = getUnsoldItems(allItems);
  const unlistedItems = unsoldItems.filter((item) => getItemStatus(item) === "未出品");
  const buriedTreasureRanking = getInventoryValueRanking(unsoldItems);
  const inventoryValueRanking = getInventoryValueRanking(unsoldItems);
  const unlistedTreasureRanking = getInventoryValueRanking(unlistedItems);

  dashboardBuriedTreasureTop.textContent = formatInventoryTop(buriedTreasureRanking[0]);
  dashboardInventoryValueTop.textContent = formatInventoryTop(inventoryValueRanking[0]);
  dashboardUnlistedTreasureTop.textContent = formatInventoryTop(unlistedTreasureRanking[0]);
  unlistedTreasurePanel.classList.toggle("hidden", unlistedTreasureRanking.length === 0);
  buriedTreasurePanel.classList.toggle("hidden", buriedTreasureRanking.length === 0 && inventoryValueRanking.length === 0);

  renderInventoryRanking(buriedTreasureRankingList, buriedTreasureRanking, {
    countLabel: "未売却商品数",
    emptyMessage: "埋蔵金ランキングはまだありません。",
    showPlannedPrice: true,
    showMinimumPrice: true,
    showPurchaseCost: false,
  });
  renderInventoryRanking(inventoryValueRankingList, inventoryValueRanking, {
    countLabel: "商品数",
    emptyMessage: "在庫価値ランキングはまだありません。",
    showPlannedPrice: true,
    showMinimumPrice: true,
    showPurchaseCost: true,
  });
  renderInventoryRanking(unlistedTreasureRankingList, unlistedTreasureRanking, {
    countLabel: "未出品商品数",
    emptyMessage: "未出品埋蔵金ランキングはまだありません。",
    showPlannedPrice: true,
    showMinimumPrice: true,
    showPurchaseCost: false,
  });
}

function getInputIssueTargetItems(allItems) {
  return allItems.filter((item) => ["未出品", "出品中", "要捜索"].includes(getItemStatus(item)));
}

function getInputIssues(item) {
  const issues = [];
  const plannedPrice = parseMoney(item.plannedPrice);
  const minimumPrice = calculateMinimumPrice(item);

  if (!String(item.storageLocation || "").trim()) {
    issues.push("保管場所未設定");
  }

  if (plannedPrice === "") {
    issues.push("販売価格未設定");
  }

  if (minimumPrice <= 0) {
    issues.push("最低出品価格未設定");
  }

  if (!String(item.category || "").trim()) {
    issues.push("カテゴリ未設定");
  }

  if (!String(item.condition || "").trim()) {
    issues.push("状態未設定");
  }

  if (!String(item.description || "").trim()) {
    issues.push("説明文未登録");
  }

  return issues;
}

function createInputIssueTag(issue) {
  const labelMap = {
    "保管場所未設定": "保管場所",
    "販売価格未設定": "販売価格",
    "最低出品価格未設定": "最低価格",
    "カテゴリ未設定": "カテゴリ",
    "状態未設定": "状態",
    "説明文未登録": "説明文",
  };
  const tag = document.createElement("span");
  tag.className = "input-issue-tag";
  tag.textContent = labelMap[issue] || issue;
  tag.title = issue;
  return tag;
}

function renderIssueTags(target, issues) {
  target.replaceChildren(...issues.map(createInputIssueTag));
}

function getInputIssueEntries(allItems) {
  return getInputIssueTargetItems(allItems)
    .map((item) => ({
      item,
      issues: getInputIssues(item),
    }))
    .filter((entry) => entry.issues.length > 0)
    .sort((first, second) => {
      if (second.issues.length !== first.issues.length) {
        return second.issues.length - first.issues.length;
      }

      return compareText(getListingTitle(first.item), getListingTitle(second.item));
    });
}

function renderInputIssueList(issueItems) {
  inputIssueList.innerHTML = "";

  if (issueItems.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "入力不足の商品はありません。";
    inputIssueList.append(emptyMessage);
    return;
  }

  issueItems.forEach(({ item, issues }) => {
    const row = document.createElement("div");
    const title = document.createElement("strong");
    const status = document.createElement("span");
    const issueText = document.createElement("span");
    const arrow = document.createElement("b");

    row.className = "input-issue-item";
    row.dataset.id = item.id;
    row.role = "button";
    row.tabIndex = 0;
    title.textContent = getListingTitle(item) || "商品タイトル未入力";
    status.textContent = formatStatusDisplay(getItemStatus(item));
    issueText.className = "input-issue-tags";
    renderIssueTags(issueText, issues);
    arrow.className = "input-issue-arrow";
    arrow.textContent = "›";

    row.append(title, status, issueText, arrow);
    inputIssueList.append(row);
  });
}

function updateInputIssueDashboard(allItems) {
  const targetItems = getInputIssueTargetItems(allItems);
  const issueItems = getInputIssueEntries(allItems);

  missingStorageCount.textContent = `${targetItems.filter((item) => !String(item.storageLocation || "").trim()).length}件`;
  missingPriceCount.textContent = `${targetItems.filter((item) => parseMoney(item.plannedPrice) === "").length}件`;
  missingMinimumPriceCount.textContent = `${targetItems.filter((item) => calculateMinimumPrice(item) <= 0).length}件`;
  missingCategoryCount.textContent = `${targetItems.filter((item) => !String(item.category || "").trim()).length}件`;
  missingConditionCount.textContent = `${targetItems.filter((item) => !String(item.condition || "").trim()).length}件`;
  if (missingImageCount) {
    missingImageCount.textContent = "任意";
  }
  missingDescriptionCount.textContent = `${targetItems.filter((item) => !String(item.description || "").trim()).length}件`;
  renderInputIssueList(issueItems);
  analysisInputIssueCount.textContent = `${issueItems.length}件`;
  analysisInputIssueEditButton.disabled = issueItems.length === 0;

  if (issueItems.length === 0) {
    analysisInputIssueItem.textContent = "入力不足の商品はありません";
    analysisInputIssueText.textContent = "出品判断に必要な情報が揃っています";
    analysisInputIssueText.classList.remove("analysis-issue-tags");
    delete analysisInputIssueEditButton.dataset.id;
  } else {
    const firstIssue = issueItems[0];
    analysisInputIssueItem.textContent = getListingTitle(firstIssue.item) || "商品タイトル未入力";
    analysisInputIssueText.classList.add("analysis-issue-tags");
    renderIssueTags(analysisInputIssueText, firstIssue.issues);
    analysisInputIssueEditButton.dataset.id = firstIssue.item.id;
  }

  return issueItems.length;
}

function getSortingEstimatedValue(item) {
  const bestOffer = getBestSortingOffer(item);

  if (bestOffer) {
    return bestOffer.value;
  }

  const mercariPrice = parseMoney(item.mercariPrice);
  return mercariPrice === "" ? 0 : mercariPrice;
}

function getSortingLinkedProfit(item) {
  const sourceItem = item.sourceItemId
    ? items.find((currentItem) => currentItem.id === item.sourceItemId)
    : null;
  const sourceProfit = sourceItem ? calculateProfit(sourceItem) : "";

  if (sourceProfit !== "") {
    return sourceProfit;
  }

  return getSortingEstimatedValue(item);
}

function createTodayPriorityRow(rank, title, meta, value, actionLabel = "") {
  const row = document.createElement("div");
  const rankElement = document.createElement("strong");
  const body = document.createElement("div");
  const titleElement = document.createElement("span");
  const metaElement = document.createElement("small");
  const valueElement = document.createElement("b");

  row.className = "today-priority-item";
  rankElement.textContent = `${rank}位`;
  titleElement.textContent = title || "-";
  metaElement.textContent = meta || "-";
  valueElement.textContent = value;
  body.append(titleElement, metaElement);
  row.append(rankElement, body, valueElement);

  if (actionLabel) {
    const button = document.createElement("button");
    button.className = "text-button today-priority-action";
    button.type = "button";
    button.dataset.action = "open-sorting";
    button.textContent = actionLabel;
    row.append(button);
  }

  return row;
}

function renderSortingPriority() {
  const priorityItems = sortingItems
    .filter((item) => (item.shippingStatus || "未仕分け") === "未仕分け")
    .map((item) => ({
      item,
      value: getSortingEstimatedValue(item),
    }))
    .sort((first, second) => second.value - first.value)
    .slice(0, 8);

  sortingPriorityList.innerHTML = "";

  if (priorityItems.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "未仕分けの商品はありません。";
    sortingPriorityList.append(emptyMessage);
    return;
  }

  priorityItems.forEach(({ item, value }, index) => {
    sortingPriorityList.append(createTodayPriorityRow(
      index + 1,
      item.name || "商品名未入力",
      `推奨売却先 ${getSortingDestinationLabel(item.destination)} / ${item.storageLocation || "保管場所未設定"}`,
      `推定価値 ${formatMoney(value)}`,
      "仕分けする",
    ));
  });
}

function renderShippingProfitPriority() {
  const priorityItems = sortingItems
    .filter((item) => (item.shippingStatus || "") === "箱詰め済")
    .map((item) => ({
      item,
      value: getSortingLinkedProfit(item),
    }))
    .sort((first, second) => second.value - first.value)
    .slice(0, 8);

  shippingProfitPriorityList.innerHTML = "";

  if (priorityItems.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "発送待ちの商品はありません。";
    shippingProfitPriorityList.append(emptyMessage);
    return;
  }

  priorityItems.forEach(({ item, value }, index) => {
    shippingProfitPriorityList.append(createTodayPriorityRow(
      index + 1,
      item.name || "商品名未入力",
      `${getSortingDestinationLabel(item.destination)} / ${item.storageLocation || "保管場所未設定"}`,
      `利益 ${formatMoney(value)}`,
    ));
  });
}

function createTodayCommandCard({ type, count, title, detail, value, actionLabel, action, targetId }) {
  const card = document.createElement("article");
  const heading = document.createElement("div");
  const titleElement = document.createElement("strong");
  const countElement = document.createElement("span");
  const detailElement = document.createElement("p");
  const valueElement = document.createElement("b");
  const button = document.createElement("button");

  card.className = `today-command-card today-command-${type}`;
  heading.className = "today-command-card-heading";
  titleElement.textContent = title;
  countElement.textContent = `${count}件`;
  detailElement.textContent = detail;
  valueElement.textContent = value;
  button.className = "ghost-button";
  button.type = "button";
  button.dataset.action = action;
  if (targetId) {
    button.dataset.id = targetId;
  }
  button.textContent = actionLabel;
  heading.append(titleElement, countElement);
  card.append(heading, detailElement, valueElement, button);
  return card;
}

function summarizeInputIssues(issueEntries) {
  const counts = new Map();

  issueEntries.forEach(({ issues }) => {
    issues.forEach((issue) => {
      counts.set(issue, (counts.get(issue) || 0) + 1);
    });
  });

  return [...counts.entries()]
    .sort((first, second) => second[1] - first[1] || first[0].localeCompare(second[0], "ja"))
    .slice(0, 2)
    .map(([issue, count]) => `${issue}${count}件`)
    .join(" / ");
}

function renderTodayCommands(allItems) {
  const inputIssueEntries = getInputIssueEntries(allItems);
  const unsortedItems = sortingItems
    .filter((item) => (item.shippingStatus || "未仕分け") === "未仕分け")
    .map((item) => ({ item, value: getSortingLinkedProfit(item) }))
    .sort((first, second) => second.value - first.value);
  const shippingWaitItems = sortingItems
    .filter((item) => SHIPPING_WAITING_STATUSES.includes(item.shippingStatus || ""))
    .map((item) => ({ item, value: getSortingLinkedProfit(item) }))
    .sort((first, second) => second.value - first.value);
  const assessmentWaitItems = sortingItems
    .filter((item) => (item.shippingStatus || "") === "査定待ち")
    .map((item) => ({ item, value: getSortingLinkedProfit(item) }))
    .sort((first, second) => second.value - first.value);
  const cards = [];

  todayCommandList.innerHTML = "";

  if (unsortedItems.length > 0) {
    const top = unsortedItems[0];
    cards.push(createTodayCommandCard({
      type: "unsorted",
      count: unsortedItems.length,
      title: "未仕分け",
      detail: top.item.name || "商品名未入力",
      value: `推定利益 ${formatMoney(top.value)}`,
      actionLabel: "仕分けする",
      action: "open-sorting",
    }));
  }

  if (shippingWaitItems.length > 0) {
    const top = shippingWaitItems[0];
    cards.push(createTodayCommandCard({
      type: "shipping",
      count: shippingWaitItems.length,
      title: "発送待ち",
      detail: `${top.item.name || "商品名未入力"} / ${getSortingDestinationLabel(top.item.destination)}`,
      value: `推定利益 ${formatMoney(top.value)}`,
      actionLabel: "発送管理へ",
      action: "open-shipping",
    }));
  }

  if (assessmentWaitItems.length > 0) {
    const top = assessmentWaitItems[0];
    cards.push(createTodayCommandCard({
      type: "assessment",
      count: assessmentWaitItems.length,
      title: "査定待ち",
      detail: `${top.item.name || "商品名未入力"} / ${getSortingDestinationLabel(top.item.destination)}`,
      value: `推定利益 ${formatMoney(top.value)}`,
      actionLabel: "査定状況を見る",
      action: "open-sorting",
    }));
  }

  if (inputIssueEntries.length > 0) {
    cards.push(createTodayCommandCard({
      type: "input",
      count: inputIssueEntries.length,
      title: "入力不足",
      detail: summarizeInputIssues(inputIssueEntries) || "入力不足あり",
      value: inputIssueEntries[0]?.item ? getListingTitle(inputIssueEntries[0].item) || "商品タイトル未入力" : "",
      actionLabel: "不足項目を編集",
      action: "open-input-issues",
      targetId: inputIssueEntries[0]?.item?.id || "",
    }));
  }

  if (cards.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "today-command-empty";
    emptyMessage.textContent = "確認が必要な商品はありません";
    todayCommandList.append(emptyMessage);
    return;
  }

  cards.forEach((card) => todayCommandList.append(card));
}

function updateDashboardStateLabel(target, count) {
  const card = target.closest(".dashboard-card");
  const label = card?.querySelector(".work-state-label");

  if (!label) {
    return;
  }

  label.textContent = count > 0 ? "あり" : "なし";
  label.classList.toggle("work-state-alert", count > 0);
}

function updateTodayBuriedTreasure(allItems) {
  const unlistedItems = getUnsoldItems(allItems).filter((item) => getItemStatus(item) === "未出品");
  const ranking = getInventoryValueRanking(unlistedItems);
  const top = ranking[0] || null;

  todayBuriedButton.disabled = !top;

  if (!top) {
    delete todayBuriedButton.dataset.storage;
    todayBuriedSummary.textContent = "未出品の埋蔵金候補はありません";
    return;
  }

  todayBuriedSummary.textContent = `${top.name} / 見込み利益 ${formatMoney(top.projectedProfitTotal)} / 未出品 ${top.count}件`;
  todayBuriedButton.dataset.storage = top.name;
}

function updateDestinationProfitCandidate() {
  const groups = new Map();

  sortingItems.forEach((item) => {
    const destination = getSortingDestinationLabel(item.destination);

    if (destination === "未定" || ["発送済", "入金済", "完了"].includes(item.shippingStatus || "")) {
      return;
    }

    const current = groups.get(destination) || { name: destination, count: 0, value: 0 };
    current.count += 1;
    current.value += getSortingEstimatedValue(item);
    groups.set(destination, current);
  });

  const top = [...groups.values()].sort((first, second) => {
    return second.value - first.value || second.count - first.count || compareText(first.name, second.name);
  })[0] || null;

  destinationProfitButton.disabled = !top;

  if (!top) {
    destinationProfitSummary.textContent = "売却先が決まった利益候補はありません";
    delete destinationProfitButton.dataset.destination;
    return;
  }

  destinationProfitSummary.textContent = `${top.name} / ${top.count}件 / 見込み額 ${formatMoney(top.value)}`;
  destinationProfitButton.dataset.destination = top.name;
}

function updateDashboard(allItems, soldItems) {
  const monthlySoldItems = getCurrentMonthSoldItems(soldItems);
  const totalProfitValue = sumActualProfit(soldItems);
  const monthlyProfitValue = sumActualProfit(monthlySoldItems);
  const topProfitAmountEntry = getProfitAmountRanking(soldItems)[0] || null;
  const topProfitRateEntry = getProfitRateRanking(soldItems)[0] || null;
  const categoryTop = getGroupedProfitRanking(soldItems, (item) => item.category || "未設定")[0] || null;
  const storageRanking = getGroupedProfitRanking(soldItems, (item) => item.storageLocation || "未設定");
  const excavationExpectedRanking = getExcavationExpectedRanking(storageRanking);
  const storageTop = storageRanking[0] || null;
  const searchCount = allItems.filter((item) => getItemStatus(item) === "要捜索").length;
  const unlistedCount = allItems.filter((item) => getItemStatus(item) === "未出品").length;
  const listedCount = allItems.filter((item) => getItemStatus(item) === "出品中").length;
  const inputIssueCount = getInputIssueEntries(allItems).length;
  const unsortedCount = sortingItems.filter((item) => (item.shippingStatus || "未仕分け") === "未仕分け").length;
  const shippingWaitCount = sortingItems.filter((item) => (item.shippingStatus || "") === "箱詰め済").length;
  const assessmentWaitCount = sortingItems.filter((item) => (item.shippingStatus || "") === "査定待ち").length;
  const buriedValue = getInventoryValueRanking(getUnsoldItems(allItems))
    .reduce((total, group) => total + group.projectedProfitTotal, 0);
  const storageCount = new Set(
    allItems.map((item) => String(item.storageLocation || "").trim() || "未設定"),
  ).size;

  dashboardHeroTotalProfit.textContent = `${inputIssueCount}件`;
  dashboardHeroUnlistedCount.textContent = `${unsortedCount}件`;
  dashboardHeroShippingWaitCount.textContent = `${shippingWaitCount}件`;
  dashboardHeroBuriedValue.textContent = `${assessmentWaitCount}件`;
  mobileAssetItemCount.textContent = `${allItems.length}件`;
  analysisSummaryUnlistedCount.textContent = `${unlistedCount}件`;
  analysisSummaryListedCount.textContent = `${listedCount}件`;
  analysisSummaryInputIssueCount.textContent = `${inputIssueCount}件`;
  mobileAssetStorageCount.textContent = `${storageCount}か所`;
  mobileAssetProjectedProfit.textContent = formatMoney(buriedValue);
  mobileAssetTotalProfit.textContent = formatMoney(totalProfitValue);
  mobileAssetMonthlyProfit.textContent = formatMoney(monthlyProfitValue);
  mobileAssetSoldCount.textContent = `${soldItems.length}件`;
  mobileAssetMonthlySoldCount.textContent = `${monthlySoldItems.length}件`;
  updateDashboardStateLabel(dashboardHeroTotalProfit, inputIssueCount);
  updateDashboardStateLabel(dashboardHeroUnlistedCount, unsortedCount);
  updateDashboardStateLabel(dashboardHeroShippingWaitCount, shippingWaitCount);
  updateDashboardStateLabel(dashboardHeroBuriedValue, assessmentWaitCount);
  dashboardMonthlyProfit.textContent = formatMoney(monthlyProfitValue);
  dashboardTotalProfit.textContent = formatMoney(totalProfitValue);
  dashboardMonthlySoldCount.textContent = `${monthlySoldItems.length}件`;
  dashboardTotalSoldCount.textContent = `${soldItems.length}件`;
  dashboardTopProfitAmount.textContent = topProfitAmountEntry
    ? `${getListingTitle(topProfitAmountEntry.item) || "-"} / ${formatMoney(topProfitAmountEntry.profit)}`
    : "-";
  dashboardTopProfitRate.textContent = topProfitRateEntry
    ? `${getListingTitle(topProfitRateEntry.item) || "-"} / ${Math.round(topProfitRateEntry.rate).toLocaleString("ja-JP")}%`
    : "-";
  dashboardTopCategory.textContent = categoryTop ? `${categoryTop.name} / ${formatMoney(categoryTop.profit)}` : "-";
  dashboardTopStorage.textContent = storageTop ? `${storageTop.name} / ${formatMoney(storageTop.profit)}` : "-";
  dashboardLongInventoryCount.textContent = `${getLongInventoryCount(allItems)}件`;
  dashboardSearchCount.textContent = `${searchCount}件`;
  renderTodayCommands(allItems);
  updateTodayBuriedTreasure(allItems);
  updateDestinationProfitCandidate();
  updateInputIssueDashboard(allItems);
  renderSortingPriority();
  renderShippingProfitPriority();
  renderExcavationExpectedRanking(storageRanking);
  renderExcavationRanking(storageRanking);
  renderStorageReports(allItems, storageRanking, excavationExpectedRanking);
  updateInventoryRankings(allItems);
}

function createMonthlyProfitDetail(groupItems) {
  const detail = document.createElement("div");
  detail.className = "monthly-profit-detail";
  detail.innerHTML = `
    <div class="table-wrap monthly-profit-detail-table">
      <table>
        <thead>
          <tr>
            <th>商品タイトル</th>
            <th>カテゴリ</th>
            <th>売却日</th>
            <th>実売価格</th>
            <th>原価</th>
            <th>実送料</th>
            <th>実手数料</th>
            <th>実利益</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  `;
  const tableBody = detail.querySelector("tbody");
  [...groupItems]
    .sort((first, second) => {
      const firstTime = parseDateValue(first.soldDate)?.getTime() || 0;
      const secondTime = parseDateValue(second.soldDate)?.getTime() || 0;
      return secondTime - firstTime;
    })
    .forEach((item) => {
      const row = document.createElement("tr");
      const actualProfit = calculateActualProfit(item);
      [
        getListingTitle(item) || "-",
        item.category || "-",
        item.soldDate || "-",
        formatMoney(parseMoney(item.actualSalePrice)),
        formatMoney(parseMoney(item.purchaseCost)),
        formatMoney(parseMoney(item.actualShippingCost)),
        formatMoney(calculateActualFee(item)),
        formatMoney(actualProfit),
      ].forEach((value, index) => {
        const cell = document.createElement("td");
        cell.textContent = value;

        if (index === 7) {
          cell.classList.toggle("profit-positive", actualProfit !== "" && actualProfit >= 0);
          cell.classList.toggle("profit-negative", actualProfit !== "" && actualProfit < 0);
        }

        row.append(cell);
      });
      tableBody.append(row);
    });
  return detail;
}

async function copyText(text, successMessage) {
  const value = text.trim();

  if (!value) {
    showErrorMessage("コピーする内容がありません");
    return;
  }

  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(value);
    } else {
      copyTextWithTextarea(value);
    }

    showToast(successMessage || "コピーしました", "success");
  } catch {
    try {
      copyTextWithTextarea(value);
      showToast(successMessage || "コピーしました", "success");
    } catch {
      showErrorMessage("コピーできませんでした。ブラウザの設定を確認してください");
    }
  }
}

async function exportBackup() {
  const fileName = createBackupFileName();
  const backup = await createBackupPayload("手動", backupMemoInput?.value || "");
  downloadJsonFile(fileName, backup);
  showSuccessMessage("バックアップを書き出しました");
}

function escapeCsvValue(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function downloadCsvFile(fileName, headers, rows) {
  const csv = [headers, ...rows]
    .map((row) => row.map(escapeCsvValue).join(","))
    .join("\n");
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function getLinkedSortingItem(item) {
  return sortingItems.find((sortingItem) => sortingItem.sourceItemId === item.id) || null;
}

function getCsvTargetItems(target) {
  if (target === "inventory") {
    return items.filter((item) => getItemStatus(item) !== "売却済み");
  }

  if (target === "sold") {
    return items.filter((item) => getItemStatus(item) === "売却済み");
  }

  if (target === "surugaya") {
    return items.filter((item) => getSortingDestinationForItem(item) === "駿河屋");
  }

  if (target === "mercari") {
    return items.filter((item) => getSortingDestinationForItem(item) === "メルカリ");
  }

  if (target === "storage") {
    return [...items].sort((a, b) => (
      compareText(a.storageLocation || "未設定", b.storageLocation || "未設定")
      || compareText(getListingTitle(a), getListingTitle(b))
    ));
  }

  return [...items];
}

function getCsvTargetLabel(target) {
  const labels = {
    all: "全商品",
    inventory: "在庫のみ",
    sold: "売却済み",
    surugaya: "駿河屋予定",
    mercari: "メルカリ予定",
    storage: "保管場所別",
  };

  return labels[target] || "商品一覧";
}

function getItemCsvHeaders(target) {
  const baseHeaders = [
    "商品ID",
    "商品名",
    "カテゴリ",
    "状態",
    "出品状態",
    "保管場所",
    "販売価格",
    "見込み利益",
    "最低出品価格",
    "最終売却先",
    "最高額",
    "メモ",
    "更新日時",
  ];

  return target === "storage" ? ["保管場所グループ", ...baseHeaders] : baseHeaders;
}

function createItemCsvRow(item, target) {
  const linkedSortingItem = getLinkedSortingItem(item);
  const bestOffer = linkedSortingItem ? getBestSortingOffer(linkedSortingItem) : null;
  const row = [
    getItemCode(item),
    getListingTitle(item),
    item.category || "",
    item.condition || "",
    getItemStatus(item),
    item.storageLocation || "未設定",
    parseMoney(item.plannedPrice),
    calculateProfit(item),
    calculateMinimumPrice(item),
    getSortingDestinationForItem(item),
    bestOffer ? `${bestOffer.label} ${bestOffer.value}` : getHighestOfferForItem(item),
    item.memo || "",
    formatDateTime(item.updatedAt),
  ];

  return target === "storage" ? [item.storageLocation || "未設定", ...row] : row;
}

function exportSelectedItemCsv() {
  const selectedTargets = [...document.querySelectorAll('input[name="itemCsvTarget"]:checked')]
    .map((input) => input.value);

  if (selectedTargets.length === 0) {
    showToast("CSV出力対象を選択してください", "error");
    return;
  }

  let exportedCount = 0;

  selectedTargets.forEach((target) => {
    const targetItems = getCsvTargetItems(target);

    if (targetItems.length === 0) {
      return;
    }

    const label = getCsvTargetLabel(target);
    const headers = getItemCsvHeaders(target);
    const rows = targetItems.map((item) => createItemCsvRow(item, target));
    downloadCsvFile(`商品一覧_${label}_${formatDateInputValue()}.csv`, headers, rows);
    exportedCount += 1;
  });

  if (exportedCount === 0) {
    showToast("出力できる商品がありません", "error");
    return;
  }

  showToast(`✓ CSVファイルを${exportedCount}個書き出しました`, "success");
}

function readBackupFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      try {
        resolve(JSON.parse(reader.result));
      } catch {
        reject(new Error("JSONファイルを読み込めませんでした。"));
      }
    });

    reader.addEventListener("error", () => reject(new Error("ファイルを読み込めませんでした。")));
    reader.readAsText(file);
  });
}

async function importBackup(file) {
  if (!file) {
    return;
  }

  try {
    const backup = await readBackupFile(file);
    await confirmAndApplyBackup(backup, getSelectedBackupRestoreMode());
  } catch (error) {
    showErrorMessage(`バックアップを読み込めませんでした。${error.message}`);
  } finally {
    importFileInput.value = "";
  }
}

function copyTextWithTextarea(value) {
  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.append(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function openDescriptionModal(item) {
  currentDescriptionModalText = item.description || "";
  descriptionModalItemTitle.textContent = getListingTitle(item) || "商品タイトル未入力";
  descriptionModalContent.textContent = currentDescriptionModalText || "説明文未入力";
  copyDescriptionModalButton.disabled = !currentDescriptionModalText.trim();
  descriptionModal.classList.remove("hidden");
  lockPageScroll();
  closeDescriptionModalButton.focus();
}

function closeDescriptionModal() {
  descriptionModal.classList.add("hidden");
  currentDescriptionModalText = "";
  unlockPageScroll();
}

function createDetailSection(title, rows) {
  const section = document.createElement("section");
  const sectionClassMap = {
    "基本情報": "detail-section-basic",
    "金額情報": "detail-section-price",
    "商品情報": "detail-section-product",
    "売却情報": "detail-section-sold",
  };
  section.className = `detail-section ${sectionClassMap[title] || ""}`.trim();

  const heading = document.createElement("h3");
  heading.textContent = title;
  section.append(heading);

  const list = document.createElement("dl");
  rows.forEach(([label, value]) => {
    const row = document.createElement("div");
    if (["商品タイトル", "購入時期", "商品実寸", "商品説明文", "メモ", "売却メモ"].includes(label)) {
      row.classList.add("detail-row-wide");
    }
    if (label === "見込み利益" || label === "利益率") {
      row.classList.add("detail-profit-highlight");
    }
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = label;
    description.textContent = value || "-";
    row.append(term, description);
    list.append(row);
  });
  section.append(list);
  return section;
}

function createDetailCollapsibleSection(title, rows, emptyText) {
  const section = document.createElement("details");
  section.className = "detail-section detail-section-collapsible detail-section-product app-accordion";

  const summary = document.createElement("summary");
  summary.textContent = title;
  section.append(summary);

  const hasContent = rows.some(([, value]) => String(value || "").trim());
  if (!hasContent) {
    const empty = document.createElement("p");
    empty.className = "detail-empty-text";
    empty.textContent = emptyText;
    section.append(empty);
    return section;
  }

  const list = document.createElement("dl");
  rows.forEach(([label, value]) => {
    const row = document.createElement("div");
    row.classList.add("detail-row-wide");
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = label;
    description.textContent = value || "-";
    row.append(term, description);
    list.append(row);
  });
  section.append(list);
  return section;
}

function createDetailFutureSection() {
  const section = document.createElement("details");
  const summary = document.createElement("summary");
  const list = document.createElement("ul");

  section.className = "detail-section detail-section-collapsible detail-section-future app-accordion";
  summary.textContent = "将来機能";
  ["Googleフォト検索", "発送番号管理", "画像管理拡張"].forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    list.append(item);
  });
  section.append(summary, list);
  return section;
}

function createEditHistorySection(item) {
  const section = document.createElement("details");
  const summary = document.createElement("summary");
  const history = normalizeEditHistory(item.editHistory);

  section.className = "detail-section detail-section-collapsible detail-section-history app-accordion";
  summary.textContent = "編集履歴";
  section.append(summary);

  if (history.length === 0) {
    const empty = document.createElement("p");
    empty.className = "detail-empty-text";
    empty.textContent = "編集履歴はありません";
    section.append(empty);
    return section;
  }

  const list = document.createElement("ol");
  list.className = "detail-history-list";
  history.forEach((entry) => {
    const itemElement = document.createElement("li");
    const time = document.createElement("time");
    const changes = document.createElement("ul");

    time.dateTime = entry.updatedAt;
    time.textContent = formatDateTime(entry.updatedAt);
    entry.changes.forEach((change) => {
      const changeItem = document.createElement("li");
      changeItem.textContent = change;
      changes.append(changeItem);
    });
    itemElement.append(time, changes);
    list.append(itemElement);
  });
  section.append(list);
  return section;
}

function createDetailHero(item) {
  const hero = document.createElement("section");
  hero.className = "detail-hero";

  const title = document.createElement("h3");
  title.textContent = getListingTitle(item) || "商品タイトル未入力";
  hero.append(title);

  const itemCode = document.createElement("p");
  itemCode.className = "detail-item-code";
  itemCode.textContent = `商品ID：${getItemCode(item) || "-"}`;
  hero.append(itemCode);

  const tagList = document.createElement("div");
  tagList.className = "detail-tag-list";
  [formatStatusDisplay(getItemStatus(item)), item.category, item.condition].forEach((value) => {
    const tag = document.createElement("span");
    tag.textContent = value || "-";
    tagList.append(tag);
  });
  hero.append(tagList);

  return hero;
}

function createDetailSummary(item) {
  const summary = document.createElement("section");
  const profit = calculateProfit(item);
  const imageSummary = getDisplayImageSummary(item);
  const imageStatus = `📷${imageSummary.productCount} / 📚${imageSummary.referenceCount}`;
  summary.className = "detail-priority-summary";
  summary.innerHTML = `
    <div class="detail-summary-card detail-summary-profit">
      <span>💴 利益</span>
      <strong></strong>
    </div>
    <div class="detail-summary-card detail-summary-status">
      <span>📤 出品状態</span>
      <strong></strong>
    </div>
    <div class="detail-summary-card detail-summary-storage">
      <span>📦 保管場所</span>
      <strong></strong>
    </div>
    <div class="detail-summary-card detail-summary-image">
      <span>画像</span>
      <strong></strong>
    </div>
  `;

  const profitValue = summary.querySelector(".detail-summary-profit strong");
  profitValue.textContent = formatMoney(profit);
  applyProfitLevel(profitValue, profit);
  summary.querySelector(".detail-summary-status strong").textContent = formatStatusDisplay(getItemStatus(item));
  summary.querySelector(".detail-summary-storage strong").textContent = item.storageLocation || "-";
  summary.querySelector(".detail-summary-image strong").textContent = imageStatus;
  return summary;
}

function createReferenceImageSection(target, collection = "items") {
  const section = document.createElement("section");
  const header = document.createElement("div");
  const title = document.createElement("h4");
  const addButton = document.createElement("button");
  const referenceImages = getReferenceImages(target);

  section.className = "reference-image-section";
  header.className = "reference-image-header";
  title.textContent = `📚 参考画像（非公開） ${referenceImages.length}枚`;
  addButton.className = "ghost-button";
  addButton.type = "button";
  addButton.textContent = "📚 参考画像追加";
  addButton.addEventListener("click", () => requestReferenceImage(target.id, collection));
  header.append(title, addButton);
  section.append(header);

  if (!referenceImages.length) {
    const empty = document.createElement("p");
    empty.className = "reference-image-empty";
    empty.textContent = "参考画像なし";
    section.append(empty);
  } else {
    const groups = new Map();
    referenceImages.forEach((image) => {
      const category = image.category || "その他";
      const group = groups.get(category) || [];
      group.push(image);
      groups.set(category, group);
    });

    groups.forEach((images, category) => {
      const groupSection = document.createElement("details");
      const groupTitle = document.createElement("summary");
      const list = document.createElement("div");
      groupSection.className = "reference-image-category";
      groupSection.open = true;
      groupTitle.textContent = `■ ${category}（${images.length}）`;
      list.className = "reference-image-list";

      images.forEach((referenceImage) => {
        const card = document.createElement("article");
        const imageData = getReferenceImageData(referenceImage);
        card.className = "reference-image-card";

        if (imageData) {
          const image = document.createElement("img");
          image.src = imageData;
          image.alt = referenceImage.memo || referenceImage.category || "参考画像";
          card.append(image);
        } else {
          const placeholder = document.createElement("div");
          placeholder.className = "reference-image-placeholder";
          placeholder.textContent = "画像未読込";
          card.append(placeholder);
        }

        const meta = document.createElement("div");
        meta.className = "reference-image-meta";
        meta.innerHTML = `
          <strong>${referenceImage.memo || "確認用"}</strong>
          <small>${referenceImage.source || "surugaya"} / ${referenceImage.imageId}</small>
        `;
        card.append(meta);
        list.append(card);
      });

      groupSection.append(groupTitle, list);
      section.append(groupSection);
    });
  }

  return section;
}

function createProductImageSection(item, collection = "items") {
  const section = document.createElement("section");
  const header = document.createElement("div");
  const title = document.createElement("h4");
  const actions = document.createElement("div");
  const addButton = document.createElement("button");
  const removeButton = document.createElement("button");
  const imageWrap = document.createElement("div");
  const localImage = getLocalItemImage(item);

  section.className = "product-image-section";
  header.className = "reference-image-header";
  title.textContent = `📷 商品画像（出品用） ${getProductImageCount(item)}枚`;
  actions.className = "image-section-actions";
  addButton.className = "ghost-button";
  addButton.type = "button";
  addButton.textContent = "📷 商品画像追加";
  addButton.addEventListener("click", () => requestLocalPhoto(item.id, collection));
  removeButton.className = "ghost-button";
  removeButton.type = "button";
  removeButton.textContent = "削除";
  removeButton.disabled = !hasMainImage(item);
  removeButton.addEventListener("click", () => removeLocalPhoto(item, collection));
  actions.append(addButton, removeButton);
  header.append(title, actions);

  imageWrap.className = "detail-image-wrap";
  if (localImage) {
    const image = document.createElement("img");
    image.src = localImage;
    image.alt = `${getListingTitle(item) || item.name || "商品"}の商品画像`;
    imageWrap.append(image);
  } else {
    imageWrap.classList.add("detail-image-empty");
    const placeholder = document.createElement("span");
    placeholder.textContent = "商品画像なし（任意）";
    imageWrap.append(placeholder);
  }

  section.append(header, imageWrap);
  return section;
}

function getDetailNavigationItems() {
  const filteredItems = getFilteredItems();
  const shouldIgnoreInventoryFilter = statusFilter.value === "売却済み";
  const activeItems = itemListTargetMode === "inventory" && !shouldIgnoreInventoryFilter
    ? filteredItems.filter((item) => getItemStatus(item) !== "売却済み")
    : filteredItems;
  const sortedItems = sortActiveItems(activeItems);

  if (currentDetailItem && !sortedItems.some((item) => item.id === currentDetailItem.id)) {
    return sortActiveItems(items);
  }

  return sortedItems;
}

function getAdjacentDetailItem(direction) {
  if (!currentDetailItem) {
    return null;
  }

  const detailItems = getDetailNavigationItems();
  const currentIndex = detailItems.findIndex((item) => item.id === currentDetailItem.id);

  if (currentIndex < 0) {
    return null;
  }

  return detailItems[currentIndex + direction] || null;
}

function updateDetailNavigationButtons() {
  if (!previousDetailItemButton || !nextDetailItemButton) {
    return;
  }

  previousDetailItemButton.disabled = !getAdjacentDetailItem(-1);
  nextDetailItemButton.disabled = !getAdjacentDetailItem(1);
}

function openAdjacentDetailItem(direction) {
  const item = getAdjacentDetailItem(direction);

  if (item) {
    openDetailModal(item);
  }
}

function openDetailModal(item) {
  currentDetailItem = item;
  detailModalContent.innerHTML = "";

  detailModalContent.append(createDetailHero(item));
  detailModalContent.append(createDetailSummary(item));
  detailModalContent.append(createProductImageSection(item));

  const imageRefs = normalizeImageRefs(item.imageRefs);
  detailModalContent.append(createDetailCollapsibleSection("画像管理", [
    ["管理方式", getImageProviderLabel(imageRefs.provider)],
    ["GoogleフォトID：共有検索用", imageRefs.googlePhotoId],
    ["ローカル画像ID：この端末だけの画像表示用", imageRefs.localImageId],
    ["クラウド画像ID：将来用", imageRefs.cloudImageId],
  ], "画像IDは未設定です"));
  detailModalContent.append(createReferenceImageSection(item, "items"));

  detailModalContent.append(createDetailSection("基本情報", [
    ["商品ID", getItemCode(item)],
    ["📤 出品ステータス", getItemStatus(item)],
    ["📦 保管場所", item.storageLocation],
    ["状態", item.condition],
    ["カテゴリ", item.category],
    ["購入時期", item.purchaseDate],
  ]));

  const projectedProfit = calculateProfit(item);
  const projectedProfitRate = calculateProjectedProfitRate(item);
  detailModalContent.append(createDetailSection("金額情報", [
    ["💴 見込み利益", formatMoney(projectedProfit)],
    ["利益率", formatPercent(projectedProfitRate)],
    ["販売価格", formatMoney(parseMoney(item.plannedPrice))],
    ["送料", formatMoney(parseMoney(item.shippingCost))],
    ["メルカリ手数料", formatMoney(calculateFee(parseMoney(item.plannedPrice)))],
    ["最低出品価格", formatMoney(calculateMinimumPrice(item))],
    ["原価", formatMoney(parseMoney(item.purchaseCost))],
  ]));

  detailModalContent.append(createDetailCollapsibleSection("商品情報", [
    ["商品実寸", item.measurements],
    ["商品説明文", item.description],
    ["メモ", item.memo],
  ], "商品情報未登録"));

  detailModalContent.append(createEditHistorySection(item));

  if (getItemStatus(item) === "売却済み") {
    detailModalContent.append(createDetailSection("売却情報", [
      ["実売価格", formatMoney(parseMoney(item.actualSalePrice))],
      ["実送料", formatMoney(parseMoney(item.actualShippingCost))],
      ["実手数料", formatMoney(calculateActualFee(item))],
      ["売却日", item.soldDate],
      ["実利益", formatMoney(calculateActualProfit(item))],
      ["売却メモ", item.soldMemo],
    ]));
  }

  detailModalContent.append(createDetailFutureSection());
  copyMercariUrlButton.disabled = !String(item.listingUrl || "").trim();
  copyDetailTitleButton.disabled = !String(getListingTitle(item) || "").trim();
  copyDetailDescriptionButton.disabled = !String(item.description || "").trim();
  copyDetailItemIdButton.disabled = !String(getItemCode(item) || "").trim();
  copyGooglePhotoIdButton.disabled = !String(imageRefs.googlePhotoId || "").trim();
  removeDetailLocalPhotoButton.disabled = !Boolean(getLocalItemImage(item));
  updateDetailNavigationButtons();

  detailModal.classList.remove("hidden");
  lockPageScroll();
  closeDetailModalButton.focus();
}

function closeDetailModal() {
  detailModal.classList.add("hidden");
  detailModal.querySelectorAll(".detail-more-action-menu[open]").forEach((menu) => {
    menu.removeAttribute("open");
  });
  currentDetailItem = null;
  updateDetailNavigationButtons();
  unlockPageScroll();
}

function closeDetailMoreActionMenu() {
  detailModal.querySelectorAll(".detail-more-action-menu[open]").forEach((menu) => {
    menu.removeAttribute("open");
  });
}

function openListingUrl(item) {
  if (!item.listingUrl) {
    return;
  }

  window.open(item.listingUrl, "_blank", "noopener");
}

function getNormalFormFields() {
  return [
    listingTitleInput.closest("label"),
    categoryInput.closest("label"),
    conditionInput.closest(".quick-condition-field"),
    listingDateInput.closest("label"),
    listingUrlInput.closest("label"),
    storageLocationInput.closest("label"),
    purchaseDateInput.closest("label"),
    measurementsInput.closest("label"),
    shippingMethodInput.closest("label"),
    shippingSizeField,
    document.querySelector(".price-fields"),
    document.querySelector("form > .profit-preview"),
    descriptionTemplateInput.closest("label"),
    descriptionInput.closest("label"),
    memoInput.closest("label"),
    document.querySelector(".image-field"),
  ].filter(Boolean);
}

function setSoldOnlyFormMode(isSold) {
  getNormalFormFields().forEach((field) => {
    field.classList.toggle("sold-mode-hidden", isSold);
  });
  listingTitleInput.required = !isSold;
  categoryInput.required = !isSold;
  conditionInput.required = !isSold;
  storageLocationInput.required = !isSold;

  if (!isSold) {
    applyShippingMethodCost();
  }
}

async function markItemAsSold(item) {
  const shouldMarkSold = await showAppDialog({
    title: "売却済みに変更",
    message: "この商品を売却済みにしますか？",
    confirmText: "変更する",
  });

  if (!shouldMarkSold) {
    return;
  }

  const updatedItem = {
    ...item,
    status: "売却済み",
    soldDate: item.soldDate || formatDateInputValue(),
    actualSalePrice: parseMoney(item.actualSalePrice) === "" ? parseMoney(item.plannedPrice) : parseMoney(item.actualSalePrice),
    actualShippingCost: parseMoney(item.actualShippingCost) === "" ? parseMoney(item.shippingCost) : parseMoney(item.actualShippingCost),
    updatedAt: new Date().toISOString(),
  };
  updatedItem.actualFee = calculateActualFee(updatedItem);
  items = items.map((currentItem) => (currentItem.id === item.id ? updatedItem : currentItem));

  if (saveItems()) {
    render();
    startEdit(updatedItem);
  }
}

async function relistItem(item) {
  const shouldRelist = await showAppDialog({
    title: "再出品確認",
    message: "この商品を再出品しますか？\n出品日を今日に更新し、ステータスを出品中にします。",
    confirmText: "再出品する",
  });

  if (!shouldRelist) {
    return;
  }

  const updatedItem = {
    ...item,
    status: "出品中",
    listingDate: formatDateInputValue(),
    updatedAt: new Date().toISOString(),
  };

  items = items.map((currentItem) => (currentItem.id === item.id ? updatedItem : currentItem));

  if (saveItems()) {
    render();
    startEdit(updatedItem);
  }
}

function updateItemDirectly(item, updates, successMessage, historyChanges = []) {
  const updatedAt = new Date().toISOString();
  const updatedItem = {
    ...item,
    ...updates,
    updatedAt,
  };
  const changes = historyChanges.length > 0 ? historyChanges : getItemChangeDescriptions(item, updatedItem);
  updatedItem.editHistory = appendEditHistory(item, changes, updatedAt);

  items = items.map((currentItem) => (currentItem.id === item.id ? updatedItem : currentItem));

  if (saveItems()) {
    render();
    showToast(successMessage, "success");
  }

  return updatedItem;
}

function changeItemStorageFromList(item) {
  const storageOptions = getStorageLocationOptions(item.storageLocation || "")
    .filter((value) => value !== "未設定")
    .join(" / ");
  const nextStorage = prompt(`保管場所を入力してください。\n候補: ${storageOptions || "設定ページで追加できます"}`, item.storageLocation || "");

  if (nextStorage === null) {
    return;
  }

  const storageLocation = normalizeText(nextStorage);

  if (!storageLocation) {
    showToast("保管場所を入力してください", "error");
    return;
  }

  updateItemDirectly(item, { storageLocation }, "✓ 保管場所を変更しました", [
    `保管場所: ${formatHistoryValue(item.storageLocation)} → ${storageLocation}`,
  ]);
  const linkedSortingItem = sortingItems.find((sortingItem) => sortingItem.sourceItemId === item.id);

  if (linkedSortingItem) {
    linkedSortingItem.storageLocation = storageLocation;
    linkedSortingItem.updatedAt = new Date().toISOString();
    saveSortingItems();
    renderSorting();
  }
}

function markItemAsListedFromList(item) {
  updateItemDirectly(item, {
    status: "出品中",
    listingDate: item.listingDate || formatDateInputValue(),
  }, "✓ 出品中に変更しました", [
    `出品状態: ${formatHistoryValue(getItemStatus(item))} → 出品中`,
  ]);
}

async function markItemAsSoldFromList(item) {
  const shouldMarkSold = await showAppDialog({
    title: "売却済みに変更",
    message: "この商品を売却済みにしますか？",
    confirmText: "変更する",
  });

  if (!shouldMarkSold) {
    return;
  }

  const updatedItem = {
    ...item,
    status: "売却済み",
    soldDate: item.soldDate || formatDateInputValue(),
    actualSalePrice: parseMoney(item.actualSalePrice) === "" ? parseMoney(item.plannedPrice) : parseMoney(item.actualSalePrice),
    actualShippingCost: parseMoney(item.actualShippingCost) === "" ? parseMoney(item.shippingCost) : parseMoney(item.actualShippingCost),
  };
  updatedItem.actualFee = calculateActualFee(updatedItem);
  updateItemDirectly(item, updatedItem, "✓ 売却済みに変更しました", [
    `出品状態: ${formatHistoryValue(getItemStatus(item))} → 売却済み`,
  ]);
}

function updateProfitPreview() {
  const plannedPrice = parseMoney(plannedPriceInput.value);
  const fee = calculateFee(plannedPrice);
  const profit = calculateProfit({
    plannedPrice,
    shippingCost: shippingCostInput.value,
    purchaseCost: purchaseCostInput.value,
  });
  const minimumPrice = calculateMinimumPrice({
    shippingCost: shippingCostInput.value,
    purchaseCost: purchaseCostInput.value,
  });

  feePreview.textContent = formatMoney(fee);
  profitPreview.textContent = formatMoney(profit);
  minimumPricePreview.textContent = formatMoney(minimumPrice);
  feePreviewClones.forEach((clone) => {
    clone.textContent = formatMoney(fee);
  });
  profitPreviewClones.forEach((clone) => {
    clone.textContent = formatMoney(profit);
    clone.classList.toggle("profit-positive", profit !== "" && profit >= 0);
    clone.classList.toggle("profit-negative", profit !== "" && profit < 0);
  });
  minimumPricePreviewClones.forEach((clone) => {
    clone.textContent = formatMoney(minimumPrice);
  });
  profitPreview.classList.toggle("profit-positive", profit !== "" && profit >= 0);
  profitPreview.classList.toggle("profit-negative", profit !== "" && profit < 0);
  updateActualProfitPreview();
  updateSubmitButtonState();
}

function updateActualProfitPreview() {
  const actualSalePrice = parseMoney(actualSalePriceInput.value);
  const actualFee = calculateFee(actualSalePrice);

  actualFeeInput.value = actualFee === "" ? "" : actualFee;

  const actualProfit = calculateActualProfit({
    actualSalePrice,
    actualShippingCost: actualShippingCostInput.value,
    actualFee,
    purchaseCost: purchaseCostInput.value,
  });

  actualProfitPreview.textContent = formatMoney(actualProfit);
  actualProfitPreview.classList.toggle("profit-positive", actualProfit !== "" && actualProfit >= 0);
  actualProfitPreview.classList.toggle("profit-negative", actualProfit !== "" && actualProfit < 0);
}

function isItemFormReadyToSubmit() {
  if (statusInput.value === "売却済み" && itemIdInput.value) {
    return true;
  }

  return Boolean(
    listingTitleInput.value.trim()
      && categoryInput.value
      && conditionInput.value
      && storageLocationInput.value,
  );
}

function updateSubmitButtonState() {
  const isReady = isItemFormReadyToSubmit();
  submitButton.classList.toggle("submit-ready", isReady);
  submitButton.classList.toggle("submit-incomplete", !isReady);
  submitButton.disabled = isImageProcessing || !isReady;
  submitButton.textContent = isImageProcessing ? "画像を準備中..." : (itemIdInput.value ? "変更を保存" : "登録する");
}

function updateFormItemCodeButton() {
  const currentItem = items.find((item) => item.id === itemIdInput.value);
  const itemCode = currentItem?.itemCode || pendingFormItemCode;
  const hasItemCode = Boolean(itemCode);

  formCopyItemCodeButton.disabled = !hasItemCode;
  formCopyItemCodeButton.textContent = hasItemCode ? `商品IDコピー（${itemCode}）` : "商品IDコピー（登録後）";
}

function updateSoldFieldsVisibility() {
  const isSold = statusInput.value === "売却済み";
  soldFields.classList.toggle("hidden", !isSold);
  setSoldOnlyFormMode(isSold);

  if (isSold) {
    if (soldDateInput.value === "") {
      soldDateInput.value = formatDateInputValue();
    }

    if (actualSalePriceInput.value === "" && plannedPriceInput.value !== "") {
      actualSalePriceInput.value = plannedPriceInput.value;
    }

    if (actualShippingCostInput.value === "" && shippingCostInput.value !== "") {
      actualShippingCostInput.value = shippingCostInput.value;
    }
  }

  updateActualProfitPreview();
  updateSubmitButtonState();
}

function setSubmitDisabled(disabled) {
  isImageProcessing = disabled;
  updateSubmitButtonState();
}

function updateImagePreview(imageData) {
  imagePreview.innerHTML = "";

  if (!imageData) {
    imagePreview.classList.add("hidden");
    removeImageButton.classList.add("hidden");
    return;
  }

  imagePreview.classList.remove("hidden");
  const image = document.createElement("img");
  image.src = imageData;
  image.alt = "選択中の商品画像";
  imagePreview.append(image);
  removeImageButton.classList.remove("hidden");
}

function updateSortingImagePreview(imageData) {
  if (!sortingImagePreview || !sortingRemoveImageButton) {
    return;
  }

  sortingImagePreview.innerHTML = "";

  if (!imageData) {
    sortingImagePreview.textContent = "＋画像追加";
    sortingRemoveImageButton.classList.add("hidden");
    return;
  }

  const image = document.createElement("img");
  image.src = imageData;
  image.alt = "選択中の仕分け画像";
  sortingImagePreview.append(image);
  sortingRemoveImageButton.classList.remove("hidden");
}

function readImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      const image = new Image();

      image.addEventListener("load", () => {
        const originalBytes = file.size || 0;
        const maxSize = 1000;
        const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);

        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.72);
        const compressedBytes = getDataUrlByteSize(compressedDataUrl);
        console.log(`保存前画像サイズ：${formatMegabytes(originalBytes)} (${originalBytes} bytes)`);
        console.log(`圧縮後画像サイズ：${formatMegabytes(compressedBytes)} (${compressedBytes} bytes)`);
        console.log(`画像保存先：IndexedDB`);
        resolve(compressedDataUrl);
      });

      image.addEventListener("error", () => reject(new Error("画像を読み込めませんでした")));
      image.src = reader.result;
    });

    reader.addEventListener("error", () => reject(new Error("画像を読み込めませんでした")));
    reader.readAsDataURL(file);
  });
}

function requestLocalPhoto(itemId, collection = "items") {
  const item = collection === "sorting"
    ? sortingItems.find((currentItem) => currentItem.id === itemId)
    : items.find((currentItem) => currentItem.id === itemId);

  if (!item) {
    showToast(collection === "sorting" ? "仕分けデータが見つかりません" : "元の商品データが見つかりません", "error");
    return;
  }

  pendingPhotoItemId = itemId;
  pendingPhotoCollection = collection;
  listPhotoInput.value = "";
  listPhotoInput.click();
}

async function removeLocalPhoto(item, collection = "items") {
  if (!item || !getLocalItemImage(item)) {
    showToast("削除する写真がありません", "error");
    return;
  }

  if (!await confirmDelete(`「${getListingTitle(item)}」のこの端末の写真を削除しますか？`)) {
    return;
  }

  try {
    await saveLocalItemImage(item, "", collection);
  } catch (error) {
    showToast(error.message || "写真を削除できませんでした", "error");
    return;
  }

  showToast("この端末の写真を削除しました", "success");
  if (collection === "sorting") {
    renderSorting();
    if (currentSortingDetailItem?.id === item.id && !sortingDetailModal.classList.contains("hidden")) {
      openSortingDetailModal(item);
    }
    return;
  }

  render();
  if (currentDetailItem?.id === item.id && !detailModal.classList.contains("hidden")) {
    openDetailModal(item);
  }
}

function getAppraisalFieldName(source) {
  if (!source) {
    return "";
  }

  return String(source.field || `appraisal_${source.id || createId()}`).trim();
}

function getAppraisalFieldLabel(source) {
  return String(source?.name || "").trim();
}

function getAppraisalSources() {
  return Array.isArray(settings?.appraisalSources) && settings.appraisalSources.length > 0
    ? settings.appraisalSources
    : DEFAULT_SETTINGS.appraisalSources;
}

function getSortingDestinationOptions() {
  const destinations = [SORTING_UNDECIDED_DESTINATION];

  getAppraisalSources().forEach((source) => {
    const name = getAppraisalFieldLabel(source);

    if (name && !destinations.includes(name)) {
      destinations.push(name);
    }
  });

  return destinations;
}

function isActiveSortingDestination(value) {
  return getSortingDestinationOptions().includes(value || SORTING_UNDECIDED_DESTINATION);
}

function getSortingDestinationLabel(value) {
  const destination = String(value || SORTING_UNDECIDED_DESTINATION).trim() || SORTING_UNDECIDED_DESTINATION;
  return isActiveSortingDestination(destination) ? destination : SORTING_UNDECIDED_DESTINATION;
}

function refreshSortingDestinationOptions(selectedValue = sortingDestinationInput?.value || SORTING_UNDECIDED_DESTINATION) {
  if (!sortingDestinationInput) {
    return;
  }

  const destinations = getSortingDestinationOptions();

  sortingDestinationInput.innerHTML = "";
  destinations.forEach((destination) => {
    const option = document.createElement("option");
    option.value = destination;
    option.textContent = destination;
    sortingDestinationInput.append(option);
  });
  sortingDestinationInput.value = destinations.includes(selectedValue) ? selectedValue : SORTING_UNDECIDED_DESTINATION;
}

function createSortingAppraisalInput(source, value = "") {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const fieldName = getAppraisalFieldName(source);

  label.dataset.appraisalSourceId = source.id;
  label.append(document.createTextNode(getAppraisalFieldLabel(source)));

  input.type = "number";
  input.min = "0";
  input.step = "1";
  input.inputMode = "numeric";
  input.dataset.appraisalField = fieldName;
  input.setAttribute("aria-label", `${getAppraisalFieldLabel(source)}査定額`);
  input.value = value === "" || value === null || value === undefined ? "" : String(value);

  label.append(input);
  return label;
}

function renderSortingAppraisalFields(selectedItem = null) {
  if (!sortingPriceGrid) {
    return;
  }

  appraisalPriceInputMap = new Map();
  sortingPriceGrid.innerHTML = "";

  getAppraisalSources().forEach((source) => {
    const fieldName = getAppraisalFieldName(source);
    const inputValue = selectedItem ? selectedItem[fieldName] : "";
    const field = createSortingAppraisalInput(source, inputValue);
    const input = field.querySelector("input");

    appraisalPriceInputMap.set(fieldName, input);
    sortingPriceGrid.append(field);
  });
}

function getSortingAppraisalValuesFromInputs() {
  const values = {};

  getAppraisalSources().forEach((source) => {
    const fieldName = getAppraisalFieldName(source);
    const input = appraisalPriceInputMap.get(fieldName);
    values[fieldName] = input ? input.value : "";
  });

  return values;
}

function getSortingPriceEntries(item) {
  return getAppraisalSources().map((source) => ({
    label: getAppraisalFieldLabel(source),
    value: parseMoney(item[getAppraisalFieldName(source)]),
  }));
}

function getBestSortingOffer(item) {
  return getSortingPriceEntries(item)
    .filter((entry) => entry.value !== "")
    .sort((first, second) => second.value - first.value)[0] || null;
}

function getLinkedSortingItemsForItem(item) {
  return sortingItems.filter((sortingItem) => sortingItem.sourceItemId === item.id);
}

function getSortingSearchValues(item) {
  const priceEntries = getSortingPriceEntries(item);

  return [
    item.name,
    item.memo,
    item.genre,
    item.storageLocation,
    item.boxNumber,
    getSortingDestinationLabel(item.destination),
    item.status,
    item.shippingStatus,
    ...priceEntries.map((entry) => entry.label),
    ...priceEntries.map((entry) => entry.value === "" ? "" : String(entry.value)),
  ];
}

function getItemSearchValues(item) {
  const linkedSortingItems = getLinkedSortingItemsForItem(item);

  return [
    getListingTitle(item),
    item.name,
    item.memo,
    item.soldMemo,
    item.description,
    item.measurements,
    item.category,
    item.storageLocation,
    getItemCode(item),
    getItemStatus(item),
    item.shippingMethod,
    item.listingDate,
    item.listingUrl,
    item.priceLimitMemo,
    ...linkedSortingItems.flatMap(getSortingSearchValues),
  ];
}

function valuesMatchKeyword(values, keyword) {
  const normalizedKeyword = String(keyword || "").trim().toLowerCase();

  if (!normalizedKeyword) {
    return true;
  }

  return values
    .join(" ")
    .toLowerCase()
    .includes(normalizedKeyword);
}

function formatVisibleCountLabel({ visible, filtered, searched, total }) {
  const parts = [`表示中：${visible}件`];

  if (Number.isFinite(filtered) && filtered !== searched) {
    parts.push(`フィルター後：${filtered}件`);
  }

  if (Number.isFinite(searched) && searched !== total) {
    parts.push(`検索後：${searched}件`);
  }

  parts.push(`全${total}件`);
  return parts.join(" / ");
}

function updateInventoryResultCount({ visible, filtered, searched, total }) {
  if (!inventoryResultCount) {
    return;
  }

  inventoryResultCount.textContent = formatVisibleCountLabel({ visible, filtered, searched, total });
}

function updateSortingResultCount({ visible, filtered, searched, total }) {
  if (!sortingResultCount) {
    return;
  }

  const isPcSortingView = window.matchMedia("(min-width: 769px)").matches;
  if (isPcSortingView) {
    const hasSearch = hasSortingFreeTextSearch();
    sortingResultCount.textContent = hasSearch
      ? `検索結果 ${visible}件 / 全${total}件`
      : `${visible}件表示 / 全${total}件`;
    return;
  }

  sortingResultCount.textContent = formatVisibleCountLabel({ visible, filtered, searched, total });
}

function getSortingStorageQuickValueSet() {
  const groupLimit = Math.max(sortingItems.length, 16);
  return new Set(getStorageQuickGroups(sortingItems, groupLimit).map((group) => group.name));
}

function isSortingStorageQuickValue(value) {
  const normalizedValue = String(value || "").trim();
  return Boolean(normalizedValue) && getSortingStorageQuickValueSet().has(normalizedValue);
}

function hasSortingFreeTextSearch() {
  const itemKeyword = String(sortingItemSearchInput?.value || "").trim();
  const storageKeyword = String(sortingBoxSearchInput?.value || "").trim();
  return Boolean(itemKeyword || (storageKeyword && !isSortingStorageQuickValue(storageKeyword)));
}

function updateImportVisibleCount(visible, total) {
  if (!importVisibleCount) {
    return;
  }

  importVisibleCount.textContent = `表示中：${visible}件 / 絞り込み前：${total}件`;
}

function getSortingRecommendation(item) {
  const offers = getSortingPriceEntries(item)
    .filter((entry) => entry.value !== "")
    .sort((first, second) => second.value - first.value);
  const bestOffer = offers[0] || null;
  const secondOffer = offers[1] || null;

  if (!bestOffer) {
    return null;
  }

  return {
    ...bestOffer,
    difference: secondOffer ? bestOffer.value - secondOffer.value : "",
  };
}

function formatSortingDifference(difference) {
  if (difference === "") {
    return "差額：-";
  }

  return `差額：+${formatMoney(difference)}`;
}

function getShippingActionLabel(status) {
  const actionMap = {
    未仕分け: "仕分け待ち",
    仕分け済: "箱詰め待ち",
    箱詰め済: "発送待ち",
    発送済: "査定待ち確認",
    査定待ち: "入金待ち",
  };

  return actionMap[status] || "";
}

function getHighestOfferForItem(item) {
  const linkedSortingItem = sortingItems.find((sortingItem) => sortingItem.sourceItemId === item.id);
  const bestSortingOffer = linkedSortingItem ? getBestSortingOffer(linkedSortingItem) : null;

  if (bestSortingOffer) {
    return `${bestSortingOffer.label} ${formatMoney(bestSortingOffer.value)}`;
  }

  const plannedPrice = parseMoney(item.plannedPrice);
  return plannedPrice === "" ? "-" : formatMoney(plannedPrice);
}

function getSortingDestinationForItem(item) {
  const linkedSortingItem = sortingItems.find((sortingItem) => sortingItem.sourceItemId === item.id);
  return linkedSortingItem?.destination || "-";
}

function getSearchNeededLabel(item) {
  return getItemStatus(item) === "要捜索" ? "要捜索" : "-";
}

function updateListActionSummary(sourceItems) {
  if (!listUnlistedCount || !listSearchNeededCount || !listHighProfitCount) {
    return;
  }

  const inventoryItems = sourceItems.filter((item) => getItemStatus(item) !== "売却済み");
  const unlistedCount = inventoryItems.filter((item) => getItemStatus(item) === "未出品").length;
  const searchNeededCount = inventoryItems.filter((item) => getItemStatus(item) === "要捜索").length;
  const highProfitCount = inventoryItems.filter((item) => {
    const profit = calculateProfit(item);
    return profit !== "" && profit >= 1000;
  }).length;

  listUnlistedCount.textContent = `${unlistedCount}件`;
  listSearchNeededCount.textContent = `${searchNeededCount}件`;
  listHighProfitCount.textContent = `${highProfitCount}件`;
}

function refreshSortingFilters() {
  const selectedDestination = sortingDestinationFilter.value || uiState.sorting?.destination || "";
  const selectedStatus = sortingStatusFilter.value || uiState.sorting?.status || "";
  const selectedGenre = sortingGenreFilter.value || uiState.sorting?.genre || "";
  const destinations = getSortingDestinationOptions();
  const genres = [
    ...new Set([
      ...settings.categories,
      ...sortingItems.map((item) => item.genre).filter(Boolean),
    ]),
  ];

  sortingDestinationFilter.innerHTML = '<option value="">すべての売却先</option>';
  destinations.forEach((destination) => {
    const option = document.createElement("option");
    option.value = destination;
    option.textContent = destination;
    sortingDestinationFilter.append(option);
  });
  sortingDestinationFilter.value = destinations.includes(selectedDestination) ? selectedDestination : "";

  sortingStatusFilter.innerHTML = '<option value="">すべてのステータス</option>';
  SORTING_STATUSES.forEach((status) => {
    const option = document.createElement("option");
    option.value = status;
    option.textContent = status;
    sortingStatusFilter.append(option);
  });
  sortingStatusFilter.value = SORTING_STATUSES.includes(selectedStatus) ? selectedStatus : "";

  sortingGenreFilter.innerHTML = '<option value="">すべてのジャンル</option>';
  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    sortingGenreFilter.append(option);
  });
  sortingGenreFilter.value = genres.includes(selectedGenre) ? selectedGenre : "";
}

function getFilteredSortingItems() {
  return sortingItems.filter((item) => {
    const keyword = String(sortingItemSearchInput?.value || "").trim().toLowerCase();
    const boxKeyword = String(sortingBoxSearchInput?.value || "").trim().toLowerCase();
    const destinationLabel = getSortingDestinationLabel(item.destination);
    const matchesDestination = !sortingDestinationFilter.value || destinationLabel === sortingDestinationFilter.value;
    const matchesStatus = !sortingStatusFilter.value || item.status === sortingStatusFilter.value;
    const matchesGenre = !sortingGenreFilter.value || item.genre === sortingGenreFilter.value;
    const matchesBox = matchesStorageSearchKeyword(item, boxKeyword);
    const matchesKeyword = valuesMatchKeyword(getSortingSearchValues(item), keyword);
    const imageSummary = getSortingDisplayImageSummary(item);
    const matchesImage = !sortingImageOnly || imageSummary.productCount > 0 || imageSummary.referenceCount > 0;
    const matchesStorageUnset = !sortingStorageUnsetOnly || isStorageUnset(item);
    return matchesDestination && matchesStatus && matchesGenre && matchesBox && matchesKeyword && matchesImage && matchesStorageUnset;
  });
}

function sortSortingItems(sourceItems) {
  const order = sortingOrderInput?.value || "offerDesc";

  return [...sourceItems].sort((first, second) => {
    if (order === "storage") {
      return compareText(first.storageLocation || "未設定", second.storageLocation || "未設定")
        || compareText(first.name, second.name);
    }

    if (order === "destination") {
      return compareText(getSortingDestinationLabel(first.destination), getSortingDestinationLabel(second.destination))
        || compareText(first.storageLocation || "未設定", second.storageLocation || "未設定");
    }

    if (order === "newest") {
      return new Date(second.createdAt || second.updatedAt || 0) - new Date(first.createdAt || first.updatedAt || 0);
    }

    return getSortingEstimatedValue(second) - getSortingEstimatedValue(first)
      || compareText(first.name, second.name);
  });
}

function isSortingShippingCandidate(item) {
  return !["発送済", "査定待ち", "入金済", "完了"].includes(item.shippingStatus || "未仕分け");
}

function shortenShippingStatus(status) {
  const normalizedStatus = normalizeText(status) || "未仕分け";
  const labels = {
    発送準備済み: "準備済み",
    発送準備中: "準備中",
    仕分け済: "仕分け済",
    未仕分け: "未仕分け",
    発送待ち: "発送待ち",
    発送済: "発送済",
    査定待ち: "査定待ち",
    入金済: "入金済",
    完了: "完了",
  };

  return labels[normalizedStatus] || normalizedStatus;
}

function getSortingOfferLevelClass(bestOffer) {
  if (!bestOffer || parseMoney(bestOffer.value) === "") {
    return "offer-level-unset";
  }

  const value = parseMoney(bestOffer.value);

  if (value >= 3000) {
    return "offer-level-gold";
  }

  if (value >= 1000) {
    return "offer-level-green";
  }

  return "offer-level-orange";
}

function getEffectiveSortingDensityMode() {
  return sortingDensityMode === "standard" ? "standard" : "compact";
}

function updateSortingDensityControls() {
  const effectiveMode = getEffectiveSortingDensityMode();

  sortingWorkCardList?.classList.toggle("sorting-compact-list", effectiveMode === "compact");
  sortingWorkCardList?.classList.toggle("sorting-standard-list", effectiveMode !== "compact");
  sortingDensityButtons.forEach((button) => {
    const isActive = button.dataset.sortingDensity === sortingDensityMode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function createSortingWorkCard(item) {
  const card = document.createElement("article");
  const bestOffer = getBestSortingOffer(item);
  const checked = sortingShippingCheckedIds.has(item.id);
  const sourceItem = getSortingSourceItem(item);
  const imageItem = getSortingImageDisplayItem(item);

  card.className = "sorting-work-card";
  card.classList.toggle("shipping-mode-card", isSortingShippingMode);
  card.classList.toggle("is-picked", checked);
  card.dataset.id = item.id;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `${item.name || "商品"}の詳細を開く`);
  card.innerHTML = `
    <label class="sorting-pick-check ${isSortingShippingMode ? "" : "hidden"}">
      <input type="checkbox" data-action="toggle-shipping-pick" ${checked ? "checked" : ""}>
      <span aria-hidden="true"></span>
    </label>
    <div class="sorting-work-thumb"></div>
    <div class="sorting-work-card-body">
      <strong class="sorting-work-title"></strong>
      <span class="sorting-work-code"></span>
      <b class="sorting-work-offer" data-action="quick-edit-appraisal" title="査定額を編集"></b>
      <span class="sorting-work-storage" data-action="quick-edit-storage" title="保管場所を編集"></span>
      <span class="sorting-work-status-line">
        <span class="sorting-work-status" data-action="quick-edit-status" title="状態を編集"></span>
        <span class="sorting-work-shipping" data-action="quick-edit-shipping" title="発送状態を編集"></span>
      </span>
      <span class="sorting-work-memo-state"></span>
    </div>
    <div class="sorting-work-destination" data-action="quick-edit-destination" title="売却先を編集"></div>
    <div class="sorting-work-compact-line" aria-hidden="true">
      <span class="sorting-work-compact-storage"></span>
      <span class="sorting-work-compact-destination"></span>
      <span class="sorting-work-compact-status"></span>
      <span class="sorting-work-compact-shipping"></span>
      <span class="sorting-work-compact-main-image"></span>
      <span class="sorting-work-compact-reference-image"></span>
    </div>
    <div class="quick-edit-slot"></div>
    <details class="row-action-menu sorting-action-menu">
      <summary aria-label="操作メニュー">⋯</summary>
      <div class="actions sorting-row-actions sorting-action-panel">
        <button class="text-button" type="button" data-action="view-sorting-detail">詳細</button>
        <button class="text-button" type="button" data-action="edit-sorting">編集</button>
        <button class="text-button sorting-source-action hidden" type="button" data-action="copy-source-item-code">商品IDコピー</button>
        <button class="text-button" type="button" data-action="change-sorting-photo">📷 商品画像追加</button>
        <button class="text-button" type="button" data-action="add-sorting-reference-image">📚 参考画像追加</button>
        <button class="text-button" type="button" data-action="remove-sorting-photo">📷 商品画像削除</button>
        <button class="danger-button" type="button" data-action="delete-sorting">削除</button>
      </div>
    </details>
  `;
  const thumbnail = createListThumbnail(imageItem, { compact: true });
  thumbnail.classList.add("sorting-thumbnail-button");
  thumbnail.dataset.action = "change-sorting-photo";
  card.querySelector(".sorting-work-thumb").append(thumbnail);
  card.querySelector(".sorting-work-title").textContent = item.name || "商品名未設定";
  card.querySelector(".sorting-work-code").textContent = sourceItem?.itemCode || item.itemCode || item.id || "ID未設定";
  card.querySelector(".sorting-work-offer").textContent = bestOffer
    ? `💰${formatMoney(bestOffer.value)}`
    : "💰未入力";
  card.querySelector(".sorting-work-offer").classList.add(getSortingOfferLevelClass(bestOffer));
  card.querySelector(".sorting-work-offer").title = bestOffer
    ? `${bestOffer.label} ${formatMoney(bestOffer.value)} / クリックで編集`
    : "査定額を編集";
  card.querySelector(".sorting-work-storage").textContent = `📍${item.storageLocation || "未設定"}`;
  card.querySelector(".sorting-work-status").textContent = `⚪${item.status || "未確認"}`;
  card.querySelector(".sorting-work-shipping").textContent = `📦${shortenShippingStatus(item.shippingStatus || "未仕分け")}`;
  card.querySelector(".sorting-work-destination").textContent = `🏪 ${getSortingDestinationLabel(item.destination)}`;
  const compactImageSummary = getSortingDisplayImageSummary(item);
  card.querySelector(".sorting-work-compact-storage").textContent = `📍${item.storageLocation || "未設定"}`;
  card.querySelector(".sorting-work-compact-destination").textContent = `🏪${getSortingDestinationLabel(item.destination)}`;
  card.querySelector(".sorting-work-compact-status").textContent = `⚪${item.status || "未確認"}`;
  card.querySelector(".sorting-work-compact-shipping").textContent = `🚚${shortenShippingStatus(item.shippingStatus || "未仕分け")}`;
  card.querySelector(".sorting-work-compact-main-image").textContent = `📷${compactImageSummary.productCount}`;
  card.querySelector(".sorting-work-compact-reference-image").textContent = `📚${compactImageSummary.referenceCount}`;
  const hasSortingMemo = Boolean(String(item.memo || sourceItem?.memo || "").trim());
  card.querySelector(".sorting-work-memo-state").textContent = hasSortingMemo ? "📝あり" : "📝なし";
  card.querySelector(".sorting-work-memo-state").classList.toggle("muted-empty", !hasSortingMemo);
  appendImageStateBadges(card.querySelector(".sorting-work-card-body"), item, {
    summary: compactImageSummary,
  });
  card.querySelector(".quick-edit-slot").append(createQuickEditBar("sorting"));
  if (sourceItem) {
    card.dataset.sourceId = sourceItem.id;
    card.querySelectorAll(".sorting-source-action").forEach((button) => button.classList.remove("hidden"));
  }
  return card;
}

function renderSortingShippingSummary(sourceItems) {
  const candidates = sourceItems.filter(isSortingShippingCandidate);
  const total = candidates.reduce((sum, item) => sum + getSortingEstimatedValue(item), 0);
  const checkedCount = candidates.filter((item) => sortingShippingCheckedIds.has(item.id)).length;

  sortingShippingSummary.classList.toggle("hidden", !isSortingShippingMode);
  sortingShippingRecommendation.classList.toggle("hidden", !isSortingShippingMode);
  sortingShippingPlannedCount.textContent = `${candidates.length}件`;
  sortingShippingPlannedTotal.textContent = formatMoney(total);
  sortingShippingCheckedCount.textContent = `${checkedCount}/${candidates.length}件`;

  const groups = new Map();
  candidates.forEach((item) => {
    const destination = getSortingDestinationLabel(item.destination);
    const storageLocation = item.storageLocation || "未設定";
    const key = `${destination}__${storageLocation}`;
    const group = groups.get(key) || { destination, storageLocation, items: [], total: 0 };
    group.items.push(item);
    group.total += getSortingEstimatedValue(item);
    groups.set(key, group);
  });
  const recommended = [...groups.values()].sort((first, second) => {
    return second.items.length - first.items.length
      || second.total - first.total
      || compareText(first.destination, second.destination);
  })[0];

  if (!recommended) {
    sortingRecommendationTitle.textContent = "対象商品なし";
    sortingRecommendationMeta.textContent = "未発送の商品がありません";
    return;
  }

  sortingRecommendationTitle.textContent = `${recommended.destination} / ${recommended.storageLocation}`;
  sortingRecommendationMeta.textContent = `${recommended.items.length}商品 / 予定合計 ${formatMoney(recommended.total)}`;
}

function renderSortingSummary() {
  const groups = new Map();
  const destinations = getSortingDestinationOptions();

  sortingItems.forEach((item) => {
    const destination = getSortingDestinationLabel(item.destination);
    const current = groups.get(destination) || { count: 0, quantity: 0 };
    const quantity = parseMoney(item.quantity);

    current.count += 1;
    current.quantity += quantity === "" ? 1 : quantity;
    groups.set(destination, current);
  });

  sortingSummaryGrid.innerHTML = "";
  destinations.forEach((destination) => {
    const group = groups.get(destination) || { count: 0, quantity: 0 };
    const card = document.createElement("div");
    card.className = "sorting-summary-chip";
    card.innerHTML = `
      <span></span>
      <strong>${group.count}商品/${group.quantity}点</strong>
    `;
    card.querySelector("span").textContent = destination;
    sortingSummaryGrid.append(card);
  });
}

function renderShippingDashboard() {
  shippingDashboardGrid.innerHTML = "";
  const actionGroups = new Map();

  sortingItems.forEach((item) => {
    const actionLabel = getShippingActionLabel(item.shippingStatus);

    if (!actionLabel) {
      return;
    }

    const destination = getSortingDestinationLabel(item.destination);
    const key = `${destination}__${actionLabel}`;
    const current = actionGroups.get(key) || {
      destination,
      actionLabel,
      count: 0,
      storageLocations: new Set(),
    };
    current.count += 1;
    current.storageLocations.add(item.storageLocation || "未設定");
    actionGroups.set(key, current);
  });

  [...actionGroups.values()]
    .sort((first, second) => {
      if (second.count !== first.count) {
        return second.count - first.count;
      }
      return `${first.destination}${first.actionLabel}`.localeCompare(`${second.destination}${second.actionLabel}`, "ja");
    })
    .slice(0, 8)
    .forEach((group) => {
    const card = document.createElement("div");
    const title = document.createElement("strong");
      const meta = document.createElement("span");
      const location = document.createElement("small");

      card.className = "shipping-dashboard-card shipping-action-card";
      title.textContent = `${group.destination}${group.actionLabel}`;
      meta.textContent = `${group.count}件`;
      location.textContent = `場所：${[...group.storageLocations].slice(0, 2).join(" / ")}`;
      card.append(title, meta, location);
      shippingDashboardGrid.append(card);
    });

  if (shippingDashboardGrid.children.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "今すぐ動かす発送作業はありません。";
    shippingDashboardGrid.append(emptyMessage);
  }
}

function getShippingManagementFilterGroup(item) {
  const status = item.shippingStatus || "未仕分け";

  if (["発送済", "査定待ち", "入金済", "完了"].includes(status)) {
    return "completed";
  }

  if (["箱詰め済"].includes(status)) {
    return "waiting";
  }

  return "preparing";
}

function getShippingManagementStatusLabel(item) {
  const group = getShippingManagementFilterGroup(item);

  if (group === "completed") {
    return "発送済み";
  }

  if (group === "waiting") {
    return "発送待ち";
  }

  return "発送準備中";
}

function createShippingManagementCard(item) {
  const card = document.createElement("article");
  const destination = getSortingDestinationLabel(item.destination);

  card.className = "shipping-management-card";
  card.dataset.id = item.id;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `${item.name || "商品"}の詳細を開く`);
  card.innerHTML = `
    <div class="shipping-management-main">
      <strong class="shipping-management-title"></strong>
      <span class="shipping-management-storage"></span>
    </div>
    <div class="shipping-management-meta">
      <span class="shipping-management-destination"></span>
      <span class="shipping-management-status"></span>
    </div>
    <div class="shipping-management-sub">
      <span class="shipping-management-date"></span>
      <span class="shipping-management-tracking"></span>
    </div>
  `;

  card.querySelector(".shipping-management-title").textContent = item.name || "-";
  card.querySelector(".shipping-management-storage").textContent = `📦 ${item.storageLocation || "保管場所未設定"}`;
  card.querySelector(".shipping-management-destination").textContent = `発送先：${destination}`;
  card.querySelector(".shipping-management-status").textContent = getShippingManagementStatusLabel(item);
  card.querySelector(".shipping-management-date").textContent = `発送日：${item.shippingDate || "-"}`;
  card.querySelector(".shipping-management-tracking").textContent = `追跡番号：${item.trackingNumber || "-"}`;

  return card;
}

function renderShippingManagementList() {
  if (!shippingManagementList) {
    return;
  }

  const selectedGroup = shippingManagementStatusFilter?.value || "";
  const targetItems = sortingItems
    .filter((item) => !selectedGroup || getShippingManagementFilterGroup(item) === selectedGroup)
    .sort((first, second) => {
      const groupOrder = { waiting: 0, preparing: 1, completed: 2 };
      return (groupOrder[getShippingManagementFilterGroup(first)] ?? 9) - (groupOrder[getShippingManagementFilterGroup(second)] ?? 9)
        || compareText(getSortingDestinationLabel(first.destination), getSortingDestinationLabel(second.destination))
        || compareText(first.storageLocation, second.storageLocation)
        || compareText(first.name, second.name);
    });

  shippingManagementList.innerHTML = "";

  if (targetItems.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted shipping-management-empty";
    emptyMessage.textContent = "該当する発送商品はありません。";
    shippingManagementList.append(emptyMessage);
    return;
  }

  targetItems.forEach((item) => {
    shippingManagementList.append(createShippingManagementCard(item));
  });
}

function openShippingManagementItemDetail(sortingItem) {
  const linkedItem = sortingItem.sourceItemId
    ? items.find((item) => item.id === sortingItem.sourceItemId)
    : null;

  if (linkedItem) {
    openDetailModal(linkedItem);
    return;
  }

  openSortingDetailModal(sortingItem);
}

function renderShippingPriorityItems(container) {
  const groups = new Map();

  sortingItems
    .filter((item) => SHIPPING_WAITING_STATUSES.includes(item.shippingStatus))
    .forEach((item) => {
      const storageLocation = item.storageLocation || "未設定";
      const destination = getSortingDestinationLabel(item.destination);
      const key = `${storageLocation}__${destination}`;
      const current = groups.get(key) || { storageLocation, destination, count: 0 };
      current.count += 1;
      groups.set(key, current);
    });

  const rankingItems = [...groups.values()].sort((first, second) => second.count - first.count);
  container.innerHTML = "";

  if (rankingItems.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "発送待ちの商品はありません。";
    container.append(emptyMessage);
    return;
  }

  rankingItems.forEach((group, index) => {
    const item = document.createElement("div");
    item.className = "shipping-list-item";
    item.innerHTML = `
      <strong>${index + 1}位</strong>
      <span></span>
      <span>${group.count}件</span>
      <span></span>
    `;
    const spans = item.querySelectorAll("span");
    spans[0].textContent = group.storageLocation;
    spans[2].textContent = group.destination;
    container.append(item);
  });
}

function renderShippingPriorityRanking() {
  renderShippingPriorityItems(shippingPriorityList);
  renderShippingPriorityItems(analysisShippingPriorityList);
}

function createShippingItemRow(item) {
  const row = document.createElement("div");
  row.className = "shipping-list-item shipping-detail-item";
  row.innerHTML = `
    <strong></strong>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  `;
  const strong = row.querySelector("strong");
  const spans = row.querySelectorAll("span");
  strong.textContent = item.name || "-";
  spans[0].textContent = getSortingDestinationLabel(item.destination);
  spans[1].textContent = item.shippingStatus || "未仕分け";
  spans[2].textContent = item.boxNumber || "箱番号未入力";
  spans[3].textContent = item.memo || "-";
  return row;
}

function renderShippingCompletedItems(container) {
  const completedItems = sortingItems.filter((item) => SHIPPING_COMPLETED_STATUSES.includes(item.shippingStatus));
  container.innerHTML = "";

  if (completedItems.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "発送済・査定待ち・入金済の商品はまだありません。";
    container.append(emptyMessage);
    return;
  }

  completedItems.forEach((item) => {
    container.append(createShippingItemRow(item));
  });
}

function renderShippingCompletedList() {
  renderShippingCompletedItems(shippingCompletedList);
  renderShippingCompletedItems(analysisShippingCompletedList);
}

function renderBoxSearchList() {
  const keyword = sortingBoxSearchInput.value.trim().toLowerCase();
  boxSearchList.innerHTML = "";

  renderStorageSearchLocationList(keyword);

  if (!keyword) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "保管場所を選ぶか検索すると、その場所にある商品を確認できます。";
    boxSearchList.append(emptyMessage);
    return;
  }

  const matchedSortingItems = sortingItems.filter((item) => matchesStorageSearchKeyword(item, keyword));
  const matchedProductItems = items.filter((item) => matchesStorageSearchKeyword(item, keyword));
  const matchedItems = [...matchedSortingItems, ...matchedProductItems];

  if (matchedItems.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "該当する保管場所の商品はありません。";
    boxSearchList.append(emptyMessage);
    return;
  }

  matchedSortingItems.forEach((item) => {
    boxSearchList.append(createShippingItemRow(item));
  });

  matchedProductItems.forEach((item) => {
    boxSearchList.append(createStorageSearchProductRow(item));
  });
}

function createStorageSearchProductRow(item) {
  const row = document.createElement("div");
  row.className = "shipping-list-item shipping-detail-item storage-search-product-item";
  row.innerHTML = `
    <strong></strong>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  `;
  const strong = row.querySelector("strong");
  const spans = row.querySelectorAll("span");
  strong.textContent = getListingTitle(item) || "-";
  spans[0].textContent = "商品一覧";
  spans[1].textContent = formatStatusDisplay(getItemStatus(item));
  spans[2].textContent = item.storageLocation || "保管場所未設定";
  spans[3].textContent = item.memo || "-";
  return row;
}

function getStorageSearchSummaries() {
  const summaries = new Map();
  const ensureSummary = (name) => {
    const normalized = String(name || "").trim() || "未設定";
    const current = summaries.get(normalized) || {
      name: normalized,
      itemCount: 0,
      sortingCount: 0,
    };
    summaries.set(normalized, current);
    return current;
  };

  getStorageLocationOptions().forEach((name) => ensureSummary(name));
  ensureSummary("未設定");

  items.forEach((item) => {
    ensureSummary(item.storageLocation).itemCount += 1;
  });

  sortingItems.forEach((item) => {
    ensureSummary(item.storageLocation || item.boxNumber).sortingCount += 1;
  });

  return [...summaries.values()].sort((first, second) => {
    const firstTotal = first.itemCount + first.sortingCount;
    const secondTotal = second.itemCount + second.sortingCount;
    return secondTotal - firstTotal || first.name.localeCompare(second.name, "ja");
  });
}

function renderStorageSearchLocationList(keyword = "") {
  if (!storageSearchLocationList) {
    return;
  }

  const normalizedKeyword = String(keyword || "").trim().toLowerCase();
  storageSearchLocationList.innerHTML = "";

  getStorageSearchSummaries()
    .filter((summary) => !normalizedKeyword || summary.name.toLowerCase().includes(normalizedKeyword))
    .forEach((summary) => {
      const button = document.createElement("button");
      const total = summary.itemCount + summary.sortingCount;
      button.type = "button";
      button.className = "storage-search-location-button";
      button.dataset.storageSearchValue = summary.name;
      button.innerHTML = `<strong>📦 ${summary.name}</strong><span>${total}件</span>`;
      storageSearchLocationList.append(button);
    });
}

function getPackingListItems() {
  const boxKeyword = sortingBoxSearchInput.value.trim().toLowerCase();

  return sortingItems.filter((item) => {
    const matchesStatus = PACKING_LIST_STATUSES.includes(item.shippingStatus);
    const matchesBox = matchesStorageSearchKeyword(item, boxKeyword);
    return matchesStatus && matchesBox;
  });
}

function getPackingListGroups(packingItems) {
  const destinationGroups = new Map();

  packingItems.forEach((item) => {
    const destination = getSortingDestinationLabel(item.destination);
    const boxNumber = item.boxNumber || "箱番号未入力";
    const destinationGroup = destinationGroups.get(destination) || {
      destination,
      itemCount: 0,
      boxes: new Map(),
    };
    const boxGroup = destinationGroup.boxes.get(boxNumber) || {
      boxNumber,
      items: [],
    };

    destinationGroup.itemCount += 1;
    boxGroup.items.push(item);
    destinationGroup.boxes.set(boxNumber, boxGroup);
    destinationGroups.set(destination, destinationGroup);
  });

  return [...destinationGroups.values()]
    .map((group) => ({
      ...group,
      boxes: [...group.boxes.values()].sort((first, second) => first.boxNumber.localeCompare(second.boxNumber, "ja")),
    }))
    .sort((first, second) => first.destination.localeCompare(second.destination, "ja"));
}

function renderPackingList() {
  const groups = getPackingListGroups(getPackingListItems());
  packingList.innerHTML = "";

  if (groups.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "箱詰めリスト対象の商品はありません。";
    packingList.append(emptyMessage);
    return;
  }

  groups.forEach((group) => {
    const destinationBlock = document.createElement("section");
    const title = document.createElement("h5");
    const summary = document.createElement("p");

    destinationBlock.className = "packing-destination";
    title.textContent = group.destination;
    summary.className = "packing-summary";
    summary.textContent = `商品数 ${group.itemCount}件 / 箱数 ${group.boxes.length}箱`;
    destinationBlock.append(title, summary);

    group.boxes.forEach((box) => {
      const boxBlock = document.createElement("div");
      const boxTitle = document.createElement("strong");
      const list = document.createElement("ul");
      const total = document.createElement("p");

      boxBlock.className = "packing-box";
      boxTitle.textContent = `箱番号：${box.boxNumber}`;
      box.items.forEach((item) => {
        const listItem = document.createElement("li");
        const quantity = parseMoney(item.quantity);
        listItem.textContent = `${item.name || "-"}${quantity === "" || quantity === 1 ? "" : `（${quantity}点）`} / ${item.shippingStatus}`;
        list.append(listItem);
      });
      total.className = "packing-total";
      total.textContent = `合計${box.items.length}件`;
      boxBlock.append(boxTitle, list, total);
      destinationBlock.append(boxBlock);
    });

    packingList.append(destinationBlock);
  });
}

function exportPackingListCsv() {
  const headers = ["売却先", "箱番号", "商品名", "数量", "発送ステータス"];
  const rows = getPackingListItems().map((item) => [
    getSortingDestinationLabel(item.destination),
    item.boxNumber || "箱番号未入力",
    item.name || "",
    item.quantity || 1,
    item.shippingStatus || "未仕分け",
  ]);
  const csv = [headers, ...rows]
    .map((row) => row.map((value) => `"${String(value ?? "").replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `売却先別箱詰めリスト_${formatDateInputValue()}.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("✓ CSVファイルを出力しました", "success");
}

function renderShippingManagement() {
  renderShippingManagementList();
  renderShippingDashboard();
  renderShippingPriorityRanking();
  renderShippingCompletedList();
  renderBoxSearchList();
  renderPackingList();
}

async function deleteSortingItem(item) {
  const shouldDelete = await confirmDelete(`「${item.name || "この商品"}」を削除しますか？`);

  if (!shouldDelete) {
    return false;
  }

  sortingItems = sortingItems.filter((currentItem) => currentItem.id !== item.id);
  saveSortingItems();
  resetSortingForm();
  renderSorting();
  return true;
}

function closeSortingDetailModal() {
  sortingDetailModal.classList.add("hidden");
  currentSortingDetailItem = null;
  unlockPageScroll();
}

function createSortingDetailMeta(label, value) {
  const row = document.createElement("div");
  const term = document.createElement("dt");
  const description = document.createElement("dd");

  term.textContent = label;
  description.textContent = value || "-";
  row.append(term, description);
  return row;
}

function openSortingDetailModal(item) {
  const bestOffer = getBestSortingOffer(item);
  const priceEntries = getSortingPriceEntries(item)
    .filter((entry) => entry.value !== "")
    .filter((entry) => !bestOffer || entry.label !== bestOffer.label);

  currentSortingDetailItem = item;
  sortingDetailContent.innerHTML = "";

  const hero = document.createElement("section");
  hero.className = "sorting-detail-hero";
  hero.innerHTML = `
    <p class="sorting-detail-label">最高額</p>
    <strong>${bestOffer ? `${bestOffer.label} ${formatMoney(bestOffer.value)}` : "-"}</strong>
    <span>${bestOffer ? "その他の査定額は下に収納" : "査定額未入力"}</span>
  `;

  const summary = document.createElement("section");
  const summaryList = document.createElement("dl");
  const imageBlock = document.createElement("div");
  const imageData = getLocalItemImage(getSortingImageDisplayItem(item));
  summary.className = "sorting-detail-section";
  imageBlock.className = "sorting-detail-image";
  if (imageData) {
    const image = document.createElement("img");
    image.src = imageData;
    image.alt = `${item.name || "商品"}の画像`;
    imageBlock.append(image);
  } else {
    imageBlock.textContent = "画像なし";
  }
  summary.innerHTML = `<h3>${item.name || "-"}</h3>`;
  summaryList.append(
    createSortingDetailMeta("📦 保管場所", item.storageLocation || "-"),
    createSortingDetailMeta("売却先", getSortingDestinationLabel(item.destination)),
    createSortingDetailMeta("🚚 発送状態", item.shippingStatus || "未仕分け"),
    createSortingDetailMeta("ステータス", item.status || "未確認"),
    createSortingDetailMeta("箱番号", item.boxNumber || "-"),
    createSortingDetailMeta("メモ", item.memo || "-"),
  );
  summary.append(imageBlock, summaryList);

  const detail = document.createElement("details");
  const detailSummary = document.createElement("summary");
  const priceList = document.createElement("dl");
  detail.className = "sorting-detail-price-details app-accordion";
  detailSummary.textContent = "その他の査定額を開く";
  priceEntries.forEach((entry) => {
    priceList.append(createSortingDetailMeta(entry.label, formatMoney(entry.value)));
  });
  if (priceEntries.length === 0) {
    priceList.append(createSortingDetailMeta("その他査定", "未入力"));
  }
  detail.append(detailSummary, priceList);

  sortingDetailContent.append(
    hero,
    summary,
    createProductImageSection(item, "sorting"),
    createReferenceImageSection(item, "sorting"),
    detail,
  );
  sortingDetailModal.classList.remove("hidden");
  lockPageScroll();
}

function createSortingRow(item) {
  const row = document.createElement("tr");
  const bestOffer = getBestSortingOffer(item);

  row.dataset.id = item.id;
  row.tabIndex = 0;
  row.setAttribute("role", "button");
  row.setAttribute("aria-label", `${item.name || "商品"}の仕分け詳細を開く`);
  row.innerHTML = `
    <td class="title-cell"><span class="sorting-row-title"></span></td>
    <td><span class="sorting-row-storage"></span></td>
    <td><span class="sorting-row-destination"></span></td>
    <td><span class="sorting-row-shipping"></span></td>
    <td class="money-cell"><span class="sorting-row-offer"></span></td>
    <td class="sorting-action-cell">
      <details class="row-action-menu sorting-action-menu">
        <summary aria-label="操作メニュー">⋯</summary>
        <div class="actions sorting-row-actions sorting-action-panel">
          <button class="text-button" type="button" data-action="view-sorting-detail">詳細</button>
          <button class="text-button" type="button" data-action="edit-sorting">編集</button>
          <button class="text-button" type="button" data-action="change-sorting-photo">📷 商品画像追加</button>
          <button class="text-button" type="button" data-action="add-sorting-reference-image">📚 参考画像追加</button>
          <button class="text-button" type="button" data-action="remove-sorting-photo">📷 商品画像削除</button>
          <button class="danger-button" type="button" data-action="delete-sorting">削除</button>
        </div>
      </details>
    </td>
  `;

  const cells = row.querySelectorAll("td");
  cells[0].querySelector(".sorting-row-title").textContent = item.name || "-";
  appendImageStateBadges(cells[0], item, {
    summary: getSortingDisplayImageSummary(item),
  });
  cells[1].querySelector(".sorting-row-storage").textContent = item.storageLocation || "-";
  cells[2].querySelector(".sorting-row-destination").textContent = getSortingDestinationLabel(item.destination);
  cells[3].querySelector(".sorting-row-shipping").textContent = item.shippingStatus || "未仕分け";
  cells[4].querySelector(".sorting-row-offer").textContent = bestOffer ? `${bestOffer.label} ${formatMoney(bestOffer.value)}` : "-";
  cells[1].dataset.value = item.storageLocation || "-";
  cells[2].dataset.value = getSortingDestinationLabel(item.destination);
  cells[4].dataset.value = bestOffer ? `${bestOffer.label} ${formatMoney(bestOffer.value)}` : "-";
  const actions = cells[5].querySelector(".sorting-row-actions");

  if (item.sourceItemId) {
    const returnButton = document.createElement("button");
    returnButton.className = "text-button";
    returnButton.type = "button";
    returnButton.dataset.action = "return-source-item";
    returnButton.textContent = "商品登録へ戻る";
    actions.append(returnButton);
  }

  return row;
}

function renderSorting() {
  refreshSortingDestinationOptions(sortingDestinationInput.value);
  refreshSortingFilters();
  renderSortingSummary();
  renderShippingManagement();
  renderSortingAppraisalFields(getSortingAppraisalValuesFromInputs());
  const sortingKeyword = String(sortingItemSearchInput?.value || "").trim().toLowerCase();
  const sortingBoxKeyword = String(sortingBoxSearchInput?.value || "").trim().toLowerCase();
  const searchedSortingCount = sortingItems.filter((item) => {
    const matchesKeyword = valuesMatchKeyword(getSortingSearchValues(item), sortingKeyword);
    const matchesBox = matchesStorageSearchKeyword(item, sortingBoxKeyword);
    return matchesKeyword && matchesBox;
  }).length;
  const filteredItems = sortSortingItems(getFilteredSortingItems());
  const displayItems = isSortingShippingMode
    ? filteredItems.filter(isSortingShippingCandidate)
    : filteredItems;
  updateSortingResultCount({
    visible: displayItems.length,
    filtered: filteredItems.length,
    searched: searchedSortingCount,
    total: sortingItems.length,
  });
  const sortingStorageQuickValue = String(sortingBoxSearchInput?.value || "").trim();
  const isStorageChipOnlyValue = isSortingStorageQuickValue(sortingStorageQuickValue);
  renderStorageQuickFilter(
    sortingStorageQuickFilter,
    getStorageQuickGroups(sortingItems),
    sortingStorageQuickValue,
    { scope: "sorting" },
  );
  const isPcSortingView = window.matchMedia("(min-width: 769px)").matches;
  const isManualSortingStorageSearch = sortingStorageQuickValue && !isStorageChipOnlyValue;
  const sortingComplexFilterLabels = [
    sortingItemSearchInput?.value ? `検索 ${sortingItemSearchInput.value}` : "",
    isManualSortingStorageSearch ? `📦 ${sortingStorageQuickValue}` : "",
    sortingDestinationFilter?.value ? `売却先 ${sortingDestinationFilter.value}` : "",
    sortingStatusFilter?.value ? `状態 ${sortingStatusFilter.value}` : "",
    sortingGenreFilter?.value ? `ジャンル ${sortingGenreFilter.value}` : "",
    sortingImageOnly ? "画像付きだけ" : "",
    sortingStorageUnsetOnly ? "保管場所未設定だけ" : "",
    isSortingShippingMode ? "発送モード" : "",
  ].filter(Boolean);
  const shouldShowStorageInActiveBar = sortingStorageQuickValue
    && !isManualSortingStorageSearch
    && (!isPcSortingView || !isStorageChipOnlyValue || sortingComplexFilterLabels.length > 0);
  updateActiveFilterBar(sortingActiveFilterBar, [
    ...sortingComplexFilterLabels,
    shouldShowStorageInActiveBar ? `📦 ${sortingStorageQuickValue}` : "",
    (!isPcSortingView || sortingComplexFilterLabels.length > 0) && displayItems.length !== sortingItems.length ? `${displayItems.length}件表示中` : "",
  ]);
  updateSortingDensityControls();
  sortingTableBody.innerHTML = "";
  sortingWorkCardList.innerHTML = "";
  sortingShippingModeButton.classList.toggle("active", isSortingShippingMode);
  sortingShippingModeButton.setAttribute("aria-pressed", String(isSortingShippingMode));
  sortingShippingModeButton.textContent = isSortingShippingMode ? "発送モード終了" : "発送モード（一覧）";
  document.body.classList.toggle(
    "sorting-shipping-mode-active",
    isSortingShippingMode && document.body.classList.contains("work-tab-sorting"),
  );
  renderSortingShippingSummary(filteredItems);

  if (displayItems.length === 0) {
    sortingTableWrap.classList.add("hidden");
    sortingWorkCardList.classList.add("hidden");
    sortingEmptyState.classList.remove("hidden");
    sortingEmptyState.querySelector("h3").textContent = isSortingShippingMode
      ? "発送準備中の商品はありません"
      : "仕分け商品はまだありません";
    sortingEmptyState.querySelector("p").textContent = isSortingShippingMode
      ? "未発送の商品はすべて処理済みです。"
      : "上のフォームから、売却先を決めたい商品を登録できます。";
    return;
  }

  sortingEmptyState.classList.add("hidden");
  sortingTableWrap.classList.remove("hidden");
  sortingWorkCardList.classList.remove("hidden");
  displayItems.forEach((item) => {
    sortingTableBody.append(createSortingRow(item));
    sortingWorkCardList.append(createSortingWorkCard(item));
  });
}

function resetSortingForm() {
  sortingForm.reset();
  sortingIdInput.value = "";
  currentSortingImageData = "";
  refreshSortingDestinationOptions(SORTING_UNDECIDED_DESTINATION);
  sortingStatusInput.value = "未確認";
  sortingShippingStatusInput.value = "未仕分け";
  if (sortingImageInput) {
    sortingImageInput.value = "";
  }
  if (sortingImageProviderInput) {
    sortingImageProviderInput.value = "";
  }
  if (sortingGooglePhotoImageIdInput) {
    sortingGooglePhotoImageIdInput.value = "";
  }
  if (sortingLocalImageIdInput) {
    sortingLocalImageIdInput.value = "";
  }
  if (sortingCloudImageIdInput) {
    sortingCloudImageIdInput.value = "";
  }
  updateSortingImageReferenceMode();
  updateSortingImagePreview("");
  renderSortingAppraisalFields();
  sortingSubmitButton.textContent = "仕分け登録";
  sortingCancelButton.classList.add("hidden");
  closeSortingFormDrawer();
}

function startSortingEdit(item) {
  openSortingFormDrawer();
  sortingIdInput.value = item.id;
  sortingNameInput.value = item.name || "";
  sortingGenreInput.value = item.genre || "";
  sortingQuantityInput.value = item.quantity || 1;
  sortingStorageLocationInput.value = item.storageLocation || "";
  refreshSortingDestinationOptions(getSortingDestinationLabel(item.destination));
  sortingStatusInput.value = item.status || "未確認";
  sortingShippingStatusInput.value = item.shippingStatus || "未仕分け";
  sortingBoxNumberInput.value = item.boxNumber || "";
  currentSortingImageData = item.imageData || "";
  const imageRefs = normalizeImageRefs(item.imageRefs);
  if (sortingImageProviderInput) {
    sortingImageProviderInput.value = imageRefs.provider;
  }
  if (sortingGooglePhotoImageIdInput) {
    sortingGooglePhotoImageIdInput.value = imageRefs.googlePhotoId;
  }
  if (sortingLocalImageIdInput) {
    sortingLocalImageIdInput.value = imageRefs.localImageId;
  }
  if (sortingCloudImageIdInput) {
    sortingCloudImageIdInput.value = imageRefs.cloudImageId;
  }
  updateSortingImageReferenceMode();
  updateSortingImagePreview(currentSortingImageData);
  renderSortingAppraisalFields(item);
  sortingMemoInput.value = item.memo || "";
  sortingSubmitButton.textContent = "仕分け更新";
  sortingCancelButton.classList.remove("hidden");
  sortingNameInput.focus();
}

function createSortingFormItem() {
  const id = sortingIdInput.value || createId();
  const existingItem = sortingItems.find((item) => item.id === id) || {};
  const appraisalValues = getSortingAppraisalValuesFromInputs();
  const imageRefs = getSortingImageRefsFromForm(existingItem.imageRefs);
  const normalizedImageRefs = currentSortingImageData && !imageRefs.localImageId
    ? normalizeImageRefs({
      ...imageRefs,
      provider: imageRefs.provider || "local",
      localImageId: createLocalImageId({ id }),
    })
    : imageRefs;

  return normalizeSortingItem({
    ...existingItem,
    id,
    name: sortingNameInput.value,
    genre: sortingGenreInput.value,
    quantity: sortingQuantityInput.value,
    storageLocation: sortingStorageLocationInput.value,
    destination: sortingDestinationInput.value,
    status: sortingStatusInput.value,
    shippingStatus: sortingShippingStatusInput.value,
    boxNumber: sortingBoxNumberInput.value,
    sourceItemId: existingItem.sourceItemId || "",
    imageData: currentSortingImageData,
    imageRefs: normalizedImageRefs,
    memo: sortingMemoInput.value,
    ...appraisalValues,
    createdAt: existingItem.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

function createSortingItemFromSourceItem(item, existingItem = {}, overrides = {}) {
  return normalizeSortingItem({
    ...existingItem,
    id: existingItem.id || createId(),
    sourceItemId: item.id,
    name: getListingTitle(item),
    genre: item.category || "",
    quantity: existingItem.quantity || 1,
    storageLocation: item.storageLocation || "",
    mercariPrice: parseMoney(item.plannedPrice),
    yahooPrice: existingItem.yahooPrice,
    surugayaPrice: existingItem.surugayaPrice,
    ryobanPrice: existingItem.ryobanPrice,
    ecoRingPrice: existingItem.ecoRingPrice,
    clothesPrice: existingItem.clothesPrice,
    mandarakePrice: existingItem.mandarakePrice,
    disposalPrice: existingItem.disposalPrice,
    otherPrice: existingItem.otherPrice,
    destination: existingItem.destination || "メルカリ",
    status: existingItem.status || "未確認",
    shippingStatus: existingItem.shippingStatus || "未仕分け",
    boxNumber: existingItem.boxNumber || "",
    imageData: existingItem.imageData || item.imageData || "",
    imageRefs: normalizeImageRefs(existingItem.imageRefs || item.imageRefs),
    memo: existingItem.memo || "",
    createdAt: existingItem.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...overrides,
  });
}

function upsertSortingItemFromSourceItem(item, overrides = {}) {
  const existingIndex = sortingItems.findIndex((sortingItem) => sortingItem.sourceItemId === item.id);
  const existingItem = existingIndex >= 0 ? sortingItems[existingIndex] : {};
  const sortingItem = createSortingItemFromSourceItem(item, existingItem, overrides);

  if (existingIndex >= 0) {
    sortingItems[existingIndex] = sortingItem;
  } else {
    sortingItems.unshift(sortingItem);
  }

  saveSortingItems();
  renderSorting();
  return sortingItem;
}

function sendItemToSorting(item) {
  upsertSortingItemFromSourceItem(item);
  showSuccessMessage("売却先仕分けへ送りました");
}

function markItemAsShippingReadyFromList(item) {
  upsertSortingItemFromSourceItem(item, {
    shippingStatus: "仕分け済",
  });
  const updatedAt = new Date().toISOString();
  items = items.map((currentItem) => currentItem.id === item.id
    ? {
      ...currentItem,
      editHistory: appendEditHistory(currentItem, ["発送ステータス: 発送準備へ"], updatedAt),
      updatedAt,
    }
    : currentItem);
  saveItems();
  showToast("✓ 発送準備へ変更しました", "success");
}

function createQuickEditBar(collection = "items") {
  const bar = document.createElement("div");
  bar.className = "quick-edit-bar";
  bar.setAttribute("aria-label", "クイック編集");
  bar.innerHTML = `
    <button type="button" data-action="quick-edit-storage" title="保管場所を編集">📦<span>保管</span></button>
    <button type="button" data-action="quick-edit-appraisal" title="査定額を編集">💰<span>査定</span></button>
    <button type="button" data-action="quick-edit-memo" title="メモを編集">📝<span>メモ</span></button>
    <button type="button" data-action="${collection === "sorting" ? "change-sorting-photo" : "change-photo"}" title="商品画像を追加">📷<span>商品</span></button>
    <button type="button" data-action="${collection === "sorting" ? "add-sorting-reference-image" : "add-reference-image"}" title="参考画像を追加">📚<span>参考</span></button>
  `;
  return bar;
}

function getAppraisalSourceByLabel(label) {
  const normalizedLabel = normalizeText(label);
  return getAppraisalSources().find((source) => normalizeText(getAppraisalFieldLabel(source)) === normalizedLabel) || null;
}

function getDefaultAppraisalSource() {
  return getAppraisalSources()[0] || null;
}

function getSortingQuickAppraisalField(item) {
  const destinationSource = getAppraisalSourceByLabel(getSortingDestinationLabel(item.destination));
  const bestOffer = getBestSortingOffer(item);
  const bestSource = bestOffer ? getAppraisalSourceByLabel(bestOffer.label) : null;
  const source = destinationSource || bestSource || getDefaultAppraisalSource();

  if (!source) {
    return null;
  }

  return {
    field: getAppraisalFieldName(source),
    label: getAppraisalFieldLabel(source),
  };
}

function replaceVisibleItemCards(item) {
  document.querySelectorAll(`[data-id="${CSS.escape(item.id)}"]`).forEach((node) => {
    if (node.classList.contains("mobile-compact-table-card")) {
      node.replaceWith(createMobileCompactTableCard(item));
      return;
    }
    if (node.classList.contains("mobile-item-card")) {
      node.replaceWith(createMobileCard(item));
      return;
    }
    if (node.classList.contains("inventory-shelf-card")) {
      node.replaceWith(createInventoryShelfCard(item));
      return;
    }
    if (node.classList.contains("compact-list-row")) {
      node.replaceWith(createCompactListRow(item));
      return;
    }
    if (node.tagName === "TR" && node.closest("#itemTableBody")) {
      node.replaceWith(createActiveRow(item));
    }
  });
}

function replaceVisibleSortingCards(item) {
  document.querySelectorAll(`[data-id="${CSS.escape(item.id)}"]`).forEach((node) => {
    if (node.classList.contains("sorting-work-card")) {
      node.replaceWith(createSortingWorkCard(item));
      return;
    }
    if (node.tagName === "TR" && node.closest("#sortingTableBody")) {
      node.replaceWith(createSortingRow(item));
    }
  });
}

function updateLinkedSortingStorage(itemId, storageLocation) {
  const linkedSortingItems = sortingItems.filter((sortingItem) => sortingItem.sourceItemId === itemId);

  if (linkedSortingItems.length === 0) {
    return;
  }

  const updatedAt = new Date().toISOString();
  sortingItems = sortingItems.map((sortingItem) => (sortingItem.sourceItemId === itemId
    ? { ...sortingItem, storageLocation, updatedAt }
    : sortingItem));
  saveSortingItems();
  linkedSortingItems.forEach((sortingItem) => {
    replaceVisibleSortingCards({ ...sortingItem, storageLocation, updatedAt });
  });
}

function updateItemQuickField(item, updates, successMessage, historyChanges = []) {
  const updatedAt = new Date().toISOString();
  const updatedItem = {
    ...item,
    ...updates,
    updatedAt,
  };
  const changes = historyChanges.length > 0 ? historyChanges : getItemChangeDescriptions(item, updatedItem);
  updatedItem.editHistory = appendEditHistory(item, changes, updatedAt);
  items = items.map((currentItem) => (currentItem.id === item.id ? updatedItem : currentItem));

  if (!saveItems()) {
    return item;
  }

  replaceVisibleItemCards(updatedItem);
  showToast(successMessage, "success");
  return updatedItem;
}

function updateSortingQuickField(item, updates, successMessage) {
  const updatedItem = normalizeSortingItem({
    ...item,
    ...updates,
    updatedAt: new Date().toISOString(),
  });
  sortingItems = sortingItems.map((currentItem) => (currentItem.id === item.id ? updatedItem : currentItem));
  saveSortingItems();
  replaceVisibleSortingCards(updatedItem);
  showToast(successMessage, "success");
  return updatedItem;
}

function quickEditItemStorage(item) {
  const storageOptions = getStorageLocationOptions(item.storageLocation || "")
    .filter((value) => value !== "未設定")
    .join(" / ");
  const nextStorage = prompt(`保管場所を入力してください。\n候補: ${storageOptions || "設定ページで追加できます"}`, item.storageLocation || "");

  if (nextStorage === null) {
    return;
  }

  const storageLocation = normalizeText(nextStorage);

  if (!storageLocation) {
    showToast("保管場所を入力してください", "error");
    return;
  }

  updateItemQuickField(item, { storageLocation }, "✓ 保管場所を保存しました", [
    `保管場所: ${formatHistoryValue(item.storageLocation)} → ${storageLocation}`,
  ]);
  updateLinkedSortingStorage(item.id, storageLocation);
}

function quickEditItemAppraisal(item) {
  const linkedSortingItem = sortingItems.find((sortingItem) => sortingItem.sourceItemId === item.id);

  if (linkedSortingItem) {
    quickEditSortingAppraisal(linkedSortingItem);
    return;
  }

  const currentValue = parseMoney(item.plannedPrice);
  const nextValue = prompt("査定額または予定価格を入力してください。", currentValue === "" ? "" : String(currentValue));

  if (nextValue === null) {
    return;
  }

  const plannedPrice = parseMoney(nextValue);

  if (plannedPrice === "") {
    showToast("金額を入力してください", "error");
    return;
  }

  updateItemQuickField(item, { plannedPrice }, "✓ 査定額を保存しました", [
    `予定価格: ${formatHistoryValue(formatMoney(parseMoney(item.plannedPrice)))} → ${formatMoney(plannedPrice)}`,
  ]);
}

function quickEditItemMemo(item) {
  const nextMemo = prompt("メモを入力してください。", item.memo || "");

  if (nextMemo === null) {
    return;
  }

  updateItemQuickField(item, { memo: normalizeText(nextMemo) }, "✓ メモを保存しました", [
    "メモを更新",
  ]);
}

function quickEditSortingStorage(item) {
  const nextStorage = prompt("保管場所を入力してください。", item.storageLocation || "");

  if (nextStorage === null) {
    return;
  }

  const storageLocation = normalizeText(nextStorage);

  if (!storageLocation) {
    showToast("保管場所を入力してください", "error");
    return;
  }

  updateSortingQuickField(item, { storageLocation }, "✓ 保管場所を保存しました");

  if (item.sourceItemId) {
    const sourceItem = items.find((currentItem) => currentItem.id === item.sourceItemId);
    if (sourceItem) {
      updateItemQuickField(sourceItem, { storageLocation }, "✓ 紐づく商品にも反映しました", [
        `保管場所: ${formatHistoryValue(sourceItem.storageLocation)} → ${storageLocation}`,
      ]);
    }
  }
}

function quickEditSortingAppraisal(item) {
  const appraisal = getSortingQuickAppraisalField(item);

  if (!appraisal) {
    showToast("査定先が未設定です", "error");
    return;
  }

  const currentValue = parseMoney(item[appraisal.field]);
  const nextValue = prompt(`${appraisal.label}の査定額を入力してください。`, currentValue === "" ? "" : String(currentValue));

  if (nextValue === null) {
    return;
  }

  const appraisalValue = parseMoney(nextValue);

  if (appraisalValue === "") {
    showToast("金額を入力してください", "error");
    return;
  }

  updateSortingQuickField(item, { [appraisal.field]: appraisalValue }, "✓ 査定額を保存しました");
}

function quickEditSortingMemo(item) {
  const nextMemo = prompt("メモを入力してください。", item.memo || "");

  if (nextMemo === null) {
    return;
  }

  updateSortingQuickField(item, { memo: normalizeText(nextMemo) }, "✓ メモを保存しました");
}

function closeSortingInlineEditor() {
  document.querySelectorAll(".sorting-inline-editor").forEach((editor) => editor.remove());
}

function getAdjacentVisibleSortingItem(itemId, direction) {
  const cards = [...sortingWorkCardList.querySelectorAll(".sorting-work-card")];
  const currentIndex = cards.findIndex((card) => card.dataset.id === itemId);

  if (currentIndex < 0) {
    return null;
  }

  const nextCard = cards[currentIndex + direction];
  const nextItemId = nextCard?.dataset.id;

  if (!nextItemId) {
    return null;
  }

  return sortingItems.find((item) => item.id === nextItemId) || null;
}

function createSortingInlineEditorControl(config) {
  if (config.type === "select") {
    const select = document.createElement("select");
    select.className = "sorting-inline-control";
    config.options.forEach((optionValue) => {
      const option = document.createElement("option");
      option.value = optionValue;
      option.textContent = optionValue;
      select.append(option);
    });
    select.value = config.value || config.options[0] || "";
    return select;
  }

  if (config.type === "textarea") {
    const textarea = document.createElement("textarea");
    textarea.className = "sorting-inline-control";
    textarea.rows = 3;
    textarea.value = config.value || "";
    return textarea;
  }

  const input = document.createElement("input");
  input.className = "sorting-inline-control";
  input.type = config.inputType || "text";
  input.value = config.value || "";
  return input;
}

function getSortingInlineEditorConfig(item, action) {
  if (action === "quick-edit-storage") {
    return {
      label: "保管場所",
      value: item.storageLocation || "",
      placeholder: "例：棚A",
      save(value) {
        const storageLocation = normalizeText(value);
        if (!storageLocation) {
          showToast("保管場所を入力してください", "error");
          return false;
        }
        updateSortingQuickField(item, { storageLocation }, "✓ 保管場所を保存しました");

        if (item.sourceItemId) {
          const sourceItem = items.find((currentItem) => currentItem.id === item.sourceItemId);
          if (sourceItem) {
            updateItemQuickField(sourceItem, { storageLocation }, "✓ 紐づく商品にも反映しました", [
              `保管場所: ${formatHistoryValue(sourceItem.storageLocation)} → ${storageLocation}`,
            ]);
          }
        }
        return true;
      },
    };
  }

  if (action === "quick-edit-appraisal") {
    const appraisal = getSortingQuickAppraisalField(item);
    if (!appraisal) {
      showToast("査定先が未設定です", "error");
      return null;
    }
    const bestOffer = getBestSortingOffer(item);
    const fieldValue = parseMoney(item[appraisal.field]);
    const currentValue = fieldValue === "" && bestOffer ? parseMoney(bestOffer.value) : fieldValue;
    return {
      label: `${appraisal.label} 査定額`,
      value: currentValue === "" ? "" : String(currentValue),
      inputType: "number",
      placeholder: "例：700",
      save(value) {
        const appraisalValue = parseMoney(value);
        if (appraisalValue === "") {
          showToast("金額を入力してください", "error");
          return false;
        }
        updateSortingQuickField(item, { [appraisal.field]: appraisalValue }, "✓ 査定額を保存しました");
        return true;
      },
    };
  }

  if (action === "quick-edit-memo") {
    return {
      label: "メモ",
      type: "textarea",
      value: item.memo || "",
      placeholder: "メモ",
      save(value) {
        updateSortingQuickField(item, { memo: normalizeText(value) }, "✓ メモを保存しました");
        return true;
      },
    };
  }

  if (action === "quick-edit-destination") {
    const options = [...new Set([getSortingDestinationLabel(item.destination), ...getAppraisalSources().map(getAppraisalFieldLabel), "未定", "その他"].filter(Boolean))];
    return {
      label: "売却先",
      type: "select",
      value: getSortingDestinationLabel(item.destination),
      options,
      save(value) {
        updateSortingQuickField(item, { destination: value }, "✓ 売却先を保存しました");
        return true;
      },
    };
  }

  if (action === "quick-edit-status") {
    return {
      label: "状態",
      type: "select",
      value: item.status || "未確認",
      options: SORTING_STATUSES,
      save(value) {
        updateSortingQuickField(item, { status: value }, "✓ 状態を保存しました");
        return true;
      },
    };
  }

  if (action === "quick-edit-shipping") {
    const shippingStatuses = ["未仕分け", "仕分け済", "発送準備中", "発送準備済み", "発送待ち", "発送済", "査定待ち", "入金済", "完了"];
    return {
      label: "発送状態",
      type: "select",
      value: item.shippingStatus || "未仕分け",
      options: shippingStatuses,
      save(value) {
        updateSortingQuickField(item, { shippingStatus: value }, "✓ 発送状態を保存しました");
        return true;
      },
    };
  }

  return null;
}

function openSortingInlineEditor(item, action, anchorElement) {
  const card = anchorElement?.closest(".sorting-work-card");
  const config = getSortingInlineEditorConfig(item, action);
  const isAppraisalEditor = action === "quick-edit-appraisal";

  if (!card || !config) {
    return;
  }

  closeSortingInlineEditor();
  closeSortingActionMenus();

  const editor = document.createElement("div");
  editor.className = "sorting-inline-editor";
  editor.innerHTML = `
    <label class="sorting-inline-label"></label>
    <div class="sorting-inline-input-slot"></div>
    <div class="sorting-inline-actions">
      <button class="ghost-button" type="button" data-inline-action="cancel">キャンセル</button>
      <button class="primary-button" type="button" data-inline-action="save">保存</button>
    </div>
  `;

  const label = editor.querySelector(".sorting-inline-label");
  const control = createSortingInlineEditorControl(config);
  label.textContent = config.label;
  control.placeholder = config.placeholder || "";
  editor.querySelector(".sorting-inline-input-slot").append(control);
  card.append(editor);

  const save = ({ moveDirection = 0 } = {}) => {
    const nextItem = moveDirection ? getAdjacentVisibleSortingItem(item.id, moveDirection) : null;
    const didSave = config.save(control.value);
    if (didSave) {
      closeSortingInlineEditor();
      if (nextItem && isAppraisalEditor && !isMobileViewport()) {
        window.setTimeout(() => {
          const nextCard = sortingWorkCardList.querySelector(`.sorting-work-card[data-id="${CSS.escape(nextItem.id)}"]`);
          const nextOffer = nextCard?.querySelector(".sorting-work-offer");
          if (nextOffer) {
            openSortingInlineEditor(nextItem, "quick-edit-appraisal", nextOffer);
          }
        }, 0);
      }
    }
    return didSave;
  };

  editor.addEventListener("click", (event) => {
    event.stopPropagation();
    const actionButton = event.target.closest("[data-inline-action]");
    if (!actionButton) {
      return;
    }
    if (actionButton.dataset.inlineAction === "cancel") {
      editor.remove();
      return;
    }
    save();
  });

  control.addEventListener("keydown", (event) => {
    if (isAppraisalEditor && !isMobileViewport() && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
      event.preventDefault();
      save({ moveDirection: event.key === "ArrowDown" ? 1 : -1 });
      return;
    }
    if (event.key === "Enter" && config.type !== "textarea") {
      event.preventDefault();
      save({ moveDirection: isAppraisalEditor && !isMobileViewport() ? 1 : 0 });
    }
    if (event.key === "Escape") {
      event.preventDefault();
      editor.remove();
    }
  });

  control.focus();
  if (typeof control.select === "function") {
    control.select();
  }
}

function promptFromOptions(title, options, currentValue) {
  const uniqueOptions = [...new Set(options.filter(Boolean))];
  const nextValue = prompt(`${title}\n候補: ${uniqueOptions.join(" / ")}`, currentValue || "");

  if (nextValue === null) {
    return null;
  }

  return normalizeText(nextValue);
}

function quickEditSortingDestination(item) {
  const currentLabel = getSortingDestinationLabel(item.destination);
  const nextDestination = promptFromOptions("売却先を入力してください。", getAppraisalSources().map(getAppraisalFieldLabel), currentLabel);

  if (nextDestination === null) {
    return;
  }

  if (!nextDestination) {
    showToast("売却先を入力してください", "error");
    return;
  }

  updateSortingQuickField(item, { destination: nextDestination }, "✓ 売却先を保存しました");
}

function quickEditSortingStatus(item) {
  const nextStatus = promptFromOptions("状態を入力してください。", SORTING_STATUSES, item.status || "未確認");

  if (nextStatus === null) {
    return;
  }

  if (!nextStatus) {
    showToast("状態を入力してください", "error");
    return;
  }

  updateSortingQuickField(item, { status: nextStatus }, "✓ 状態を保存しました");
}

function quickEditSortingShippingStatus(item) {
  const shippingStatuses = ["未仕分け", "仕分け済", "発送準備中", "発送準備済み", "発送待ち", "発送済", "査定待ち", "入金済", "完了"];
  const nextShippingStatus = promptFromOptions("発送状態を入力してください。", shippingStatuses, item.shippingStatus || "未仕分け");

  if (nextShippingStatus === null) {
    return;
  }

  if (!nextShippingStatus) {
    showToast("発送状態を入力してください", "error");
    return;
  }

  updateSortingQuickField(item, { shippingStatus: nextShippingStatus }, "✓ 発送状態を保存しました");
}

function returnToSourceItem(sortingItem) {
  const sourceItem = items.find((item) => item.id === sortingItem.sourceItemId);

  if (!sourceItem) {
    showErrorMessage("元の商品登録データが見つかりません");
    return;
  }

  startEdit(sourceItem);
  document.querySelector("#formTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function exportSortingCsv() {
  const appraisalSources = getAppraisalSources();
  const headers = ["商品名", "ジャンル", "数量", "保管場所", ...appraisalSources.map((source) => `${getAppraisalFieldLabel(source)}査定額`), "最終売却先", "ステータス", "発送ステータス", "箱番号", "元商品ID", "メモ"];
  const rows = sortingItems.map((item) => [
    item.name,
    item.genre,
    item.quantity,
    item.storageLocation,
    ...appraisalSources.map((source) => parseMoney(item[getAppraisalFieldName(source)])),
    getSortingDestinationLabel(item.destination),
    item.status,
    item.shippingStatus,
    item.boxNumber,
    item.sourceItemId,
    item.memo,
  ]);
  const csv = [headers, ...rows]
    .map((row) => row.map((value) => `"${String(value ?? "").replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `売却先仕分け_${formatDateInputValue()}.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("✓ CSVファイルを出力しました", "success");
}

function getQuickSearchMatches(keyword) {
  const normalizedKeyword = keyword.trim().toLowerCase();

  if (!normalizedKeyword) {
    return [];
  }

  const itemMatches = items
    .filter((item) => valuesMatchKeyword(getItemSearchValues(item), normalizedKeyword))
    .map((item) => ({
      type: "item",
      id: item.id,
      title: getListingTitle(item) || "商品タイトル未入力",
      meta: [
        getItemStatus(item),
        item.storageLocation ? `保管場所: ${item.storageLocation}` : "保管場所未設定",
        item.memo ? `メモ: ${item.memo}` : "",
      ].filter(Boolean).join(" / "),
    }));

  const sortingMatches = sortingItems
    .filter((item) => valuesMatchKeyword(getSortingSearchValues(item), normalizedKeyword))
    .map((item) => ({
      type: "sorting",
      id: item.id,
      title: item.name || "仕分け商品名未入力",
      meta: [
        getSortingDestinationLabel(item.destination),
        item.storageLocation ? `保管場所: ${item.storageLocation}` : "",
        item.boxNumber ? `箱番号: ${item.boxNumber}` : "箱番号未入力",
      ].filter(Boolean).join(" / "),
    }));

  return [...itemMatches, ...sortingMatches].slice(0, 30);
}

function renderQuickSearchResults() {
  const matches = getQuickSearchMatches(quickSearchInput.value);
  quickSearchResults.innerHTML = "";

  if (!quickSearchInput.value.trim()) {
    const message = document.createElement("p");
    message.className = "muted";
    message.textContent = "探したい商品名、保管場所、箱番号を入力してください。";
    quickSearchResults.append(message);
    return;
  }

  if (matches.length === 0) {
    const message = document.createElement("p");
    message.className = "muted";
    message.textContent = "該当する商品はありません。";
    quickSearchResults.append(message);
    return;
  }

  matches.forEach((match) => {
    const row = document.createElement("article");
    row.className = "quick-search-result";
    row.dataset.id = match.id;
    row.dataset.type = match.type;
    row.innerHTML = `
      <div>
        <strong></strong>
        <span></span>
      </div>
      <div class="quick-search-actions"></div>
    `;
    row.querySelector("strong").textContent = match.title;
    row.querySelector("span").textContent = match.meta || "-";
    const actions = row.querySelector(".quick-search-actions");

    if (match.type === "item") {
      actions.innerHTML = `
        <button class="text-button" type="button" data-action="quick-edit">編集</button>
        <button class="text-button" type="button" data-action="quick-relist">再出品</button>
        <button class="text-button" type="button" data-action="quick-location">保管場所確認</button>
      `;
    } else {
      actions.innerHTML = `
        <button class="text-button" type="button" data-action="quick-box">保管場所検索へ</button>
      `;
    }

    quickSearchResults.append(row);
  });
}

function getFilteredItems() {
  const keyword = searchInput.value.trim().toLowerCase();
  const selectedStatus = statusFilter.value;
  const selectedStorage = storageFilter?.value || "";

  return items.filter((item) => {
    const matchesKeyword = valuesMatchKeyword(getItemSearchValues(item), keyword);
    const matchesStatus = !selectedStatus
      || (selectedStatus === "highProfit"
        ? (() => {
            const profit = calculateProfit(item);
            return profit !== "" && profit >= 1000;
          })()
        : getItemStatus(item) === selectedStatus);
    const matchesStorage = !selectedStorage || (item.storageLocation || "") === selectedStorage;
    const matchesImage = !inventoryImageOnly || hasAnyDisplayImage(item);
    const matchesStorageUnset = !inventoryStorageUnsetOnly || isStorageUnset(item);

    return matchesKeyword && matchesStatus && matchesStorage && matchesImage && matchesStorageUnset;
  });
}

function compareText(a, b) {
  return String(a || "").localeCompare(String(b || ""), "ja");
}

function sortActiveItems(sourceItems) {
  const sortOrder = sortOrderInput.value;
  const sortedItems = [...sourceItems];

  sortedItems.sort((a, b) => {
    if (sortOrder === "oldest") {
      return new Date(a.updatedAt || 0) - new Date(b.updatedAt || 0);
    }

    if (sortOrder === "title") {
      return compareText(getListingTitle(a), getListingTitle(b));
    }

    if (sortOrder === "storageLocation") {
      return compareText(a.storageLocation, b.storageLocation) || compareText(getListingTitle(a), getListingTitle(b));
    }

    if (sortOrder === "condition") {
      return compareText(a.condition, b.condition) || compareText(getListingTitle(a), getListingTitle(b));
    }

    if (sortOrder === "status") {
      return compareText(getItemStatus(a), getItemStatus(b)) || compareText(getListingTitle(a), getListingTitle(b));
    }

    if (sortOrder === "plannedPrice") {
      return (parseMoney(b.plannedPrice) || 0) - (parseMoney(a.plannedPrice) || 0);
    }

    if (sortOrder === "profit") {
      return (calculateProfit(b) || 0) - (calculateProfit(a) || 0);
    }

    return new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0);
  });

  return sortedItems;
}

function getRecentlyUpdatedItems(limit = 5) {
  return [...items]
    .sort((a, b) => new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0))
    .slice(0, limit);
}

function renderRecentStorageList() {
  recentStorageList.innerHTML = "";
  const seen = new Set();
  const storages = getRecentlyUpdatedItems(items.length)
    .map((item) => item.storageLocation?.trim())
    .filter((storage) => {
      if (!storage || seen.has(storage)) {
        return false;
      }

      seen.add(storage);
      return true;
    })
    .slice(0, 6);

  if (storages.length === 0) {
    recentStorageList.innerHTML = "<span class=\"quick-chip-empty\">未登録</span>";
    return;
  }

  storages.forEach((storage) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quick-chip";
    button.textContent = storage;
    button.dataset.storage = storage;
    recentStorageList.append(button);
  });
}

function renderRecentItemsList() {
  recentItemsList.innerHTML = "";
  const recentItems = getRecentlyUpdatedItems(6);

  if (recentItems.length === 0) {
    recentItemsList.innerHTML = "<span class=\"quick-chip-empty\">未登録</span>";
    return;
  }

  recentItems.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quick-chip";
    button.textContent = getListingTitle(item) || "-";
    button.dataset.itemId = item.id;
    recentItemsList.append(button);
  });
}

function createRecentDockRow(item) {
  const row = document.createElement("tr");

  row.innerHTML = `
      <td class="title-cell"></td>
      <td class="profit-cell"></td>
      <td></td>
      <td></td>
      <td>
        <details class="row-action-menu">
          <summary aria-label="操作メニュー">⋯</summary>
          <div class="actions">
            <button class="text-button" type="button" data-action="edit">編集</button>
            <button class="text-button" type="button" data-action="view-detail">詳細</button>
            <button class="text-button" type="button" data-action="quick-change-storage">保管場所変更</button>
            <button class="text-button" type="button" data-action="quick-mark-listed">出品中に変更</button>
            <button class="text-button" type="button" data-action="quick-shipping-ready">発送準備へ</button>
            <button class="text-button" type="button" data-action="copy-title">タイトルコピー</button>
            <button class="text-button" type="button" data-action="copy-description">説明文コピー</button>
            <button class="text-button" type="button" data-action="relist">再出品</button>
            <button class="text-button" type="button" data-action="send-to-sorting">仕分けへ送る</button>
            <button class="text-button" type="button" data-action="mark-sold">売却済み</button>
            <button class="danger-button" type="button" data-action="delete">削除</button>
          </div>
        </details>
      </td>
    `;

  row.dataset.id = item.id;
  row.querySelector(".title-cell").textContent = getListingTitle(item) || "-";
  const profit = calculateProfit(item);
  row.children[1].textContent = formatMoney(profit);
  applyProfitLevel(row.children[1], profit);

  const statusBadge = document.createElement("span");
  statusBadge.className = `status-badge ${STATUS_CLASS_NAMES[getItemStatus(item)] || "status-unlisted"}`;
  statusBadge.textContent = formatStatusDisplay(getItemStatus(item));
  row.children[2].append(statusBadge);

  row.children[3].textContent = item.storageLocation || "-";

  return row;
}

function createRecentDockMobileCard(item) {
  const card = document.createElement("article");
  card.className = "mobile-item-card recent-dock-mobile-card";
  card.dataset.id = item.id;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `${getListingTitle(item) || "商品"}の詳細を開く`);

  card.innerHTML = `
    <div class="mobile-card-main">
      <div>
        <h3 class="mobile-card-name"></h3>
      </div>
    </div>
    <dl class="mobile-card-details">
      <div class="mobile-priority-profit">
        <dt>💴 利益</dt>
        <dd data-field="profit"></dd>
      </div>
      <div class="mobile-priority-small">
        <dt>📤 出品状態</dt>
        <dd data-field="status"></dd>
      </div>
      <div class="mobile-priority-storage">
        <dt>📦 保管場所</dt>
        <dd data-field="storageLocation"></dd>
      </div>
      <div class="mobile-priority-small">
        <dt>売却先</dt>
        <dd data-field="destination"></dd>
      </div>
      <div class="mobile-priority-small">
        <dt>価格</dt>
        <dd data-field="plannedPrice"></dd>
      </div>
    </dl>
    <div class="mobile-card-primary-actions">
      <button class="text-button" type="button" data-action="view-detail">詳細</button>
      <button class="text-button" type="button" data-action="edit">編集</button>
    </div>
    <details class="mobile-more-actions">
      <summary aria-label="その他の操作">その他</summary>
      <div class="mobile-more-actions-panel">
        <button class="text-button" type="button" data-action="quick-change-storage">保管場所変更</button>
        <button class="text-button" type="button" data-action="quick-mark-listed">出品中に変更</button>
        <button class="text-button" type="button" data-action="quick-shipping-ready">発送準備へ</button>
        <button class="text-button" type="button" data-action="mark-sold">売却済み</button>
        <button class="text-button" type="button" data-action="copy-title">タイトルコピー</button>
        <button class="text-button" type="button" data-action="copy-description">説明コピー</button>
        <button class="text-button" type="button" data-action="relist">再出品</button>
        <button class="text-button" type="button" data-action="send-to-sorting">仕分けへ</button>
        <button class="danger-button" type="button" data-action="delete">削除</button>
      </div>
    </details>
  `;

  card.querySelector(".mobile-card-name").textContent = getListingTitle(item) || "-";
  const mobileProfit = calculateProfit(item);
  const mobileProfitField = card.querySelector('[data-field="profit"]');
  mobileProfitField.textContent = formatMoney(mobileProfit);
  applyProfitLevel(mobileProfitField, mobileProfit);
  const mobileStatusField = card.querySelector('[data-field="status"]');
  mobileStatusField.textContent = formatStatusDisplay(getSearchNeededLabel(item) === "要捜索" ? "要捜索" : getItemStatus(item));
  mobileStatusField.classList.toggle("search-needed-cell", getItemStatus(item) === "要捜索");
  card.querySelector('[data-field="storageLocation"]').textContent = item.storageLocation || "-";
  card.querySelector('[data-field="destination"]').textContent = getSortingDestinationForItem(item);
  card.querySelector('[data-field="plannedPrice"]').textContent = formatMoney(parseMoney(item.plannedPrice));

  return card;
}

function renderRecentDock() {
  if (!recentDockTableBody || !recentDockMobileList || !recentDockEmpty) {
    return;
  }

  recentDockTableBody.innerHTML = "";
  recentDockMobileList.innerHTML = "";
  const recentItems = getRecentlyUpdatedItems(10);

  recentDockEmpty.classList.toggle("hidden", recentItems.length > 0);

  recentItems.forEach((item) => {
    recentDockTableBody.append(createRecentDockRow(item));
    recentDockMobileList.append(createRecentDockMobileCard(item));
  });
}

function renderFormAssist() {
  refreshStorageLocationOptions(storageLocationInput.value);
  renderRecentStorageList();
  renderRecentItemsList();
  renderRecentDock();
}

function hideCompletionPanel() {
  completionPanel.classList.add("hidden");
}

function showCompletionPanel(item) {
  lastSavedShortcut = {
    category: item.category || "",
    storageLocation: item.storageLocation || "",
  };
  completionPanel.classList.remove("hidden");
}

function render() {
  refreshListStorageFilter();
  const inventoryKeyword = searchInput.value.trim().toLowerCase();
  const searchedItemCount = items.filter((item) => valuesMatchKeyword(getItemSearchValues(item), inventoryKeyword)).length;
  const filteredItems = getFilteredItems();
  const shouldIgnoreInventoryFilter = statusFilter.value === "売却済み";
  const activeItems = itemListTargetMode === "inventory" && !shouldIgnoreInventoryFilter
    ? filteredItems.filter((item) => getItemStatus(item) !== "売却済み")
    : filteredItems;
  const sortedActiveItems = sortActiveItems(activeItems);
  updateInventoryResultCount({
    visible: sortedActiveItems.length,
    filtered: filteredItems.length,
    searched: searchedItemCount,
    total: items.length,
  });
  renderStorageQuickFilter(
    inventoryStorageQuickFilter,
    getStorageQuickGroups(items),
    storageFilter?.value || "",
    { scope: "inventory" },
  );
  updateActiveFilterBar(inventoryActiveFilterBar, [
    storageFilter?.value ? `📦 ${storageFilter.value}` : "",
    statusFilter?.value ? `状態 ${statusFilter.options[statusFilter.selectedIndex]?.textContent || statusFilter.value}` : "",
    inventoryImageOnly ? "画像付きだけ" : "",
    inventoryStorageUnsetOnly ? "保管場所未設定だけ" : "",
    sortedActiveItems.length !== items.length ? `${sortedActiveItems.length}件表示中` : "",
  ]);
  const soldItems = sortSoldItems(filteredItems.filter((item) => getItemStatus(item) === "売却済み"));
  const allSoldItems = items.filter((item) => getItemStatus(item) === "売却済み");
  itemCount.textContent = String(items.length);
  updateListActionSummary(items);
  renderFormAssist();
  renderQuickSearchResults();
  itemTableBody.innerHTML = "";
  compactTableGrid.innerHTML = "";
  storageLocationView.innerHTML = "";
  inventoryShelfList.innerHTML = "";
  mobileCardList.innerHTML = "";
  soldTableBody.innerHTML = "";
  updateDashboard(items, allSoldItems);
  renderSettingsOperationalSummary();
  updateTotalSummary(allSoldItems);
  updateMonthlySummary(allSoldItems);
  renderMonthlyProfitList(allSoldItems);
  renderProfitRanking(allSoldItems);
  renderProfitAmountRanking(allSoldItems);
  renderProfitRateRanking(allSoldItems);
  renderCategoryProfitRanking(allSoldItems);
  renderStorageProfitRanking(allSoldItems);
  const shouldRenderFullItemList = document.body.classList.contains("work-tab-list");
  if (backupControlsTop) {
    backupControlsTop.classList.remove("hidden");
    backupControlsTop.hidden = false;
  }
  const shouldUseMobileItemCards = shouldRenderFullItemList
    && itemListGroupMode === "normal"
    && window.matchMedia("(max-width: 600px)").matches;
  const shouldUseDesktopInventoryTable = shouldRenderFullItemList
    && itemListGroupMode === "normal"
    && window.matchMedia("(min-width: 900px)").matches;
  const shouldShowStorageList = shouldRenderFullItemList && itemListGroupMode === "storage";
  const shouldShowCompactList = shouldRenderFullItemList
    && itemListGroupMode === "normal"
    && !shouldUseMobileItemCards
    && (itemListViewMode === "list" || shouldUseDesktopInventoryTable);
  const shouldShowCardList = shouldRenderFullItemList
    && itemListGroupMode === "normal"
    && !shouldUseDesktopInventoryTable
    && (itemListViewMode === "card" || shouldUseMobileItemCards);
  normalListModeButton.classList.toggle("active", itemListGroupMode === "normal");
  storageListModeButton.classList.toggle("active", itemListGroupMode === "storage");
  listViewButton.classList.toggle("active", itemListViewMode === "list");
  cardViewButton.classList.toggle("active", itemListViewMode === "card");
  listShowAllButton?.classList.toggle("active", itemListTargetMode === "all");
  listInventoryOnlyButton?.classList.toggle("active", itemListTargetMode === "inventory");
  updateInventoryOptionSummary();
  updateInventoryFilterSummary();
  viewToggle.classList.toggle("hidden", shouldRenderFullItemList && (items.length === 0 || itemListGroupMode === "storage"));
  inventoryShelfList.classList.toggle("card-grid", itemListViewMode === "card");

  if (!shouldRenderFullItemList) {
    tableWrap.classList.add("hidden");
    compactTableGrid.classList.add("hidden");
    storageLocationView.classList.add("hidden");
    inventoryShelfList.classList.add("hidden");
    mobileCardList.classList.add("hidden");
    emptyState.classList.add("hidden");
  } else if (sortedActiveItems.length === 0) {
    tableWrap.classList.add("hidden");
    compactTableGrid.classList.add("hidden");
    storageLocationView.classList.add("hidden");
    inventoryShelfList.classList.add("hidden");
    mobileCardList.classList.add("hidden");
    emptyState.classList.remove("hidden");
    emptyState.querySelector("h3").textContent = items.length === 0 ? "まだ商品がありません" : "通常一覧に表示する商品がありません";
    emptyState.querySelector("p").textContent = items.length === 0
      ? "商品登録画面から、出品準備中の商品を登録できます。"
      : "検索条件を変えるか、売却済み欄を確認してください。";
  } else {
    emptyState.classList.add("hidden");
    tableWrap.classList.add("hidden");
    compactTableGrid.classList.toggle("hidden", !shouldShowCompactList);
    storageLocationView.classList.toggle("hidden", !shouldShowStorageList);
    inventoryShelfList.classList.toggle("hidden", !shouldShowCardList);
    mobileCardList.classList.toggle("hidden", !shouldShowCardList);
  }

  if (shouldRenderFullItemList) {
    if (shouldShowStorageList) {
      renderStorageLocationView(sortedActiveItems);
    }

    if (shouldShowCompactList) {
      if (isMobileViewport()) {
        sortedActiveItems.forEach((item) => {
          compactTableGrid.append(createMobileCompactTableCard(item));
        });
      } else {
        compactTableGrid.append(createCompactTableBlock(sortedActiveItems));
      }
    }

    sortedActiveItems.forEach((item) => {
      if (shouldShowCardList) {
        inventoryShelfList.append(createInventoryShelfCard(item));
      }

      itemTableBody.append(createActiveRow(item));
      mobileCardList.append(createMobileCard(item));
    });
  }

  if (soldItems.length === 0) {
    soldTableWrap.classList.add("hidden");
    soldEmptyState.classList.remove("hidden");
  } else {
    soldEmptyState.classList.add("hidden");
    soldTableWrap.classList.remove("hidden");
    soldItems.forEach((item) => {
      soldTableBody.append(createSoldRow(item));
    });
  }

  renderSorting();
}

function createActiveRow(item) {
  const row = document.createElement("tr");

  row.innerHTML = `
      <td class="title-cell"></td>
      <td class="profit-cell"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td class="money-cell auxiliary-price-cell"></td>
      <td>
        <details class="row-action-menu">
          <summary aria-label="操作メニュー">⋯</summary>
          <div class="actions">
            <button class="text-button" type="button" data-action="edit">編集</button>
            <button class="text-button" type="button" data-action="view-detail">詳細</button>
            <button class="text-button" type="button" data-action="quick-change-storage">保管場所変更</button>
            <button class="text-button" type="button" data-action="quick-mark-listed">出品中に変更</button>
            <button class="text-button" type="button" data-action="quick-shipping-ready">発送準備へ</button>
            <button class="text-button" type="button" data-action="copy-title">タイトルコピー</button>
            <button class="text-button" type="button" data-action="copy-description">説明文コピー</button>
            <button class="text-button" type="button" data-action="relist">再出品</button>
            <button class="text-button" type="button" data-action="send-to-sorting">仕分けへ送る</button>
            <button class="text-button" type="button" data-action="mark-sold">売却済み</button>
            <button class="danger-button" type="button" data-action="delete">削除</button>
          </div>
        </details>
      </td>
    `;

  row.dataset.id = item.id;
  row.querySelector(".title-cell").textContent = getListingTitle(item) || "-";
  const profit = calculateProfit(item);
  row.children[1].textContent = formatMoney(profit);
  applyProfitLevel(row.children[1], profit);
  const statusBadge = document.createElement("span");
  statusBadge.className = `status-badge ${STATUS_CLASS_NAMES[getItemStatus(item)] || "status-unlisted"}`;
  statusBadge.textContent = formatStatusDisplay(getItemStatus(item));
  row.children[2].append(statusBadge);
  row.children[3].textContent = item.storageLocation || "-";
  row.children[4].textContent = getItemStatus(item) === "要捜索" ? "🔍 要捜索" : "-";
  row.children[4].classList.toggle("search-needed-cell", getItemStatus(item) === "要捜索");
  row.children[5].textContent = getSortingDestinationForItem(item);
  const elapsedDays = calculateElapsedDays(item.listingDate);
  const longInventoryLevel = getItemStatus(item) === "売却済み" ? null : getLongInventoryLevel(elapsedDays);

  if (longInventoryLevel) {
    const warning = document.createElement("span");
    warning.className = `long-inventory-label ${longInventoryLevel.className}`;
    warning.textContent = longInventoryLevel.label;
    row.children[2].append(warning);
  }

  const plannedPrice = parseMoney(item.plannedPrice);
  const minimumPrice = calculateMinimumPrice(item);
  const isProfitLimit = plannedPrice !== "" && plannedPrice <= minimumPrice;
  row.children[6].textContent = formatMoney(plannedPrice);

  if (isProfitLimit) {
    const warning = document.createElement("span");
    warning.className = "profit-limit-label";
    warning.textContent = "⚠ 利益限界";
    row.children[6].classList.add("profit-limit-price");
    row.children[6].append(warning);
  }

  return row;
}

function createItemChunks(sourceItems, chunkSize) {
  const chunks = [];

  for (let index = 0; index < sourceItems.length; index += chunkSize) {
    chunks.push(sourceItems.slice(index, index + chunkSize));
  }

  return chunks;
}

function getCompactListWarning(item) {
  const plannedPrice = parseMoney(item.plannedPrice);
  const minimumPrice = calculateMinimumPrice(item);

  if (plannedPrice !== "" && minimumPrice > 0 && plannedPrice <= minimumPrice) {
    return "利益限界";
  }

  if (minimumPrice <= 0) {
    return "最低価格未設定";
  }

  return "";
}

function createCompactTableBlock(sourceItems) {
  const wrap = document.createElement("div");
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  wrap.className = "compact-table-wrap";
  table.innerHTML = `
    <thead>
      <tr>
        <th class="compact-photo-column">写真</th>
        <th>商品名 / 商品ID</th>
        <th>保管場所</th>
        <th>状態</th>
        <th>売却先</th>
        <th>予定買取額</th>
        <th>利益</th>
        <th>商品画像</th>
        <th>参考画像</th>
        <th>操作</th>
      </tr>
    </thead>
  `;

  sourceItems.forEach((item) => {
    tbody.append(createCompactListRow(item));
  });

  table.append(tbody);
  wrap.append(table);
  return wrap;
}

function createCompactListRow(item) {
  const row = document.createElement("tr");
  row.className = "compact-list-row";
  row.dataset.id = item.id;
  row.tabIndex = 0;
  row.setAttribute("role", "button");
  row.setAttribute("aria-label", `${getListingTitle(item) || "商品"}の詳細を開く`);
  row.innerHTML = `
    <td class="compact-photo-cell"></td>
    <td class="title-cell">
      <strong></strong>
      <small></small>
    </td>
    <td class="compact-storage-cell"></td>
    <td class="compact-status-cell"></td>
    <td class="compact-destination-cell"></td>
    <td class="money-cell compact-planned-cell"></td>
    <td class="profit-cell compact-profit-cell"></td>
    <td class="compact-image-count-cell compact-product-image-cell"></td>
    <td class="compact-image-count-cell compact-reference-image-cell"></td>
    <td class="compact-action-cell">
      <details class="row-action-menu compact-list-actions">
        <summary aria-label="操作メニュー">⋯</summary>
        <div class="actions">
          <button class="text-button" type="button" data-action="copy-item-code">商品IDコピー</button>
          <button class="text-button" type="button" data-action="change-photo">📷 商品画像追加</button>
          <button class="text-button" type="button" data-action="add-reference-image">📚 参考画像追加</button>
          <button class="text-button" type="button" data-action="remove-photo">📷 商品画像削除</button>
          <button class="text-button" type="button" data-action="view-detail">詳細</button>
          <button class="text-button" type="button" data-action="edit">編集</button>
          <button class="text-button" type="button" data-action="quick-change-storage">保管場所変更</button>
          <button class="text-button" type="button" data-action="quick-mark-listed">出品中に変更</button>
          <button class="text-button" type="button" data-action="quick-shipping-ready">発送準備へ</button>
          <button class="text-button" type="button" data-action="mark-sold">売却済み</button>
          <button class="text-button" type="button" data-action="relist">再出品</button>
          <button class="danger-button" type="button" data-action="delete">削除</button>
        </div>
      </details>
    </td>
  `;
  row.querySelector(".compact-photo-cell").append(createListThumbnail(item, { compact: true }));
  row.querySelector(".title-cell strong").textContent = getListingTitle(item) || "-";
  row.querySelector(".title-cell small").textContent = getItemCode(item) || "ID未設定";
  row.querySelector(".compact-storage-cell").textContent = item.storageLocation || "未設定";

  const statusBadge = document.createElement("span");
  statusBadge.className = `status-badge ${STATUS_CLASS_NAMES[getItemStatus(item)] || "status-unlisted"}`;
  statusBadge.textContent = formatStatusDisplay(getItemStatus(item));
  row.querySelector(".compact-status-cell").append(statusBadge);

  row.querySelector(".compact-destination-cell").textContent = getSortingDestinationForItem(item);
  row.querySelector(".compact-planned-cell").textContent = getHighestOfferForItem(item);

  const profit = calculateProfit(item);
  const profitCell = row.querySelector(".compact-profit-cell");
  profitCell.textContent = profit === "" ? "未入力" : formatMoney(profit);
  profitCell.classList.toggle("profit-unset", profit === "");
  applyProfitLevel(profitCell, profit);

  const imageSummary = getDisplayImageSummary(item);
  const productImageCell = row.querySelector(".compact-product-image-cell");
  const referenceImageCell = row.querySelector(".compact-reference-image-cell");
  productImageCell.textContent = `📷 ${imageSummary.productCount}`;
  referenceImageCell.textContent = `📚 ${imageSummary.referenceCount}`;
  productImageCell.classList.toggle("image-badge-empty", imageSummary.productCount === 0);
  referenceImageCell.classList.toggle("image-badge-empty", imageSummary.referenceCount === 0);

  return row;
}

function getStorageGroupName(item) {
  return String(item.storageLocation || "").trim() || "未設定";
}

function getStorageLocationGroups(sourceItems) {
  const groups = new Map();

  sourceItems.forEach((item) => {
    const name = getStorageGroupName(item);
    const group = groups.get(name) || { name, items: [] };
    group.items.push(item);
    groups.set(name, group);
  });

  return [...groups.values()].sort((first, second) => {
    return second.items.length - first.items.length || first.name.localeCompare(second.name, "ja");
  });
}

function getStorageQuickGroups(sourceItems, limit = 16) {
  return getStorageLocationGroups(sourceItems).slice(0, limit);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderStorageQuickFilter(container, groups, activeValue, { scope = "inventory" } = {}) {
  if (!container) {
    return;
  }

  container.innerHTML = "";
  const title = document.createElement("span");
  title.className = "storage-quick-filter-title";
  title.textContent = "📦 保管場所";
  container.append(title);

  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.className = "storage-quick-filter-chip";
  allButton.classList.toggle("active", !activeValue);
  allButton.dataset.storageQuickScope = scope;
  allButton.dataset.storageQuickValue = "";
  allButton.textContent = "すべて";
  container.append(allButton);

  groups.forEach((group) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "storage-quick-filter-chip";
    button.classList.toggle("active", group.name === activeValue);
    button.dataset.storageQuickScope = scope;
    button.dataset.storageQuickValue = group.name;
    button.innerHTML = `<span>${escapeHtml(group.name)}</span><b>${group.items.length}</b>`;
    container.append(button);
  });
}

function updateActiveFilterBar(bar, labels = []) {
  if (!bar) {
    return;
  }

  const activeLabels = labels.filter(Boolean);
  bar.classList.toggle("hidden", activeLabels.length === 0);

  if (activeLabels.length === 0) {
    bar.textContent = "";
    return;
  }

  bar.innerHTML = `
    <span>${activeLabels.map(escapeHtml).join(" / ")}</span>
    <button class="text-button active-filter-clear" type="button" data-action="clear-active-filter">×解除</button>
  `;
}

function createStorageItemRow(item) {
  const row = document.createElement("tr");
  const profit = calculateProfit(item);
  row.dataset.id = item.id;
  row.innerHTML = `
    <td class="title-cell"></td>
    <td class="money-cell"></td>
    <td class="profit-cell"></td>
    <td></td>
    <td></td>
    <td>
      <details class="row-action-menu">
        <summary aria-label="操作メニュー">⋯</summary>
        <div class="actions">
          <button class="text-button" type="button" data-action="view-detail">詳細</button>
          <button class="text-button" type="button" data-action="edit">編集</button>
          <button class="text-button" type="button" data-action="quick-change-storage">保管場所変更</button>
          <button class="text-button" type="button" data-action="quick-mark-listed">出品中に変更</button>
          <button class="text-button" type="button" data-action="quick-shipping-ready">発送準備へ</button>
          <button class="text-button" type="button" data-action="copy-title">タイトルコピー</button>
          <button class="text-button" type="button" data-action="copy-description">説明コピー</button>
          <button class="text-button" type="button" data-action="change-photo">📷 商品画像追加</button>
          <button class="text-button" type="button" data-action="add-reference-image">📚 参考画像追加</button>
          <button class="text-button" type="button" data-action="remove-photo">📷 商品画像削除</button>
          <button class="text-button" type="button" data-action="relist">再出品</button>
          <button class="text-button" type="button" data-action="send-to-sorting">仕分けへ</button>
          <button class="danger-button" type="button" data-action="delete">削除</button>
        </div>
      </details>
    </td>
  `;
  row.children[0].textContent = getListingTitle(item) || "-";
  row.children[0].append(document.createElement("br"));
  appendImageStateBadges(row.children[0], item);
  row.children[1].textContent = formatMoney(profit);
  applyProfitLevel(row.children[1], profit);
  row.children[2].textContent = formatStatusDisplay(getItemStatus(item));
  row.children[3].textContent = formatMoney(parseMoney(item.plannedPrice));
  row.children[4].textContent = getSortingDestinationForItem(item);
  return row;
}

function renderStorageLocationView(sourceItems) {
  storageLocationView.innerHTML = "";
  const groups = getStorageLocationGroups(sourceItems);

  if (groups.length === 0) {
    storageLocationView.innerHTML = "<p class=\"storage-view-empty\">保管場所に該当する商品がありません。</p>";
    selectedStorageGroup = "";
    return;
  }

  if (selectedStorageGroup && !groups.some((group) => group.name === selectedStorageGroup)) {
    selectedStorageGroup = "";
  }

  const groupList = document.createElement("div");
  groupList.className = "storage-group-list";
  groups.forEach((group) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "storage-group-button";
    button.classList.toggle("active", group.name === selectedStorageGroup);
    button.dataset.storageGroup = group.name;
    button.innerHTML = `<strong>📦 ${group.name}</strong><span>${group.items.length}件</span>`;
    groupList.append(button);
  });
  storageLocationView.append(groupList);

  const selectedGroup = groups.find((group) => group.name === selectedStorageGroup);

  if (!selectedGroup) {
    const prompt = document.createElement("p");
    prompt.className = "storage-view-empty";
    prompt.textContent = "保管場所を押すと、その場所の商品だけを表示します。";
    storageLocationView.append(prompt);
    return;
  }

  const detail = document.createElement("section");
  const tableWrap = document.createElement("div");
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  detail.className = "storage-group-detail";
  detail.innerHTML = `<h3>📦 ${selectedGroup.name} <span>${selectedGroup.items.length}件</span></h3>`;
  tableWrap.className = "storage-group-table-wrap";
  table.innerHTML = `
    <thead>
      <tr>
        <th>商品名</th>
        <th>💴 見込み利益</th>
        <th>📤 出品状態</th>
        <th>価格</th>
        <th>売却先</th>
        <th>操作</th>
      </tr>
    </thead>
  `;
  selectedGroup.items.forEach((item) => {
    tbody.append(createStorageItemRow(item));
  });
  table.append(tbody);
  tableWrap.append(table);
  detail.append(tableWrap);
  storageLocationView.append(detail);
}

function createMobileCompactTableCard(item) {
  const card = document.createElement("article");

  card.className = "mobile-compact-table-card";
  card.dataset.id = item.id;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `${getListingTitle(item) || "商品"}の詳細を開く`);
  card.innerHTML = `
    <div class="mobile-compact-thumb"></div>
    <div class="mobile-compact-content">
      <strong class="mobile-compact-title"></strong>
      <span class="mobile-compact-storage"></span>
      <span class="mobile-compact-destination"></span>
      <b class="mobile-compact-offer"></b>
    </div>
    <div class="quick-edit-slot"></div>
    <details class="row-action-menu mobile-compact-actions">
      <summary aria-label="操作メニュー">⋯</summary>
      <div class="actions">
        <button class="text-button" type="button" data-action="copy-item-code">商品IDコピー</button>
        <button class="text-button" type="button" data-action="change-photo">📷 商品画像追加</button>
        <button class="text-button" type="button" data-action="add-reference-image">📚 参考画像追加</button>
        <button class="text-button" type="button" data-action="remove-photo">📷 商品画像削除</button>
        <button class="text-button" type="button" data-action="view-detail">詳細</button>
        <button class="text-button" type="button" data-action="edit">編集</button>
        <button class="text-button" type="button" data-action="quick-change-storage">保管場所変更</button>
        <button class="text-button" type="button" data-action="quick-mark-listed">出品中に変更</button>
        <button class="text-button" type="button" data-action="quick-shipping-ready">発送準備へ</button>
        <button class="text-button" type="button" data-action="mark-sold">売却済み</button>
        <button class="text-button" type="button" data-action="relist">再出品</button>
        <button class="danger-button" type="button" data-action="delete">削除</button>
      </div>
    </details>
  `;

  card.querySelector(".mobile-compact-thumb").append(createListThumbnail(item, { compact: true }));
  card.querySelector(".mobile-compact-title").textContent = getListingTitle(item) || "-";
  card.querySelector(".mobile-compact-storage").textContent = `📦 ${item.storageLocation || "未設定"}`;
  card.querySelector(".mobile-compact-destination").textContent = `🏪 ${getSortingDestinationForItem(item)}`;
  appendImageStateBadges(card.querySelector(".mobile-compact-content"), item);
  const profit = calculateProfit(item);
  const profitField = card.querySelector(".mobile-compact-offer");
  profitField.textContent = profit === "" ? "利益 未入力" : `利益 ${formatMoney(profit)}`;
  profitField.classList.toggle("profit-unset", profit === "");
  applyProfitLevel(profitField, profit);
  card.querySelector(".quick-edit-slot").append(createQuickEditBar("items"));

  return card;
}

function createInventoryShelfCard(item) {
  const card = document.createElement("article");
  const profit = calculateProfit(item);
  const warningText = getCompactListWarning(item) || (getItemStatus(item) === "要捜索" ? "要捜索" : "");

  card.className = "inventory-shelf-card";
  card.dataset.id = item.id;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `${getListingTitle(item) || "商品"}の詳細を開く`);
  card.innerHTML = `
    <div class="shelf-card-top">
      <strong class="shelf-card-title"></strong>
      <details class="row-action-menu">
        <summary aria-label="操作メニュー">⋯</summary>
        <div class="actions">
          <button class="text-button" type="button" data-action="edit">編集</button>
          <button class="text-button" type="button" data-action="view-detail">詳細</button>
          <button class="text-button" type="button" data-action="quick-change-storage">保管場所変更</button>
          <button class="text-button" type="button" data-action="quick-mark-listed">出品中に変更</button>
          <button class="text-button" type="button" data-action="quick-shipping-ready">発送準備へ</button>
          <button class="text-button" type="button" data-action="copy-title">タイトルコピー</button>
          <button class="text-button" type="button" data-action="copy-description">説明文コピー</button>
          <button class="text-button" type="button" data-action="copy-item-code">商品IDコピー</button>
          <button class="text-button" type="button" data-action="change-photo">📷 商品画像追加</button>
          <button class="text-button" type="button" data-action="add-reference-image">📚 参考画像追加</button>
          <button class="text-button" type="button" data-action="remove-photo">📷 商品画像削除</button>
          <button class="text-button" type="button" data-action="relist">再出品</button>
          <button class="text-button" type="button" data-action="send-to-sorting">仕分けへ送る</button>
          <button class="text-button" type="button" data-action="mark-sold">売却済み</button>
          <button class="danger-button" type="button" data-action="delete">削除</button>
        </div>
      </details>
    </div>
    <div class="shelf-action-state">
      <span class="status-badge"></span>
    </div>
    <div class="shelf-card-meta">
      <span class="shelf-location shelf-priority-storage"></span>
    </div>
    <div class="shelf-warning-row">
      <span class="search-needed-label"></span>
    </div>
    <div class="shelf-card-meta shelf-secondary-meta">
      <span class="profit-cell shelf-profit" data-field="profit"></span>
      <span class="destination-label"></span>
    </div>
    <div class="quick-edit-slot"></div>
    <dl class="shelf-card-money shelf-card-aux shelf-priority-small">
      <div><dt>価格</dt><dd data-field="plannedPrice"></dd></div>
    </dl>
  `;

  card.querySelector(".shelf-card-title").textContent = getListingTitle(item) || "-";
  const statusBadge = card.querySelector(".status-badge");
  statusBadge.textContent = formatStatusDisplay(getItemStatus(item));
  statusBadge.classList.add(STATUS_CLASS_NAMES[getItemStatus(item)] || "status-unlisted");
  card.querySelector(".shelf-location").textContent = item.storageLocation || "-";
  const searchNeededLabel = card.querySelector(".search-needed-label");
  searchNeededLabel.textContent = warningText;
  searchNeededLabel.classList.toggle("hidden", !warningText);
  searchNeededLabel.classList.toggle("search-needed-cell", Boolean(warningText));
  card.querySelector(".destination-label").textContent = `売却先 ${getSortingDestinationForItem(item)}`;
  appendImageStateBadges(card.querySelector(".shelf-secondary-meta"), item);
  card.querySelector('[data-field="plannedPrice"]').textContent = formatMoney(parseMoney(item.plannedPrice));
  const profitField = card.querySelector('[data-field="profit"]');
  profitField.textContent = formatMoney(profit);
  applyProfitLevel(profitField, profit);
  card.querySelector(".quick-edit-slot").append(createQuickEditBar("items"));

  return card;
}

function createSoldRow(item) {
  const row = document.createElement("tr");

  row.innerHTML = `
      <td class="title-cell"></td>
      <td></td>
      <td></td>
      <td></td>
      <td class="money-cell"></td>
      <td class="money-cell"></td>
      <td class="money-cell"></td>
      <td class="money-cell"></td>
      <td class="profit-cell"></td>
      <td class="memo-cell"></td>
      <td>
        <div class="actions">
          <button class="text-button" type="button" data-action="edit">編集</button>
          <button class="text-button" type="button" data-action="view-detail">詳細</button>
          <button class="text-button" type="button" data-action="view-description">説明を見る</button>
          <button class="text-button" type="button" data-action="copy-title">タイトルコピー</button>
          <button class="text-button" type="button" data-action="copy-description">説明文コピー</button>
          <button class="danger-button" type="button" data-action="delete">削除</button>
        </div>
      </td>
    `;

  row.dataset.id = item.id;
  row.querySelector(".title-cell").textContent = getListingTitle(item) || "-";
  row.children[1].textContent = item.category;
  row.children[2].textContent = item.storageLocation || "-";
  row.children[3].textContent = item.soldDate || "-";
  row.children[4].textContent = formatMoney(parseMoney(item.actualSalePrice));
  row.children[5].textContent = formatMoney(parseMoney(item.purchaseCost));
  row.children[6].textContent = formatMoney(parseMoney(item.actualShippingCost));
  row.children[7].textContent = formatMoney(calculateActualFee(item));
  const actualProfit = calculateActualProfit(item);
  row.children[8].textContent = formatMoney(actualProfit);
  row.children[8].classList.toggle("profit-positive", actualProfit !== "" && actualProfit >= 0);
  row.children[8].classList.toggle("profit-negative", actualProfit !== "" && actualProfit < 0);
  row.querySelector(".memo-cell").textContent = item.memo || "-";

  return row;
}

function appendThumbnail(row, item) {
  if (item.imageData) {
    const thumbnail = document.createElement("img");
    thumbnail.className = "item-thumb";
    thumbnail.src = item.imageData;
    thumbnail.alt = `${getListingTitle(item)}の画像`;
    row.querySelector(".thumb-cell").append(thumbnail);
  } else {
    const placeholder = document.createElement("span");
    placeholder.className = "thumb-placeholder";
    placeholder.textContent = "なし";
    row.querySelector(".thumb-cell").append(placeholder);
  }
}

function createMobileCard(item) {
  const card = document.createElement("article");
  card.className = "mobile-item-card";
  card.dataset.id = item.id;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `${getListingTitle(item) || "商品"}の詳細を開く`);
  const profit = calculateProfit(item);
  const storageText = item.storageLocation || "未設定";
  const linkedSortingItem = sortingItems.find((sortingItem) => sortingItem.sourceItemId === item.id);
  const destinationText = getSortingDestinationForItem(item) || "-";
  const shippingText = item.shippingStatus || linkedSortingItem?.shippingStatus || "未仕分け";
  const imageSummary = getDisplayImageSummary(item);

  card.innerHTML = `
    <div class="mobile-card-layout">
      <div class="mobile-card-thumb"></div>
      <div class="mobile-card-content">
        <div class="mobile-card-title-wrap">
          <h3 class="mobile-card-name"></h3>
        </div>
        <div class="mobile-card-row mobile-card-row-main">
          <span class="mobile-card-storage"></span>
          <span class="mobile-card-shipping"></span>
        </div>
        <div class="mobile-card-row mobile-card-row-state">
          <span class="mobile-card-destination"></span>
        </div>
        <div class="mobile-card-row mobile-card-row-media">
          <span class="mobile-card-image-count"></span>
          <span class="mobile-card-reference-count"></span>
          <span class="mobile-card-memo-state"></span>
        </div>
      </div>
      <div class="mobile-card-side">
        <strong class="mobile-card-profit-value" data-field="profit"></strong>
        <details class="row-action-menu mobile-more-actions">
          <summary aria-label="その他の操作">…</summary>
          <div class="actions mobile-more-actions-panel">
            <button class="text-button" type="button" data-action="quick-change-storage">保管場所変更</button>
            <button class="text-button" type="button" data-action="quick-mark-listed">出品中に変更</button>
            <button class="text-button" type="button" data-action="quick-shipping-ready">発送準備へ</button>
            <button class="text-button" type="button" data-action="mark-sold">売却済み</button>
            <button class="text-button" type="button" data-action="copy-title">タイトルコピー</button>
            <button class="text-button" type="button" data-action="copy-description">説明コピー</button>
            <button class="text-button" type="button" data-action="copy-item-code">商品IDコピー</button>
            <button class="text-button" type="button" data-action="change-photo">📷 商品画像追加</button>
            <button class="text-button" type="button" data-action="add-reference-image">📚 参考画像追加</button>
            <button class="text-button" type="button" data-action="remove-photo">📷 商品画像削除</button>
            <button class="text-button" type="button" data-action="relist">再出品</button>
            <button class="text-button" type="button" data-action="send-to-sorting">仕分けへ</button>
            <button class="danger-button" type="button" data-action="delete">削除</button>
          </div>
        </details>
      </div>
    </div>
    <div class="mobile-card-primary-actions">
      <button class="text-button" type="button" data-action="view-detail">詳細</button>
      <button class="text-button" type="button" data-action="edit">編集</button>
    </div>
    <div class="quick-edit-slot"></div>
  `;

  card.querySelector(".mobile-card-thumb").append(createListThumbnail(item, { compact: true }));
  card.querySelector(".mobile-card-name").textContent = getListingTitle(item) || "商品名未設定";
  const mobileProfit = profit;
  const mobileProfitField = card.querySelector(".mobile-card-profit-value");
  mobileProfitField.textContent = mobileProfit === "" ? "-" : formatMoney(mobileProfit);
  mobileProfitField.classList.toggle("profit-unset", mobileProfit === "");
  applyProfitLevel(mobileProfitField, mobileProfit);
  const storageField = card.querySelector(".mobile-card-storage");
  storageField.textContent = `📦${storageText}`;
  storageField.classList.toggle("muted-empty", !item.storageLocation);
  card.querySelector(".mobile-card-image-count").textContent = `📷${imageSummary.productCount}`;
  card.querySelector(".mobile-card-image-count").classList.toggle("image-badge-empty", imageSummary.productCount === 0);
  card.querySelector(".mobile-card-reference-count").textContent = `📚${imageSummary.referenceCount}`;
  card.querySelector(".mobile-card-reference-count").classList.toggle("image-badge-empty", imageSummary.referenceCount === 0);
  card.querySelector(".mobile-card-destination").textContent = `🏪${destinationText}`;
  card.querySelector(".mobile-card-shipping").textContent = `🚚${shortenShippingStatus(shippingText)}`;
  card.querySelector(".mobile-card-shipping").classList.toggle("muted-empty", !shippingText);
  card.querySelector(".mobile-card-memo-state").textContent = item.memo ? "📝あり" : "📝なし";
  card.querySelector(".mobile-card-memo-state").classList.toggle("muted-empty", !item.memo);
  card.querySelector(".quick-edit-slot").append(createQuickEditBar("items"));

  return card;
}

function formatByteSize(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) {
    return "0KB";
  }

  if (bytes >= 1024 * 1024) {
    return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
  }

  return `${Math.max(1, Math.round(bytes / 1024))}KB`;
}

function getLocalStorageUsageSize() {
  return [
    STORAGE_KEY,
    SETTINGS_KEY,
    TEMPLATES_KEY,
    SORTING_STORAGE_KEY,
  ].reduce((total, key) => total + String(localStorage.getItem(key) || "").length, 0);
}

function countUsedValues(fieldName) {
  return new Set(
    items
      .map((item) => String(item[fieldName] || "").trim())
      .filter(Boolean),
  ).size;
}

function getTotalTemplateUsage() {
  return descriptionTemplates.reduce((total, template) => total + countTemplateUsage(template), 0);
}

function getTotalShippingUsage() {
  return settings.shippingMethods.reduce((total, method) => total + countItemsByField("shippingMethod", method.name), 0);
}

function getUnusedSettingValues(values, fieldName) {
  return values.filter((value) => countItemsByField(fieldName, value) === 0);
}

function renderUnusedSettingInsight(target, values, fieldName, label) {
  const unusedValues = getUnusedSettingValues(values, fieldName);

  if (!target) {
    return;
  }

  if (unusedValues.length === 0) {
    target.textContent = `${label}はすべて使用中です`;
    target.classList.remove("settings-warning-insight");
    return;
  }

  target.textContent = `整理候補：${unusedValues.slice(0, 4).join(" / ")}${unusedValues.length > 4 ? " ほか" : ""}`;
  target.classList.add("settings-warning-insight");
}

function getStorageProfitGroups() {
  const groups = new Map();

  items.forEach((item) => {
    const name = item.storageLocation || "未設定";
    const current = groups.get(name) || { name, profit: 0, count: 0 };
    const actualProfit = getItemStatus(item) === "売却済み" ? calculateActualProfit(item) : "";
    current.profit += actualProfit === "" ? 0 : actualProfit;
    current.count += 1;
    groups.set(name, current);
  });

  return [...groups.values()].sort((first, second) => second.profit - first.profit || second.count - first.count);
}

function renderStorageProfitInsight() {
  const groups = getStorageProfitGroups().slice(0, 3);

  if (!storageProfitInsight) {
    return;
  }

  if (groups.length === 0) {
    storageProfitInsight.textContent = "保管場所の利益データはまだありません";
    return;
  }

  storageProfitInsight.innerHTML = groups
    .map((group) => `<span>${group.name} <b>総利益 ${formatMoney(group.profit)}</b></span>`)
    .join("");
}

function renderShippingUsageInsight() {
  const groups = new Map();

  settings.shippingMethods.forEach((method) => {
    const groupName = getShippingSettingsGroupName(method.name);
    const current = groups.get(groupName) || { name: groupName, count: 0, costTotal: 0, methodCount: 0 };
    const usage = countItemsByField("shippingMethod", method.name);
    current.count += usage;
    current.costTotal += parseMoney(method.cost) || 0;
    current.methodCount += 1;
    groups.set(groupName, current);
  });

  const groupList = [...groups.values()].filter((group) => group.methodCount > 0);

  if (!shippingUsageInsight) {
    return;
  }

  if (groupList.length === 0) {
    shippingUsageInsight.textContent = "配送設定はまだありません";
    return;
  }

  shippingUsageInsight.innerHTML = groupList
    .map((group) => `<span>${group.name} <b>平均送料 ${formatMoney(Math.round(group.costTotal / group.methodCount))} / 使用 ${group.count}回</b></span>`)
    .join("");
}

function renderSettingsOperationalSummary() {
  settingsSummaryItems.textContent = `${items.length}件`;
  settingsSummaryCategories.textContent = `${settings.categories.length}件`;
  settingsSummaryStorage.textContent = `${settings.storageLocations.length}件`;
  settingsSummaryTemplates.textContent = `${descriptionTemplates.length}件`;
  settingsSummarySync.textContent = formatCloudSyncTime(localStorage.getItem(CLOUD_LAST_SYNC_KEY)).replace("最終同期 ", "");
  settingsSummaryStorageSize.textContent = formatByteSize(getLocalStorageUsageSize());
  categorySettingsUsageCount.textContent = `使用中 ${countUsedValues("category")}件`;
  storageSettingsUsageCount.textContent = `使用中 ${countUsedValues("storageLocation")}件`;
  shippingSettingsUsageCount.textContent = `利用 ${getTotalShippingUsage()}回`;
  templateSettingsUsageCount.textContent = `利用 ${getTotalTemplateUsage()}回`;
  renderUnusedSettingInsight(categoryUnusedInsight, settings.categories, "category", "カテゴリ");
  renderStorageProfitInsight();
  renderShippingUsageInsight();
}

function renderSettings() {
  categorySettingsList.innerHTML = "";
  storageSettingsList.innerHTML = "";
  shippingSettingsList.innerHTML = "";
  appraisalSettingsList.innerHTML = "";
  templateSettingsList.innerHTML = "";
  updateCloudSyncStatusTime();
  renderSettingsOperationalSummary();
  categorySettingsCount.textContent = `${settings.categories.length}件`;
  storageSettingsCount.textContent = `${settings.storageLocations.length}件`;
  shippingSettingsCount.textContent = `${settings.shippingMethods.length}件`;
  if (appraisalSettingsCount) {
    appraisalSettingsCount.textContent = `${getAppraisalSources().length}件`;
  }
  templateSettingsCount.textContent = `${descriptionTemplates.length}件`;

  settings.categories.forEach((category, index) => {
    categorySettingsList.append(createCategorySettingsRow(category, index));
  });

  settings.storageLocations.forEach((location, index) => {
    storageSettingsList.append(createStorageSettingsRow(location, index));
  });

  renderGroupedShippingSettings();

  getAppraisalSources().forEach((source, index) => {
    appraisalSettingsList.append(createAppraisalSettingsRow(source, index));
  });

  descriptionTemplates.forEach((template, index) => {
    templateSettingsList.append(createTemplateSettingsRow(template, index));
  });

  renderBackupList();
  isSettingsDirty = false;
  updateSettingsSaveButtonVisibility();
}

function countItemsByField(fieldName, value) {
  return items.filter((item) => String(item[fieldName] || "") === String(value || "")).length;
}

function countTemplateUsage(template) {
  const templateContent = String(template.content || "").trim();

  if (!templateContent) {
    return 0;
  }

  return items.filter((item) => String(item.description || "").trim() === templateContent).length;
}

function getTemplateLastUsedLabel(template) {
  const templateContent = String(template.content || "").trim();

  if (!templateContent) {
    return "最終利用 -";
  }

  const lastUsedTime = items
    .filter((item) => String(item.description || "").trim() === templateContent)
    .map((item) => new Date(item.updatedAt || item.createdAt || "").getTime())
    .filter((time) => Number.isFinite(time))
    .sort((first, second) => second - first)[0];

  if (!lastUsedTime) {
    return "最終利用 -";
  }

  const elapsedDays = Math.floor((Date.now() - lastUsedTime) / 86400000);

  if (elapsedDays <= 0) {
    return "最終利用 今日";
  }

  return `最終利用 ${elapsedDays}日前`;
}

function getShippingSettingsGroupName(methodName) {
  if (/ネコポス|宅急便|メルカリ|コンパクト/.test(methodName)) {
    return "メルカリ便";
  }

  if (/ゆう|郵便|定形外/.test(methodName)) {
    return "郵便";
  }

  return "その他";
}

function renderGroupedShippingSettings() {
  const groups = new Map();

  settings.shippingMethods.forEach((method, index) => {
    const groupName = getShippingSettingsGroupName(method.name);
    const group = groups.get(groupName) || [];
    group.push({ method, index });
    groups.set(groupName, group);
  });

  ["メルカリ便", "郵便", "その他"].forEach((groupName) => {
    const groupItems = groups.get(groupName) || [];

    if (groupItems.length === 0) {
      return;
    }

    const group = document.createElement("details");
    const summary = document.createElement("summary");
    const list = document.createElement("div");

    group.className = "shipping-settings-group app-accordion";
    summary.innerHTML = `<span>${groupName}</span><small>${groupItems.length}件</small>`;
    list.className = "shipping-settings-group-list";
    groupItems.forEach(({ method, index }) => {
      list.append(createShippingSettingsRow(method, index));
    });
    group.append(summary, list);
    shippingSettingsList.append(group);
  });
}

function createMasterFieldControl(field) {
  const attributes = [
    `data-field="${field.name}"`,
    `aria-label="${field.label}"`,
  ];

  if (field.inputMode) {
    attributes.push(`inputmode="${field.inputMode}"`);
  }

  if (field.type === "number") {
    return `<input type="number" min="0" step="1" ${attributes.join(" ")}>`;
  }

  if (field.type === "textarea") {
    return `<textarea rows="${field.rows || 4}" ${attributes.join(" ")}></textarea>`;
  }

  return `<input type="text" ${attributes.join(" ")}>`;
}

function getMasterSettingsDefinition(masterKey) {
  return MASTER_SETTINGS_DEFINITIONS[masterKey] || null;
}

function createMasterSettingsRow(masterKey, values, index, options = {}) {
  const definition = getMasterSettingsDefinition(masterKey);
  const row = document.createElement("div");
  const fields = definition.fields || [];
  const primaryField = fields[0];
  const secondaryFields = fields.slice(1);
  const contentClass = definition.contentClass || "";
  const usageText = options.usageText || "";

  row.className = `master-setting-row ${definition.rowClass}`;
  row.dataset.index = String(index);
  row.dataset.master = masterKey;

  Object.entries(options.dataset || {}).forEach(([key, value]) => {
    row.dataset[key] = value;
  });

  row.innerHTML = `
    <button class="master-drag-handle" type="button" draggable="false" data-action="drag-handle" aria-label="並び替え位置" title="並び替え位置">≡</button>
    <div class="master-setting-fields ${contentClass}">
      <div class="settings-row-main">
        ${primaryField ? createMasterFieldControl(primaryField) : ""}
        ${usageText ? `<span class="settings-usage-count">${usageText}</span>` : ""}
      </div>
      ${secondaryFields.map((field) => createMasterFieldControl(field)).join("")}
    </div>
    <button class="ghost-button compact-row-button" type="button" data-action="move-up" aria-label="上へ">↑</button>
    <button class="ghost-button compact-row-button" type="button" data-action="move-down" aria-label="下へ">↓</button>
    <button class="danger-button" type="button" data-action="${definition.removeAction}">削除</button>
  `;

  Object.entries(values || {}).forEach(([fieldName, value]) => {
    const field = row.querySelector(`[data-field="${fieldName}"]`);
    if (field) {
      field.value = value;
    }
  });

  return row;
}

function createCategorySettingsRow(category, index) {
  return createMasterSettingsRow("categories", { name: category }, index, {
    usageText: `${countItemsByField("category", category)}件`,
  });
}

function createStorageSettingsRow(location, index) {
  return createMasterSettingsRow("storageLocations", { name: location }, index, {
    usageText: `${countItemsByField("storageLocation", location)}件`,
  });
}

function createShippingSettingsRow(method, index) {
  return createMasterSettingsRow("shippingMethods", { name: method.name, cost: method.cost }, index, {
    usageText: `利用回数 ${countItemsByField("shippingMethod", method.name)}回`,
  });
}

function createAppraisalSettingsRow(source, index) {
  return createMasterSettingsRow("appraisalSources", { name: source.name }, index, {
    dataset: {
      id: source.id,
      field: source.field || `appraisal_${source.id}`,
    },
  });
}

function createTemplateSettingsRow(template, index) {
  return createMasterSettingsRow("templates", { name: template.name, content: template.content }, index, {
    usageText: `利用 ${countTemplateUsage(template)}回 / ${getTemplateLastUsedLabel(template)}`,
    dataset: {
      id: template.id,
      categoryHint: template.categoryHint || "",
    },
  });
}

function collectSettingsFromForm() {
  const categories = [...categorySettingsList.querySelectorAll(".category-setting-row")]
    .map((row) => row.querySelector('[data-field="name"]').value.trim())
    .filter(Boolean);
  const storageLocations = [...storageSettingsList.querySelectorAll(".storage-setting-row")]
    .map((row) => row.querySelector('[data-field="name"]').value.trim())
    .filter(Boolean);
  const shippingMethods = [...shippingSettingsList.querySelectorAll(".shipping-setting-row")]
    .map((row) => ({
      name: row.querySelector('[data-field="name"]').value.trim(),
      cost: parseMoney(row.querySelector('[data-field="cost"]').value) || 0,
    }))
    .filter((method) => method.name);
  const appraisalSources = [...appraisalSettingsList.querySelectorAll(".appraisal-setting-row")]
    .map((row) => {
      const fallbackId = row.dataset.id || createId();
      return {
        id: fallbackId,
        field: row.dataset.field || `appraisal_${fallbackId}`,
        name: row.querySelector('[data-field="name"]').value.trim(),
      };
    })
    .filter((source) => source.name);

  return normalizeSettings({
    categories,
    storageLocations,
    shippingMethods,
    appraisalSources,
  });
}

function collectTemplatesFromForm() {
  return normalizeTemplates(
    [...templateSettingsList.querySelectorAll(".template-setting-row")].map((row) => {
      const id = row.dataset.id || createId();
      const existingTemplate = descriptionTemplates.find((template) => template.id === id);
      const contentInput = row.querySelector('[data-field="content"]');

      return {
        id,
        name: row.querySelector('[data-field="name"]').value,
        content: contentInput ? contentInput.value : existingTemplate?.content || "",
        categoryHint: row.dataset.categoryHint || "",
      };
    }),
    [],
  );
}

function saveSettingsFromForm() {
  settings = collectSettingsFromForm();
  descriptionTemplates = collectTemplatesFromForm();
  saveSettings();
  saveTemplates();
  refreshCategoryOptions(categoryInput.value);
  refreshStorageLocationOptions(storageLocationInput.value);
  refreshShippingMethodOptions(shippingMethodInput.value);
  refreshTemplateOptions();
  refreshSortingDestinationOptions(sortingDestinationInput.value);
  renderSortingAppraisalFields(getSortingAppraisalValuesFromInputs());
  renderSettings();
  renderSorting();
  showSuccessMessage("✔ 保存しました");
}

function hasSettingsFormChanges() {
  return JSON.stringify(collectSettingsFromForm()) !== JSON.stringify(settings)
    || JSON.stringify(collectTemplatesFromForm()) !== JSON.stringify(descriptionTemplates);
}

function updateSettingsSaveButtonVisibility() {
  saveSettingsButton.classList.toggle("hidden", !(isSettingsDirty && hasSettingsFormChanges()));
}

function markSettingsDirty() {
  isSettingsDirty = true;
  updateSettingsSaveButtonVisibility();
}

function addCategoryFromForm() {
  const name = newCategoryNameInput.value.trim();

  if (!name) {
    showErrorMessage("カテゴリ名を入力してください");
    return;
  }

  categorySettingsList.append(createCategorySettingsRow(name, categorySettingsList.children.length));
  newCategoryNameInput.value = "";
  categoryAddRow.classList.add("hidden");
  toggleCategoryAddButton.textContent = "カテゴリを追加";
  markSettingsDirty();
}

function addStorageFromForm() {
  const name = newStorageNameInput.value.trim();

  if (!name) {
    showErrorMessage("保管場所名を入力してください");
    return;
  }

  storageSettingsList.append(createStorageSettingsRow(name, storageSettingsList.children.length));
  newStorageNameInput.value = "";
  storageAddRow.classList.add("hidden");
  toggleStorageAddButton.textContent = "保管場所を追加";
  markSettingsDirty();
}

function addShippingMethodFromForm() {
  const name = newShippingNameInput.value.trim();
  const cost = parseMoney(newShippingCostInput.value) || 0;

  if (!name) {
    showErrorMessage("配送方法名を入力してください");
    return;
  }

  shippingSettingsList.append(createShippingSettingsRow({ name, cost }, shippingSettingsList.children.length));
  newShippingNameInput.value = "";
  newShippingCostInput.value = "";
  shippingAddRow.classList.add("hidden");
  toggleShippingAddButton.textContent = "配送方法を追加";
  markSettingsDirty();
}

function addAppraisalSourceFromForm() {
  const name = newAppraisalNameInput.value.trim();

  if (!name) {
    showErrorMessage("査定先名を入力してください");
    return;
  }

  const id = createId();
  appraisalSettingsList.append(createAppraisalSettingsRow({
    id,
    name,
    field: `appraisal_${id}`,
  }, appraisalSettingsList.children.length));
  newAppraisalNameInput.value = "";
  appraisalAddRow.classList.add("hidden");
  toggleAppraisalAddButton.textContent = "査定先を追加";
  markSettingsDirty();
}

function addTemplateFromForm() {
  const name = newTemplateNameInput.value.trim();
  const content = newTemplateContentInput.value.trim();

  if (!name) {
    showErrorMessage("テンプレート名を入力してください");
    return;
  }

  if (!content) {
    showErrorMessage("テンプレート内容を入力してください");
    return;
  }

  templateSettingsList.append(createTemplateSettingsRow({
    id: createId(),
    name,
    content,
    categoryHint: "",
  }, templateSettingsList.children.length));
  newTemplateNameInput.value = "";
  newTemplateContentInput.value = "";
  templateAddRow.classList.add("hidden");
  toggleTemplateAddButton.textContent = "テンプレートを追加";
  markSettingsDirty();
}

function toggleSettingsAddRow(row, button, openText, closedText) {
  const isHidden = row.classList.toggle("hidden");
  button.textContent = isHidden ? closedText : openText;

  if (!isHidden) {
    row.querySelector("input, textarea")?.focus();
  }
}

async function resetCategoriesToDefault(event) {
  event?.preventDefault();
  event?.stopPropagation();
  const shouldReset = await showAppDialog({
    title: "初期化確認",
    message: "カテゴリだけを初期設定に戻しますか？\n商品データとクラウド共有設定は変更しません。",
    confirmText: "初期化する",
    danger: true,
  });

  if (!shouldReset) {
    return;
  }

  await createStoredBackup("実行前", { toast: true });
  settings = normalizeSettings({
    ...settings,
    categories: DEFAULT_SETTINGS.categories,
  });
  saveSettings();
  refreshCategoryOptions(categoryInput.value);
  renderSettings();
  showSuccessMessage("カテゴリを初期設定に戻しました");
}

async function resetStorageToDefault(event) {
  event?.preventDefault();
  event?.stopPropagation();
  const shouldReset = await showAppDialog({
    title: "初期化確認",
    message: "保管場所だけを初期設定に戻しますか？\n商品データとクラウド共有設定は変更しません。",
    confirmText: "初期化する",
    danger: true,
  });

  if (!shouldReset) {
    return;
  }

  await createStoredBackup("実行前", { toast: true });
  settings = normalizeSettings({
    ...settings,
    storageLocations: DEFAULT_SETTINGS.storageLocations,
  });
  saveSettings();
  refreshStorageLocationOptions(storageLocationInput.value);
  renderSettings();
  showSuccessMessage("保管場所を初期設定に戻しました");
}

async function resetShippingToDefault(event) {
  event?.preventDefault();
  event?.stopPropagation();
  const shouldReset = await showAppDialog({
    title: "初期化確認",
    message: "配送方法と送料だけを初期設定に戻しますか？\n商品データとクラウド共有設定は変更しません。",
    confirmText: "初期化する",
    danger: true,
  });

  if (!shouldReset) {
    return;
  }

  await createStoredBackup("実行前", { toast: true });
  settings = normalizeSettings({
    ...settings,
    shippingMethods: DEFAULT_SETTINGS.shippingMethods,
  });
  saveSettings();
  refreshShippingMethodOptions(shippingMethodInput.value);
  renderSettings();
  showSuccessMessage("配送方法と送料を初期設定に戻しました");
}

async function resetAppraisalToDefault(event) {
  event?.preventDefault();
  event?.stopPropagation();
  const shouldReset = await showAppDialog({
    title: "初期化確認",
    message: "査定情報だけを初期設定に戻しますか？\n商品データとクラウド共有設定は変更しません。",
    confirmText: "初期化する",
    danger: true,
  });

  if (!shouldReset) {
    return;
  }

  await createStoredBackup("実行前", { toast: true });
  settings = normalizeSettings({
    ...settings,
    appraisalSources: DEFAULT_SETTINGS.appraisalSources,
  });
  saveSettings();
  renderSettings();
  render();
  showSuccessMessage("査定情報を初期設定に戻しました");
}

async function resetTemplatesToDefault(event) {
  event?.preventDefault();
  event?.stopPropagation();
  const shouldReset = await showAppDialog({
    title: "初期化確認",
    message: "商品説明テンプレートだけを初期設定に戻しますか？\n商品データとクラウド共有設定は変更しません。",
    confirmText: "初期化する",
    danger: true,
  });

  if (!shouldReset) {
    return;
  }

  await createStoredBackup("実行前", { toast: true });
  descriptionTemplates = normalizeTemplates(DEFAULT_TEMPLATES, []);
  saveTemplates();
  refreshTemplateOptions();
  renderSettings();
  showSuccessMessage("商品説明テンプレートを初期設定に戻しました");
}

function moveSettingsRow(row, direction) {
  const sibling = direction === "up" ? row.previousElementSibling : row.nextElementSibling;

  if (!sibling) {
    return;
  }

  if (direction === "up") {
    row.parentElement.insertBefore(row, sibling);
  } else {
    row.parentElement.insertBefore(sibling, row);
  }
}

function getDragInsertTarget(list, pointerY) {
  const rows = [...list.querySelectorAll(".master-setting-row:not(.is-dragging)")];

  return rows.reduce((closest, row) => {
    const rect = row.getBoundingClientRect();
    const offset = pointerY - rect.top - rect.height / 2;

    if (offset < 0 && offset > closest.offset) {
      return { offset, row };
    }

    return closest;
  }, { offset: Number.NEGATIVE_INFINITY, row: null }).row;
}

function bindMasterSettingsDrag(list) {
  list.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".master-drag-handle")) {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  list.addEventListener("dragstart", (event) => {
    if (event.target.closest(".master-drag-handle")) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    event.preventDefault();
  });

  list.addEventListener("dragover", (event) => {
    const draggingRow = list.querySelector(".master-setting-row.is-dragging");

    if (!draggingRow) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    const insertTarget = getDragInsertTarget(list, event.clientY);

    if (insertTarget) {
      list.insertBefore(draggingRow, insertTarget);
    } else {
      list.append(draggingRow);
    }
  });

  list.addEventListener("drop", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });

  list.addEventListener("dragend", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const draggingRow = list.querySelector(".master-setting-row.is-dragging");

    if (!draggingRow) {
      return;
    }

    draggingRow.classList.remove("is-dragging");
    markSettingsDirty();
  });
}

async function handleMasterSettingsListClick(event) {
  const button = event.target.closest("button");
  const row = event.target.closest(".master-setting-row");

  if (!button || !row) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  if (button.dataset.action === "drag-handle") {
    return;
  }

  if (button.dataset.action?.startsWith("remove-")) {
    if (button.dataset.action === "remove-template") {
      const templateName = row.querySelector('[data-field="name"]')?.value.trim() || "このテンプレート";
      const shouldRemove = await confirmDelete(`「${templateName}」を削除しますか？`);

      if (!shouldRemove) {
        return;
      }
    }

    row.remove();
  }

  if (button.dataset.action === "move-up") {
    moveSettingsRow(row, "up");
  }

  if (button.dataset.action === "move-down") {
    moveSettingsRow(row, "down");
  }

  markSettingsDirty();
}

function bindMasterSettingsList(list) {
  list.addEventListener("input", markSettingsDirty);
  list.addEventListener("click", handleMasterSettingsListClick);
  bindMasterSettingsDrag(list);
}

function applyShippingMethodCost() {
  const method = settings.shippingMethods.find((currentMethod) => currentMethod.name === shippingMethodInput.value);
  const hasSizeRates = Boolean(SHIPPING_SIZE_RATES[shippingMethodInput.value]);
  const isManual = MANUAL_SHIPPING_METHODS.includes(shippingMethodInput.value);

  shippingSizeField.classList.toggle("hidden", !hasSizeRates);
  shippingCostField.classList.toggle("manual-shipping", isManual);
  shippingCostInput.readOnly = !isManual;

  if (hasSizeRates) {
    refreshShippingSizeOptions(shippingSizeInput.value);
    applyShippingSizeCost();
    return;
  }

  shippingSizeInput.value = "";

  if (!method) {
    shippingCostInput.value = "";
    updateProfitPreview();
    return;
  }

  shippingCostInput.value = method.cost;
  updateProfitPreview();
}

function applyShippingSizeCost() {
  const rate = SHIPPING_SIZE_RATES[shippingMethodInput.value]?.[shippingSizeInput.value];

  if (rate === undefined) {
    shippingCostInput.value = "";
    updateProfitPreview();
    return;
  }

  shippingCostInput.value = rate;
  updateProfitPreview();
}

function resetForm() {
  form.reset();
  itemIdInput.value = "";
  nameInput.value = "";
  pendingFormItemCode = "";
  currentImageData = "";
  updateImagePreview("");
  imageProviderInput.value = "";
  googlePhotoImageIdInput.value = "";
  localImageIdInput.value = "";
  cloudImageIdInput.value = "";
  refreshCategoryOptions();
  refreshShippingMethodOptions();
  refreshShippingSizeOptions();
  refreshTemplateOptions();
  listingDateInput.value = formatDateInputValue();
  listingUrlInput.value = "";
  soldMemoInput.value = "";
  shippingSizeField.classList.add("hidden");
  shippingCostField.classList.remove("manual-shipping");
  shippingCostInput.readOnly = true;
  updateProfitPreview();
  updateSoldFieldsVisibility();
  updateFormSelectPlaceholderStates();
  refreshStorageLocationOptions();
  updateConditionQuickButtons();
  updateImageReferenceMode();
  formDetailSections.forEach((details) => {
    details.open = false;
  });
  formTitle.textContent = "商品登録";
  cancelEditButton?.classList.add("hidden");
  hideCompletionPanel();
  updateSubmitButtonState();
  updateFormItemCodeButton();
  isFormDirty = false;
}

function startEdit(item, options = {}) {
  returnToDetailAfterEditId = options.returnToDetail ? item.id : "";
  pendingFormItemCode = "";
  setActiveNavigation("form");
  hideCompletionPanel();
  itemIdInput.value = item.id;
  const title = getListingTitle(item);
  nameInput.value = title;
  listingTitleInput.value = title;
  refreshCategoryOptions(item.category);
  conditionInput.value = item.condition;
  statusInput.value = getItemStatus(item);
  listingDateInput.value = item.listingDate || "";
  listingUrlInput.value = item.listingUrl || "";
  refreshStorageLocationOptions(item.storageLocation || "");
  storageLocationInput.value = item.storageLocation || "";
  purchaseDateInput.value = item.purchaseDate || "";
  measurementsInput.value = item.measurements || "";
  refreshShippingMethodOptions(item.shippingMethod || "");
  refreshShippingSizeOptions(item.shippingSize || "");
  shippingSizeInput.value = item.shippingSize || "";
  applyShippingMethodCost();
  plannedPriceInput.value = parseMoney(item.plannedPrice);
  shippingCostInput.value = parseMoney(item.shippingCost);
  purchaseCostInput.value = parseMoney(item.purchaseCost);
  actualSalePriceInput.value = parseMoney(item.actualSalePrice);
  actualShippingCostInput.value = parseMoney(item.actualShippingCost);
  actualFeeInput.value = parseMoney(item.actualFee);
  soldDateInput.value = item.soldDate || "";
  soldMemoInput.value = item.soldMemo || "";
  memoInput.value = item.memo || "";
  descriptionInput.value = item.description || "";
  imageInput.value = "";
  currentImageData = item.imageData || "";
  updateImagePreview(currentImageData);
  const imageRefs = normalizeImageRefs(item.imageRefs);
  imageProviderInput.value = imageRefs.provider;
  googlePhotoImageIdInput.value = imageRefs.googlePhotoId;
  localImageIdInput.value = imageRefs.localImageId;
  cloudImageIdInput.value = imageRefs.cloudImageId;
  updateImageReferenceMode();
  updateProfitPreview();
  updateSoldFieldsVisibility();
  updateFormSelectPlaceholderStates();
  updateConditionQuickButtons();
  formDetailSections.forEach((details) => {
    details.open = details.classList.contains("form-details-mercari") && getItemStatus(item) === "売却済み";
  });
  formTitle.textContent = "商品編集";
  cancelEditButton?.classList.remove("hidden");
  updateSubmitButtonState();
  updateFormItemCodeButton();
  isFormDirty = false;
  listingTitleInput.focus();
}

function setActiveNavigation(view, tab = "form") {
  view = normalizeViewForDevice(view);
  const workViews = ["form", "list", "import", "sorting", "box"];
  const workTab = workViews.includes(view) ? view : tab;
  if (document.body.classList.contains("work-tab-list")) {
    uiState.scroll = { ...(uiState.scroll || {}), list: getCurrentScrollTop() };
  }
  if (document.body.classList.contains("work-tab-sorting")) {
    uiState.scroll = { ...(uiState.scroll || {}), sorting: getCurrentScrollTop() };
  }
  currentView = view;

  document.body.classList.remove(
    "work-view",
    "shipping-view",
    "analysis-view",
    "settings-view",
    "work-tab-form",
    "work-tab-list",
    "work-tab-import",
    "work-tab-sorting",
    "work-tab-box",
  );

  if (view === "analysis") {
    document.body.classList.add("analysis-view");
  } else if (view === "shipping") {
    document.body.classList.add("shipping-view");
  } else if (view === "settings") {
    document.body.classList.add("settings-view");
    document.querySelectorAll(".settings-panel details.settings-accordion").forEach((details) => {
      details.open = false;
    });
    renderSettings();
  } else {
    document.body.classList.add("work-view", `work-tab-${workTab}`);
  }

  document.body.classList.toggle(
    "sorting-shipping-mode-active",
    view === "sorting" && isSortingShippingMode,
  );

  if (workTab === "list") {
    document.querySelectorAll(".inventory-work-section, .inventory-display-section").forEach((details) => {
      details.open = false;
    });
  }

  sideNavLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.view === view);
  });
  stabilizeAfterViewSwitch(view);
  scheduleSaveUiState();
}

sideNavLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const view = link.dataset.view;

    if (!view) {
      return;
    }

    event.preventDefault();
    setActiveNavigation(view);
    render();
    reloadCloudDataIfReady(`タブ切り替え:${view}`);
    document.querySelector(link.getAttribute("href"))?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

window.addEventListener("resize", () => {
  if (isMobileViewport() && currentView === "import") {
    setActiveNavigation("list");
    render();
  }
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    reloadCloudDataIfReady("画面復帰");
  }
});

window.addEventListener("focus", () => {
  reloadCloudDataIfReady("ウィンドウ復帰");
});

window.addEventListener("scroll", scheduleSaveUiState, { passive: true });
document.addEventListener("toggle", (event) => {
  if (event.target?.matches?.("details.app-accordion, details.settings-accordion, details.form-details")) {
    scheduleSaveUiState();
  }
}, true);
importResultList?.addEventListener("scroll", scheduleSaveUiState, { passive: true });

recentStorageList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-storage]");

  if (!button) {
    return;
  }

  refreshStorageLocationOptions(button.dataset.storage);
  storageLocationInput.value = button.dataset.storage;
  updateSelectPlaceholderState(storageLocationInput);
  storageLocationInput.focus();
});

recentItemsList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-item-id]");

  if (!button) {
    return;
  }

  const item = items.find((currentItem) => currentItem.id === button.dataset.itemId);

  if (item) {
    const title = getListingTitle(item) || "";
    listingTitleInput.value = title;
    nameInput.value = title;
    isFormDirty = true;
    listingTitleInput.focus();
  }
});

form.addEventListener("input", () => {
  isFormDirty = true;
});

continueSameCategoryButton.addEventListener("click", () => {
  if (!lastSavedShortcut) {
    return;
  }

  const category = lastSavedShortcut.category;
  resetForm();
  refreshCategoryOptions(category);
  categoryInput.value = category;
  isFormDirty = Boolean(category);
  listingTitleInput.focus();
});

continueSameStorageButton.addEventListener("click", () => {
  if (!lastSavedShortcut) {
    return;
  }

  const storageLocation = lastSavedShortcut.storageLocation;
  resetForm();
  refreshStorageLocationOptions(storageLocation);
  storageLocationInput.value = storageLocation;
  updateSelectPlaceholderState(storageLocationInput);
  isFormDirty = Boolean(storageLocation);
  listingTitleInput.focus();
});

goToListAfterSaveButton.addEventListener("click", () => {
  resetForm();
  setActiveNavigation("list");
  render();
  document.querySelector("#listTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

listViewButton.addEventListener("click", () => {
  itemListViewMode = "list";
  itemListGroupMode = "normal";
  render();
  saveUiState();
});

cardViewButton.addEventListener("click", () => {
  itemListViewMode = "card";
  itemListGroupMode = "normal";
  render();
  saveUiState();
});
normalListModeButton.addEventListener("click", () => {
  itemListGroupMode = "normal";
  render();
  saveUiState();
});
storageListModeButton.addEventListener("click", () => {
  itemListGroupMode = "storage";
  render();
  saveUiState();
});

inventoryDisplaySection?.querySelector("summary")?.addEventListener("click", (event) => {
  event.preventDefault();
  window.clearTimeout(inventoryOptionsCloseTimer);

  if (inventoryDisplaySection.open) {
    inventoryDisplaySection.classList.add("is-closing");
    inventoryOptionsCloseTimer = window.setTimeout(() => {
      inventoryDisplaySection.open = false;
      inventoryDisplaySection.classList.remove("is-closing");
      saveUiState();
    }, 240);
    return;
  }

  inventoryDisplaySection.open = true;
  saveUiState();
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (isImageProcessing) {
    return;
  }

  if (!isItemFormReadyToSubmit()) {
    updateSubmitButtonState();
    showToast("必須項目を入力してください", "error");
    return;
  }

  const formItemId = itemIdInput.value || createId();
  const editingIndex = items.findIndex((item) => item.id === formItemId);
  const isNewItem = editingIndex < 0;
  const existingItem = editingIndex >= 0 ? items[editingIndex] : {};
  const isSold = statusInput.value === "売却済み";

	  const formItem = {
	    id: formItemId,
	    itemCode: existingItem.itemCode || pendingFormItemCode || generateItemCode(),
    name: isSold ? (existingItem.name || normalizeText(listingTitleInput.value)) : normalizeText(listingTitleInput.value),
    listingTitle: isSold ? (getListingTitle(existingItem) || normalizeText(listingTitleInput.value)) : normalizeText(listingTitleInput.value),
    category: isSold ? (existingItem.category || categoryInput.value) : categoryInput.value,
    condition: isSold ? (existingItem.condition || conditionInput.value) : conditionInput.value,
    status: statusInput.value || DEFAULT_STATUS,
    listingDate: isSold ? (existingItem.listingDate || listingDateInput.value) : listingDateInput.value,
    listingUrl: isSold ? (existingItem.listingUrl || normalizeUrl(listingUrlInput.value)) : normalizeUrl(listingUrlInput.value),
    storageLocation: isSold ? (existingItem.storageLocation || normalizeText(storageLocationInput.value)) : normalizeText(storageLocationInput.value),
    purchaseDate: isSold ? (existingItem.purchaseDate || normalizeText(purchaseDateInput.value)) : normalizeText(purchaseDateInput.value),
    measurements: isSold ? (existingItem.measurements || normalizeText(measurementsInput.value)) : normalizeText(measurementsInput.value),
    shippingMethod: isSold ? (existingItem.shippingMethod || normalizeShippingMethodName(shippingMethodInput.value)) : normalizeShippingMethodName(shippingMethodInput.value),
    shippingSize: isSold ? (existingItem.shippingSize || shippingSizeInput.value) : shippingSizeInput.value,
    plannedPrice: isSold ? (parseMoney(existingItem.plannedPrice) === "" ? parseMoney(plannedPriceInput.value) : parseMoney(existingItem.plannedPrice)) : parseMoney(plannedPriceInput.value),
    shippingCost: isSold ? (parseMoney(existingItem.shippingCost) === "" ? parseMoney(shippingCostInput.value) : parseMoney(existingItem.shippingCost)) : parseMoney(shippingCostInput.value),
    purchaseCost: isSold ? (parseMoney(existingItem.purchaseCost) === "" ? parseMoney(purchaseCostInput.value) : parseMoney(existingItem.purchaseCost)) : parseMoney(purchaseCostInput.value),
    actualSalePrice: parseMoney(actualSalePriceInput.value),
    actualShippingCost: parseMoney(actualShippingCostInput.value),
    actualFee: calculateFee(parseMoney(actualSalePriceInput.value)),
    soldDate: soldDateInput.value,
    soldMemo: normalizeText(soldMemoInput.value),
    minimumProfit: editingIndex >= 0 ? items[editingIndex].minimumProfit : 0,
    memo: isSold ? (existingItem.memo || normalizeText(memoInput.value)) : normalizeText(memoInput.value),
    description: isSold ? (existingItem.description || normalizeText(descriptionInput.value)) : normalizeText(descriptionInput.value),
    priceLimitMemo: editingIndex >= 0 ? items[editingIndex].priceLimitMemo : "",
	    imageData: isSold ? (existingItem.imageData || currentImageData) : currentImageData,
	    imageRefs: getImageRefsFromForm(existingItem.imageRefs),
    referenceImages: getReferenceImages(existingItem),
    editHistory: normalizeEditHistory(existingItem.editHistory),
    updatedAt: new Date().toISOString(),
	  };

	  if (formItem.imageData && !normalizeImageRefs(formItem.imageRefs).localImageId) {
	    formItem.imageRefs = normalizeImageRefs({
	      ...formItem.imageRefs,
	      provider: normalizeImageRefs(formItem.imageRefs).provider || "local",
	      localImageId: createLocalImageId(formItem),
	    });
	  }

	  saveLocalImageRefsForItem(formItem, {
	    localImageId: normalizeImageRefs(formItem.imageRefs).localImageId,
	  });

  if (editingIndex >= 0) {
    formItem.editHistory = appendEditHistory(existingItem, getItemChangeDescriptions(existingItem, formItem), formItem.updatedAt);
  }

  if ((!isSold || editingIndex < 0) && (!formItem.listingTitle || !formItem.category || !formItem.condition || !formItem.storageLocation)) {
    return;
  }

  const previousItems = [...items];

  if (editingIndex >= 0) {
    items[editingIndex] = formItem;
  } else {
    items.unshift(formItem);
  }

  try {
    if (formItem.imageData) {
      await saveLocalItemImage(formItem, formItem.imageData, "items");
    }
  } catch (error) {
    items = previousItems;
    showToast(error.message || "画像を保存できませんでした", "error");
    return;
  }

  if (!saveItems()) {
    items = previousItems;
    showToast("保存できませんでした", "error");
    return;
  }

  showToast(isNewItem ? "✓ 商品を登録しました" : "✓ 商品を更新しました", "success");
  resetForm();
  render();

  if (isNewItem) {
    showCompletionPanel(formItem);
  } else if (returnToDetailAfterEditId === formItem.id) {
    returnToDetailAfterEditId = "";
    setActiveNavigation("list");
    render();
    const updatedItem = items.find((item) => item.id === formItem.id);
    if (updatedItem) {
      openDetailModal(updatedItem);
    }
  } else {
    returnToDetailAfterEditId = "";
    setActiveNavigation("list");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

function closeItemActionMenus(exceptMenu = null) {
  document.querySelectorAll(
    "#itemTableBody .row-action-menu[open], #compactTableGrid .row-action-menu[open], #storageLocationView .row-action-menu[open], #inventoryShelfList .row-action-menu[open], #mobileCardList .row-action-menu[open], #recentDockTableBody .row-action-menu[open], #recentDockMobileList .row-action-menu[open]",
  ).forEach((menu) => {
    if (menu !== exceptMenu) {
      menu.removeAttribute("open");
    }
  });
}

function positionItemActionMenu(menu) {
  const summary = menu?.querySelector("summary");
  const panel = menu?.querySelector(".actions");

  if (!summary || !panel || !menu.open) {
    return;
  }

  panel.style.setProperty("--action-menu-left", "12px");
  panel.style.setProperty("--action-menu-top", "12px");

  const visualViewport = window.visualViewport;
  const viewportLeft = visualViewport?.offsetLeft || 0;
  const viewportTop = visualViewport?.offsetTop || 0;
  const viewportWidth = visualViewport?.width || window.innerWidth || document.documentElement.clientWidth || 390;
  const viewportHeight = visualViewport?.height || window.innerHeight || document.documentElement.clientHeight || 700;
  const margin = 12;
  const gap = 6;
  const summaryRect = summary.getBoundingClientRect();
  const panelWidth = Math.min(panel.scrollWidth || panel.offsetWidth || 260, viewportWidth - margin * 2);
  const panelHeight = Math.min(panel.scrollHeight || panel.offsetHeight || 320, viewportHeight - margin * 2);
  const minLeft = viewportLeft + margin;
  const maxLeft = viewportLeft + viewportWidth - panelWidth - margin;
  const minTop = viewportTop + margin;
  const maxTop = viewportTop + viewportHeight - panelHeight - margin;
  const preferredLeft = summaryRect.right - panelWidth;
  const left = Math.max(minLeft, Math.min(preferredLeft, maxLeft));
  const belowTop = summaryRect.bottom + gap;
  const aboveTop = summaryRect.top - panelHeight - gap;
  const canOpenBelow = belowTop + panelHeight <= viewportTop + viewportHeight - margin;
  const canOpenAbove = aboveTop >= minTop;
  const top = Math.max(
    minTop,
    Math.min(canOpenBelow ? belowTop : (canOpenAbove ? aboveTop : maxTop), maxTop),
  );

  panel.style.setProperty("--action-menu-left", `${left}px`);
  panel.style.setProperty("--action-menu-top", `${top}px`);
  panel.style.setProperty("--action-menu-width", `${panelWidth}px`);
  panel.style.setProperty("--action-menu-max-height", `${panelHeight}px`);
}

function positionOpenItemActionMenus() {
  document.querySelectorAll(
    "#itemTableBody .row-action-menu[open], #compactTableGrid .row-action-menu[open], #storageLocationView .row-action-menu[open], #inventoryShelfList .row-action-menu[open], #mobileCardList .row-action-menu[open], #recentDockTableBody .row-action-menu[open], #recentDockMobileList .row-action-menu[open]",
  ).forEach((menu) => positionItemActionMenu(menu));
}

async function handleItemTableAction(event) {
  const button = event.target.closest("button");
  const actionSummary = event.target.closest(".row-action-menu > summary");
  const actionMenu = event.target.closest(".row-action-menu");
  const interactiveControl = event.target.closest("button, summary, a, input, select, textarea, label");
  const row = event.target.closest("tr, .inventory-shelf-card, .mobile-item-card, .mobile-compact-table-card, .compact-list-row");

  if (actionSummary) {
    event.preventDefault();
    event.stopPropagation();
    const menu = actionSummary.closest(".row-action-menu");
    const shouldOpen = !menu.open;
    closeItemActionMenus(menu);

    if (shouldOpen) {
      menu.open = true;
      requestAnimationFrame(() => positionItemActionMenu(menu));
    } else {
      menu.removeAttribute("open");
    }
    return;
  }

  if (actionMenu) {
    event.stopPropagation();
  }

  if (!row) {
    return;
  }

  const item = items.find((currentItem) => currentItem.id === row.dataset.id);

  if (!item) {
    return;
  }

  const isWholeCardTarget = [
    "inventory-shelf-card",
    "mobile-item-card",
    "mobile-compact-table-card",
    "compact-list-row",
  ].some((className) => row.classList.contains(className));

  if (!button && !interactiveControl && isWholeCardTarget) {
    if (suppressedCompactClickId === item.id) {
      suppressedCompactClickId = "";
      return;
    }

    openDetailModal(item);
    return;
  }

  if (!button) {
    return;
  }

  closeItemActionMenus();

  if (button.dataset.action === "edit") {
    startEdit(item);
  }

  if (button.dataset.action === "view-detail") {
    openDetailModal(item);
  }

  if (button.dataset.action === "quick-change-storage") {
    changeItemStorageFromList(item);
  }

  if (button.dataset.action === "quick-edit-storage") {
    quickEditItemStorage(item);
  }

  if (button.dataset.action === "quick-edit-appraisal") {
    quickEditItemAppraisal(item);
  }

  if (button.dataset.action === "quick-edit-memo") {
    quickEditItemMemo(item);
  }

  if (button.dataset.action === "quick-mark-listed") {
    markItemAsListedFromList(item);
  }

  if (button.dataset.action === "quick-shipping-ready") {
    markItemAsShippingReadyFromList(item);
  }

  if (button.dataset.action === "view-description") {
    openDescriptionModal(item);
  }

  if (button.dataset.action === "open-listing") {
    openListingUrl(item);
  }

  if (button.dataset.action === "copy-title") {
    copyText(getListingTitle(item), "商品タイトルをコピーしました。");
  }

  if (button.dataset.action === "copy-description") {
    copyText(item.description || "", "商品説明文をコピーしました。");
  }

  if (button.dataset.action === "copy-item-code") {
    copyText(getItemCode(item), "商品IDをコピーしました。");
  }

  if (button.dataset.action === "change-photo") {
    requestLocalPhoto(item.id);
  }

  if (button.dataset.action === "add-reference-image") {
    requestReferenceImage(item.id);
  }

  if (button.dataset.action === "remove-photo") {
    removeLocalPhoto(item);
  }

  if (button.dataset.action === "relist") {
    relistItem(item);
  }

  if (button.dataset.action === "send-to-sorting") {
    sendItemToSorting(item);
  }

  if (button.dataset.action === "mark-sold") {
    markItemAsSoldFromList(item);
  }

  if (button.dataset.action === "delete") {
    const shouldDelete = await confirmDelete(`「${getListingTitle(item)}」を削除しますか？`);

    if (shouldDelete) {
      items = items.filter((currentItem) => currentItem.id !== item.id);
      saveItems();
      deleteItemFromSupabase(item.id).catch((error) => {
        handleCloudSaveError(error);
      });
      resetForm();
      render();
    }
  }
}

function handleMobileCompactKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  if (event.target.closest("button, summary, a, input, select, textarea")) {
    return;
  }

  const card = event.target.closest(".mobile-compact-table-card, .compact-list-row, .inventory-shelf-card, .mobile-item-card");

  if (!card) {
    return;
  }

  const item = items.find((currentItem) => currentItem.id === card.dataset.id);

  if (!item) {
    return;
  }

  event.preventDefault();
  openDetailModal(item);
}

let compactLongPressTimer = null;
let suppressedCompactClickId = "";
let lockedScrollY = 0;

function lockPageScroll() {
  if (document.body.classList.contains("modal-scroll-locked")) {
    return;
  }

  lockedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
  document.body.style.top = `-${lockedScrollY}px`;
  document.body.classList.add("modal-scroll-locked");
}

function unlockPageScroll() {
  if (!document.body.classList.contains("modal-scroll-locked")) {
    return;
  }

  document.body.classList.remove("modal-scroll-locked");
  document.body.style.top = "";
  window.scrollTo(0, lockedScrollY);
  lockedScrollY = 0;
}

function cancelCompactLongPress() {
  if (compactLongPressTimer) {
    clearTimeout(compactLongPressTimer);
    compactLongPressTimer = null;
  }
}

function handleCompactLongPressStart(event) {
  if (event.pointerType === "mouse" || event.target.closest("button, summary, a, input, select")) {
    return;
  }

  const row = event.target.closest(".mobile-compact-table-card, .compact-list-row");

  if (!row) {
    return;
  }

  cancelCompactLongPress();
  compactLongPressTimer = window.setTimeout(() => {
    const item = items.find((currentItem) => currentItem.id === row.dataset.id);

    if (!item) {
      return;
    }

    suppressedCompactClickId = item.id;
    window.setTimeout(() => {
      if (suppressedCompactClickId === item.id) {
        suppressedCompactClickId = "";
      }
    }, 1000);
    startEdit(item);
  }, 650);
}

itemTableBody.addEventListener("click", handleItemTableAction);
compactTableGrid.addEventListener("click", handleItemTableAction);
compactTableGrid.addEventListener("keydown", handleMobileCompactKeydown);
compactTableGrid.addEventListener("pointerdown", handleCompactLongPressStart);
compactTableGrid.addEventListener("pointerup", cancelCompactLongPress);
compactTableGrid.addEventListener("pointercancel", cancelCompactLongPress);
compactTableGrid.addEventListener("pointerleave", cancelCompactLongPress);
storageLocationView.addEventListener("click", (event) => {
  const groupButton = event.target.closest("[data-storage-group]");

  if (groupButton) {
    selectedStorageGroup = groupButton.dataset.storageGroup || "";
    render();
    return;
  }

  handleItemTableAction(event);
});
inventoryShelfList.addEventListener("click", handleItemTableAction);
inventoryShelfList.addEventListener("keydown", handleMobileCompactKeydown);
recentDockTableBody.addEventListener("click", handleItemTableAction);
recentDockMobileList.addEventListener("click", handleItemTableAction);
recentDockMobileList.addEventListener("keydown", handleMobileCompactKeydown);
mobileCardList.addEventListener("keydown", handleMobileCompactKeydown);
document.addEventListener("click", (event) => {
  if (!event.target.closest(".row-action-menu")) {
    closeItemActionMenus();
  }
});
window.addEventListener("resize", positionOpenItemActionMenus);
window.addEventListener("scroll", positionOpenItemActionMenus, true);
window.addEventListener("scroll", updateScrollTopButton, { passive: true });
window.addEventListener("scroll", () => {
  if (document.body.classList.contains("work-tab-list") || document.body.classList.contains("work-tab-sorting")) {
    scheduleSaveUiState();
  }
}, { passive: true });
window.addEventListener("resize", updateScrollTopButton);

scrollTopButton?.addEventListener("click", () => {
  scrollCurrentViewToTop("smooth");
});

document.addEventListener("click", (event) => {
  const topButton = event.target.closest("[data-scroll-top-target]");

  if (!topButton) {
    return;
  }

  event.preventDefault();
  scrollCurrentViewToTop("smooth");
});

openFullListButton.addEventListener("click", () => {
  setActiveNavigation("list");
  render();
  document.querySelector("#listTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

openBoxSearchButton.addEventListener("click", () => {
  setActiveNavigation("box");
  render();
  document.querySelector("#boxSearchTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

openShippingManagementButton.addEventListener("click", () => {
  setActiveNavigation("shipping");
  render();
  document.querySelector("#shippingManagementTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

listShowAllButton?.addEventListener("click", () => {
  statusFilter.value = "";
  itemListTargetMode = "all";
  setActiveNavigation("list");
  render();
  saveUiState();
  document.querySelector("#listTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

listInventoryOnlyButton?.addEventListener("click", () => {
  statusFilter.value = "";
  itemListTargetMode = "inventory";
  setActiveNavigation("list");
  render();
  saveUiState();
  document.querySelector("#listTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

listBoxSearchButton.addEventListener("click", () => {
  setActiveNavigation("box");
  render();
  document.querySelector("#boxSearchTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

listShippingManagementButton.addEventListener("click", () => {
  setActiveNavigation("shipping");
  render();
  document.querySelector("#shippingManagementTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

emptyRegisterButton?.addEventListener("click", () => {
  setActiveNavigation("register");
  document.querySelector("#formTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

soldTableBody.addEventListener("click", async (event) => {
  const button = event.target.closest("button");
  const row = event.target.closest("tr");

  if (!button || !row) {
    return;
  }

  const item = items.find((currentItem) => currentItem.id === row.dataset.id);

  if (!item) {
    return;
  }

  if (button.dataset.action === "edit") {
    startEdit(item);
  }

  if (button.dataset.action === "view-detail") {
    openDetailModal(item);
  }

  if (button.dataset.action === "view-description") {
    openDescriptionModal(item);
  }

  if (button.dataset.action === "copy-title") {
    copyText(getListingTitle(item), "商品タイトルをコピーしました。");
  }

  if (button.dataset.action === "copy-description") {
    copyText(item.description || "", "商品説明文をコピーしました。");
  }

  if (button.dataset.action === "delete") {
    const shouldDelete = await confirmDelete(`「${getListingTitle(item)}」を削除しますか？`);

    if (shouldDelete) {
      items = items.filter((currentItem) => currentItem.id !== item.id);
      saveItems();
      deleteItemFromSupabase(item.id).catch((error) => {
        handleCloudSaveError(error);
      });
      resetForm();
      render();
    }
  }
});

mobileCardList.addEventListener("click", async (event) => {
  const button = event.target.closest("button");
  const actionSummary = event.target.closest(".row-action-menu > summary");
  const actionMenu = event.target.closest(".row-action-menu");
  const interactiveControl = event.target.closest("button, summary, a, input, select, textarea, label");
  const card = event.target.closest(".mobile-item-card");

  if (actionSummary) {
    event.preventDefault();
    event.stopPropagation();
    const menu = actionSummary.closest(".row-action-menu");
    const shouldOpen = !menu.open;
    closeItemActionMenus(menu);

    if (shouldOpen) {
      menu.open = true;
      requestAnimationFrame(() => positionItemActionMenu(menu));
    } else {
      menu.removeAttribute("open");
    }
    return;
  }

  if (actionMenu) {
    event.stopPropagation();
  }

  if (!card) {
    return;
  }

  const item = items.find((currentItem) => currentItem.id === card.dataset.id);

  if (!item) {
    return;
  }

  if (!button && !interactiveControl) {
    openDetailModal(item);
    return;
  }

  if (!button) {
    return;
  }

  closeItemActionMenus();

  if (button.dataset.action === "edit") {
    startEdit(item);
  }

  if (button.dataset.action === "view-detail") {
    openDetailModal(item);
  }

  if (button.dataset.action === "quick-change-storage") {
    changeItemStorageFromList(item);
  }

  if (button.dataset.action === "quick-edit-storage") {
    quickEditItemStorage(item);
  }

  if (button.dataset.action === "quick-edit-appraisal") {
    quickEditItemAppraisal(item);
  }

  if (button.dataset.action === "quick-edit-memo") {
    quickEditItemMemo(item);
  }

  if (button.dataset.action === "quick-mark-listed") {
    markItemAsListedFromList(item);
  }

  if (button.dataset.action === "quick-shipping-ready") {
    markItemAsShippingReadyFromList(item);
  }

  if (button.dataset.action === "mark-sold") {
    markItemAsSoldFromList(item);
  }

  if (button.dataset.action === "copy-title") {
    copyText(getListingTitle(item), "商品タイトルをコピーしました。");
  }

  if (button.dataset.action === "copy-description") {
    copyText(item.description || "", "商品説明文をコピーしました。");
  }

  if (button.dataset.action === "copy-item-code") {
    copyText(getItemCode(item), "商品IDをコピーしました。");
  }

  if (button.dataset.action === "change-photo") {
    requestLocalPhoto(item.id);
  }

  if (button.dataset.action === "add-reference-image") {
    requestReferenceImage(item.id);
  }

  if (button.dataset.action === "remove-photo") {
    removeLocalPhoto(item);
  }

  if (button.dataset.action === "relist") {
    relistItem(item);
  }

  if (button.dataset.action === "send-to-sorting") {
    sendItemToSorting(item);
  }

  if (button.dataset.action === "delete") {
    const shouldDelete = await confirmDelete(`「${getListingTitle(item)}」を削除しますか？`);

    if (shouldDelete) {
      items = items.filter((currentItem) => currentItem.id !== item.id);
      saveItems();
      deleteItemFromSupabase(item.id).catch((error) => {
        handleCloudSaveError(error);
      });
      resetForm();
      render();
    }
  }
});

cloudLoginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!supabaseClient && !initializeSupabaseClient()) {
    showErrorMessage("Supabase接続情報がコード側に未設定です");
    return;
  }

  const email = cloudEmailInput.value.trim();
  const password = cloudPasswordInput.value;

  if (!email || !password) {
    showErrorMessage("メールとパスワードを入力してください");
    return;
  }

  cloudLoginButton.disabled = true;
  setCloudStatus("ログイン中...");

  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });

    if (error) {
      throw error;
    }

    supabaseSession = data.session;
    cloudUser = data.user;
    await loadCloudHousehold();
    await reloadCloudData({ reason: "ログイン直後" });
    renderCloudAuthState();
    render();
  } catch (error) {
    isCloudReady = false;
    setCloudSyncStatus("failed", "ログインまたはクラウド読み込みに失敗しました。");
    setCloudStatus(`ログインまたは読み込みに失敗しました。ローカル保存で継続します: ${error.message}`, "warning");
    showErrorMessage("ログインまたはクラウド読み込みに失敗しました。ローカル保存で継続します");
  } finally {
    cloudLoginButton.disabled = false;
  }
});

cloudLogoutButton.addEventListener("click", async () => {
  if (supabaseClient) {
    await supabaseClient.auth.signOut();
  }

  supabaseSession = null;
  cloudUser = null;
  cloudHouseholdId = "";
  cloudHouseholdMemberIds = [];
  cloudUserHouseholdIds = [];
  isCloudReady = false;
  hasCloudSaveWarning = false;
  cloudEmailInput.disabled = false;
  cloudPasswordInput.disabled = false;
  cloudPasswordInput.value = "";
  renderCloudAuthState();
  showSuccessMessage("ログアウトしました");
});

migrateToSupabaseButton.addEventListener("click", migrateLocalItemsToSupabase);

async function handleManualCloudReload() {
  const shouldReload = await confirmCloudOverwriteAction("クラウドから再読み込み");
  if (!shouldReload) {
    return;
  }

  [cloudReloadButton, mobileCloudReloadButton].forEach((button) => {
    if (button) {
      button.disabled = true;
    }
  });
  reloadCloudData({ reason: "手動同期", showToast: true, force: true })
    .catch((error) => {
      setCloudSyncStatus("failed", "クラウド再読み込みに失敗しました。");
      setCloudStatus(`クラウド再読み込みに失敗しました: ${error.message}`, "warning");
      showErrorMessage("クラウド再読み込みに失敗しました");
    })
    .finally(() => {
      [cloudReloadButton, mobileCloudReloadButton].forEach((button) => {
        if (button) {
          button.disabled = false;
        }
      });
    });
}

cloudReloadButton?.addEventListener("click", () => {
  handleManualCloudReload();
});

mobileCloudReloadButton?.addEventListener("click", () => {
  handleManualCloudReload();
});

detectAllStorageDataButton?.addEventListener("click", () => {
  detectAllStorageDataButton.disabled = true;
  detectAllStoredProductData()
    .catch((error) => {
      console.warn("商品データ全探索エラー:", error);
      showErrorMessage("商品データ本体を全探索できませんでした");
    })
    .finally(() => {
      detectAllStorageDataButton.disabled = false;
    });
});

analyzeIndexedImageStoreButton?.addEventListener("click", () => {
  analyzeIndexedImageStoreButton.disabled = true;
  analyzeIndexedImageStore()
    .catch((error) => {
      console.warn("IndexedDB画像Store解析エラー:", error);
      showErrorMessage("IndexedDB画像Storeを解析できませんでした");
    })
    .finally(() => {
      analyzeIndexedImageStoreButton.disabled = false;
    });
});

analyzeLocalImageRefsButton?.addEventListener("click", () => {
  analyzeLocalImageRefsButton.disabled = true;
  analyzeLocalImageRefs()
    .catch((error) => {
      console.warn("localImageRefs解析エラー:", error);
      showErrorMessage("localImageRefsを解析できませんでした");
    })
    .finally(() => {
      analyzeLocalImageRefsButton.disabled = false;
    });
});

diagnoseRecoveredImageCandidatesButton?.addEventListener("click", () => {
  diagnoseRecoveredImageCandidatesButton.disabled = true;
  diagnoseRecoveredImageCandidates()
    .catch((error) => {
      console.warn("復元候補情報診断エラー:", error);
      showErrorMessage("復元候補の情報診断に失敗しました");
    })
    .finally(() => {
      diagnoseRecoveredImageCandidatesButton.disabled = false;
    });
});

diagnoseCloudAppStateButton?.addEventListener("click", () => {
  diagnoseCloudAppStateButton.disabled = true;
  diagnoseCloudAppStateOnly()
    .catch((error) => {
      console.warn("__app_state__診断エラー:", error);
      showErrorMessage("__app_state__を診断できませんでした");
    })
    .finally(() => {
      diagnoseCloudAppStateButton.disabled = false;
    });
});

detectLocalSortingDataButton?.addEventListener("click", () => {
  detectLocalSortingRecoveryData().catch((error) => {
    console.warn("ローカル復旧候補検出エラー:", error);
    showErrorMessage("旧ローカルデータを検出できませんでした");
  });
});

detectCloudSortingDataButton?.addEventListener("click", () => {
  detectCloudSortingDataButton.disabled = true;
  detectCloudSortingRecoveryData()
    .catch((error) => {
      console.warn("クラウド復旧候補検出エラー:", error);
      showErrorMessage("旧クラウドデータを検出できませんでした");
    })
    .finally(() => {
      detectCloudSortingDataButton.disabled = false;
    });
});

dataRecoveryResults?.addEventListener("click", (event) => {
  const applyHighConfidenceButton = event.target.closest("[data-apply-high-confidence-recovered-images]");
  if (applyHighConfidenceButton) {
    event.preventDefault();
    event.stopPropagation();
    applyHighConfidenceRecoveredImageDiagnostics().catch((error) => {
      console.warn("高確度復元候補一括適用エラー:", error);
      showErrorMessage("高確度候補を一括適用できませんでした");
    });
    return;
  }

  const applyDiagnosticButton = event.target.closest("[data-apply-recovered-image-diagnostic]");
  if (applyDiagnosticButton) {
    event.preventDefault();
    event.stopPropagation();
    applyRecoveredImageDiagnostic(Number(applyDiagnosticButton.dataset.applyRecoveredImageDiagnostic)).catch((error) => {
      console.warn("復元候補適用エラー:", error);
      showErrorMessage("復元候補を適用できませんでした");
    });
    return;
  }

  const localImageRefsButton = event.target.closest("[data-create-local-image-refs-recovery]");
  if (localImageRefsButton) {
    event.preventDefault();
    event.stopPropagation();
    if (!localImageRefsRecoveryCandidate?.items?.length) {
      showErrorMessage("localImageRefsの復元候補がありません");
      return;
    }
    indexedImageRecoveryCandidate = localImageRefsRecoveryCandidate;
    restoreIndexedImageRecoveryCandidate("merge").catch((error) => {
      console.warn("localImageRefs復元エラー:", error);
      showErrorMessage("localImageRefsから復元できませんでした");
    });
    return;
  }

  const indexedImageButton = event.target.closest("[data-recover-indexed-images-mode]");
  if (indexedImageButton) {
    event.preventDefault();
    event.stopPropagation();
    restoreIndexedImageRecoveryCandidate(indexedImageButton.dataset.recoverIndexedImagesMode).catch((error) => {
      console.warn("IndexedDB画像復元エラー:", error);
      showErrorMessage("IndexedDB画像から復元できませんでした");
    });
    return;
  }

  const button = event.target.closest("[data-recover-sorting-index]");
  if (!button) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  restoreSortingRecoveryCandidate(Number(button.dataset.recoverSortingIndex)).catch((error) => {
    console.warn("売却先仕分け復元エラー:", error);
    showErrorMessage("売却先仕分けデータを復元できませんでした");
  });
});

cloudCopyHouseholdButton?.addEventListener("click", () => {
  if (!cloudHouseholdId) {
    showErrorMessage("共有グループIDがありません");
    return;
  }

  copyText(cloudHouseholdId, "共有グループIDをコピーしました");
});

cloudJoinHouseholdButton?.addEventListener("click", async () => {
  const shouldJoin = await confirmCloudOverwriteAction("共有グループ変更");
  if (!shouldJoin) {
    return;
  }

  cloudJoinHouseholdButton.disabled = true;
  joinCloudHousehold(cloudHouseholdInput?.value || "")
    .catch((error) => {
      console.warn("共有グループ参加エラー:", error);
      showErrorMessage("共有グループへ参加できませんでした");
      setCloudStatus(`共有グループ参加に失敗しました: ${error.message}`, "warning");
    })
    .finally(() => {
      cloudJoinHouseholdButton.disabled = false;
    });
});

cloudCreateHouseholdButton?.addEventListener("click", async () => {
  const shouldCreate = await confirmCloudOverwriteAction("新しい共有グループ作成");
  if (!shouldCreate) {
    return;
  }

  cloudCreateHouseholdButton.disabled = true;
  createCloudHousehold()
    .catch((error) => {
      console.warn("共有グループ作成エラー:", error);
      showErrorMessage("共有グループを作成できませんでした");
      setCloudStatus(`共有グループ作成に失敗しました: ${error.message}`, "warning");
    })
    .finally(() => {
      cloudCreateHouseholdButton.disabled = false;
    });
});

listPhotoInput.addEventListener("change", async () => {
  const file = listPhotoInput.files[0];
  const importedReferenceItem = pendingPhotoMode === "importReference"
    ? importParsedItems.find((item) => item.importId === pendingImportReferenceId)
    : null;
  const item = items.find((currentItem) => currentItem.id === pendingPhotoItemId);
  const sortingItem = sortingItems.find((currentItem) => currentItem.id === pendingPhotoItemId);
  const targetItem = pendingPhotoCollection === "sorting" ? sortingItem : item;

  if (!file || (!targetItem && !importedReferenceItem)) {
    pendingPhotoItemId = "";
    pendingPhotoCollection = "items";
    pendingPhotoMode = "main";
    pendingImportReferenceId = "";
    pendingReferenceCategory = "";
    return;
  }

  if (!file.type.startsWith("image/")) {
    showToast("画像ファイルを選択してください", "error");
    listPhotoInput.value = "";
    pendingPhotoItemId = "";
    pendingPhotoCollection = "items";
    pendingPhotoMode = "main";
    pendingImportReferenceId = "";
    pendingReferenceCategory = "";
    return;
  }

  try {
    const imageData = await readImageFile(file);
    if (pendingPhotoMode === "importReference") {
      const memo = window.prompt("参考画像メモ", pendingReferenceCategory || "駿河屋ページスクショ") || "";
      await saveImportReferenceImage(importedReferenceItem, imageData, memo, pendingReferenceCategory);
      showToast("取込結果に参考画像を追加しました", "success");
      renderImportResults();
    } else if (pendingPhotoMode === "reference") {
      const memo = window.prompt("参考画像メモ", pendingReferenceCategory || "確認用") || "";
      await saveReferenceImage(targetItem, imageData, pendingPhotoCollection, memo, pendingReferenceCategory);
      showToast("参考画像を保存しました", "success");
    } else {
      await saveLocalItemImage(targetItem, imageData, pendingPhotoCollection);
      showToast("この端末へ写真を保存しました", "success");
    }
    if (pendingPhotoMode !== "importReference" && targetItem) {
      if (pendingPhotoCollection === "sorting") {
        renderSorting();
        if (currentSortingDetailItem?.id === targetItem.id && !sortingDetailModal.classList.contains("hidden")) {
          openSortingDetailModal(targetItem);
        }
      } else {
        render();
        if (currentDetailItem?.id === targetItem.id && !detailModal.classList.contains("hidden")) {
          openDetailModal(targetItem);
        }
      }
    }
  } catch (error) {
    showToast(error.message || "写真を保存できませんでした", "error");
  } finally {
    listPhotoInput.value = "";
    pendingPhotoItemId = "";
    pendingPhotoCollection = "items";
    pendingPhotoMode = "main";
    pendingImportReferenceId = "";
    pendingReferenceCategory = "";
  }
});

imageInput.addEventListener("change", async () => {
  const file = imageInput.files[0];

  if (!file) {
    return;
  }

  if (!file.type.startsWith("image/")) {
    showErrorMessage("画像ファイルを選択してください");
    imageInput.value = "";
    return;
  }

  try {
    isImageProcessing = true;
    setSubmitDisabled(true);
    imagePreview.classList.remove("hidden");
    imagePreview.textContent = "画像を準備中...";
    currentImageData = await readImageFile(file);
    imageProviderInput.value = imageProviderInput.value || "local";
    localImageIdInput.value = localImageIdInput.value || `LOCAL-${ensurePendingFormItemCode()}-${Date.now()}`;
    updateImageReferenceMode();
    updateImagePreview(currentImageData);
  } catch (error) {
    showErrorMessage(error.message);
    imageInput.value = "";
    currentImageData = "";
    updateImagePreview("");
  } finally {
    isImageProcessing = false;
    setSubmitDisabled(false);
  }
});

sortingImageInput?.addEventListener("change", async () => {
  const file = sortingImageInput.files[0];

  if (!file) {
    return;
  }

  if (!file.type.startsWith("image/")) {
    showErrorMessage("画像ファイルを選択してください");
    sortingImageInput.value = "";
    return;
  }

  try {
    currentSortingImageData = await readImageFile(file);
    if (sortingImageProviderInput) {
      sortingImageProviderInput.value = sortingImageProviderInput.value || "local";
    }
    if (sortingLocalImageIdInput) {
      sortingLocalImageIdInput.value = sortingLocalImageIdInput.value || `LOCAL-SORTING-${sortingIdInput.value || Date.now()}-${Date.now()}`;
    }
    updateSortingImageReferenceMode();
    updateSortingImagePreview(currentSortingImageData);
  } catch (error) {
    showErrorMessage(error.message);
    sortingImageInput.value = "";
    currentSortingImageData = "";
    updateSortingImagePreview("");
  }
});

sortingRemoveImageButton?.addEventListener("click", () => {
  if (sortingImageInput) {
    sortingImageInput.value = "";
  }
  currentSortingImageData = "";
  if (sortingLocalImageIdInput) {
    sortingLocalImageIdInput.value = "";
  }
  updateSortingImagePreview("");
});

sortingImageProviderInput?.addEventListener("change", updateSortingImageReferenceMode);
initializeSortingFormAccordions();

removeImageButton.addEventListener("click", () => {
  imageInput.value = "";
  currentImageData = "";
  updateImagePreview("");
});

formCopyItemCodeButton.addEventListener("click", () => {
  const currentItem = items.find((item) => item.id === itemIdInput.value);
  const itemCode = currentItem?.itemCode || pendingFormItemCode;

  if (!itemCode) {
    showToast("先にGoogleフォトIDを生成するか、登録後にコピーできます", "error");
    return;
  }

  copyText(itemCode, "商品IDをコピーしました。");
});

imageProviderInput.addEventListener("change", () => {
  updateImageReferenceMode();
  isFormDirty = true;
});

generateGooglePhotoIdButton.addEventListener("click", () => {
  const itemCode = ensurePendingFormItemCode();
  imageProviderInput.value = "google_photos";
  googlePhotoImageIdInput.value = googlePhotoImageIdInput.value || createGooglePhotoId(itemCode);
  updateImageReferenceMode();
  updateFormItemCodeButton();
  isFormDirty = true;
  showToast("GoogleフォトIDを生成しました", "success");
});

copyFormGooglePhotoIdButton.addEventListener("click", () => {
  const googlePhotoId = googlePhotoImageIdInput.value.trim();

  if (!googlePhotoId) {
    showToast("GoogleフォトIDが未入力です", "error");
    return;
  }

  copyText(googlePhotoId, "GoogleフォトIDをコピーしました。");
});

cancelEditButton?.addEventListener("click", async () => {
  if (isFormDirty) {
    const shouldCancel = await confirmCancel("編集中の内容を破棄しますか？");

    if (!shouldCancel) {
      return;
    }
  }

  resetForm();
});
searchInput.addEventListener("input", () => {
  render();
  scheduleSaveUiState();
});
statusFilter.addEventListener("change", () => {
  if (statusFilter.value === "売却済み") {
    itemListTargetMode = "all";
  }
  updateInventoryFilterSummary();
  render();
  saveUiState();
});
storageFilter?.addEventListener("change", () => {
  render();
  saveUiState();
});
inventoryStorageQuickFilter?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-storage-quick-scope='inventory']");
  if (!button || !storageFilter) {
    return;
  }

  const value = button.dataset.storageQuickValue || "";
  refreshListStorageFilter();
  if (value && ![...storageFilter.options].some((option) => option.value === value)) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    storageFilter.append(option);
  }
  storageFilter.value = value;
  render();
  saveUiState();
});
inventoryActiveFilterBar?.addEventListener("click", (event) => {
  if (!event.target.closest("[data-action='clear-active-filter']")) {
    return;
  }

  if (storageFilter) storageFilter.value = "";
  if (statusFilter) statusFilter.value = "";
  inventoryImageOnly = false;
  inventoryStorageUnsetOnly = false;
  if (inventoryImageOnlyFilter) inventoryImageOnlyFilter.checked = false;
  if (inventoryStorageUnsetFilter) inventoryStorageUnsetFilter.checked = false;
  render();
  saveUiState();
});
sortOrderInput.addEventListener("change", () => {
  updateInventoryOptionSummary();
  render();
  saveUiState();
});
soldSortInput.addEventListener("change", render);
storageReportSortInput.addEventListener("change", render);
inventoryImageOnlyFilter?.addEventListener("change", () => {
  inventoryImageOnly = inventoryImageOnlyFilter.checked;
  render();
  saveUiState();
});
inventoryStorageUnsetFilter?.addEventListener("change", () => {
  inventoryStorageUnsetOnly = inventoryStorageUnsetFilter.checked;
  render();
  saveUiState();
});
sortingDestinationFilter.addEventListener("change", () => {
  renderSorting();
  saveUiState();
});
sortingStatusFilter.addEventListener("change", () => {
  renderSorting();
  saveUiState();
});
sortingGenreFilter.addEventListener("change", () => {
  renderSorting();
  saveUiState();
});
sortingBoxSearchInput.addEventListener("input", () => {
  renderSorting();
  renderBoxSearchList();
  renderPackingList();
  scheduleSaveUiState();
});
sortingStorageQuickFilter?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-storage-quick-scope='sorting']");
  if (!button || !sortingBoxSearchInput) {
    return;
  }

  sortingBoxSearchInput.value = button.dataset.storageQuickValue || "";
  renderSorting();
  renderBoxSearchList();
  renderPackingList();
  saveUiState();
});
sortingActiveFilterBar?.addEventListener("click", (event) => {
  if (!event.target.closest("[data-action='clear-active-filter']")) {
    return;
  }

  if (sortingBoxSearchInput) sortingBoxSearchInput.value = "";
  if (sortingDestinationFilter) sortingDestinationFilter.value = "";
  if (sortingStatusFilter) sortingStatusFilter.value = "";
  if (sortingGenreFilter) sortingGenreFilter.value = "";
  sortingImageOnly = false;
  sortingStorageUnsetOnly = false;
  if (sortingImageOnlyFilter) sortingImageOnlyFilter.checked = false;
  if (sortingStorageUnsetFilter) sortingStorageUnsetFilter.checked = false;
  renderSorting();
  renderBoxSearchList();
  renderPackingList();
  saveUiState();
});
storageSearchLocationList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-storage-search-value]");
  if (!button) {
    return;
  }

  const storageLocation = button.dataset.storageSearchValue || "";
  sortingBoxSearchInput.value = storageLocation === "未設定" ? "未設定" : storageLocation;
  if (storageFilter) {
    refreshListStorageFilter();
    storageFilter.value = [...storageFilter.options].some((option) => option.value === storageLocation)
      ? storageLocation
      : "";
  }
  renderSorting();
  renderBoxSearchList();
  renderPackingList();
  scheduleSaveUiState();
});
shippingManagementStatusFilter?.addEventListener("change", renderShippingManagementList);
shippingManagementList?.addEventListener("click", (event) => {
  const card = event.target.closest(".shipping-management-card");

  if (!card) {
    return;
  }

  const item = sortingItems.find((currentItem) => currentItem.id === card.dataset.id);
  if (item) {
    openShippingManagementItemDetail(item);
  }
});
shippingManagementList?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  const card = event.target.closest(".shipping-management-card");
  if (!card) {
    return;
  }

  event.preventDefault();
  const item = sortingItems.find((currentItem) => currentItem.id === card.dataset.id);
  if (item) {
    openShippingManagementItemDetail(item);
  }
});
sortingCsvButton.addEventListener("click", exportSortingCsv);
packingListCsvButton.addEventListener("click", exportPackingListCsv);
togglePackingListButton.addEventListener("click", () => {
  const isHidden = packingListPanel.classList.toggle("hidden");
  togglePackingListButton.textContent = isHidden ? "箱詰めリストを見る" : "箱詰めリストを閉じる";
});
sortingCancelButton.addEventListener("click", resetSortingForm);
sortingForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formItem = createSortingFormItem();

  if (!formItem.name) {
    return;
  }

  const editingIndex = sortingItems.findIndex((item) => item.id === formItem.id);

  const previousSortingItems = [...sortingItems];

  if (editingIndex >= 0) {
    sortingItems[editingIndex] = formItem;
  } else {
    sortingItems.unshift(formItem);
  }

  try {
    if (formItem.imageData) {
      await saveLocalItemImage(formItem, formItem.imageData, "sorting");
    }
  } catch (error) {
    sortingItems = previousSortingItems;
    showToast(error.message || "画像を保存できませんでした", "error");
    return;
  }

  saveSortingItems();
  resetSortingForm();
  renderSorting();
});

function closeSortingActionMenus(exceptMenu = null) {
  document.querySelectorAll(
    "#sortingTableBody .row-action-menu[open], #sortingWorkCardList .row-action-menu[open]",
  ).forEach((menu) => {
    if (menu !== exceptMenu) {
      menu.removeAttribute("open");
    }
  });
}

sortingTableBody.addEventListener("click", async (event) => {
  const summary = event.target.closest(".row-action-menu summary");

  if (summary) {
    closeSortingActionMenus(summary.closest(".row-action-menu"));
    return;
  }

  const button = event.target.closest("button");
  const row = event.target.closest("tr");

  if (!row) {
    return;
  }

  const item = sortingItems.find((currentItem) => currentItem.id === row.dataset.id);

  if (!item) {
    return;
  }

  if (!button && !event.target.closest("summary, a, input, select, textarea, label")) {
    openSortingDetailModal(item);
    return;
  }

  if (!button) {
    return;
  }

  if (button.dataset.action === "edit-sorting") {
    closeSortingActionMenus();
    startSortingEdit(item);
  }

  if (button.dataset.action === "view-sorting-detail") {
    closeSortingActionMenus();
    openSortingDetailModal(item);
  }

  if (button.dataset.action === "return-source-item") {
    closeSortingActionMenus();
    returnToSourceItem(item);
  }

  if (button.dataset.action === "change-sorting-photo") {
    closeSortingActionMenus();
    requestLocalPhoto(item.id, "sorting");
  }

  if (button.dataset.action === "add-sorting-reference-image") {
    closeSortingActionMenus();
    requestReferenceImage(item.id, "sorting");
  }

  if (button.dataset.action === "remove-sorting-photo") {
    closeSortingActionMenus();
    removeLocalPhoto(item, "sorting");
  }

  if (button.dataset.action === "delete-sorting") {
    closeSortingActionMenus();
    await deleteSortingItem(item);
  }
});

sortingTableBody.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  const row = event.target.closest("tr");

  if (!row || event.target.closest("button, summary, a, input, select, textarea")) {
    return;
  }

  const item = sortingItems.find((currentItem) => currentItem.id === row.dataset.id);

  if (item) {
    event.preventDefault();
    openSortingDetailModal(item);
  }
});

sortingShippingModeButton.addEventListener("click", () => {
  isSortingShippingMode = !isSortingShippingMode;
  if (!isSortingShippingMode) {
    sortingShippingCheckedIds.clear();
  }
  renderSorting();
  saveUiState();
});

sortingItemSearchInput.addEventListener("input", () => {
  renderSorting();
  scheduleSaveUiState();
});
sortingOrderInput.addEventListener("change", () => {
  renderSorting();
  saveUiState();
});
sortingDensityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sortingDensityMode = button.dataset.sortingDensity === "standard" ? "standard" : "compact";
    renderSorting();
    saveUiState();
  });
});
sortingImageOnlyFilter?.addEventListener("change", () => {
  sortingImageOnly = sortingImageOnlyFilter.checked;
  renderSorting();
  saveUiState();
});
sortingStorageUnsetFilter?.addEventListener("change", () => {
  sortingStorageUnsetOnly = sortingStorageUnsetFilter.checked;
  renderSorting();
  saveUiState();
});

sortingWorkCardList.addEventListener("click", async (event) => {
  const card = event.target.closest(".sorting-work-card");

  if (!card) {
    return;
  }

  const summary = event.target.closest(".row-action-menu summary");
  if (summary) {
    event.stopPropagation();
    closeSortingActionMenus(summary.closest(".row-action-menu"));
    return;
  }

  const item = sortingItems.find((currentItem) => currentItem.id === card.dataset.id);

  if (!item) {
    return;
  }

  const checkbox = event.target.closest('[data-action="toggle-shipping-pick"]');
  if (checkbox) {
    event.stopPropagation();
    if (checkbox.checked) {
      sortingShippingCheckedIds.add(item.id);
    } else {
      sortingShippingCheckedIds.delete(item.id);
    }
    renderSorting();
    return;
  }

  const actionTarget = event.target.closest("[data-action]");
  const button = event.target.closest("button");
  if (button?.closest(".row-action-menu")) {
    event.stopPropagation();
  }

  const action = button?.dataset.action || actionTarget?.dataset.action || "";

  if (actionTarget && actionTarget !== checkbox) {
    event.stopPropagation();
  }

  if (action === "view-sorting-detail") {
    closeSortingActionMenus();
    openSortingDetailModal(item);
    return;
  }
  if (action === "edit-sorting") {
    closeSortingActionMenus();
    startSortingEdit(item);
    return;
  }
  if (action === "delete-sorting") {
    closeSortingActionMenus();
    await deleteSortingItem(item);
    return;
  }
  if (action === "copy-source-item-code") {
    const sourceItem = items.find((currentItem) => currentItem.id === card.dataset.sourceId);
    copyText(getItemCode(sourceItem), "商品IDをコピーしました。");
    return;
  }
  if (action === "change-sorting-photo") {
    requestLocalPhoto(item.id, "sorting");
    return;
  }
  if (action === "add-sorting-reference-image") {
    requestReferenceImage(item.id, "sorting");
    return;
  }
  if (action === "quick-edit-storage") {
    openSortingInlineEditor(item, action, actionTarget || button);
    return;
  }
  if (action === "quick-edit-appraisal") {
    openSortingInlineEditor(item, action, actionTarget || button);
    return;
  }
  if (action === "quick-edit-memo") {
    openSortingInlineEditor(item, action, actionTarget || button);
    return;
  }
  if (action === "quick-edit-destination") {
    openSortingInlineEditor(item, action, actionTarget || button);
    return;
  }
  if (action === "quick-edit-status") {
    openSortingInlineEditor(item, action, actionTarget || button);
    return;
  }
  if (action === "quick-edit-shipping") {
    openSortingInlineEditor(item, action, actionTarget || button);
    return;
  }
  if (action === "remove-sorting-photo") {
    removeLocalPhoto(item, "sorting");
    return;
  }

  if (!event.target.closest("summary, button, label, input")) {
    openSortingDetailModal(item);
  }
});

sortingWorkCardList.addEventListener("keydown", (event) => {
  if ((event.key !== "Enter" && event.key !== " ") || event.target.closest("button, summary, input, label")) {
    return;
  }
  const card = event.target.closest(".sorting-work-card");
  const item = card ? sortingItems.find((currentItem) => currentItem.id === card.dataset.id) : null;
  if (item) {
    event.preventDefault();
    openSortingDetailModal(item);
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest("#sortingTableWrap .row-action-menu, #sortingWorkCardList .row-action-menu")) {
    closeSortingActionMenus();
  }
  if (!event.target.closest(".sorting-inline-editor, #sortingWorkCardList [data-action]")) {
    closeSortingInlineEditor();
  }
});

todayCommandList?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");

  if (!button) {
    return;
  }

  if (button.dataset.action === "open-sorting") {
    setActiveNavigation("sorting");
    renderSorting();
    document.querySelector("#sortingTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (button.dataset.action === "open-shipping") {
    setActiveNavigation("shipping");
    renderSorting();
    document.querySelector("#shippingManagementTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (button.dataset.action === "open-input-issues") {
    const item = items.find((currentItem) => currentItem.id === button.dataset.id);

    if (item) {
      startEdit(item);
    } else {
      setActiveNavigation("form");
    }

    document.querySelector("#formTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

todayBuriedButton?.addEventListener("click", () => {
  selectedStorageGroup = todayBuriedButton.dataset.storage || "";
  itemListGroupMode = "storage";
  itemListTargetMode = "inventory";
  setActiveNavigation("list");
  render();
  document.querySelector("#listTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

destinationProfitButton?.addEventListener("click", () => {
  sortingDestinationFilter.value = destinationProfitButton.dataset.destination || "";
  setActiveNavigation("sorting");
  renderSorting();
  document.querySelector("#sortingListTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll(".profit-candidate-card").forEach((card) => {
  card.role = "button";
  card.tabIndex = 0;
  card.addEventListener("click", (event) => {
    if (event.target.closest("button, a, input, select, textarea, summary")) {
      return;
    }

    card.querySelector("button:not(:disabled)")?.click();
  });
  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    card.querySelector("button:not(:disabled)")?.click();
  });
});

document.querySelector(".analysis-input-preview")?.addEventListener("click", (event) => {
  if (event.target.closest("button, a, input, select, textarea, summary")) {
    return;
  }

  if (!analysisInputIssueEditButton.disabled) {
    analysisInputIssueEditButton.click();
  }
});

const analysisInputPreviewCard = document.querySelector(".analysis-input-preview");
if (analysisInputPreviewCard) {
  analysisInputPreviewCard.role = "button";
  analysisInputPreviewCard.tabIndex = 0;
  analysisInputPreviewCard.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    if (!analysisInputIssueEditButton.disabled) {
      analysisInputIssueEditButton.click();
    }
  });
}

analysisInputIssueEditButton?.addEventListener("click", () => {
  const item = items.find((currentItem) => currentItem.id === analysisInputIssueEditButton.dataset.id);

  if (item) {
    startEdit(item);
  } else {
    setActiveNavigation("form");
  }

  document.querySelector("#formTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

sortingPriorityList?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action='open-sorting']");

  if (!button) {
    return;
  }

  setActiveNavigation("sorting");
  renderSorting();
  document.querySelector("#sortingTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

inputIssueList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  const row = event.target.closest(".input-issue-item");

  if (!row) {
    return;
  }

  const item = items.find((currentItem) => currentItem.id === row.dataset.id);

  if (!item) {
    return;
  }

  if (!button) {
    startEdit(item);
    setWorkView("form");
    document.querySelector("#formTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (button.dataset.action === "edit-input-issue") {
    startEdit(item);
    setWorkView("form");
    document.querySelector("#formTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (button.dataset.action !== "save-input-issue") {
    return;
  }

  row.querySelectorAll("[data-field]").forEach((field) => {
    const value = field.value.trim();

    if (value === "") {
      return;
    }

    item[field.dataset.field] = value;
  });

  saveItems();
  render();
});
inputIssueList.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  const row = event.target.closest(".input-issue-item");

  if (!row) {
    return;
  }

  const item = items.find((currentItem) => currentItem.id === row.dataset.id);

  if (!item) {
    return;
  }

  event.preventDefault();
  startEdit(item);
  setWorkView("form");
  document.querySelector("#formTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
});
toggleMonthlyProfitButton?.addEventListener("click", () => {
  const isHidden = monthlyProfitPanel.classList.toggle("hidden");
  toggleMonthlyProfitButton.textContent = isHidden ? "月別利益を見る" : "月別利益を閉じる";
});
toggleInputIssueButton?.addEventListener("click", () => {
  const isHidden = inputIssueList.classList.toggle("hidden");
  toggleInputIssueButton.textContent = isHidden ? "入力不足商品を見る" : "入力不足商品を閉じる";
});
toggleAnalysisButton?.addEventListener("click", () => {
  const isHidden = analysisPanel.classList.toggle("hidden");
  toggleAnalysisButton.textContent = isHidden ? "保管場所カルテ・その他分析を開く" : "保管場所カルテ・その他分析を閉じる";
});
toggleUnlistedTreasureButton?.addEventListener("click", () => {
  const isHidden = unlistedTreasurePanel.classList.toggle("hidden");
  toggleUnlistedTreasureButton.textContent = isHidden ? "未出品埋蔵金ランキングを見る" : "未出品埋蔵金ランキングを閉じる";
});
toggleBuriedTreasureButton?.addEventListener("click", () => {
  const isHidden = buriedTreasurePanel.classList.toggle("hidden");
  toggleBuriedTreasureButton.textContent = isHidden ? "埋蔵金ランキングを見る" : "埋蔵金ランキングを閉じる";
});
monthlyProfitList.addEventListener("click", (event) => {
  const item = event.target.closest(".monthly-profit-item");

  if (!item) {
    return;
  }

  openMonthlyProfitKey = openMonthlyProfitKey === item.dataset.monthKey ? "" : item.dataset.monthKey;
  renderMonthlyProfitList(items.filter((currentItem) => getItemStatus(currentItem) === "売却済み"));
});
monthlyProfitList.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  const item = event.target.closest(".monthly-profit-item");

  if (!item) {
    return;
  }

  event.preventDefault();
  openMonthlyProfitKey = openMonthlyProfitKey === item.dataset.monthKey ? "" : item.dataset.monthKey;
  renderMonthlyProfitList(items.filter((currentItem) => getItemStatus(currentItem) === "売却済み"));
});
createManualBackupButton?.addEventListener("click", () => {
  const memo = String(backupMemoInput?.value || "").trim();
  createStoredBackup("手動", { toast: true, memo }).then(() => {
    if (backupMemoInput) {
      backupMemoInput.value = "";
    }
  }).catch((error) => {
    console.warn("手動バックアップ作成エラー:", error);
    showErrorMessage("バックアップを作成できませんでした");
  });
});
exportButton?.addEventListener("click", () => {
  exportBackup().catch((error) => {
    console.warn("バックアップ書き出しエラー:", error);
    showErrorMessage("バックアップを書き出せませんでした");
  });
});
exportButtonTop?.addEventListener("click", () => {
  exportBackup().catch((error) => {
    console.warn("バックアップ書き出しエラー:", error);
    showErrorMessage("バックアップを書き出せませんでした");
  });
});
itemCsvExportButton?.addEventListener("click", exportSelectedItemCsv);
importButton?.addEventListener("click", () => {
  importFileInput.click();
});
importButtonTop?.addEventListener("click", () => {
  importFileInput.click();
});
importFileInput.addEventListener("change", () => {
  importBackup(importFileInput.files[0]);
});
backupList?.addEventListener("click", async (event) => {
  try {
    const restoreButton = event.target.closest("[data-restore-backup-id]");
    const exportStoredButton = event.target.closest("[data-export-backup-id]");
    const editMemoButton = event.target.closest("[data-edit-backup-memo-id]");
    const deleteButton = event.target.closest("[data-delete-backup-id]");
    const backups = loadStoredBackups();

    if (restoreButton) {
      const entry = backups.find((backup) => backup.id === restoreButton.dataset.restoreBackupId);
      if (!entry) {
        showErrorMessage("バックアップが見つかりません");
        return;
      }
      await confirmAndApplyBackup(entry.backup, getSelectedBackupRestoreMode());
      return;
    }

    if (exportStoredButton) {
      const entry = backups.find((backup) => backup.id === exportStoredButton.dataset.exportBackupId);
      if (!entry) {
        showErrorMessage("バックアップが見つかりません");
        return;
      }
      downloadJsonFile(createBackupFileName(), entry.backup);
      showSuccessMessage("バックアップを書き出しました");
      return;
    }

    if (editMemoButton) {
      const entry = backups.find((backup) => backup.id === editMemoButton.dataset.editBackupMemoId);
      if (!entry) {
        showErrorMessage("バックアップが見つかりません");
        return;
      }
      const currentMemo = String(entry.memo || entry.backup?.memo || entry.backup?.metadata?.memo || "").trim();
      const nextMemo = window.prompt("バックアップメモ", currentMemo);
      if (nextMemo === null) {
        return;
      }
      entry.memo = String(nextMemo || "").trim();
      if (entry.backup) {
        entry.backup.memo = entry.memo;
        entry.backup.metadata = {
          ...(entry.backup.metadata || {}),
          memo: entry.memo,
        };
      }
      saveStoredBackups(backups);
      showSuccessMessage("バックアップメモを保存しました");
      return;
    }

    if (deleteButton) {
      const entry = backups.find((backup) => backup.id === deleteButton.dataset.deleteBackupId);
      if (!entry) {
        showErrorMessage("バックアップが見つかりません");
        return;
      }
      const shouldDelete = await showAppDialog({
        title: "バックアップを削除しますか？",
        message: "このバックアップを削除しますか？復元できなくなります。",
        confirmText: "削除する",
        danger: true,
      });
      if (!shouldDelete) {
        return;
      }
      saveStoredBackups(backups.filter((backup) => backup.id !== entry.id));
      showSuccessMessage("バックアップを削除しました");
    }
  } catch (error) {
    console.warn("バックアップ操作エラー:", error);
    showErrorMessage(`バックアップ操作に失敗しました。${error.message || ""}`);
  }
});
quickSearchInput.addEventListener("input", renderQuickSearchResults);
quickSearchResults.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  const row = event.target.closest(".quick-search-result");

  if (!button || !row) {
    return;
  }

  if (row.dataset.type === "item") {
    const item = items.find((currentItem) => currentItem.id === row.dataset.id);

    if (!item) {
      return;
    }

    if (button.dataset.action === "quick-edit") {
      startEdit(item);
      document.querySelector("#formTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (button.dataset.action === "quick-relist") {
      relistItem(item);
    }

    if (button.dataset.action === "quick-location") {
      searchInput.value = item.storageLocation || getListingTitle(item);
      statusFilter.value = "";
      setActiveNavigation("list");
      render();
      document.querySelector("#listTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  if (row.dataset.type === "sorting") {
    const sortingItem = sortingItems.find((currentItem) => currentItem.id === row.dataset.id);

    if (!sortingItem) {
      return;
    }

    sortingBoxSearchInput.value = sortingItem.boxNumber || sortingItem.storageLocation || sortingItem.name || "";
    setActiveNavigation("box");
    renderSorting();
    document.querySelector("#boxSearchTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
copyDescriptionModalButton.addEventListener("click", () => {
  copyText(currentDescriptionModalText, "商品説明文をコピーしました。");
});
closeDescriptionModalButton.addEventListener("click", closeDescriptionModal);
closeDescriptionModalFooterButton.addEventListener("click", closeDescriptionModal);
descriptionModal.addEventListener("click", (event) => {
  if (event.target === descriptionModal) {
    closeDescriptionModal();
  }
});
copyDetailTitleButton.addEventListener("click", () => {
  copyText(currentDetailItem ? getListingTitle(currentDetailItem) : "", "商品タイトルをコピーしました。");
});
copyDetailDescriptionButton.addEventListener("click", () => {
  copyText(currentDetailItem?.description || "", "商品説明文をコピーしました。");
});
copyDetailItemIdButton.addEventListener("click", () => {
  copyText(currentDetailItem ? getItemCode(currentDetailItem) : "", "商品IDをコピーしました。");
});
copyGooglePhotoIdButton.addEventListener("click", () => {
  const googlePhotoId = normalizeImageRefs(currentDetailItem?.imageRefs).googlePhotoId;
  copyText(googlePhotoId, "GoogleフォトIDをコピーしました。");
  closeDetailMoreActionMenu();
});
copyGooglePhotoTagButton.addEventListener("click", () => {
  copyText(currentDetailItem ? createGooglePhotoTagText(currentDetailItem) : "", "Googleフォト用タグをコピーしました。");
  closeDetailMoreActionMenu();
});
copyMercariUrlButton.addEventListener("click", () => {
  copyText(currentDetailItem?.listingUrl || "", "メルカリURLをコピーしました。");
  closeDetailMoreActionMenu();
});
prepareRelistButton.addEventListener("click", () => {
  if (currentDetailItem) {
    closeDetailMoreActionMenu();
    closeDetailModal();
    relistItem(currentDetailItem);
  }
});
editDetailItemButton.addEventListener("click", () => {
  if (currentDetailItem) {
    const itemToEdit = currentDetailItem;
    closeDetailModal();
    startEdit(itemToEdit, { returnToDetail: true });
  }
});
changeDetailLocalPhotoButton.addEventListener("click", () => {
  if (currentDetailItem) {
    requestLocalPhoto(currentDetailItem.id);
    closeDetailMoreActionMenu();
  }
});
removeDetailLocalPhotoButton.addEventListener("click", () => {
  if (currentDetailItem) {
    removeLocalPhoto(currentDetailItem);
    closeDetailMoreActionMenu();
  }
});
deleteDetailItemButton?.addEventListener("click", async () => {
  if (!currentDetailItem) {
    return;
  }

  const itemToDelete = currentDetailItem;
  const shouldDelete = await confirmDelete(`「${getListingTitle(itemToDelete)}」を削除しますか？`);

  if (!shouldDelete) {
    return;
  }

  closeDetailMoreActionMenu();
  items = items.filter((item) => item.id !== itemToDelete.id);
  saveItems();
  deleteItemFromSupabase(itemToDelete.id).catch((error) => {
    handleCloudSaveError(error);
  });
  closeDetailModal();
  resetForm();
  render();
});
previousDetailItemButton?.addEventListener("click", () => {
  openAdjacentDetailItem(-1);
});
nextDetailItemButton?.addEventListener("click", () => {
  openAdjacentDetailItem(1);
});
closeDetailModalButton.addEventListener("click", closeDetailModal);
detailModal.addEventListener("click", (event) => {
  if (event.target === detailModal) {
    closeDetailModal();
    return;
  }

  if (!event.target.closest(".detail-more-action-menu")) {
    closeDetailMoreActionMenu();
  }
});
closeSortingDetailModalButton.addEventListener("click", closeSortingDetailModal);
sortingDetailModal.addEventListener("click", (event) => {
  if (event.target === sortingDetailModal) {
    closeSortingDetailModal();
  }
});
editSortingDetailButton.addEventListener("click", () => {
  if (currentSortingDetailItem) {
    const itemToEdit = currentSortingDetailItem;
    closeSortingDetailModal();
    startSortingEdit(itemToEdit);
  }
});
deleteSortingDetailButton.addEventListener("click", async () => {
  if (currentSortingDetailItem && await deleteSortingItem(currentSortingDetailItem)) {
    closeSortingDetailModal();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !descriptionModal.classList.contains("hidden")) {
    closeDescriptionModal();
  }

  if (event.key === "Escape" && !detailModal.classList.contains("hidden")) {
    closeDetailModal();
  }

  if (event.key === "Escape" && !sortingDetailModal.classList.contains("hidden")) {
    closeSortingDetailModal();
  }
});
shippingMethodInput.addEventListener("change", () => {
  shippingSizeInput.value = "";
  applyShippingMethodCost();
});
shippingSizeInput.addEventListener("change", applyShippingSizeCost);
[categoryInput, conditionInput, storageLocationInput, shippingMethodInput, shippingSizeInput].forEach((select) => {
  select.addEventListener("change", () => {
    updateSelectPlaceholderState(select);
    updateSubmitButtonState();
  });
});
conditionQuickButtons.forEach((button) => {
  button.addEventListener("click", () => {
    conditionInput.value = button.dataset.conditionValue;
    updateSelectPlaceholderState(conditionInput);
    updateConditionQuickButtons();
    updateSubmitButtonState();
    isFormDirty = true;
  });
});
conditionInput.addEventListener("change", () => {
  updateConditionQuickButtons();
  updateSubmitButtonState();
});
statusInput.addEventListener("change", updateSoldFieldsVisibility);
descriptionTemplateInput.addEventListener("change", applyDescriptionTemplate);
parseImportButton?.addEventListener("click", parseImportInput);
parseSurugayaEstimateButton?.addEventListener("click", parseSurugayaEstimateInput);
saveSurugayaEstimateButton?.addEventListener("click", saveCurrentSurugayaEstimate);
restoreSurugayaEstimateOrderButton?.addEventListener("click", restoreSurugayaEstimateMailOrder);
createSurugayaShippingListButton?.addEventListener("click", createSurugayaShippingList);
createSurugayaNoSendListButton?.addEventListener("click", createSurugayaNoSendList);
surugayaEstimateList?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-estimate-decision]");
  if (!button) {
    return;
  }
  const card = button.closest("[data-estimate-id]");
  if (!card) {
    return;
  }
  updateSurugayaEstimateRow(card.dataset.estimateId, { decision: button.dataset.estimateDecision, reason: "手動変更" });
});
surugayaEstimateList?.addEventListener("input", (event) => {
  const input = event.target.closest("[data-estimate-memo]");
  if (!input) {
    return;
  }
  const id = input.dataset.estimateMemo;
  surugayaEstimateRows = surugayaEstimateRows.map((row) => row.id === id ? { ...row, memo: input.value } : row);
  renderSurugayaEstimateStats();
});
importResultList?.addEventListener("change", (event) => {
  const select = event.target.closest("select[data-import-match-index]");
  if (select) {
    updateImportMatchSelection(select);
  }
});
fillBlankImportFieldsButton?.addEventListener("click", fillBlankImportFields);
applyImportMatchesButton?.addEventListener("click", applyImportMatchesToExistingItems);
registerImportNewItemsButton?.addEventListener("click", registerImportNewItems);
addImportSortingButton?.addEventListener("click", addImportItemsToSorting);
saveSettingsButton.addEventListener("click", saveSettingsFromForm);
addCategoryButton.addEventListener("click", addCategoryFromForm);
addStorageButton.addEventListener("click", addStorageFromForm);
addShippingMethodButton.addEventListener("click", addShippingMethodFromForm);
addAppraisalButton.addEventListener("click", addAppraisalSourceFromForm);
addTemplateButton.addEventListener("click", addTemplateFromForm);
toggleCategoryAddButton.addEventListener("click", () => {
  toggleSettingsAddRow(categoryAddRow, toggleCategoryAddButton, "追加フォームを閉じる", "カテゴリを追加");
});
toggleStorageAddButton.addEventListener("click", () => {
  toggleSettingsAddRow(storageAddRow, toggleStorageAddButton, "追加フォームを閉じる", "保管場所を追加");
});
toggleShippingAddButton.addEventListener("click", () => {
  toggleSettingsAddRow(shippingAddRow, toggleShippingAddButton, "追加フォームを閉じる", "配送方法を追加");
});
toggleAppraisalAddButton.addEventListener("click", () => {
  toggleSettingsAddRow(appraisalAddRow, toggleAppraisalAddButton, "追加フォームを閉じる", "査定先を追加");
});
toggleTemplateAddButton.addEventListener("click", () => {
  toggleSettingsAddRow(templateAddRow, toggleTemplateAddButton, "追加フォームを閉じる", "テンプレートを追加");
});
resetCategoriesButton.addEventListener("click", resetCategoriesToDefault);
resetStorageButton.addEventListener("click", resetStorageToDefault);
resetShippingButton.addEventListener("click", resetShippingToDefault);
resetAppraisalButton.addEventListener("click", resetAppraisalToDefault);
resetTemplatesButton.addEventListener("click", resetTemplatesToDefault);
[categorySettingsList, storageSettingsList, shippingSettingsList, appraisalSettingsList, templateSettingsList].forEach(bindMasterSettingsList);
[plannedPriceInput, shippingCostInput, purchaseCostInput].forEach((input) => {
  input.addEventListener("input", updateProfitPreview);
});
listingTitleInput.addEventListener("input", updateSubmitButtonState);
[actualSalePriceInput, actualShippingCostInput, purchaseCostInput].forEach((input) => {
  input.addEventListener("input", updateActualProfitPreview);
});

refreshCategoryOptions();
refreshStorageLocationOptions();
refreshShippingMethodOptions();
refreshTemplateOptions();
restoreUiControlValues();
listingDateInput.value = formatDateInputValue();
if (surugayaEstimateDateInput && !surugayaEstimateDateInput.value) {
  surugayaEstimateDateInput.value = formatDateInputValue();
}
saveSettings();
saveTemplates();
if (ensureItemCodes(items)) {
  saveItemsToLocalStorage();
}
renderSettings();
renderImportResults();
renderSurugayaEstimateRows();
updateProfitPreview();
updateSoldFieldsVisibility();
updateImageReferenceMode();
updateFormSelectPlaceholderStates();
updateConditionQuickButtons();
collapseCloudPanelOnMobile();
collapseSortingExtrasOnMobile();
restoreInventoryOptionsOpenState();
setActiveNavigation(currentView || "form");
restoreUiAfterInitialRender();
hydrateLocalImagesFromIndexedDb().finally(() => {
  initializeCloud();
});
