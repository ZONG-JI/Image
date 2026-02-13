const itinerary = window.ITINERARY || [
  {
    id: 1,
    date: "6/6",
    title: "巴黎 · 抵达与塞纳河",
    summary: "抵达巴黎，埃菲尔铁塔与卢浮宫入门版。",
    mode: "市内步行/地铁",
    distanceText: "市内移动",
    durationText: "1-2小时分散",
    route: { type: "NONE" },
    stops: [
      { name: "巴黎戴高乐机场 CDG", position: { lat: 49.0097, lng: 2.5479 } },
      { name: "埃菲尔铁塔", position: { lat: 48.8584, lng: 2.2945 } },
      { name: "卢浮宫", position: { lat: 48.8606, lng: 2.3376 } },
    ],
    timeline: [
      { time: "09:00", title: "抵达市区", desc: "CDG → 酒店寄存行李" },
      { time: "11:00", title: "埃菲尔铁塔", desc: "战神广场拍照 + 河边散步" },
      { time: "15:00", title: "卢浮宫", desc: "优先看蒙娜丽莎与胜利女神" },
      { time: "19:30", title: "塞纳河夜游", desc: "游船+夜景" },
    ],
    details: {
      morning: ["机场到市区，寄存行李后轻松步行调整时差", "战神广场+埃菲尔铁塔外观"],
      afternoon: ["卢浮宫重点馆藏，控制参观时长", "杜乐丽花园短休"],
      evening: ["塞纳河游船+河岸夜景", "拉丁区晚餐"],
      tips: ["提前预约卢浮宫门票", "第一天避免安排过满"],
    },
    highlights: ["塞纳河游船", "战神广场打卡", "倒时差轻松日程"],
  },
  {
    id: 2,
    date: "6/7",
    title: "巴黎 · 经典街区",
    summary: "蒙马特高地 + 香榭丽舍 + 凯旋门。",
    mode: "市内步行/地铁",
    distanceText: "市内移动",
    durationText: "2-3小时分散",
    route: { type: "NONE" },
    stops: [
      { name: "蒙马特高地", position: { lat: 48.8867, lng: 2.3431 } },
      { name: "凯旋门", position: { lat: 48.8738, lng: 2.295 } },
      { name: "香榭丽舍大道", position: { lat: 48.8698, lng: 2.3078 } },
    ],
    timeline: [
      { time: "09:00", title: "蒙马特高地", desc: "圣心大教堂 + 画家广场" },
      { time: "13:30", title: "凯旋门", desc: "登顶或外观拍照" },
      { time: "15:00", title: "香榭丽舍大道", desc: "步行至协和广场" },
      { time: "19:00", title: "歌剧院商圈", desc: "晚餐 + 夜景" },
    ],
    details: {
      morning: ["蒙马特高地晨景，圣心大教堂俯瞰城市"],
      afternoon: ["凯旋门周边拍照", "香榭丽舍大道购物/咖啡"],
      evening: ["歌剧院或老佛爷周边用餐", "夜景散步"],
      tips: ["蒙马特阶梯较多，穿舒适鞋", "凯旋门登顶可提前订票"],
    },
    highlights: ["圣心大教堂俯瞰巴黎", "香街夜景", "歌剧院商圈"],
  },
  {
    id: 3,
    date: "6/8",
    title: "巴黎 · 西岱岛与玛黑",
    summary: "圣母院区 + 玛黑区漫步。",
    mode: "市内步行/地铁",
    distanceText: "市内移动",
    durationText: "2小时分散",
    route: { type: "NONE" },
    stops: [
      { name: "西岱岛", position: { lat: 48.853, lng: 2.3499 } },
      { name: "圣礼拜堂", position: { lat: 48.8554, lng: 2.3445 } },
      { name: "玛黑区", position: { lat: 48.8589, lng: 2.3622 } },
    ],
    timeline: [
      { time: "09:30", title: "西岱岛", desc: "圣母院外观 + 河畔漫步" },
      { time: "11:00", title: "圣礼拜堂", desc: "彩窗参观" },
      { time: "14:00", title: "玛黑区", desc: "咖啡馆 + 设计店" },
      { time: "18:30", title: "老佛爷/春天百货", desc: "购物备选" },
    ],
    details: {
      morning: ["西岱岛散步，圣母院外观", "圣礼拜堂彩窗参观"],
      afternoon: ["玛黑区慢逛，甜品/咖啡", "蓬皮杜中心外观可选"],
      evening: ["百货购物或返回酒店休息"],
      tips: ["圣礼拜堂需要预约时段", "玛黑区适合傍晚闲逛"],
    },
    highlights: ["圣礼拜堂彩窗", "玛黑区咖啡馆", "老佛爷购物备选"],
  },
  {
    id: 4,
    date: "6/9",
    title: "巴黎 ✈️ 尼斯",
    summary: "飞抵蔚蓝海岸，漫步天使湾。",
    mode: "飞行 + 市内步行",
    distanceText: "约690 km (飞行)",
    durationText: "1.5小时飞行",
    route: {
      type: "FLIGHT",
      path: [
        { lat: 49.0097, lng: 2.5479 },
        { lat: 43.7102, lng: 7.262 },
      ],
    },
    stops: [
      { name: "巴黎戴高乐机场 CDG", position: { lat: 49.0097, lng: 2.5479 } },
      { name: "尼斯蔚蓝海岸机场", position: { lat: 43.6653, lng: 7.215 } },
      { name: "英国人漫步大道", position: { lat: 43.6955, lng: 7.2651 } },
      { name: "城堡山", position: { lat: 43.6958, lng: 7.2767 } },
    ],
    timeline: [
      { time: "08:00", title: "出发飞尼斯", desc: "巴黎 → 尼斯 (约1.5小时)" },
      { time: "11:00", title: "提车入住", desc: "机场取车 + 入住" },
      { time: "14:30", title: "英国人漫步大道", desc: "海岸线散步" },
      { time: "18:30", title: "城堡山", desc: "看日落" },
    ],
    details: {
      morning: ["乘机抵达尼斯，机场提车", "入住后稍作休整"],
      afternoon: ["英国人漫步大道+海滩", "尼斯老城小吃"],
      evening: ["城堡山日落", "海边晚餐"],
      tips: ["机场取车排队时间预留", "老城停车位紧张"],
    },
    highlights: ["天使湾蓝色海岸", "尼斯老城海鲜", "城堡山日落"],
  },
  {
    id: 5,
    date: "6/10",
    title: "尼斯 ↔ 摩纳哥",
    summary: "埃兹小镇 + 蒙特卡洛赌场。",
    mode: "自驾",
    distanceText: "约70 km",
    durationText: "1.5小时驾驶 + 停留",
    route: {
      type: "DRIVING",
      origin: { lat: 43.7102, lng: 7.262 },
      destination: { lat: 43.7384, lng: 7.4246 },
      waypoints: [{ lat: 43.7274, lng: 7.3625 }],
    },
    stops: [
      { name: "尼斯市区", position: { lat: 43.7102, lng: 7.262 } },
      { name: "埃兹小镇", position: { lat: 43.7274, lng: 7.3625 } },
      { name: "摩纳哥蒙特卡洛", position: { lat: 43.7384, lng: 7.4246 } },
    ],
    timeline: [
      { time: "09:00", title: "出发埃兹", desc: "尼斯 → 埃兹 (约30分钟)" },
      { time: "11:00", title: "埃兹小镇", desc: "山城漫步 + 植物园" },
      { time: "14:00", title: "摩纳哥", desc: "赌场广场 + 港口" },
      { time: "18:00", title: "返回尼斯", desc: "老城晚餐" },
    ],
    details: {
      morning: ["埃兹小镇石板路与海景", "植物园拍照"],
      afternoon: ["摩纳哥亲王宫外观", "蒙特卡洛赌场广场"],
      evening: ["回尼斯老城晚餐", "天使湾夜景"],
      tips: ["摩纳哥停车费较高", "海岸公路风景更好但车速慢"],
    },
    highlights: ["摩纳哥港口游艇", "F1赛道转弯", "芒通小镇可选"],
  },
  {
    id: 6,
    date: "6/11",
    title: "尼斯 → 瑞士安德马特",
    summary: "穿越意大利北部，进入瑞士山口。",
    mode: "自驾",
    distanceText: "约450 km",
    durationText: "5-5.5小时",
    route: {
      type: "DRIVING",
      origin: { lat: 43.7102, lng: 7.262 },
      destination: { lat: 46.6356, lng: 8.5937 },
      waypoints: [{ lat: 46.0037, lng: 8.9511 }],
    },
    stops: [
      { name: "尼斯", position: { lat: 43.7102, lng: 7.262 } },
      { name: "卢加诺", position: { lat: 46.0037, lng: 8.9511 } },
      { name: "安德马特", position: { lat: 46.6356, lng: 8.5937 } },
    ],
    timeline: [
      { time: "08:00", title: "长途出发", desc: "尼斯 → 意大利北部高速" },
      { time: "12:30", title: "卢加诺午休", desc: "湖畔用餐 + 短暂停留" },
      { time: "16:30", title: "圣哥达山口", desc: "翻越阿尔卑斯" },
      { time: "18:30", title: "抵达安德马特", desc: "入住休息" },
    ],
    details: {
      morning: ["尼斯出发，意大利高速穿行", "中途服务区补给"],
      afternoon: ["卢加诺湖畔午休", "继续北上进入瑞士"],
      evening: ["抵达安德马特，早睡休整"],
      tips: ["准备瑞士高速贴纸", "山口天气变化快"],
    },
    highlights: ["意大利高速穿行", "卢加诺湖畔午休", "圣哥达山口"],
  },
  {
    id: 7,
    date: "6/12",
    title: "瑞士 · 安德马特 → 因特拉肯",
    summary: "恶魔之桥 + 格林德瓦梦幻山坡。",
    mode: "自驾 + 缆车",
    distanceText: "约150 km",
    durationText: "2小时驾驶 + 游玩",
    route: {
      type: "DRIVING",
      origin: { lat: 46.6356, lng: 8.5937 },
      destination: { lat: 46.6863, lng: 7.8632 },
      waypoints: [{ lat: 46.6242, lng: 8.0414 }],
    },
    stops: [
      { name: "安德马特", position: { lat: 46.6356, lng: 8.5937 } },
      { name: "格林德瓦", position: { lat: 46.6242, lng: 8.0414 } },
      { name: "因特拉肯", position: { lat: 46.6863, lng: 7.8632 } },
    ],
    timeline: [
      { time: "08:30", title: "恶魔之桥", desc: "安德马特短停拍照" },
      { time: "11:30", title: "格林德瓦", desc: "山坡小镇漫步" },
      { time: "14:00", title: "First山/缆车", desc: "选择一条轻徒步" },
      { time: "19:00", title: "抵达因特拉肯", desc: "湖畔晚餐" },
    ],
    details: {
      morning: ["恶魔之桥拍照", "前往格林德瓦"],
      afternoon: ["First山或缆车观景", "劳特布龙嫩可选"],
      evening: ["因特拉肯入住，晚餐"],
      tips: ["少女峰区域交通多为缆车/小火车", "注意天气备雨具"],
    },
    highlights: ["少女峰区域", "First山悬崖栈道", "雪山小镇漫步"],
  },
  {
    id: 8,
    date: "6/13",
    title: "瑞士 · 因特拉肯 → 卢塞恩",
    summary: "布里恩茨湖 + 卢塞恩老城。",
    mode: "自驾",
    distanceText: "约110 km",
    durationText: "1.5小时",
    route: {
      type: "DRIVING",
      origin: { lat: 46.6863, lng: 7.8632 },
      destination: { lat: 47.0502, lng: 8.3093 },
      waypoints: [{ lat: 46.7136, lng: 7.9667 }],
    },
    stops: [
      { name: "因特拉肯", position: { lat: 46.6863, lng: 7.8632 } },
      { name: "布里恩茨湖", position: { lat: 46.7136, lng: 7.9667 } },
      { name: "卢塞恩", position: { lat: 47.0502, lng: 8.3093 } },
    ],
    timeline: [
      { time: "09:00", title: "布里恩茨湖", desc: "湖畔栈桥拍照" },
      { time: "12:30", title: "卢塞恩", desc: "抵达 + 午餐" },
      { time: "14:30", title: "老城漫步", desc: "卡佩尔廊桥" },
      { time: "19:00", title: "湖畔晚餐", desc: "夜景散步" },
    ],
    details: {
      morning: ["布里恩茨湖取景点", "湖边散步"],
      afternoon: ["卢塞恩老城+狮子纪念碑"],
      evening: ["湖畔晚餐，夜景拍照"],
      tips: ["湖区停车位有限，尽量早到"],
    },
    highlights: ["爱的迫降栈桥", "卡佩尔廊桥", "湖畔晚餐"],
  },
  {
    id: 9,
    date: "6/14",
    title: "瑞士 · 卢塞恩 → 圣莫里茨",
    summary: "海蒂村 + 恩加丁谷。",
    mode: "自驾",
    distanceText: "约180 km",
    durationText: "2.5-3小时",
    route: {
      type: "DRIVING",
      origin: { lat: 47.0502, lng: 8.3093 },
      destination: { lat: 46.4908, lng: 9.8355 },
      waypoints: [{ lat: 47.0126, lng: 9.5759 }],
    },
    stops: [
      { name: "卢塞恩", position: { lat: 47.0502, lng: 8.3093 } },
      { name: "迈恩费尔德(海蒂村)", position: { lat: 47.0126, lng: 9.5759 } },
      { name: "圣莫里茨", position: { lat: 46.4908, lng: 9.8355 } },
    ],
    timeline: [
      { time: "08:30", title: "出发东行", desc: "卢塞恩 → 海蒂村" },
      { time: "11:00", title: "海蒂村", desc: "田园小镇参观" },
      { time: "15:00", title: "前往圣莫里茨", desc: "进入恩加丁谷" },
      { time: "18:30", title: "湖畔散步", desc: "高山湖夜景" },
    ],
    details: {
      morning: ["前往迈恩费尔德(海蒂村)", "田园风光拍照"],
      afternoon: ["继续东进圣莫里茨", "山谷风景"],
      evening: ["湖畔散步或小镇用餐"],
      tips: ["长途驾驶注意休息", "山区可能有临时施工"],
    },
    highlights: ["瑞士东部田园", "高山湖景", "豪华度假小镇"],
  },
  {
    id: 10,
    date: "6/15",
    title: "圣莫里茨 → 多洛米蒂",
    summary: "进入意大利山区，富内斯与瑟切达。",
    mode: "自驾 + 缆车",
    distanceText: "约200 km",
    durationText: "3.5-4小时",
    route: {
      type: "DRIVING",
      origin: { lat: 46.4908, lng: 9.8355 },
      destination: { lat: 46.5769, lng: 11.6714 },
      waypoints: [{ lat: 46.6342, lng: 11.7241 }],
    },
    stops: [
      { name: "圣莫里茨", position: { lat: 46.4908, lng: 9.8355 } },
      { name: "富内斯山谷", position: { lat: 46.6342, lng: 11.7241 } },
      { name: "奥蒂塞伊", position: { lat: 46.5769, lng: 11.6714 } },
    ],
    timeline: [
      { time: "08:00", title: "离开瑞士", desc: "山路进入意大利" },
      { time: "12:30", title: "富内斯山谷", desc: "打卡圣约翰教堂" },
      { time: "16:00", title: "奥蒂塞伊", desc: "镇上漫步" },
      { time: "17:30", title: "瑟切达", desc: "缆车登山看日落" },
    ],
    details: {
      morning: ["穿越边境进入意大利", "沿途补给"],
      afternoon: ["富内斯山谷拍照", "奥蒂塞伊入住"],
      evening: ["瑟切达观景或镇上晚餐"],
      tips: ["山区缆车营业时间提前查", "停车遵守限行规则"],
    },
    highlights: ["富内斯教堂打卡", "瑟切达刀锋山", "意式山谷风光"],
  },
  {
    id: 11,
    date: "6/16",
    title: "多洛米蒂核心日",
    summary: "休斯山草甸 + 三峰地标。",
    mode: "自驾",
    distanceText: "约120 km",
    durationText: "2.5小时驾驶 + 徒步",
    route: {
      type: "DRIVING",
      origin: { lat: 46.5769, lng: 11.6714 },
      destination: { lat: 46.5405, lng: 12.1357 },
      waypoints: [
        { lat: 46.5451, lng: 11.6195 },
        { lat: 46.6189, lng: 12.3035 },
      ],
    },
    stops: [
      { name: "奥蒂塞伊", position: { lat: 46.5769, lng: 11.6714 } },
      { name: "休斯山", position: { lat: 46.5451, lng: 11.6195 } },
      { name: "三峰", position: { lat: 46.6189, lng: 12.3035 } },
      { name: "科尔蒂纳", position: { lat: 46.5405, lng: 12.1357 } },
    ],
    timeline: [
      { time: "08:00", title: "休斯山草甸", desc: "晨景 + 轻徒步" },
      { time: "12:30", title: "翻越山口", desc: "前往三峰" },
      { time: "15:00", title: "三峰徒步", desc: "主环线 1-2 小时" },
      { time: "19:00", title: "科尔蒂纳", desc: "入住/晚餐" },
    ],
    details: {
      morning: ["休斯山草甸轻徒步", "草甸风光拍照"],
      afternoon: ["驱车到三峰停车区", "选择短线徒步"],
      evening: ["科尔蒂纳小镇用餐休息"],
      tips: ["三峰停车位紧张，尽量早到", "山路弯多注意安全"],
    },
    highlights: ["高山草甸晨景", "三峰徒步", "科尔蒂纳奥运小镇"],
  },
  {
    id: 12,
    date: "6/17",
    title: "科尔蒂纳 → 佛罗伦萨",
    summary: "山地出发，抵达托斯卡纳。",
    mode: "自驾",
    distanceText: "约410 km",
    durationText: "4-4.5小时",
    route: {
      type: "DRIVING",
      origin: { lat: 46.5405, lng: 12.1357 },
      destination: { lat: 43.7696, lng: 11.2558 },
    },
    stops: [
      { name: "科尔蒂纳", position: { lat: 46.5405, lng: 12.1357 } },
      { name: "佛罗伦萨", position: { lat: 43.7696, lng: 11.2558 } },
    ],
    timeline: [
      { time: "08:30", title: "出发南下", desc: "多洛米蒂 → 托斯卡纳" },
      { time: "13:30", title: "抵达佛罗伦萨", desc: "入住 + 午餐" },
      { time: "16:00", title: "老桥/领主广场", desc: "市中心漫步" },
      { time: "19:30", title: "米开朗基罗广场", desc: "日落全景" },
    ],
    details: {
      morning: ["离开山区，驶向佛罗伦萨"],
      afternoon: ["老桥 + 领主广场", "市中心步行"],
      evening: ["米开朗基罗广场日落"],
      tips: ["注意佛罗伦萨ZTL限行区", "停车建议酒店车库"],
    },
    highlights: ["托斯卡纳阳光", "米开朗基罗广场日落", "老桥夜景"],
  },
  {
    id: 13,
    date: "6/18",
    title: "佛罗伦萨 → 罗马",
    summary: "文艺复兴早场 + 罗马夜景。",
    mode: "自驾 + 市内步行",
    distanceText: "约275 km",
    durationText: "3小时驾驶",
    route: {
      type: "DRIVING",
      origin: { lat: 43.7696, lng: 11.2558 },
      destination: { lat: 41.9028, lng: 12.4964 },
    },
    stops: [
      { name: "佛罗伦萨", position: { lat: 43.7696, lng: 11.2558 } },
      { name: "罗马", position: { lat: 41.9028, lng: 12.4964 } },
    ],
    timeline: [
      { time: "09:00", title: "乌菲兹/学院美术馆", desc: "挑一处重点参观" },
      { time: "13:30", title: "出发罗马", desc: "高速约3小时" },
      { time: "17:00", title: "抵达罗马", desc: "办理入住" },
      { time: "20:00", title: "许愿池夜景", desc: "西班牙广场周边" },
    ],
    details: {
      morning: ["参观乌菲兹或学院美术馆", "百花大教堂外观"],
      afternoon: ["自驾前往罗马", "入住后短休"],
      evening: ["许愿池 + 西班牙广场夜景"],
      tips: ["罗马停车选择酒店车库", "美术馆需提前订票"],
    },
    highlights: ["乌菲兹美术馆", "圣母百花大教堂", "特莱维喷泉夜景"],
  },
  {
    id: 14,
    date: "6/19",
    title: "罗马 · 古迹巡礼",
    summary: "斗兽场、古罗马广场、万神殿。",
    mode: "市内步行/地铁",
    distanceText: "市内移动",
    durationText: "2-3小时分散",
    route: { type: "NONE" },
    stops: [
      { name: "斗兽场", position: { lat: 41.8902, lng: 12.4922 } },
      { name: "古罗马广场", position: { lat: 41.8925, lng: 12.4853 } },
      { name: "万神殿", position: { lat: 41.8986, lng: 12.4769 } },
    ],
    timeline: [
      { time: "09:00", title: "斗兽场", desc: "建议提前预约" },
      { time: "11:30", title: "古罗马广场", desc: "帕拉蒂尼山" },
      { time: "15:00", title: "万神殿", desc: "纳沃纳广场附近" },
      { time: "19:30", title: "台伯河夜景", desc: "Trastevere 晚餐" },
    ],
    details: {
      morning: ["斗兽场 + 古罗马广场", "帕拉蒂尼山全景"],
      afternoon: ["万神殿 + 纳沃纳广场", "街头冰淇淋"],
      evening: ["Trastevere 晚餐", "台伯河夜景"],
      tips: ["斗兽场门票提前预约", "中午注意防晒补水"],
    },
    highlights: ["古罗马核心区", "纳沃纳广场", "台伯河夜景"],
  },
  {
    id: 15,
    date: "6/20",
    title: "罗马 · 梵蒂冈与返程",
    summary: "梵蒂冈半日，晚间返程。",
    mode: "市内步行 + 机场交通",
    distanceText: "市内移动",
    durationText: "约1小时去机场",
    route: { type: "NONE" },
    stops: [
      { name: "梵蒂冈", position: { lat: 41.9022, lng: 12.4539 } },
      { name: "圣彼得大教堂", position: { lat: 41.9022, lng: 12.4534 } },
      { name: "罗马菲乌米奇诺机场 FCO", position: { lat: 41.7999, lng: 12.2462 } },
    ],
    timeline: [
      { time: "09:00", title: "梵蒂冈博物馆", desc: "西斯廷礼拜堂" },
      { time: "12:30", title: "圣彼得大教堂", desc: "登顶或广场拍照" },
      { time: "16:30", title: "前往机场", desc: "市区 → FCO" },
      { time: "20:30", title: "起飞回国", desc: "办理退税/登机" },
    ],
    details: {
      morning: ["梵蒂冈博物馆重点展厅", "西斯廷礼拜堂"],
      afternoon: ["圣彼得大教堂参观", "广场合影"],
      evening: ["前往机场办理手续", "还车+退税"],
      tips: ["梵蒂冈务必提前预约", "机场提前3小时到达"],
    },
    highlights: ["西斯廷礼拜堂", "圣彼得广场", "机场还车"],
  },
];

