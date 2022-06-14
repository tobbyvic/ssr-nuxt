export default {
  getInfo: "/user/getInfo",
  getMenus: "/api/v1/mat/open/menu/findMenuBar",
  getFooter: "/api/v1/mat/open/menu/findConfig",

  // 登录
  getUserInfo: "/api/v1/mat/inner/account/getUserInfo",
  getAccessToken: "/api/v1/mat/open/login/getAccessToken",

  // AILab
  uploadMultiFile: "/api/v1/mat/inner/ai/forecast/multFileUpload",
  getCalculationResult: "/api/v1/mat/open/calculate/statCalculateResult",
  fileUploadWithCheck: "/api/v1/mat/inner/ai/forecast/fileUploadWithCheck",
  firstSubmit: "/api/v1/mat/inner/ai/forecast/firstSubmit",
  secondSubmit: "/api/v1/mat/inner/ai/forecast/secondSubmit",
  findForecastResult: "/api/v1/mat/inner/ai/forecast/findForecastResult",

  // 首页
  getScale: "/api/v1/mat/open/material/attrs/scale",
  getSpecies: "/api/v1/search/open/material/species",

  // 详情
  getCif: "/api/v1/mat/open/material/computedCif",
  getDetail: "/api/v1/mat/open/material/detail",
  getEnergyData: "/api/v1/mat/open/material/energyBand",
  getXrdData: "/api/v1/mat/open/xrd/data",
  getDosData: "/api/v1/mat/open/material/dos",
  downloadFile: "api/v1/mat/open/material/downloadFile",

  // 开放文档
  openArticleColumnApi: "/api/v1/mat/open/article/openColumn",
  openArticleByIdApi: "/api/v1/mat/open/article/detail",

  // 个人资料
  getPersonalInfo: "/api/v1/mat/inner/user/findProfile",
  getOtherPersonalInfo: "/api/v1/mat/inner/user/findOtherProfile",
  updatePersonalInfo: "/api/v1/mat/inner/user/saveProfile",

  getResume: "/api/v1/mat/inner/user/resumes",
  updateResume: "/api/v1/mat/inner/user/updateResumes",
  uploadPic: "/api/v1/mat/inner/user/uploadAvatar",

  myFocus: "/api/v1/mat/inner/user/myFocus",
  focusMe: "/api/v1/mat/inner/user/focusMe",
  updateFocus: "/api/v1/mat/inner/user/updateFocus",

  // 收藏材料
  updateCollectedMaterial: "/api/v1/mat/inner/user/collect",
  collectedMaterialList: "/api/v1/mat/inner/user/collectMaterials",

  // 文献检索
  literatureCount: "/api/v1/search/open/literature/index",
  searchHistory: "/api/v1/search/open/literature/searchHistory",
  literatureSearch: "/api/v1/search/open/literature/select",
  literatureDownload: "/api/v1/search/open/literature/download",
  literatureFavour: "/api/v1/search/open/literature/favour",
  literatureDetail: "/api/v1/search/open/literature/detail",
};
