import { syscall } from "./syscall";

export type KV = {
  key: string;
  value: any;
};

export async function set(
  page: string,
  key: string,
  value: any
): Promise<void> {
  return syscall("index.set", page, key, value);
}

export async function batchSet(page: string, kvs: KV[]): Promise<void> {
  return syscall("index.batchSet", page, kvs);
}

export async function get(page: string, key: string): Promise<any> {
  return syscall("index.get", page, key);
}

export async function del(page: string, key: string): Promise<void> {
  return syscall("index.delete", page, key);
}

export async function scanPrefixForPage(
  page: string,
  prefix: string
): Promise<{ key: string; page: string; value: any }[]> {
  return syscall("index.scanPrefixForPage", page, prefix);
}

export async function scanPrefixGlobal(
  prefix: string
): Promise<{ key: string; page: string; value: any }[]> {
  return syscall("index.scanPrefixGlobal", prefix);
}

export async function clearPageIndexForPage(page: string): Promise<void> {
  return syscall("index.clearPageIndexForPage", page);
}

export async function deletePrefixForPage(
  page: string,
  prefix: string
): Promise<void> {
  return syscall("index.deletePrefixForPage", page, prefix);
}

export async function clearPageIndex(): Promise<void> {
  return syscall("index.clearPageIndex");
}
