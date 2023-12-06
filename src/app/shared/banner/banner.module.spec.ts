import { BannerModule } from './banner.module';

describe('BannerModule', () => {
  const module: BannerModule = new BannerModule();

  it('should create', () => {
    expect(module).toBeTruthy();
  });
});
