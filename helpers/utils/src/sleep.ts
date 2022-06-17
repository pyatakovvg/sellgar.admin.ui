
async function sleep(interval: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, interval *  1000));
}

export default sleep;