let map;
let markers = [];
let routeLayer = null;
let currentRouteToken = 0;
let currentGalleryToken = 0;

const dayListEl = document.getElementById("day-list");
const dayTitleEl = document.getElementById("day-title");
const daySummaryEl = document.getElementById("day-summary");
const dayDistanceEl = document.getElementById("day-distance");
const dayDurationEl = document.getElementById("day-duration");
const dayModeEl = document.getElementById("day-mode");
const dayTimelineEl = document.getElementById("day-timeline");
const dayGalleryEl = document.getElementById("day-gallery");
const dayDetailsEl = document.getElementById("day-details");
const dayWeatherEl = document.getElementById("day-weather");
let currentWeatherToken = 0;
const weatherCache = new Map();

function initMap() {
  map = L.map("map", {
    zoomControl: true,
    scrollWheelZoom: true,
  }).setView([47.0, 8.0], 5);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  renderDayList();
  selectDay(itinerary[0].id);

  // Leaflet 容器在布局/字体加载后尺寸可能变化，导致“内容和外框不一致”
  requestAnimationFrame(() => map.invalidateSize());
  window.addEventListener("resize", () => map.invalidateSize());
}

function renderDayList() {
  dayListEl.innerHTML = "";
  itinerary.forEach((day) => {
    const card = document.createElement("div");
    card.className = "day-card";
    card.dataset.dayId = day.id;
    card.innerHTML = `
      <h3>Day ${day.id} · ${day.date}</h3>
      <p>${day.title}</p>
    `;
    card.addEventListener("click", () => selectDay(day.id));
    dayListEl.appendChild(card);
  });
}

