//Write a singleton Logger class that logs messages to console.
class Logger {
  private static instance: Logger;

  constructor() {}
  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(messages: string): void {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} - ${messages}`);
  }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("hello anh em");
logger2.log("xin chao anh em");

console.log(logger1 === logger2);
