import { tauriInvoke } from './tauri';

export interface UpdateInfo {
  has_update: boolean;
  latest_version: string;
  current_version: string;
  download_url?: string;
  release_notes?: string;
  published_at?: string;
}

/**
 * 检查更新（通过后端命令调用 Gitee API）
 */
export async function checkUpdate(): Promise<UpdateInfo | null> {
  try {
    // 调用后端命令检查更新
    const result = await tauriInvoke<UpdateInfo>('check_update', {
      owner: 'fps_z',
      repo: 'SeaLantern'
    });

    return result;
  } catch (error) {
    console.error('检查更新失败:', error);
    throw error;
  }
}