function selectDay(id) {
  const day = itinerary.find((item) => item.id === id);
  if (!day) return;

  document.querySelectorAll(".day-card").forEach((card) => {
    card.classList.toggle("active", Number(card.dataset.dayId) === id);
  });

  dayTitleEl.textContent = `${day.date} · ${day.title}`;
  daySummaryEl.textContent = buildSummary(day);
  dayDistanceEl.textContent = day.distanceText;
  dayDurationEl.textContent = day.durationText;
  dayModeEl.textContent = day.mode;

  renderTimeline(day);
  renderGallery(day);
  renderDetails(day);
  renderWeather(day);

  clearMapLayers();
  renderMarkers(day.stops);
  renderRoute(day.route);
}

function getWeatherAnchorStop(day) {
  const stops = day?.stops || [];
  const nonAirport = stops.find((s) => s?.name && !isAirportStop(s.name));
  return nonAirport || stops[0] || null;
}

function weatherCodeToZh(code) {
  const map = {
    0: "晴",
    1: "大部晴朗",
    2: "多云",
    3: "阴",
    45: "雾",
    48: "雾凇",
    51: "小毛毛雨",
    53: "毛毛雨",
    55: "较强毛毛雨",
    56: "冻毛毛雨",
    57: "强冻毛毛雨",
    61: "小雨",
    63: "中雨",
    65: "大雨",
    66: "冻雨",
    67: "强冻雨",
    71: "小雪",
    73: "中雪",
    75: "大雪",
    77: "冰粒",
    80: "阵雨",
    81: "较强阵雨",
    82: "强阵雨",
    85: "阵雪",
    86: "强阵雪",
    95: "雷暴",
    96: "雷暴伴小冰雹",
    99: "雷暴伴大冰雹",
  };
  return map[code] || `天气码 ${code}`;
}

