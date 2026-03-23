import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Fungsi utilitas untuk menggabungkan class Tailwind secara dinamis.
 * Menyelesaikan konflik class (misal: p-4 dan p-8 akan otomatis diambil yang terakhir).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
