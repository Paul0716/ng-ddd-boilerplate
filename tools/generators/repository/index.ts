import { strings } from '@angular-devkit/core';
import {
  apply,
  applyTemplates,
  MergeStrategy,
  mergeWith,
  move,
  Rule,
  Tree,
  url,
} from '@angular-devkit/schematics';

export default function (schema: any): Rule {
  return (tree: Tree) => {
    const templateSource = apply(url('./files'), [
      applyTemplates({
        ...strings,
        ...schema,
      }),
      move(schema.path),
    ]);
    return mergeWith(templateSource, MergeStrategy.Default);
  };
}