async function fetchWeather(lat, lng) {
  const key = `${lat.toFixed(4)},${lng.toFixed(4)}`;
  if (weatherCache.has(key)) return weatherCache.get(key);

  const url =
    "https://api.open-meteo.com/v1/forecast?" +
    new URLSearchParams({
      latitude: String(lat),
      longitude: String(lng),
      timezone: "auto",
      current: "temperature_2m,weather_code,wind_speed_10m",
      daily: "weather_code,temperature_2m_max,temperature_2m_min",
      forecast_days: "3",
    }).toString();

  const promise = fetch(url)
    .then((r) => r.json())
    .catch(() => null);
  weatherCache.set(key, promise);
  return promise;
}

function renderWeather(day) {
  if (!dayWeatherEl) return;
  const stop = getWeatherAnchorStop(day);
  const lat = stop?.position?.lat;
  const lng = stop?.position?.lng;
  if (typeof lat !== "number" || typeof lng !== "number") {
    dayWeatherEl.innerHTML = `<p class="weather-muted">暂无坐标，无法加载天气。</p>`;
    return;
  }

  const token = ++currentWeatherToken;
  dayWeatherEl.innerHTML = `<p class="weather-muted">正在加载天气（${normalizePlaceName(stop.name)}）...</p>`;
  fetchWeather(lat, lng).then((data) => {
    if (token !== currentWeatherToken) return;
    const current = data?.current;
    const daily = data?.daily;
    if (!current || !daily) {
      dayWeatherEl.innerHTML = `<p class="weather-muted">天气加载失败，请稍后重试。</p>`;
      return;
    }

    const temp = Math.round(current.temperature_2m);
    const code = current.weather_code;
    const wind = Math.round(current.wind_speed_10m);
    const desc = weatherCodeToZh(code);
    const place = normalizePlaceName(stop.name);

    const days = (daily.time || []).map((t, i) => {
      const max = daily.temperature_2m_max?.[i];
      const min = daily.temperature_2m_min?.[i];
      const c = daily.weather_code?.[i];
      return {
        date: String(t).slice(5),
        text: weatherCodeToZh(c),
        range:
          typeof min === "number" && typeof max === "number"
            ? `${Math.round(min)}~${Math.round(max)}°C`
            : "—",
      };
    });

    dayWeatherEl.innerHTML = `
      <div class="weather-row">
        <div class="weather-main">
          <div class="weather-temp">${temp}°C</div>
          <div class="weather-desc">${place} · ${desc}</div>
        </div>
        <div class="weather-meta">风 ${wind} km/h</div>
      </div>
      <ul class="weather-forecast">
        ${days
          .map(
            (d) => `
          <li>
            <span class="k">${d.date}</span>
            <span class="k">${d.text}</span>
            <span class="v">${d.range}</span>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  });
}

