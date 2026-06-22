const STORAGE_KEY = "mercari-listing-helper-items";
const SETTINGS_KEY = "mercari-listing-helper-settings";
const TEMPLATES_KEY = "mercari-listing-helper-templates";
const SORTING_STORAGE_KEY = "mercari-listing-helper-destination-sorting";
const SUPABASE_URL = "https://pkbgvfurouxmghujlscs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_pJVEFb8bDDTrdOaCYU3BRQ_jUnbesuv";

const form = document.querySelector("#itemForm");
const formDetails = document.querySelector(".form-details");
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
const categoryInput = document.querySelector("#category");
const conditionInput = document.querySelector("#condition");
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
const submitButton = document.querySelector("#submitButton");
const cancelEditButton = document.querySelector("#cancelEditButton");
const formTitle = document.querySelector("#formTitle");
const itemCount = document.querySelector("#itemCount");
const sideNavLinks = document.querySelectorAll(".side-nav a[data-view]");
const cloudPanel = document.querySelector(".cloud-panel");
const cloudStatus = document.querySelector("#cloudStatus");
const cloudLoginForm = document.querySelector("#cloudLoginForm");
const cloudEmailInput = document.querySelector("#cloudEmailInput");
const cloudPasswordInput = document.querySelector("#cloudPasswordInput");
const cloudLoginButton = document.querySelector("#cloudLoginButton");
const cloudLogoutButton = document.querySelector("#cloudLogoutButton");
const migrateToSupabaseButton = document.querySelector("#migrateToSupabaseButton");
const searchInput = document.querySelector("#searchInput");
const quickSearchInput = document.querySelector("#quickSearchInput");
const quickSearchResults = document.querySelector("#quickSearchResults");
const listShowAllButton = document.querySelector("#listShowAllButton");
const listBoxSearchButton = document.querySelector("#listBoxSearchButton");
const listShippingManagementButton = document.querySelector("#listShippingManagementButton");
const statusFilter = document.querySelector("#statusFilter");
const sortOrderInput = document.querySelector("#sortOrder");
const listViewButton = document.querySelector("#listViewButton");
const cardViewButton = document.querySelector("#cardViewButton");
const viewToggle = document.querySelector(".view-toggle");
const exportButton = document.querySelector("#exportButton");
const importButton = document.querySelector("#importButton");
const exportButtonTop = document.querySelector("#exportButtonTop");
const importButtonTop = document.querySelector("#importButtonTop");
const backupControlsTop = document.querySelector(".backup-controls-top");
const importFileInput = document.querySelector("#importFileInput");
const tableWrap = document.querySelector("#tableWrap");
const compactTableGrid = document.querySelector("#compactTableGrid");
const inventoryShelfList = document.querySelector("#inventoryShelfList");
const mobileCardList = document.querySelector("#mobileCardList");
const emptyState = document.querySelector("#emptyState");
const itemTableBody = document.querySelector("#itemTableBody");
const dashboardMonthlyProfit = document.querySelector("#dashboardMonthlyProfit");
const dashboardTotalProfit = document.querySelector("#dashboardTotalProfit");
const dashboardMonthlySoldCount = document.querySelector("#dashboardMonthlySoldCount");
const dashboardTotalSoldCount = document.querySelector("#dashboardTotalSoldCount");
const dashboardHeroTotalProfit = document.querySelector("#dashboardHeroTotalProfit");
const dashboardHeroUnlistedCount = document.querySelector("#dashboardHeroUnlistedCount");
const dashboardHeroShippingWaitCount = document.querySelector("#dashboardHeroShippingWaitCount");
const dashboardHeroBuriedValue = document.querySelector("#dashboardHeroBuriedValue");
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
const sortingMercariPriceInput = document.querySelector("#sortingMercariPrice");
const sortingYahooPriceInput = document.querySelector("#sortingYahooPrice");
const sortingSurugayaPriceInput = document.querySelector("#sortingSurugayaPrice");
const sortingRyobanPriceInput = document.querySelector("#sortingRyobanPrice");
const sortingEcoRingPriceInput = document.querySelector("#sortingEcoRingPrice");
const sortingClothesPriceInput = document.querySelector("#sortingClothesPrice");
const sortingOtherPriceInput = document.querySelector("#sortingOtherPrice");
const sortingMemoInput = document.querySelector("#sortingMemo");
const sortingSubmitButton = document.querySelector("#sortingSubmitButton");
const sortingCancelButton = document.querySelector("#sortingCancelButton");
const sortingCsvButton = document.querySelector("#sortingCsvButton");
const sortingDestinationFilter = document.querySelector("#sortingDestinationFilter");
const sortingStatusFilter = document.querySelector("#sortingStatusFilter");
const sortingGenreFilter = document.querySelector("#sortingGenreFilter");
const sortingBoxSearchInput = document.querySelector("#sortingBoxSearch");
const sortingSummaryGrid = document.querySelector("#sortingSummaryGrid");
const shippingDashboardGrid = document.querySelector("#shippingDashboardGrid");
const shippingPriorityList = document.querySelector("#shippingPriorityList");
const analysisShippingPriorityList = document.querySelector("#analysisShippingPriorityList");
const shippingCompletedList = document.querySelector("#shippingCompletedList");
const analysisShippingCompletedList = document.querySelector("#analysisShippingCompletedList");
const boxSearchList = document.querySelector("#boxSearchList");
const togglePackingListButton = document.querySelector("#togglePackingListButton");
const packingListCsvButton = document.querySelector("#packingListCsvButton");
const packingListPanel = document.querySelector("#packingListPanel");
const packingList = document.querySelector("#packingList");
const sortingEmptyState = document.querySelector("#sortingEmptyState");
const sortingTableWrap = document.querySelector("#sortingTableWrap");
const sortingTableBody = document.querySelector("#sortingTableBody");
const categorySettingsList = document.querySelector("#categorySettingsList");
const newCategoryNameInput = document.querySelector("#newCategoryName");
const addCategoryButton = document.querySelector("#addCategoryButton");
const shippingSettingsList = document.querySelector("#shippingSettingsList");
const newShippingNameInput = document.querySelector("#newShippingName");
const newShippingCostInput = document.querySelector("#newShippingCost");
const addShippingMethodButton = document.querySelector("#addShippingMethodButton");
const templateSettingsList = document.querySelector("#templateSettingsList");
const newTemplateNameInput = document.querySelector("#newTemplateName");
const newTemplateContentInput = document.querySelector("#newTemplateContent");
const addTemplateButton = document.querySelector("#addTemplateButton");
const saveSettingsButton = document.querySelector("#saveSettingsButton");
const resetSettingsButton = document.querySelector("#resetSettingsButton");
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
const prepareRelistButton = document.querySelector("#prepareRelistButton");
const closeDetailModalButton = document.querySelector("#closeDetailModalButton");
const closeDetailModalFooterButton = document.querySelector("#closeDetailModalFooterButton");

let items = loadItems();
let sortingItems;
let settings;
let descriptionTemplates;
let currentDescriptionModalText = "";
let currentDetailItem = null;
let openMonthlyProfitKey = "";
let currentImageData = "";
let isImageProcessing = false;
let lastSavedShortcut = null;
let isFormDirty = false;
let itemListViewMode = "list";
let supabaseClient = null;
let supabaseSession = null;
let cloudUser = null;
let cloudHouseholdId = "";
let isCloudReady = false;
let hasCloudSaveWarning = false;
let isSettingsDirty = false;

function isMobileViewport() {
  return window.matchMedia("(max-width: 700px)").matches;
}

const DEFAULT_STATUS = "未出品";
const MERCARI_FEE_RATE = 0.1;
const MIN_PROFIT_RATE_COST = 1;
const MIN_PROFIT_RATE_PROFIT = 500;
const BACKUP_VERSION = 1;
const SORTING_DESTINATIONS = ["未定", "メルカリ", "ヤフオク", "駿河屋", "良盤ディスク", "エコリング", "服買取", "まんだらけ", "処分", "その他"];
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

settings = loadSettings();
descriptionTemplates = loadTemplates();

function loadItems() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
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
    return Array.isArray(parsed) ? parsed.map(normalizeSortingItem) : [];
  } catch {
    return [];
  }
}

function normalizeSortingItem(item) {
  return {
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
    otherPrice: parseMoney(item.otherPrice),
    destination: SORTING_DESTINATIONS.includes(item.destination) ? item.destination : "未定",
    status: SORTING_STATUSES.includes(item.status) ? item.status : "未確認",
    shippingStatus: SHIPPING_STATUSES.includes(item.shippingStatus) ? item.shippingStatus : "未仕分け",
    boxNumber: String(item.boxNumber || "").trim(),
    sourceItemId: String(item.sourceItemId || "").trim(),
    memo: String(item.memo || "").trim(),
    createdAt: item.createdAt || new Date().toISOString(),
    updatedAt: item.updatedAt || new Date().toISOString(),
  };
}

function normalizeSettings(value) {
  return {
    categories: normalizeList(value.categories, DEFAULT_SETTINGS.categories),
    shippingMethods: normalizeShippingMethods(value.shippingMethods),
  };
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

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function saveTemplates() {
  localStorage.setItem(TEMPLATES_KEY, JSON.stringify(descriptionTemplates));
}

function saveSortingItems() {
  localStorage.setItem(SORTING_STORAGE_KEY, JSON.stringify(sortingItems));
}

function saveItemsToLocalStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    return true;
  } catch {
    alert("画像または商品数が多く、ブラウザに保存できませんでした。小さめの画像を選び直してください。");
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
  cloudPanel.classList.toggle("cloud-connected", type === "connected");
  cloudPanel.classList.toggle("cloud-warning", type === "warning");
}

