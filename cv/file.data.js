import { Buffer } from 'buffer';

const CV_RELEASE_VERSION = 4;

export default {
  async load() {
    const cvUrl = `https://github.com/lanPN85/my-cv/releases/download/release-${CV_RELEASE_VERSION}/Phan_Ngoc_Lan_CV.pdf`;

    const response = await fetch(cvUrl, {
      redirect: 'follow',
    });
    const buffer = Buffer.from(await response.arrayBuffer());

    return {
      base64Content: buffer.toString('base64')
    }
  }
}
