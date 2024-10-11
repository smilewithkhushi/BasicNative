/**
 * Put together a random string in UUIDv4 format {xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}
 *
 * @return {String} uuidv4
 */
export declare function uniqueID(): string;
/**
 * Utility for deep cloning an object. Object.assign() only does a shallow copy.
 *
 * @param {Object} obj - object to be cloned
 * @return {Object} cloned obj
 */
export declare function deepClone<T>(obj: T): T;
/**
 * Checks whether an SDP type is valid or not.
 *
 * @param type SDP type to check.
 * @returns Whether the SDP type is valid or not.
 */
export declare function isSdpTypeValid(type: string): boolean;
/**
 * Normalize options passed to createOffer().
 *
 * @param options - user supplied options
 * @return Normalized options
 */
export declare function normalizeOfferOptions(options?: object): object;
/**
 * Normalize the given constraints in something we can work with.
 */
export declare function normalizeConstraints(constraints: any): any;
