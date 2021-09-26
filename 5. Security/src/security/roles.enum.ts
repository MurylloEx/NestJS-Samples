export const Permissions = {
  Client: 'client',
  Seller: 'seller',
  Manager: 'manager'
}

export const PermissionValues = Object.values(Permissions);

export function bitsToRoles(permissions: number): string[] {
  let keys: number[] = [];

  PermissionValues.map((v, k) => {

    if (!!(permissions & 2**k))
      keys.push(k);

  });

  return keys.map(v => PermissionValues[v]);
}

export function rolesToBits(permissions: string[]): number {
  return permissions.map((v, i) => {

    let k = PermissionValues.indexOf(v.toLocaleLowerCase());

    return k != -1 ? 2**k : 0;

  }).reduce((a, b) => a + b);
}
