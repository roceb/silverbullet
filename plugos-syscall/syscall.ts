declare global {
  function syscall(name: string, ...args: any[]): Promise<any>;
}

export const syscall = self.syscall;