function renderMarkers(stops) {
  stops.forEach((stop, index) => {
    const marker = L.marker([stop.position.lat, stop.position.lng], {
      icon: createNumberedIcon(index + 1),
    }).addTo(map);
    marker.bindPopup(`<strong>${stop.name}</strong>`);
    markers.push(marker);
  });

  const bounds = L.latLngBounds(
    stops.map((stop) => [stop.position.lat, stop.position.lng])
  );
  if (bounds.isValid()) {
    map.fitBounds(bounds, { padding: [60, 60] });
  }
}

function renderRoute(route) {
  if (!route || route.type === "NONE") return;
  if (route.type === "FLIGHT") {
    routeLayer = L.polyline(
      route.path.map((point) => [point.lat, point.lng]),
      {
        color: "#22c55e",
        weight: 4,
        opacity: 0.8,
        dashArray: "8 10",
      }
    ).addTo(map);
    return;
  }

  if (route.type === "DRIVING") {
    const token = ++currentRouteToken;
    const coordinates = buildRouteCoords(route);
    const url = `https://router.project-osrm.org/route/v1/driving/${coordinates}?overview=full&geometries=geojson`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (token !== currentRouteToken) return;
        const geometry = data?.routes?.[0]?.geometry?.coordinates;
        if (geometry && geometry.length) {
          const latLngs = geometry.map(([lng, lat]) => [lat, lng]);
          routeLayer = L.polyline(latLngs, {
            color: "#2563eb",
            weight: 5,
            opacity: 0.85,
          }).addTo(map);
        } else {
          drawFallbackLine(route);
        }
      })
      .catch(() => drawFallbackLine(route));
  }
}

function clearMapLayers() {
  markers.forEach((marker) => marker.remove());
  markers = [];
  if (routeLayer) {
    routeLayer.remove();
    routeLayer = null;
  }
  currentRouteToken += 1;
}

function extractParentheticalParts(text) {
  if (!text) return [];
  const parts = [];
  const patterns = [/（([^）]+)）/g, /\(([^)]+)\)/g];
  patterns.forEach((re) => {
    let match;
    while ((match = re.exec(text))) {
      const value = String(match[1] || "").trim();
      if (value) parts.push(value);
    }
  });
  return Array.from(new Set(parts));
}

function buildCompactTimelineTitle(item) {
  const parts = extractParentheticalParts(item?.desc);
  if (!parts.length) return item?.title || "";
  return `${item?.title || ""}（${parts.join("；")}）`;
}

function renderTimeline(day) {
  const timeline = day.timeline?.length
    ? day.timeline
    : buildDefaultTimeline(day);
  dayTimelineEl.innerHTML = "";
  timeline.forEach((item) => {
    const compactTitle = buildCompactTimelineTitle(item);
    const li = document.createElement("li");
    li.className = "timeline-item";
    li.innerHTML = `
      <div class="timeline-time">${item.time}</div>
      <div class="timeline-content">
        <h5>${compactTitle}</h5>
      </div>
    `;
    dayTimelineEl.appendChild(li);
  });
}

function renderGallery(day) {
  const gallery = day.gallery?.length ? day.gallery : buildDefaultGallery(day);
  const token = ++currentGalleryToken;
  dayGalleryEl.innerHTML = "";
  gallery.forEach((item) => {
    const card = document.createElement("div");
    card.className = "gallery-card";
    card.innerHTML = `
      <img src="${item.url}" alt="${item.title}" loading="lazy" />
      <div class="gallery-body">
        <h5>${item.title}</h5>
        <p>${item.subtitle}</p>
      </div>
    `;
    dayGalleryEl.appendChild(card);
  });

  if (!day.gallery?.length) {
    populateGalleryImages(gallery, token);
  }
}

