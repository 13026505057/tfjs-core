/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

export type Activation = {
  layersKey: string; webglBackendUnaryopKey: string; kernelKey: string;
};

export enum FusableActivation {
  RELU,
  LINEAR
}

export function createActivation(
    layersKey: string, webglBackendUnaryopKey?: string,
    kernelKey?: string): Activation {
  return {
    layersKey,
    webglBackendUnaryopKey: webglBackendUnaryopKey || layersKey.toUpperCase(),
    kernelKey: kernelKey || layersKey.toLowerCase()
  };
}

export const activationMap = new Map<FusableActivation, Activation>([
  [FusableActivation.RELU, createActivation('Relu', 'RELU', 'relu')],
  [FusableActivation.LINEAR, createActivation('linear')]
]);