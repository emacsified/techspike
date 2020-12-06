// Type definitions for meeting-cost-calc
// Project: Meeting Cost Calculator
// Definitions by: Ash McBride <ashmcbride.top>

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */

/*~ If this module has methods, declare them as functions like so.
 */
// export function myMethod(a: string): string;
// export function myOtherMethod(a: number): number;

// /*~ You can declare types that are available via importing the module */
// export interface someType {
//   name: string;
//   length: number;
//   extras?: string[];
// }

// /*~ You can declare properties of the module using const, let, or var */
// export const myField: number;

// /*~ If there are types, properties, or methods inside dotted names
//  *~ of the module, declare them inside a 'namespace'.
//  */
// export namespace subProp {
//   /*~ For example, given this definition, someone could write:
//    *~   import { subProp } from 'yourModule';
//    *~   subProp.foo();
//    *~ or
//    *~   import * as yourMod from 'yourModule';
//    *~   yourMod.subProp.foo();
//    */
//   export function foo(): void;
// }
export default interface Staff {
  band: number;
  salary: number | null;
  timeInMeeting: string;
}