function renderDetails(day) {
  dayDetailsEl.innerHTML = "";
  const rec = getFoodRecsForDay(day);
  if (rec) {
    const grid = document.createElement("div");
    grid.className = "meal-grid";

    [
      { key: "lunch", label: "午餐" },
      { key: "dinner", label: "晚餐" },
    ].forEach(({ key, label }) => {
      const m = rec?.[key];
      const detailEl = document.createElement("details");
      detailEl.open = true;

      if (!m) {
        detailEl.innerHTML = `
          <summary>${label}</summary>
          <p class="food-note">暂无该餐推荐数据。</p>
        `;
        grid.appendChild(detailEl);
        return;
      }

      const area = m.area || "附近";
      const radius = m.radius_m ? `${m.radius_m}m` : "";
      const places = Array.isArray(m.places) ? m.places : [];
      const itemsHtml = places
        .slice(0, 5)
        .map((p) => {
          const name = p?.name || "餐厅";
          const url = p?.maps_url || "#";
          const meta = formatFoodMeta(p);
          return `
            <li class="food-place">
              <a class="food-link" href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>
              <div class="food-meta">${meta}</div>
            </li>
          `;
        })
        .join("");

      detailEl.innerHTML = `
        <summary>${label} · ${area}${radius ? `（${radius}）` : ""}</summary>
        <ul class="food-place-list">${itemsHtml}</ul>
      `;

      grid.appendChild(detailEl);
    });

    const note = document.createElement("p");
    note.className = "food-note";
    note.textContent = "数据源：Google Places（按评分排序，价格为 price_level 估算区间）。";
    dayDetailsEl.appendChild(grid);
    dayDetailsEl.appendChild(note);
    return;
  }

  // Fallback: 如果没有 FOOD_RECS，则展示 itinerary.js 的 day.food
  const items = day?.food;
  const list = items && items.length ? items : ["（可在 itinerary.js 中补充）"];
  const ul = document.createElement("ul");
  ul.className = "food-fallback-list";
  ul.innerHTML = list.map((text) => `<li>${text}</li>`).join("");
  dayDetailsEl.appendChild(ul);
  const note = document.createElement("p");
  note.className = "food-note";
  note.textContent = "暂无 Top5 餐厅数据（可重新生成 trip-ui/food-recs.js）。";
  dayDetailsEl.appendChild(note);
}

function getFoodRecsForDay(day) {
  const recs = window.FOOD_RECS;
  if (!recs || !day) return null;
  const dayKey = `D${day.id}`;
  const dateKey = day.date;
  return recs?.[dayKey]?.[dateKey] || null;
}

