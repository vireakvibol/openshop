import { Test, TestingModule } from '@nestjs/testing';
import { InitializeResolver } from './initialize.resolver';

describe('InitializeResolver', () => {
  let resolver: InitializeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InitializeResolver],
    }).compile();

    resolver = module.get<InitializeResolver>(InitializeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
