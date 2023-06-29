import { LoadStrategy } from '@mikro-orm/core';
import { Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection'; 
// import { defineConfig } from '@mikro-orm/mysql';
// import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
// import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
// import { Migrator } from '@mikro-orm/migrations';
// import { EntityGenerator } from '@mikro-orm/entity-generator';
// import { SeedManager } from '@mikro-orm/seeder';


const config: Options = {
    
    type: 'postgresql',
    host: 'localhost',
    port: 5432,
    user: 'myuser',
    password: 'admin123',
    dbName: 'mydatabase',
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    metadataProvider: TsMorphMetadataProvider,
}

export default config;
// export default defineConfig({
//   host: 'localhost',
//   port: 3307,
//   user: 'root',
//   password: '',
//   dbName: 'nestjsrealworld',
//   entities: ['dist/**/*.entity.js'],
//   entitiesTs: ['src/**/*.entity.ts'],
//   debug: true,
//   loadStrategy: LoadStrategy.JOINED,
// //   metadataProvider: TsMorphMetadataProvider,
//   registerRequestContext: false,
// //   extensions: [Migrator, EntityGenerator, SeedManager],
// });