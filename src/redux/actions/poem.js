/**
 * 此文件用于创建与诗词相关的action对象
 */
import {UPDTAE_POEMS} from '../constant'

export const updatePoem = data => ({type:UPDTAE_POEMS,data})