/**
 * 应用常量定义
 */

// ==================== 时间相关 ====================
export const TIME = {
  /** 轮询间隔（毫秒） */
  POLLING_INTERVAL: 800,
  /** 状态刷新间隔（毫秒） */
  STATUS_REFRESH_INTERVAL: 3000,
  /** 日志刷新延迟（毫秒） */
  LOG_REFRESH_DELAY: 1500,
  /** 成功提示显示时长（毫秒） */
  SUCCESS_MESSAGE_DURATION: 2000,
  /** 错误提示显示时长（毫秒） */
  ERROR_MESSAGE_DURATION: 3000,
} as const;

// ==================== 限制相关 ====================
export const LIMITS = {
  /** 最大日志行数 */
  MAX_LOG_LINES: 5000,
  /** 默认分页大小 */
  DEFAULT_PAGE_SIZE: 100,
  /** 玩家名最大长度 */
  MAX_PLAYER_NAME_LENGTH: 16,
  /** 服务器名最大长度 */
  MAX_SERVER_NAME_LENGTH: 50,
} as const;

// ==================== 默认值 ====================
export const DEFAULTS = {
  /** 默认控制台字体大小 */
  CONSOLE_FONT_SIZE: 13,
  /** 默认最大内存（MB） */
  DEFAULT_MAX_MEMORY: 2048,
  /** 默认最小内存（MB） */
  DEFAULT_MIN_MEMORY: 1024,
  /** 默认服务器端口 */
  DEFAULT_SERVER_PORT: 25565,
} as const;

// ==================== 服务器状态 ====================
export const SERVER_STATUS = {
  STOPPED: "Stopped",
  STARTING: "Starting",
  RUNNING: "Running",
  STOPPING: "Stopping",
  ERROR: "Error",
} as const;

export const SERVER_STATUS_TEXT = {
  [SERVER_STATUS.STOPPED]: "已停止",
  [SERVER_STATUS.STARTING]: "启动中",
  [SERVER_STATUS.RUNNING]: "运行中",
  [SERVER_STATUS.STOPPING]: "停止中",
  [SERVER_STATUS.ERROR]: "错误",
} as const;

// ==================== 日志前缀 ====================
export const LOG_PREFIX = {
  SEA_LANTERN: "[Sea Lantern]",
  ERROR: "[ERROR]",
  WARN: "[WARN]",
  STDERR: "[STDERR]",
} as const;

// ==================== 消息模板 ====================
export const MESSAGES = {
  // 成功消息
  SUCCESS: {
    SERVER_STARTED: "服务器已启动",
    SERVER_STOPPED: "服务器已停止",
    COMMAND_SENT: "命令已发送",
    WHITELIST_ADDED: "已添加到白名单",
    WHITELIST_REMOVED: "已从白名单移除",
    PLAYER_BANNED: "玩家已被封禁",
    PLAYER_UNBANNED: "玩家已被解封",
    OP_ADDED: "已添加管理员权限",
    OP_REMOVED: "已移除管理员权限",
    PLAYER_KICKED: "玩家已被踢出",
  },
  // 错误消息
  ERROR: {
    SERVER_NOT_RUNNING: "服务器未运行",
    SERVER_ALREADY_RUNNING: "服务器已在运行中",
    SERVER_NOT_FOUND: "未找到服务器",
    INVALID_PLAYER_NAME: "无效的玩家名称",
    NETWORK_ERROR: "网络错误",
    UNKNOWN_ERROR: "未知错误",
  },
  // 提示消息
  HINT: {
    SELECT_SERVER: "请选择一个服务器",
    SERVER_REQUIRED: "需要服务器运行中才能操作",
    ENTER_PLAYER_NAME: "请输入玩家名",
  },
} as const;

// ==================== 正则表达式 ====================
export const REGEX = {
  /** Minecraft玩家名（3-16个字母数字下划线） */
  PLAYER_NAME: /^[a-zA-Z0-9_]{3,16}$/,
  /** UUID格式 */
  UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  /** IP地址 */
  IP_ADDRESS: /^(\d{1,3}\.){3}\d{1,3}$/,
  /** 端口号 */
  PORT: /^([1-9]\d{0,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/,
} as const;

// ==================== 键盘快捷键 ====================
export const KEYBOARD = {
  ENTER: "Enter",
  ESCAPE: "Escape",
  TAB: "Tab",
  ARROW_UP: "ArrowUp",
  ARROW_DOWN: "ArrowDown",
  CTRL_C: "Control+C",
  CTRL_V: "Control+V",
} as const;