function renderCloudAuthState() {
  const email = cloudUser?.email || "";
  const isLoggedIn = Boolean(cloudUser && cloudHouseholdId);

  cloudLoginButton.disabled = false;
  cloudLogoutButton.classList.toggle("hidden", !cloudUser);
  migrateToSupabaseButton.classList.toggle("hidden", !isLoggedIn);
  cloudPanel.classList.toggle("cloud-logged-in", isLoggedIn);
  cloudEmailInput.disabled = Boolean(cloudUser);
  cloudPasswordInput.disabled = Boolean(cloudUser);
  if (cloudUser) {
    cloudPasswordInput.value = "";
  }

  if (isLoggedIn) {
    setCloudStatus(email, "connected");
    return;
  }

  if (cloudUser && !cloudHouseholdId) {
    setCloudStatus("ログイン済みですが、共有グループが見つかりません。Supabase側の household_members を確認してください。", "warning");
    return;
  }

  setCloudStatus("未ログイン: 商品データはこの端末に保存されます");
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
      await loadItemsFromSupabase();
    }
  } catch (error) {
    setCloudStatus(`Supabase接続に失敗しました。ローカル保存で継続します: ${error.message}`, "warning");
  } finally {
    renderCloudAuthState();
    render();
  }
}

async function loadCloudHousehold() {
  cloudHouseholdId = "";
  isCloudReady = false;

  if (!supabaseClient || !cloudUser) {
    return;
  }

  const { data, error } = await supabaseClient
    .from("household_members")
    .select("household_id")
    .eq("user_id", cloudUser.id)
    .limit(1)
    .maybeSingle();

  if (error) {
    throw error;
  }

  cloudHouseholdId = data?.household_id || "";
  isCloudReady = Boolean(cloudHouseholdId);
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

  if (!data || data.length === 0) {
    setCloudStatus("クラウド側の商品はまだ空です。必要なら「Supabaseへ移行」でこの端末の商品をアップロードできます。", "connected");
    return;
  }

  const localItemsById = new Map(loadItems().map((item) => [String(item.id), item]));
  items = data
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
        imageData: localItem?.imageData || row.data?.imageData || "",
      };
    })
    .filter((item) => item.id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  hasCloudSaveWarning = false;
}

function createCloudItemData(item) {
  const { imageData, ...cloudItem } = item;
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
}

function handleCloudSaveError(error) {
  console.warn("Supabase保存エラー:", error);

  if (hasCloudSaveWarning) {
    return;
  }

  hasCloudSaveWarning = true;
  setCloudStatus(`クラウド保存に失敗しました。端末内には保存済みです: ${error.message}`, "warning");
  alert("クラウド保存に失敗しました。端末内には保存済みなので、作業は継続できます。");
}

async function migrateLocalItemsToSupabase() {
  if (!isCloudReady) {
    alert("先にSupabaseへログインしてください。");
    return;
  }

  const localItems = loadItems();

  if (localItems.length === 0) {
    alert("この端末に移行できる商品データがありません。");
    return;
  }

  const shouldMigrate = confirm(`${localItems.length}件の商品データをSupabaseへアップロードしますか？`);

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

    items = localItems;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    hasCloudSaveWarning = false;
    render();
    renderCloudAuthState();
    alert("Supabaseへの移行が完了しました。");
  } catch (error) {
    setCloudStatus(`Supabaseへの移行に失敗しました。ローカルデータは残っています: ${error.message}`, "warning");
    alert("Supabaseへの移行に失敗しました。ローカルデータは消えていません。");
  }
}

function createId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createBackupFileName() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `mercari-listing-helper-backup-${year}-${month}-${day}.json`;
}