function formatFoodMeta(place) {
  const rating = typeof place?.rating === "number" ? `⭐${place.rating.toFixed(1)}` : "";
  const price = place?.price_text ? `${place.price_text}` : "";
  const cuisineRaw = place?.cuisine ? `${place.cuisine}` : "";
  const cuisine = cuisineRaw
    // 某些环境可能不支持 String.prototype.replaceAll，统一用正则
    .replace(/（以 Google 类型为准）/g, "")
    .replace(/\(以 Google 类型为准\)/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return [rating, price, cuisine].filter(Boolean).join(" · ");
}

function createNumberedIcon(number) {
  return L.divIcon({
    className: "marker-icon",
    html: `<div class="marker-badge">${number}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -28],
  });
}

function buildRouteCoords(route) {
  const points = [
    route.origin,
    ...(route.waypoints || []),
    route.destination,
  ];
  return points.map((p) => `${p.lng},${p.lat}`).join(";");
}

function drawFallbackLine(route) {
  const points = [
    route.origin,
    ...(route.waypoints || []),
    route.destination,
  ];
  routeLayer = L.polyline(
    points.map((p) => [p.lat, p.lng]),
    {
      color: "#94a3b8",
      weight: 3,
      opacity: 0.7,
      dashArray: "6 8",
    }
  ).addTo(map);
}

function buildDefaultTimeline(day) {
  const stops = day.stops || [];
  const first = stops[0]?.name || "出发";
  const middle = stops[Math.floor(stops.length / 2)]?.name || "途中停留";
  const last = stops[stops.length - 1]?.name || "抵达";
  if (day.route?.type === "NONE") {
    return [
      { time: "09:30", title: "上午漫步", desc: first },
      { time: "14:00", title: "下午游览", desc: middle },
      { time: "19:00", title: "夜间体验", desc: last },
    ];
  }
  if (stops.length <= 2) {
    return [
      { time: "09:00", title: "出发", desc: first },
      { time: "17:00", title: "抵达", desc: last },
    ];
  }
  return [
    { time: "08:30", title: "出发", desc: first },
    { time: "12:30", title: "途中游玩", desc: middle },
    { time: "18:30", title: "抵达/入住", desc: last },
  ];
}

function buildDefaultGallery(day) {
  const stops = (day.stops || []).filter((stop) => !isAirportStop(stop?.name));
  const picks = stops.map((stop) => {
    const title = normalizePlaceName(stop.name);
    return {
      title,
      query: title,
    };
  });
  const fallback = {
    title: "今日行程",
    subtitle: "实景参考",
    query: normalizePlaceName(day.title),
  };
  const list = picks.length ? picks : [fallback];
  return list.map((item) => ({
    ...item,
    url: buildPlaceholderImage(item.title),
  }));
}

function buildDefaultDetails(day) {
  const timeline = buildDefaultTimeline(day);
  return {
    morning: [timeline[0]?.desc || "早餐后出发"],
    afternoon: [timeline[1]?.desc || "安排主景点游览"],
    evening: [timeline[2]?.desc || "晚餐与夜景"],
  };
}

function normalizePlaceName(name) {
  return name
    .replace(/\(.*?\)/g, "")
    .replace(/（.*?）/g, "")
    .replace(/\b[A-Z]{2,4}\b/g, "")
    .replace(/[·•]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

let __localImageLookup = null;

function buildImageQueryCandidates(raw) {
  const rawText = String(raw || "").trim();
  if (!rawText) return [];

  const base = normalizePlaceName(rawText);
  const cleaned = base
    .replace(/(出发|返回|回到|到达|抵达|离开|入住|退房|停车|取车|还车|补给)/g, "")
    .replace(/(周边|附近|一带|动线|线路|示意路线)/g, "")
    .replace(/\s+/g, " ")
    .trim();

  const candidates = [];
  [base, cleaned].forEach((s) => {
    if (s) candidates.push(s);
  });

  if (base.includes(" ")) {
    const parts = base.split(" ").map((p) => p.trim()).filter(Boolean);
    if (parts[0]) candidates.push(parts[0]);
    if (parts.length >= 2) {
      candidates.push(parts[parts.length - 1]);
      candidates.push(parts.slice(1).join(" "));
    }
  }

  if (base.includes("/")) {
    base.split("/").map((p) => p.trim()).filter(Boolean).forEach((p) => candidates.push(p));
  }

  // 去重（保持顺序）
  const out = [];
  const seen = new Set();
  candidates.forEach((s) => {
    const v = String(s || "").trim();
    if (!v) return;
    if (seen.has(v)) return;
    seen.add(v);
    out.push(v);
  });
  return out;
}

function buildLocalImageLookup(manifest) {
  const map = new Map();
  const entries = Object.entries(manifest || {});
  entries.forEach(([key, url]) => {
    if (!key || typeof url !== "string" || !url) return;
    const rawKey = String(key);
    const keyNoOptional = rawKey.replace(/^（可选）/g, "").trim();
    const variants = buildImageQueryCandidates(keyNoOptional);
    variants.forEach((v) => {
      const k = normalizePlaceName(v).toLowerCase();
      if (!k) return;
      if (!map.has(k)) map.set(k, url);
    });
  });
  return map;
}

function getLocalImageFromManifest(query) {
  const manifest = window.IMAGE_MANIFEST;
  if (!manifest) return null;
  if (!__localImageLookup) __localImageLookup = buildLocalImageLookup(manifest);
  const candidates = buildImageQueryCandidates(query);
  for (const c of candidates) {
    const k = normalizePlaceName(c).toLowerCase();
    const url = __localImageLookup.get(k);
    if (url) return url;
  }
  return null;
}

function isAirportStop(rawName) {
  if (!rawName) return false;
  const raw = String(rawName);
  const base = normalizePlaceName(raw);
  const rawLower = raw.toLowerCase();
  const baseLower = base.toLowerCase();
  if (base.includes("机场")) return true;
  if (rawLower.includes("airport") || rawLower.includes("aéroport") || rawLower.includes("aeroport"))
    return true;
  // 常见机场三字码（normalizePlaceName 会去掉大写码，所以用 raw 再判一次）
  if (/\b(cdg|nce|fco|mxp|lin)\b/i.test(raw)) return true;
  return baseLower.includes("airport") || baseLower.includes("aéroport") || baseLower.includes("aeroport");
}

function buildPlaceholderImage(text) {
  const safeText = text.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#dbeafe" />
          <stop offset="100%" stop-color="#fef9c3" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#g)" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="Arial" font-size="18" fill="#1f2937">${safeText}</text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function populateGalleryImages(gallery, token) {
  const cards = Array.from(dayGalleryEl.querySelectorAll(".gallery-card img"));
  gallery.forEach((item, index) => {
    fetchPlaceImage(item.query)
      .then((url) => {
        if (token !== currentGalleryToken || !url) return;
        cards[index].src = url;
      })
      .catch(() => null);
  });
}

function fetchPlaceImage(query) {
  const local = getLocalImageFromManifest(query);
  if (local) return Promise.resolve(local);
  return fetchBaikeImage(query)
    .then((url) => url || fetchWikiImage(query))
    .then((url) => url || buildUnsplashFallbackUrl(query))
    .catch(() => buildUnsplashFallbackUrl(query));
}

function fetchBaikeImage(query) {
  const api = "https://baike.baidu.com/api/openapi/BaikeLemmaCardApi";
  const candidates = buildBaikeQueryVariants(query);
  const tasks = candidates.map((keyword) => () => {
    const url = `${api}?scope=103&format=json&appid=379020&bk_key=${encodeURIComponent(
      keyword
    )}&bk_length=600`;
    return jsonpRequest(url, "callback").then((data) => {
      const image = extractBaikeImage(data);
      return normalizeImageUrl(image);
    });
  });
  return runSequential(tasks);
}

function extractBaikeImage(data) {
  if (!data) return null;
  if (data.image) {
    if (Array.isArray(data.image)) return data.image[0];
    if (typeof data.image === "string") return data.image;
  }
  if (data.images && Array.isArray(data.images) && data.images[0]) {
    return data.images[0]?.image || data.images[0];
  }
  return null;
}

function normalizeImageUrl(url) {
  if (!url) return null;
  if (url.startsWith("//")) return `https:${url}`;
  return url;
}

function buildBaikeQueryVariants(raw) {
  const base = normalizePlaceName(raw);
  const variants = new Set();
  if (base) variants.add(base);
  variants.add(base.replace("国际机场", "").trim());
  variants.add(base.replace("机场", "").trim());
  variants.add(base.replace("戴高乐", "戴高乐机场").trim());
  if (base.includes("巴黎")) variants.add("巴黎戴高乐机场");
  if (base.includes("尼斯")) variants.add("尼斯机场");
  if (base.includes("罗马") && base.includes("机场"))
    variants.add("罗马菲乌米奇诺机场");
  appendAliasVariants(variants, base, getBaikeAliasMap());
  return Array.from(variants).filter(Boolean);
}

function getBaikeAliasMap() {
  return {
    "蒙马特高地": ["蒙马特", "蒙马特山丘", "圣心大教堂", "蒙马特区"],
    "香榭丽舍大道": ["香榭丽舍", "香榭丽舍大街", "Champs-Élysées"],
    "凯旋门": ["巴黎凯旋门", "Arc de Triomphe"],
    "协和广场": ["协和广场", "Place de la Concorde"],
    "特罗卡德罗": ["特罗卡德罗广场", "Trocadéro", "特罗卡德罗宫"],
    "埃菲尔铁塔": ["铁塔", "Eiffel Tower", "Tour Eiffel"],
    "圣礼拜堂": ["巴黎圣礼拜堂", "Sainte-Chapelle"],
    "玛黑区": ["玛黑", "Le Marais"],
    "奥赛博物馆": ["奥赛", "Musée d'Orsay", "Musee d'Orsay"],
    "英国人漫步大道": ["英国人散步大道", "Promenade des Anglais"],
    "埃兹小镇": ["埃兹", "Èze", "Eze"],
    "摩纳哥蒙特卡洛": ["蒙特卡洛", "蒙特卡洛赌场", "Monte Carlo"],
    "巴黎戴高乐机场": ["查尔斯·戴高乐机场", "戴高乐机场"],
    "卢加诺": ["Lugano", "卢加诺湖", "Lago di Lugano"],
    "圣哥达山口": ["哥达山口", "Gotthard Pass", "St. Gotthard Pass", "圣哥达隧道"],
    "龙疆": ["Lungern", "龍疆", "Mülibachersträssli", "Mulibacherstrassli"],
    "布里恩茨": ["Brienz", "布里恩茨湖"],
    "因特拉肯": ["Interlaken", "因特拉肯镇"],
    "格林德尔瓦尔德": ["Grindelwald", "格林德瓦", "格林德瓦尔德"],
    "First": ["Grindelwald First", "First山", "菲尔斯特"],
    "劳特布伦嫩": ["Lauterbrunnen", "瀑布谷"],
    "施皮茨": ["Spiez", "施皮茨湖畔"],
    "Täsch": ["Tasch", "塔施", "Täsch"],
    "采尔马特": ["Zermatt", "策马特", "采尔马特小镇"],
    "米兰": ["Milano", "Milan"],
    "佛罗伦萨": ["Firenze", "Florence", "佛村"],
    "老桥": ["Ponte Vecchio", "佛罗伦萨老桥"],
    "米开朗琪罗广场": ["Piazzale Michelangelo", "米开朗基罗广场"],
    "圣母百花大教堂": ["Duomo", "Cattedrale di Santa Maria del Fiore"],
    "领主广场": ["Piazza della Signoria"],
    "乌菲兹": ["乌菲兹美术馆", "Uffizi", "Galleria degli Uffizi"],
    "锡耶纳": ["Siena"],
    "圣吉米尼亚诺": ["San Gimignano"],
    "比萨": ["Pisa", "比萨斜塔"],
    "卢卡": ["Lucca"],
    "斗兽场": ["Colosseo", "Colosseum"],
    "古罗马广场": ["Roman Forum", "Forum Romanum", "帕拉蒂尼山"],
    "威尼斯广场": ["Piazza Venezia"],
    "许愿池": ["特莱维喷泉", "Trevi Fountain"],
    "西班牙台阶": ["Spanish Steps"],
    "万神殿": ["Pantheon", "罗马万神殿"],
    "纳沃纳广场": ["Piazza Navona"],
    "鲜花广场": ["Campo de' Fiori", "坎波德菲奥里"],
    "特拉斯提弗列": ["Trastevere"],
    "菲乌米奇诺": ["罗马菲乌米奇诺机场", "FCO", "Fiumicino Airport"],
  };
}

function buildWikiQueryVariants(raw) {
  const base = normalizePlaceName(raw);
  const variants = new Set();
  if (base) variants.add(base);
  appendAliasVariants(variants, base, {
    "蒙马特高地": ["Montmartre", "Sacré-Cœur, Paris"],
    "香榭丽舍大道": ["Champs-Élysées", "Avenue des Champs-Élysées"],
    "凯旋门": ["Arc de Triomphe"],
    "协和广场": ["Place de la Concorde"],
    "特罗卡德罗": ["Trocadéro", "Place du Trocadéro"],
    "埃菲尔铁塔": ["Eiffel Tower", "Tour Eiffel"],
    "圣礼拜堂": ["Sainte-Chapelle"],
    "玛黑区": ["Le Marais"],
    "奥赛博物馆": ["Musée d'Orsay", "Musee d'Orsay"],
    "英国人漫步大道": ["Promenade des Anglais"],
    "埃兹小镇": ["Èze"],
    "摩纳哥蒙特卡洛": ["Monte Carlo", "Monte Carlo Casino"],
    "巴黎戴高乐机场": ["Charles de Gaulle Airport"],
    "卢加诺": ["Lugano", "Lake Lugano"],
    "圣哥达山口": ["Gotthard Pass", "St. Gotthard Pass"],
    "龙疆": ["Lungern"],
    "布里恩茨": ["Brienz"],
    "因特拉肯": ["Interlaken"],
    "格林德尔瓦尔德": ["Grindelwald"],
    "First": ["Grindelwald First"],
    "劳特布伦嫩": ["Lauterbrunnen"],
    "施皮茨": ["Spiez"],
    "Täsch": ["Tasch"],
    "采尔马特": ["Zermatt"],
    "米兰": ["Milan", "Milan Cathedral"],
    "佛罗伦萨": ["Florence", "Florence Cathedral"],
    "老桥": ["Ponte Vecchio"],
    "米开朗琪罗广场": ["Piazzale Michelangelo"],
    "圣母百花大教堂": ["Florence Cathedral", "Cattedrale di Santa Maria del Fiore"],
    "领主广场": ["Piazza della Signoria"],
    "乌菲兹": ["Uffizi Gallery", "Galleria degli Uffizi"],
    "锡耶纳": ["Siena"],
    "圣吉米尼亚诺": ["San Gimignano"],
    "比萨": ["Pisa", "Leaning Tower of Pisa"],
    "卢卡": ["Lucca"],
    "斗兽场": ["Colosseum", "Colosseo"],
    "古罗马广场": ["Roman Forum", "Forum Romanum", "Palatine Hill"],
    "威尼斯广场": ["Piazza Venezia"],
    "许愿池": ["Trevi Fountain"],
    "西班牙台阶": ["Spanish Steps"],
    "万神殿": ["Pantheon, Rome"],
    "纳沃纳广场": ["Piazza Navona"],
    "鲜花广场": ["Campo de' Fiori"],
    "特拉斯提弗列": ["Trastevere"],
    "菲乌米奇诺": ["Rome Fiumicino Airport", "Leonardo da Vinci–Fiumicino Airport"],
  });
  return Array.from(variants).filter(Boolean);
}

function appendAliasVariants(set, base, aliasMap) {
  if (!base) return;
  const matches = Object.keys(aliasMap).filter((key) => base.includes(key));
  matches.forEach((key) => {
    aliasMap[key].forEach((value) => set.add(value));
  });
}

function runSequential(tasks) {
  return tasks.reduce(
    (promise, task) =>
      promise.then((result) => (result ? result : task())),
    Promise.resolve(null)
  );
}

function jsonpRequest(url, callbackParam) {
  return new Promise((resolve) => {
    const callbackName = `jsonp_${Date.now()}_${Math.floor(
      Math.random() * 1000
    )}`;
    const script = document.createElement("script");
    const joiner = url.includes("?") ? "&" : "?";
    script.src = `${url}${joiner}${callbackParam}=${callbackName}`;

    window[callbackName] = (data) => {
      resolve(data);
      cleanup();
    };

    script.onerror = () => {
      resolve(null);
      cleanup();
    };

    function cleanup() {
      delete window[callbackName];
      script.remove();
    }

    document.body.appendChild(script);
  });
}

function fetchWikiImage(query) {
  const candidates = buildWikiQueryVariants(query);
  const tasks = candidates.map((title) => () =>
    fetchWikiImageFromLang(title, "zh").then(
      (url) => url || fetchWikiImageFromLang(title, "en")
    )
  );
  return runSequential(tasks).then((url) => url || null);
}

function fetchWikiImageFromLang(query, lang) {
  const api = `https://${lang}.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=pageimages&piprop=thumbnail&pithumbsize=500&titles=${encodeURIComponent(
    query
  )}`;
  return fetch(api)
    .then((response) => response.json())
    .then((data) => {
      const pages = data?.query?.pages;
      if (!pages) return null;
      const firstKey = Object.keys(pages)[0];
      const thumb = pages[firstKey]?.thumbnail?.source;
      return thumb || null;
    });
}

function buildUnsplashFallbackUrl(query) {
  const seed = Math.abs(hashString(query)).toString(16);
  const safeQuery = encodeURIComponent(query);
  return `https://source.unsplash.com/featured/400x300?${safeQuery}&sig=${seed}`;
}

function hashString(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash << 5) - hash + text.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

function buildSummary(day) {
  const base = day.summary || "";
  const tips = day.details?.tips?.length ? day.details.tips : [];
  if (!tips.length) return base;
  const tipSentence = `贴士：${tips.join("；")}`;
  return base ? `${base} ${tipSentence}` : tipSentence;
}

// 兼容两种加载方式：
// - 传统 <script src="./app.js">：DOMContentLoaded 之后执行
// - 动态注入 script（带 ?v= 防缓存）：此时 DOMContentLoaded 可能已触发
let __hasInited = false;
function safeInit() {
  if (__hasInited) return;
  __hasInited = true;
  initMap();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", safeInit);
} else {
  // DOM 已就绪，直接初始化
  safeInit();
}