function formatDateInputValue(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
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

function setSelectOptions(select, values, selectedValue = "") {
  const currentValue = selectedValue || select.value;
  select.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "選択してください";
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
}

function refreshCategoryOptions(selectedValue = "") {
  setSelectOptions(categoryInput, settings.categories, selectedValue);
  setSelectOptions(sortingGenreInput, settings.categories, sortingGenreInput.value || selectedValue);
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
  placeholder.textContent = "選択してください";
  shippingSizeInput.append(placeholder);

  sizes.forEach((size) => {
    const option = document.createElement("option");
    option.value = size;
    option.textContent = size;
    shippingSizeInput.append(option);
  });

  shippingSizeInput.value = currentValue;
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

function applyDescriptionTemplate() {
  const template = descriptionTemplates.find((currentTemplate) => currentTemplate.id === descriptionTemplateInput.value);

  if (!template) {
    return;
  }

  const shouldReplace = !descriptionInput.value.trim() || confirm("現在の説明文を置き換えますか？");

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

  if (groups.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "月別利益はまだありません。";
    monthlyProfitList.append(emptyMessage);
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

function renderProfitRanking(soldItems) {
  const groups = getMonthlyProfitGroups(soldItems)
    .sort((first, second) => second.profit - first.profit);
  profitRankingList.innerHTML = "";

  if (groups.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "利益ランキングはまだありません。";
    profitRankingList.append(emptyMessage);
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

  if (rankingItems.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "利益額ランキングはまだありません。";
    profitAmountRankingList.append(emptyMessage);
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

  if (rankingItems.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "利益率ランキングはまだありません。";
    profitRateRankingList.append(emptyMessage);
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

  if (rankingItems.length === 0) {
    const message = document.createElement("p");
    message.className = "muted";
    message.textContent = emptyMessage;
    targetList.append(message);
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

function renderExcavationRanking(storageRanking) {
  excavationRankingList.innerHTML = "";

  if (storageRanking.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "発掘優先ランキングはまだありません。";
    excavationRankingList.append(emptyMessage);
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

  if (expectedRanking.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "対象なし";
    excavationExpectedRankingList.append(emptyMessage);
    return;
  }

  expectedRanking.forEach((group, index) => {
    const item = document.createElement("div");
    const rank = document.createElement("strong");
    const name = document.createElement("span");
    const expectedValue = document.createElement("span");
    const count = document.createElement("span");
    const profit = document.createElement("span");

    item.className = "excavation-ranking-item excavation-expected-ranking-item";
    rank.textContent = `${index + 1}位`;
    name.textContent = group.name;
    expectedValue.textContent = `期待値 ${formatMoney(Math.round(group.expectedValue))}`;
    count.textContent = `売却件数 ${group.count}件`;
    profit.textContent = `合計利益 ${formatMoney(group.profit)}`;
    item.append(rank, name, expectedValue, count, profit);
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
      totalProfit: 0,
      firstSoldDate: "",
      lastSoldDate: "",
      unlistedPlannedPriceTotal: 0,
      unlistedMinimumPriceTotal: 0,
      unlistedProjectedProfitTotal: 0,
    };
    const status = getItemStatus(item);

    currentReport.totalCount += 1;

    if (status === "売却済み") {
      const profit = calculateActualProfit(item);
      const soldDate = parseDateValue(item.soldDate);

      currentReport.soldCount += 1;
      currentReport.totalProfit += profit === "" ? 0 : profit;

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

function renderStorageReports(allItems, storageProfitRanking, expectedRanking) {
  const reports = sortStorageReports(getStorageReports(allItems, storageProfitRanking, expectedRanking));
  storageReportList.innerHTML = "";

  if (reports.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "保管場所カルテはまだありません。";
    storageReportList.append(emptyMessage);
    return;
  }

  reports.forEach((report) => {
    const card = document.createElement("article");
    card.className = "storage-report-card";
    card.innerHTML = `
      <h4></h4>
      <dl>
        <div><dt>商品総数</dt><dd>${report.totalCount}件</dd></div>
        <div><dt>売却済</dt><dd>${report.soldCount}件</dd></div>
        <div><dt>未出品</dt><dd>${report.unlistedCount}件</dd></div>
        <div><dt>出品中</dt><dd>${report.listedCount}件</dd></div>
        <div><dt>要捜索</dt><dd>${report.searchCount}件</dd></div>
        <div><dt>累計利益</dt><dd>${formatMoney(report.totalProfit)}</dd></div>
        <div><dt>平均利益</dt><dd>${formatMoney(report.averageProfit)}</dd></div>
        <div><dt>利益額順位</dt><dd>${report.profitRank ? `${report.profitRank}位` : "-"}</dd></div>
        <div><dt>発掘期待値順位</dt><dd>${report.expectedRank ? `${report.expectedRank}位` : "-"}</dd></div>
        <div><dt>売却率</dt><dd>${Math.round(report.soldRate * 100)}%</dd></div>
        <div><dt>初回売却日</dt><dd>${report.firstSoldDate || "-"}</dd></div>
        <div><dt>最終売却日</dt><dd>${report.lastSoldDate || "-"}</dd></div>
        <div><dt>未出品販売価格合計</dt><dd>${formatMoney(report.unlistedPlannedPriceTotal)}</dd></div>
        <div><dt>未出品最低出品価格合計</dt><dd>${formatMoney(report.unlistedMinimumPriceTotal)}</dd></div>
        <div><dt>未出品埋蔵金</dt><dd>${formatMoney(report.unlistedProjectedProfitTotal)}</dd></div>
      </dl>
    `;
    card.querySelector("h4").textContent = report.name;
    storageReportList.append(card);
  });
}

function renderInventoryRanking(targetList, rankingItems, options) {
  targetList.innerHTML = "";

  if (rankingItems.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = options.emptyMessage;
    targetList.append(emptyMessage);
    return;
  }

  rankingItems.forEach((group, index) => {
    const item = document.createElement("div");
    const rank = document.createElement("strong");
    const name = document.createElement("span");
    const count = document.createElement("span");
    const plannedPrice = document.createElement("span");
    const minimumPrice = document.createElement("span");
    const purchaseCost = document.createElement("span");
    const projectedProfit = document.createElement("span");

    item.className = "buried-ranking-item";
    rank.textContent = `${index + 1}位`;
    name.textContent = group.name;
    count.textContent = `${options.countLabel}：${group.count}件`;
    plannedPrice.textContent = `販売価格合計：${formatMoney(group.plannedPriceTotal)}`;
    minimumPrice.textContent = `最低出品価格合計：${formatMoney(group.minimumPriceTotal)}`;
    purchaseCost.textContent = `原価合計：${formatMoney(group.purchaseCostTotal)}`;
    projectedProfit.textContent = `見込み利益合計：${formatMoney(group.projectedProfitTotal)}`;

    item.append(rank, name, count);

    if (options.showPlannedPrice) {
      item.append(plannedPrice);
    }

    if (options.showMinimumPrice) {
      item.append(minimumPrice);
    }

    if (options.showPurchaseCost) {
      item.append(purchaseCost);
    }

    item.append(projectedProfit);
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

  if (!item.imageData) {
    issues.push("写真未登録");
  }

  if (!String(item.description || "").trim()) {
    issues.push("説明文未登録");
  }

  return issues;
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
    const editArea = document.createElement("div");
    const actions = document.createElement("div");
    const editButton = document.createElement("button");
    const saveButton = document.createElement("button");

    row.className = "input-issue-item";
    row.dataset.id = item.id;
    title.textContent = getListingTitle(item) || "商品タイトル未入力";
    status.textContent = getItemStatus(item);
    issueText.textContent = issues.join(" / ");

    editArea.className = "input-issue-edit";

    if (issues.includes("保管場所未設定")) {
      const label = document.createElement("label");
      label.textContent = "保管場所";
      const input = document.createElement("input");
      input.dataset.field = "storageLocation";
      input.type = "text";
      input.maxLength = 80;
      input.placeholder = "例：黒い箱A";
      label.append(input);
      editArea.append(label);
    }

    if (issues.includes("販売価格未設定")) {
      const label = document.createElement("label");
      label.textContent = "販売価格";
      const input = document.createElement("input");
      input.dataset.field = "plannedPrice";
      input.type = "number";
      input.min = "0";
      input.step = "1";
      input.inputMode = "numeric";
      input.placeholder = "例：1200";
      label.append(input);
      editArea.append(label);
    }

    if (issues.includes("カテゴリ未設定")) {
      const label = document.createElement("label");
      label.textContent = "カテゴリ";
      const select = document.createElement("select");
      select.dataset.field = "category";
      setSelectOptions(select, settings.categories, "");
      label.append(select);
      editArea.append(label);
    }

    if (issues.includes("状態未設定")) {
      const label = document.createElement("label");
      label.textContent = "状態";
      const select = document.createElement("select");
      select.dataset.field = "condition";
      setSelectOptions(select, CONDITION_OPTIONS, "");
      label.append(select);
      editArea.append(label);
    }

    if (issues.includes("説明文未登録")) {
      const label = document.createElement("label");
      label.textContent = "説明文";
      const textarea = document.createElement("textarea");
      textarea.dataset.field = "description";
      textarea.rows = 2;
      textarea.maxLength = 2000;
      textarea.placeholder = "商品説明文";
      label.append(textarea);
      editArea.append(label);
    }

    actions.className = "input-issue-actions";
    editButton.className = "ghost-button";
    editButton.type = "button";
    editButton.dataset.action = "edit-input-issue";
    editButton.textContent = "編集";
    saveButton.className = "primary-button";
    saveButton.type = "button";
    saveButton.dataset.action = "save-input-issue";
    saveButton.textContent = "保存";
    actions.append(editButton, saveButton);

    row.append(title, status, issueText, editArea, actions);
    inputIssueList.append(row);
  });
}

function updateInputIssueDashboard(allItems) {
  const targetItems = getInputIssueTargetItems(allItems);
  const issueItems = targetItems
    .map((item) => ({
      item,
      issues: getInputIssues(item),
    }))
    .filter((entry) => entry.issues.length > 0);

  missingStorageCount.textContent = `${targetItems.filter((item) => !String(item.storageLocation || "").trim()).length}件`;
  missingPriceCount.textContent = `${targetItems.filter((item) => parseMoney(item.plannedPrice) === "").length}件`;
  missingMinimumPriceCount.textContent = `${targetItems.filter((item) => calculateMinimumPrice(item) <= 0).length}件`;
  missingCategoryCount.textContent = `${targetItems.filter((item) => !String(item.category || "").trim()).length}件`;
  missingConditionCount.textContent = `${targetItems.filter((item) => !String(item.condition || "").trim()).length}件`;
  missingImageCount.textContent = `${targetItems.filter((item) => !item.imageData).length}件`;
  missingDescriptionCount.textContent = `${targetItems.filter((item) => !String(item.description || "").trim()).length}件`;
  renderInputIssueList(issueItems);
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
  const shippingWaitCount = sortingItems.filter((item) => SHIPPING_WAITING_STATUSES.includes(item.shippingStatus)).length;
  const buriedValue = getInventoryValueRanking(getUnsoldItems(allItems))
    .reduce((total, group) => total + group.projectedProfitTotal, 0);

  dashboardHeroTotalProfit.textContent = formatMoney(totalProfitValue);
  dashboardHeroUnlistedCount.textContent = `${unlistedCount}件`;
  dashboardHeroShippingWaitCount.textContent = `${shippingWaitCount}件`;
  dashboardHeroBuriedValue.textContent = formatMoney(buriedValue);
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
  updateInputIssueDashboard(allItems);
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
    alert("コピーする内容がありません。");
    return;
  }

  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(value);
    } else {
      copyTextWithTextarea(value);
    }

    alert(successMessage);
  } catch {
    try {
      copyTextWithTextarea(value);
      alert(successMessage);
    } catch {
      alert("コピーできませんでした。ブラウザの設定を確認してください。");
    }
  }
}

function exportBackup() {
  const fileName = createBackupFileName();
  const backup = {
    appName: "メルカリ出品補助室",
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    storageKeys: {
      items: STORAGE_KEY,
      settings: SETTINGS_KEY,
      templates: TEMPLATES_KEY,
      sortingItems: SORTING_STORAGE_KEY,
    },
    data: {
      items,
      settings,
      descriptionTemplates,
      sortingItems,
    },
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  alert(`バックアップを書き出しました。\nファイル名: ${fileName}\nダウンロードフォルダを確認してください。`);
}

function readBackupFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      try {
        const parsed = JSON.parse(reader.result);
        const backupData = parsed.data && typeof parsed.data === "object" ? parsed.data : parsed;
        const importedItems = Array.isArray(parsed) ? parsed : backupData.items;

        if (!Array.isArray(importedItems)) {
          reject(new Error("商品データが見つかりませんでした。"));
          return;
        }

        resolve({
          items: importedItems,
          settings: backupData.settings,
          descriptionTemplates: backupData.descriptionTemplates || backupData.templates,
          sortingItems: backupData.sortingItems || backupData.destinationSortingItems,
        });
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

  const shouldImport = confirm("バックアップを読み込むと、現在このブラウザに保存されている商品・設定・テンプレート・売却先仕分けデータは上書きされます。続けますか？");

  if (!shouldImport) {
    importFileInput.value = "";
    return;
  }

  try {
    const importedData = await readBackupFile(file);
    const previousItems = [...items];
    const previousSettings = { ...settings, categories: [...settings.categories], shippingMethods: settings.shippingMethods.map((method) => ({ ...method })) };
    const previousTemplates = descriptionTemplates.map((template) => ({ ...template }));
    const previousSortingItems = sortingItems.map((item) => ({ ...item }));

    try {
      items = importedData.items;
      settings = normalizeSettings(importedData.settings || settings);
      descriptionTemplates = normalizeTemplates(importedData.descriptionTemplates, descriptionTemplates);
      sortingItems = Array.isArray(importedData.sortingItems)
        ? importedData.sortingItems.map(normalizeSortingItem)
        : sortingItems;

      if (!saveItemsToLocalStorage()) {
        throw new Error("商品データを保存できませんでした。");
      }

      saveSettings();
      saveTemplates();
      saveSortingItems();
    } catch (saveError) {
      items = previousItems;
      settings = previousSettings;
      descriptionTemplates = previousTemplates;
      sortingItems = previousSortingItems;
      saveItemsToLocalStorage();
      saveSettings();
      saveTemplates();
      saveSortingItems();
      throw saveError;
    }

    refreshCategoryOptions();
    refreshShippingMethodOptions();
    refreshTemplateOptions();
    renderSettings();
    resetForm();
    resetSortingForm();
    render();
    renderSorting();
    alert(`バックアップを読み込みました。画面を更新してください。\n商品: ${items.length}件\n売却先仕分け: ${sortingItems.length}件`);
  } catch (error) {
    alert(`バックアップを読み込めませんでした。${error.message}`);
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
  closeDescriptionModalButton.focus();
}

function closeDescriptionModal() {
  descriptionModal.classList.add("hidden");
  currentDescriptionModalText = "";
}

function createDetailSection(title, rows) {
  const section = document.createElement("section");
  section.className = "detail-section";

  const heading = document.createElement("h3");
  heading.textContent = title;
  section.append(heading);

  const list = document.createElement("dl");
  rows.forEach(([label, value]) => {
    const row = document.createElement("div");
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

function openDetailModal(item) {
  currentDetailItem = item;
  detailModalContent.innerHTML = "";

  const imageWrap = document.createElement("div");
  imageWrap.className = "detail-image-wrap";
  if (item.imageData) {
    const image = document.createElement("img");
    image.src = item.imageData;
    image.alt = `${getListingTitle(item)}の画像`;
    imageWrap.append(image);
  } else {
    const placeholder = document.createElement("span");
    placeholder.textContent = "画像なし";
    imageWrap.append(placeholder);
  }
  detailModalContent.append(imageWrap);

  detailModalContent.append(createDetailSection("基本情報", [
    ["商品タイトル", getListingTitle(item)],
    ["カテゴリ", item.category],
    ["状態", item.condition],
    ["出品ステータス", getItemStatus(item)],
    ["購入時期", item.purchaseDate],
    ["保管場所", item.storageLocation],
  ]));

  const projectedProfit = calculateProfit(item);
  detailModalContent.append(createDetailSection("金額情報", [
    ["原価", formatMoney(parseMoney(item.purchaseCost))],
    ["販売価格", formatMoney(parseMoney(item.plannedPrice))],
    ["送料", formatMoney(parseMoney(item.shippingCost))],
    ["メルカリ手数料", formatMoney(calculateFee(parseMoney(item.plannedPrice)))],
    ["見込み利益", formatMoney(projectedProfit)],
    ["最低出品価格", formatMoney(calculateMinimumPrice(item))],
  ]));

  detailModalContent.append(createDetailSection("商品情報", [
    ["商品実寸", item.measurements],
    ["商品説明文", item.description],
    ["メモ", item.memo],
  ]));

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

  detailModal.classList.remove("hidden");
  closeDetailModalButton.focus();
}

function closeDetailModal() {
  detailModal.classList.add("hidden");
  currentDetailItem = null;
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
    conditionInput.closest("label"),
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

  if (!isSold) {
    applyShippingMethodCost();
  }
}

function markItemAsSold(item) {
  const shouldMarkSold = confirm("この商品を売却済みにしますか？");

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

function relistItem(item) {
  const shouldRelist = confirm("この商品を再出品しますか？\n出品日を今日に更新し、ステータスを出品中にします。");

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
  profitPreview.classList.toggle("profit-positive", profit !== "" && profit >= 0);
  profitPreview.classList.toggle("profit-negative", profit !== "" && profit < 0);
  updateActualProfitPreview();
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
}

function setSubmitDisabled(disabled) {
  submitButton.disabled = disabled;
  submitButton.textContent = disabled ? "画像を準備中..." : (itemIdInput.value ? "更新する" : "登録する");
}

function updateImagePreview(imageData) {
  imagePreview.innerHTML = "";

  if (!imageData) {
    imagePreview.textContent = "画像未選択";
    removeImageButton.classList.add("hidden");
    return;
  }

  const image = document.createElement("img");
  image.src = imageData;
  image.alt = "選択中の商品画像";
  imagePreview.append(image);
  removeImageButton.classList.remove("hidden");
}

function readImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      const image = new Image();

      image.addEventListener("load", () => {
        const maxSize = 1200;
        const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);

        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.85));
      });

      image.addEventListener("error", () => reject(new Error("画像を読み込めませんでした")));
      image.src = reader.result;
    });

    reader.addEventListener("error", () => reject(new Error("画像を読み込めませんでした")));
    reader.readAsDataURL(file);
  });
}

function getSortingPriceEntries(item) {
  return [
    { label: "メルカリ", value: parseMoney(item.mercariPrice) },
    { label: "ヤフオク", value: parseMoney(item.yahooPrice) },
    { label: "駿河屋", value: parseMoney(item.surugayaPrice) },
    { label: "良盤ディスク", value: parseMoney(item.ryobanPrice) },
    { label: "エコリング", value: parseMoney(item.ecoRingPrice) },
    { label: "服買取", value: parseMoney(item.clothesPrice) },
    { label: "その他", value: parseMoney(item.otherPrice) },
  ];
}

function getBestSortingOffer(item) {
  return getSortingPriceEntries(item)
    .filter((entry) => entry.value !== "")
    .sort((first, second) => second.value - first.value)[0] || null;
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

function refreshSortingFilters() {
  const selectedDestination = sortingDestinationFilter.value;
  const selectedStatus = sortingStatusFilter.value;
  const selectedGenre = sortingGenreFilter.value;
  const genres = [
    ...new Set([
      ...settings.categories,
      ...sortingItems.map((item) => item.genre).filter(Boolean),
    ]),
  ];

  sortingDestinationFilter.innerHTML = '<option value="">すべての売却先</option>';
  SORTING_DESTINATIONS.forEach((destination) => {
    const option = document.createElement("option");
    option.value = destination;
    option.textContent = destination;
    sortingDestinationFilter.append(option);
  });
  sortingDestinationFilter.value = SORTING_DESTINATIONS.includes(selectedDestination) ? selectedDestination : "";

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
    const matchesDestination = !sortingDestinationFilter.value || item.destination === sortingDestinationFilter.value;
    const matchesStatus = !sortingStatusFilter.value || item.status === sortingStatusFilter.value;
    const matchesGenre = !sortingGenreFilter.value || item.genre === sortingGenreFilter.value;
    return matchesDestination && matchesStatus && matchesGenre;
  });
}

function renderSortingSummary() {
  const groups = new Map();

  sortingItems.forEach((item) => {
    const destination = item.destination || "未定";
    const current = groups.get(destination) || { count: 0, quantity: 0 };
    const quantity = parseMoney(item.quantity);

    current.count += 1;
    current.quantity += quantity === "" ? 1 : quantity;
    groups.set(destination, current);
  });

  sortingSummaryGrid.innerHTML = "";
  SORTING_DESTINATIONS.forEach((destination) => {
    const group = groups.get(destination) || { count: 0, quantity: 0 };
    const card = document.createElement("div");
    card.className = "sorting-summary-chip";
    card.innerHTML = `
      <span></span>
      <strong>${group.count}商品</strong>
      <small>/ ${group.quantity}点</small>
    `;
    card.querySelector("span").textContent = destination;
    sortingSummaryGrid.append(card);
  });
}

function renderShippingDashboard() {
  shippingDashboardGrid.innerHTML = "";

  SORTING_DESTINATIONS.forEach((destination) => {
    const destinationItems = sortingItems.filter((item) => item.destination === destination);

    if (destinationItems.length === 0) {
      return;
    }

    const card = document.createElement("div");
    const title = document.createElement("strong");
    const list = document.createElement("dl");

    card.className = "shipping-dashboard-card";
    title.textContent = destination;
    SHIPPING_STATUSES.forEach((status) => {
      const row = document.createElement("div");
      const term = document.createElement("dt");
      const description = document.createElement("dd");
      term.textContent = status;
      description.textContent = `${destinationItems.filter((item) => item.shippingStatus === status).length}件`;
      row.append(term, description);
      list.append(row);
    });
    card.append(title, list);
    shippingDashboardGrid.append(card);
  });

  if (shippingDashboardGrid.children.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "発送管理データはまだありません。";
    shippingDashboardGrid.append(emptyMessage);
  }
}

function renderShippingPriorityItems(container) {
  const groups = new Map();

  sortingItems
    .filter((item) => SHIPPING_WAITING_STATUSES.includes(item.shippingStatus))
    .forEach((item) => {
      const storageLocation = item.storageLocation || "未設定";
      const destination = item.destination || "未定";
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
  spans[0].textContent = item.destination || "未定";
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

  if (!keyword) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "箱番号を入力すると中身を確認できます。";
    boxSearchList.append(emptyMessage);
    return;
  }

  const matchedItems = sortingItems.filter((item) => String(item.boxNumber || "").toLowerCase().includes(keyword));

  if (matchedItems.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "muted";
    emptyMessage.textContent = "該当する箱番号の商品はありません。";
    boxSearchList.append(emptyMessage);
    return;
  }

  matchedItems.forEach((item) => {
    boxSearchList.append(createShippingItemRow(item));
  });
}

function getPackingListItems() {
  const boxKeyword = sortingBoxSearchInput.value.trim().toLowerCase();

  return sortingItems.filter((item) => {
    const matchesStatus = PACKING_LIST_STATUSES.includes(item.shippingStatus);
    const matchesBox = !boxKeyword || String(item.boxNumber || "").toLowerCase().includes(boxKeyword);
    return matchesStatus && matchesBox;
  });
}

function getPackingListGroups(packingItems) {
  const destinationGroups = new Map();

  packingItems.forEach((item) => {
    const destination = item.destination || "未定";
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
    item.destination || "未定",
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
}

function renderShippingManagement() {
  renderShippingDashboard();
  renderShippingPriorityRanking();
  renderShippingCompletedList();
  renderBoxSearchList();
  renderPackingList();
}

function createSortingRow(item) {
  const row = document.createElement("tr");
  const bestOffer = getBestSortingOffer(item);

  row.dataset.id = item.id;
  row.innerHTML = `
    <td class="title-cell"></td>
    <td></td>
    <td></td>
    <td><span class="status-badge"></span></td>
    <td></td>
    <td></td>
    <td></td>
    <td class="money-cell"></td>
    <td class="sorting-action-cell">
      <details class="row-action-menu sorting-action-menu">
        <summary aria-label="操作メニュー">⋯</summary>
        <div class="actions sorting-row-actions sorting-action-panel">
          <button class="text-button" type="button" data-action="view-sorting-detail">詳細</button>
          <button class="text-button" type="button" data-action="edit-sorting">編集</button>
          <button class="danger-button" type="button" data-action="delete-sorting">削除</button>
        </div>
      </details>
    </td>
  `;

  const cells = row.querySelectorAll("td");
  cells[0].textContent = item.name || "-";
  cells[1].textContent = String(item.quantity || 1);
  cells[2].textContent = item.storageLocation || "-";
  cells[3].querySelector("span").textContent = item.destination || "未定";
  cells[4].textContent = item.status || "未確認";
  cells[5].textContent = item.shippingStatus || "未仕分け";
  cells[6].textContent = item.boxNumber || "-";
  cells[7].textContent = bestOffer ? `${bestOffer.label} ${formatMoney(bestOffer.value)}` : "-";
  const actions = cells[8].querySelector(".sorting-row-actions");

  if (item.sourceItemId) {
    const sourceLabel = document.createElement("span");
    const returnButton = document.createElement("button");
    sourceLabel.className = "source-item-label";
    sourceLabel.textContent = "元商品あり";
    returnButton.className = "text-button";
    returnButton.type = "button";
    returnButton.dataset.action = "return-source-item";
    returnButton.textContent = "商品登録へ戻る";
    actions.prepend(sourceLabel, returnButton);
  }

  return row;
}

function renderSorting() {
  refreshSortingFilters();
  renderSortingSummary();
  renderShippingManagement();
  const filteredItems = getFilteredSortingItems();
  sortingTableBody.innerHTML = "";

  if (filteredItems.length === 0) {
    sortingTableWrap.classList.add("hidden");
    sortingEmptyState.classList.remove("hidden");
    return;
  }

  sortingEmptyState.classList.add("hidden");
  sortingTableWrap.classList.remove("hidden");
  filteredItems.forEach((item) => {
    sortingTableBody.append(createSortingRow(item));
  });
}

function resetSortingForm() {
  sortingForm.reset();
  sortingIdInput.value = "";
  sortingDestinationInput.value = "未定";
  sortingStatusInput.value = "未確認";
  sortingShippingStatusInput.value = "未仕分け";
  sortingSubmitButton.textContent = "仕分け登録";
  sortingCancelButton.classList.add("hidden");
}

function startSortingEdit(item) {
  sortingIdInput.value = item.id;
  sortingNameInput.value = item.name || "";
  sortingGenreInput.value = item.genre || "";
  sortingQuantityInput.value = item.quantity || 1;
  sortingStorageLocationInput.value = item.storageLocation || "";
  sortingDestinationInput.value = item.destination || "未定";
  sortingStatusInput.value = item.status || "未確認";
  sortingShippingStatusInput.value = item.shippingStatus || "未仕分け";
  sortingBoxNumberInput.value = item.boxNumber || "";
  sortingMercariPriceInput.value = parseMoney(item.mercariPrice);
  sortingYahooPriceInput.value = parseMoney(item.yahooPrice);
  sortingSurugayaPriceInput.value = parseMoney(item.surugayaPrice);
  sortingRyobanPriceInput.value = parseMoney(item.ryobanPrice);
  sortingEcoRingPriceInput.value = parseMoney(item.ecoRingPrice);
  sortingClothesPriceInput.value = parseMoney(item.clothesPrice);
  sortingOtherPriceInput.value = parseMoney(item.otherPrice);
  sortingMemoInput.value = item.memo || "";
  sortingSubmitButton.textContent = "仕分け更新";
  sortingCancelButton.classList.remove("hidden");
  sortingNameInput.focus();
}

function createSortingFormItem() {
  const id = sortingIdInput.value || createId();
  const existingItem = sortingItems.find((item) => item.id === id) || {};

  return normalizeSortingItem({
    ...existingItem,
    id,
    name: sortingNameInput.value,
    genre: sortingGenreInput.value,
    quantity: sortingQuantityInput.value,
    storageLocation: sortingStorageLocationInput.value,
    mercariPrice: sortingMercariPriceInput.value,
    yahooPrice: sortingYahooPriceInput.value,
    surugayaPrice: sortingSurugayaPriceInput.value,
    ryobanPrice: sortingRyobanPriceInput.value,
    ecoRingPrice: sortingEcoRingPriceInput.value,
    clothesPrice: sortingClothesPriceInput.value,
    otherPrice: sortingOtherPriceInput.value,
    destination: sortingDestinationInput.value,
    status: sortingStatusInput.value,
    shippingStatus: sortingShippingStatusInput.value,
    boxNumber: sortingBoxNumberInput.value,
    sourceItemId: existingItem.sourceItemId || "",
    memo: sortingMemoInput.value,
    createdAt: existingItem.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

function sendItemToSorting(item) {
  const existingIndex = sortingItems.findIndex((sortingItem) => sortingItem.sourceItemId === item.id);
  const existingItem = existingIndex >= 0 ? sortingItems[existingIndex] : {};
  const sortingItem = normalizeSortingItem({
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
    otherPrice: existingItem.otherPrice,
    destination: "メルカリ",
    status: existingItem.status || "未確認",
    shippingStatus: existingItem.shippingStatus || "未仕分け",
    boxNumber: existingItem.boxNumber || "",
    memo: existingItem.memo || "",
    createdAt: existingItem.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  if (existingIndex >= 0) {
    sortingItems[existingIndex] = sortingItem;
  } else {
    sortingItems.unshift(sortingItem);
  }

  saveSortingItems();
  renderSorting();
  alert("売却先仕分けへ送りました。");
}

function returnToSourceItem(sortingItem) {
  const sourceItem = items.find((item) => item.id === sortingItem.sourceItemId);

  if (!sourceItem) {
    alert("元の商品登録データが見つかりません。");
    return;
  }

  startEdit(sourceItem);
  document.querySelector("#formTitle")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function exportSortingCsv() {
  const headers = ["商品名", "ジャンル", "数量", "保管場所", "メルカリ想定価格", "ヤフオク想定価格", "駿河屋査定額", "良盤ディスク査定額", "エコリング査定額", "服買取査定額", "その他査定額", "最終売却先", "ステータス", "発送ステータス", "箱番号", "元商品ID", "メモ"];
  const rows = sortingItems.map((item) => [
    item.name,
    item.genre,
    item.quantity,
    item.storageLocation,
    parseMoney(item.mercariPrice),
    parseMoney(item.yahooPrice),
    parseMoney(item.surugayaPrice),
    parseMoney(item.ryobanPrice),
    parseMoney(item.ecoRingPrice),
    parseMoney(item.clothesPrice),
    parseMoney(item.otherPrice),
    item.destination,
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
}

function getQuickSearchMatches(keyword) {
  const normalizedKeyword = keyword.trim().toLowerCase();

  if (!normalizedKeyword) {
    return [];
  }

  const itemMatches = items
    .filter((item) => [
      getListingTitle(item),
      item.name,
      item.memo,
      item.soldMemo,
      item.storageLocation,
    ].some((value) => String(value || "").toLowerCase().includes(normalizedKeyword)))
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
    .filter((item) => [
      item.name,
      item.memo,
      item.storageLocation,
      item.boxNumber,
    ].some((value) => String(value || "").toLowerCase().includes(normalizedKeyword)))
    .map((item) => ({
      type: "sorting",
      id: item.id,
      title: item.name || "仕分け商品名未入力",
      meta: [
        item.destination || "未定",
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
        <button class="text-button" type="button" data-action="quick-box">箱検索へ</button>
      `;
    }

    quickSearchResults.append(row);
  });
}

function getFilteredItems() {
  const keyword = searchInput.value.trim().toLowerCase();
  const selectedStatus = statusFilter.value;

  return items.filter((item) => {
    const matchesKeyword = !keyword || [
      getListingTitle(item),
      item.description,
      item.measurements,
      item.storageLocation,
      getItemStatus(item),
      item.category,
      item.shippingMethod,
      item.listingDate,
      item.listingUrl,
      item.priceLimitMemo,
      item.soldMemo,
      item.memo,
    ]
      .join(" ")
      .toLowerCase()
      .includes(keyword);
    const matchesStatus = !selectedStatus || getItemStatus(item) === selectedStatus;

    return matchesKeyword && matchesStatus;
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
      <td></td>
      <td></td>
      <td>
        <details class="row-action-menu">
          <summary aria-label="操作メニュー">⋯</summary>
          <div class="actions">
            <button class="text-button" type="button" data-action="edit">編集</button>
            <button class="text-button" type="button" data-action="view-detail">詳細</button>
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

  const statusBadge = document.createElement("span");
  statusBadge.className = `status-badge ${STATUS_CLASS_NAMES[getItemStatus(item)] || "status-unlisted"}`;
  statusBadge.textContent = getItemStatus(item);
  row.children[1].append(statusBadge);

  row.children[2].textContent = item.storageLocation || "-";

  return row;
}

function createRecentDockMobileCard(item) {
  const card = document.createElement("article");
  card.className = "mobile-item-card recent-dock-mobile-card";
  card.dataset.id = item.id;

  card.innerHTML = `
    <div class="mobile-card-main">
      <div>
        <h3 class="mobile-card-name"></h3>
        <span class="status-badge mobile-card-status"></span>
      </div>
    </div>
    <dl class="mobile-card-details">
      <div>
        <dt>保管場所</dt>
        <dd data-field="storageLocation"></dd>
      </div>
      <div>
        <dt>状態</dt>
        <dd data-field="condition"></dd>
      </div>
      <div>
        <dt>価格</dt>
        <dd data-field="plannedPrice"></dd>
      </div>
      <div>
        <dt>利益</dt>
        <dd data-field="profit"></dd>
      </div>
    </dl>
    <details class="mobile-more-actions">
      <summary aria-label="その他の操作">…</summary>
      <div class="mobile-more-actions-panel">
        <button class="text-button" type="button" data-action="view-detail">詳細</button>
        <button class="text-button" type="button" data-action="edit">編集</button>
        <button class="text-button" type="button" data-action="copy-title">タイトルコピー</button>
        <button class="text-button" type="button" data-action="copy-description">説明コピー</button>
        <button class="text-button" type="button" data-action="relist">再出品</button>
        <button class="text-button" type="button" data-action="send-to-sorting">仕分けへ</button>
        <button class="danger-button" type="button" data-action="delete">削除</button>
      </div>
    </details>
  `;

  card.querySelector(".mobile-card-name").textContent = getListingTitle(item) || "-";
  const statusBadge = card.querySelector(".mobile-card-status");
  statusBadge.textContent = getItemStatus(item);
  statusBadge.classList.add(STATUS_CLASS_NAMES[getItemStatus(item)] || "status-unlisted");
  card.querySelector('[data-field="storageLocation"]').textContent = item.storageLocation || "-";
  card.querySelector('[data-field="condition"]').textContent = item.condition || "-";
  card.querySelector('[data-field="plannedPrice"]').textContent = formatMoney(parseMoney(item.plannedPrice));
  card.querySelector('[data-field="profit"]').textContent = formatMoney(calculateProfit(item));

  return card;
}

function renderRecentDock() {
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
  const filteredItems = getFilteredItems();
  const activeItems = statusFilter.value === "売却済み"
    ? filteredItems.filter((item) => getItemStatus(item) === "売却済み")
    : filteredItems.filter((item) => ["未出品", "出品中", "保留", "要捜索"].includes(getItemStatus(item)));
  const sortedActiveItems = sortActiveItems(activeItems);
  const soldItems = sortSoldItems(filteredItems.filter((item) => getItemStatus(item) === "売却済み"));
  const allSoldItems = items.filter((item) => getItemStatus(item) === "売却済み");
  itemCount.textContent = String(items.length);
  renderFormAssist();
  renderQuickSearchResults();
  itemTableBody.innerHTML = "";
  compactTableGrid.innerHTML = "";
  inventoryShelfList.innerHTML = "";
  mobileCardList.innerHTML = "";
  soldTableBody.innerHTML = "";
  updateDashboard(items, allSoldItems);
  updateTotalSummary(allSoldItems);
  updateMonthlySummary(allSoldItems);
  renderMonthlyProfitList(allSoldItems);
  renderProfitRanking(allSoldItems);
  renderProfitAmountRanking(allSoldItems);
  renderProfitRateRanking(allSoldItems);
  renderCategoryProfitRanking(allSoldItems);
  renderStorageProfitRanking(allSoldItems);
  const shouldRenderFullItemList = document.body.classList.contains("work-tab-list");
  backupControlsTop.classList.remove("hidden");
  backupControlsTop.hidden = false;
  const shouldShowCompactList = shouldRenderFullItemList && itemListViewMode === "list";
  const shouldShowCardList = shouldRenderFullItemList && itemListViewMode === "card";
  listViewButton.classList.toggle("active", itemListViewMode === "list");
  cardViewButton.classList.toggle("active", itemListViewMode === "card");
  viewToggle.classList.toggle("hidden", shouldRenderFullItemList && items.length === 0);
  inventoryShelfList.classList.toggle("card-grid", itemListViewMode === "card");

  if (!shouldRenderFullItemList) {
    tableWrap.classList.add("hidden");
    compactTableGrid.classList.add("hidden");
    inventoryShelfList.classList.add("hidden");
    mobileCardList.classList.add("hidden");
    emptyState.classList.add("hidden");
  } else if (sortedActiveItems.length === 0) {
    tableWrap.classList.add("hidden");
    compactTableGrid.classList.add("hidden");
    inventoryShelfList.classList.add("hidden");
    mobileCardList.classList.add("hidden");
    emptyState.classList.remove("hidden");
    emptyState.querySelector("h3").textContent = items.length === 0 ? "まだ商品がありません" : "通常一覧に表示する商品がありません";
    emptyState.querySelector("p").textContent = items.length === 0
      ? "左のフォームから、出品準備中の商品を登録できます。"
      : "検索条件を変えるか、売却済み欄を確認してください。";
  } else {
    emptyState.classList.add("hidden");
    tableWrap.classList.add("hidden");
    compactTableGrid.classList.toggle("hidden", !shouldShowCompactList);
    inventoryShelfList.classList.toggle("hidden", !shouldShowCardList);
    mobileCardList.classList.toggle("hidden", !shouldShowCardList);
  }

  if (shouldRenderFullItemList) {
    if (shouldShowCompactList) {
      if (isMobileViewport()) {
        sortedActiveItems.forEach((item) => {
          compactTableGrid.append(createMobileCompactTableCard(item));
        });
      } else {
        createItemChunks(sortedActiveItems, 10).forEach((chunk) => {
          compactTableGrid.append(createCompactTableBlock(chunk));
        });
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
      <td></td>
      <td></td>
      <td></td>
      <td class="money-cell"></td>
      <td class="profit-cell"></td>
      <td>
        <details class="row-action-menu">
          <summary aria-label="操作メニュー">⋯</summary>
          <div class="actions">
            <button class="text-button" type="button" data-action="edit">編集</button>
            <button class="text-button" type="button" data-action="view-detail">詳細</button>
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
  const statusBadge = document.createElement("span");
  statusBadge.className = `status-badge ${STATUS_CLASS_NAMES[getItemStatus(item)] || "status-unlisted"}`;
  statusBadge.textContent = getItemStatus(item);
  row.children[1].append(statusBadge);
  row.children[2].textContent = item.storageLocation || "-";
  row.children[3].textContent = item.condition || "-";
  const elapsedDays = calculateElapsedDays(item.listingDate);
  const longInventoryLevel = getItemStatus(item) === "売却済み" ? null : getLongInventoryLevel(elapsedDays);

  if (longInventoryLevel) {
    const warning = document.createElement("span");
    warning.className = `long-inventory-label ${longInventoryLevel.className}`;
    warning.textContent = longInventoryLevel.label;
    row.children[1].append(warning);
  }

  const plannedPrice = parseMoney(item.plannedPrice);
  const minimumPrice = calculateMinimumPrice(item);
  const isProfitLimit = plannedPrice !== "" && plannedPrice <= minimumPrice;
  row.children[4].textContent = formatMoney(plannedPrice);

  if (isProfitLimit) {
    const warning = document.createElement("span");
    warning.className = "profit-limit-label";
    warning.textContent = "⚠ 利益限界";
    row.children[4].classList.add("profit-limit-price");
    row.children[4].append(warning);
  }

  const profit = calculateProfit(item);
  row.children[5].textContent = formatMoney(profit);
  row.children[5].classList.toggle("profit-positive", profit !== "" && profit >= 0);
  row.children[5].classList.toggle("profit-negative", profit !== "" && profit < 0);

  return row;
}

function createItemChunks(sourceItems, chunkSize) {
  const chunks = [];

  for (let index = 0; index < sourceItems.length; index += chunkSize) {
    chunks.push(sourceItems.slice(index, index + chunkSize));
  }

  return chunks;
}

function createCompactTableBlock(sourceItems) {
  const wrap = document.createElement("div");
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");

  wrap.className = "compact-table-wrap";
  table.innerHTML = `
    <thead>
      <tr>
        <th>商品名</th>
        <th>ステータス</th>
        <th>保管場所</th>
        <th>状態</th>
        <th>価格</th>
        <th>利益</th>
        <th>操作</th>
      </tr>
    </thead>
  `;

  sourceItems.forEach((item) => {
    tbody.append(createActiveRow(item));
  });

  table.append(tbody);
  wrap.append(table);
  return wrap;
}

function createMobileCompactTableCard(item) {
  const card = document.createElement("article");

  card.className = "mobile-compact-table-card";
  card.dataset.id = item.id;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `${getListingTitle(item) || "商品"}の詳細を開く`);
  card.innerHTML = `
    <div class="mobile-compact-title"></div>
    <div class="mobile-compact-meta mobile-compact-storage"></div>
    <div class="mobile-compact-meta mobile-compact-price"></div>
  `;

  card.querySelector(".mobile-compact-title").textContent = getListingTitle(item) || "-";
  card.querySelector(".mobile-compact-storage").textContent = item.storageLocation || "-";
  card.querySelector(".mobile-compact-price").textContent = formatMoney(parseMoney(item.plannedPrice));

  return card;
}

function createInventoryShelfCard(item) {
  const card = document.createElement("article");
  const profit = calculateProfit(item);

  card.className = "inventory-shelf-card";
  card.dataset.id = item.id;
  card.innerHTML = `
    <div class="shelf-card-top">
      <strong class="shelf-card-title"></strong>
      <details class="row-action-menu">
        <summary aria-label="操作メニュー">⋯</summary>
        <div class="actions">
          <button class="text-button" type="button" data-action="edit">編集</button>
          <button class="text-button" type="button" data-action="view-detail">詳細</button>
          <button class="text-button" type="button" data-action="copy-title">タイトルコピー</button>
          <button class="text-button" type="button" data-action="copy-description">説明文コピー</button>
          <button class="text-button" type="button" data-action="relist">再出品</button>
          <button class="text-button" type="button" data-action="send-to-sorting">仕分けへ送る</button>
          <button class="text-button" type="button" data-action="mark-sold">売却済み</button>
          <button class="danger-button" type="button" data-action="delete">削除</button>
        </div>
      </details>
    </div>
    <div class="shelf-card-meta">
      <span class="status-badge"></span>
      <span class="shelf-location"></span>
    </div>
    <div class="shelf-condition"></div>
    <dl class="shelf-card-money">
      <div><dt>価格</dt><dd data-field="plannedPrice"></dd></div>
      <div><dt>利益</dt><dd class="profit-cell" data-field="profit"></dd></div>
    </dl>
  `;

  card.querySelector(".shelf-card-title").textContent = getListingTitle(item) || "-";
  const statusBadge = card.querySelector(".status-badge");
  statusBadge.textContent = getItemStatus(item);
  statusBadge.classList.add(STATUS_CLASS_NAMES[getItemStatus(item)] || "status-unlisted");
  card.querySelector(".shelf-location").textContent = item.storageLocation || "-";
  card.querySelector(".shelf-condition").textContent = item.condition || "-";
  card.querySelector('[data-field="plannedPrice"]').textContent = formatMoney(parseMoney(item.plannedPrice));
  const profitField = card.querySelector('[data-field="profit"]');
  profitField.textContent = formatMoney(profit);
  profitField.classList.toggle("profit-positive", profit !== "" && profit >= 0);
  profitField.classList.toggle("profit-negative", profit !== "" && profit < 0);

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

  card.innerHTML = `
    <div class="mobile-card-main">
      <div>
        <h3 class="mobile-card-name"></h3>
        <span class="status-badge mobile-card-status"></span>
      </div>
    </div>
    <dl class="mobile-card-details">
      <div>
        <dt>保管場所</dt>
        <dd data-field="storageLocation"></dd>
      </div>
      <div>
        <dt>状態</dt>
        <dd data-field="condition"></dd>
      </div>
      <div>
        <dt>価格</dt>
        <dd data-field="plannedPrice"></dd>
      </div>
      <div>
        <dt>利益</dt>
        <dd data-field="profit"></dd>
      </div>
    </dl>
    <details class="mobile-more-actions">
      <summary aria-label="その他の操作">…</summary>
      <div class="mobile-more-actions-panel">
        <button class="text-button" type="button" data-action="view-detail">詳細</button>
        <button class="text-button" type="button" data-action="edit">編集</button>
        <button class="text-button" type="button" data-action="copy-title">タイトルコピー</button>
        <button class="text-button" type="button" data-action="copy-description">説明コピー</button>
        <button class="text-button" type="button" data-action="relist">再出品</button>
        <button class="text-button" type="button" data-action="send-to-sorting">仕分けへ</button>
        <button class="danger-button" type="button" data-action="delete">削除</button>
      </div>
    </details>
  `;

  card.querySelector(".mobile-card-name").textContent = getListingTitle(item);
  const statusBadge = card.querySelector(".mobile-card-status");
  statusBadge.textContent = getItemStatus(item);
  statusBadge.classList.add(STATUS_CLASS_NAMES[getItemStatus(item)] || "status-unlisted");
  card.querySelector('[data-field="storageLocation"]').textContent = item.storageLocation || "-";
  card.querySelector('[data-field="condition"]').textContent = item.condition || "-";
  card.querySelector('[data-field="plannedPrice"]').textContent = formatMoney(parseMoney(item.plannedPrice));
  card.querySelector('[data-field="profit"]').textContent = formatMoney(calculateProfit(item));

  return card;
}

function renderSettings() {
  categorySettingsList.innerHTML = "";
  shippingSettingsList.innerHTML = "";
  templateSettingsList.innerHTML = "";

  settings.categories.forEach((category, index) => {
    categorySettingsList.append(createCategorySettingsRow(category, index));
  });

  settings.shippingMethods.forEach((method, index) => {
    shippingSettingsList.append(createShippingSettingsRow(method, index));
  });

  descriptionTemplates.forEach((template, index) => {
    templateSettingsList.append(createTemplateSettingsRow(template, index));
  });

  isSettingsDirty = false;
  updateSettingsSaveButtonVisibility();
}

function createCategorySettingsRow(category, index) {
  const row = document.createElement("div");
  row.className = "category-setting-row";
  row.dataset.index = String(index);
  row.innerHTML = `
    <input type="text" data-field="name" aria-label="カテゴリ名">
    <button class="ghost-button" type="button" data-action="move-up">上へ</button>
    <button class="ghost-button" type="button" data-action="move-down">下へ</button>
    <button class="danger-button" type="button" data-action="remove-category">削除</button>
  `;
  row.querySelector('[data-field="name"]').value = category;
  return row;
}

function createShippingSettingsRow(method, index) {
  const row = document.createElement("div");
  row.className = "shipping-setting-row";
  row.dataset.index = String(index);
  row.innerHTML = `
    <input type="text" data-field="name" aria-label="配送方法名">
    <input type="number" min="0" step="1" inputmode="numeric" data-field="cost" aria-label="送料">
    <button class="ghost-button" type="button" data-action="move-up">上へ</button>
    <button class="ghost-button" type="button" data-action="move-down">下へ</button>
    <button class="danger-button" type="button" data-action="remove-shipping">削除</button>
  `;
  row.querySelector('[data-field="name"]').value = method.name;
  row.querySelector('[data-field="cost"]').value = method.cost;
  return row;
}

function createTemplateSettingsRow(template, index) {
  const row = document.createElement("div");
  row.className = "template-setting-row";
  row.dataset.index = String(index);
  row.innerHTML = `
    <input type="text" data-field="name" aria-label="テンプレート名">
    <textarea rows="4" data-field="content" aria-label="テンプレート内容"></textarea>
    <button class="ghost-button" type="button" data-action="move-up">上へ</button>
    <button class="ghost-button" type="button" data-action="move-down">下へ</button>
    <button class="danger-button" type="button" data-action="remove-template">削除</button>
  `;
  row.querySelector('[data-field="name"]').value = template.name;
  row.querySelector('[data-field="content"]').value = template.content;
  row.dataset.id = template.id;
  row.dataset.categoryHint = template.categoryHint || "";
  return row;
}

function collectSettingsFromForm() {
  const categories = [...categorySettingsList.querySelectorAll(".category-setting-row")]
    .map((row) => row.querySelector('[data-field="name"]').value.trim())
    .filter(Boolean);
  const shippingMethods = [...shippingSettingsList.querySelectorAll(".shipping-setting-row")]
    .map((row) => ({
      name: row.querySelector('[data-field="name"]').value.trim(),
      cost: parseMoney(row.querySelector('[data-field="cost"]').value) || 0,
    }))
    .filter((method) => method.name);

  return normalizeSettings({
    categories,
    shippingMethods,
  });
}

function collectTemplatesFromForm() {
  return normalizeTemplates(
    [...templateSettingsList.querySelectorAll(".template-setting-row")].map((row) => ({
      id: row.dataset.id || createId(),
      name: row.querySelector('[data-field="name"]').value,
      content: row.querySelector('[data-field="content"]').value,
      categoryHint: row.dataset.categoryHint || "",
    })),
    [],
  );
}

function saveSettingsFromForm() {
  settings = collectSettingsFromForm();
  descriptionTemplates = collectTemplatesFromForm();
  saveSettings();
  saveTemplates();
  refreshCategoryOptions(categoryInput.value);
  refreshShippingMethodOptions(shippingMethodInput.value);
  refreshTemplateOptions();
  renderSettings();
  alert("設定を保存しました。");
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
    alert("カテゴリ名を入力してください。");
    return;
  }

  categorySettingsList.append(createCategorySettingsRow(name, categorySettingsList.children.length));
  newCategoryNameInput.value = "";
  markSettingsDirty();
}

function addShippingMethodFromForm() {
  const name = newShippingNameInput.value.trim();
  const cost = parseMoney(newShippingCostInput.value) || 0;

  if (!name) {
    alert("配送方法名を入力してください。");
    return;
  }

  shippingSettingsList.append(createShippingSettingsRow({ name, cost }, shippingSettingsList.children.length));
  newShippingNameInput.value = "";
  newShippingCostInput.value = "";
  markSettingsDirty();
}

function addTemplateFromForm() {
  const name = newTemplateNameInput.value.trim();
  const content = newTemplateContentInput.value.trim();

  if (!name) {
    alert("テンプレート名を入力してください。");
    return;
  }

  if (!content) {
    alert("テンプレート内容を入力してください。");
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
  markSettingsDirty();
}

function resetSettingsToDefault() {
  const shouldReset = confirm("カテゴリ、配送方法、商品説明テンプレートを初期設定に戻しますか？\nクラウド共有設定とログイン情報は変更しません。");

  if (!shouldReset) {
    return;
  }

  settings = normalizeSettings(DEFAULT_SETTINGS);
  descriptionTemplates = normalizeTemplates(DEFAULT_TEMPLATES, []);
  saveSettings();
  saveTemplates();
  refreshCategoryOptions(categoryInput.value);
  refreshShippingMethodOptions(shippingMethodInput.value);
  refreshTemplateOptions();
  renderSettings();
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
  currentImageData = "";
  updateImagePreview("");
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
  formDetails.open = false;
  formTitle.textContent = "商品登録";
  submitButton.textContent = "登録する";
  cancelEditButton.classList.add("hidden");
  hideCompletionPanel();
  isFormDirty = false;
}

function startEdit(item) {
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
  updateProfitPreview();
  updateSoldFieldsVisibility();
  formDetails.open = getItemStatus(item) === "売却済み";
  formTitle.textContent = "商品編集";
  submitButton.textContent = "更新する";
  cancelEditButton.classList.remove("hidden");
  isFormDirty = false;
  listingTitleInput.focus();
}

function setActiveNavigation(view, tab = "form") {
  const workViews = ["form", "list", "sorting", "box"];
  const workTab = workViews.includes(view) ? view : tab;

  document.body.classList.remove(
    "work-view",
    "shipping-view",
    "analysis-view",
    "settings-view",
    "work-tab-form",
    "work-tab-list",
    "work-tab-sorting",
    "work-tab-box",
  );

  if (view === "analysis") {
    document.body.classList.add("analysis-view");
  } else if (view === "shipping") {
    document.body.classList.add("shipping-view");
  } else if (view === "settings") {
    document.body.classList.add("settings-view");
  } else {
    document.body.classList.add("work-view", `work-tab-${workTab}`);
  }

  sideNavLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.view === view);
  });
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
    document.querySelector(link.getAttribute("href"))?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

recentStorageList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-storage]");

  if (!button) {
    return;
  }

  storageLocationInput.value = button.dataset.storage;
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
  storageLocationInput.value = storageLocation;
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
  render();
});

cardViewButton.addEventListener("click", () => {
  itemListViewMode = "card";
  render();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (isImageProcessing) {
    return;
  }

  const formItemId = itemIdInput.value || createId();
  const editingIndex = items.findIndex((item) => item.id === formItemId);
  const isNewItem = editingIndex < 0;
  const existingItem = editingIndex >= 0 ? items[editingIndex] : {};
  const isSold = statusInput.value === "売却済み";

  const formItem = {
    id: formItemId,
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
    updatedAt: new Date().toISOString(),
  };

  if ((!isSold || editingIndex < 0) && (!formItem.listingTitle || !formItem.category || !formItem.condition)) {
    return;
  }

  const previousItems = [...items];

  if (editingIndex >= 0) {
    items[editingIndex] = formItem;
  } else {
    items.unshift(formItem);
  }

  if (!saveItems()) {
    items = previousItems;
    return;
  }

  resetForm();
  render();

  if (isNewItem) {
    showCompletionPanel(formItem);
  }
});

function handleItemTableAction(event) {
  const button = event.target.closest("button");
  const row = event.target.closest("tr, .inventory-shelf-card, .mobile-item-card, .mobile-compact-table-card");

  if (!row) {
    return;
  }

  const item = items.find((currentItem) => currentItem.id === row.dataset.id);

  if (!item) {
    return;
  }

  if (!button && row.classList.contains("mobile-compact-table-card")) {
    openDetailModal(item);
    return;
  }

  if (!button) {
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

  if (button.dataset.action === "open-listing") {
    openListingUrl(item);
  }

  if (button.dataset.action === "copy-title") {
    copyText(getListingTitle(item), "商品タイトルをコピーしました。");
  }

  if (button.dataset.action === "copy-description") {
    copyText(item.description || "", "商品説明文をコピーしました。");
  }

  if (button.dataset.action === "relist") {
    relistItem(item);
  }

  if (button.dataset.action === "send-to-sorting") {
    sendItemToSorting(item);
  }

  if (button.dataset.action === "mark-sold") {
    markItemAsSold(item);
  }

  if (button.dataset.action === "delete") {
    const shouldDelete = confirm(`「${getListingTitle(item)}」を削除しますか？`);

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

  const card = event.target.closest(".mobile-compact-table-card");

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

itemTableBody.addEventListener("click", handleItemTableAction);
compactTableGrid.addEventListener("click", handleItemTableAction);
compactTableGrid.addEventListener("keydown", handleMobileCompactKeydown);
inventoryShelfList.addEventListener("click", handleItemTableAction);
recentDockTableBody.addEventListener("click", handleItemTableAction);
recentDockMobileList.addEventListener("click", handleItemTableAction);

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

listShowAllButton.addEventListener("click", () => {
  searchInput.value = "";
  statusFilter.value = "";
  sortOrderInput.value = "newest";
  itemListViewMode = "list";
  setActiveNavigation("list");
  render();
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

soldTableBody.addEventListener("click", (event) => {
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
    const shouldDelete = confirm(`「${getListingTitle(item)}」を削除しますか？`);

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

mobileCardList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  const card = event.target.closest(".mobile-item-card");

  if (!button || !card) {
    return;
  }

  const item = items.find((currentItem) => currentItem.id === card.dataset.id);

  if (!item) {
    return;
  }

  if (button.dataset.action === "edit") {
    startEdit(item);
  }

  if (button.dataset.action === "view-detail") {
    openDetailModal(item);
  }

  if (button.dataset.action === "copy-title") {
    copyText(getListingTitle(item), "商品タイトルをコピーしました。");
  }

  if (button.dataset.action === "copy-description") {
    copyText(item.description || "", "商品説明文をコピーしました。");
  }

  if (button.dataset.action === "relist") {
    relistItem(item);
  }

  if (button.dataset.action === "send-to-sorting") {
    sendItemToSorting(item);
  }

  if (button.dataset.action === "delete") {
    const shouldDelete = confirm(`「${getListingTitle(item)}」を削除しますか？`);

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
    alert("Supabase接続情報がコード側に未設定です。app.js の SUPABASE_URL と SUPABASE_PUBLISHABLE_KEY を設定してください。");
    return;
  }

  const email = cloudEmailInput.value.trim();
  const password = cloudPasswordInput.value;

  if (!email || !password) {
    alert("メールとパスワードを入力してください。");
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
    await loadItemsFromSupabase();
    renderCloudAuthState();
    render();
  } catch (error) {
    isCloudReady = false;
    setCloudStatus(`ログインまたは読み込みに失敗しました。ローカル保存で継続します: ${error.message}`, "warning");
    alert("ログインまたはクラウド読み込みに失敗しました。ローカル保存で継続します。");
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
  isCloudReady = false;
  hasCloudSaveWarning = false;
  cloudEmailInput.disabled = false;
  cloudPasswordInput.disabled = false;
  cloudPasswordInput.value = "";
  renderCloudAuthState();
  alert("ログアウトしました。商品データはこの端末のlocalStorageで継続します。");
});

migrateToSupabaseButton.addEventListener("click", migrateLocalItemsToSupabase);

imageInput.addEventListener("change", async () => {
  const file = imageInput.files[0];

  if (!file) {
    return;
  }

  if (!file.type.startsWith("image/")) {
    alert("画像ファイルを選択してください。");
    imageInput.value = "";
    return;
  }

  try {
    isImageProcessing = true;
    setSubmitDisabled(true);
    imagePreview.textContent = "画像を準備中...";
    currentImageData = await readImageFile(file);
    updateImagePreview(currentImageData);
  } catch (error) {
    alert(error.message);
    imageInput.value = "";
    currentImageData = "";
    updateImagePreview("");
  } finally {
    isImageProcessing = false;
    setSubmitDisabled(false);
  }
});

removeImageButton.addEventListener("click", () => {
  imageInput.value = "";
  currentImageData = "";
  updateImagePreview("");
});

cancelEditButton.addEventListener("click", resetForm);
searchInput.addEventListener("input", render);
statusFilter.addEventListener("change", render);
sortOrderInput.addEventListener("change", render);
soldSortInput.addEventListener("change", render);
storageReportSortInput.addEventListener("change", render);
sortingDestinationFilter.addEventListener("change", renderSorting);
sortingStatusFilter.addEventListener("change", renderSorting);
sortingGenreFilter.addEventListener("change", renderSorting);
sortingBoxSearchInput.addEventListener("input", () => {
  renderBoxSearchList();
  renderPackingList();
});
sortingCsvButton.addEventListener("click", exportSortingCsv);
packingListCsvButton.addEventListener("click", exportPackingListCsv);
togglePackingListButton.addEventListener("click", () => {
  const isHidden = packingListPanel.classList.toggle("hidden");
  togglePackingListButton.textContent = isHidden ? "箱詰めリストを見る" : "箱詰めリストを閉じる";
});
sortingCancelButton.addEventListener("click", resetSortingForm);
sortingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formItem = createSortingFormItem();

  if (!formItem.name) {
    return;
  }

  const editingIndex = sortingItems.findIndex((item) => item.id === formItem.id);

  if (editingIndex >= 0) {
    sortingItems[editingIndex] = formItem;
  } else {
    sortingItems.unshift(formItem);
  }

  saveSortingItems();
  resetSortingForm();
  renderSorting();
});

function closeSortingActionMenus(exceptMenu = null) {
  sortingTableBody.querySelectorAll(".row-action-menu[open]").forEach((menu) => {
    if (menu !== exceptMenu) {
      menu.removeAttribute("open");
    }
  });
}

sortingTableBody.addEventListener("click", (event) => {
  const summary = event.target.closest(".row-action-menu summary");

  if (summary) {
    closeSortingActionMenus(summary.closest(".row-action-menu"));
    return;
  }

  const button = event.target.closest("button");
  const row = event.target.closest("tr");

  if (!button || !row) {
    return;
  }

  const item = sortingItems.find((currentItem) => currentItem.id === row.dataset.id);

  if (!item) {
    return;
  }

  if (button.dataset.action === "edit-sorting") {
    closeSortingActionMenus();
    startSortingEdit(item);
  }

  if (button.dataset.action === "view-sorting-detail") {
    closeSortingActionMenus();
    const details = [
      `商品名：${item.name || "-"}`,
      `ジャンル：${item.genre || "-"}`,
      `メルカリ：${formatMoney(parseMoney(item.mercariPrice))}`,
      `ヤフオク：${formatMoney(parseMoney(item.yahooPrice))}`,
      `駿河屋：${formatMoney(parseMoney(item.surugayaPrice))}`,
      `良盤：${formatMoney(parseMoney(item.ryobanPrice))}`,
      `エコリング：${formatMoney(parseMoney(item.ecoRingPrice))}`,
      `服買取：${formatMoney(parseMoney(item.clothesPrice))}`,
      `その他：${formatMoney(parseMoney(item.otherPrice))}`,
      `メモ：${item.memo || "-"}`,
    ].join("\n");
    alert(details);
  }

  if (button.dataset.action === "return-source-item") {
    closeSortingActionMenus();
    returnToSourceItem(item);
  }

  if (button.dataset.action === "delete-sorting") {
    closeSortingActionMenus();
    const shouldDelete = confirm(`「${item.name}」を削除しますか？`);

    if (shouldDelete) {
      sortingItems = sortingItems.filter((currentItem) => currentItem.id !== item.id);
      saveSortingItems();
      resetSortingForm();
      renderSorting();
    }
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest("#sortingTableWrap .row-action-menu")) {
    closeSortingActionMenus();
  }
});
inputIssueList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  const row = event.target.closest(".input-issue-item");

  if (!button || !row) {
    return;
  }

  const item = items.find((currentItem) => currentItem.id === row.dataset.id);

  if (!item) {
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
exportButton?.addEventListener("click", exportBackup);
exportButtonTop?.addEventListener("click", exportBackup);
importButton?.addEventListener("click", () => {
  importFileInput.click();
});
importButtonTop?.addEventListener("click", () => {
  importFileInput.click();
});
importFileInput.addEventListener("change", () => {
  importBackup(importFileInput.files[0]);
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
prepareRelistButton.addEventListener("click", () => {
  if (currentDetailItem) {
    closeDetailModal();
    relistItem(currentDetailItem);
  }
});
closeDetailModalButton.addEventListener("click", closeDetailModal);
closeDetailModalFooterButton.addEventListener("click", closeDetailModal);
detailModal.addEventListener("click", (event) => {
  if (event.target === detailModal) {
    closeDetailModal();
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !descriptionModal.classList.contains("hidden")) {
    closeDescriptionModal();
  }

  if (event.key === "Escape" && !detailModal.classList.contains("hidden")) {
    closeDetailModal();
  }
});
shippingMethodInput.addEventListener("change", () => {
  shippingSizeInput.value = "";
  applyShippingMethodCost();
});
shippingSizeInput.addEventListener("change", applyShippingSizeCost);
statusInput.addEventListener("change", updateSoldFieldsVisibility);
descriptionTemplateInput.addEventListener("change", applyDescriptionTemplate);
saveSettingsButton.addEventListener("click", saveSettingsFromForm);
addCategoryButton.addEventListener("click", addCategoryFromForm);
addShippingMethodButton.addEventListener("click", addShippingMethodFromForm);
addTemplateButton.addEventListener("click", addTemplateFromForm);
resetSettingsButton.addEventListener("click", resetSettingsToDefault);
[categorySettingsList, shippingSettingsList, templateSettingsList].forEach((list) => {
  list.addEventListener("input", markSettingsDirty);
});
categorySettingsList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  const row = event.target.closest(".category-setting-row");

  if (!button || !row) {
    return;
  }

  if (button.dataset.action === "remove-category") {
    row.remove();
  }

  if (button.dataset.action === "move-up") {
    moveSettingsRow(row, "up");
  }

  if (button.dataset.action === "move-down") {
    moveSettingsRow(row, "down");
  }

  markSettingsDirty();
});
shippingSettingsList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  const row = event.target.closest(".shipping-setting-row");

  if (!button || !row) {
    return;
  }

  if (button.dataset.action === "remove-shipping") {
    row.remove();
  }

  if (button.dataset.action === "move-up") {
    moveSettingsRow(row, "up");
  }

  if (button.dataset.action === "move-down") {
    moveSettingsRow(row, "down");
  }

  markSettingsDirty();
});
templateSettingsList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  const row = event.target.closest(".template-setting-row");

  if (!button || !row) {
    return;
  }

  if (button.dataset.action === "remove-template") {
    row.remove();
  }

  if (button.dataset.action === "move-up") {
    moveSettingsRow(row, "up");
  }

  if (button.dataset.action === "move-down") {
    moveSettingsRow(row, "down");
  }

  markSettingsDirty();
});
[plannedPriceInput, shippingCostInput, purchaseCostInput].forEach((input) => {
  input.addEventListener("input", updateProfitPreview);
});
[actualSalePriceInput, actualShippingCostInput, purchaseCostInput].forEach((input) => {
  input.addEventListener("input", updateActualProfitPreview);
});

refreshCategoryOptions();
refreshShippingMethodOptions();
refreshTemplateOptions();
listingDateInput.value = formatDateInputValue();
saveSettings();
saveTemplates();
renderSettings();
updateProfitPreview();
updateSoldFieldsVisibility();
collapseCloudPanelOnMobile();
collapseSortingExtrasOnMobile();
setActiveNavigation("form");
render();
initializeCloud();
