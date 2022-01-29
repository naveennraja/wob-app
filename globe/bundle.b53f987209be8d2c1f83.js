(() => {
  "use strict";
  const t = 100,
      e = 1e3,
      n = 1001,
      i = 1002,
      r = 1003,
      s = 1004,
      o = 1005,
      a = 1006,
      c = 1008,
      l = 1012,
      h = 1014,
      u = 1015,
      d = 1016,
      p = 1020,
      f = 1022,
      m = 1023,
      g = 1026,
      v = 1027,
      y = 2300,
      x = 2301,
      _ = 2302,
      b = 2400,
      w = 2401,
      M = 2402,
      S = 3e3,
      T = 3001,
      E = 7680,
      A = 35044,
      L = 35048,
      R = "300 es";

  function P() {}
  Object.assign(P.prototype, {
      addEventListener: function(t, e) {
          void 0 === this._listeners && (this._listeners = {});
          const n = this._listeners;
          void 0 === n[t] && (n[t] = []), -1 === n[t].indexOf(e) && n[t].push(e)
      },
      hasEventListener: function(t, e) {
          if (void 0 === this._listeners) return !1;
          const n = this._listeners;
          return void 0 !== n[t] && -1 !== n[t].indexOf(e)
      },
      removeEventListener: function(t, e) {
          if (void 0 === this._listeners) return;
          const n = this._listeners[t];
          if (void 0 !== n) {
              const t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
          }
      },
      dispatchEvent: function(t) {
          if (void 0 === this._listeners) return;
          const e = this._listeners[t.type];
          if (void 0 !== e) {
              t.target = this;
              const n = e.slice(0);
              for (let e = 0, i = n.length; e < i; e++) n[e].call(this, t)
          }
      }
  });
  const C = [];
  for (let t = 0; t < 256; t++) C[t] = (t < 16 ? "0" : "") + t.toString(16);
  let N = 1234567;
  const O = {
      DEG2RAD: Math.PI / 180,
      RAD2DEG: 180 / Math.PI,
      generateUUID: function() {
          const t = 4294967295 * Math.random() | 0,
              e = 4294967295 * Math.random() | 0,
              n = 4294967295 * Math.random() | 0,
              i = 4294967295 * Math.random() | 0;
          return (C[255 & t] + C[t >> 8 & 255] + C[t >> 16 & 255] + C[t >> 24 & 255] + "-" + C[255 & e] + C[e >> 8 & 255] + "-" + C[e >> 16 & 15 | 64] + C[e >> 24 & 255] + "-" + C[63 & n | 128] + C[n >> 8 & 255] + "-" + C[n >> 16 & 255] + C[n >> 24 & 255] + C[255 & i] + C[i >> 8 & 255] + C[i >> 16 & 255] + C[i >> 24 & 255]).toUpperCase()
      },
      clamp: function(t, e, n) {
          return Math.max(e, Math.min(n, t))
      },
      euclideanModulo: function(t, e) {
          return (t % e + e) % e
      },
      mapLinear: function(t, e, n, i, r) {
          return i + (t - e) * (r - i) / (n - e)
      },
      lerp: function(t, e, n) {
          return (1 - n) * t + n * e
      },
      smoothstep: function(t, e, n) {
          return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * (3 - 2 * t)
      },
      smootherstep: function(t, e, n) {
          return t <= e ? 0 : t >= n ? 1 : (t = (t - e) / (n - e)) * t * t * (t * (6 * t - 15) + 10)
      },
      randInt: function(t, e) {
          return t + Math.floor(Math.random() * (e - t + 1))
      },
      randFloat: function(t, e) {
          return t + Math.random() * (e - t)
      },
      randFloatSpread: function(t) {
          return t * (.5 - Math.random())
      },
      seededRandom: function(t) {
          return void 0 !== t && (N = t % 2147483647), N = 16807 * N % 2147483647, (N - 1) / 2147483646
      },
      degToRad: function(t) {
          return t * O.DEG2RAD
      },
      radToDeg: function(t) {
          return t * O.RAD2DEG
      },
      isPowerOfTwo: function(t) {
          return 0 == (t & t - 1) && 0 !== t
      },
      ceilPowerOfTwo: function(t) {
          return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2))
      },
      floorPowerOfTwo: function(t) {
          return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
      },
      setQuaternionFromProperEuler: function(t, e, n, i, r) {
          const s = Math.cos,
              o = Math.sin,
              a = s(n / 2),
              c = o(n / 2),
              l = s((e + i) / 2),
              h = o((e + i) / 2),
              u = s((e - i) / 2),
              d = o((e - i) / 2),
              p = s((i - e) / 2),
              f = o((i - e) / 2);
          switch (r) {
              case "XYX":
                  t.set(a * h, c * u, c * d, a * l);
                  break;
              case "YZY":
                  t.set(c * d, a * h, c * u, a * l);
                  break;
              case "ZXZ":
                  t.set(c * u, c * d, a * h, a * l);
                  break;
              case "XZX":
                  t.set(a * h, c * f, c * p, a * l);
                  break;
              case "YXY":
                  t.set(c * p, a * h, c * f, a * l);
                  break;
              case "ZYZ":
                  t.set(c * f, c * p, a * h, a * l);
                  break;
              default:
                  console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r)
          }
      }
  };
  class I {
      constructor(t = 0, e = 0) {
          Object.defineProperty(this, "isVector2", {
              value: !0
          }), this.x = t, this.y = e
      }
      get width() {
          return this.x
      }
      set width(t) {
          this.x = t
      }
      get height() {
          return this.y
      }
      set height(t) {
          this.y = t
      }
      set(t, e) {
          return this.x = t, this.y = e, this
      }
      setScalar(t) {
          return this.x = t, this.y = t, this
      }
      setX(t) {
          return this.x = t, this
      }
      setY(t) {
          return this.y = t, this
      }
      setComponent(t, e) {
          switch (t) {
              case 0:
                  this.x = e;
                  break;
              case 1:
                  this.y = e;
                  break;
              default:
                  throw new Error("index is out of range: " + t)
          }
          return this
      }
      getComponent(t) {
          switch (t) {
              case 0:
                  return this.x;
              case 1:
                  return this.y;
              default:
                  throw new Error("index is out of range: " + t)
          }
      }
      clone() {
          return new this.constructor(this.x, this.y)
      }
      copy(t) {
          return this.x = t.x, this.y = t.y, this
      }
      add(t, e) {
          return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
      }
      addScalar(t) {
          return this.x += t, this.y += t, this
      }
      addVectors(t, e) {
          return this.x = t.x + e.x, this.y = t.y + e.y, this
      }
      addScaledVector(t, e) {
          return this.x += t.x * e, this.y += t.y * e, this
      }
      sub(t, e) {
          return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
      }
      subScalar(t) {
          return this.x -= t, this.y -= t, this
      }
      subVectors(t, e) {
          return this.x = t.x - e.x, this.y = t.y - e.y, this
      }
      multiply(t) {
          return this.x *= t.x, this.y *= t.y, this
      }
      multiplyScalar(t) {
          return this.x *= t, this.y *= t, this
      }
      divide(t) {
          return this.x /= t.x, this.y /= t.y, this
      }
      divideScalar(t) {
          return this.multiplyScalar(1 / t)
      }
      applyMatrix3(t) {
          const e = this.x,
              n = this.y,
              i = t.elements;
          return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this
      }
      min(t) {
          return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
      }
      max(t) {
          return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
      }
      clamp(t, e) {
          return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
      }
      clampScalar(t, e) {
          return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this
      }
      clampLength(t, e) {
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
      }
      floor() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
      }
      ceil() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
      }
      round() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this
      }
      roundToZero() {
          return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
      }
      negate() {
          return this.x = -this.x, this.y = -this.y, this
      }
      dot(t) {
          return this.x * t.x + this.y * t.y
      }
      cross(t) {
          return this.x * t.y - this.y * t.x
      }
      lengthSq() {
          return this.x * this.x + this.y * this.y
      }
      length() {
          return Math.sqrt(this.x * this.x + this.y * this.y)
      }
      manhattanLength() {
          return Math.abs(this.x) + Math.abs(this.y)
      }
      normalize() {
          return this.divideScalar(this.length() || 1)
      }
      angle() {
          return Math.atan2(-this.y, -this.x) + Math.PI
      }
      distanceTo(t) {
          return Math.sqrt(this.distanceToSquared(t))
      }
      distanceToSquared(t) {
          const e = this.x - t.x,
              n = this.y - t.y;
          return e * e + n * n
      }
      manhattanDistanceTo(t) {
          return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
      }
      setLength(t) {
          return this.normalize().multiplyScalar(t)
      }
      lerp(t, e) {
          return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
      }
      lerpVectors(t, e, n) {
          return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this
      }
      equals(t) {
          return t.x === this.x && t.y === this.y
      }
      fromArray(t, e = 0) {
          return this.x = t[e], this.y = t[e + 1], this
      }
      toArray(t = [], e = 0) {
          return t[e] = this.x, t[e + 1] = this.y, t
      }
      fromBufferAttribute(t, e, n) {
          return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this
      }
      rotateAround(t, e) {
          const n = Math.cos(e),
              i = Math.sin(e),
              r = this.x - t.x,
              s = this.y - t.y;
          return this.x = r * n - s * i + t.x, this.y = r * i + s * n + t.y, this
      }
      random() {
          return this.x = Math.random(), this.y = Math.random(), this
      }
  }
  class D {
      constructor() {
          Object.defineProperty(this, "isMatrix3", {
              value: !0
          }), this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
      }
      set(t, e, n, i, r, s, o, a, c) {
          const l = this.elements;
          return l[0] = t, l[1] = i, l[2] = o, l[3] = e, l[4] = r, l[5] = a, l[6] = n, l[7] = s, l[8] = c, this
      }
      identity() {
          return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
      }
      clone() {
          return (new this.constructor).fromArray(this.elements)
      }
      copy(t) {
          const e = this.elements,
              n = t.elements;
          return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this
      }
      extractBasis(t, e, n) {
          return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
      }
      setFromMatrix4(t) {
          const e = t.elements;
          return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
      }
      multiply(t) {
          return this.multiplyMatrices(this, t)
      }
      premultiply(t) {
          return this.multiplyMatrices(t, this)
      }
      multiplyMatrices(t, e) {
          const n = t.elements,
              i = e.elements,
              r = this.elements,
              s = n[0],
              o = n[3],
              a = n[6],
              c = n[1],
              l = n[4],
              h = n[7],
              u = n[2],
              d = n[5],
              p = n[8],
              f = i[0],
              m = i[3],
              g = i[6],
              v = i[1],
              y = i[4],
              x = i[7],
              _ = i[2],
              b = i[5],
              w = i[8];
          return r[0] = s * f + o * v + a * _, r[3] = s * m + o * y + a * b, r[6] = s * g + o * x + a * w, r[1] = c * f + l * v + h * _, r[4] = c * m + l * y + h * b, r[7] = c * g + l * x + h * w, r[2] = u * f + d * v + p * _, r[5] = u * m + d * y + p * b, r[8] = u * g + d * x + p * w, this
      }
      multiplyScalar(t) {
          const e = this.elements;
          return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
      }
      determinant() {
          const t = this.elements,
              e = t[0],
              n = t[1],
              i = t[2],
              r = t[3],
              s = t[4],
              o = t[5],
              a = t[6],
              c = t[7],
              l = t[8];
          return e * s * l - e * o * c - n * r * l + n * o * a + i * r * c - i * s * a
      }
      invert() {
          const t = this.elements,
              e = t[0],
              n = t[1],
              i = t[2],
              r = t[3],
              s = t[4],
              o = t[5],
              a = t[6],
              c = t[7],
              l = t[8],
              h = l * s - o * c,
              u = o * a - l * r,
              d = c * r - s * a,
              p = e * h + n * u + i * d;
          if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
          const f = 1 / p;
          return t[0] = h * f, t[1] = (i * c - l * n) * f, t[2] = (o * n - i * s) * f, t[3] = u * f, t[4] = (l * e - i * a) * f, t[5] = (i * r - o * e) * f, t[6] = d * f, t[7] = (n * a - c * e) * f, t[8] = (s * e - n * r) * f, this
      }
      transpose() {
          let t;
          const e = this.elements;
          return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
      }
      getNormalMatrix(t) {
          return this.setFromMatrix4(t).copy(this).invert().transpose()
      }
      transposeIntoArray(t) {
          const e = this.elements;
          return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
      }
      setUvTransform(t, e, n, i, r, s, o) {
          const a = Math.cos(r),
              c = Math.sin(r);
          return this.set(n * a, n * c, -n * (a * s + c * o) + s + t, -i * c, i * a, -i * (-c * s + a * o) + o + e, 0, 0, 1), this
      }
      scale(t, e) {
          const n = this.elements;
          return n[0] *= t, n[3] *= t, n[6] *= t, n[1] *= e, n[4] *= e, n[7] *= e, this
      }
      rotate(t) {
          const e = Math.cos(t),
              n = Math.sin(t),
              i = this.elements,
              r = i[0],
              s = i[3],
              o = i[6],
              a = i[1],
              c = i[4],
              l = i[7];
          return i[0] = e * r + n * a, i[3] = e * s + n * c, i[6] = e * o + n * l, i[1] = -n * r + e * a, i[4] = -n * s + e * c, i[7] = -n * o + e * l, this
      }
      translate(t, e) {
          const n = this.elements;
          return n[0] += t * n[2], n[3] += t * n[5], n[6] += t * n[8], n[1] += e * n[2], n[4] += e * n[5], n[7] += e * n[8], this
      }
      equals(t) {
          const e = this.elements,
              n = t.elements;
          for (let t = 0; t < 9; t++)
              if (e[t] !== n[t]) return !1;
          return !0
      }
      fromArray(t, e = 0) {
          for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
          return this
      }
      toArray(t = [], e = 0) {
          const n = this.elements;
          return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t
      }
  }
  let U;
  const F = {
      getDataURL: function(t) {
          if (/^data:/i.test(t.src)) return t.src;
          if ("undefined" == typeof HTMLCanvasElement) return t.src;
          let e;
          if (t instanceof HTMLCanvasElement) e = t;
          else {
              void 0 === U && (U = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")), U.width = t.width, U.height = t.height;
              const n = U.getContext("2d");
              t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = U
          }
          return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
      }
  };
  let H = 0;

  function z(t = z.DEFAULT_IMAGE, e = z.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, s = 1008, o = 1023, a = 1009, c = 1, l = 3e3) {
      Object.defineProperty(this, "id", {
          value: H++
      }), this.uuid = O.generateUUID(), this.name = "", this.image = t, this.mipmaps = [], this.mapping = e, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = s, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = a, this.offset = new I(0, 0), this.repeat = new I(1, 1), this.center = new I(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new D, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = l, this.version = 0, this.onUpdate = null
  }

  function B(t) {
      return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? F.getDataURL(t) : t.data ? {
          data: Array.prototype.slice.call(t.data),
          width: t.width,
          height: t.height,
          type: t.data.constructor.name
      } : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
  }
  z.DEFAULT_IMAGE = void 0, z.DEFAULT_MAPPING = 300, z.prototype = Object.assign(Object.create(P.prototype), {
      constructor: z,
      isTexture: !0,
      updateMatrix: function() {
          this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
      },
      clone: function() {
          return (new this.constructor).copy(this)
      },
      copy: function(t) {
          return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
      },
      toJSON: function(t) {
          const e = void 0 === t || "string" == typeof t;
          if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
          const n = {
              metadata: {
                  version: 4.5,
                  type: "Texture",
                  generator: "Texture.toJSON"
              },
              uuid: this.uuid,
              name: this.name,
              mapping: this.mapping,
              repeat: [this.repeat.x, this.repeat.y],
              offset: [this.offset.x, this.offset.y],
              center: [this.center.x, this.center.y],
              rotation: this.rotation,
              wrap: [this.wrapS, this.wrapT],
              format: this.format,
              type: this.type,
              encoding: this.encoding,
              minFilter: this.minFilter,
              magFilter: this.magFilter,
              anisotropy: this.anisotropy,
              flipY: this.flipY,
              premultiplyAlpha: this.premultiplyAlpha,
              unpackAlignment: this.unpackAlignment
          };
          if (void 0 !== this.image) {
              const i = this.image;
              if (void 0 === i.uuid && (i.uuid = O.generateUUID()), !e && void 0 === t.images[i.uuid]) {
                  let e;
                  if (Array.isArray(i)) {
                      e = [];
                      for (let t = 0, n = i.length; t < n; t++) i[t].isDataTexture ? e.push(B(i[t].image)) : e.push(B(i[t]))
                  } else e = B(i);
                  t.images[i.uuid] = {
                      uuid: i.uuid,
                      url: e
                  }
              }
              n.image = i.uuid
          }
          return e || (t.textures[this.uuid] = n), n
      },
      dispose: function() {
          this.dispatchEvent({
              type: "dispose"
          })
      },
      transformUv: function(t) {
          if (300 !== this.mapping) return t;
          if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
              case e:
                  t.x = t.x - Math.floor(t.x);
                  break;
              case n:
                  t.x = t.x < 0 ? 0 : 1;
                  break;
              case i:
                  1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
          }
          if (t.y < 0 || t.y > 1) switch (this.wrapT) {
              case e:
                  t.y = t.y - Math.floor(t.y);
                  break;
              case n:
                  t.y = t.y < 0 ? 0 : 1;
                  break;
              case i:
                  1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
          }
          return this.flipY && (t.y = 1 - t.y), t
      }
  }), Object.defineProperty(z.prototype, "needsUpdate", {
      set: function(t) {
          !0 === t && this.version++
      }
  });
  class G {
      constructor(t = 0, e = 0, n = 0, i = 1) {
          Object.defineProperty(this, "isVector4", {
              value: !0
          }), this.x = t, this.y = e, this.z = n, this.w = i
      }
      get width() {
          return this.z
      }
      set width(t) {
          this.z = t
      }
      get height() {
          return this.w
      }
      set height(t) {
          this.w = t
      }
      set(t, e, n, i) {
          return this.x = t, this.y = e, this.z = n, this.w = i, this
      }
      setScalar(t) {
          return this.x = t, this.y = t, this.z = t, this.w = t, this
      }
      setX(t) {
          return this.x = t, this
      }
      setY(t) {
          return this.y = t, this
      }
      setZ(t) {
          return this.z = t, this
      }
      setW(t) {
          return this.w = t, this
      }
      setComponent(t, e) {
          switch (t) {
              case 0:
                  this.x = e;
                  break;
              case 1:
                  this.y = e;
                  break;
              case 2:
                  this.z = e;
                  break;
              case 3:
                  this.w = e;
                  break;
              default:
                  throw new Error("index is out of range: " + t)
          }
          return this
      }
      getComponent(t) {
          switch (t) {
              case 0:
                  return this.x;
              case 1:
                  return this.y;
              case 2:
                  return this.z;
              case 3:
                  return this.w;
              default:
                  throw new Error("index is out of range: " + t)
          }
      }
      clone() {
          return new this.constructor(this.x, this.y, this.z, this.w)
      }
      copy(t) {
          return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
      }
      add(t, e) {
          return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
      }
      addScalar(t) {
          return this.x += t, this.y += t, this.z += t, this.w += t, this
      }
      addVectors(t, e) {
          return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
      }
      addScaledVector(t, e) {
          return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
      }
      sub(t, e) {
          return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
      }
      subScalar(t) {
          return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
      }
      subVectors(t, e) {
          return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
      }
      multiplyScalar(t) {
          return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
      }
      applyMatrix4(t) {
          const e = this.x,
              n = this.y,
              i = this.z,
              r = this.w,
              s = t.elements;
          return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r, this
      }
      divideScalar(t) {
          return this.multiplyScalar(1 / t)
      }
      setAxisAngleFromQuaternion(t) {
          this.w = 2 * Math.acos(t.w);
          const e = Math.sqrt(1 - t.w * t.w);
          return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
      }
      setAxisAngleFromRotationMatrix(t) {
          let e, n, i, r;
          const s = .01,
              o = .1,
              a = t.elements,
              c = a[0],
              l = a[4],
              h = a[8],
              u = a[1],
              d = a[5],
              p = a[9],
              f = a[2],
              m = a[6],
              g = a[10];
          if (Math.abs(l - u) < s && Math.abs(h - f) < s && Math.abs(p - m) < s) {
              if (Math.abs(l + u) < o && Math.abs(h + f) < o && Math.abs(p + m) < o && Math.abs(c + d + g - 3) < o) return this.set(1, 0, 0, 0), this;
              e = Math.PI;
              const t = (c + 1) / 2,
                  a = (d + 1) / 2,
                  v = (g + 1) / 2,
                  y = (l + u) / 4,
                  x = (h + f) / 4,
                  _ = (p + m) / 4;
              return t > a && t > v ? t < s ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(t), i = y / n, r = x / n) : a > v ? a < s ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(a), n = y / i, r = _ / i) : v < s ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(v), n = x / r, i = _ / r), this.set(n, i, r, e), this
          }
          let v = Math.sqrt((m - p) * (m - p) + (h - f) * (h - f) + (u - l) * (u - l));
          return Math.abs(v) < .001 && (v = 1), this.x = (m - p) / v, this.y = (h - f) / v, this.z = (u - l) / v, this.w = Math.acos((c + d + g - 1) / 2), this
      }
      min(t) {
          return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
      }
      max(t) {
          return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
      }
      clamp(t, e) {
          return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
      }
      clampScalar(t, e) {
          return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this
      }
      clampLength(t, e) {
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
      }
      floor() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
      }
      ceil() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
      }
      round() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
      }
      roundToZero() {
          return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
      }
      negate() {
          return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
      }
      dot(t) {
          return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
      }
      lengthSq() {
          return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
      }
      length() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
      }
      manhattanLength() {
          return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
      }
      normalize() {
          return this.divideScalar(this.length() || 1)
      }
      setLength(t) {
          return this.normalize().multiplyScalar(t)
      }
      lerp(t, e) {
          return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
      }
      lerpVectors(t, e, n) {
          return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this
      }
      equals(t) {
          return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
      }
      fromArray(t, e = 0) {
          return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
      }
      toArray(t = [], e = 0) {
          return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
      }
      fromBufferAttribute(t, e, n) {
          return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
      }
      random() {
          return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
      }
  }

  function k(t, e, n) {
      this.width = t, this.height = e, this.scissor = new G(0, 0, t, e), this.scissorTest = !1, this.viewport = new G(0, 0, t, e), n = n || {}, this.texture = new z(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding), this.texture.image = {}, this.texture.image.width = t, this.texture.image.height = e, this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps, this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : a, this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer, this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer, this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
  }

  function V(t, e, n) {
      k.call(this, t, e, n), this.samples = 4
  }
  k.prototype = Object.assign(Object.create(P.prototype), {
      constructor: k,
      isWebGLRenderTarget: !0,
      setSize: function(t, e) {
          this.width === t && this.height === e || (this.width = t, this.height = e, this.texture.image.width = t, this.texture.image.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
      },
      clone: function() {
          return (new this.constructor).copy(this)
      },
      copy: function(t) {
          return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
      },
      dispose: function() {
          this.dispatchEvent({
              type: "dispose"
          })
      }
  }), V.prototype = Object.assign(Object.create(k.prototype), {
      constructor: V,
      isWebGLMultisampleRenderTarget: !0,
      copy: function(t) {
          return k.prototype.copy.call(this, t), this.samples = t.samples, this
      }
  });
  class j {
      constructor(t = 0, e = 0, n = 0, i = 1) {
          Object.defineProperty(this, "isQuaternion", {
              value: !0
          }), this._x = t, this._y = e, this._z = n, this._w = i
      }
      static slerp(t, e, n, i) {
          return n.copy(t).slerp(e, i)
      }
      static slerpFlat(t, e, n, i, r, s, o) {
          let a = n[i + 0],
              c = n[i + 1],
              l = n[i + 2],
              h = n[i + 3];
          const u = r[s + 0],
              d = r[s + 1],
              p = r[s + 2],
              f = r[s + 3];
          if (h !== f || a !== u || c !== d || l !== p) {
              let t = 1 - o;
              const e = a * u + c * d + l * p + h * f,
                  n = e >= 0 ? 1 : -1,
                  i = 1 - e * e;
              if (i > Number.EPSILON) {
                  const r = Math.sqrt(i),
                      s = Math.atan2(r, e * n);
                  t = Math.sin(t * s) / r, o = Math.sin(o * s) / r
              }
              const r = o * n;
              if (a = a * t + u * r, c = c * t + d * r, l = l * t + p * r, h = h * t + f * r, t === 1 - o) {
                  const t = 1 / Math.sqrt(a * a + c * c + l * l + h * h);
                  a *= t, c *= t, l *= t, h *= t
              }
          }
          t[e] = a, t[e + 1] = c, t[e + 2] = l, t[e + 3] = h
      }
      static multiplyQuaternionsFlat(t, e, n, i, r, s) {
          const o = n[i],
              a = n[i + 1],
              c = n[i + 2],
              l = n[i + 3],
              h = r[s],
              u = r[s + 1],
              d = r[s + 2],
              p = r[s + 3];
          return t[e] = o * p + l * h + a * d - c * u, t[e + 1] = a * p + l * u + c * h - o * d, t[e + 2] = c * p + l * d + o * u - a * h, t[e + 3] = l * p - o * h - a * u - c * d, t
      }
      get x() {
          return this._x
      }
      set x(t) {
          this._x = t, this._onChangeCallback()
      }
      get y() {
          return this._y
      }
      set y(t) {
          this._y = t, this._onChangeCallback()
      }
      get z() {
          return this._z
      }
      set z(t) {
          this._z = t, this._onChangeCallback()
      }
      get w() {
          return this._w
      }
      set w(t) {
          this._w = t, this._onChangeCallback()
      }
      set(t, e, n, i) {
          return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this
      }
      clone() {
          return new this.constructor(this._x, this._y, this._z, this._w)
      }
      copy(t) {
          return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this
      }
      setFromEuler(t, e) {
          if (!t || !t.isEuler) throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
          const n = t._x,
              i = t._y,
              r = t._z,
              s = t._order,
              o = Math.cos,
              a = Math.sin,
              c = o(n / 2),
              l = o(i / 2),
              h = o(r / 2),
              u = a(n / 2),
              d = a(i / 2),
              p = a(r / 2);
          switch (s) {
              case "XYZ":
                  this._x = u * l * h + c * d * p, this._y = c * d * h - u * l * p, this._z = c * l * p + u * d * h, this._w = c * l * h - u * d * p;
                  break;
              case "YXZ":
                  this._x = u * l * h + c * d * p, this._y = c * d * h - u * l * p, this._z = c * l * p - u * d * h, this._w = c * l * h + u * d * p;
                  break;
              case "ZXY":
                  this._x = u * l * h - c * d * p, this._y = c * d * h + u * l * p, this._z = c * l * p + u * d * h, this._w = c * l * h - u * d * p;
                  break;
              case "ZYX":
                  this._x = u * l * h - c * d * p, this._y = c * d * h + u * l * p, this._z = c * l * p - u * d * h, this._w = c * l * h + u * d * p;
                  break;
              case "YZX":
                  this._x = u * l * h + c * d * p, this._y = c * d * h + u * l * p, this._z = c * l * p - u * d * h, this._w = c * l * h - u * d * p;
                  break;
              case "XZY":
                  this._x = u * l * h - c * d * p, this._y = c * d * h - u * l * p, this._z = c * l * p + u * d * h, this._w = c * l * h + u * d * p;
                  break;
              default:
                  console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s)
          }
          return !1 !== e && this._onChangeCallback(), this
      }
      setFromAxisAngle(t, e) {
          const n = e / 2,
              i = Math.sin(n);
          return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this
      }
      setFromRotationMatrix(t) {
          const e = t.elements,
              n = e[0],
              i = e[4],
              r = e[8],
              s = e[1],
              o = e[5],
              a = e[9],
              c = e[2],
              l = e[6],
              h = e[10],
              u = n + o + h;
          if (u > 0) {
              const t = .5 / Math.sqrt(u + 1);
              this._w = .25 / t, this._x = (l - a) * t, this._y = (r - c) * t, this._z = (s - i) * t
          } else if (n > o && n > h) {
              const t = 2 * Math.sqrt(1 + n - o - h);
              this._w = (l - a) / t, this._x = .25 * t, this._y = (i + s) / t, this._z = (r + c) / t
          } else if (o > h) {
              const t = 2 * Math.sqrt(1 + o - n - h);
              this._w = (r - c) / t, this._x = (i + s) / t, this._y = .25 * t, this._z = (a + l) / t
          } else {
              const t = 2 * Math.sqrt(1 + h - n - o);
              this._w = (s - i) / t, this._x = (r + c) / t, this._y = (a + l) / t, this._z = .25 * t
          }
          return this._onChangeCallback(), this
      }
      setFromUnitVectors(t, e) {
          let n = t.dot(e) + 1;
          return n < 1e-6 ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize()
      }
      angleTo(t) {
          return 2 * Math.acos(Math.abs(O.clamp(this.dot(t), -1, 1)))
      }
      rotateTowards(t, e) {
          const n = this.angleTo(t);
          if (0 === n) return this;
          const i = Math.min(1, e / n);
          return this.slerp(t, i), this
      }
      identity() {
          return this.set(0, 0, 0, 1)
      }
      invert() {
          return this.conjugate()
      }
      conjugate() {
          return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
      }
      dot(t) {
          return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
      }
      lengthSq() {
          return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
      }
      length() {
          return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
      }
      normalize() {
          let t = this.length();
          return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this
      }
      multiply(t, e) {
          return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
      }
      premultiply(t) {
          return this.multiplyQuaternions(t, this)
      }
      multiplyQuaternions(t, e) {
          const n = t._x,
              i = t._y,
              r = t._z,
              s = t._w,
              o = e._x,
              a = e._y,
              c = e._z,
              l = e._w;
          return this._x = n * l + s * o + i * c - r * a, this._y = i * l + s * a + r * o - n * c, this._z = r * l + s * c + n * a - i * o, this._w = s * l - n * o - i * a - r * c, this._onChangeCallback(), this
      }
      slerp(t, e) {
          if (0 === e) return this;
          if (1 === e) return this.copy(t);
          const n = this._x,
              i = this._y,
              r = this._z,
              s = this._w;
          let o = s * t._w + n * t._x + i * t._y + r * t._z;
          if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = s, this._x = n, this._y = i, this._z = r, this;
          const a = 1 - o * o;
          if (a <= Number.EPSILON) {
              const t = 1 - e;
              return this._w = t * s + e * this._w, this._x = t * n + e * this._x, this._y = t * i + e * this._y, this._z = t * r + e * this._z, this.normalize(), this._onChangeCallback(), this
          }
          const c = Math.sqrt(a),
              l = Math.atan2(c, o),
              h = Math.sin((1 - e) * l) / c,
              u = Math.sin(e * l) / c;
          return this._w = s * h + this._w * u, this._x = n * h + this._x * u, this._y = i * h + this._y * u, this._z = r * h + this._z * u, this._onChangeCallback(), this
      }
      equals(t) {
          return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
      }
      fromArray(t, e = 0) {
          return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this
      }
      toArray(t = [], e = 0) {
          return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
      }
      fromBufferAttribute(t, e) {
          return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this
      }
      _onChange(t) {
          return this._onChangeCallback = t, this
      }
      _onChangeCallback() {}
  }
  class W {
      constructor(t = 0, e = 0, n = 0) {
          Object.defineProperty(this, "isVector3", {
              value: !0
          }), this.x = t, this.y = e, this.z = n
      }
      set(t, e, n) {
          return void 0 === n && (n = this.z), this.x = t, this.y = e, this.z = n, this
      }
      setScalar(t) {
          return this.x = t, this.y = t, this.z = t, this
      }
      setX(t) {
          return this.x = t, this
      }
      setY(t) {
          return this.y = t, this
      }
      setZ(t) {
          return this.z = t, this
      }
      setComponent(t, e) {
          switch (t) {
              case 0:
                  this.x = e;
                  break;
              case 1:
                  this.y = e;
                  break;
              case 2:
                  this.z = e;
                  break;
              default:
                  throw new Error("index is out of range: " + t)
          }
          return this
      }
      getComponent(t) {
          switch (t) {
              case 0:
                  return this.x;
              case 1:
                  return this.y;
              case 2:
                  return this.z;
              default:
                  throw new Error("index is out of range: " + t)
          }
      }
      clone() {
          return new this.constructor(this.x, this.y, this.z)
      }
      copy(t) {
          return this.x = t.x, this.y = t.y, this.z = t.z, this
      }
      add(t, e) {
          return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
      }
      addScalar(t) {
          return this.x += t, this.y += t, this.z += t, this
      }
      addVectors(t, e) {
          return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
      }
      addScaledVector(t, e) {
          return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
      }
      sub(t, e) {
          return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
      }
      subScalar(t) {
          return this.x -= t, this.y -= t, this.z -= t, this
      }
      subVectors(t, e) {
          return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
      }
      multiply(t, e) {
          return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
      }
      multiplyScalar(t) {
          return this.x *= t, this.y *= t, this.z *= t, this
      }
      multiplyVectors(t, e) {
          return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
      }
      applyEuler(t) {
          return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(X.setFromEuler(t))
      }
      applyAxisAngle(t, e) {
          return this.applyQuaternion(X.setFromAxisAngle(t, e))
      }
      applyMatrix3(t) {
          const e = this.x,
              n = this.y,
              i = this.z,
              r = t.elements;
          return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this
      }
      applyNormalMatrix(t) {
          return this.applyMatrix3(t).normalize()
      }
      applyMatrix4(t) {
          const e = this.x,
              n = this.y,
              i = this.z,
              r = t.elements,
              s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
          return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s, this
      }
      applyQuaternion(t) {
          const e = this.x,
              n = this.y,
              i = this.z,
              r = t.x,
              s = t.y,
              o = t.z,
              a = t.w,
              c = a * e + s * i - o * n,
              l = a * n + o * e - r * i,
              h = a * i + r * n - s * e,
              u = -r * e - s * n - o * i;
          return this.x = c * a + u * -r + l * -o - h * -s, this.y = l * a + u * -s + h * -r - c * -o, this.z = h * a + u * -o + c * -s - l * -r, this
      }
      project(t) {
          return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
      }
      unproject(t) {
          return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
      }
      transformDirection(t) {
          const e = this.x,
              n = this.y,
              i = this.z,
              r = t.elements;
          return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize()
      }
      divide(t) {
          return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
      }
      divideScalar(t) {
          return this.multiplyScalar(1 / t)
      }
      min(t) {
          return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
      }
      max(t) {
          return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
      }
      clamp(t, e) {
          return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
      }
      clampScalar(t, e) {
          return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this
      }
      clampLength(t, e) {
          const n = this.length();
          return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
      }
      floor() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
      }
      ceil() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
      }
      round() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
      }
      roundToZero() {
          return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
      }
      negate() {
          return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
      }
      dot(t) {
          return this.x * t.x + this.y * t.y + this.z * t.z
      }
      lengthSq() {
          return this.x * this.x + this.y * this.y + this.z * this.z
      }
      length() {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
      }
      manhattanLength() {
          return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
      }
      normalize() {
          return this.divideScalar(this.length() || 1)
      }
      setLength(t) {
          return this.normalize().multiplyScalar(t)
      }
      lerp(t, e) {
          return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
      }
      lerpVectors(t, e, n) {
          return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this
      }
      cross(t, e) {
          return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)) : this.crossVectors(this, t)
      }
      crossVectors(t, e) {
          const n = t.x,
              i = t.y,
              r = t.z,
              s = e.x,
              o = e.y,
              a = e.z;
          return this.x = i * a - r * o, this.y = r * s - n * a, this.z = n * o - i * s, this
      }
      projectOnVector(t) {
          const e = t.lengthSq();
          if (0 === e) return this.set(0, 0, 0);
          const n = t.dot(this) / e;
          return this.copy(t).multiplyScalar(n)
      }
      projectOnPlane(t) {
          return q.copy(this).projectOnVector(t), this.sub(q)
      }
      reflect(t) {
          return this.sub(q.copy(t).multiplyScalar(2 * this.dot(t)))
      }
      angleTo(t) {
          const e = Math.sqrt(this.lengthSq() * t.lengthSq());
          if (0 === e) return Math.PI / 2;
          const n = this.dot(t) / e;
          return Math.acos(O.clamp(n, -1, 1))
      }
      distanceTo(t) {
          return Math.sqrt(this.distanceToSquared(t))
      }
      distanceToSquared(t) {
          const e = this.x - t.x,
              n = this.y - t.y,
              i = this.z - t.z;
          return e * e + n * n + i * i
      }
      manhattanDistanceTo(t) {
          return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
      }
      setFromSpherical(t) {
          return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
      }
      setFromSphericalCoords(t, e, n) {
          const i = Math.sin(e) * t;
          return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this
      }
      setFromCylindrical(t) {
          return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
      }
      setFromCylindricalCoords(t, e, n) {
          return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this
      }
      setFromMatrixPosition(t) {
          const e = t.elements;
          return this.x = e[12], this.y = e[13], this.z = e[14], this
      }
      setFromMatrixScale(t) {
          const e = this.setFromMatrixColumn(t, 0).length(),
              n = this.setFromMatrixColumn(t, 1).length(),
              i = this.setFromMatrixColumn(t, 2).length();
          return this.x = e, this.y = n, this.z = i, this
      }
      setFromMatrixColumn(t, e) {
          return this.fromArray(t.elements, 4 * e)
      }
      setFromMatrix3Column(t, e) {
          return this.fromArray(t.elements, 3 * e)
      }
      equals(t) {
          return t.x === this.x && t.y === this.y && t.z === this.z
      }
      fromArray(t, e = 0) {
          return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
      }
      toArray(t = [], e = 0) {
          return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
      }
      fromBufferAttribute(t, e, n) {
          return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
      }
      random() {
          return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
      }
  }
  const q = new W,
      X = new j;
  class Y {
      constructor(t, e) {
          Object.defineProperty(this, "isBox3", {
              value: !0
          }), this.min = void 0 !== t ? t : new W(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new W(-1 / 0, -1 / 0, -1 / 0)
      }
      set(t, e) {
          return this.min.copy(t), this.max.copy(e), this
      }
      setFromArray(t) {
          let e = 1 / 0,
              n = 1 / 0,
              i = 1 / 0,
              r = -1 / 0,
              s = -1 / 0,
              o = -1 / 0;
          for (let a = 0, c = t.length; a < c; a += 3) {
              const c = t[a],
                  l = t[a + 1],
                  h = t[a + 2];
              c < e && (e = c), l < n && (n = l), h < i && (i = h), c > r && (r = c), l > s && (s = l), h > o && (o = h)
          }
          return this.min.set(e, n, i), this.max.set(r, s, o), this
      }
      setFromBufferAttribute(t) {
          let e = 1 / 0,
              n = 1 / 0,
              i = 1 / 0,
              r = -1 / 0,
              s = -1 / 0,
              o = -1 / 0;
          for (let a = 0, c = t.count; a < c; a++) {
              const c = t.getX(a),
                  l = t.getY(a),
                  h = t.getZ(a);
              c < e && (e = c), l < n && (n = l), h < i && (i = h), c > r && (r = c), l > s && (s = l), h > o && (o = h)
          }
          return this.min.set(e, n, i), this.max.set(r, s, o), this
      }
      setFromPoints(t) {
          this.makeEmpty();
          for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
          return this
      }
      setFromCenterAndSize(t, e) {
          const n = K.copy(e).multiplyScalar(.5);
          return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
      }
      setFromObject(t) {
          return this.makeEmpty(), this.expandByObject(t)
      }
      clone() {
          return (new this.constructor).copy(this)
      }
      copy(t) {
          return this.min.copy(t.min), this.max.copy(t.max), this
      }
      makeEmpty() {
          return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
      }
      isEmpty() {
          return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
      }
      getCenter(t) {
          return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"), t = new W), this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
      }
      getSize(t) {
          return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"), t = new W), this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
      }
      expandByPoint(t) {
          return this.min.min(t), this.max.max(t), this
      }
      expandByVector(t) {
          return this.min.sub(t), this.max.add(t), this
      }
      expandByScalar(t) {
          return this.min.addScalar(-t), this.max.addScalar(t), this
      }
      expandByObject(t) {
          t.updateWorldMatrix(!1, !1);
          const e = t.geometry;
          void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(), Q.copy(e.boundingBox), Q.applyMatrix4(t.matrixWorld), this.union(Q));
          const n = t.children;
          for (let t = 0, e = n.length; t < e; t++) this.expandByObject(n[t]);
          return this
      }
      containsPoint(t) {
          return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
      }
      containsBox(t) {
          return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
      }
      getParameter(t, e) {
          return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"), e = new W), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
      }
      intersectsBox(t) {
          return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
      }
      intersectsSphere(t) {
          return this.clampPoint(t.center, K), K.distanceToSquared(t.center) <= t.radius * t.radius
      }
      intersectsPlane(t) {
          let e, n;
          return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant
      }
      intersectsTriangle(t) {
          if (this.isEmpty()) return !1;
          this.getCenter(st), ot.subVectors(this.max, st), $.subVectors(t.a, st), tt.subVectors(t.b, st), et.subVectors(t.c, st), nt.subVectors(tt, $), it.subVectors(et, tt), rt.subVectors($, et);
          let e = [0, -nt.z, nt.y, 0, -it.z, it.y, 0, -rt.z, rt.y, nt.z, 0, -nt.x, it.z, 0, -it.x, rt.z, 0, -rt.x, -nt.y, nt.x, 0, -it.y, it.x, 0, -rt.y, rt.x, 0];
          return !!Z(e, $, tt, et, ot) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!Z(e, $, tt, et, ot) && (at.crossVectors(nt, it), e = [at.x, at.y, at.z], Z(e, $, tt, et, ot)))
      }
      clampPoint(t, e) {
          return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"), e = new W), e.copy(t).clamp(this.min, this.max)
      }
      distanceToPoint(t) {
          return K.copy(t).clamp(this.min, this.max).sub(t).length()
      }
      getBoundingSphere(t) {
          return void 0 === t && console.error("THREE.Box3: .getBoundingSphere() target is now required"), this.getCenter(t.center), t.radius = .5 * this.getSize(K).length(), t
      }
      intersect(t) {
          return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
      }
      union(t) {
          return this.min.min(t.min), this.max.max(t.max), this
      }
      applyMatrix4(t) {
          return this.isEmpty() || (J[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), J[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), J[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), J[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), J[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), J[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), J[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), J[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(J)), this
      }
      translate(t) {
          return this.min.add(t), this.max.add(t), this
      }
      equals(t) {
          return t.min.equals(this.min) && t.max.equals(this.max)
      }
  }

  function Z(t, e, n, i, r) {
      for (let s = 0, o = t.length - 3; s <= o; s += 3) {
          ct.fromArray(t, s);
          const o = r.x * Math.abs(ct.x) + r.y * Math.abs(ct.y) + r.z * Math.abs(ct.z),
              a = e.dot(ct),
              c = n.dot(ct),
              l = i.dot(ct);
          if (Math.max(-Math.max(a, c, l), Math.min(a, c, l)) > o) return !1
      }
      return !0
  }
  const J = [new W, new W, new W, new W, new W, new W, new W, new W],
      K = new W,
      Q = new Y,
      $ = new W,
      tt = new W,
      et = new W,
      nt = new W,
      it = new W,
      rt = new W,
      st = new W,
      ot = new W,
      at = new W,
      ct = new W,
      lt = new Y;
  class ht {
      constructor(t, e) {
          this.center = void 0 !== t ? t : new W, this.radius = void 0 !== e ? e : -1
      }
      set(t, e) {
          return this.center.copy(t), this.radius = e, this
      }
      setFromPoints(t, e) {
          const n = this.center;
          void 0 !== e ? n.copy(e) : lt.setFromPoints(t).getCenter(n);
          let i = 0;
          for (let e = 0, r = t.length; e < r; e++) i = Math.max(i, n.distanceToSquared(t[e]));
          return this.radius = Math.sqrt(i), this
      }
      clone() {
          return (new this.constructor).copy(this)
      }
      copy(t) {
          return this.center.copy(t.center), this.radius = t.radius, this
      }
      isEmpty() {
          return this.radius < 0
      }
      makeEmpty() {
          return this.center.set(0, 0, 0), this.radius = -1, this
      }
      containsPoint(t) {
          return t.distanceToSquared(this.center) <= this.radius * this.radius
      }
      distanceToPoint(t) {
          return t.distanceTo(this.center) - this.radius
      }
      intersectsSphere(t) {
          const e = this.radius + t.radius;
          return t.center.distanceToSquared(this.center) <= e * e
      }
      intersectsBox(t) {
          return t.intersectsSphere(this)
      }
      intersectsPlane(t) {
          return Math.abs(t.distanceToPoint(this.center)) <= this.radius
      }
      clampPoint(t, e) {
          const n = this.center.distanceToSquared(t);
          return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"), e = new W), e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
      }
      getBoundingBox(t) {
          return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"), t = new Y), this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t)
      }
      applyMatrix4(t) {
          return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
      }
      translate(t) {
          return this.center.add(t), this
      }
      equals(t) {
          return t.center.equals(this.center) && t.radius === this.radius
      }
  }
  const ut = new W,
      dt = new W,
      pt = new W,
      ft = new W,
      mt = new W,
      gt = new W,
      vt = new W;
  class yt {
      constructor(t, e) {
          this.origin = void 0 !== t ? t : new W, this.direction = void 0 !== e ? e : new W(0, 0, -1)
      }
      set(t, e) {
          return this.origin.copy(t), this.direction.copy(e), this
      }
      clone() {
          return (new this.constructor).copy(this)
      }
      copy(t) {
          return this.origin.copy(t.origin), this.direction.copy(t.direction), this
      }
      at(t, e) {
          return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"), e = new W), e.copy(this.direction).multiplyScalar(t).add(this.origin)
      }
      lookAt(t) {
          return this.direction.copy(t).sub(this.origin).normalize(), this
      }
      recast(t) {
          return this.origin.copy(this.at(t, ut)), this
      }
      closestPointToPoint(t, e) {
          void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"), e = new W), e.subVectors(t, this.origin);
          const n = e.dot(this.direction);
          return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin)
      }
      distanceToPoint(t) {
          return Math.sqrt(this.distanceSqToPoint(t))
      }
      distanceSqToPoint(t) {
          const e = ut.subVectors(t, this.origin).dot(this.direction);
          return e < 0 ? this.origin.distanceToSquared(t) : (ut.copy(this.direction).multiplyScalar(e).add(this.origin), ut.distanceToSquared(t))
      }
      distanceSqToSegment(t, e, n, i) {
          dt.copy(t).add(e).multiplyScalar(.5), pt.copy(e).sub(t).normalize(), ft.copy(this.origin).sub(dt);
          const r = .5 * t.distanceTo(e),
              s = -this.direction.dot(pt),
              o = ft.dot(this.direction),
              a = -ft.dot(pt),
              c = ft.lengthSq(),
              l = Math.abs(1 - s * s);
          let h, u, d, p;
          if (l > 0)
              if (h = s * a - o, u = s * o - a, p = r * l, h >= 0)
                  if (u >= -p)
                      if (u <= p) {
                          const t = 1 / l;
                          h *= t, u *= t, d = h * (h + s * u + 2 * o) + u * (s * h + u + 2 * a) + c
                      } else u = r, h = Math.max(0, -(s * u + o)), d = -h * h + u * (u + 2 * a) + c;
          else u = -r, h = Math.max(0, -(s * u + o)), d = -h * h + u * (u + 2 * a) + c;
          else u <= -p ? (h = Math.max(0, -(-s * r + o)), u = h > 0 ? -r : Math.min(Math.max(-r, -a), r), d = -h * h + u * (u + 2 * a) + c) : u <= p ? (h = 0, u = Math.min(Math.max(-r, -a), r), d = u * (u + 2 * a) + c) : (h = Math.max(0, -(s * r + o)), u = h > 0 ? r : Math.min(Math.max(-r, -a), r), d = -h * h + u * (u + 2 * a) + c);
          else u = s > 0 ? -r : r, h = Math.max(0, -(s * u + o)), d = -h * h + u * (u + 2 * a) + c;
          return n && n.copy(this.direction).multiplyScalar(h).add(this.origin), i && i.copy(pt).multiplyScalar(u).add(dt), d
      }
      intersectSphere(t, e) {
          ut.subVectors(t.center, this.origin);
          const n = ut.dot(this.direction),
              i = ut.dot(ut) - n * n,
              r = t.radius * t.radius;
          if (i > r) return null;
          const s = Math.sqrt(r - i),
              o = n - s,
              a = n + s;
          return o < 0 && a < 0 ? null : o < 0 ? this.at(a, e) : this.at(o, e)
      }
      intersectsSphere(t) {
          return this.distanceSqToPoint(t.center) <= t.radius * t.radius
      }
      distanceToPlane(t) {
          const e = t.normal.dot(this.direction);
          if (0 === e) return 0 === t.distanceToPoint(this.origin) ? 0 : null;
          const n = -(this.origin.dot(t.normal) + t.constant) / e;
          return n >= 0 ? n : null
      }
      intersectPlane(t, e) {
          const n = this.distanceToPlane(t);
          return null === n ? null : this.at(n, e)
      }
      intersectsPlane(t) {
          const e = t.distanceToPoint(this.origin);
          return 0 === e || t.normal.dot(this.direction) * e < 0
      }
      intersectBox(t, e) {
          let n, i, r, s, o, a;
          const c = 1 / this.direction.x,
              l = 1 / this.direction.y,
              h = 1 / this.direction.z,
              u = this.origin;
          return c >= 0 ? (n = (t.min.x - u.x) * c, i = (t.max.x - u.x) * c) : (n = (t.max.x - u.x) * c, i = (t.min.x - u.x) * c), l >= 0 ? (r = (t.min.y - u.y) * l, s = (t.max.y - u.y) * l) : (r = (t.max.y - u.y) * l, s = (t.min.y - u.y) * l), n > s || r > i ? null : ((r > n || n != n) && (n = r), (s < i || i != i) && (i = s), h >= 0 ? (o = (t.min.z - u.z) * h, a = (t.max.z - u.z) * h) : (o = (t.max.z - u.z) * h, a = (t.min.z - u.z) * h), n > a || o > i ? null : ((o > n || n != n) && (n = o), (a < i || i != i) && (i = a), i < 0 ? null : this.at(n >= 0 ? n : i, e)))
      }
      intersectsBox(t) {
          return null !== this.intersectBox(t, ut)
      }
      intersectTriangle(t, e, n, i, r) {
          mt.subVectors(e, t), gt.subVectors(n, t), vt.crossVectors(mt, gt);
          let s, o = this.direction.dot(vt);
          if (o > 0) {
              if (i) return null;
              s = 1
          } else {
              if (!(o < 0)) return null;
              s = -1, o = -o
          }
          ft.subVectors(this.origin, t);
          const a = s * this.direction.dot(gt.crossVectors(ft, gt));
          if (a < 0) return null;
          const c = s * this.direction.dot(mt.cross(ft));
          if (c < 0) return null;
          if (a + c > o) return null;
          const l = -s * ft.dot(vt);
          return l < 0 ? null : this.at(l / o, r)
      }
      applyMatrix4(t) {
          return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
      }
      equals(t) {
          return t.origin.equals(this.origin) && t.direction.equals(this.direction)
      }
  }
  class xt {
      constructor() {
          Object.defineProperty(this, "isMatrix4", {
              value: !0
          }), this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
      }
      set(t, e, n, i, r, s, o, a, c, l, h, u, d, p, f, m) {
          const g = this.elements;
          return g[0] = t, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = s, g[9] = o, g[13] = a, g[2] = c, g[6] = l, g[10] = h, g[14] = u, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this
      }
      identity() {
          return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
      }
      clone() {
          return (new xt).fromArray(this.elements)
      }
      copy(t) {
          const e = this.elements,
              n = t.elements;
          return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this
      }
      copyPosition(t) {
          const e = this.elements,
              n = t.elements;
          return e[12] = n[12], e[13] = n[13], e[14] = n[14], this
      }
      extractBasis(t, e, n) {
          return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
      }
      makeBasis(t, e, n) {
          return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this
      }
      extractRotation(t) {
          const e = this.elements,
              n = t.elements,
              i = 1 / _t.setFromMatrixColumn(t, 0).length(),
              r = 1 / _t.setFromMatrixColumn(t, 1).length(),
              s = 1 / _t.setFromMatrixColumn(t, 2).length();
          return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * s, e[9] = n[9] * s, e[10] = n[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
      }
      makeRotationFromEuler(t) {
          t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
          const e = this.elements,
              n = t.x,
              i = t.y,
              r = t.z,
              s = Math.cos(n),
              o = Math.sin(n),
              a = Math.cos(i),
              c = Math.sin(i),
              l = Math.cos(r),
              h = Math.sin(r);
          if ("XYZ" === t.order) {
              const t = s * l,
                  n = s * h,
                  i = o * l,
                  r = o * h;
              e[0] = a * l, e[4] = -a * h, e[8] = c, e[1] = n + i * c, e[5] = t - r * c, e[9] = -o * a, e[2] = r - t * c, e[6] = i + n * c, e[10] = s * a
          } else if ("YXZ" === t.order) {
              const t = a * l,
                  n = a * h,
                  i = c * l,
                  r = c * h;
              e[0] = t + r * o, e[4] = i * o - n, e[8] = s * c, e[1] = s * h, e[5] = s * l, e[9] = -o, e[2] = n * o - i, e[6] = r + t * o, e[10] = s * a
          } else if ("ZXY" === t.order) {
              const t = a * l,
                  n = a * h,
                  i = c * l,
                  r = c * h;
              e[0] = t - r * o, e[4] = -s * h, e[8] = i + n * o, e[1] = n + i * o, e[5] = s * l, e[9] = r - t * o, e[2] = -s * c, e[6] = o, e[10] = s * a
          } else if ("ZYX" === t.order) {
              const t = s * l,
                  n = s * h,
                  i = o * l,
                  r = o * h;
              e[0] = a * l, e[4] = i * c - n, e[8] = t * c + r, e[1] = a * h, e[5] = r * c + t, e[9] = n * c - i, e[2] = -c, e[6] = o * a, e[10] = s * a
          } else if ("YZX" === t.order) {
              const t = s * a,
                  n = s * c,
                  i = o * a,
                  r = o * c;
              e[0] = a * l, e[4] = r - t * h, e[8] = i * h + n, e[1] = h, e[5] = s * l, e[9] = -o * l, e[2] = -c * l, e[6] = n * h + i, e[10] = t - r * h
          } else if ("XZY" === t.order) {
              const t = s * a,
                  n = s * c,
                  i = o * a,
                  r = o * c;
              e[0] = a * l, e[4] = -h, e[8] = c * l, e[1] = t * h + r, e[5] = s * l, e[9] = n * h - i, e[2] = i * h - n, e[6] = o * l, e[10] = r * h + t
          }
          return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
      }
      makeRotationFromQuaternion(t) {
          return this.compose(wt, t, Mt)
      }
      lookAt(t, e, n) {
          const i = this.elements;
          return Et.subVectors(t, e), 0 === Et.lengthSq() && (Et.z = 1), Et.normalize(), St.crossVectors(n, Et), 0 === St.lengthSq() && (1 === Math.abs(n.z) ? Et.x += 1e-4 : Et.z += 1e-4, Et.normalize(), St.crossVectors(n, Et)), St.normalize(), Tt.crossVectors(Et, St), i[0] = St.x, i[4] = Tt.x, i[8] = Et.x, i[1] = St.y, i[5] = Tt.y, i[9] = Et.y, i[2] = St.z, i[6] = Tt.z, i[10] = Et.z, this
      }
      multiply(t, e) {
          return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
      }
      premultiply(t) {
          return this.multiplyMatrices(t, this)
      }
      multiplyMatrices(t, e) {
          const n = t.elements,
              i = e.elements,
              r = this.elements,
              s = n[0],
              o = n[4],
              a = n[8],
              c = n[12],
              l = n[1],
              h = n[5],
              u = n[9],
              d = n[13],
              p = n[2],
              f = n[6],
              m = n[10],
              g = n[14],
              v = n[3],
              y = n[7],
              x = n[11],
              _ = n[15],
              b = i[0],
              w = i[4],
              M = i[8],
              S = i[12],
              T = i[1],
              E = i[5],
              A = i[9],
              L = i[13],
              R = i[2],
              P = i[6],
              C = i[10],
              N = i[14],
              O = i[3],
              I = i[7],
              D = i[11],
              U = i[15];
          return r[0] = s * b + o * T + a * R + c * O, r[4] = s * w + o * E + a * P + c * I, r[8] = s * M + o * A + a * C + c * D, r[12] = s * S + o * L + a * N + c * U, r[1] = l * b + h * T + u * R + d * O, r[5] = l * w + h * E + u * P + d * I, r[9] = l * M + h * A + u * C + d * D, r[13] = l * S + h * L + u * N + d * U, r[2] = p * b + f * T + m * R + g * O, r[6] = p * w + f * E + m * P + g * I, r[10] = p * M + f * A + m * C + g * D, r[14] = p * S + f * L + m * N + g * U, r[3] = v * b + y * T + x * R + _ * O, r[7] = v * w + y * E + x * P + _ * I, r[11] = v * M + y * A + x * C + _ * D, r[15] = v * S + y * L + x * N + _ * U, this
      }
      multiplyScalar(t) {
          const e = this.elements;
          return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
      }
      determinant() {
          const t = this.elements,
              e = t[0],
              n = t[4],
              i = t[8],
              r = t[12],
              s = t[1],
              o = t[5],
              a = t[9],
              c = t[13],
              l = t[2],
              h = t[6],
              u = t[10],
              d = t[14];
          return t[3] * (+r * a * h - i * c * h - r * o * u + n * c * u + i * o * d - n * a * d) + t[7] * (+e * a * d - e * c * u + r * s * u - i * s * d + i * c * l - r * a * l) + t[11] * (+e * c * h - e * o * d - r * s * h + n * s * d + r * o * l - n * c * l) + t[15] * (-i * o * l - e * a * h + e * o * u + i * s * h - n * s * u + n * a * l)
      }
      transpose() {
          const t = this.elements;
          let e;
          return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
      }
      setPosition(t, e, n) {
          const i = this.elements;
          return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this
      }
      invert() {
          const t = this.elements,
              e = t[0],
              n = t[1],
              i = t[2],
              r = t[3],
              s = t[4],
              o = t[5],
              a = t[6],
              c = t[7],
              l = t[8],
              h = t[9],
              u = t[10],
              d = t[11],
              p = t[12],
              f = t[13],
              m = t[14],
              g = t[15],
              v = h * m * c - f * u * c + f * a * d - o * m * d - h * a * g + o * u * g,
              y = p * u * c - l * m * c - p * a * d + s * m * d + l * a * g - s * u * g,
              x = l * f * c - p * h * c + p * o * d - s * f * d - l * o * g + s * h * g,
              _ = p * h * a - l * f * a - p * o * u + s * f * u + l * o * m - s * h * m,
              b = e * v + n * y + i * x + r * _;
          if (0 === b) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
          const w = 1 / b;
          return t[0] = v * w, t[1] = (f * u * r - h * m * r - f * i * d + n * m * d + h * i * g - n * u * g) * w, t[2] = (o * m * r - f * a * r + f * i * c - n * m * c - o * i * g + n * a * g) * w, t[3] = (h * a * r - o * u * r - h * i * c + n * u * c + o * i * d - n * a * d) * w, t[4] = y * w, t[5] = (l * m * r - p * u * r + p * i * d - e * m * d - l * i * g + e * u * g) * w, t[6] = (p * a * r - s * m * r - p * i * c + e * m * c + s * i * g - e * a * g) * w, t[7] = (s * u * r - l * a * r + l * i * c - e * u * c - s * i * d + e * a * d) * w, t[8] = x * w, t[9] = (p * h * r - l * f * r - p * n * d + e * f * d + l * n * g - e * h * g) * w, t[10] = (s * f * r - p * o * r + p * n * c - e * f * c - s * n * g + e * o * g) * w, t[11] = (l * o * r - s * h * r - l * n * c + e * h * c + s * n * d - e * o * d) * w, t[12] = _ * w, t[13] = (l * f * i - p * h * i + p * n * u - e * f * u - l * n * m + e * h * m) * w, t[14] = (p * o * i - s * f * i - p * n * a + e * f * a + s * n * m - e * o * m) * w, t[15] = (s * h * i - l * o * i + l * n * a - e * h * a - s * n * u + e * o * u) * w, this
      }
      scale(t) {
          const e = this.elements,
              n = t.x,
              i = t.y,
              r = t.z;
          return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this
      }
      getMaxScaleOnAxis() {
          const t = this.elements,
              e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
              n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
              i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
          return Math.sqrt(Math.max(e, n, i))
      }
      makeTranslation(t, e, n) {
          return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this
      }
      makeRotationX(t) {
          const e = Math.cos(t),
              n = Math.sin(t);
          return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this
      }
      makeRotationY(t) {
          const e = Math.cos(t),
              n = Math.sin(t);
          return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this
      }
      makeRotationZ(t) {
          const e = Math.cos(t),
              n = Math.sin(t);
          return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
      }
      makeRotationAxis(t, e) {
          const n = Math.cos(e),
              i = Math.sin(e),
              r = 1 - n,
              s = t.x,
              o = t.y,
              a = t.z,
              c = r * s,
              l = r * o;
          return this.set(c * s + n, c * o - i * a, c * a + i * o, 0, c * o + i * a, l * o + n, l * a - i * s, 0, c * a - i * o, l * a + i * s, r * a * a + n, 0, 0, 0, 0, 1), this
      }
      makeScale(t, e, n) {
          return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
      }
      makeShear(t, e, n) {
          return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1), this
      }
      compose(t, e, n) {
          const i = this.elements,
              r = e._x,
              s = e._y,
              o = e._z,
              a = e._w,
              c = r + r,
              l = s + s,
              h = o + o,
              u = r * c,
              d = r * l,
              p = r * h,
              f = s * l,
              m = s * h,
              g = o * h,
              v = a * c,
              y = a * l,
              x = a * h,
              _ = n.x,
              b = n.y,
              w = n.z;
          return i[0] = (1 - (f + g)) * _, i[1] = (d + x) * _, i[2] = (p - y) * _, i[3] = 0, i[4] = (d - x) * b, i[5] = (1 - (u + g)) * b, i[6] = (m + v) * b, i[7] = 0, i[8] = (p + y) * w, i[9] = (m - v) * w, i[10] = (1 - (u + f)) * w, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this
      }
      decompose(t, e, n) {
          const i = this.elements;
          let r = _t.set(i[0], i[1], i[2]).length();
          const s = _t.set(i[4], i[5], i[6]).length(),
              o = _t.set(i[8], i[9], i[10]).length();
          this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], bt.copy(this);
          const a = 1 / r,
              c = 1 / s,
              l = 1 / o;
          return bt.elements[0] *= a, bt.elements[1] *= a, bt.elements[2] *= a, bt.elements[4] *= c, bt.elements[5] *= c, bt.elements[6] *= c, bt.elements[8] *= l, bt.elements[9] *= l, bt.elements[10] *= l, e.setFromRotationMatrix(bt), n.x = r, n.y = s, n.z = o, this
      }
      makePerspective(t, e, n, i, r, s) {
          void 0 === s && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
          const o = this.elements,
              a = 2 * r / (e - t),
              c = 2 * r / (n - i),
              l = (e + t) / (e - t),
              h = (n + i) / (n - i),
              u = -(s + r) / (s - r),
              d = -2 * s * r / (s - r);
          return o[0] = a, o[4] = 0, o[8] = l, o[12] = 0, o[1] = 0, o[5] = c, o[9] = h, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = d, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
      }
      makeOrthographic(t, e, n, i, r, s) {
          const o = this.elements,
              a = 1 / (e - t),
              c = 1 / (n - i),
              l = 1 / (s - r),
              h = (e + t) * a,
              u = (n + i) * c,
              d = (s + r) * l;
          return o[0] = 2 * a, o[4] = 0, o[8] = 0, o[12] = -h, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * l, o[14] = -d, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
      }
      equals(t) {
          const e = this.elements,
              n = t.elements;
          for (let t = 0; t < 16; t++)
              if (e[t] !== n[t]) return !1;
          return !0
      }
      fromArray(t, e = 0) {
          for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
          return this
      }
      toArray(t = [], e = 0) {
          const n = this.elements;
          return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t
      }
  }
  const _t = new W,
      bt = new xt,
      wt = new W(0, 0, 0),
      Mt = new W(1, 1, 1),
      St = new W,
      Tt = new W,
      Et = new W;
  class At {
      constructor(t = 0, e = 0, n = 0, i = At.DefaultOrder) {
          Object.defineProperty(this, "isEuler", {
              value: !0
          }), this._x = t, this._y = e, this._z = n, this._order = i
      }
      get x() {
          return this._x
      }
      set x(t) {
          this._x = t, this._onChangeCallback()
      }
      get y() {
          return this._y
      }
      set y(t) {
          this._y = t, this._onChangeCallback()
      }
      get z() {
          return this._z
      }
      set z(t) {
          this._z = t, this._onChangeCallback()
      }
      get order() {
          return this._order
      }
      set order(t) {
          this._order = t, this._onChangeCallback()
      }
      set(t, e, n, i) {
          return this._x = t, this._y = e, this._z = n, this._order = i || this._order, this._onChangeCallback(), this
      }
      clone() {
          return new this.constructor(this._x, this._y, this._z, this._order)
      }
      copy(t) {
          return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this
      }
      setFromRotationMatrix(t, e, n) {
          const i = O.clamp,
              r = t.elements,
              s = r[0],
              o = r[4],
              a = r[8],
              c = r[1],
              l = r[5],
              h = r[9],
              u = r[2],
              d = r[6],
              p = r[10];
          switch (e = e || this._order) {
              case "XYZ":
                  this._y = Math.asin(i(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(d, l), this._z = 0);
                  break;
              case "YXZ":
                  this._x = Math.asin(-i(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(a, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
                  break;
              case "ZXY":
                  this._x = Math.asin(i(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, s));
                  break;
              case "ZYX":
                  this._y = Math.asin(-i(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-o, l));
                  break;
              case "YZX":
                  this._z = Math.asin(i(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(a, p));
                  break;
              case "XZY":
                  this._z = Math.asin(-i(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, p), this._y = 0);
                  break;
              default:
                  console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
          }
          return this._order = e, !1 !== n && this._onChangeCallback(), this
      }
      setFromQuaternion(t, e, n) {
          return Lt.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Lt, e, n)
      }
      setFromVector3(t, e) {
          return this.set(t.x, t.y, t.z, e || this._order)
      }
      reorder(t) {
          return Rt.setFromEuler(this), this.setFromQuaternion(Rt, t)
      }
      equals(t) {
          return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
      }
      fromArray(t) {
          return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this
      }
      toArray(t = [], e = 0) {
          return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
      }
      toVector3(t) {
          return t ? t.set(this._x, this._y, this._z) : new W(this._x, this._y, this._z)
      }
      _onChange(t) {
          return this._onChangeCallback = t, this
      }
      _onChangeCallback() {}
  }
  At.DefaultOrder = "XYZ", At.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
  const Lt = new xt,
      Rt = new j;
  class Pt {
      constructor() {
          this.mask = 1
      }
      set(t) {
          this.mask = 1 << t | 0
      }
      enable(t) {
          this.mask |= 1 << t | 0
      }
      enableAll() {
          this.mask = -1
      }
      toggle(t) {
          this.mask ^= 1 << t | 0
      }
      disable(t) {
          this.mask &= ~(1 << t | 0)
      }
      disableAll() {
          this.mask = 0
      }
      test(t) {
          return 0 != (this.mask & t.mask)
      }
  }
  let Ct = 0;
  const Nt = new W,
      Ot = new j,
      It = new xt,
      Dt = new W,
      Ut = new W,
      Ft = new W,
      Ht = new j,
      zt = new W(1, 0, 0),
      Bt = new W(0, 1, 0),
      Gt = new W(0, 0, 1),
      kt = {
          type: "added"
      },
      Vt = {
          type: "removed"
      };

  function jt() {
      Object.defineProperty(this, "id", {
          value: Ct++
      }), this.uuid = O.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = jt.DefaultUp.clone();
      const t = new W,
          e = new At,
          n = new j,
          i = new W(1, 1, 1);
      e._onChange((function() {
          n.setFromEuler(e, !1)
      })), n._onChange((function() {
          e.setFromQuaternion(n, void 0, !1)
      })), Object.defineProperties(this, {
          position: {
              configurable: !0,
              enumerable: !0,
              value: t
          },
          rotation: {
              configurable: !0,
              enumerable: !0,
              value: e
          },
          quaternion: {
              configurable: !0,
              enumerable: !0,
              value: n
          },
          scale: {
              configurable: !0,
              enumerable: !0,
              value: i
          },
          modelViewMatrix: {
              value: new xt
          },
          normalMatrix: {
              value: new D
          }
      }), this.matrix = new xt, this.matrixWorld = new xt, this.matrixAutoUpdate = jt.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new Pt, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
  }
  jt.DefaultUp = new W(0, 1, 0), jt.DefaultMatrixAutoUpdate = !0, jt.prototype = Object.assign(Object.create(P.prototype), {
      constructor: jt,
      isObject3D: !0,
      onBeforeRender: function() {},
      onAfterRender: function() {},
      applyMatrix4: function(t) {
          this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale)
      },
      applyQuaternion: function(t) {
          return this.quaternion.premultiply(t), this
      },
      setRotationFromAxisAngle: function(t, e) {
          this.quaternion.setFromAxisAngle(t, e)
      },
      setRotationFromEuler: function(t) {
          this.quaternion.setFromEuler(t, !0)
      },
      setRotationFromMatrix: function(t) {
          this.quaternion.setFromRotationMatrix(t)
      },
      setRotationFromQuaternion: function(t) {
          this.quaternion.copy(t)
      },
      rotateOnAxis: function(t, e) {
          return Ot.setFromAxisAngle(t, e), this.quaternion.multiply(Ot), this
      },
      rotateOnWorldAxis: function(t, e) {
          return Ot.setFromAxisAngle(t, e), this.quaternion.premultiply(Ot), this
      },
      rotateX: function(t) {
          return this.rotateOnAxis(zt, t)
      },
      rotateY: function(t) {
          return this.rotateOnAxis(Bt, t)
      },
      rotateZ: function(t) {
          return this.rotateOnAxis(Gt, t)
      },
      translateOnAxis: function(t, e) {
          return Nt.copy(t).applyQuaternion(this.quaternion), this.position.add(Nt.multiplyScalar(e)), this
      },
      translateX: function(t) {
          return this.translateOnAxis(zt, t)
      },
      translateY: function(t) {
          return this.translateOnAxis(Bt, t)
      },
      translateZ: function(t) {
          return this.translateOnAxis(Gt, t)
      },
      localToWorld: function(t) {
          return t.applyMatrix4(this.matrixWorld)
      },
      worldToLocal: function(t) {
          return t.applyMatrix4(It.copy(this.matrixWorld).invert())
      },
      lookAt: function(t, e, n) {
          t.isVector3 ? Dt.copy(t) : Dt.set(t, e, n);
          const i = this.parent;
          this.updateWorldMatrix(!0, !1), Ut.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? It.lookAt(Ut, Dt, this.up) : It.lookAt(Dt, Ut, this.up), this.quaternion.setFromRotationMatrix(It), i && (It.extractRotation(i.matrixWorld), Ot.setFromRotationMatrix(It), this.quaternion.premultiply(Ot.invert()))
      },
      add: function(t) {
          if (arguments.length > 1) {
              for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
              return this
          }
          return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, this.children.push(t), t.dispatchEvent(kt)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
      },
      remove: function(t) {
          if (arguments.length > 1) {
              for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
              return this
          }
          const e = this.children.indexOf(t);
          return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Vt)), this
      },
      clear: function() {
          for (let t = 0; t < this.children.length; t++) {
              const e = this.children[t];
              e.parent = null, e.dispatchEvent(Vt)
          }
          return this.children.length = 0, this
      },
      attach: function(t) {
          return this.updateWorldMatrix(!0, !1), It.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), It.multiply(t.parent.matrixWorld)), t.applyMatrix4(It), t.updateWorldMatrix(!1, !1), this.add(t), this
      },
      getObjectById: function(t) {
          return this.getObjectByProperty("id", t)
      },
      getObjectByName: function(t) {
          return this.getObjectByProperty("name", t)
      },
      getObjectByProperty: function(t, e) {
          if (this[t] === e) return this;
          for (let n = 0, i = this.children.length; n < i; n++) {
              const i = this.children[n].getObjectByProperty(t, e);
              if (void 0 !== i) return i
          }
      },
      getWorldPosition: function(t) {
          return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"), t = new W), this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld)
      },
      getWorldQuaternion: function(t) {
          return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"), t = new j), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ut, t, Ft), t
      },
      getWorldScale: function(t) {
          return void 0 === t && (console.warn("THREE.Object3D: .getWorldScale() target is now required"), t = new W), this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ut, Ht, t), t
      },
      getWorldDirection: function(t) {
          void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"), t = new W), this.updateWorldMatrix(!0, !1);
          const e = this.matrixWorld.elements;
          return t.set(e[8], e[9], e[10]).normalize()
      },
      raycast: function() {},
      traverse: function(t) {
          t(this);
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t)
      },
      traverseVisible: function(t) {
          if (!1 === this.visible) return;
          t(this);
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t)
      },
      traverseAncestors: function(t) {
          const e = this.parent;
          null !== e && (t(e), e.traverseAncestors(t))
      },
      updateMatrix: function() {
          this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
      },
      updateMatrixWorld: function(t) {
          this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
          const e = this.children;
          for (let n = 0, i = e.length; n < i; n++) e[n].updateMatrixWorld(t)
      },
      updateWorldMatrix: function(t, e) {
          const n = this.parent;
          if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), !0 === e) {
              const t = this.children;
              for (let e = 0, n = t.length; e < n; e++) t[e].updateWorldMatrix(!1, !0)
          }
      },
      toJSON: function(t) {
          const e = void 0 === t || "string" == typeof t,
              n = {};
          e && (t = {
              geometries: {},
              materials: {},
              textures: {},
              images: {},
              shapes: {},
              skeletons: {},
              animations: {}
          }, n.metadata = {
              version: 4.5,
              type: "Object",
              generator: "Object3D.toJSON"
          });
          const i = {};

          function r(e, n) {
              return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)), n.uuid
          }
          if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON()), this.isMesh || this.isLine || this.isPoints) {
              i.geometry = r(t.geometries, this.geometry);
              const e = this.geometry.parameters;
              if (void 0 !== e && void 0 !== e.shapes) {
                  const n = e.shapes;
                  if (Array.isArray(n))
                      for (let e = 0, i = n.length; e < i; e++) {
                          const i = n[e];
                          r(t.shapes, i)
                      } else r(t.shapes, n)
              }
          }
          if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material)
              if (Array.isArray(this.material)) {
                  const e = [];
                  for (let n = 0, i = this.material.length; n < i; n++) e.push(r(t.materials, this.material[n]));
                  i.material = e
              } else i.material = r(t.materials, this.material);
          if (this.children.length > 0) {
              i.children = [];
              for (let e = 0; e < this.children.length; e++) i.children.push(this.children[e].toJSON(t).object)
          }
          if (this.animations.length > 0) {
              i.animations = [];
              for (let e = 0; e < this.animations.length; e++) {
                  const n = this.animations[e];
                  i.animations.push(r(t.animations, n))
              }
          }
          if (e) {
              const e = s(t.geometries),
                  i = s(t.materials),
                  r = s(t.textures),
                  o = s(t.images),
                  a = s(t.shapes),
                  c = s(t.skeletons),
                  l = s(t.animations);
              e.length > 0 && (n.geometries = e), i.length > 0 && (n.materials = i), r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o), a.length > 0 && (n.shapes = a), c.length > 0 && (n.skeletons = c), l.length > 0 && (n.animations = l)
          }
          return n.object = i, n;

          function s(t) {
              const e = [];
              for (const n in t) {
                  const i = t[n];
                  delete i.metadata, e.push(i)
              }
              return e
          }
      },
      clone: function(t) {
          return (new this.constructor).copy(this, t)
      },
      copy: function(t, e = !0) {
          if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
              for (let e = 0; e < t.children.length; e++) {
                  const n = t.children[e];
                  this.add(n.clone())
              }
          return this
      }
  });
  const Wt = new W,
      qt = new W,
      Xt = new D;
  class Yt {
      constructor(t, e) {
          Object.defineProperty(this, "isPlane", {
              value: !0
          }), this.normal = void 0 !== t ? t : new W(1, 0, 0), this.constant = void 0 !== e ? e : 0
      }
      set(t, e) {
          return this.normal.copy(t), this.constant = e, this
      }
      setComponents(t, e, n, i) {
          return this.normal.set(t, e, n), this.constant = i, this
      }
      setFromNormalAndCoplanarPoint(t, e) {
          return this.normal.copy(t), this.constant = -e.dot(this.normal), this
      }
      setFromCoplanarPoints(t, e, n) {
          const i = Wt.subVectors(n, e).cross(qt.subVectors(t, e)).normalize();
          return this.setFromNormalAndCoplanarPoint(i, t), this
      }
      clone() {
          return (new this.constructor).copy(this)
      }
      copy(t) {
          return this.normal.copy(t.normal), this.constant = t.constant, this
      }
      normalize() {
          const t = 1 / this.normal.length();
          return this.normal.multiplyScalar(t), this.constant *= t, this
      }
      negate() {
          return this.constant *= -1, this.normal.negate(), this
      }
      distanceToPoint(t) {
          return this.normal.dot(t) + this.constant
      }
      distanceToSphere(t) {
          return this.distanceToPoint(t.center) - t.radius
      }
      projectPoint(t, e) {
          return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"), e = new W), e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
      }
      intersectLine(t, e) {
          void 0 === e && (console.warn("THREE.Plane: .intersectLine() target is now required"), e = new W);
          const n = t.delta(Wt),
              i = this.normal.dot(n);
          if (0 === i) return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : void 0;
          const r = -(t.start.dot(this.normal) + this.constant) / i;
          return r < 0 || r > 1 ? void 0 : e.copy(n).multiplyScalar(r).add(t.start)
      }
      intersectsLine(t) {
          const e = this.distanceToPoint(t.start),
              n = this.distanceToPoint(t.end);
          return e < 0 && n > 0 || n < 0 && e > 0
      }
      intersectsBox(t) {
          return t.intersectsPlane(this)
      }
      intersectsSphere(t) {
          return t.intersectsPlane(this)
      }
      coplanarPoint(t) {
          return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"), t = new W), t.copy(this.normal).multiplyScalar(-this.constant)
      }
      applyMatrix4(t, e) {
          const n = e || Xt.getNormalMatrix(t),
              i = this.coplanarPoint(Wt).applyMatrix4(t),
              r = this.normal.applyMatrix3(n).normalize();
          return this.constant = -i.dot(r), this
      }
      translate(t) {
          return this.constant -= t.dot(this.normal), this
      }
      equals(t) {
          return t.normal.equals(this.normal) && t.constant === this.constant
      }
  }
  const Zt = new W,
      Jt = new W,
      Kt = new W,
      Qt = new W,
      $t = new W,
      te = new W,
      ee = new W,
      ne = new W,
      ie = new W,
      re = new W;
  class se {
      constructor(t, e, n) {
          this.a = void 0 !== t ? t : new W, this.b = void 0 !== e ? e : new W, this.c = void 0 !== n ? n : new W
      }
      static getNormal(t, e, n, i) {
          void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"), i = new W), i.subVectors(n, e), Zt.subVectors(t, e), i.cross(Zt);
          const r = i.lengthSq();
          return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
      }
      static getBarycoord(t, e, n, i, r) {
          Zt.subVectors(i, e), Jt.subVectors(n, e), Kt.subVectors(t, e);
          const s = Zt.dot(Zt),
              o = Zt.dot(Jt),
              a = Zt.dot(Kt),
              c = Jt.dot(Jt),
              l = Jt.dot(Kt),
              h = s * c - o * o;
          if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"), r = new W), 0 === h) return r.set(-2, -1, -1);
          const u = 1 / h,
              d = (c * a - o * l) * u,
              p = (s * l - o * a) * u;
          return r.set(1 - d - p, p, d)
      }
      static containsPoint(t, e, n, i) {
          return this.getBarycoord(t, e, n, i, Qt), Qt.x >= 0 && Qt.y >= 0 && Qt.x + Qt.y <= 1
      }
      static getUV(t, e, n, i, r, s, o, a) {
          return this.getBarycoord(t, e, n, i, Qt), a.set(0, 0), a.addScaledVector(r, Qt.x), a.addScaledVector(s, Qt.y), a.addScaledVector(o, Qt.z), a
      }
      static isFrontFacing(t, e, n, i) {
          return Zt.subVectors(n, e), Jt.subVectors(t, e), Zt.cross(Jt).dot(i) < 0
      }
      set(t, e, n) {
          return this.a.copy(t), this.b.copy(e), this.c.copy(n), this
      }
      setFromPointsAndIndices(t, e, n, i) {
          return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this
      }
      clone() {
          return (new this.constructor).copy(this)
      }
      copy(t) {
          return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
      }
      getArea() {
          return Zt.subVectors(this.c, this.b), Jt.subVectors(this.a, this.b), .5 * Zt.cross(Jt).length()
      }
      getMidpoint(t) {
          return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"), t = new W), t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
      }
      getNormal(t) {
          return se.getNormal(this.a, this.b, this.c, t)
      }
      getPlane(t) {
          return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"), t = new Yt), t.setFromCoplanarPoints(this.a, this.b, this.c)
      }
      getBarycoord(t, e) {
          return se.getBarycoord(t, this.a, this.b, this.c, e)
      }
      getUV(t, e, n, i, r) {
          return se.getUV(t, this.a, this.b, this.c, e, n, i, r)
      }
      containsPoint(t) {
          return se.containsPoint(t, this.a, this.b, this.c)
      }
      isFrontFacing(t) {
          return se.isFrontFacing(this.a, this.b, this.c, t)
      }
      intersectsBox(t) {
          return t.intersectsTriangle(this)
      }
      closestPointToPoint(t, e) {
          void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"), e = new W);
          const n = this.a,
              i = this.b,
              r = this.c;
          let s, o;
          $t.subVectors(i, n), te.subVectors(r, n), ne.subVectors(t, n);
          const a = $t.dot(ne),
              c = te.dot(ne);
          if (a <= 0 && c <= 0) return e.copy(n);
          ie.subVectors(t, i);
          const l = $t.dot(ie),
              h = te.dot(ie);
          if (l >= 0 && h <= l) return e.copy(i);
          const u = a * h - l * c;
          if (u <= 0 && a >= 0 && l <= 0) return s = a / (a - l), e.copy(n).addScaledVector($t, s);
          re.subVectors(t, r);
          const d = $t.dot(re),
              p = te.dot(re);
          if (p >= 0 && d <= p) return e.copy(r);
          const f = d * c - a * p;
          if (f <= 0 && c >= 0 && p <= 0) return o = c / (c - p), e.copy(n).addScaledVector(te, o);
          const m = l * p - d * h;
          if (m <= 0 && h - l >= 0 && d - p >= 0) return ee.subVectors(r, i), o = (h - l) / (h - l + (d - p)), e.copy(i).addScaledVector(ee, o);
          const g = 1 / (m + f + u);
          return s = f * g, o = u * g, e.copy(n).addScaledVector($t, s).addScaledVector(te, o)
      }
      equals(t) {
          return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
      }
  }
  const oe = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074
      },
      ae = {
          h: 0,
          s: 0,
          l: 0
      },
      ce = {
          h: 0,
          s: 0,
          l: 0
      };

  function le(t, e, n) {
      return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
  }

  function he(t) {
      return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
  }

  function ue(t) {
      return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
  }
  class de {
      constructor(t, e, n) {
          return Object.defineProperty(this, "isColor", {
              value: !0
          }), void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
      }
      set(t) {
          return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
      }
      setScalar(t) {
          return this.r = t, this.g = t, this.b = t, this
      }
      setHex(t) {
          return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
      }
      setRGB(t, e, n) {
          return this.r = t, this.g = e, this.b = n, this
      }
      setHSL(t, e, n) {
          if (t = O.euclideanModulo(t, 1), e = O.clamp(e, 0, 1), n = O.clamp(n, 0, 1), 0 === e) this.r = this.g = this.b = n;
          else {
              const i = n <= .5 ? n * (1 + e) : n + e - n * e,
                  r = 2 * n - i;
              this.r = le(r, i, t + 1 / 3), this.g = le(r, i, t), this.b = le(r, i, t - 1 / 3)
          }
          return this
      }
      setStyle(t) {
          function e(e) {
              void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
          }
          let n;
          if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
              let t;
              const i = n[1],
                  r = n[2];
              switch (i) {
                  case "rgb":
                  case "rgba":
                      if (t = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, e(t[4]), this;
                      if (t = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, e(t[4]), this;
                      break;
                  case "hsl":
                  case "hsla":
                      if (t = /^(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) {
                          const n = parseFloat(t[1]) / 360,
                              i = parseInt(t[2], 10) / 100,
                              r = parseInt(t[3], 10) / 100;
                          return e(t[4]), this.setHSL(n, i, r)
                      }
              }
          } else if (n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
              const t = n[1],
                  e = t.length;
              if (3 === e) return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255, this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255, this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255, this;
              if (6 === e) return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255, this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255, this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255, this
          }
          return t && t.length > 0 ? this.setColorName(t) : this
      }
      setColorName(t) {
          const e = oe[t];
          return void 0 !== e ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t), this
      }
      clone() {
          return new this.constructor(this.r, this.g, this.b)
      }
      copy(t) {
          return this.r = t.r, this.g = t.g, this.b = t.b, this
      }
      copyGammaToLinear(t, e = 2) {
          return this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
      }
      copyLinearToGamma(t, e = 2) {
          const n = e > 0 ? 1 / e : 1;
          return this.r = Math.pow(t.r, n), this.g = Math.pow(t.g, n), this.b = Math.pow(t.b, n), this
      }
      convertGammaToLinear(t) {
          return this.copyGammaToLinear(this, t), this
      }
      convertLinearToGamma(t) {
          return this.copyLinearToGamma(this, t), this
      }
      copySRGBToLinear(t) {
          return this.r = he(t.r), this.g = he(t.g), this.b = he(t.b), this
      }
      copyLinearToSRGB(t) {
          return this.r = ue(t.r), this.g = ue(t.g), this.b = ue(t.b), this
      }
      convertSRGBToLinear() {
          return this.copySRGBToLinear(this), this
      }
      convertLinearToSRGB() {
          return this.copyLinearToSRGB(this), this
      }
      getHex() {
          return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
      }
      getHexString() {
          return ("000000" + this.getHex().toString(16)).slice(-6)
      }
      getHSL(t) {
          void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"), t = {
              h: 0,
              s: 0,
              l: 0
          });
          const e = this.r,
              n = this.g,
              i = this.b,
              r = Math.max(e, n, i),
              s = Math.min(e, n, i);
          let o, a;
          const c = (s + r) / 2;
          if (s === r) o = 0, a = 0;
          else {
              const t = r - s;
              switch (a = c <= .5 ? t / (r + s) : t / (2 - r - s), r) {
                  case e:
                      o = (n - i) / t + (n < i ? 6 : 0);
                      break;
                  case n:
                      o = (i - e) / t + 2;
                      break;
                  case i:
                      o = (e - n) / t + 4
              }
              o /= 6
          }
          return t.h = o, t.s = a, t.l = c, t
      }
      getStyle() {
          return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
      }
      offsetHSL(t, e, n) {
          return this.getHSL(ae), ae.h += t, ae.s += e, ae.l += n, this.setHSL(ae.h, ae.s, ae.l), this
      }
      add(t) {
          return this.r += t.r, this.g += t.g, this.b += t.b, this
      }
      addColors(t, e) {
          return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
      }
      addScalar(t) {
          return this.r += t, this.g += t, this.b += t, this
      }
      sub(t) {
          return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
      }
      multiply(t) {
          return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
      }
      multiplyScalar(t) {
          return this.r *= t, this.g *= t, this.b *= t, this
      }
      lerp(t, e) {
          return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
      }
      lerpHSL(t, e) {
          this.getHSL(ae), t.getHSL(ce);
          const n = O.lerp(ae.h, ce.h, e),
              i = O.lerp(ae.s, ce.s, e),
              r = O.lerp(ae.l, ce.l, e);
          return this.setHSL(n, i, r), this
      }
      equals(t) {
          return t.r === this.r && t.g === this.g && t.b === this.b
      }
      fromArray(t, e = 0) {
          return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
      }
      toArray(t = [], e = 0) {
          return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
      }
      fromBufferAttribute(t, e) {
          return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), !0 === t.normalized && (this.r /= 255, this.g /= 255, this.b /= 255), this
      }
      toJSON() {
          return this.getHex()
      }
  }
  de.NAMES = oe, de.prototype.r = 1, de.prototype.g = 1, de.prototype.b = 1;
  class pe {
      constructor(t, e, n, i, r, s = 0) {
          this.a = t, this.b = e, this.c = n, this.normal = i && i.isVector3 ? i : new W, this.vertexNormals = Array.isArray(i) ? i : [], this.color = r && r.isColor ? r : new de, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = s
      }
      clone() {
          return (new this.constructor).copy(this)
      }
      copy(t) {
          this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
          for (let e = 0, n = t.vertexNormals.length; e < n; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
          for (let e = 0, n = t.vertexColors.length; e < n; e++) this.vertexColors[e] = t.vertexColors[e].clone();
          return this
      }
  }
  let fe = 0;

  function me() {
      Object.defineProperty(this, "id", {
          value: fe++
      }), this.uuid = O.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.blending = 1, this.side = 0, this.flatShading = !1, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = t, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = E, this.stencilZFail = E, this.stencilZPass = E, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0
  }

  function ge(t) {
      me.call(this), this.type = "MeshBasicMaterial", this.color = new de(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.setValues(t)
  }
  me.prototype = Object.assign(Object.create(P.prototype), {
      constructor: me,
      isMaterial: !0,
      onBeforeCompile: function() {},
      customProgramCacheKey: function() {
          return this.onBeforeCompile.toString()
      },
      setValues: function(t) {
          if (void 0 !== t)
              for (const e in t) {
                  const n = t[e];
                  if (void 0 === n) {
                      console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                      continue
                  }
                  if ("shading" === e) {
                      console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === n;
                      continue
                  }
                  const i = this[e];
                  void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
              }
      },
      toJSON: function(t) {
          const e = void 0 === t || "string" == typeof t;
          e && (t = {
              textures: {},
              images: {}
          });
          const n = {
              metadata: {
                  version: 4.5,
                  type: "Material",
                  generator: "Material.toJSON"
              }
          };

          function i(t) {
              const e = [];
              for (const n in t) {
                  const i = t[n];
                  delete i.metadata, e.push(i)
              }
              return e
          }
          if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, n.reflectivity = this.reflectivity, n.refractionRatio = this.refractionRatio, void 0 !== this.combine && (n.combine = this.combine), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity)), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), !0 === this.flatShading && (n.flatShading = this.flatShading), 0 !== this.side && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.morphNormals && (n.morphNormals = !0), !0 === this.skinning && (n.skinning = !0), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), e) {
              const e = i(t.textures),
                  r = i(t.images);
              e.length > 0 && (n.textures = e), r.length > 0 && (n.images = r)
          }
          return n
      },
      clone: function() {
          return (new this.constructor).copy(this)
      },
      copy: function(t) {
          this.name = t.name, this.fog = t.fog, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
          const e = t.clippingPlanes;
          let n = null;
          if (null !== e) {
              const t = e.length;
              n = new Array(t);
              for (let i = 0; i !== t; ++i) n[i] = e[i].clone()
          }
          return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this
      },
      dispose: function() {
          this.dispatchEvent({
              type: "dispose"
          })
      }
  }), Object.defineProperty(me.prototype, "needsUpdate", {
      set: function(t) {
          !0 === t && this.version++
      }
  }), ge.prototype = Object.create(me.prototype), ge.prototype.constructor = ge, ge.prototype.isMeshBasicMaterial = !0, ge.prototype.copy = function(t) {
      return me.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
  };
  const ve = new W,
      ye = new I;

  function xe(t, e, n) {
      if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === n, this.usage = A, this.updateRange = {
          offset: 0,
          count: -1
      }, this.version = 0
  }

  function _e(t, e, n) {
      xe.call(this, new Int8Array(t), e, n)
  }

  function be(t, e, n) {
      xe.call(this, new Uint8Array(t), e, n)
  }

  function we(t, e, n) {
      xe.call(this, new Uint8ClampedArray(t), e, n)
  }

  function Me(t, e, n) {
      xe.call(this, new Int16Array(t), e, n)
  }

  function Se(t, e, n) {
      xe.call(this, new Uint16Array(t), e, n)
  }

  function Te(t, e, n) {
      xe.call(this, new Int32Array(t), e, n)
  }

  function Ee(t, e, n) {
      xe.call(this, new Uint32Array(t), e, n)
  }

  function Ae(t, e, n) {
      xe.call(this, new Uint16Array(t), e, n)
  }

  function Le(t, e, n) {
      xe.call(this, new Float32Array(t), e, n)
  }

  function Re(t, e, n) {
      xe.call(this, new Float64Array(t), e, n)
  }
  Object.defineProperty(xe.prototype, "needsUpdate", {
      set: function(t) {
          !0 === t && this.version++
      }
  }), Object.assign(xe.prototype, {
      isBufferAttribute: !0,
      onUploadCallback: function() {},
      setUsage: function(t) {
          return this.usage = t, this
      },
      copy: function(t) {
          return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this
      },
      copyAt: function(t, e, n) {
          t *= this.itemSize, n *= e.itemSize;
          for (let i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[n + i];
          return this
      },
      copyArray: function(t) {
          return this.array.set(t), this
      },
      copyColorsArray: function(t) {
          const e = this.array;
          let n = 0;
          for (let i = 0, r = t.length; i < r; i++) {
              let r = t[i];
              void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), r = new de), e[n++] = r.r, e[n++] = r.g, e[n++] = r.b
          }
          return this
      },
      copyVector2sArray: function(t) {
          const e = this.array;
          let n = 0;
          for (let i = 0, r = t.length; i < r; i++) {
              let r = t[i];
              void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), r = new I), e[n++] = r.x, e[n++] = r.y
          }
          return this
      },
      copyVector3sArray: function(t) {
          const e = this.array;
          let n = 0;
          for (let i = 0, r = t.length; i < r; i++) {
              let r = t[i];
              void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), r = new W), e[n++] = r.x, e[n++] = r.y, e[n++] = r.z
          }
          return this
      },
      copyVector4sArray: function(t) {
          const e = this.array;
          let n = 0;
          for (let i = 0, r = t.length; i < r; i++) {
              let r = t[i];
              void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), r = new G), e[n++] = r.x, e[n++] = r.y, e[n++] = r.z, e[n++] = r.w
          }
          return this
      },
      applyMatrix3: function(t) {
          if (2 === this.itemSize)
              for (let e = 0, n = this.count; e < n; e++) ye.fromBufferAttribute(this, e), ye.applyMatrix3(t), this.setXY(e, ye.x, ye.y);
          else if (3 === this.itemSize)
              for (let e = 0, n = this.count; e < n; e++) ve.fromBufferAttribute(this, e), ve.applyMatrix3(t), this.setXYZ(e, ve.x, ve.y, ve.z);
          return this
      },
      applyMatrix4: function(t) {
          for (let e = 0, n = this.count; e < n; e++) ve.x = this.getX(e), ve.y = this.getY(e), ve.z = this.getZ(e), ve.applyMatrix4(t), this.setXYZ(e, ve.x, ve.y, ve.z);
          return this
      },
      applyNormalMatrix: function(t) {
          for (let e = 0, n = this.count; e < n; e++) ve.x = this.getX(e), ve.y = this.getY(e), ve.z = this.getZ(e), ve.applyNormalMatrix(t), this.setXYZ(e, ve.x, ve.y, ve.z);
          return this
      },
      transformDirection: function(t) {
          for (let e = 0, n = this.count; e < n; e++) ve.x = this.getX(e), ve.y = this.getY(e), ve.z = this.getZ(e), ve.transformDirection(t), this.setXYZ(e, ve.x, ve.y, ve.z);
          return this
      },
      set: function(t, e = 0) {
          return this.array.set(t, e), this
      },
      getX: function(t) {
          return this.array[t * this.itemSize]
      },
      setX: function(t, e) {
          return this.array[t * this.itemSize] = e, this
      },
      getY: function(t) {
          return this.array[t * this.itemSize + 1]
      },
      setY: function(t, e) {
          return this.array[t * this.itemSize + 1] = e, this
      },
      getZ: function(t) {
          return this.array[t * this.itemSize + 2]
      },
      setZ: function(t, e) {
          return this.array[t * this.itemSize + 2] = e, this
      },
      getW: function(t) {
          return this.array[t * this.itemSize + 3]
      },
      setW: function(t, e) {
          return this.array[t * this.itemSize + 3] = e, this
      },
      setXY: function(t, e, n) {
          return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this
      },
      setXYZ: function(t, e, n, i) {
          return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this
      },
      setXYZW: function(t, e, n, i, r) {
          return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this
      },
      onUpload: function(t) {
          return this.onUploadCallback = t, this
      },
      clone: function() {
          return new this.constructor(this.array, this.itemSize).copy(this)
      },
      toJSON: function() {
          return {
              itemSize: this.itemSize,
              type: this.array.constructor.name,
              array: Array.prototype.slice.call(this.array),
              normalized: this.normalized
          }
      }
  }), _e.prototype = Object.create(xe.prototype), _e.prototype.constructor = _e, be.prototype = Object.create(xe.prototype), be.prototype.constructor = be, we.prototype = Object.create(xe.prototype), we.prototype.constructor = we, Me.prototype = Object.create(xe.prototype), Me.prototype.constructor = Me, Se.prototype = Object.create(xe.prototype), Se.prototype.constructor = Se, Te.prototype = Object.create(xe.prototype), Te.prototype.constructor = Te, Ee.prototype = Object.create(xe.prototype), Ee.prototype.constructor = Ee, Ae.prototype = Object.create(xe.prototype), Ae.prototype.constructor = Ae, Ae.prototype.isFloat16BufferAttribute = !0, Le.prototype = Object.create(xe.prototype), Le.prototype.constructor = Le, Re.prototype = Object.create(xe.prototype), Re.prototype.constructor = Re;
  class Pe {
      constructor() {
          this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
      }
      computeGroups(t) {
          const e = [];
          let n, i, r;
          const s = t.faces;
          for (i = 0; i < s.length; i++) {
              const t = s[i];
              t.materialIndex !== r && (r = t.materialIndex, void 0 !== n && (n.count = 3 * i - n.start, e.push(n)), n = {
                  start: 3 * i,
                  materialIndex: r
              })
          }
          void 0 !== n && (n.count = 3 * i - n.start, e.push(n)), this.groups = e
      }
      fromGeometry(t) {
          const e = t.faces,
              n = t.vertices,
              i = t.faceVertexUvs,
              r = i[0] && i[0].length > 0,
              s = i[1] && i[1].length > 0,
              o = t.morphTargets,
              a = o.length;
          let c;
          if (a > 0) {
              c = [];
              for (let t = 0; t < a; t++) c[t] = {
                  name: o[t].name,
                  data: []
              };
              this.morphTargets.position = c
          }
          const l = t.morphNormals,
              h = l.length;
          let u;
          if (h > 0) {
              u = [];
              for (let t = 0; t < h; t++) u[t] = {
                  name: l[t].name,
                  data: []
              };
              this.morphTargets.normal = u
          }
          const d = t.skinIndices,
              p = t.skinWeights,
              f = d.length === n.length,
              m = p.length === n.length;
          n.length > 0 && 0 === e.length && console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
          for (let t = 0; t < e.length; t++) {
              const g = e[t];
              this.vertices.push(n[g.a], n[g.b], n[g.c]);
              const v = g.vertexNormals;
              if (3 === v.length) this.normals.push(v[0], v[1], v[2]);
              else {
                  const t = g.normal;
                  this.normals.push(t, t, t)
              }
              const y = g.vertexColors;
              if (3 === y.length) this.colors.push(y[0], y[1], y[2]);
              else {
                  const t = g.color;
                  this.colors.push(t, t, t)
              }
              if (!0 === r) {
                  const e = i[0][t];
                  void 0 !== e ? this.uvs.push(e[0], e[1], e[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", t), this.uvs.push(new I, new I, new I))
              }
              if (!0 === s) {
                  const e = i[1][t];
                  void 0 !== e ? this.uvs2.push(e[0], e[1], e[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", t), this.uvs2.push(new I, new I, new I))
              }
              for (let t = 0; t < a; t++) {
                  const e = o[t].vertices;
                  c[t].data.push(e[g.a], e[g.b], e[g.c])
              }
              for (let e = 0; e < h; e++) {
                  const n = l[e].vertexNormals[t];
                  u[e].data.push(n.a, n.b, n.c)
              }
              f && this.skinIndices.push(d[g.a], d[g.b], d[g.c]), m && this.skinWeights.push(p[g.a], p[g.b], p[g.c])
          }
          return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
      }
  }

  function Ce(t) {
      if (0 === t.length) return -1 / 0;
      let e = t[0];
      for (let n = 1, i = t.length; n < i; ++n) t[n] > e && (e = t[n]);
      return e
  }
  const Ne = {
      Int8Array,
      Uint8Array,
      Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
      Int16Array,
      Uint16Array,
      Int32Array,
      Uint32Array,
      Float32Array,
      Float64Array
  };

  function Oe(t, e) {
      return new Ne[t](e)
  }
  let Ie = 1;
  const De = new xt,
      Ue = new jt,
      Fe = new W,
      He = new Y,
      ze = new Y,
      Be = new W;

  function Ge() {
      Object.defineProperty(this, "id", {
          value: Ie += 2
      }), this.uuid = O.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
          start: 0,
          count: 1 / 0
      }, this.userData = {}
  }
  Ge.prototype = Object.assign(Object.create(P.prototype), {
      constructor: Ge,
      isBufferGeometry: !0,
      getIndex: function() {
          return this.index
      },
      setIndex: function(t) {
          return Array.isArray(t) ? this.index = new(Ce(t) > 65535 ? Ee : Se)(t, 1) : this.index = t, this
      },
      getAttribute: function(t) {
          return this.attributes[t]
      },
      setAttribute: function(t, e) {
          return this.attributes[t] = e, this
      },
      deleteAttribute: function(t) {
          return delete this.attributes[t], this
      },
      hasAttribute: function(t) {
          return void 0 !== this.attributes[t]
      },
      addGroup: function(t, e, n = 0) {
          this.groups.push({
              start: t,
              count: e,
              materialIndex: n
          })
      },
      clearGroups: function() {
          this.groups = []
      },
      setDrawRange: function(t, e) {
          this.drawRange.start = t, this.drawRange.count = e
      },
      applyMatrix4: function(t) {
          const e = this.attributes.position;
          void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
          const n = this.attributes.normal;
          if (void 0 !== n) {
              const e = (new D).getNormalMatrix(t);
              n.applyNormalMatrix(e), n.needsUpdate = !0
          }
          const i = this.attributes.tangent;
          return void 0 !== i && (i.transformDirection(t), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
      },
      rotateX: function(t) {
          return De.makeRotationX(t), this.applyMatrix4(De), this
      },
      rotateY: function(t) {
          return De.makeRotationY(t), this.applyMatrix4(De), this
      },
      rotateZ: function(t) {
          return De.makeRotationZ(t), this.applyMatrix4(De), this
      },
      translate: function(t, e, n) {
          return De.makeTranslation(t, e, n), this.applyMatrix4(De), this
      },
      scale: function(t, e, n) {
          return De.makeScale(t, e, n), this.applyMatrix4(De), this
      },
      lookAt: function(t) {
          return Ue.lookAt(t), Ue.updateMatrix(), this.applyMatrix4(Ue.matrix), this
      },
      center: function() {
          return this.computeBoundingBox(), this.boundingBox.getCenter(Fe).negate(), this.translate(Fe.x, Fe.y, Fe.z), this
      },
      setFromObject: function(t) {
          const e = t.geometry;
          if (t.isPoints || t.isLine) {
              const t = new Le(3 * e.vertices.length, 3),
                  n = new Le(3 * e.colors.length, 3);
              if (this.setAttribute("position", t.copyVector3sArray(e.vertices)), this.setAttribute("color", n.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
                  const t = new Le(e.lineDistances.length, 1);
                  this.setAttribute("lineDistance", t.copyArray(e.lineDistances))
              }
              null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
          } else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
          return this
      },
      setFromPoints: function(t) {
          const e = [];
          for (let n = 0, i = t.length; n < i; n++) {
              const i = t[n];
              e.push(i.x, i.y, i.z || 0)
          }
          return this.setAttribute("position", new Le(e, 3)), this
      },
      updateFromObject: function(t) {
          let e = t.geometry;
          if (t.isMesh) {
              let t = e.__directGeometry;
              if (!0 === e.elementsNeedUpdate && (t = void 0, e.elementsNeedUpdate = !1), void 0 === t) return this.fromGeometry(e);
              t.verticesNeedUpdate = e.verticesNeedUpdate, t.normalsNeedUpdate = e.normalsNeedUpdate, t.colorsNeedUpdate = e.colorsNeedUpdate, t.uvsNeedUpdate = e.uvsNeedUpdate, t.groupsNeedUpdate = e.groupsNeedUpdate, e.verticesNeedUpdate = !1, e.normalsNeedUpdate = !1, e.colorsNeedUpdate = !1, e.uvsNeedUpdate = !1, e.groupsNeedUpdate = !1, e = t
          }
          if (!0 === e.verticesNeedUpdate) {
              const t = this.attributes.position;
              void 0 !== t && (t.copyVector3sArray(e.vertices), t.needsUpdate = !0), e.verticesNeedUpdate = !1
          }
          if (!0 === e.normalsNeedUpdate) {
              const t = this.attributes.normal;
              void 0 !== t && (t.copyVector3sArray(e.normals), t.needsUpdate = !0), e.normalsNeedUpdate = !1
          }
          if (!0 === e.colorsNeedUpdate) {
              const t = this.attributes.color;
              void 0 !== t && (t.copyColorsArray(e.colors), t.needsUpdate = !0), e.colorsNeedUpdate = !1
          }
          if (e.uvsNeedUpdate) {
              const t = this.attributes.uv;
              void 0 !== t && (t.copyVector2sArray(e.uvs), t.needsUpdate = !0), e.uvsNeedUpdate = !1
          }
          if (e.lineDistancesNeedUpdate) {
              const t = this.attributes.lineDistance;
              void 0 !== t && (t.copyArray(e.lineDistances), t.needsUpdate = !0), e.lineDistancesNeedUpdate = !1
          }
          return e.groupsNeedUpdate && (e.computeGroups(t.geometry), this.groups = e.groups, e.groupsNeedUpdate = !1), this
      },
      fromGeometry: function(t) {
          return t.__directGeometry = (new Pe).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
      },
      fromDirectGeometry: function(t) {
          const e = new Float32Array(3 * t.vertices.length);
          if (this.setAttribute("position", new xe(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
              const e = new Float32Array(3 * t.normals.length);
              this.setAttribute("normal", new xe(e, 3).copyVector3sArray(t.normals))
          }
          if (t.colors.length > 0) {
              const e = new Float32Array(3 * t.colors.length);
              this.setAttribute("color", new xe(e, 3).copyColorsArray(t.colors))
          }
          if (t.uvs.length > 0) {
              const e = new Float32Array(2 * t.uvs.length);
              this.setAttribute("uv", new xe(e, 2).copyVector2sArray(t.uvs))
          }
          if (t.uvs2.length > 0) {
              const e = new Float32Array(2 * t.uvs2.length);
              this.setAttribute("uv2", new xe(e, 2).copyVector2sArray(t.uvs2))
          }
          this.groups = t.groups;
          for (const e in t.morphTargets) {
              const n = [],
                  i = t.morphTargets[e];
              for (let t = 0, e = i.length; t < e; t++) {
                  const e = i[t],
                      r = new Le(3 * e.data.length, 3);
                  r.name = e.name, n.push(r.copyVector3sArray(e.data))
              }
              this.morphAttributes[e] = n
          }
          if (t.skinIndices.length > 0) {
              const e = new Le(4 * t.skinIndices.length, 4);
              this.setAttribute("skinIndex", e.copyVector4sArray(t.skinIndices))
          }
          if (t.skinWeights.length > 0) {
              const e = new Le(4 * t.skinWeights.length, 4);
              this.setAttribute("skinWeight", e.copyVector4sArray(t.skinWeights))
          }
          return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
      },
      computeBoundingBox: function() {
          null === this.boundingBox && (this.boundingBox = new Y);
          const t = this.attributes.position,
              e = this.morphAttributes.position;
          if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingBox.set(new W(-1 / 0, -1 / 0, -1 / 0), new W(1 / 0, 1 / 0, 1 / 0));
          if (void 0 !== t) {
              if (this.boundingBox.setFromBufferAttribute(t), e)
                  for (let t = 0, n = e.length; t < n; t++) {
                      const n = e[t];
                      He.setFromBufferAttribute(n), this.morphTargetsRelative ? (Be.addVectors(this.boundingBox.min, He.min), this.boundingBox.expandByPoint(Be), Be.addVectors(this.boundingBox.max, He.max), this.boundingBox.expandByPoint(Be)) : (this.boundingBox.expandByPoint(He.min), this.boundingBox.expandByPoint(He.max))
                  }
          } else this.boundingBox.makeEmpty();
          (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
      },
      computeBoundingSphere: function() {
          null === this.boundingSphere && (this.boundingSphere = new ht);
          const t = this.attributes.position,
              e = this.morphAttributes.position;
          if (t && t.isGLBufferAttribute) return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), void this.boundingSphere.set(new W, 1 / 0);
          if (t) {
              const n = this.boundingSphere.center;
              if (He.setFromBufferAttribute(t), e)
                  for (let t = 0, n = e.length; t < n; t++) {
                      const n = e[t];
                      ze.setFromBufferAttribute(n), this.morphTargetsRelative ? (Be.addVectors(He.min, ze.min), He.expandByPoint(Be), Be.addVectors(He.max, ze.max), He.expandByPoint(Be)) : (He.expandByPoint(ze.min), He.expandByPoint(ze.max))
                  }
              He.getCenter(n);
              let i = 0;
              for (let e = 0, r = t.count; e < r; e++) Be.fromBufferAttribute(t, e), i = Math.max(i, n.distanceToSquared(Be));
              if (e)
                  for (let r = 0, s = e.length; r < s; r++) {
                      const s = e[r],
                          o = this.morphTargetsRelative;
                      for (let e = 0, r = s.count; e < r; e++) Be.fromBufferAttribute(s, e), o && (Fe.fromBufferAttribute(t, e), Be.add(Fe)), i = Math.max(i, n.distanceToSquared(Be))
                  }
              this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
          }
      },
      computeFaceNormals: function() {},
      computeVertexNormals: function() {
          const t = this.index,
              e = this.getAttribute("position");
          if (void 0 !== e) {
              let n = this.getAttribute("normal");
              if (void 0 === n) n = new xe(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n);
              else
                  for (let t = 0, e = n.count; t < e; t++) n.setXYZ(t, 0, 0, 0);
              const i = new W,
                  r = new W,
                  s = new W,
                  o = new W,
                  a = new W,
                  c = new W,
                  l = new W,
                  h = new W;
              if (t)
                  for (let u = 0, d = t.count; u < d; u += 3) {
                      const d = t.getX(u + 0),
                          p = t.getX(u + 1),
                          f = t.getX(u + 2);
                      i.fromBufferAttribute(e, d), r.fromBufferAttribute(e, p), s.fromBufferAttribute(e, f), l.subVectors(s, r), h.subVectors(i, r), l.cross(h), o.fromBufferAttribute(n, d), a.fromBufferAttribute(n, p), c.fromBufferAttribute(n, f), o.add(l), a.add(l), c.add(l), n.setXYZ(d, o.x, o.y, o.z), n.setXYZ(p, a.x, a.y, a.z), n.setXYZ(f, c.x, c.y, c.z)
                  } else
                      for (let t = 0, o = e.count; t < o; t += 3) i.fromBufferAttribute(e, t + 0), r.fromBufferAttribute(e, t + 1), s.fromBufferAttribute(e, t + 2), l.subVectors(s, r), h.subVectors(i, r), l.cross(h), n.setXYZ(t + 0, l.x, l.y, l.z), n.setXYZ(t + 1, l.x, l.y, l.z), n.setXYZ(t + 2, l.x, l.y, l.z);
              this.normalizeNormals(), n.needsUpdate = !0
          }
      },
      merge: function(t, e) {
          if (!t || !t.isBufferGeometry) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
          void 0 === e && (e = 0, console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
          const n = this.attributes;
          for (const i in n) {
              if (void 0 === t.attributes[i]) continue;
              const r = n[i].array,
                  s = t.attributes[i],
                  o = s.array,
                  a = s.itemSize * e,
                  c = Math.min(o.length, r.length - a);
              for (let t = 0, e = a; t < c; t++, e++) r[e] = o[t]
          }
          return this
      },
      normalizeNormals: function() {
          const t = this.attributes.normal;
          for (let e = 0, n = t.count; e < n; e++) Be.fromBufferAttribute(t, e), Be.normalize(), t.setXYZ(e, Be.x, Be.y, Be.z)
      },
      toNonIndexed: function() {
          function t(t, e) {
              const n = t.array,
                  i = t.itemSize,
                  r = t.normalized,
                  s = new n.constructor(e.length * i);
              let o = 0,
                  a = 0;
              for (let t = 0, r = e.length; t < r; t++) {
                  o = e[t] * i;
                  for (let t = 0; t < i; t++) s[a++] = n[o++]
              }
              return new xe(s, i, r)
          }
          if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
          const e = new Ge,
              n = this.index.array,
              i = this.attributes;
          for (const r in i) {
              const s = t(i[r], n);
              e.setAttribute(r, s)
          }
          const r = this.morphAttributes;
          for (const i in r) {
              const s = [],
                  o = r[i];
              for (let e = 0, i = o.length; e < i; e++) {
                  const i = t(o[e], n);
                  s.push(i)
              }
              e.morphAttributes[i] = s
          }
          e.morphTargetsRelative = this.morphTargetsRelative;
          const s = this.groups;
          for (let t = 0, n = s.length; t < n; t++) {
              const n = s[t];
              e.addGroup(n.start, n.count, n.materialIndex)
          }
          return e
      },
      toJSON: function() {
          const t = {
              metadata: {
                  version: 4.5,
                  type: "BufferGeometry",
                  generator: "BufferGeometry.toJSON"
              }
          };
          if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters) {
              const e = this.parameters;
              for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
              return t
          }
          t.data = {
              attributes: {}
          };
          const e = this.index;
          null !== e && (t.data.index = {
              type: e.array.constructor.name,
              array: Array.prototype.slice.call(e.array)
          });
          const n = this.attributes;
          for (const e in n) {
              const i = n[e],
                  r = i.toJSON(t.data);
              "" !== i.name && (r.name = i.name), t.data.attributes[e] = r
          }
          const i = {};
          let r = !1;
          for (const e in this.morphAttributes) {
              const n = this.morphAttributes[e],
                  s = [];
              for (let e = 0, i = n.length; e < i; e++) {
                  const i = n[e],
                      r = i.toJSON(t.data);
                  "" !== i.name && (r.name = i.name), s.push(r)
              }
              s.length > 0 && (i[e] = s, r = !0)
          }
          r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
          const s = this.groups;
          s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
          const o = this.boundingSphere;
          return null !== o && (t.data.boundingSphere = {
              center: o.center.toArray(),
              radius: o.radius
          }), t
      },
      clone: function() {
          return (new Ge).copy(this)
      },
      copy: function(t) {
          this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
          const e = {};
          this.name = t.name;
          const n = t.index;
          null !== n && this.setIndex(n.clone(e));
          const i = t.attributes;
          for (const t in i) {
              const n = i[t];
              this.setAttribute(t, n.clone(e))
          }
          const r = t.morphAttributes;
          for (const t in r) {
              const n = [],
                  i = r[t];
              for (let t = 0, r = i.length; t < r; t++) n.push(i[t].clone(e));
              this.morphAttributes[t] = n
          }
          this.morphTargetsRelative = t.morphTargetsRelative;
          const s = t.groups;
          for (let t = 0, e = s.length; t < e; t++) {
              const e = s[t];
              this.addGroup(e.start, e.count, e.materialIndex)
          }
          const o = t.boundingBox;
          null !== o && (this.boundingBox = o.clone());
          const a = t.boundingSphere;
          return null !== a && (this.boundingSphere = a.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this
      },
      dispose: function() {
          this.dispatchEvent({
              type: "dispose"
          })
      }
  });
  const ke = new xt,
      Ve = new yt,
      je = new ht,
      We = new W,
      qe = new W,
      Xe = new W,
      Ye = new W,
      Ze = new W,
      Je = new W,
      Ke = new W,
      Qe = new W,
      $e = new W,
      tn = new I,
      en = new I,
      nn = new I,
      rn = new W,
      sn = new W;

  function on(t = new Ge, e = new ge) {
      jt.call(this), this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets()
  }

  function an(t, e, n, i, r, s, o, a) {
      let c;
      if (c = 1 === e.side ? i.intersectTriangle(o, s, r, !0, a) : i.intersectTriangle(r, s, o, 2 !== e.side, a), null === c) return null;
      sn.copy(a), sn.applyMatrix4(t.matrixWorld);
      const l = n.ray.origin.distanceTo(sn);
      return l < n.near || l > n.far ? null : {
          distance: l,
          point: sn.clone(),
          object: t
      }
  }

  function cn(t, e, n, i, r, s, o, a, c, l, h, u) {
      We.fromBufferAttribute(r, l), qe.fromBufferAttribute(r, h), Xe.fromBufferAttribute(r, u);
      const d = t.morphTargetInfluences;
      if (e.morphTargets && s && d) {
          Ke.set(0, 0, 0), Qe.set(0, 0, 0), $e.set(0, 0, 0);
          for (let t = 0, e = s.length; t < e; t++) {
              const e = d[t],
                  n = s[t];
              0 !== e && (Ye.fromBufferAttribute(n, l), Ze.fromBufferAttribute(n, h), Je.fromBufferAttribute(n, u), o ? (Ke.addScaledVector(Ye, e), Qe.addScaledVector(Ze, e), $e.addScaledVector(Je, e)) : (Ke.addScaledVector(Ye.sub(We), e), Qe.addScaledVector(Ze.sub(qe), e), $e.addScaledVector(Je.sub(Xe), e)))
          }
          We.add(Ke), qe.add(Qe), Xe.add($e)
      }
      t.isSkinnedMesh && (t.boneTransform(l, We), t.boneTransform(h, qe), t.boneTransform(u, Xe));
      const p = an(t, e, n, i, We, qe, Xe, rn);
      if (p) {
          a && (tn.fromBufferAttribute(a, l), en.fromBufferAttribute(a, h), nn.fromBufferAttribute(a, u), p.uv = se.getUV(rn, We, qe, Xe, tn, en, nn, new I)), c && (tn.fromBufferAttribute(c, l), en.fromBufferAttribute(c, h), nn.fromBufferAttribute(c, u), p.uv2 = se.getUV(rn, We, qe, Xe, tn, en, nn, new I));
          const t = new pe(l, h, u);
          se.getNormal(We, qe, Xe, t.normal), p.face = t
      }
      return p
  }
  on.prototype = Object.assign(Object.create(jt.prototype), {
      constructor: on,
      isMesh: !0,
      copy: function(t) {
          return jt.prototype.copy.call(this, t), void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = t.material, this.geometry = t.geometry, this
      },
      updateMorphTargets: function() {
          const t = this.geometry;
          if (t.isBufferGeometry) {
              const e = t.morphAttributes,
                  n = Object.keys(e);
              if (n.length > 0) {
                  const t = e[n[0]];
                  if (void 0 !== t) {
                      this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                      for (let e = 0, n = t.length; e < n; e++) {
                          const n = t[e].name || String(e);
                          this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e
                      }
                  }
              }
          } else {
              const e = t.morphTargets;
              void 0 !== e && e.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
          }
      },
      raycast: function(t, e) {
          const n = this.geometry,
              i = this.material,
              r = this.matrixWorld;
          if (void 0 === i) return;
          if (null === n.boundingSphere && n.computeBoundingSphere(), je.copy(n.boundingSphere), je.applyMatrix4(r), !1 === t.ray.intersectsSphere(je)) return;
          if (ke.copy(r).invert(), Ve.copy(t.ray).applyMatrix4(ke), null !== n.boundingBox && !1 === Ve.intersectsBox(n.boundingBox)) return;
          let s;
          if (n.isBufferGeometry) {
              const r = n.index,
                  o = n.attributes.position,
                  a = n.morphAttributes.position,
                  c = n.morphTargetsRelative,
                  l = n.attributes.uv,
                  h = n.attributes.uv2,
                  u = n.groups,
                  d = n.drawRange;
              if (null !== r)
                  if (Array.isArray(i))
                      for (let n = 0, p = u.length; n < p; n++) {
                          const p = u[n],
                              f = i[p.materialIndex];
                          for (let n = Math.max(p.start, d.start), i = Math.min(p.start + p.count, d.start + d.count); n < i; n += 3) {
                              const i = r.getX(n),
                                  u = r.getX(n + 1),
                                  d = r.getX(n + 2);
                              s = cn(this, f, t, Ve, o, a, c, l, h, i, u, d), s && (s.faceIndex = Math.floor(n / 3), s.face.materialIndex = p.materialIndex, e.push(s))
                          }
                      } else
                          for (let n = Math.max(0, d.start), u = Math.min(r.count, d.start + d.count); n < u; n += 3) {
                              const u = r.getX(n),
                                  d = r.getX(n + 1),
                                  p = r.getX(n + 2);
                              s = cn(this, i, t, Ve, o, a, c, l, h, u, d, p), s && (s.faceIndex = Math.floor(n / 3), e.push(s))
                          } else if (void 0 !== o)
                              if (Array.isArray(i))
                                  for (let n = 0, r = u.length; n < r; n++) {
                                      const r = u[n],
                                          p = i[r.materialIndex];
                                      for (let n = Math.max(r.start, d.start), i = Math.min(r.start + r.count, d.start + d.count); n < i; n += 3) s = cn(this, p, t, Ve, o, a, c, l, h, n, n + 1, n + 2), s && (s.faceIndex = Math.floor(n / 3), s.face.materialIndex = r.materialIndex, e.push(s))
                                  } else
                                      for (let n = Math.max(0, d.start), r = Math.min(o.count, d.start + d.count); n < r; n += 3) s = cn(this, i, t, Ve, o, a, c, l, h, n, n + 1, n + 2), s && (s.faceIndex = Math.floor(n / 3), e.push(s))
          } else if (n.isGeometry) {
              const r = Array.isArray(i),
                  o = n.vertices,
                  a = n.faces;
              let c;
              const l = n.faceVertexUvs[0];
              l.length > 0 && (c = l);
              for (let n = 0, l = a.length; n < l; n++) {
                  const l = a[n],
                      h = r ? i[l.materialIndex] : i;
                  if (void 0 === h) continue;
                  const u = o[l.a],
                      d = o[l.b],
                      p = o[l.c];
                  if (s = an(this, h, t, Ve, u, d, p, rn), s) {
                      if (c && c[n]) {
                          const t = c[n];
                          tn.copy(t[0]), en.copy(t[1]), nn.copy(t[2]), s.uv = se.getUV(rn, u, d, p, tn, en, nn, new I)
                      }
                      s.face = l, s.faceIndex = n, e.push(s)
                  }
              }
          }
      }
  });
  class ln extends Ge {
      constructor(t = 1, e = 1, n = 1, i = 1, r = 1, s = 1) {
          super(), this.type = "BoxBufferGeometry", this.parameters = {
              width: t,
              height: e,
              depth: n,
              widthSegments: i,
              heightSegments: r,
              depthSegments: s
          };
          const o = this;
          i = Math.floor(i), r = Math.floor(r), s = Math.floor(s);
          const a = [],
              c = [],
              l = [],
              h = [];
          let u = 0,
              d = 0;

          function p(t, e, n, i, r, s, p, f, m, g, v) {
              const y = s / m,
                  x = p / g,
                  _ = s / 2,
                  b = p / 2,
                  w = f / 2,
                  M = m + 1,
                  S = g + 1;
              let T = 0,
                  E = 0;
              const A = new W;
              for (let s = 0; s < S; s++) {
                  const o = s * x - b;
                  for (let a = 0; a < M; a++) {
                      const u = a * y - _;
                      A[t] = u * i, A[e] = o * r, A[n] = w, c.push(A.x, A.y, A.z), A[t] = 0, A[e] = 0, A[n] = f > 0 ? 1 : -1, l.push(A.x, A.y, A.z), h.push(a / m), h.push(1 - s / g), T += 1
                  }
              }
              for (let t = 0; t < g; t++)
                  for (let e = 0; e < m; e++) {
                      const n = u + e + M * t,
                          i = u + e + M * (t + 1),
                          r = u + (e + 1) + M * (t + 1),
                          s = u + (e + 1) + M * t;
                      a.push(n, i, s), a.push(i, r, s), E += 6
                  }
              o.addGroup(d, E, v), d += E, u += T
          }
          p("z", "y", "x", -1, -1, n, e, t, s, r, 0), p("z", "y", "x", 1, -1, n, e, -t, s, r, 1), p("x", "z", "y", 1, 1, t, n, e, i, s, 2), p("x", "z", "y", 1, -1, t, n, -e, i, s, 3), p("x", "y", "z", 1, -1, t, e, n, i, r, 4), p("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(a), this.setAttribute("position", new Le(c, 3)), this.setAttribute("normal", new Le(l, 3)), this.setAttribute("uv", new Le(h, 2))
      }
  }

  function hn(t) {
      const e = {};
      for (const n in t) {
          e[n] = {};
          for (const i in t[n]) {
              const r = t[n][i];
              r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r
          }
      }
      return e
  }

  function un(t) {
      const e = {};
      for (let n = 0; n < t.length; n++) {
          const i = hn(t[n]);
          for (const t in i) e[t] = i[t]
      }
      return e
  }
  const dn = {
      clone: hn,
      merge: un
  };

  function pn(t) {
      me.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
          derivatives: !1,
          fragDepth: !1,
          drawBuffers: !1,
          shaderTextureLOD: !1
      }, this.defaultAttributeValues = {
          color: [1, 1, 1],
          uv: [0, 0],
          uv2: [0, 0]
      }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t))
  }

  function fn() {
      jt.call(this), this.type = "Camera", this.matrixWorldInverse = new xt, this.projectionMatrix = new xt, this.projectionMatrixInverse = new xt
  }

  function mn(t = 50, e = 1, n = .1, i = 2e3) {
      fn.call(this), this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
  }
  pn.prototype = Object.create(me.prototype), pn.prototype.constructor = pn, pn.prototype.isShaderMaterial = !0, pn.prototype.copy = function(t) {
      return me.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = hn(t.uniforms), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this
  }, pn.prototype.toJSON = function(t) {
      const e = me.prototype.toJSON.call(this, t);
      e.glslVersion = this.glslVersion, e.uniforms = {};
      for (const n in this.uniforms) {
          const i = this.uniforms[n].value;
          i && i.isTexture ? e.uniforms[n] = {
              type: "t",
              value: i.toJSON(t).uuid
          } : i && i.isColor ? e.uniforms[n] = {
              type: "c",
              value: i.getHex()
          } : i && i.isVector2 ? e.uniforms[n] = {
              type: "v2",
              value: i.toArray()
          } : i && i.isVector3 ? e.uniforms[n] = {
              type: "v3",
              value: i.toArray()
          } : i && i.isVector4 ? e.uniforms[n] = {
              type: "v4",
              value: i.toArray()
          } : i && i.isMatrix3 ? e.uniforms[n] = {
              type: "m3",
              value: i.toArray()
          } : i && i.isMatrix4 ? e.uniforms[n] = {
              type: "m4",
              value: i.toArray()
          } : e.uniforms[n] = {
              value: i
          }
      }
      Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
      const n = {};
      for (const t in this.extensions) !0 === this.extensions[t] && (n[t] = !0);
      return Object.keys(n).length > 0 && (e.extensions = n), e
  }, fn.prototype = Object.assign(Object.create(jt.prototype), {
      constructor: fn,
      isCamera: !0,
      copy: function(t, e) {
          return jt.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this
      },
      getWorldDirection: function(t) {
          void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"), t = new W), this.updateWorldMatrix(!0, !1);
          const e = this.matrixWorld.elements;
          return t.set(-e[8], -e[9], -e[10]).normalize()
      },
      updateMatrixWorld: function(t) {
          jt.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
      },
      updateWorldMatrix: function(t, e) {
          jt.prototype.updateWorldMatrix.call(this, t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
      },
      clone: function() {
          return (new this.constructor).copy(this)
      }
  }), mn.prototype = Object.assign(Object.create(fn.prototype), {
      constructor: mn,
      isPerspectiveCamera: !0,
      copy: function(t, e) {
          return fn.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
      },
      setFocalLength: function(t) {
          const e = .5 * this.getFilmHeight() / t;
          this.fov = 2 * O.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
      },
      getFocalLength: function() {
          const t = Math.tan(.5 * O.DEG2RAD * this.fov);
          return .5 * this.getFilmHeight() / t
      },
      getEffectiveFOV: function() {
          return 2 * O.RAD2DEG * Math.atan(Math.tan(.5 * O.DEG2RAD * this.fov) / this.zoom)
      },
      getFilmWidth: function() {
          return this.filmGauge * Math.min(this.aspect, 1)
      },
      getFilmHeight: function() {
          return this.filmGauge / Math.max(this.aspect, 1)
      },
      setViewOffset: function(t, e, n, i, r, s) {
          this.aspect = t / e, null === this.view && (this.view = {
              enabled: !0,
              fullWidth: 1,
              fullHeight: 1,
              offsetX: 0,
              offsetY: 0,
              width: 1,
              height: 1
          }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix()
      },
      clearViewOffset: function() {
          null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
      },
      updateProjectionMatrix: function() {
          const t = this.near;
          let e = t * Math.tan(.5 * O.DEG2RAD * this.fov) / this.zoom,
              n = 2 * e,
              i = this.aspect * n,
              r = -.5 * i;
          const s = this.view;
          if (null !== this.view && this.view.enabled) {
              const t = s.fullWidth,
                  o = s.fullHeight;
              r += s.offsetX * i / t, e -= s.offsetY * n / o, i *= s.width / t, n *= s.height / o
          }
          const o = this.filmOffset;
          0 !== o && (r += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
      },
      toJSON: function(t) {
          const e = jt.prototype.toJSON.call(this, t);
          return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
      }
  });
  const gn = 90;

  function vn(t, e, n) {
      if (jt.call(this), this.type = "CubeCamera", !0 !== n.isWebGLCubeRenderTarget) return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
      this.renderTarget = n;
      const i = new mn(gn, 1, t, e);
      i.layers = this.layers, i.up.set(0, -1, 0), i.lookAt(new W(1, 0, 0)), this.add(i);
      const r = new mn(gn, 1, t, e);
      r.layers = this.layers, r.up.set(0, -1, 0), r.lookAt(new W(-1, 0, 0)), this.add(r);
      const s = new mn(gn, 1, t, e);
      s.layers = this.layers, s.up.set(0, 0, 1), s.lookAt(new W(0, 1, 0)), this.add(s);
      const o = new mn(gn, 1, t, e);
      o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(new W(0, -1, 0)), this.add(o);
      const a = new mn(gn, 1, t, e);
      a.layers = this.layers, a.up.set(0, -1, 0), a.lookAt(new W(0, 0, 1)), this.add(a);
      const c = new mn(gn, 1, t, e);
      c.layers = this.layers, c.up.set(0, -1, 0), c.lookAt(new W(0, 0, -1)), this.add(c), this.update = function(t, e) {
          null === this.parent && this.updateMatrixWorld();
          const l = t.xr.enabled,
              h = t.getRenderTarget();
          t.xr.enabled = !1;
          const u = n.texture.generateMipmaps;
          n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0), t.render(e, i), t.setRenderTarget(n, 1), t.render(e, r), t.setRenderTarget(n, 2), t.render(e, s), t.setRenderTarget(n, 3), t.render(e, o), t.setRenderTarget(n, 4), t.render(e, a), n.texture.generateMipmaps = u, t.setRenderTarget(n, 5), t.render(e, c), t.setRenderTarget(h), t.xr.enabled = l
      }
  }

  function yn(t, e, n, i, r, s, o, a, c, l) {
      t = void 0 !== t ? t : [], e = void 0 !== e ? e : 301, o = void 0 !== o ? o : f, z.call(this, t, e, n, i, r, s, o, a, c, l), this.flipY = !1, this._needsFlipEnvMap = !0
  }

  function xn(t, e, n) {
      Number.isInteger(e) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"), e = n), k.call(this, t, t, e), e = e || {}, this.texture = new yn(void 0, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding), this.texture._needsFlipEnvMap = !1
  }

  function _n(t, e, n, i, s, o, a, c, l, h, u, d) {
      z.call(this, null, o, a, c, l, h, i, s, u, d), this.image = {
          data: t || null,
          width: e || 1,
          height: n || 1
      }, this.magFilter = void 0 !== l ? l : r, this.minFilter = void 0 !== h ? h : r, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.needsUpdate = !0
  }
  vn.prototype = Object.create(jt.prototype), vn.prototype.constructor = vn, yn.prototype = Object.create(z.prototype), yn.prototype.constructor = yn, yn.prototype.isCubeTexture = !0, Object.defineProperty(yn.prototype, "images", {
      get: function() {
          return this.image
      },
      set: function(t) {
          this.image = t
      }
  }), xn.prototype = Object.create(k.prototype), xn.prototype.constructor = xn, xn.prototype.isWebGLCubeRenderTarget = !0, xn.prototype.fromEquirectangularTexture = function(t, e) {
      this.texture.type = e.type, this.texture.format = m, this.texture.encoding = e.encoding, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
      const n = {
              tEquirect: {
                  value: null
              }
          },
          i = "\n\n\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t#include <begin_vertex>\n\t\t\t\t#include <project_vertex>\n\n\t\t\t}\n\t\t",
          r = "\n\n\t\t\tuniform sampler2D tEquirect;\n\n\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t}\n\t\t",
          s = new ln(5, 5, 5),
          o = new pn({
              name: "CubemapFromEquirect",
              uniforms: hn(n),
              vertexShader: i,
              fragmentShader: r,
              side: 1,
              blending: 0
          });
      o.uniforms.tEquirect.value = e;
      const l = new on(s, o),
          h = e.minFilter;
      return e.minFilter === c && (e.minFilter = a), new vn(1, 10, this).update(t, l), e.minFilter = h, l.geometry.dispose(), l.material.dispose(), this
  }, xn.prototype.clear = function(t, e, n, i) {
      const r = t.getRenderTarget();
      for (let r = 0; r < 6; r++) t.setRenderTarget(this, r), t.clear(e, n, i);
      t.setRenderTarget(r)
  }, _n.prototype = Object.create(z.prototype), _n.prototype.constructor = _n, _n.prototype.isDataTexture = !0;
  const bn = new ht,
      wn = new W;
  class Mn {
      constructor(t, e, n, i, r, s) {
          this.planes = [void 0 !== t ? t : new Yt, void 0 !== e ? e : new Yt, void 0 !== n ? n : new Yt, void 0 !== i ? i : new Yt, void 0 !== r ? r : new Yt, void 0 !== s ? s : new Yt]
      }
      set(t, e, n, i, r, s) {
          const o = this.planes;
          return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(s), this
      }
      clone() {
          return (new this.constructor).copy(this)
      }
      copy(t) {
          const e = this.planes;
          for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
          return this
      }
      setFromProjectionMatrix(t) {
          const e = this.planes,
              n = t.elements,
              i = n[0],
              r = n[1],
              s = n[2],
              o = n[3],
              a = n[4],
              c = n[5],
              l = n[6],
              h = n[7],
              u = n[8],
              d = n[9],
              p = n[10],
              f = n[11],
              m = n[12],
              g = n[13],
              v = n[14],
              y = n[15];
          return e[0].setComponents(o - i, h - a, f - u, y - m).normalize(), e[1].setComponents(o + i, h + a, f + u, y + m).normalize(), e[2].setComponents(o + r, h + c, f + d, y + g).normalize(), e[3].setComponents(o - r, h - c, f - d, y - g).normalize(), e[4].setComponents(o - s, h - l, f - p, y - v).normalize(), e[5].setComponents(o + s, h + l, f + p, y + v).normalize(), this
      }
      intersectsObject(t) {
          const e = t.geometry;
          return null === e.boundingSphere && e.computeBoundingSphere(), bn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld), this.intersectsSphere(bn)
      }
      intersectsSprite(t) {
          return bn.center.set(0, 0, 0), bn.radius = .7071067811865476, bn.applyMatrix4(t.matrixWorld), this.intersectsSphere(bn)
      }
      intersectsSphere(t) {
          const e = this.planes,
              n = t.center,
              i = -t.radius;
          for (let t = 0; t < 6; t++)
              if (e[t].distanceToPoint(n) < i) return !1;
          return !0
      }
      intersectsBox(t) {
          const e = this.planes;
          for (let n = 0; n < 6; n++) {
              const i = e[n];
              if (wn.x = i.normal.x > 0 ? t.max.x : t.min.x, wn.y = i.normal.y > 0 ? t.max.y : t.min.y, wn.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(wn) < 0) return !1
          }
          return !0
      }
      containsPoint(t) {
          const e = this.planes;
          for (let n = 0; n < 6; n++)
              if (e[n].distanceToPoint(t) < 0) return !1;
          return !0
      }
  }

  function Sn() {
      let t = null,
          e = !1,
          n = null,
          i = null;

      function r(e, s) {
          n(e, s), i = t.requestAnimationFrame(r)
      }
      return {
          start: function() {
              !0 !== e && null !== n && (i = t.requestAnimationFrame(r), e = !0)
          },
          stop: function() {
              t.cancelAnimationFrame(i), e = !1
          },
          setAnimationLoop: function(t) {
              n = t
          },
          setContext: function(e) {
              t = e
          }
      }
  }

  function Tn(t, e) {
      const n = e.isWebGL2,
          i = new WeakMap;
      return {
          get: function(t) {
              return t.isInterleavedBufferAttribute && (t = t.data), i.get(t)
          },
          remove: function(e) {
              e.isInterleavedBufferAttribute && (e = e.data);
              const n = i.get(e);
              n && (t.deleteBuffer(n.buffer), i.delete(e))
          },
          update: function(e, r) {
              if (e.isGLBufferAttribute) {
                  const t = i.get(e);
                  return void((!t || t.version < e.version) && i.set(e, {
                      buffer: e.buffer,
                      type: e.type,
                      bytesPerElement: e.elementSize,
                      version: e.version
                  }))
              }
              e.isInterleavedBufferAttribute && (e = e.data);
              const s = i.get(e);
              void 0 === s ? i.set(e, function(e, i) {
                  const r = e.array,
                      s = e.usage,
                      o = t.createBuffer();
                  t.bindBuffer(i, o), t.bufferData(i, r, s), e.onUploadCallback();
                  let a = 5126;
                  return r instanceof Float32Array ? a = 5126 : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? e.isFloat16BufferAttribute ? n ? a = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : a = 5123 : r instanceof Int16Array ? a = 5122 : r instanceof Uint32Array ? a = 5125 : r instanceof Int32Array ? a = 5124 : r instanceof Int8Array ? a = 5120 : r instanceof Uint8Array && (a = 5121), {
                      buffer: o,
                      type: a,
                      bytesPerElement: r.BYTES_PER_ELEMENT,
                      version: e.version
                  }
              }(e, r)) : s.version < e.version && (function(e, i, r) {
                  const s = i.array,
                      o = i.updateRange;
                  t.bindBuffer(r, e), -1 === o.count ? t.bufferSubData(r, 0, s) : (n ? t.bufferSubData(r, o.offset * s.BYTES_PER_ELEMENT, s, o.offset, o.count) : t.bufferSubData(r, o.offset * s.BYTES_PER_ELEMENT, s.subarray(o.offset, o.offset + o.count)), o.count = -1)
              }(s.buffer, e, r), s.version = e.version)
          }
      }
  }
  class En extends Ge {
      constructor(t = 1, e = 1, n = 1, i = 1) {
          super(), this.type = "PlaneBufferGeometry", this.parameters = {
              width: t,
              height: e,
              widthSegments: n,
              heightSegments: i
          };
          const r = t / 2,
              s = e / 2,
              o = Math.floor(n),
              a = Math.floor(i),
              c = o + 1,
              l = a + 1,
              h = t / o,
              u = e / a,
              d = [],
              p = [],
              f = [],
              m = [];
          for (let t = 0; t < l; t++) {
              const e = t * u - s;
              for (let n = 0; n < c; n++) {
                  const i = n * h - r;
                  p.push(i, -e, 0), f.push(0, 0, 1), m.push(n / o), m.push(1 - t / a)
              }
          }
          for (let t = 0; t < a; t++)
              for (let e = 0; e < o; e++) {
                  const n = e + c * t,
                      i = e + c * (t + 1),
                      r = e + 1 + c * (t + 1),
                      s = e + 1 + c * t;
                  d.push(n, i, s), d.push(i, r, s)
              }
          this.setIndex(d), this.setAttribute("position", new Le(p, 3)), this.setAttribute("normal", new Le(f, 3)), this.setAttribute("uv", new Le(m, 2))
      }
  }
  const An = {
          alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
          alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
          alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
          aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
          aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
          begin_vertex: "vec3 transformed = vec3( position );",
          beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
          bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
          bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
          clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
          clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
          clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",
          clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",
          color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
          color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
          color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvarying vec3 vColor;\n#endif",
          color_vertex: "#if defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )\n\tvColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n\tvColor.xyz *= color.xyz;\n#endif\n#ifdef USE_INSTANCING_COLOR\n\tvColor.xyz *= instanceColor.xyz;\n#endif",
          common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n\treturn m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n\tfloat u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\tfloat v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\treturn vec2( u, v );\n}",
          cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n\t#define cubeUV_maxMipLevel 8.0\n\t#define cubeUV_minMipLevel 4.0\n\t#define cubeUV_maxTileSize 256.0\n\t#define cubeUV_minTileSize 16.0\n\tfloat getFace( vec3 direction ) {\n\t\tvec3 absDirection = abs( direction );\n\t\tfloat face = - 1.0;\n\t\tif ( absDirection.x > absDirection.z ) {\n\t\t\tif ( absDirection.x > absDirection.y )\n\t\t\t\tface = direction.x > 0.0 ? 0.0 : 3.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t} else {\n\t\t\tif ( absDirection.z > absDirection.y )\n\t\t\t\tface = direction.z > 0.0 ? 2.0 : 5.0;\n\t\t\telse\n\t\t\t\tface = direction.y > 0.0 ? 1.0 : 4.0;\n\t\t}\n\t\treturn face;\n\t}\n\tvec2 getUV( vec3 direction, float face ) {\n\t\tvec2 uv;\n\t\tif ( face == 0.0 ) {\n\t\t\tuv = vec2( direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 1.0 ) {\n\t\t\tuv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n\t\t} else if ( face == 2.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.y ) / abs( direction.z );\n\t\t} else if ( face == 3.0 ) {\n\t\t\tuv = vec2( - direction.z, direction.y ) / abs( direction.x );\n\t\t} else if ( face == 4.0 ) {\n\t\t\tuv = vec2( - direction.x, direction.z ) / abs( direction.y );\n\t\t} else {\n\t\t\tuv = vec2( direction.x, direction.y ) / abs( direction.z );\n\t\t}\n\t\treturn 0.5 * ( uv + 1.0 );\n\t}\n\tvec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\t\tfloat face = getFace( direction );\n\t\tfloat filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\t\tmipInt = max( mipInt, cubeUV_minMipLevel );\n\t\tfloat faceSize = exp2( mipInt );\n\t\tfloat texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );\n\t\tvec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );\n\t\tvec2 f = fract( uv );\n\t\tuv += 0.5 - f;\n\t\tif ( face > 2.0 ) {\n\t\t\tuv.y += faceSize;\n\t\t\tface -= 3.0;\n\t\t}\n\t\tuv.x += face * faceSize;\n\t\tif ( mipInt < cubeUV_maxMipLevel ) {\n\t\t\tuv.y += 2.0 * cubeUV_maxTileSize;\n\t\t}\n\t\tuv.y += filterInt * 2.0 * cubeUV_minTileSize;\n\t\tuv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );\n\t\tuv *= texelSize;\n\t\tvec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x += texelSize;\n\t\tvec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.y += texelSize;\n\t\tvec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tuv.x -= texelSize;\n\t\tvec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;\n\t\tvec3 tm = mix( tl, tr, f.x );\n\t\tvec3 bm = mix( bl, br, f.x );\n\t\treturn mix( tm, bm, f.y );\n\t}\n\t#define r0 1.0\n\t#define v0 0.339\n\t#define m0 - 2.0\n\t#define r1 0.8\n\t#define v1 0.276\n\t#define m1 - 1.0\n\t#define r4 0.4\n\t#define v4 0.046\n\t#define m4 2.0\n\t#define r5 0.305\n\t#define v5 0.016\n\t#define m5 3.0\n\t#define r6 0.21\n\t#define v6 0.0038\n\t#define m6 4.0\n\tfloat roughnessToMip( float roughness ) {\n\t\tfloat mip = 0.0;\n\t\tif ( roughness >= r1 ) {\n\t\t\tmip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;\n\t\t} else if ( roughness >= r4 ) {\n\t\t\tmip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;\n\t\t} else if ( roughness >= r5 ) {\n\t\t\tmip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;\n\t\t} else if ( roughness >= r6 ) {\n\t\t\tmip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;\n\t\t} else {\n\t\t\tmip = - 2.0 * log2( 1.16 * roughness );\t\t}\n\t\treturn mip;\n\t}\n\tvec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\t\tfloat mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );\n\t\tfloat mipF = fract( mip );\n\t\tfloat mipInt = floor( mip );\n\t\tvec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\t\tif ( mipF == 0.0 ) {\n\t\t\treturn vec4( color0, 1.0 );\n\t\t} else {\n\t\t\tvec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\t\t\treturn vec4( mix( color0, color1, mipF ), 1.0 );\n\t\t}\n\t}\n#endif",
          defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
          displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
          displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",
          emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
          emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
          encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
          encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value ) {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
          envmap_fragment: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
          envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",
          envmap_pars_fragment: "#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
          envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
          envmap_physical_pars_fragment: "#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -viewDir, normal );\n\t\t\treflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
          envmap_vertex: "#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
          fog_vertex: "#ifdef USE_FOG\n\tfogDepth = - mvPosition.z;\n#endif",
          fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
          fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
          fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
          gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",
          lightmap_fragment: "#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
          lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
          lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
          lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
          lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
          lights_toon_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
          lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
          lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3 diffuseColor;\n\tvec3 specularColor;\n\tfloat specularShininess;\n\tfloat specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
          lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
          lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3 diffuseColor;\n\tfloat specularRoughness;\n\tvec3 specularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
          lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
          lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
          lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",
          logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
          logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
          logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
          logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
          map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
          map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
          map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
          map_particle_pars_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
          metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
          metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
          morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",
          morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\t\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\t\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
          morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\t\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\t\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\t\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\t\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
          normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
          normal_fragment_maps: "#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
          normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
          clearcoat_normal_fragment_begin: "#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",
          clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",
          clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
          packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
          premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
          project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
          dithering_fragment: "#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
          dithering_pars_fragment: "#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
          roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
          roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
          shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
          shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowNormalBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
          shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0\n\t\tvec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\tvec4 shadowWorldPosition;\n\t#endif\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tshadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
          shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
          skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
          skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
          skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
          skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
          specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
          specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
          tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
          tonemapping_pars_fragment: "#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n\tvec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n\tvec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n\treturn a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tconst mat3 ACESInputMat = mat3(\n\t\tvec3( 0.59719, 0.07600, 0.02840 ),\t\tvec3( 0.35458, 0.90834, 0.13383 ),\n\t\tvec3( 0.04823, 0.01566, 0.83777 )\n\t);\n\tconst mat3 ACESOutputMat = mat3(\n\t\tvec3(  1.60475, -0.10208, -0.00327 ),\t\tvec3( -0.53108,  1.10813, -0.07276 ),\n\t\tvec3( -0.07367, -0.00605,  1.07602 )\n\t);\n\tcolor *= toneMappingExposure / 0.6;\n\tcolor = ACESInputMat * color;\n\tcolor = RRTAndODTFit( color );\n\tcolor = ACESOutputMat * color;\n\treturn saturate( color );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
          transmissionmap_fragment: "#ifdef USE_TRANSMISSIONMAP\n\ttotalTransmission *= texture2D( transmissionMap, vUv ).r;\n#endif",
          transmissionmap_pars_fragment: "#ifdef USE_TRANSMISSIONMAP\n\tuniform sampler2D transmissionMap;\n#endif",
          uv_pars_fragment: "#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",
          uv_pars_vertex: "#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",
          uv_vertex: "#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
          uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
          uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
          uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",
          worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",
          background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
          background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
          cube_frag: "#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
          cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
          depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
          depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
          distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
          distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
          equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV = equirectUv( direction );\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
          equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
          linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
          linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
          meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
          meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
          meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSMISSION\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSMISSION\n\tuniform float transmission;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <transmissionmap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#ifdef TRANSMISSION\n\t\tfloat totalTransmission = transmission;\n\t#endif\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <transmissionmap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSMISSION\n\t\tdiffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
          meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
          normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
          points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
          points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
          shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
          shadow_vert: "#include <common>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
          sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
          sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
      },
      Ln = {
          common: {
              diffuse: {
                  value: new de(15658734)
              },
              opacity: {
                  value: 1
              },
              map: {
                  value: null
              },
              uvTransform: {
                  value: new D
              },
              uv2Transform: {
                  value: new D
              },
              alphaMap: {
                  value: null
              }
          },
          specularmap: {
              specularMap: {
                  value: null
              }
          },
          envmap: {
              envMap: {
                  value: null
              },
              flipEnvMap: {
                  value: -1
              },
              reflectivity: {
                  value: 1
              },
              refractionRatio: {
                  value: .98
              },
              maxMipLevel: {
                  value: 0
              }
          },
          aomap: {
              aoMap: {
                  value: null
              },
              aoMapIntensity: {
                  value: 1
              }
          },
          lightmap: {
              lightMap: {
                  value: null
              },
              lightMapIntensity: {
                  value: 1
              }
          },
          emissivemap: {
              emissiveMap: {
                  value: null
              }
          },
          bumpmap: {
              bumpMap: {
                  value: null
              },
              bumpScale: {
                  value: 1
              }
          },
          normalmap: {
              normalMap: {
                  value: null
              },
              normalScale: {
                  value: new I(1, 1)
              }
          },
          displacementmap: {
              displacementMap: {
                  value: null
              },
              displacementScale: {
                  value: 1
              },
              displacementBias: {
                  value: 0
              }
          },
          roughnessmap: {
              roughnessMap: {
                  value: null
              }
          },
          metalnessmap: {
              metalnessMap: {
                  value: null
              }
          },
          gradientmap: {
              gradientMap: {
                  value: null
              }
          },
          fog: {
              fogDensity: {
                  value: 25e-5
              },
              fogNear: {
                  value: 1
              },
              fogFar: {
                  value: 2e3
              },
              fogColor: {
                  value: new de(16777215)
              }
          },
          lights: {
              ambientLightColor: {
                  value: []
              },
              lightProbe: {
                  value: []
              },
              directionalLights: {
                  value: [],
                  properties: {
                      direction: {},
                      color: {}
                  }
              },
              directionalLightShadows: {
                  value: [],
                  properties: {
                      shadowBias: {},
                      shadowNormalBias: {},
                      shadowRadius: {},
                      shadowMapSize: {}
                  }
              },
              directionalShadowMap: {
                  value: []
              },
              directionalShadowMatrix: {
                  value: []
              },
              spotLights: {
                  value: [],
                  properties: {
                      color: {},
                      position: {},
                      direction: {},
                      distance: {},
                      coneCos: {},
                      penumbraCos: {},
                      decay: {}
                  }
              },
              spotLightShadows: {
                  value: [],
                  properties: {
                      shadowBias: {},
                      shadowNormalBias: {},
                      shadowRadius: {},
                      shadowMapSize: {}
                  }
              },
              spotShadowMap: {
                  value: []
              },
              spotShadowMatrix: {
                  value: []
              },
              pointLights: {
                  value: [],
                  properties: {
                      color: {},
                      position: {},
                      decay: {},
                      distance: {}
                  }
              },
              pointLightShadows: {
                  value: [],
                  properties: {
                      shadowBias: {},
                      shadowNormalBias: {},
                      shadowRadius: {},
                      shadowMapSize: {},
                      shadowCameraNear: {},
                      shadowCameraFar: {}
                  }
              },
              pointShadowMap: {
                  value: []
              },
              pointShadowMatrix: {
                  value: []
              },
              hemisphereLights: {
                  value: [],
                  properties: {
                      direction: {},
                      skyColor: {},
                      groundColor: {}
                  }
              },
              rectAreaLights: {
                  value: [],
                  properties: {
                      color: {},
                      position: {},
                      width: {},
                      height: {}
                  }
              },
              ltc_1: {
                  value: null
              },
              ltc_2: {
                  value: null
              }
          },
          points: {
              diffuse: {
                  value: new de(15658734)
              },
              opacity: {
                  value: 1
              },
              size: {
                  value: 1
              },
              scale: {
                  value: 1
              },
              map: {
                  value: null
              },
              alphaMap: {
                  value: null
              },
              uvTransform: {
                  value: new D
              }
          },
          sprite: {
              diffuse: {
                  value: new de(15658734)
              },
              opacity: {
                  value: 1
              },
              center: {
                  value: new I(.5, .5)
              },
              rotation: {
                  value: 0
              },
              map: {
                  value: null
              },
              alphaMap: {
                  value: null
              },
              uvTransform: {
                  value: new D
              }
          }
      },
      Rn = {
          basic: {
              uniforms: un([Ln.common, Ln.specularmap, Ln.envmap, Ln.aomap, Ln.lightmap, Ln.fog]),
              vertexShader: An.meshbasic_vert,
              fragmentShader: An.meshbasic_frag
          },
          lambert: {
              uniforms: un([Ln.common, Ln.specularmap, Ln.envmap, Ln.aomap, Ln.lightmap, Ln.emissivemap, Ln.fog, Ln.lights, {
                  emissive: {
                      value: new de(0)
                  }
              }]),
              vertexShader: An.meshlambert_vert,
              fragmentShader: An.meshlambert_frag
          },
          phong: {
              uniforms: un([Ln.common, Ln.specularmap, Ln.envmap, Ln.aomap, Ln.lightmap, Ln.emissivemap, Ln.bumpmap, Ln.normalmap, Ln.displacementmap, Ln.fog, Ln.lights, {
                  emissive: {
                      value: new de(0)
                  },
                  specular: {
                      value: new de(1118481)
                  },
                  shininess: {
                      value: 30
                  }
              }]),
              vertexShader: An.meshphong_vert,
              fragmentShader: An.meshphong_frag
          },
          standard: {
              uniforms: un([Ln.common, Ln.envmap, Ln.aomap, Ln.lightmap, Ln.emissivemap, Ln.bumpmap, Ln.normalmap, Ln.displacementmap, Ln.roughnessmap, Ln.metalnessmap, Ln.fog, Ln.lights, {
                  emissive: {
                      value: new de(0)
                  },
                  roughness: {
                      value: 1
                  },
                  metalness: {
                      value: 0
                  },
                  envMapIntensity: {
                      value: 1
                  }
              }]),
              vertexShader: An.meshphysical_vert,
              fragmentShader: An.meshphysical_frag
          },
          toon: {
              uniforms: un([Ln.common, Ln.aomap, Ln.lightmap, Ln.emissivemap, Ln.bumpmap, Ln.normalmap, Ln.displacementmap, Ln.gradientmap, Ln.fog, Ln.lights, {
                  emissive: {
                      value: new de(0)
                  }
              }]),
              vertexShader: An.meshtoon_vert,
              fragmentShader: An.meshtoon_frag
          },
          matcap: {
              uniforms: un([Ln.common, Ln.bumpmap, Ln.normalmap, Ln.displacementmap, Ln.fog, {
                  matcap: {
                      value: null
                  }
              }]),
              vertexShader: An.meshmatcap_vert,
              fragmentShader: An.meshmatcap_frag
          },
          points: {
              uniforms: un([Ln.points, Ln.fog]),
              vertexShader: An.points_vert,
              fragmentShader: An.points_frag
          },
          dashed: {
              uniforms: un([Ln.common, Ln.fog, {
                  scale: {
                      value: 1
                  },
                  dashSize: {
                      value: 1
                  },
                  totalSize: {
                      value: 2
                  }
              }]),
              vertexShader: An.linedashed_vert,
              fragmentShader: An.linedashed_frag
          },
          depth: {
              uniforms: un([Ln.common, Ln.displacementmap]),
              vertexShader: An.depth_vert,
              fragmentShader: An.depth_frag
          },
          normal: {
              uniforms: un([Ln.common, Ln.bumpmap, Ln.normalmap, Ln.displacementmap, {
                  opacity: {
                      value: 1
                  }
              }]),
              vertexShader: An.normal_vert,
              fragmentShader: An.normal_frag
          },
          sprite: {
              uniforms: un([Ln.sprite, Ln.fog]),
              vertexShader: An.sprite_vert,
              fragmentShader: An.sprite_frag
          },
          background: {
              uniforms: {
                  uvTransform: {
                      value: new D
                  },
                  t2D: {
                      value: null
                  }
              },
              vertexShader: An.background_vert,
              fragmentShader: An.background_frag
          },
          cube: {
              uniforms: un([Ln.envmap, {
                  opacity: {
                      value: 1
                  }
              }]),
              vertexShader: An.cube_vert,
              fragmentShader: An.cube_frag
          },
          equirect: {
              uniforms: {
                  tEquirect: {
                      value: null
                  }
              },
              vertexShader: An.equirect_vert,
              fragmentShader: An.equirect_frag
          },
          distanceRGBA: {
              uniforms: un([Ln.common, Ln.displacementmap, {
                  referencePosition: {
                      value: new W
                  },
                  nearDistance: {
                      value: 1
                  },
                  farDistance: {
                      value: 1e3
                  }
              }]),
              vertexShader: An.distanceRGBA_vert,
              fragmentShader: An.distanceRGBA_frag
          },
          shadow: {
              uniforms: un([Ln.lights, Ln.fog, {
                  color: {
                      value: new de(0)
                  },
                  opacity: {
                      value: 1
                  }
              }]),
              vertexShader: An.shadow_vert,
              fragmentShader: An.shadow_frag
          }
      };

  function Pn(t, e, n, i, r) {
      const s = new de(0);
      let o, a, c = 0,
          l = null,
          h = 0,
          u = null;

      function d(t, e) {
          n.buffers.color.setClear(t.r, t.g, t.b, e, r)
      }
      return {
          getClearColor: function() {
              return s
          },
          setClearColor: function(t, e = 1) {
              s.set(t), c = e, d(s, c)
          },
          getClearAlpha: function() {
              return c
          },
          setClearAlpha: function(t) {
              c = t, d(s, c)
          },
          render: function(n, r, p, f) {
              let m = !0 === r.isScene ? r.background : null;
              m && m.isTexture && (m = e.get(m));
              const g = t.xr,
                  v = g.getSession && g.getSession();
              v && "additive" === v.environmentBlendMode && (m = null), null === m ? d(s, c) : m && m.isColor && (d(m, 1), f = !0), (t.autoClear || f) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), m && (m.isCubeTexture || m.isWebGLCubeRenderTarget || 306 === m.mapping) ? (void 0 === a && (a = new on(new ln(1, 1, 1), new pn({
                  name: "BackgroundCubeMaterial",
                  uniforms: hn(Rn.cube.uniforms),
                  vertexShader: Rn.cube.vertexShader,
                  fragmentShader: Rn.cube.fragmentShader,
                  side: 1,
                  depthTest: !1,
                  depthWrite: !1,
                  fog: !1
              })), a.geometry.deleteAttribute("normal"), a.geometry.deleteAttribute("uv"), a.onBeforeRender = function(t, e, n) {
                  this.matrixWorld.copyPosition(n.matrixWorld)
              }, Object.defineProperty(a.material, "envMap", {
                  get: function() {
                      return this.uniforms.envMap.value
                  }
              }), i.update(a)), m.isWebGLCubeRenderTarget && (m = m.texture), a.material.uniforms.envMap.value = m, a.material.uniforms.flipEnvMap.value = m.isCubeTexture && m._needsFlipEnvMap ? -1 : 1, l === m && h === m.version && u === t.toneMapping || (a.material.needsUpdate = !0, l = m, h = m.version, u = t.toneMapping), n.unshift(a, a.geometry, a.material, 0, 0, null)) : m && m.isTexture && (void 0 === o && (o = new on(new En(2, 2), new pn({
                  name: "BackgroundMaterial",
                  uniforms: hn(Rn.background.uniforms),
                  vertexShader: Rn.background.vertexShader,
                  fragmentShader: Rn.background.fragmentShader,
                  side: 0,
                  depthTest: !1,
                  depthWrite: !1,
                  fog: !1
              })), o.geometry.deleteAttribute("normal"), Object.defineProperty(o.material, "map", {
                  get: function() {
                      return this.uniforms.t2D.value
                  }
              }), i.update(o)), o.material.uniforms.t2D.value = m, !0 === m.matrixAutoUpdate && m.updateMatrix(), o.material.uniforms.uvTransform.value.copy(m.matrix), l === m && h === m.version && u === t.toneMapping || (o.material.needsUpdate = !0, l = m, h = m.version, u = t.toneMapping), n.unshift(o, o.geometry, o.material, 0, 0, null))
          }
      }
  }

  function Cn(t, e, n, i) {
      const r = t.getParameter(34921),
          s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"),
          o = i.isWebGL2 || null !== s,
          a = {},
          c = d(null);
      let l = c;

      function h(e) {
          return i.isWebGL2 ? t.bindVertexArray(e) : s.bindVertexArrayOES(e)
      }

      function u(e) {
          return i.isWebGL2 ? t.deleteVertexArray(e) : s.deleteVertexArrayOES(e)
      }

      function d(t) {
          const e = [],
              n = [],
              i = [];
          for (let t = 0; t < r; t++) e[t] = 0, n[t] = 0, i[t] = 0;
          return {
              geometry: null,
              program: null,
              wireframe: !1,
              newAttributes: e,
              enabledAttributes: n,
              attributeDivisors: i,
              object: t,
              attributes: {},
              index: null
          }
      }

      function p() {
          const t = l.newAttributes;
          for (let e = 0, n = t.length; e < n; e++) t[e] = 0
      }

      function f(t) {
          m(t, 0)
      }

      function m(n, r) {
          const s = l.newAttributes,
              o = l.enabledAttributes,
              a = l.attributeDivisors;
          s[n] = 1, 0 === o[n] && (t.enableVertexAttribArray(n), o[n] = 1), a[n] !== r && ((i.isWebGL2 ? t : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](n, r), a[n] = r)
      }

      function g() {
          const e = l.newAttributes,
              n = l.enabledAttributes;
          for (let i = 0, r = n.length; i < r; i++) n[i] !== e[i] && (t.disableVertexAttribArray(i), n[i] = 0)
      }

      function v(e, n, r, s, o, a) {
          !0 !== i.isWebGL2 || 5124 !== r && 5125 !== r ? t.vertexAttribPointer(e, n, r, s, o, a) : t.vertexAttribIPointer(e, n, r, o, a)
      }

      function y() {
          x(), l !== c && (l = c, h(l.object))
      }

      function x() {
          c.geometry = null, c.program = null, c.wireframe = !1
      }
      return {
          setup: function(r, c, u, y, x) {
              let _ = !1;
              if (o) {
                  const e = function(e, n, r) {
                      const o = !0 === r.wireframe;
                      let c = a[e.id];
                      void 0 === c && (c = {}, a[e.id] = c);
                      let l = c[n.id];
                      void 0 === l && (l = {}, c[n.id] = l);
                      let h = l[o];
                      return void 0 === h && (h = d(i.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES()), l[o] = h), h
                  }(y, u, c);
                  l !== e && (l = e, h(l.object)), _ = function(t, e) {
                      const n = l.attributes,
                          i = t.attributes;
                      let r = 0;
                      for (const t in i) {
                          const e = n[t],
                              s = i[t];
                          if (void 0 === e) return !0;
                          if (e.attribute !== s) return !0;
                          if (e.data !== s.data) return !0;
                          r++
                      }
                      return l.attributesNum !== r || l.index !== e
                  }(y, x), _ && function(t, e) {
                      const n = {},
                          i = t.attributes;
                      let r = 0;
                      for (const t in i) {
                          const e = i[t],
                              s = {};
                          s.attribute = e, e.data && (s.data = e.data), n[t] = s, r++
                      }
                      l.attributes = n, l.attributesNum = r, l.index = e
                  }(y, x)
              } else {
                  const t = !0 === c.wireframe;
                  l.geometry === y.id && l.program === u.id && l.wireframe === t || (l.geometry = y.id, l.program = u.id, l.wireframe = t, _ = !0)
              }!0 === r.isInstancedMesh && (_ = !0), null !== x && n.update(x, 34963), _ && (function(r, s, o, a) {
                  if (!1 === i.isWebGL2 && (r.isInstancedMesh || a.isInstancedBufferGeometry) && null === e.get("ANGLE_instanced_arrays")) return;
                  p();
                  const c = a.attributes,
                      l = o.getAttributes(),
                      h = s.defaultAttributeValues;
                  for (const e in l) {
                      const i = l[e];
                      if (i >= 0) {
                          const s = c[e];
                          if (void 0 !== s) {
                              const e = s.normalized,
                                  r = s.itemSize,
                                  o = n.get(s);
                              if (void 0 === o) continue;
                              const c = o.buffer,
                                  l = o.type,
                                  h = o.bytesPerElement;
                              if (s.isInterleavedBufferAttribute) {
                                  const n = s.data,
                                      o = n.stride,
                                      u = s.offset;
                                  n && n.isInstancedInterleavedBuffer ? (m(i, n.meshPerAttribute), void 0 === a._maxInstanceCount && (a._maxInstanceCount = n.meshPerAttribute * n.count)) : f(i), t.bindBuffer(34962, c), v(i, r, l, e, o * h, u * h)
                              } else s.isInstancedBufferAttribute ? (m(i, s.meshPerAttribute), void 0 === a._maxInstanceCount && (a._maxInstanceCount = s.meshPerAttribute * s.count)) : f(i), t.bindBuffer(34962, c), v(i, r, l, e, 0, 0)
                          } else if ("instanceMatrix" === e) {
                              const e = n.get(r.instanceMatrix);
                              if (void 0 === e) continue;
                              const s = e.buffer,
                                  o = e.type;
                              m(i + 0, 1), m(i + 1, 1), m(i + 2, 1), m(i + 3, 1), t.bindBuffer(34962, s), t.vertexAttribPointer(i + 0, 4, o, !1, 64, 0), t.vertexAttribPointer(i + 1, 4, o, !1, 64, 16), t.vertexAttribPointer(i + 2, 4, o, !1, 64, 32), t.vertexAttribPointer(i + 3, 4, o, !1, 64, 48)
                          } else if ("instanceColor" === e) {
                              const e = n.get(r.instanceColor);
                              if (void 0 === e) continue;
                              const s = e.buffer,
                                  o = e.type;
                              m(i, 1), t.bindBuffer(34962, s), t.vertexAttribPointer(i, 3, o, !1, 12, 0)
                          } else if (void 0 !== h) {
                              const n = h[e];
                              if (void 0 !== n) switch (n.length) {
                                  case 2:
                                      t.vertexAttrib2fv(i, n);
                                      break;
                                  case 3:
                                      t.vertexAttrib3fv(i, n);
                                      break;
                                  case 4:
                                      t.vertexAttrib4fv(i, n);
                                      break;
                                  default:
                                      t.vertexAttrib1fv(i, n)
                              }
                          }
                      }
                  }
                  g()
              }(r, c, u, y), null !== x && t.bindBuffer(34963, n.get(x).buffer))
          },
          reset: y,
          resetDefaultState: x,
          dispose: function() {
              y();
              for (const t in a) {
                  const e = a[t];
                  for (const t in e) {
                      const n = e[t];
                      for (const t in n) u(n[t].object), delete n[t];
                      delete e[t]
                  }
                  delete a[t]
              }
          },
          releaseStatesOfGeometry: function(t) {
              if (void 0 === a[t.id]) return;
              const e = a[t.id];
              for (const t in e) {
                  const n = e[t];
                  for (const t in n) u(n[t].object), delete n[t];
                  delete e[t]
              }
              delete a[t.id]
          },
          releaseStatesOfProgram: function(t) {
              for (const e in a) {
                  const n = a[e];
                  if (void 0 === n[t.id]) continue;
                  const i = n[t.id];
                  for (const t in i) u(i[t].object), delete i[t];
                  delete n[t.id]
              }
          },
          initAttributes: p,
          enableAttribute: f,
          disableUnusedAttributes: g
      }
  }

  function Nn(t, e, n, i) {
      const r = i.isWebGL2;
      let s;
      this.setMode = function(t) {
          s = t
      }, this.render = function(e, i) {
          t.drawArrays(s, e, i), n.update(i, s, 1)
      }, this.renderInstances = function(i, o, a) {
          if (0 === a) return;
          let c, l;
          if (r) c = t, l = "drawArraysInstanced";
          else if (c = e.get("ANGLE_instanced_arrays"), l = "drawArraysInstancedANGLE", null === c) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
          c[l](s, i, o, a), n.update(o, s, a)
      }
  }

  function On(t, e, n) {
      let i;

      function r(e) {
          if ("highp" === e) {
              if (t.getShaderPrecisionFormat(35633, 36338).precision > 0 && t.getShaderPrecisionFormat(35632, 36338).precision > 0) return "highp";
              e = "mediump"
          }
          return "mediump" === e && t.getShaderPrecisionFormat(35633, 36337).precision > 0 && t.getShaderPrecisionFormat(35632, 36337).precision > 0 ? "mediump" : "lowp"
      }
      const s = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext || "undefined" != typeof WebGL2ComputeRenderingContext && t instanceof WebGL2ComputeRenderingContext;
      let o = void 0 !== n.precision ? n.precision : "highp";
      const a = r(o);
      a !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", a, "instead."), o = a);
      const c = !0 === n.logarithmicDepthBuffer,
          l = t.getParameter(34930),
          h = t.getParameter(35660),
          u = t.getParameter(3379),
          d = t.getParameter(34076),
          p = t.getParameter(34921),
          f = t.getParameter(36347),
          m = t.getParameter(36348),
          g = t.getParameter(36349),
          v = h > 0,
          y = s || !!e.get("OES_texture_float");
      return {
          isWebGL2: s,
          getMaxAnisotropy: function() {
              if (void 0 !== i) return i;
              const n = e.get("EXT_texture_filter_anisotropic");
              return i = null !== n ? t.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, i
          },
          getMaxPrecision: r,
          precision: o,
          logarithmicDepthBuffer: c,
          maxTextures: l,
          maxVertexTextures: h,
          maxTextureSize: u,
          maxCubemapSize: d,
          maxAttributes: p,
          maxVertexUniforms: f,
          maxVaryings: m,
          maxFragmentUniforms: g,
          vertexTextures: v,
          floatFragmentTextures: y,
          floatVertexTextures: v && y,
          maxSamples: s ? t.getParameter(36183) : 0
      }
  }

  function In(t) {
      const e = this;
      let n = null,
          i = 0,
          r = !1,
          s = !1;
      const o = new Yt,
          a = new D,
          c = {
              value: null,
              needsUpdate: !1
          };

      function l() {
          c.value !== n && (c.value = n, c.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0
      }

      function h(t, n, i, r) {
          const s = null !== t ? t.length : 0;
          let l = null;
          if (0 !== s) {
              if (l = c.value, !0 !== r || null === l) {
                  const e = i + 4 * s,
                      r = n.matrixWorldInverse;
                  a.getNormalMatrix(r), (null === l || l.length < e) && (l = new Float32Array(e));
                  for (let e = 0, n = i; e !== s; ++e, n += 4) o.copy(t[e]).applyMatrix4(r, a), o.normal.toArray(l, n), l[n + 3] = o.constant
              }
              c.value = l, c.needsUpdate = !0
          }
          return e.numPlanes = s, e.numIntersection = 0, l
      }
      this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, e, s) {
          const o = 0 !== t.length || e || 0 !== i || r;
          return r = e, n = h(t, s, 0), i = t.length, o
      }, this.beginShadows = function() {
          s = !0, h(null)
      }, this.endShadows = function() {
          s = !1, l()
      }, this.setState = function(e, o, a) {
          const u = e.clippingPlanes,
              d = e.clipIntersection,
              p = e.clipShadows,
              f = t.get(e);
          if (!r || null === u || 0 === u.length || s && !p) s ? h(null) : l();
          else {
              const t = s ? 0 : i,
                  e = 4 * t;
              let r = f.clippingState || null;
              c.value = r, r = h(u, o, e, a);
              for (let t = 0; t !== e; ++t) r[t] = n[t];
              f.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += t
          }
      }
  }

  function Dn(t) {
      let e = new WeakMap;

      function n(t, e) {
          return 303 === e ? t.mapping = 301 : 304 === e && (t.mapping = 302), t
      }

      function i(t) {
          const n = t.target;
          n.removeEventListener("dispose", i);
          const r = e.get(n);
          void 0 !== r && (e.delete(n), r.dispose())
      }
      return {
          get: function(r) {
              if (r && r.isTexture) {
                  const s = r.mapping;
                  if (303 === s || 304 === s) {
                      if (e.has(r)) return n(e.get(r).texture, r.mapping); {
                          const s = r.image;
                          if (s && s.height > 0) {
                              const o = t.getRenderList(),
                                  a = t.getRenderTarget(),
                                  c = new xn(s.height / 2);
                              return c.fromEquirectangularTexture(t, r), e.set(r, c), t.setRenderTarget(a), t.setRenderList(o), r.addEventListener("dispose", i), n(c.texture, r.mapping)
                          }
                          return null
                      }
                  }
              }
              return r
          },
          dispose: function() {
              e = new WeakMap
          }
      }
  }

  function Un(t) {
      const e = {};
      return {
          has: function(n) {
              if (void 0 !== e[n]) return null !== e[n];
              let i;
              switch (n) {
                  case "WEBGL_depth_texture":
                      i = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                      break;
                  case "EXT_texture_filter_anisotropic":
                      i = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                      break;
                  case "WEBGL_compressed_texture_s3tc":
                      i = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                      break;
                  case "WEBGL_compressed_texture_pvrtc":
                      i = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                      break;
                  default:
                      i = t.getExtension(n)
              }
              return e[n] = i, null !== i
          },
          get: function(t) {
              return this.has(t) || console.warn("THREE.WebGLRenderer: " + t + " extension not supported."), e[t]
          }
      }
  }

  function Fn(t, e, n, i) {
      const r = new WeakMap,
          s = new WeakMap;

      function o(t) {
          const a = t.target,
              c = r.get(a);
          null !== c.index && e.remove(c.index);
          for (const t in c.attributes) e.remove(c.attributes[t]);
          a.removeEventListener("dispose", o), r.delete(a);
          const l = s.get(c);
          l && (e.remove(l), s.delete(c)), i.releaseStatesOfGeometry(c), !0 === a.isInstancedBufferGeometry && delete a._maxInstanceCount, n.memory.geometries--
      }

      function a(t) {
          const n = [],
              i = t.index,
              r = t.attributes.position;
          let o = 0;
          if (null !== i) {
              const t = i.array;
              o = i.version;
              for (let e = 0, i = t.length; e < i; e += 3) {
                  const i = t[e + 0],
                      r = t[e + 1],
                      s = t[e + 2];
                  n.push(i, r, r, s, s, i)
              }
          } else {
              const t = r.array;
              o = r.version;
              for (let e = 0, i = t.length / 3 - 1; e < i; e += 3) {
                  const t = e + 0,
                      i = e + 1,
                      r = e + 2;
                  n.push(t, i, i, r, r, t)
              }
          }
          const a = new(Ce(n) > 65535 ? Ee : Se)(n, 1);
          a.version = o;
          const c = s.get(t);
          c && e.remove(c), s.set(t, a)
      }
      return {
          get: function(t, e) {
              let i = r.get(e);
              return i || (e.addEventListener("dispose", o), e.isBufferGeometry ? i = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new Ge).setFromObject(t)), i = e._bufferGeometry), r.set(e, i), n.memory.geometries++, i)
          },
          update: function(t) {
              const n = t.attributes;
              for (const t in n) e.update(n[t], 34962);
              const i = t.morphAttributes;
              for (const t in i) {
                  const n = i[t];
                  for (let t = 0, i = n.length; t < i; t++) e.update(n[t], 34962)
              }
          },
          getWireframeAttribute: function(t) {
              const e = s.get(t);
              if (e) {
                  const n = t.index;
                  null !== n && e.version < n.version && a(t)
              } else a(t);
              return s.get(t)
          }
      }
  }

  function Hn(t, e, n, i) {
      const r = i.isWebGL2;
      let s, o, a;
      this.setMode = function(t) {
          s = t
      }, this.setIndex = function(t) {
          o = t.type, a = t.bytesPerElement
      }, this.render = function(e, i) {
          t.drawElements(s, i, o, e * a), n.update(i, s, 1)
      }, this.renderInstances = function(i, c, l) {
          if (0 === l) return;
          let h, u;
          if (r) h = t, u = "drawElementsInstanced";
          else if (h = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", null === h) return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
          h[u](s, c, o, i * a, l), n.update(c, s, l)
      }
  }

  function zn(t) {
      const e = {
          frame: 0,
          calls: 0,
          triangles: 0,
          points: 0,
          lines: 0
      };
      return {
          memory: {
              geometries: 0,
              textures: 0
          },
          render: e,
          programs: null,
          autoReset: !0,
          reset: function() {
              e.frame++, e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0
          },
          update: function(t, n, i) {
              switch (e.calls++, n) {
                  case 4:
                      e.triangles += i * (t / 3);
                      break;
                  case 1:
                      e.lines += i * (t / 2);
                      break;
                  case 3:
                      e.lines += i * (t - 1);
                      break;
                  case 2:
                      e.lines += i * t;
                      break;
                  case 0:
                      e.points += i * t;
                      break;
                  default:
                      console.error("THREE.WebGLInfo: Unknown draw mode:", n)
              }
          }
      }
  }

  function Bn(t, e) {
      return t[0] - e[0]
  }

  function Gn(t, e) {
      return Math.abs(e[1]) - Math.abs(t[1])
  }

  function kn(t) {
      const e = {},
          n = new Float32Array(8),
          i = [];
      for (let t = 0; t < 8; t++) i[t] = [t, 0];
      return {
          update: function(r, s, o, a) {
              const c = r.morphTargetInfluences,
                  l = void 0 === c ? 0 : c.length;
              let h = e[s.id];
              if (void 0 === h) {
                  h = [];
                  for (let t = 0; t < l; t++) h[t] = [t, 0];
                  e[s.id] = h
              }
              for (let t = 0; t < l; t++) {
                  const e = h[t];
                  e[0] = t, e[1] = c[t]
              }
              h.sort(Gn);
              for (let t = 0; t < 8; t++) t < l && h[t][1] ? (i[t][0] = h[t][0], i[t][1] = h[t][1]) : (i[t][0] = Number.MAX_SAFE_INTEGER, i[t][1] = 0);
              i.sort(Bn);
              const u = o.morphTargets && s.morphAttributes.position,
                  d = o.morphNormals && s.morphAttributes.normal;
              let p = 0;
              for (let t = 0; t < 8; t++) {
                  const e = i[t],
                      r = e[0],
                      o = e[1];
                  r !== Number.MAX_SAFE_INTEGER && o ? (u && s.getAttribute("morphTarget" + t) !== u[r] && s.setAttribute("morphTarget" + t, u[r]), d && s.getAttribute("morphNormal" + t) !== d[r] && s.setAttribute("morphNormal" + t, d[r]), n[t] = o, p += o) : (u && !0 === s.hasAttribute("morphTarget" + t) && s.deleteAttribute("morphTarget" + t), d && !0 === s.hasAttribute("morphNormal" + t) && s.deleteAttribute("morphNormal" + t), n[t] = 0)
              }
              const f = s.morphTargetsRelative ? 1 : 1 - p;
              a.getUniforms().setValue(t, "morphTargetBaseInfluence", f), a.getUniforms().setValue(t, "morphTargetInfluences", n)
          }
      }
  }

  function Vn(t, e, n, i) {
      let r = new WeakMap;

      function s(t) {
          const e = t.target;
          e.removeEventListener("dispose", s), n.remove(e.instanceMatrix), null !== e.instanceColor && n.remove(e.instanceColor)
      }
      return {
          update: function(t) {
              const o = i.render.frame,
                  a = t.geometry,
                  c = e.get(t, a);
              return r.get(c) !== o && (a.isGeometry && c.updateFromObject(t), e.update(c), r.set(c, o)), t.isInstancedMesh && (!1 === t.hasEventListener("dispose", s) && t.addEventListener("dispose", s), n.update(t.instanceMatrix, 34962), null !== t.instanceColor && n.update(t.instanceColor, 34962)), c
          },
          dispose: function() {
              r = new WeakMap
          }
      }
  }

  function jn(t = null, e = 1, i = 1, s = 1) {
      z.call(this, null), this.image = {
          data: t,
          width: e,
          height: i,
          depth: s
      }, this.magFilter = r, this.minFilter = r, this.wrapR = n, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
  }

  function Wn(t = null, e = 1, i = 1, s = 1) {
      z.call(this, null), this.image = {
          data: t,
          width: e,
          height: i,
          depth: s
      }, this.magFilter = r, this.minFilter = r, this.wrapR = n, this.generateMipmaps = !1, this.flipY = !1, this.needsUpdate = !0
  }
  Rn.physical = {
      uniforms: un([Rn.standard.uniforms, {
          clearcoat: {
              value: 0
          },
          clearcoatMap: {
              value: null
          },
          clearcoatRoughness: {
              value: 0
          },
          clearcoatRoughnessMap: {
              value: null
          },
          clearcoatNormalScale: {
              value: new I(1, 1)
          },
          clearcoatNormalMap: {
              value: null
          },
          sheen: {
              value: new de(0)
          },
          transmission: {
              value: 0
          },
          transmissionMap: {
              value: null
          }
      }]),
      vertexShader: An.meshphysical_vert,
      fragmentShader: An.meshphysical_frag
  }, jn.prototype = Object.create(z.prototype), jn.prototype.constructor = jn, jn.prototype.isDataTexture2DArray = !0, Wn.prototype = Object.create(z.prototype), Wn.prototype.constructor = Wn, Wn.prototype.isDataTexture3D = !0;
  const qn = new z,
      Xn = new jn,
      Yn = new Wn,
      Zn = new yn,
      Jn = [],
      Kn = [],
      Qn = new Float32Array(16),
      $n = new Float32Array(9),
      ti = new Float32Array(4);

  function ei(t, e, n) {
      const i = t[0];
      if (i <= 0 || i > 0) return t;
      const r = e * n;
      let s = Jn[r];
      if (void 0 === s && (s = new Float32Array(r), Jn[r] = s), 0 !== e) {
          i.toArray(s, 0);
          for (let i = 1, r = 0; i !== e; ++i) r += n, t[i].toArray(s, r)
      }
      return s
  }

  function ni(t, e) {
      if (t.length !== e.length) return !1;
      for (let n = 0, i = t.length; n < i; n++)
          if (t[n] !== e[n]) return !1;
      return !0
  }

  function ii(t, e) {
      for (let n = 0, i = e.length; n < i; n++) t[n] = e[n]
  }

  function ri(t, e) {
      let n = Kn[e];
      void 0 === n && (n = new Int32Array(e), Kn[e] = n);
      for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
      return n
  }

  function si(t, e) {
      const n = this.cache;
      n[0] !== e && (t.uniform1f(this.addr, e), n[0] = e)
  }

  function oi(t, e) {
      const n = this.cache;
      if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
      else {
          if (ni(n, e)) return;
          t.uniform2fv(this.addr, e), ii(n, e)
      }
  }

  function ai(t, e) {
      const n = this.cache;
      if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
      else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
      else {
          if (ni(n, e)) return;
          t.uniform3fv(this.addr, e), ii(n, e)
      }
  }

  function ci(t, e) {
      const n = this.cache;
      if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
      else {
          if (ni(n, e)) return;
          t.uniform4fv(this.addr, e), ii(n, e)
      }
  }

  function li(t, e) {
      const n = this.cache,
          i = e.elements;
      if (void 0 === i) {
          if (ni(n, e)) return;
          t.uniformMatrix2fv(this.addr, !1, e), ii(n, e)
      } else {
          if (ni(n, i)) return;
          ti.set(i), t.uniformMatrix2fv(this.addr, !1, ti), ii(n, i)
      }
  }

  function hi(t, e) {
      const n = this.cache,
          i = e.elements;
      if (void 0 === i) {
          if (ni(n, e)) return;
          t.uniformMatrix3fv(this.addr, !1, e), ii(n, e)
      } else {
          if (ni(n, i)) return;
          $n.set(i), t.uniformMatrix3fv(this.addr, !1, $n), ii(n, i)
      }
  }

  function ui(t, e) {
      const n = this.cache,
          i = e.elements;
      if (void 0 === i) {
          if (ni(n, e)) return;
          t.uniformMatrix4fv(this.addr, !1, e), ii(n, e)
      } else {
          if (ni(n, i)) return;
          Qn.set(i), t.uniformMatrix4fv(this.addr, !1, Qn), ii(n, i)
      }
  }

  function di(t, e, n) {
      const i = this.cache,
          r = n.allocateTextureUnit();
      i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTexture2D(e || qn, r)
  }

  function pi(t, e, n) {
      const i = this.cache,
          r = n.allocateTextureUnit();
      i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || Xn, r)
  }

  function fi(t, e, n) {
      const i = this.cache,
          r = n.allocateTextureUnit();
      i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || Yn, r)
  }

  function mi(t, e, n) {
      const i = this.cache,
          r = n.allocateTextureUnit();
      i[0] !== r && (t.uniform1i(this.addr, r), i[0] = r), n.safeSetTextureCube(e || Zn, r)
  }

  function gi(t, e) {
      const n = this.cache;
      n[0] !== e && (t.uniform1i(this.addr, e), n[0] = e)
  }

  function vi(t, e) {
      const n = this.cache;
      ni(n, e) || (t.uniform2iv(this.addr, e), ii(n, e))
  }

  function yi(t, e) {
      const n = this.cache;
      ni(n, e) || (t.uniform3iv(this.addr, e), ii(n, e))
  }

  function xi(t, e) {
      const n = this.cache;
      ni(n, e) || (t.uniform4iv(this.addr, e), ii(n, e))
  }

  function _i(t, e) {
      const n = this.cache;
      n[0] !== e && (t.uniform1ui(this.addr, e), n[0] = e)
  }

  function bi(t, e) {
      t.uniform1fv(this.addr, e)
  }

  function wi(t, e) {
      t.uniform1iv(this.addr, e)
  }

  function Mi(t, e) {
      t.uniform2iv(this.addr, e)
  }

  function Si(t, e) {
      t.uniform3iv(this.addr, e)
  }

  function Ti(t, e) {
      t.uniform4iv(this.addr, e)
  }

  function Ei(t, e) {
      const n = ei(e, this.size, 2);
      t.uniform2fv(this.addr, n)
  }

  function Ai(t, e) {
      const n = ei(e, this.size, 3);
      t.uniform3fv(this.addr, n)
  }

  function Li(t, e) {
      const n = ei(e, this.size, 4);
      t.uniform4fv(this.addr, n)
  }

  function Ri(t, e) {
      const n = ei(e, this.size, 4);
      t.uniformMatrix2fv(this.addr, !1, n)
  }

  function Pi(t, e) {
      const n = ei(e, this.size, 9);
      t.uniformMatrix3fv(this.addr, !1, n)
  }

  function Ci(t, e) {
      const n = ei(e, this.size, 16);
      t.uniformMatrix4fv(this.addr, !1, n)
  }

  function Ni(t, e, n) {
      const i = e.length,
          r = ri(n, i);
      t.uniform1iv(this.addr, r);
      for (let t = 0; t !== i; ++t) n.safeSetTexture2D(e[t] || qn, r[t])
  }

  function Oi(t, e, n) {
      const i = e.length,
          r = ri(n, i);
      t.uniform1iv(this.addr, r);
      for (let t = 0; t !== i; ++t) n.safeSetTextureCube(e[t] || Zn, r[t])
  }

  function Ii(t, e, n) {
      this.id = t, this.addr = n, this.cache = [], this.setValue = function(t) {
          switch (t) {
              case 5126:
                  return si;
              case 35664:
                  return oi;
              case 35665:
                  return ai;
              case 35666:
                  return ci;
              case 35674:
                  return li;
              case 35675:
                  return hi;
              case 35676:
                  return ui;
              case 5124:
              case 35670:
                  return gi;
              case 35667:
              case 35671:
                  return vi;
              case 35668:
              case 35672:
                  return yi;
              case 35669:
              case 35673:
                  return xi;
              case 5125:
                  return _i;
              case 35678:
              case 36198:
              case 36298:
              case 36306:
              case 35682:
                  return di;
              case 35679:
              case 36299:
              case 36307:
                  return fi;
              case 35680:
              case 36300:
              case 36308:
              case 36293:
                  return mi;
              case 36289:
              case 36303:
              case 36311:
              case 36292:
                  return pi
          }
      }(e.type)
  }

  function Di(t, e, n) {
      this.id = t, this.addr = n, this.cache = [], this.size = e.size, this.setValue = function(t) {
          switch (t) {
              case 5126:
                  return bi;
              case 35664:
                  return Ei;
              case 35665:
                  return Ai;
              case 35666:
                  return Li;
              case 35674:
                  return Ri;
              case 35675:
                  return Pi;
              case 35676:
                  return Ci;
              case 5124:
              case 35670:
                  return wi;
              case 35667:
              case 35671:
                  return Mi;
              case 35668:
              case 35672:
                  return Si;
              case 35669:
              case 35673:
                  return Ti;
              case 35678:
              case 36198:
              case 36298:
              case 36306:
              case 35682:
                  return Ni;
              case 35680:
              case 36300:
              case 36308:
              case 36293:
                  return Oi
          }
      }(e.type)
  }

  function Ui(t) {
      this.id = t, this.seq = [], this.map = {}
  }
  Di.prototype.updateCache = function(t) {
      const e = this.cache;
      t instanceof Float32Array && e.length !== t.length && (this.cache = new Float32Array(t.length)), ii(e, t)
  }, Ui.prototype.setValue = function(t, e, n) {
      const i = this.seq;
      for (let r = 0, s = i.length; r !== s; ++r) {
          const s = i[r];
          s.setValue(t, e[s.id], n)
      }
  };
  const Fi = /(\w+)(\])?(\[|\.)?/g;

  function Hi(t, e) {
      t.seq.push(e), t.map[e.id] = e
  }

  function zi(t, e, n) {
      const i = t.name,
          r = i.length;
      for (Fi.lastIndex = 0;;) {
          const s = Fi.exec(i),
              o = Fi.lastIndex;
          let a = s[1];
          const c = "]" === s[2],
              l = s[3];
          if (c && (a |= 0), void 0 === l || "[" === l && o + 2 === r) {
              Hi(n, void 0 === l ? new Ii(a, t, e) : new Di(a, t, e));
              break
          } {
              let t = n.map[a];
              void 0 === t && (t = new Ui(a), Hi(n, t)), n = t
          }
      }
  }

  function Bi(t, e) {
      this.seq = [], this.map = {};
      const n = t.getProgramParameter(e, 35718);
      for (let i = 0; i < n; ++i) {
          const n = t.getActiveUniform(e, i);
          zi(n, t.getUniformLocation(e, n.name), this)
      }
  }

  function Gi(t, e, n) {
      const i = t.createShader(e);
      return t.shaderSource(i, n), t.compileShader(i), i
  }
  Bi.prototype.setValue = function(t, e, n, i) {
      const r = this.map[e];
      void 0 !== r && r.setValue(t, n, i)
  }, Bi.prototype.setOptional = function(t, e, n) {
      const i = e[n];
      void 0 !== i && this.setValue(t, n, i)
  }, Bi.upload = function(t, e, n, i) {
      for (let r = 0, s = e.length; r !== s; ++r) {
          const s = e[r],
              o = n[s.id];
          !1 !== o.needsUpdate && s.setValue(t, o.value, i)
      }
  }, Bi.seqWithValue = function(t, e) {
      const n = [];
      for (let i = 0, r = t.length; i !== r; ++i) {
          const r = t[i];
          r.id in e && n.push(r)
      }
      return n
  };
  let ki = 0;

  function Vi(t) {
      switch (t) {
          case S:
              return ["Linear", "( value )"];
          case T:
              return ["sRGB", "( value )"];
          case 3002:
              return ["RGBE", "( value )"];
          case 3004:
              return ["RGBM", "( value, 7.0 )"];
          case 3005:
              return ["RGBM", "( value, 16.0 )"];
          case 3006:
              return ["RGBD", "( value, 256.0 )"];
          case 3007:
              return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
          case 3003:
              return ["LogLuv", "( value )"];
          default:
              return console.warn("THREE.WebGLProgram: Unsupported encoding:", t), ["Linear", "( value )"]
      }
  }

  function ji(t, e, n) {
      const i = t.getShaderParameter(e, 35713),
          r = t.getShaderInfoLog(e).trim();
      return i && "" === r ? "" : "THREE.WebGLShader: gl.getShaderInfoLog() " + n + "\n" + r + function(t) {
          const e = t.split("\n");
          for (let t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
          return e.join("\n")
      }(t.getShaderSource(e))
  }

  function Wi(t, e) {
      const n = Vi(e);
      return "vec4 " + t + "( vec4 value ) { return " + n[0] + "ToLinear" + n[1] + "; }"
  }

  function qi(t, e) {
      const n = Vi(e);
      return "vec4 " + t + "( vec4 value ) { return LinearTo" + n[0] + n[1] + "; }"
  }

  function Xi(t, e) {
      let n;
      switch (e) {
          case 1:
              n = "Linear";
              break;
          case 2:
              n = "Reinhard";
              break;
          case 3:
              n = "OptimizedCineon";
              break;
          case 4:
              n = "ACESFilmic";
              break;
          case 5:
              n = "Custom";
              break;
          default:
              console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear"
      }
      return "vec3 " + t + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
  }

  function Yi(t) {
      return "" !== t
  }

  function Zi(t, e) {
      return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
  }

  function Ji(t, e) {
      return t.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
  }
  const Ki = /^[ \t]*#include +<([\w\d./]+)>/gm;

  function Qi(t) {
      return t.replace(Ki, $i)
  }

  function $i(t, e) {
      const n = An[e];
      if (void 0 === n) throw new Error("Can not resolve #include <" + e + ">");
      return Qi(n)
  }
  const tr = /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
      er = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

  function nr(t) {
      return t.replace(er, rr).replace(tr, ir)
  }

  function ir(t, e, n, i) {
      return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."), rr(0, e, n, i)
  }

  function rr(t, e, n, i) {
      let r = "";
      for (let t = parseInt(e); t < parseInt(n); t++) r += i.replace(/\[\s*i\s*\]/g, "[ " + t + " ]").replace(/UNROLLED_LOOP_INDEX/g, t);
      return r
  }

  function sr(t) {
      let e = "precision " + t.precision + " float;\nprecision " + t.precision + " int;";
      return "highp" === t.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t.precision && (e += "\n#define LOW_PRECISION"), e
  }

  function or(t, e, n, i) {
      const r = t.getContext(),
          s = n.defines;
      let o = n.vertexShader,
          a = n.fragmentShader;
      const c = function(t) {
              let e = "SHADOWMAP_TYPE_BASIC";
              return 1 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF" : 2 === t.shadowMapType ? e = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t.shadowMapType && (e = "SHADOWMAP_TYPE_VSM"), e
          }(n),
          l = function(t) {
              let e = "ENVMAP_TYPE_CUBE";
              if (t.envMap) switch (t.envMapMode) {
                  case 301:
                  case 302:
                      e = "ENVMAP_TYPE_CUBE";
                      break;
                  case 306:
                  case 307:
                      e = "ENVMAP_TYPE_CUBE_UV"
              }
              return e
          }(n),
          h = function(t) {
              let e = "ENVMAP_MODE_REFLECTION";
              if (t.envMap) switch (t.envMapMode) {
                  case 302:
                  case 307:
                      e = "ENVMAP_MODE_REFRACTION"
              }
              return e
          }(n),
          u = function(t) {
              let e = "ENVMAP_BLENDING_NONE";
              if (t.envMap) switch (t.combine) {
                  case 0:
                      e = "ENVMAP_BLENDING_MULTIPLY";
                      break;
                  case 1:
                      e = "ENVMAP_BLENDING_MIX";
                      break;
                  case 2:
                      e = "ENVMAP_BLENDING_ADD"
              }
              return e
          }(n),
          d = t.gammaFactor > 0 ? t.gammaFactor : 1,
          p = n.isWebGL2 ? "" : function(t) {
              return [t.extensionDerivatives || t.envMapCubeUV || t.bumpMap || t.tangentSpaceNormalMap || t.clearcoatNormalMap || t.flatShading || "physical" === t.shaderID ? "#extension GL_OES_standard_derivatives : enable" : "", (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "", t.extensionDrawBuffers && t.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (t.extensionShaderTextureLOD || t.envMap) && t.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Yi).join("\n")
          }(n),
          f = function(t) {
              const e = [];
              for (const n in t) {
                  const i = t[n];
                  !1 !== i && e.push("#define " + n + " " + i)
              }
              return e.join("\n")
          }(s),
          m = r.createProgram();
      let g, v, y = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
      n.isRawShaderMaterial ? (g = [f].filter(Yi).join("\n"), g.length > 0 && (g += "\n"), v = [p, f].filter(Yi).join("\n"), v.length > 0 && (v += "\n")) : (g = [sr(n), "#define SHADER_NAME " + n.shaderName, f, n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + d, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + h : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + c : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "\tattribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "\tattribute vec3 instanceColor;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Yi).join("\n"), v = [p, sr(n), "#define SHADER_NAME " + n.shaderName, f, n.alphaTest ? "#define ALPHATEST " + n.alphaTest + (n.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + d, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + l : "", n.envMap ? "#define " + h : "", n.envMap ? "#define " + u : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMap && n.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", n.normalMap && n.tangentSpaceNormalMap ? "#define TANGENTSPACE_NORMALMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.sheen ? "#define USE_SHEEN" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.vertexTangents ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "", n.vertexUvs ? "#define USE_UV" : "", n.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + c : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && n.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "", (n.extensionShaderTextureLOD || n.envMap) && n.rendererExtensionShaderTextureLod ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? An.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? Xi("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", An.encodings_pars_fragment, n.map ? Wi("mapTexelToLinear", n.mapEncoding) : "", n.matcap ? Wi("matcapTexelToLinear", n.matcapEncoding) : "", n.envMap ? Wi("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMap ? Wi("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.lightMap ? Wi("lightMapTexelToLinear", n.lightMapEncoding) : "", qi("linearToOutputTexel", n.outputEncoding), n.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Yi).join("\n")), o = Qi(o), o = Zi(o, n), o = Ji(o, n), a = Qi(a), a = Zi(a, n), a = Ji(a, n), o = nr(o), a = nr(a), n.isWebGL2 && !0 !== n.isRawShaderMaterial && (y = "#version 300 es\n", g = ["#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g, v = ["#define varying in", n.glslVersion === R ? "" : "out highp vec4 pc_fragColor;", n.glslVersion === R ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + v);
      const x = y + v + a,
          _ = Gi(r, 35633, y + g + o),
          b = Gi(r, 35632, x);
      if (r.attachShader(m, _), r.attachShader(m, b), void 0 !== n.index0AttributeName ? r.bindAttribLocation(m, 0, n.index0AttributeName) : !0 === n.morphTargets && r.bindAttribLocation(m, 0, "position"), r.linkProgram(m), t.debug.checkShaderErrors) {
          const t = r.getProgramInfoLog(m).trim(),
              e = r.getShaderInfoLog(_).trim(),
              n = r.getShaderInfoLog(b).trim();
          let i = !0,
              s = !0;
          if (!1 === r.getProgramParameter(m, 35714)) {
              i = !1;
              const e = ji(r, _, "vertex"),
                  n = ji(r, b, "fragment");
              console.error("THREE.WebGLProgram: shader error: ", r.getError(), "35715", r.getProgramParameter(m, 35715), "gl.getProgramInfoLog", t, e, n)
          } else "" !== t ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", t) : "" !== e && "" !== n || (s = !1);
          s && (this.diagnostics = {
              runnable: i,
              programLog: t,
              vertexShader: {
                  log: e,
                  prefix: g
              },
              fragmentShader: {
                  log: n,
                  prefix: v
              }
          })
      }
      let w, M;
      return r.deleteShader(_), r.deleteShader(b), this.getUniforms = function() {
          return void 0 === w && (w = new Bi(r, m)), w
      }, this.getAttributes = function() {
          return void 0 === M && (M = function(t, e) {
              const n = {},
                  i = t.getProgramParameter(e, 35721);
              for (let r = 0; r < i; r++) {
                  const i = t.getActiveAttrib(e, r).name;
                  n[i] = t.getAttribLocation(e, i)
              }
              return n
          }(r, m)), M
      }, this.destroy = function() {
          i.releaseStatesOfProgram(this), r.deleteProgram(m), this.program = void 0
      }, this.name = n.shaderName, this.id = ki++, this.cacheKey = e, this.usedTimes = 1, this.program = m, this.vertexShader = _, this.fragmentShader = b, this
  }

  function ar(t, e, n, i, r, s) {
      const o = [],
          a = i.isWebGL2,
          c = i.logarithmicDepthBuffer,
          l = i.floatVertexTextures,
          h = i.maxVertexUniforms,
          u = i.vertexTextures;
      let d = i.precision;
      const p = {
              MeshDepthMaterial: "depth",
              MeshDistanceMaterial: "distanceRGBA",
              MeshNormalMaterial: "normal",
              MeshBasicMaterial: "basic",
              MeshLambertMaterial: "lambert",
              MeshPhongMaterial: "phong",
              MeshToonMaterial: "toon",
              MeshStandardMaterial: "physical",
              MeshPhysicalMaterial: "physical",
              MeshMatcapMaterial: "matcap",
              LineBasicMaterial: "basic",
              LineDashedMaterial: "dashed",
              PointsMaterial: "points",
              ShadowMaterial: "shadow",
              SpriteMaterial: "sprite"
          },
          f = ["precision", "isWebGL2", "supportsVertexTextures", "outputEncoding", "instancing", "instancingColor", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "envMapCubeUV", "lightMap", "lightMapEncoding", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "tangentSpaceNormalMap", "clearcoatMap", "clearcoatRoughnessMap", "clearcoatNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "vertexUvs", "uvsVertexOnly", "fog", "useFog", "fogExp2", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "numDirLightShadows", "numPointLightShadows", "numSpotLightShadows", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering", "sheen", "transmissionMap"];

      function m(t) {
          let e;
          return t && t.isTexture ? e = t.encoding : t && t.isWebGLRenderTarget ? (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), e = t.texture.encoding) : e = S, e
      }
      return {
          getParameters: function(r, o, f, g, v) {
              const y = g.fog,
                  x = r.isMeshStandardMaterial ? g.environment : null,
                  _ = e.get(r.envMap || x),
                  b = p[r.type],
                  w = v.isSkinnedMesh ? function(t) {
                      const e = t.skeleton.bones;
                      if (l) return 1024; {
                          const t = h,
                              n = Math.floor((t - 20) / 4),
                              i = Math.min(n, e.length);
                          return i < e.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + e.length + " bones. This GPU supports " + i + "."), 0) : i
                      }
                  }(v) : 0;
              let M, S;
              if (null !== r.precision && (d = i.getMaxPrecision(r.precision), d !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", d, "instead.")), b) {
                  const t = Rn[b];
                  M = t.vertexShader, S = t.fragmentShader
              } else M = r.vertexShader, S = r.fragmentShader;
              const T = t.getRenderTarget();
              return {
                  isWebGL2: a,
                  shaderID: b,
                  shaderName: r.type,
                  vertexShader: M,
                  fragmentShader: S,
                  defines: r.defines,
                  isRawShaderMaterial: !0 === r.isRawShaderMaterial,
                  glslVersion: r.glslVersion,
                  precision: d,
                  instancing: !0 === v.isInstancedMesh,
                  instancingColor: !0 === v.isInstancedMesh && null !== v.instanceColor,
                  supportsVertexTextures: u,
                  outputEncoding: null !== T ? m(T.texture) : t.outputEncoding,
                  map: !!r.map,
                  mapEncoding: m(r.map),
                  matcap: !!r.matcap,
                  matcapEncoding: m(r.matcap),
                  envMap: !!_,
                  envMapMode: _ && _.mapping,
                  envMapEncoding: m(_),
                  envMapCubeUV: !!_ && (306 === _.mapping || 307 === _.mapping),
                  lightMap: !!r.lightMap,
                  lightMapEncoding: m(r.lightMap),
                  aoMap: !!r.aoMap,
                  emissiveMap: !!r.emissiveMap,
                  emissiveMapEncoding: m(r.emissiveMap),
                  bumpMap: !!r.bumpMap,
                  normalMap: !!r.normalMap,
                  objectSpaceNormalMap: 1 === r.normalMapType,
                  tangentSpaceNormalMap: 0 === r.normalMapType,
                  clearcoatMap: !!r.clearcoatMap,
                  clearcoatRoughnessMap: !!r.clearcoatRoughnessMap,
                  clearcoatNormalMap: !!r.clearcoatNormalMap,
                  displacementMap: !!r.displacementMap,
                  roughnessMap: !!r.roughnessMap,
                  metalnessMap: !!r.metalnessMap,
                  specularMap: !!r.specularMap,
                  alphaMap: !!r.alphaMap,
                  gradientMap: !!r.gradientMap,
                  sheen: !!r.sheen,
                  transmissionMap: !!r.transmissionMap,
                  combine: r.combine,
                  vertexTangents: r.normalMap && r.vertexTangents,
                  vertexColors: r.vertexColors,
                  vertexUvs: !!(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatMap || r.clearcoatRoughnessMap || r.clearcoatNormalMap || r.displacementMap || r.transmissionMap),
                  uvsVertexOnly: !(r.map || r.bumpMap || r.normalMap || r.specularMap || r.alphaMap || r.emissiveMap || r.roughnessMap || r.metalnessMap || r.clearcoatNormalMap || r.transmissionMap || !r.displacementMap),
                  fog: !!y,
                  useFog: r.fog,
                  fogExp2: y && y.isFogExp2,
                  flatShading: r.flatShading,
                  sizeAttenuation: r.sizeAttenuation,
                  logarithmicDepthBuffer: c,
                  skinning: r.skinning && w > 0,
                  maxBones: w,
                  useVertexTexture: l,
                  morphTargets: r.morphTargets,
                  morphNormals: r.morphNormals,
                  maxMorphTargets: t.maxMorphTargets,
                  maxMorphNormals: t.maxMorphNormals,
                  numDirLights: o.directional.length,
                  numPointLights: o.point.length,
                  numSpotLights: o.spot.length,
                  numRectAreaLights: o.rectArea.length,
                  numHemiLights: o.hemi.length,
                  numDirLightShadows: o.directionalShadowMap.length,
                  numPointLightShadows: o.pointShadowMap.length,
                  numSpotLightShadows: o.spotShadowMap.length,
                  numClippingPlanes: s.numPlanes,
                  numClipIntersection: s.numIntersection,
                  dithering: r.dithering,
                  shadowMapEnabled: t.shadowMap.enabled && f.length > 0,
                  shadowMapType: t.shadowMap.type,
                  toneMapping: r.toneMapped ? t.toneMapping : 0,
                  physicallyCorrectLights: t.physicallyCorrectLights,
                  premultipliedAlpha: r.premultipliedAlpha,
                  alphaTest: r.alphaTest,
                  doubleSided: 2 === r.side,
                  flipSided: 1 === r.side,
                  depthPacking: void 0 !== r.depthPacking && r.depthPacking,
                  index0AttributeName: r.index0AttributeName,
                  extensionDerivatives: r.extensions && r.extensions.derivatives,
                  extensionFragDepth: r.extensions && r.extensions.fragDepth,
                  extensionDrawBuffers: r.extensions && r.extensions.drawBuffers,
                  extensionShaderTextureLOD: r.extensions && r.extensions.shaderTextureLOD,
                  rendererExtensionFragDepth: a || n.has("EXT_frag_depth"),
                  rendererExtensionDrawBuffers: a || n.has("WEBGL_draw_buffers"),
                  rendererExtensionShaderTextureLod: a || n.has("EXT_shader_texture_lod"),
                  customProgramCacheKey: r.customProgramCacheKey()
              }
          },
          getProgramCacheKey: function(e) {
              const n = [];
              if (e.shaderID ? n.push(e.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines)
                  for (const t in e.defines) n.push(t), n.push(e.defines[t]);
              if (!1 === e.isRawShaderMaterial) {
                  for (let t = 0; t < f.length; t++) n.push(e[f[t]]);
                  n.push(t.outputEncoding), n.push(t.gammaFactor)
              }
              return n.push(e.customProgramCacheKey), n.join()
          },
          getUniforms: function(t) {
              const e = p[t.type];
              let n;
              if (e) {
                  const t = Rn[e];
                  n = dn.clone(t.uniforms)
              } else n = t.uniforms;
              return n
          },
          acquireProgram: function(e, n) {
              let i;
              for (let t = 0, e = o.length; t < e; t++) {
                  const e = o[t];
                  if (e.cacheKey === n) {
                      i = e, ++i.usedTimes;
                      break
                  }
              }
              return void 0 === i && (i = new or(t, n, e, r), o.push(i)), i
          },
          releaseProgram: function(t) {
              if (0 == --t.usedTimes) {
                  const e = o.indexOf(t);
                  o[e] = o[o.length - 1], o.pop(), t.destroy()
              }
          },
          programs: o
      }
  }

  function cr() {
      let t = new WeakMap;
      return {
          get: function(e) {
              let n = t.get(e);
              return void 0 === n && (n = {}, t.set(e, n)), n
          },
          remove: function(e) {
              t.delete(e)
          },
          update: function(e, n, i) {
              t.get(e)[n] = i
          },
          dispose: function() {
              t = new WeakMap
          }
      }
  }

  function lr(t, e) {
      return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
  }

  function hr(t, e) {
      return t.groupOrder !== e.groupOrder ? t.groupOrder - e.groupOrder : t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
  }

  function ur(t) {
      const e = [];
      let n = 0;
      const i = [],
          r = [],
          s = {
              id: -1
          };

      function o(i, r, o, a, c, l) {
          let h = e[n];
          const u = t.get(o);
          return void 0 === h ? (h = {
              id: i.id,
              object: i,
              geometry: r,
              material: o,
              program: u.program || s,
              groupOrder: a,
              renderOrder: i.renderOrder,
              z: c,
              group: l
          }, e[n] = h) : (h.id = i.id, h.object = i, h.geometry = r, h.material = o, h.program = u.program || s, h.groupOrder = a, h.renderOrder = i.renderOrder, h.z = c, h.group = l), n++, h
      }
      return {
          opaque: i,
          transparent: r,
          init: function() {
              n = 0, i.length = 0, r.length = 0
          },
          push: function(t, e, n, s, a, c) {
              const l = o(t, e, n, s, a, c);
              (!0 === n.transparent ? r : i).push(l)
          },
          unshift: function(t, e, n, s, a, c) {
              const l = o(t, e, n, s, a, c);
              (!0 === n.transparent ? r : i).unshift(l)
          },
          finish: function() {
              for (let t = n, i = e.length; t < i; t++) {
                  const n = e[t];
                  if (null === n.id) break;
                  n.id = null, n.object = null, n.geometry = null, n.material = null, n.program = null, n.group = null
              }
          },
          sort: function(t, e) {
              i.length > 1 && i.sort(t || lr), r.length > 1 && r.sort(e || hr)
          }
      }
  }

  function dr(t) {
      let e = new WeakMap;
      return {
          get: function(n, i) {
              const r = e.get(n);
              let s;
              return void 0 === r ? (s = new ur(t), e.set(n, new WeakMap), e.get(n).set(i, s)) : (s = r.get(i), void 0 === s && (s = new ur(t), r.set(i, s))), s
          },
          dispose: function() {
              e = new WeakMap
          }
      }
  }

  function pr() {
      const t = {};
      return {
          get: function(e) {
              if (void 0 !== t[e.id]) return t[e.id];
              let n;
              switch (e.type) {
                  case "DirectionalLight":
                      n = {
                          direction: new W,
                          color: new de
                      };
                      break;
                  case "SpotLight":
                      n = {
                          position: new W,
                          direction: new W,
                          color: new de,
                          distance: 0,
                          coneCos: 0,
                          penumbraCos: 0,
                          decay: 0
                      };
                      break;
                  case "PointLight":
                      n = {
                          position: new W,
                          color: new de,
                          distance: 0,
                          decay: 0
                      };
                      break;
                  case "HemisphereLight":
                      n = {
                          direction: new W,
                          skyColor: new de,
                          groundColor: new de
                      };
                      break;
                  case "RectAreaLight":
                      n = {
                          color: new de,
                          position: new W,
                          halfWidth: new W,
                          halfHeight: new W
                      }
              }
              return t[e.id] = n, n
          }
      }
  }
  let fr = 0;

  function mr(t, e) {
      return (e.castShadow ? 1 : 0) - (t.castShadow ? 1 : 0)
  }

  function gr(t, e) {
      const n = new pr,
          i = function() {
              const t = {};
              return {
                  get: function(e) {
                      if (void 0 !== t[e.id]) return t[e.id];
                      let n;
                      switch (e.type) {
                          case "DirectionalLight":
                          case "SpotLight":
                              n = {
                                  shadowBias: 0,
                                  shadowNormalBias: 0,
                                  shadowRadius: 1,
                                  shadowMapSize: new I
                              };
                              break;
                          case "PointLight":
                              n = {
                                  shadowBias: 0,
                                  shadowNormalBias: 0,
                                  shadowRadius: 1,
                                  shadowMapSize: new I,
                                  shadowCameraNear: 1,
                                  shadowCameraFar: 1e3
                              }
                      }
                      return t[e.id] = n, n
                  }
              }
          }(),
          r = {
              version: 0,
              hash: {
                  directionalLength: -1,
                  pointLength: -1,
                  spotLength: -1,
                  rectAreaLength: -1,
                  hemiLength: -1,
                  numDirectionalShadows: -1,
                  numPointShadows: -1,
                  numSpotShadows: -1
              },
              ambient: [0, 0, 0],
              probe: [],
              directional: [],
              directionalShadow: [],
              directionalShadowMap: [],
              directionalShadowMatrix: [],
              spot: [],
              spotShadow: [],
              spotShadowMap: [],
              spotShadowMatrix: [],
              rectArea: [],
              rectAreaLTC1: null,
              rectAreaLTC2: null,
              point: [],
              pointShadow: [],
              pointShadowMap: [],
              pointShadowMatrix: [],
              hemi: []
          };
      for (let t = 0; t < 9; t++) r.probe.push(new W);
      const s = new W,
          o = new xt,
          a = new xt;
      return {
          setup: function(s) {
              let o = 0,
                  a = 0,
                  c = 0;
              for (let t = 0; t < 9; t++) r.probe[t].set(0, 0, 0);
              let l = 0,
                  h = 0,
                  u = 0,
                  d = 0,
                  p = 0,
                  f = 0,
                  m = 0,
                  g = 0;
              s.sort(mr);
              for (let t = 0, e = s.length; t < e; t++) {
                  const e = s[t],
                      v = e.color,
                      y = e.intensity,
                      x = e.distance,
                      _ = e.shadow && e.shadow.map ? e.shadow.map.texture : null;
                  if (e.isAmbientLight) o += v.r * y, a += v.g * y, c += v.b * y;
                  else if (e.isLightProbe)
                      for (let t = 0; t < 9; t++) r.probe[t].addScaledVector(e.sh.coefficients[t], y);
                  else if (e.isDirectionalLight) {
                      const t = n.get(e);
                      if (t.color.copy(e.color).multiplyScalar(e.intensity), e.castShadow) {
                          const t = e.shadow,
                              n = i.get(e);
                          n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, r.directionalShadow[l] = n, r.directionalShadowMap[l] = _, r.directionalShadowMatrix[l] = e.shadow.matrix, f++
                      }
                      r.directional[l] = t, l++
                  } else if (e.isSpotLight) {
                      const t = n.get(e);
                      if (t.position.setFromMatrixPosition(e.matrixWorld), t.color.copy(v).multiplyScalar(y), t.distance = x, t.coneCos = Math.cos(e.angle), t.penumbraCos = Math.cos(e.angle * (1 - e.penumbra)), t.decay = e.decay, e.castShadow) {
                          const t = e.shadow,
                              n = i.get(e);
                          n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, r.spotShadow[u] = n, r.spotShadowMap[u] = _, r.spotShadowMatrix[u] = e.shadow.matrix, g++
                      }
                      r.spot[u] = t, u++
                  } else if (e.isRectAreaLight) {
                      const t = n.get(e);
                      t.color.copy(v).multiplyScalar(y), t.halfWidth.set(.5 * e.width, 0, 0), t.halfHeight.set(0, .5 * e.height, 0), r.rectArea[d] = t, d++
                  } else if (e.isPointLight) {
                      const t = n.get(e);
                      if (t.color.copy(e.color).multiplyScalar(e.intensity), t.distance = e.distance, t.decay = e.decay, e.castShadow) {
                          const t = e.shadow,
                              n = i.get(e);
                          n.shadowBias = t.bias, n.shadowNormalBias = t.normalBias, n.shadowRadius = t.radius, n.shadowMapSize = t.mapSize, n.shadowCameraNear = t.camera.near, n.shadowCameraFar = t.camera.far, r.pointShadow[h] = n, r.pointShadowMap[h] = _, r.pointShadowMatrix[h] = e.shadow.matrix, m++
                      }
                      r.point[h] = t, h++
                  } else if (e.isHemisphereLight) {
                      const t = n.get(e);
                      t.skyColor.copy(e.color).multiplyScalar(y), t.groundColor.copy(e.groundColor).multiplyScalar(y), r.hemi[p] = t, p++
                  }
              }
              d > 0 && (e.isWebGL2 || !0 === t.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = Ln.LTC_FLOAT_1, r.rectAreaLTC2 = Ln.LTC_FLOAT_2) : !0 === t.has("OES_texture_half_float_linear") ? (r.rectAreaLTC1 = Ln.LTC_HALF_1, r.rectAreaLTC2 = Ln.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = o, r.ambient[1] = a, r.ambient[2] = c;
              const v = r.hash;
              v.directionalLength === l && v.pointLength === h && v.spotLength === u && v.rectAreaLength === d && v.hemiLength === p && v.numDirectionalShadows === f && v.numPointShadows === m && v.numSpotShadows === g || (r.directional.length = l, r.spot.length = u, r.rectArea.length = d, r.point.length = h, r.hemi.length = p, r.directionalShadow.length = f, r.directionalShadowMap.length = f, r.pointShadow.length = m, r.pointShadowMap.length = m, r.spotShadow.length = g, r.spotShadowMap.length = g, r.directionalShadowMatrix.length = f, r.pointShadowMatrix.length = m, r.spotShadowMatrix.length = g, v.directionalLength = l, v.pointLength = h, v.spotLength = u, v.rectAreaLength = d, v.hemiLength = p, v.numDirectionalShadows = f, v.numPointShadows = m, v.numSpotShadows = g, r.version = fr++)
          },
          setupView: function(t, e) {
              let n = 0,
                  i = 0,
                  c = 0,
                  l = 0,
                  h = 0;
              const u = e.matrixWorldInverse;
              for (let e = 0, d = t.length; e < d; e++) {
                  const d = t[e];
                  if (d.isDirectionalLight) {
                      const t = r.directional[n];
                      t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), n++
                  } else if (d.isSpotLight) {
                      const t = r.spot[c];
                      t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), t.direction.setFromMatrixPosition(d.matrixWorld), s.setFromMatrixPosition(d.target.matrixWorld), t.direction.sub(s), t.direction.transformDirection(u), c++
                  } else if (d.isRectAreaLight) {
                      const t = r.rectArea[l];
                      t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), a.identity(), o.copy(d.matrixWorld), o.premultiply(u), a.extractRotation(o), t.halfWidth.set(.5 * d.width, 0, 0), t.halfHeight.set(0, .5 * d.height, 0), t.halfWidth.applyMatrix4(a), t.halfHeight.applyMatrix4(a), l++
                  } else if (d.isPointLight) {
                      const t = r.point[i];
                      t.position.setFromMatrixPosition(d.matrixWorld), t.position.applyMatrix4(u), i++
                  } else if (d.isHemisphereLight) {
                      const t = r.hemi[h];
                      t.direction.setFromMatrixPosition(d.matrixWorld), t.direction.transformDirection(u), t.direction.normalize(), h++
                  }
              }
          },
          state: r
      }
  }

  function vr(t, e) {
      const n = new gr(t, e),
          i = [],
          r = [];
      return {
          init: function() {
              i.length = 0, r.length = 0
          },
          state: {
              lightsArray: i,
              shadowsArray: r,
              lights: n
          },
          setupLights: function() {
              n.setup(i)
          },
          setupLightsView: function(t) {
              n.setupView(i, t)
          },
          pushLight: function(t) {
              i.push(t)
          },
          pushShadow: function(t) {
              r.push(t)
          }
      }
  }

  function yr(t, e) {
      let n = new WeakMap;
      return {
          get: function(i, r = 0) {
              let s;
              return !1 === n.has(i) ? (s = new vr(t, e), n.set(i, []), n.get(i).push(s)) : r >= n.get(i).length ? (s = new vr(t, e), n.get(i).push(s)) : s = n.get(i)[r], s
          },
          dispose: function() {
              n = new WeakMap
          }
      }
  }

  function xr(t) {
      me.call(this), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.setValues(t)
  }

  function _r(t) {
      me.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new W, this.nearDistance = 1, this.farDistance = 1e3, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.fog = !1, this.setValues(t)
  }

  function br(t, e, n) {
      let i = new Mn;
      const s = new I,
          o = new I,
          c = new G,
          l = [],
          h = [],
          u = {},
          d = {
              0: 1,
              1: 0,
              2: 2
          },
          p = new pn({
              defines: {
                  SAMPLE_RATE: 2 / 8,
                  HALF_SAMPLE_RATE: 1 / 8
              },
              uniforms: {
                  shadow_pass: {
                      value: null
                  },
                  resolution: {
                      value: new I
                  },
                  radius: {
                      value: 4
                  }
              },
              vertexShader: "void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",
              fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n\tfloat mean = 0.0;\n\tfloat squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );\n\tfor ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n\t\t#ifdef HORIZONTAL_PASS\n\t\t\tvec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n\t\t\tmean += distribution.x;\n\t\t\tsquared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n\t\t#else\n\t\t\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );\n\t\t\tmean += depth;\n\t\t\tsquared_mean += depth * depth;\n\t\t#endif\n\t}\n\tmean = mean * HALF_SAMPLE_RATE;\n\tsquared_mean = squared_mean * HALF_SAMPLE_RATE;\n\tfloat std_dev = sqrt( squared_mean - mean * mean );\n\tgl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"
          }),
          f = p.clone();
      f.defines.HORIZONTAL_PASS = 1;
      const g = new Ge;
      g.setAttribute("position", new xe(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
      const v = new on(g, p),
          y = this;

      function x(n, i) {
          const r = e.update(v);
          p.uniforms.shadow_pass.value = n.map.texture, p.uniforms.resolution.value = n.mapSize, p.uniforms.radius.value = n.radius, t.setRenderTarget(n.mapPass), t.clear(), t.renderBufferDirect(i, null, r, p, v, null), f.uniforms.shadow_pass.value = n.mapPass.texture, f.uniforms.resolution.value = n.mapSize, f.uniforms.radius.value = n.radius, t.setRenderTarget(n.map), t.clear(), t.renderBufferDirect(i, null, r, f, v, null)
      }

      function _(t, e, n) {
          const i = t << 0 | e << 1 | n << 2;
          let r = l[i];
          return void 0 === r && (r = new xr({
              depthPacking: 3201,
              morphTargets: t,
              skinning: e
          }), l[i] = r), r
      }

      function b(t, e, n) {
          const i = t << 0 | e << 1 | n << 2;
          let r = h[i];
          return void 0 === r && (r = new _r({
              morphTargets: t,
              skinning: e
          }), h[i] = r), r
      }

      function w(e, n, i, r, s, o, a) {
          let c = null,
              l = _,
              h = e.customDepthMaterial;
          if (!0 === r.isPointLight && (l = b, h = e.customDistanceMaterial), void 0 === h) {
              let t = !1;
              !0 === i.morphTargets && (t = n.morphAttributes && n.morphAttributes.position && n.morphAttributes.position.length > 0);
              let r = !1;
              !0 === e.isSkinnedMesh && (!0 === i.skinning ? r = !0 : console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e)), c = l(t, r, !0 === e.isInstancedMesh)
          } else c = h;
          if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
              const t = c.uuid,
                  e = i.uuid;
              let n = u[t];
              void 0 === n && (n = {}, u[t] = n);
              let r = n[e];
              void 0 === r && (r = c.clone(), n[e] = r), c = r
          }
          return c.visible = i.visible, c.wireframe = i.wireframe, c.side = 3 === a ? null !== i.shadowSide ? i.shadowSide : i.side : null !== i.shadowSide ? i.shadowSide : d[i.side], c.clipShadows = i.clipShadows, c.clippingPlanes = i.clippingPlanes, c.clipIntersection = i.clipIntersection, c.wireframeLinewidth = i.wireframeLinewidth, c.linewidth = i.linewidth, !0 === r.isPointLight && !0 === c.isMeshDistanceMaterial && (c.referencePosition.setFromMatrixPosition(r.matrixWorld), c.nearDistance = s, c.farDistance = o), c
      }

      function M(n, r, s, o, a) {
          if (!1 === n.visible) return;
          if (n.layers.test(r.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && 3 === a) && (!n.frustumCulled || i.intersectsObject(n))) {
              n.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, n.matrixWorld);
              const i = e.update(n),
                  r = n.material;
              if (Array.isArray(r)) {
                  const e = i.groups;
                  for (let c = 0, l = e.length; c < l; c++) {
                      const l = e[c],
                          h = r[l.materialIndex];
                      if (h && h.visible) {
                          const e = w(n, i, h, o, s.near, s.far, a);
                          t.renderBufferDirect(s, null, i, e, n, l)
                      }
                  }
              } else if (r.visible) {
                  const e = w(n, i, r, o, s.near, s.far, a);
                  t.renderBufferDirect(s, null, i, e, n, null)
              }
          }
          const c = n.children;
          for (let t = 0, e = c.length; t < e; t++) M(c[t], r, s, o, a)
      }
      this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.render = function(e, l, h) {
          if (!1 === y.enabled) return;
          if (!1 === y.autoUpdate && !1 === y.needsUpdate) return;
          if (0 === e.length) return;
          const u = t.getRenderTarget(),
              d = t.getActiveCubeFace(),
              p = t.getActiveMipmapLevel(),
              f = t.state;
          f.setBlending(0), f.buffers.color.setClear(1, 1, 1, 1), f.buffers.depth.setTest(!0), f.setScissorTest(!1);
          for (let u = 0, d = e.length; u < d; u++) {
              const d = e[u],
                  p = d.shadow;
              if (void 0 === p) {
                  console.warn("THREE.WebGLShadowMap:", d, "has no shadow.");
                  continue
              }
              if (!1 === p.autoUpdate && !1 === p.needsUpdate) continue;
              s.copy(p.mapSize);
              const g = p.getFrameExtents();
              if (s.multiply(g), o.copy(p.mapSize), (s.x > n || s.y > n) && (s.x > n && (o.x = Math.floor(n / g.x), s.x = o.x * g.x, p.mapSize.x = o.x), s.y > n && (o.y = Math.floor(n / g.y), s.y = o.y * g.y, p.mapSize.y = o.y)), null === p.map && !p.isPointLightShadow && 3 === this.type) {
                  const t = {
                      minFilter: a,
                      magFilter: a,
                      format: m
                  };
                  p.map = new k(s.x, s.y, t), p.map.texture.name = d.name + ".shadowMap", p.mapPass = new k(s.x, s.y, t), p.camera.updateProjectionMatrix()
              }
              if (null === p.map) {
                  const t = {
                      minFilter: r,
                      magFilter: r,
                      format: m
                  };
                  p.map = new k(s.x, s.y, t), p.map.texture.name = d.name + ".shadowMap", p.camera.updateProjectionMatrix()
              }
              t.setRenderTarget(p.map), t.clear();
              const v = p.getViewportCount();
              for (let t = 0; t < v; t++) {
                  const e = p.getViewport(t);
                  c.set(o.x * e.x, o.y * e.y, o.x * e.z, o.y * e.w), f.viewport(c), p.updateMatrices(d, t), i = p.getFrustum(), M(l, h, p.camera, d, this.type)
              }
              p.isPointLightShadow || 3 !== this.type || x(p, h), p.needsUpdate = !1
          }
          y.needsUpdate = !1, t.setRenderTarget(u, d, p)
      }
  }

  function wr(e, n, i) {
      const r = i.isWebGL2,
          s = new function() {
              let t = !1;
              const n = new G;
              let i = null;
              const r = new G(0, 0, 0, 0);
              return {
                  setMask: function(n) {
                      i === n || t || (e.colorMask(n, n, n, n), i = n)
                  },
                  setLocked: function(e) {
                      t = e
                  },
                  setClear: function(t, i, s, o, a) {
                      !0 === a && (t *= o, i *= o, s *= o), n.set(t, i, s, o), !1 === r.equals(n) && (e.clearColor(t, i, s, o), r.copy(n))
                  },
                  reset: function() {
                      t = !1, i = null, r.set(-1, 0, 0, 0)
                  }
              }
          },
          o = new function() {
              let t = !1,
                  n = null,
                  i = null,
                  r = null;
              return {
                  setTest: function(t) {
                      t ? I(2929) : D(2929)
                  },
                  setMask: function(i) {
                      n === i || t || (e.depthMask(i), n = i)
                  },
                  setFunc: function(t) {
                      if (i !== t) {
                          if (t) switch (t) {
                              case 0:
                                  e.depthFunc(512);
                                  break;
                              case 1:
                                  e.depthFunc(519);
                                  break;
                              case 2:
                                  e.depthFunc(513);
                                  break;
                              case 3:
                                  e.depthFunc(515);
                                  break;
                              case 4:
                                  e.depthFunc(514);
                                  break;
                              case 5:
                                  e.depthFunc(518);
                                  break;
                              case 6:
                                  e.depthFunc(516);
                                  break;
                              case 7:
                                  e.depthFunc(517);
                                  break;
                              default:
                                  e.depthFunc(515)
                          } else e.depthFunc(515);
                          i = t
                      }
                  },
                  setLocked: function(e) {
                      t = e
                  },
                  setClear: function(t) {
                      r !== t && (e.clearDepth(t), r = t)
                  },
                  reset: function() {
                      t = !1, n = null, i = null, r = null
                  }
              }
          },
          a = new function() {
              let t = !1,
                  n = null,
                  i = null,
                  r = null,
                  s = null,
                  o = null,
                  a = null,
                  c = null,
                  l = null;
              return {
                  setTest: function(e) {
                      t || (e ? I(2960) : D(2960))
                  },
                  setMask: function(i) {
                      n === i || t || (e.stencilMask(i), n = i)
                  },
                  setFunc: function(t, n, o) {
                      i === t && r === n && s === o || (e.stencilFunc(t, n, o), i = t, r = n, s = o)
                  },
                  setOp: function(t, n, i) {
                      o === t && a === n && c === i || (e.stencilOp(t, n, i), o = t, a = n, c = i)
                  },
                  setLocked: function(e) {
                      t = e
                  },
                  setClear: function(t) {
                      l !== t && (e.clearStencil(t), l = t)
                  },
                  reset: function() {
                      t = !1, n = null, i = null, r = null, s = null, o = null, a = null, c = null, l = null
                  }
              }
          };
      let c = {},
          l = null,
          h = null,
          u = null,
          d = null,
          p = null,
          f = null,
          m = null,
          g = null,
          v = null,
          y = !1,
          x = null,
          _ = null,
          b = null,
          w = null,
          M = null;
      const S = e.getParameter(35661);
      let T = !1,
          E = 0;
      const A = e.getParameter(7938); - 1 !== A.indexOf("WebGL") ? (E = parseFloat(/^WebGL (\d)/.exec(A)[1]), T = E >= 1) : -1 !== A.indexOf("OpenGL ES") && (E = parseFloat(/^OpenGL ES (\d)/.exec(A)[1]), T = E >= 2);
      let L = null,
          R = {};
      const P = new G,
          C = new G;

      function N(t, n, i) {
          const r = new Uint8Array(4),
              s = e.createTexture();
          e.bindTexture(t, s), e.texParameteri(t, 10241, 9728), e.texParameteri(t, 10240, 9728);
          for (let t = 0; t < i; t++) e.texImage2D(n + t, 0, 6408, 1, 1, 0, 6408, 5121, r);
          return s
      }
      const O = {};

      function I(t) {
          !0 !== c[t] && (e.enable(t), c[t] = !0)
      }

      function D(t) {
          !1 !== c[t] && (e.disable(t), c[t] = !1)
      }
      O[3553] = N(3553, 3553, 1), O[34067] = N(34067, 34069, 6), s.setClear(0, 0, 0, 1), o.setClear(1), a.setClear(0), I(2929), o.setFunc(3), z(!1), B(1), I(2884), H(0);
      const U = {
          [t]: 32774,
          101: 32778,
          102: 32779
      };
      if (r) U[103] = 32775, U[104] = 32776;
      else {
          const t = n.get("EXT_blend_minmax");
          null !== t && (U[103] = t.MIN_EXT, U[104] = t.MAX_EXT)
      }
      const F = {
          200: 0,
          201: 1,
          202: 768,
          204: 770,
          210: 776,
          208: 774,
          206: 772,
          203: 769,
          205: 771,
          209: 775,
          207: 773
      };

      function H(n, i, r, s, o, a, c, l) {
          if (0 !== n) {
              if (h || (I(3042), h = !0), 5 === n) o = o || i, a = a || r, c = c || s, i === d && o === m || (e.blendEquationSeparate(U[i], U[o]), d = i, m = o), r === p && s === f && a === g && c === v || (e.blendFuncSeparate(F[r], F[s], F[a], F[c]), p = r, f = s, g = a, v = c), u = n, y = null;
              else if (n !== u || l !== y) {
                  if (d === t && m === t || (e.blendEquation(32774), d = t, m = t), l) switch (n) {
                      case 1:
                          e.blendFuncSeparate(1, 771, 1, 771);
                          break;
                      case 2:
                          e.blendFunc(1, 1);
                          break;
                      case 3:
                          e.blendFuncSeparate(0, 0, 769, 771);
                          break;
                      case 4:
                          e.blendFuncSeparate(0, 768, 0, 770);
                          break;
                      default:
                          console.error("THREE.WebGLState: Invalid blending: ", n)
                  } else switch (n) {
                      case 1:
                          e.blendFuncSeparate(770, 771, 1, 771);
                          break;
                      case 2:
                          e.blendFunc(770, 1);
                          break;
                      case 3:
                          e.blendFunc(0, 769);
                          break;
                      case 4:
                          e.blendFunc(0, 768);
                          break;
                      default:
                          console.error("THREE.WebGLState: Invalid blending: ", n)
                  }
                  p = null, f = null, g = null, v = null, u = n, y = l
              }
          } else h && (D(3042), h = !1)
      }

      function z(t) {
          x !== t && (t ? e.frontFace(2304) : e.frontFace(2305), x = t)
      }

      function B(t) {
          0 !== t ? (I(2884), t !== _ && (1 === t ? e.cullFace(1029) : 2 === t ? e.cullFace(1028) : e.cullFace(1032))) : D(2884), _ = t
      }

      function k(t, n, i) {
          t ? (I(32823), w === n && M === i || (e.polygonOffset(n, i), w = n, M = i)) : D(32823)
      }

      function V(t) {
          void 0 === t && (t = 33984 + S - 1), L !== t && (e.activeTexture(t), L = t)
      }
      return {
          buffers: {
              color: s,
              depth: o,
              stencil: a
          },
          enable: I,
          disable: D,
          useProgram: function(t) {
              return l !== t && (e.useProgram(t), l = t, !0)
          },
          setBlending: H,
          setMaterial: function(t, e) {
              2 === t.side ? D(2884) : I(2884);
              let n = 1 === t.side;
              e && (n = !n), z(n), 1 === t.blending && !1 === t.transparent ? H(0) : H(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha), o.setFunc(t.depthFunc), o.setTest(t.depthTest), o.setMask(t.depthWrite), s.setMask(t.colorWrite);
              const i = t.stencilWrite;
              a.setTest(i), i && (a.setMask(t.stencilWriteMask), a.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), a.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), k(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
          },
          setFlipSided: z,
          setCullFace: B,
          setLineWidth: function(t) {
              t !== b && (T && e.lineWidth(t), b = t)
          },
          setPolygonOffset: k,
          setScissorTest: function(t) {
              t ? I(3089) : D(3089)
          },
          activeTexture: V,
          bindTexture: function(t, n) {
              null === L && V();
              let i = R[L];
              void 0 === i && (i = {
                  type: void 0,
                  texture: void 0
              }, R[L] = i), i.type === t && i.texture === n || (e.bindTexture(t, n || O[t]), i.type = t, i.texture = n)
          },
          unbindTexture: function() {
              const t = R[L];
              void 0 !== t && void 0 !== t.type && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0)
          },
          compressedTexImage2D: function() {
              try {
                  e.compressedTexImage2D.apply(e, arguments)
              } catch (t) {
                  console.error("THREE.WebGLState:", t)
              }
          },
          texImage2D: function() {
              try {
                  e.texImage2D.apply(e, arguments)
              } catch (t) {
                  console.error("THREE.WebGLState:", t)
              }
          },
          texImage3D: function() {
              try {
                  e.texImage3D.apply(e, arguments)
              } catch (t) {
                  console.error("THREE.WebGLState:", t)
              }
          },
          scissor: function(t) {
              !1 === P.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), P.copy(t))
          },
          viewport: function(t) {
              !1 === C.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), C.copy(t))
          },
          reset: function() {
              c = {}, L = null, R = {}, l = null, h = null, u = null, d = null, p = null, f = null, m = null, g = null, v = null, y = !1, x = null, _ = null, b = null, w = null, M = null, s.reset(), o.reset(), a.reset()
          }
      }
  }

  function Mr(t, y, x, _, b, w, M) {
      const S = b.isWebGL2,
          T = b.maxTextures,
          E = b.maxCubemapSize,
          A = b.maxTextureSize,
          L = b.maxSamples,
          R = new WeakMap;
      let P, C = !1;
      try {
          C = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d")
      } catch (t) {}

      function N(t, e) {
          return C ? new OffscreenCanvas(t, e) : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
      }

      function I(t, e, n, i) {
          let r = 1;
          if ((t.width > i || t.height > i) && (r = i / Math.max(t.width, t.height)), r < 1 || !0 === e) {
              if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
                  const i = e ? O.floorPowerOfTwo : Math.floor,
                      s = i(r * t.width),
                      o = i(r * t.height);
                  void 0 === P && (P = N(s, o));
                  const a = n ? N(s, o) : P;
                  return a.width = s, a.height = o, a.getContext("2d").drawImage(t, 0, 0, s, o), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + t.width + "x" + t.height + ") to (" + s + "x" + o + ")."), a
              }
              return "data" in t && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + t.width + "x" + t.height + ")."), t
          }
          return t
      }

      function D(t) {
          return O.isPowerOfTwo(t.width) && O.isPowerOfTwo(t.height)
      }

      function U(t, e) {
          return t.generateMipmaps && e && t.minFilter !== r && t.minFilter !== a
      }

      function F(e, n, i, r) {
          t.generateMipmap(e), _.get(n).__maxMipLevel = Math.log(Math.max(i, r)) * Math.LOG2E
      }

      function H(e, n, i) {
          if (!1 === S) return n;
          if (null !== e) {
              if (void 0 !== t[e]) return t[e];
              console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + e + "'")
          }
          let r = n;
          return 6403 === n && (5126 === i && (r = 33326), 5131 === i && (r = 33325), 5121 === i && (r = 33321)), 6407 === n && (5126 === i && (r = 34837), 5131 === i && (r = 34843), 5121 === i && (r = 32849)), 6408 === n && (5126 === i && (r = 34836), 5131 === i && (r = 34842), 5121 === i && (r = 32856)), 33325 !== r && 33326 !== r && 34842 !== r && 34836 !== r || y.get("EXT_color_buffer_float"), r
      }

      function z(t) {
          return t === r || t === s || t === o ? 9728 : 9729
      }

      function B(e) {
          const n = e.target;
          n.removeEventListener("dispose", B),
              function(e) {
                  const n = _.get(e);
                  void 0 !== n.__webglInit && (t.deleteTexture(n.__webglTexture), _.remove(e))
              }(n), n.isVideoTexture && R.delete(n), M.memory.textures--
      }

      function G(e) {
          const n = e.target;
          n.removeEventListener("dispose", G),
              function(e) {
                  const n = _.get(e),
                      i = _.get(e.texture);
                  if (e) {
                      if (void 0 !== i.__webglTexture && t.deleteTexture(i.__webglTexture), e.depthTexture && e.depthTexture.dispose(), e.isWebGLCubeRenderTarget)
                          for (let e = 0; e < 6; e++) t.deleteFramebuffer(n.__webglFramebuffer[e]), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer[e]);
                      else t.deleteFramebuffer(n.__webglFramebuffer), n.__webglDepthbuffer && t.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && t.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer && t.deleteRenderbuffer(n.__webglColorRenderbuffer), n.__webglDepthRenderbuffer && t.deleteRenderbuffer(n.__webglDepthRenderbuffer);
                      _.remove(e.texture), _.remove(e)
                  }
              }(n), M.memory.textures--
      }
      let k = 0;

      function V(t, e) {
          const n = _.get(t);
          if (t.isVideoTexture && function(t) {
                  const e = M.render.frame;
                  R.get(t) !== e && (R.set(t, e), t.update())
              }(t), t.version > 0 && n.__version !== t.version) {
              const i = t.image;
              if (void 0 === i) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
              else {
                  if (!1 !== i.complete) return void Z(n, t, e);
                  console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")
              }
          }
          x.activeTexture(33984 + e), x.bindTexture(3553, n.__webglTexture)
      }

      function j(e, n) {
          const i = _.get(e);
          e.version > 0 && i.__version !== e.version ? function(e, n, i) {
              if (6 !== n.image.length) return;
              Y(e, n), x.activeTexture(33984 + i), x.bindTexture(34067, e.__webglTexture), t.pixelStorei(37440, n.flipY);
              const r = n && (n.isCompressedTexture || n.image[0].isCompressedTexture),
                  s = n.image[0] && n.image[0].isDataTexture,
                  o = [];
              for (let t = 0; t < 6; t++) o[t] = r || s ? s ? n.image[t].image : n.image[t] : I(n.image[t], !1, !0, E);
              const a = o[0],
                  c = D(a) || S,
                  l = w.convert(n.format),
                  h = w.convert(n.type),
                  u = H(n.internalFormat, l, h);
              let d;
              if (X(34067, n, c), r) {
                  for (let t = 0; t < 6; t++) {
                      d = o[t].mipmaps;
                      for (let e = 0; e < d.length; e++) {
                          const i = d[e];
                          n.format !== m && n.format !== f ? null !== l ? x.compressedTexImage2D(34069 + t, e, u, i.width, i.height, 0, i.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : x.texImage2D(34069 + t, e, u, i.width, i.height, 0, l, h, i.data)
                      }
                  }
                  e.__maxMipLevel = d.length - 1
              } else {
                  d = n.mipmaps;
                  for (let t = 0; t < 6; t++)
                      if (s) {
                          x.texImage2D(34069 + t, 0, u, o[t].width, o[t].height, 0, l, h, o[t].data);
                          for (let e = 0; e < d.length; e++) {
                              const n = d[e].image[t].image;
                              x.texImage2D(34069 + t, e + 1, u, n.width, n.height, 0, l, h, n.data)
                          }
                      } else {
                          x.texImage2D(34069 + t, 0, u, l, h, o[t]);
                          for (let e = 0; e < d.length; e++) {
                              const n = d[e];
                              x.texImage2D(34069 + t, e + 1, u, l, h, n.image[t])
                          }
                      } e.__maxMipLevel = d.length
              }
              U(n, c) && F(34067, n, a.width, a.height), e.__version = n.version, n.onUpdate && n.onUpdate(n)
          }(i, e, n) : (x.activeTexture(33984 + n), x.bindTexture(34067, i.__webglTexture))
      }
      const W = {
              [e]: 10497,
              [n]: 33071,
              [i]: 33648
          },
          q = {
              [r]: 9728,
              [s]: 9984,
              [o]: 9986,
              [a]: 9729,
              1007: 9985,
              [c]: 9987
          };

      function X(e, i, s) {
          s ? (t.texParameteri(e, 10242, W[i.wrapS]), t.texParameteri(e, 10243, W[i.wrapT]), 32879 !== e && 35866 !== e || t.texParameteri(e, 32882, W[i.wrapR]), t.texParameteri(e, 10240, q[i.magFilter]), t.texParameteri(e, 10241, q[i.minFilter])) : (t.texParameteri(e, 10242, 33071), t.texParameteri(e, 10243, 33071), 32879 !== e && 35866 !== e || t.texParameteri(e, 32882, 33071), i.wrapS === n && i.wrapT === n || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), t.texParameteri(e, 10240, z(i.magFilter)), t.texParameteri(e, 10241, z(i.minFilter)), i.minFilter !== r && i.minFilter !== a && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));
          const o = y.get("EXT_texture_filter_anisotropic");
          if (o) {
              if (i.type === u && null === y.get("OES_texture_float_linear")) return;
              if (i.type === d && null === (S || y.get("OES_texture_half_float_linear"))) return;
              (i.anisotropy > 1 || _.get(i).__currentAnisotropy) && (t.texParameterf(e, o.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(i.anisotropy, b.getMaxAnisotropy())), _.get(i).__currentAnisotropy = i.anisotropy)
          }
      }

      function Y(e, n) {
          void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", B), e.__webglTexture = t.createTexture(), M.memory.textures++)
      }

      function Z(e, i, s) {
          let o = 3553;
          i.isDataTexture2DArray && (o = 35866), i.isDataTexture3D && (o = 32879), Y(e, i), x.activeTexture(33984 + s), x.bindTexture(o, e.__webglTexture), t.pixelStorei(37440, i.flipY), t.pixelStorei(37441, i.premultiplyAlpha), t.pixelStorei(3317, i.unpackAlignment);
          const c = function(t) {
                  return !S && (t.wrapS !== n || t.wrapT !== n || t.minFilter !== r && t.minFilter !== a)
              }(i) && !1 === D(i.image),
              d = I(i.image, c, !1, A),
              y = D(d) || S,
              _ = w.convert(i.format);
          let b, M = w.convert(i.type),
              T = H(i.internalFormat, _, M);
          X(o, i, y);
          const E = i.mipmaps;
          if (i.isDepthTexture) T = 6402, S ? T = i.type === u ? 36012 : i.type === h ? 33190 : i.type === p ? 35056 : 33189 : i.type === u && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), i.format === g && 6402 === T && i.type !== l && i.type !== h && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), i.type = l, M = w.convert(i.type)), i.format === v && 6402 === T && (T = 34041, i.type !== p && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), i.type = p, M = w.convert(i.type))), x.texImage2D(3553, 0, T, d.width, d.height, 0, _, M, null);
          else if (i.isDataTexture)
              if (E.length > 0 && y) {
                  for (let t = 0, e = E.length; t < e; t++) b = E[t], x.texImage2D(3553, t, T, b.width, b.height, 0, _, M, b.data);
                  i.generateMipmaps = !1, e.__maxMipLevel = E.length - 1
              } else x.texImage2D(3553, 0, T, d.width, d.height, 0, _, M, d.data), e.__maxMipLevel = 0;
          else if (i.isCompressedTexture) {
              for (let t = 0, e = E.length; t < e; t++) b = E[t], i.format !== m && i.format !== f ? null !== _ ? x.compressedTexImage2D(3553, t, T, b.width, b.height, 0, b.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : x.texImage2D(3553, t, T, b.width, b.height, 0, _, M, b.data);
              e.__maxMipLevel = E.length - 1
          } else if (i.isDataTexture2DArray) x.texImage3D(35866, 0, T, d.width, d.height, d.depth, 0, _, M, d.data), e.__maxMipLevel = 0;
          else if (i.isDataTexture3D) x.texImage3D(32879, 0, T, d.width, d.height, d.depth, 0, _, M, d.data), e.__maxMipLevel = 0;
          else if (E.length > 0 && y) {
              for (let t = 0, e = E.length; t < e; t++) b = E[t], x.texImage2D(3553, t, T, _, M, b);
              i.generateMipmaps = !1, e.__maxMipLevel = E.length - 1
          } else x.texImage2D(3553, 0, T, _, M, d), e.__maxMipLevel = 0;
          U(i, y) && F(o, i, d.width, d.height), e.__version = i.version, i.onUpdate && i.onUpdate(i)
      }

      function J(e, n, i, r) {
          const s = w.convert(n.texture.format),
              o = w.convert(n.texture.type),
              a = H(n.texture.internalFormat, s, o);
          x.texImage2D(r, 0, a, n.width, n.height, 0, s, o, null), t.bindFramebuffer(36160, e), t.framebufferTexture2D(36160, i, r, _.get(n.texture).__webglTexture, 0), t.bindFramebuffer(36160, null)
      }

      function K(e, n, i) {
          if (t.bindRenderbuffer(36161, e), n.depthBuffer && !n.stencilBuffer) {
              let r = 33189;
              if (i) {
                  const e = n.depthTexture;
                  e && e.isDepthTexture && (e.type === u ? r = 36012 : e.type === h && (r = 33190));
                  const i = Q(n);
                  t.renderbufferStorageMultisample(36161, i, r, n.width, n.height)
              } else t.renderbufferStorage(36161, r, n.width, n.height);
              t.framebufferRenderbuffer(36160, 36096, 36161, e)
          } else if (n.depthBuffer && n.stencilBuffer) {
              if (i) {
                  const e = Q(n);
                  t.renderbufferStorageMultisample(36161, e, 35056, n.width, n.height)
              } else t.renderbufferStorage(36161, 34041, n.width, n.height);
              t.framebufferRenderbuffer(36160, 33306, 36161, e)
          } else {
              const e = w.convert(n.texture.format),
                  r = w.convert(n.texture.type),
                  s = H(n.texture.internalFormat, e, r);
              if (i) {
                  const e = Q(n);
                  t.renderbufferStorageMultisample(36161, e, s, n.width, n.height)
              } else t.renderbufferStorage(36161, s, n.width, n.height)
          }
          t.bindRenderbuffer(36161, null)
      }

      function Q(t) {
          return S && t.isWebGLMultisampleRenderTarget ? Math.min(L, t.samples) : 0
      }
      let $ = !1,
          tt = !1;
      this.allocateTextureUnit = function() {
          const t = k;
          return t >= T && console.warn("THREE.WebGLTextures: Trying to use " + t + " texture units while this GPU supports only " + T), k += 1, t
      }, this.resetTextureUnits = function() {
          k = 0
      }, this.setTexture2D = V, this.setTexture2DArray = function(t, e) {
          const n = _.get(t);
          t.version > 0 && n.__version !== t.version ? Z(n, t, e) : (x.activeTexture(33984 + e), x.bindTexture(35866, n.__webglTexture))
      }, this.setTexture3D = function(t, e) {
          const n = _.get(t);
          t.version > 0 && n.__version !== t.version ? Z(n, t, e) : (x.activeTexture(33984 + e), x.bindTexture(32879, n.__webglTexture))
      }, this.setTextureCube = j, this.setupRenderTarget = function(e) {
          const n = _.get(e),
              i = _.get(e.texture);
          e.addEventListener("dispose", G), i.__webglTexture = t.createTexture(), M.memory.textures++;
          const r = !0 === e.isWebGLCubeRenderTarget,
              s = !0 === e.isWebGLMultisampleRenderTarget,
              o = D(e) || S;
          if (!S || e.texture.format !== f || e.texture.type !== u && e.texture.type !== d || (e.texture.format = m, console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")), r) {
              n.__webglFramebuffer = [];
              for (let e = 0; e < 6; e++) n.__webglFramebuffer[e] = t.createFramebuffer()
          } else if (n.__webglFramebuffer = t.createFramebuffer(), s)
              if (S) {
                  n.__webglMultisampledFramebuffer = t.createFramebuffer(), n.__webglColorRenderbuffer = t.createRenderbuffer(), t.bindRenderbuffer(36161, n.__webglColorRenderbuffer);
                  const i = w.convert(e.texture.format),
                      r = w.convert(e.texture.type),
                      s = H(e.texture.internalFormat, i, r),
                      o = Q(e);
                  t.renderbufferStorageMultisample(36161, o, s, e.width, e.height), t.bindFramebuffer(36160, n.__webglMultisampledFramebuffer), t.framebufferRenderbuffer(36160, 36064, 36161, n.__webglColorRenderbuffer), t.bindRenderbuffer(36161, null), e.depthBuffer && (n.__webglDepthRenderbuffer = t.createRenderbuffer(), K(n.__webglDepthRenderbuffer, e, !0)), t.bindFramebuffer(36160, null)
              } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
          if (r) {
              x.bindTexture(34067, i.__webglTexture), X(34067, e.texture, o);
              for (let t = 0; t < 6; t++) J(n.__webglFramebuffer[t], e, 36064, 34069 + t);
              U(e.texture, o) && F(34067, e.texture, e.width, e.height), x.bindTexture(34067, null)
          } else x.bindTexture(3553, i.__webglTexture), X(3553, e.texture, o), J(n.__webglFramebuffer, e, 36064, 3553), U(e.texture, o) && F(3553, e.texture, e.width, e.height), x.bindTexture(3553, null);
          e.depthBuffer && function(e) {
              const n = _.get(e),
                  i = !0 === e.isWebGLCubeRenderTarget;
              if (e.depthTexture) {
                  if (i) throw new Error("target.depthTexture not supported in Cube render targets");
                  ! function(e, n) {
                      if (n && n.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
                      if (t.bindFramebuffer(36160, e), !n.depthTexture || !n.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                      _.get(n.depthTexture).__webglTexture && n.depthTexture.image.width === n.width && n.depthTexture.image.height === n.height || (n.depthTexture.image.width = n.width, n.depthTexture.image.height = n.height, n.depthTexture.needsUpdate = !0), V(n.depthTexture, 0);
                      const i = _.get(n.depthTexture).__webglTexture;
                      if (n.depthTexture.format === g) t.framebufferTexture2D(36160, 36096, 3553, i, 0);
                      else {
                          if (n.depthTexture.format !== v) throw new Error("Unknown depthTexture format");
                          t.framebufferTexture2D(36160, 33306, 3553, i, 0)
                      }
                  }(n.__webglFramebuffer, e)
              } else if (i) {
                  n.__webglDepthbuffer = [];
                  for (let i = 0; i < 6; i++) t.bindFramebuffer(36160, n.__webglFramebuffer[i]), n.__webglDepthbuffer[i] = t.createRenderbuffer(), K(n.__webglDepthbuffer[i], e, !1)
              } else t.bindFramebuffer(36160, n.__webglFramebuffer), n.__webglDepthbuffer = t.createRenderbuffer(), K(n.__webglDepthbuffer, e, !1);
              t.bindFramebuffer(36160, null)
          }(e)
      }, this.updateRenderTargetMipmap = function(t) {
          const e = t.texture;
          if (U(e, D(t) || S)) {
              const n = t.isWebGLCubeRenderTarget ? 34067 : 3553,
                  i = _.get(e).__webglTexture;
              x.bindTexture(n, i), F(n, e, t.width, t.height), x.bindTexture(n, null)
          }
      }, this.updateMultisampleRenderTarget = function(e) {
          if (e.isWebGLMultisampleRenderTarget)
              if (S) {
                  const n = _.get(e);
                  t.bindFramebuffer(36008, n.__webglMultisampledFramebuffer), t.bindFramebuffer(36009, n.__webglFramebuffer);
                  const i = e.width,
                      r = e.height;
                  let s = 16384;
                  e.depthBuffer && (s |= 256), e.stencilBuffer && (s |= 1024), t.blitFramebuffer(0, 0, i, r, 0, 0, i, r, s, 9728), t.bindFramebuffer(36160, n.__webglMultisampledFramebuffer)
              } else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")
      }, this.safeSetTexture2D = function(t, e) {
          t && t.isWebGLRenderTarget && (!1 === $ && (console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."), $ = !0), t = t.texture), V(t, e)
      }, this.safeSetTextureCube = function(t, e) {
          t && t.isWebGLCubeRenderTarget && (!1 === tt && (console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."), tt = !0), t = t.texture), j(t, e)
      }
  }

  function Sr(t, e, n) {
      const i = n.isWebGL2;
      return {
          convert: function(t) {
              let n;
              if (1009 === t) return 5121;
              if (1017 === t) return 32819;
              if (1018 === t) return 32820;
              if (1019 === t) return 33635;
              if (1010 === t) return 5120;
              if (1011 === t) return 5122;
              if (t === l) return 5123;
              if (1013 === t) return 5124;
              if (t === h) return 5125;
              if (t === u) return 5126;
              if (t === d) return i ? 5131 : (n = e.get("OES_texture_half_float"), null !== n ? n.HALF_FLOAT_OES : null);
              if (1021 === t) return 6406;
              if (t === f) return 6407;
              if (t === m) return 6408;
              if (1024 === t) return 6409;
              if (1025 === t) return 6410;
              if (t === g) return 6402;
              if (t === v) return 34041;
              if (1028 === t) return 6403;
              if (1029 === t) return 36244;
              if (1030 === t) return 33319;
              if (1031 === t) return 33320;
              if (1032 === t) return 36248;
              if (1033 === t) return 36249;
              if (33776 === t || 33777 === t || 33778 === t || 33779 === t) {
                  if (n = e.get("WEBGL_compressed_texture_s3tc"), null === n) return null;
                  if (33776 === t) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
                  if (33777 === t) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                  if (33778 === t) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                  if (33779 === t) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT
              }
              if (35840 === t || 35841 === t || 35842 === t || 35843 === t) {
                  if (n = e.get("WEBGL_compressed_texture_pvrtc"), null === n) return null;
                  if (35840 === t) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                  if (35841 === t) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                  if (35842 === t) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                  if (35843 === t) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
              }
              if (36196 === t) return n = e.get("WEBGL_compressed_texture_etc1"), null !== n ? n.COMPRESSED_RGB_ETC1_WEBGL : null;
              if ((37492 === t || 37496 === t) && (n = e.get("WEBGL_compressed_texture_etc"), null !== n)) {
                  if (37492 === t) return n.COMPRESSED_RGB8_ETC2;
                  if (37496 === t) return n.COMPRESSED_RGBA8_ETC2_EAC
              }
              return 37808 === t || 37809 === t || 37810 === t || 37811 === t || 37812 === t || 37813 === t || 37814 === t || 37815 === t || 37816 === t || 37817 === t || 37818 === t || 37819 === t || 37820 === t || 37821 === t || 37840 === t || 37841 === t || 37842 === t || 37843 === t || 37844 === t || 37845 === t || 37846 === t || 37847 === t || 37848 === t || 37849 === t || 37850 === t || 37851 === t || 37852 === t || 37853 === t ? (n = e.get("WEBGL_compressed_texture_astc"), null !== n ? t : null) : 36492 === t ? (n = e.get("EXT_texture_compression_bptc"), null !== n ? t : null) : t === p ? i ? 34042 : (n = e.get("WEBGL_depth_texture"), null !== n ? n.UNSIGNED_INT_24_8_WEBGL : null) : void 0
          }
      }
  }

  function Tr(t = []) {
      mn.call(this), this.cameras = t
  }

  function Er() {
      jt.call(this), this.type = "Group"
  }

  function Ar() {
      this._targetRay = null, this._grip = null, this._hand = null
  }

  function Lr(t, e) {
      const n = this;
      let i = null,
          r = 1,
          s = null,
          o = "local-floor",
          a = null;
      const c = [],
          l = new Map,
          h = new mn;
      h.layers.enable(1), h.viewport = new G;
      const u = new mn;
      u.layers.enable(2), u.viewport = new G;
      const d = [h, u],
          p = new Tr;
      p.layers.enable(1), p.layers.enable(2);
      let f = null,
          m = null;

      function g(t) {
          const e = l.get(t.inputSource);
          e && e.dispatchEvent({
              type: t.type,
              data: t.inputSource
          })
      }

      function v() {
          l.forEach((function(t, e) {
              t.disconnect(e)
          })), l.clear(), t.setFramebuffer(null), t.setRenderTarget(t.getRenderTarget()), S.stop(), n.isPresenting = !1, n.dispatchEvent({
              type: "sessionend"
          })
      }

      function y(t) {
          s = t, S.setContext(i), S.start(), n.isPresenting = !0, n.dispatchEvent({
              type: "sessionstart"
          })
      }

      function x(t) {
          const e = i.inputSources;
          for (let t = 0; t < c.length; t++) l.set(e[t], c[t]);
          for (let e = 0; e < t.removed.length; e++) {
              const n = t.removed[e],
                  i = l.get(n);
              i && (i.dispatchEvent({
                  type: "disconnected",
                  data: n
              }), l.delete(n))
          }
          for (let e = 0; e < t.added.length; e++) {
              const n = t.added[e],
                  i = l.get(n);
              i && i.dispatchEvent({
                  type: "connected",
                  data: n
              })
          }
      }
      this.enabled = !1, this.isPresenting = !1, this.getController = function(t) {
          let e = c[t];
          return void 0 === e && (e = new Ar, c[t] = e), e.getTargetRaySpace()
      }, this.getControllerGrip = function(t) {
          let e = c[t];
          return void 0 === e && (e = new Ar, c[t] = e), e.getGripSpace()
      }, this.getHand = function(t) {
          let e = c[t];
          return void 0 === e && (e = new Ar, c[t] = e), e.getHandSpace()
      }, this.setFramebufferScaleFactor = function(t) {
          r = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
      }, this.setReferenceSpaceType = function(t) {
          o = t, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
      }, this.getReferenceSpace = function() {
          return s
      }, this.getSession = function() {
          return i
      }, this.setSession = function(t) {
          if (i = t, null !== i) {
              i.addEventListener("select", g), i.addEventListener("selectstart", g), i.addEventListener("selectend", g), i.addEventListener("squeeze", g), i.addEventListener("squeezestart", g), i.addEventListener("squeezeend", g), i.addEventListener("end", v);
              const t = e.getContextAttributes();
              !0 !== t.xrCompatible && e.makeXRCompatible();
              const n = {
                      antialias: t.antialias,
                      alpha: t.alpha,
                      depth: t.depth,
                      stencil: t.stencil,
                      framebufferScaleFactor: r
                  },
                  s = new XRWebGLLayer(i, e, n);
              i.updateRenderState({
                  baseLayer: s
              }), i.requestReferenceSpace(o).then(y), i.addEventListener("inputsourceschange", x)
          }
      };
      const _ = new W,
          b = new W;

      function w(t, e) {
          null === e ? t.matrixWorld.copy(t.matrix) : t.matrixWorld.multiplyMatrices(e.matrixWorld, t.matrix), t.matrixWorldInverse.copy(t.matrixWorld).invert()
      }
      this.getCamera = function(t) {
          p.near = u.near = h.near = t.near, p.far = u.far = h.far = t.far, f === p.near && m === p.far || (i.updateRenderState({
              depthNear: p.near,
              depthFar: p.far
          }), f = p.near, m = p.far);
          const e = t.parent,
              n = p.cameras;
          w(p, e);
          for (let t = 0; t < n.length; t++) w(n[t], e);
          t.matrixWorld.copy(p.matrixWorld);
          const r = t.children;
          for (let t = 0, e = r.length; t < e; t++) r[t].updateMatrixWorld(!0);
          return 2 === n.length ? function(t, e, n) {
              _.setFromMatrixPosition(e.matrixWorld), b.setFromMatrixPosition(n.matrixWorld);
              const i = _.distanceTo(b),
                  r = e.projectionMatrix.elements,
                  s = n.projectionMatrix.elements,
                  o = r[14] / (r[10] - 1),
                  a = r[14] / (r[10] + 1),
                  c = (r[9] + 1) / r[5],
                  l = (r[9] - 1) / r[5],
                  h = (r[8] - 1) / r[0],
                  u = (s[8] + 1) / s[0],
                  d = o * h,
                  p = o * u,
                  f = i / (-h + u),
                  m = f * -h;
              e.matrixWorld.decompose(t.position, t.quaternion, t.scale), t.translateX(m), t.translateZ(f), t.matrixWorld.compose(t.position, t.quaternion, t.scale), t.matrixWorldInverse.copy(t.matrixWorld).invert();
              const g = o + f,
                  v = a + f,
                  y = d - m,
                  x = p + (i - m),
                  w = c * a / v * g,
                  M = l * a / v * g;
              t.projectionMatrix.makePerspective(y, x, w, M, g, v)
          }(p, h, u) : p.projectionMatrix.copy(h.projectionMatrix), p
      };
      let M = null;
      const S = new Sn;
      S.setAnimationLoop((function(e, n) {
          if (a = n.getViewerPose(s), null !== a) {
              const e = a.views,
                  n = i.renderState.baseLayer;
              t.setFramebuffer(n.framebuffer);
              let r = !1;
              e.length !== p.cameras.length && (p.cameras.length = 0, r = !0);
              for (let t = 0; t < e.length; t++) {
                  const i = e[t],
                      s = n.getViewport(i),
                      o = d[t];
                  o.matrix.fromArray(i.transform.matrix), o.projectionMatrix.fromArray(i.projectionMatrix), o.viewport.set(s.x, s.y, s.width, s.height), 0 === t && p.matrix.copy(o.matrix), !0 === r && p.cameras.push(o)
              }
          }
          const r = i.inputSources;
          for (let t = 0; t < c.length; t++) {
              const e = c[t],
                  i = r[t];
              e.update(i, n, s)
          }
          M && M(e, n)
      })), this.setAnimationLoop = function(t) {
          M = t
      }, this.dispose = function() {}
  }

  function Rr(t) {
      function e(e, n) {
          e.opacity.value = n.opacity, n.color && e.diffuse.value.copy(n.color), n.emissive && e.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity), n.map && (e.map.value = n.map), n.alphaMap && (e.alphaMap.value = n.alphaMap), n.specularMap && (e.specularMap.value = n.specularMap);
          const i = t.get(n).envMap;
          if (i) {
              e.envMap.value = i, e.flipEnvMap.value = i.isCubeTexture && i._needsFlipEnvMap ? -1 : 1, e.reflectivity.value = n.reflectivity, e.refractionRatio.value = n.refractionRatio;
              const r = t.get(i).__maxMipLevel;
              void 0 !== r && (e.maxMipLevel.value = r)
          }
          let r, s;
          n.lightMap && (e.lightMap.value = n.lightMap, e.lightMapIntensity.value = n.lightMapIntensity), n.aoMap && (e.aoMap.value = n.aoMap, e.aoMapIntensity.value = n.aoMapIntensity), n.map ? r = n.map : n.specularMap ? r = n.specularMap : n.displacementMap ? r = n.displacementMap : n.normalMap ? r = n.normalMap : n.bumpMap ? r = n.bumpMap : n.roughnessMap ? r = n.roughnessMap : n.metalnessMap ? r = n.metalnessMap : n.alphaMap ? r = n.alphaMap : n.emissiveMap ? r = n.emissiveMap : n.clearcoatMap ? r = n.clearcoatMap : n.clearcoatNormalMap ? r = n.clearcoatNormalMap : n.clearcoatRoughnessMap && (r = n.clearcoatRoughnessMap), void 0 !== r && (r.isWebGLRenderTarget && (r = r.texture), !0 === r.matrixAutoUpdate && r.updateMatrix(), e.uvTransform.value.copy(r.matrix)), n.aoMap ? s = n.aoMap : n.lightMap && (s = n.lightMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), e.uv2Transform.value.copy(s.matrix))
      }

      function n(e, n) {
          e.roughness.value = n.roughness, e.metalness.value = n.metalness, n.roughnessMap && (e.roughnessMap.value = n.roughnessMap), n.metalnessMap && (e.metalnessMap.value = n.metalnessMap), n.emissiveMap && (e.emissiveMap.value = n.emissiveMap), n.bumpMap && (e.bumpMap.value = n.bumpMap, e.bumpScale.value = n.bumpScale, 1 === n.side && (e.bumpScale.value *= -1)), n.normalMap && (e.normalMap.value = n.normalMap, e.normalScale.value.copy(n.normalScale), 1 === n.side && e.normalScale.value.negate()), n.displacementMap && (e.displacementMap.value = n.displacementMap, e.displacementScale.value = n.displacementScale, e.displacementBias.value = n.displacementBias), t.get(n).envMap && (e.envMapIntensity.value = n.envMapIntensity)
      }
      return {
          refreshFogUniforms: function(t, e) {
              t.fogColor.value.copy(e.color), e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
          },
          refreshMaterialUniforms: function(t, i, r, s) {
              i.isMeshBasicMaterial ? e(t, i) : i.isMeshLambertMaterial ? (e(t, i), function(t, e) {
                  e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
              }(t, i)) : i.isMeshToonMaterial ? (e(t, i), function(t, e) {
                  e.gradientMap && (t.gradientMap.value = e.gradientMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
              }(t, i)) : i.isMeshPhongMaterial ? (e(t, i), function(t, e) {
                  t.specular.value.copy(e.specular), t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
              }(t, i)) : i.isMeshStandardMaterial ? (e(t, i), i.isMeshPhysicalMaterial ? function(t, e) {
                  n(t, e), t.reflectivity.value = e.reflectivity, t.clearcoat.value = e.clearcoat, t.clearcoatRoughness.value = e.clearcoatRoughness, e.sheen && t.sheen.value.copy(e.sheen), e.clearcoatMap && (t.clearcoatMap.value = e.clearcoatMap), e.clearcoatRoughnessMap && (t.clearcoatRoughnessMap.value = e.clearcoatRoughnessMap), e.clearcoatNormalMap && (t.clearcoatNormalScale.value.copy(e.clearcoatNormalScale), t.clearcoatNormalMap.value = e.clearcoatNormalMap, 1 === e.side && t.clearcoatNormalScale.value.negate()), t.transmission.value = e.transmission, e.transmissionMap && (t.transmissionMap.value = e.transmissionMap)
              }(t, i) : n(t, i)) : i.isMeshMatcapMaterial ? (e(t, i), function(t, e) {
                  e.matcap && (t.matcap.value = e.matcap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
              }(t, i)) : i.isMeshDepthMaterial ? (e(t, i), function(t, e) {
                  e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
              }(t, i)) : i.isMeshDistanceMaterial ? (e(t, i), function(t, e) {
                  e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), t.referencePosition.value.copy(e.referencePosition), t.nearDistance.value = e.nearDistance, t.farDistance.value = e.farDistance
              }(t, i)) : i.isMeshNormalMaterial ? (e(t, i), function(t, e) {
                  e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale, 1 === e.side && (t.bumpScale.value *= -1)), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale), 1 === e.side && t.normalScale.value.negate()), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
              }(t, i)) : i.isLineBasicMaterial ? (function(t, e) {
                  t.diffuse.value.copy(e.color), t.opacity.value = e.opacity
              }(t, i), i.isLineDashedMaterial && function(t, e) {
                  t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
              }(t, i)) : i.isPointsMaterial ? function(t, e, n, i) {
                  let r;
                  t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.size.value = e.size * n, t.scale.value = .5 * i, e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.map ? r = e.map : e.alphaMap && (r = e.alphaMap), void 0 !== r && (!0 === r.matrixAutoUpdate && r.updateMatrix(), t.uvTransform.value.copy(r.matrix))
              }(t, i, r, s) : i.isSpriteMaterial ? function(t, e) {
                  let n;
                  t.diffuse.value.copy(e.color), t.opacity.value = e.opacity, t.rotation.value = e.rotation, e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.map ? n = e.map : e.alphaMap && (n = e.alphaMap), void 0 !== n && (!0 === n.matrixAutoUpdate && n.updateMatrix(), t.uvTransform.value.copy(n.matrix))
              }(t, i) : i.isShadowMaterial ? (t.color.value.copy(i.color), t.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1)
          }
      }
  }

  function Pr(t) {
      const e = void 0 !== (t = t || {}).canvas ? t.canvas : function() {
              const t = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
              return t.style.display = "block", t
          }(),
          n = void 0 !== t.context ? t.context : null,
          i = void 0 !== t.alpha && t.alpha,
          r = void 0 === t.depth || t.depth,
          s = void 0 === t.stencil || t.stencil,
          o = void 0 !== t.antialias && t.antialias,
          a = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
          c = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
          l = void 0 !== t.powerPreference ? t.powerPreference : "default",
          h = void 0 !== t.failIfMajorPerformanceCaveat && t.failIfMajorPerformanceCaveat;
      let p = null,
          f = null;
      const g = [];
      this.domElement = e, this.debug = {
          checkShaderErrors: !0
      }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.outputEncoding = S, this.physicallyCorrectLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
      const v = this;
      let y = !1,
          x = null,
          _ = 0,
          b = 0,
          w = null,
          M = null,
          T = -1,
          E = null;
      const A = new G,
          L = new G;
      let R = null,
          P = e.width,
          C = e.height,
          N = 1,
          D = null,
          U = null;
      const F = new G(0, 0, P, C),
          H = new G(0, 0, P, C);
      let z = !1;
      const B = new Mn;
      let k = !1,
          V = !1;
      const j = new xt,
          q = new W,
          X = {
              background: null,
              fog: null,
              environment: null,
              overrideMaterial: null,
              isScene: !0
          };

      function Y() {
          return null === w ? N : 1
      }
      let Z, J, K, Q, $, tt, et, nt, it, rt, st, ot, at, ct, lt, ht, ut, dt, pt, ft, mt, gt = n;

      function vt(t, n) {
          for (let i = 0; i < t.length; i++) {
              const r = t[i],
                  s = e.getContext(r, n);
              if (null !== s) return s
          }
          return null
      }
      try {
          const t = {
              alpha: i,
              depth: r,
              stencil: s,
              antialias: o,
              premultipliedAlpha: a,
              preserveDrawingBuffer: c,
              powerPreference: l,
              failIfMajorPerformanceCaveat: h
          };
          if (e.addEventListener("webglcontextlost", wt, !1), e.addEventListener("webglcontextrestored", Mt, !1), null === gt) {
              const e = ["webgl2", "webgl", "experimental-webgl"];
              if (!0 === v.isWebGL1Renderer && e.shift(), gt = vt(e, t), null === gt) throw vt(e) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
          }
          void 0 === gt.getShaderPrecisionFormat && (gt.getShaderPrecisionFormat = function() {
              return {
                  rangeMin: 1,
                  rangeMax: 1,
                  precision: 1
              }
          })
      } catch (t) {
          throw console.error("THREE.WebGLRenderer: " + t.message), t
      }

      function yt() {
          Z = new Un(gt), J = new On(gt, Z, t), !1 === J.isWebGL2 && (Z.get("WEBGL_depth_texture"), Z.get("OES_texture_float"), Z.get("OES_texture_half_float"), Z.get("OES_texture_half_float_linear"), Z.get("OES_standard_derivatives"), Z.get("OES_element_index_uint"), Z.get("OES_vertex_array_object"), Z.get("ANGLE_instanced_arrays")), Z.get("OES_texture_float_linear"), ft = new Sr(gt, Z, J), K = new wr(gt, Z, J), K.scissor(L.copy(H).multiplyScalar(N).floor()), K.viewport(A.copy(F).multiplyScalar(N).floor()), Q = new zn(gt), $ = new cr, tt = new Mr(gt, Z, K, $, J, ft, Q), et = new Dn(v), nt = new Tn(gt, J), mt = new Cn(gt, Z, nt, J), it = new Fn(gt, nt, Q, mt), rt = new Vn(gt, it, nt, Q), ut = new kn(gt), lt = new In($), st = new ar(v, et, Z, J, mt, lt), ot = new Rr($), at = new dr($), ct = new yr(Z, J), ht = new Pn(v, et, K, rt, a), dt = new Nn(gt, Z, Q, J), pt = new Hn(gt, Z, Q, J), Q.programs = st.programs, v.capabilities = J, v.extensions = Z, v.properties = $, v.renderLists = at, v.state = K, v.info = Q
      }
      yt();
      const _t = new Lr(v, gt);
      this.xr = _t;
      const bt = new br(v, rt, J.maxTextureSize);

      function wt(t) {
          t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = !0
      }

      function Mt() {
          console.log("THREE.WebGLRenderer: Context Restored."), y = !1, yt()
      }

      function St(t) {
          const e = t.target;
          e.removeEventListener("dispose", St),
              function(t) {
                  Tt(t), $.remove(t)
              }(e)
      }

      function Tt(t) {
          const e = $.get(t).program;
          void 0 !== e && st.releaseProgram(e)
      }
      this.shadowMap = bt, this.getContext = function() {
          return gt
      }, this.getContextAttributes = function() {
          return gt.getContextAttributes()
      }, this.forceContextLoss = function() {
          const t = Z.get("WEBGL_lose_context");
          t && t.loseContext()
      }, this.forceContextRestore = function() {
          const t = Z.get("WEBGL_lose_context");
          t && t.restoreContext()
      }, this.getPixelRatio = function() {
          return N
      }, this.setPixelRatio = function(t) {
          void 0 !== t && (N = t, this.setSize(P, C, !1))
      }, this.getSize = function(t) {
          return void 0 === t && (console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"), t = new I), t.set(P, C)
      }, this.setSize = function(t, n, i) {
          _t.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (P = t, C = n, e.width = Math.floor(t * N), e.height = Math.floor(n * N), !1 !== i && (e.style.width = t + "px", e.style.height = n + "px"), this.setViewport(0, 0, t, n))
      }, this.getDrawingBufferSize = function(t) {
          return void 0 === t && (console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"), t = new I), t.set(P * N, C * N).floor()
      }, this.setDrawingBufferSize = function(t, n, i) {
          P = t, C = n, N = i, e.width = Math.floor(t * i), e.height = Math.floor(n * i), this.setViewport(0, 0, t, n)
      }, this.getCurrentViewport = function(t) {
          return void 0 === t && (console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"), t = new G), t.copy(A)
      }, this.getViewport = function(t) {
          return t.copy(F)
      }, this.setViewport = function(t, e, n, i) {
          t.isVector4 ? F.set(t.x, t.y, t.z, t.w) : F.set(t, e, n, i), K.viewport(A.copy(F).multiplyScalar(N).floor())
      }, this.getScissor = function(t) {
          return t.copy(H)
      }, this.setScissor = function(t, e, n, i) {
          t.isVector4 ? H.set(t.x, t.y, t.z, t.w) : H.set(t, e, n, i), K.scissor(L.copy(H).multiplyScalar(N).floor())
      }, this.getScissorTest = function() {
          return z
      }, this.setScissorTest = function(t) {
          K.setScissorTest(z = t)
      }, this.setOpaqueSort = function(t) {
          D = t
      }, this.setTransparentSort = function(t) {
          U = t
      }, this.getClearColor = function(t) {
          return void 0 === t && (console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"), t = new de), t.copy(ht.getClearColor())
      }, this.setClearColor = function() {
          ht.setClearColor.apply(ht, arguments)
      }, this.getClearAlpha = function() {
          return ht.getClearAlpha()
      }, this.setClearAlpha = function() {
          ht.setClearAlpha.apply(ht, arguments)
      }, this.clear = function(t, e, n) {
          let i = 0;
          (void 0 === t || t) && (i |= 16384), (void 0 === e || e) && (i |= 256), (void 0 === n || n) && (i |= 1024), gt.clear(i)
      }, this.clearColor = function() {
          this.clear(!0, !1, !1)
      }, this.clearDepth = function() {
          this.clear(!1, !0, !1)
      }, this.clearStencil = function() {
          this.clear(!1, !1, !0)
      }, this.dispose = function() {
          e.removeEventListener("webglcontextlost", wt, !1), e.removeEventListener("webglcontextrestored", Mt, !1), at.dispose(), ct.dispose(), $.dispose(), et.dispose(), rt.dispose(), mt.dispose(), _t.dispose(), At.stop()
      }, this.renderBufferImmediate = function(t, e) {
          mt.initAttributes();
          const n = $.get(t);
          t.hasPositions && !n.position && (n.position = gt.createBuffer()), t.hasNormals && !n.normal && (n.normal = gt.createBuffer()), t.hasUvs && !n.uv && (n.uv = gt.createBuffer()), t.hasColors && !n.color && (n.color = gt.createBuffer());
          const i = e.getAttributes();
          t.hasPositions && (gt.bindBuffer(34962, n.position), gt.bufferData(34962, t.positionArray, 35048), mt.enableAttribute(i.position), gt.vertexAttribPointer(i.position, 3, 5126, !1, 0, 0)), t.hasNormals && (gt.bindBuffer(34962, n.normal), gt.bufferData(34962, t.normalArray, 35048), mt.enableAttribute(i.normal), gt.vertexAttribPointer(i.normal, 3, 5126, !1, 0, 0)), t.hasUvs && (gt.bindBuffer(34962, n.uv), gt.bufferData(34962, t.uvArray, 35048), mt.enableAttribute(i.uv), gt.vertexAttribPointer(i.uv, 2, 5126, !1, 0, 0)), t.hasColors && (gt.bindBuffer(34962, n.color), gt.bufferData(34962, t.colorArray, 35048), mt.enableAttribute(i.color), gt.vertexAttribPointer(i.color, 3, 5126, !1, 0, 0)), mt.disableUnusedAttributes(), gt.drawArrays(4, 0, t.count), t.count = 0
      }, this.renderBufferDirect = function(t, e, n, i, r, s) {
          null === e && (e = X);
          const o = r.isMesh && r.matrixWorld.determinant() < 0,
              a = Nt(t, e, i, r);
          K.setMaterial(i, o);
          let c = n.index;
          const l = n.attributes.position;
          if (null === c) {
              if (void 0 === l || 0 === l.count) return
          } else if (0 === c.count) return;
          let h, u = 1;
          !0 === i.wireframe && (c = it.getWireframeAttribute(n), u = 2), (i.morphTargets || i.morphNormals) && ut.update(r, n, i, a), mt.setup(r, i, a, n, c);
          let d = dt;
          null !== c && (h = nt.get(c), d = pt, d.setIndex(h));
          const p = null !== c ? c.count : l.count,
              f = n.drawRange.start * u,
              m = n.drawRange.count * u,
              g = null !== s ? s.start * u : 0,
              v = null !== s ? s.count * u : 1 / 0,
              y = Math.max(f, g),
              x = Math.min(p, f + m, g + v) - 1,
              _ = Math.max(0, x - y + 1);
          if (0 !== _) {
              if (r.isMesh) !0 === i.wireframe ? (K.setLineWidth(i.wireframeLinewidth * Y()), d.setMode(1)) : d.setMode(4);
              else if (r.isLine) {
                  let t = i.linewidth;
                  void 0 === t && (t = 1), K.setLineWidth(t * Y()), r.isLineSegments ? d.setMode(1) : r.isLineLoop ? d.setMode(2) : d.setMode(3)
              } else r.isPoints ? d.setMode(0) : r.isSprite && d.setMode(4);
              if (r.isInstancedMesh) d.renderInstances(y, _, r.count);
              else if (n.isInstancedBufferGeometry) {
                  const t = Math.min(n.instanceCount, n._maxInstanceCount);
                  d.renderInstances(y, _, t)
              } else d.render(y, _)
          }
      }, this.compile = function(t, e) {
          f = ct.get(t), f.init(), t.traverseVisible((function(t) {
              t.isLight && t.layers.test(e.layers) && (f.pushLight(t), t.castShadow && f.pushShadow(t))
          })), f.setupLights();
          const n = new WeakMap;
          t.traverse((function(e) {
              const i = e.material;
              if (i)
                  if (Array.isArray(i))
                      for (let r = 0; r < i.length; r++) {
                          const s = i[r];
                          !1 === n.has(s) && (Ct(s, t, e), n.set(s))
                      } else !1 === n.has(i) && (Ct(i, t, e), n.set(i))
          }))
      };
      let Et = null;
      const At = new Sn;

      function Lt(t, e, n, i) {
          if (!1 === t.visible) return;
          if (t.layers.test(e.layers))
              if (t.isGroup) n = t.renderOrder;
              else if (t.isLOD) !0 === t.autoUpdate && t.update(e);
          else if (t.isLight) f.pushLight(t), t.castShadow && f.pushShadow(t);
          else if (t.isSprite) {
              if (!t.frustumCulled || B.intersectsSprite(t)) {
                  i && q.setFromMatrixPosition(t.matrixWorld).applyMatrix4(j);
                  const e = rt.update(t),
                      r = t.material;
                  r.visible && p.push(t, e, r, n, q.z, null)
              }
          } else if (t.isImmediateRenderObject) i && q.setFromMatrixPosition(t.matrixWorld).applyMatrix4(j), p.push(t, null, t.material, n, q.z, null);
          else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.frame !== Q.render.frame && (t.skeleton.update(), t.skeleton.frame = Q.render.frame), !t.frustumCulled || B.intersectsObject(t))) {
              i && q.setFromMatrixPosition(t.matrixWorld).applyMatrix4(j);
              const e = rt.update(t),
                  r = t.material;
              if (Array.isArray(r)) {
                  const i = e.groups;
                  for (let s = 0, o = i.length; s < o; s++) {
                      const o = i[s],
                          a = r[o.materialIndex];
                      a && a.visible && p.push(t, e, a, n, q.z, o)
                  }
              } else r.visible && p.push(t, e, r, n, q.z, null)
          }
          const r = t.children;
          for (let t = 0, s = r.length; t < s; t++) Lt(r[t], e, n, i)
      }

      function Rt(t, e, n) {
          const i = !0 === e.isScene ? e.overrideMaterial : null;
          for (let r = 0, s = t.length; r < s; r++) {
              const s = t[r],
                  o = s.object,
                  a = s.geometry,
                  c = null === i ? s.material : i,
                  l = s.group;
              if (n.isArrayCamera) {
                  const t = n.cameras;
                  for (let n = 0, i = t.length; n < i; n++) {
                      const i = t[n];
                      o.layers.test(i.layers) && (K.viewport(A.copy(i.viewport)), f.setupLightsView(i), Pt(o, e, i, a, c, l))
                  }
              } else Pt(o, e, n, a, c, l)
          }
      }

      function Pt(t, e, n, i, r, s) {
          if (t.onBeforeRender(v, e, n, i, r, s), t.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
              const i = Nt(n, e, r, t);
              K.setMaterial(r), mt.reset(),
                  function(t, e) {
                      t.render((function(t) {
                          v.renderBufferImmediate(t, e)
                      }))
                  }(t, i)
          } else v.renderBufferDirect(n, e, i, r, t, s);
          t.onAfterRender(v, e, n, i, r, s)
      }

      function Ct(t, e, n) {
          !0 !== e.isScene && (e = X);
          const i = $.get(t),
              r = f.state.lights,
              s = f.state.shadowsArray,
              o = r.state.version,
              a = st.getParameters(t, r.state, s, e, n),
              c = st.getProgramCacheKey(a);
          let l = i.program,
              h = !0;
          if (void 0 === l) t.addEventListener("dispose", St);
          else if (l.cacheKey !== c) Tt(t);
          else if (i.lightsStateVersion !== o) h = !1;
          else {
              if (void 0 !== a.shaderID) {
                  const n = t.isMeshStandardMaterial ? e.environment : null;
                  return void(i.envMap = et.get(t.envMap || n))
              }
              h = !1
          }
          h && (a.uniforms = st.getUniforms(t), t.onBeforeCompile(a, v), l = st.acquireProgram(a, c), i.program = l, i.uniforms = a.uniforms, i.outputEncoding = a.outputEncoding);
          const u = i.uniforms;
          (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (i.numClippingPlanes = lt.numPlanes, i.numIntersection = lt.numIntersection, u.clippingPlanes = lt.uniform), i.environment = t.isMeshStandardMaterial ? e.environment : null, i.fog = e.fog, i.envMap = et.get(t.envMap || i.environment), i.needsLights = function(t) {
              return t.isMeshLambertMaterial || t.isMeshToonMaterial || t.isMeshPhongMaterial || t.isMeshStandardMaterial || t.isShadowMaterial || t.isShaderMaterial && !0 === t.lights
          }(t), i.lightsStateVersion = o, i.needsLights && (u.ambientLightColor.value = r.state.ambient, u.lightProbe.value = r.state.probe, u.directionalLights.value = r.state.directional, u.directionalLightShadows.value = r.state.directionalShadow, u.spotLights.value = r.state.spot, u.spotLightShadows.value = r.state.spotShadow, u.rectAreaLights.value = r.state.rectArea, u.ltc_1.value = r.state.rectAreaLTC1, u.ltc_2.value = r.state.rectAreaLTC2, u.pointLights.value = r.state.point, u.pointLightShadows.value = r.state.pointShadow, u.hemisphereLights.value = r.state.hemi, u.directionalShadowMap.value = r.state.directionalShadowMap, u.directionalShadowMatrix.value = r.state.directionalShadowMatrix, u.spotShadowMap.value = r.state.spotShadowMap, u.spotShadowMatrix.value = r.state.spotShadowMatrix, u.pointShadowMap.value = r.state.pointShadowMap, u.pointShadowMatrix.value = r.state.pointShadowMatrix);
          const d = i.program.getUniforms(),
              p = Bi.seqWithValue(d.seq, u);
          i.uniformsList = p
      }

      function Nt(t, e, n, i) {
          !0 !== e.isScene && (e = X), tt.resetTextureUnits();
          const r = e.fog,
              s = n.isMeshStandardMaterial ? e.environment : null,
              o = null === w ? v.outputEncoding : w.texture.encoding,
              a = et.get(n.envMap || s),
              c = $.get(n),
              l = f.state.lights;
          if (!0 === k && (!0 === V || t !== E)) {
              const e = t === E && n.id === T;
              lt.setState(n, t, e)
          }
          n.version === c.__version ? n.fog && c.fog !== r || c.environment !== s || c.needsLights && c.lightsStateVersion !== l.state.version ? Ct(n, e, i) : void 0 === c.numClippingPlanes || c.numClippingPlanes === lt.numPlanes && c.numIntersection === lt.numIntersection ? (c.outputEncoding !== o || c.envMap !== a) && Ct(n, e, i) : Ct(n, e, i) : (Ct(n, e, i), c.__version = n.version);
          let h = !1,
              d = !1,
              p = !1;
          const g = c.program,
              y = g.getUniforms(),
              x = c.uniforms;
          if (K.useProgram(g.program) && (h = !0, d = !0, p = !0), n.id !== T && (T = n.id, d = !0), h || E !== t) {
              if (y.setValue(gt, "projectionMatrix", t.projectionMatrix), J.logarithmicDepthBuffer && y.setValue(gt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), E !== t && (E = t, d = !0, p = !0), n.isShaderMaterial || n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshStandardMaterial || n.envMap) {
                  const e = y.map.cameraPosition;
                  void 0 !== e && e.setValue(gt, q.setFromMatrixPosition(t.matrixWorld))
              }(n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial) && y.setValue(gt, "isOrthographic", !0 === t.isOrthographicCamera), (n.isMeshPhongMaterial || n.isMeshToonMaterial || n.isMeshLambertMaterial || n.isMeshBasicMaterial || n.isMeshStandardMaterial || n.isShaderMaterial || n.isShadowMaterial || n.skinning) && y.setValue(gt, "viewMatrix", t.matrixWorldInverse)
          }
          if (n.skinning) {
              y.setOptional(gt, i, "bindMatrix"), y.setOptional(gt, i, "bindMatrixInverse");
              const t = i.skeleton;
              if (t) {
                  const e = t.bones;
                  if (J.floatVertexTextures) {
                      if (null === t.boneTexture) {
                          let n = Math.sqrt(4 * e.length);
                          n = O.ceilPowerOfTwo(n), n = Math.max(n, 4);
                          const i = new Float32Array(n * n * 4);
                          i.set(t.boneMatrices);
                          const r = new _n(i, n, n, m, u);
                          t.boneMatrices = i, t.boneTexture = r, t.boneTextureSize = n
                      }
                      y.setValue(gt, "boneTexture", t.boneTexture, tt), y.setValue(gt, "boneTextureSize", t.boneTextureSize)
                  } else y.setOptional(gt, t, "boneMatrices")
              }
          }
          var _, b;
          return (d || c.receiveShadow !== i.receiveShadow) && (c.receiveShadow = i.receiveShadow, y.setValue(gt, "receiveShadow", i.receiveShadow)), d && (y.setValue(gt, "toneMappingExposure", v.toneMappingExposure), c.needsLights && (b = p, (_ = x).ambientLightColor.needsUpdate = b, _.lightProbe.needsUpdate = b, _.directionalLights.needsUpdate = b, _.directionalLightShadows.needsUpdate = b, _.pointLights.needsUpdate = b, _.pointLightShadows.needsUpdate = b, _.spotLights.needsUpdate = b, _.spotLightShadows.needsUpdate = b, _.rectAreaLights.needsUpdate = b, _.hemisphereLights.needsUpdate = b), r && n.fog && ot.refreshFogUniforms(x, r), ot.refreshMaterialUniforms(x, n, N, C), Bi.upload(gt, c.uniformsList, x, tt)), n.isShaderMaterial && !0 === n.uniformsNeedUpdate && (Bi.upload(gt, c.uniformsList, x, tt), n.uniformsNeedUpdate = !1), n.isSpriteMaterial && y.setValue(gt, "center", i.center), y.setValue(gt, "modelViewMatrix", i.modelViewMatrix), y.setValue(gt, "normalMatrix", i.normalMatrix), y.setValue(gt, "modelMatrix", i.matrixWorld), g
      }
      At.setAnimationLoop((function(t) {
          _t.isPresenting || Et && Et(t)
      })), "undefined" != typeof window && At.setContext(window), this.setAnimationLoop = function(t) {
          Et = t, _t.setAnimationLoop(t), null === t ? At.stop() : At.start()
      }, this.render = function(t, e) {
          let n, i;
          if (void 0 !== arguments[2] && (console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."), n = arguments[2]), void 0 !== arguments[3] && (console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."), i = arguments[3]), void 0 !== e && !0 !== e.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
          if (!0 === y) return;
          mt.resetDefaultState(), T = -1, E = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), !0 === _t.enabled && !0 === _t.isPresenting && (e = _t.getCamera(e)), !0 === t.isScene && t.onBeforeRender(v, t, e, n || w), f = ct.get(t, g.length), f.init(), g.push(f), j.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), B.setFromProjectionMatrix(j), V = this.localClippingEnabled, k = lt.init(this.clippingPlanes, V, e), p = at.get(t, e), p.init(), Lt(t, e, 0, v.sortObjects), p.finish(), !0 === v.sortObjects && p.sort(D, U), !0 === k && lt.beginShadows();
          const r = f.state.shadowsArray;
          bt.render(r, t, e), f.setupLights(), f.setupLightsView(e), !0 === k && lt.endShadows(), !0 === this.info.autoReset && this.info.reset(), void 0 !== n && this.setRenderTarget(n), ht.render(p, t, e, i);
          const s = p.opaque,
              o = p.transparent;
          s.length > 0 && Rt(s, t, e), o.length > 0 && Rt(o, t, e), !0 === t.isScene && t.onAfterRender(v, t, e), null !== w && (tt.updateRenderTargetMipmap(w), tt.updateMultisampleRenderTarget(w)), K.buffers.depth.setTest(!0), K.buffers.depth.setMask(!0), K.buffers.color.setMask(!0), K.setPolygonOffset(!1), g.pop(), f = g.length > 0 ? g[g.length - 1] : null, p = null
      }, this.setFramebuffer = function(t) {
          x !== t && null === w && gt.bindFramebuffer(36160, t), x = t
      }, this.getActiveCubeFace = function() {
          return _
      }, this.getActiveMipmapLevel = function() {
          return b
      }, this.getRenderList = function() {
          return p
      }, this.setRenderList = function(t) {
          p = t
      }, this.getRenderTarget = function() {
          return w
      }, this.setRenderTarget = function(t, e = 0, n = 0) {
          w = t, _ = e, b = n, t && void 0 === $.get(t).__webglFramebuffer && tt.setupRenderTarget(t);
          let i = x,
              r = !1;
          if (t) {
              const n = $.get(t).__webglFramebuffer;
              t.isWebGLCubeRenderTarget ? (i = n[e], r = !0) : i = t.isWebGLMultisampleRenderTarget ? $.get(t).__webglMultisampledFramebuffer : n, A.copy(t.viewport), L.copy(t.scissor), R = t.scissorTest
          } else A.copy(F).multiplyScalar(N).floor(), L.copy(H).multiplyScalar(N).floor(), R = z;
          if (M !== i && (gt.bindFramebuffer(36160, i), M = i), K.viewport(A), K.scissor(L), K.setScissorTest(R), r) {
              const i = $.get(t.texture);
              gt.framebufferTexture2D(36160, 36064, 34069 + e, i.__webglTexture, n)
          }
      }, this.readRenderTargetPixels = function(t, e, n, i, r, s, o) {
          if (!t || !t.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
          let a = $.get(t).__webglFramebuffer;
          if (t.isWebGLCubeRenderTarget && void 0 !== o && (a = a[o]), a) {
              let o = !1;
              a !== M && (gt.bindFramebuffer(36160, a), o = !0);
              try {
                  const a = t.texture,
                      c = a.format,
                      l = a.type;
                  if (c !== m && ft.convert(c) !== gt.getParameter(35739)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                  if (!(1009 === l || ft.convert(l) === gt.getParameter(35738) || l === u && (J.isWebGL2 || Z.get("OES_texture_float") || Z.get("WEBGL_color_buffer_float")) || l === d && (J.isWebGL2 ? Z.get("EXT_color_buffer_float") : Z.get("EXT_color_buffer_half_float")))) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                  36053 === gt.checkFramebufferStatus(36160) ? e >= 0 && e <= t.width - i && n >= 0 && n <= t.height - r && gt.readPixels(e, n, i, r, ft.convert(c), ft.convert(l), s) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
              } finally {
                  o && gt.bindFramebuffer(36160, M)
              }
          }
      }, this.copyFramebufferToTexture = function(t, e, n = 0) {
          const i = Math.pow(2, -n),
              r = Math.floor(e.image.width * i),
              s = Math.floor(e.image.height * i),
              o = ft.convert(e.format);
          tt.setTexture2D(e, 0), gt.copyTexImage2D(3553, n, o, t.x, t.y, r, s, 0), K.unbindTexture()
      }, this.copyTextureToTexture = function(t, e, n, i = 0) {
          const r = e.image.width,
              s = e.image.height,
              o = ft.convert(n.format),
              a = ft.convert(n.type);
          tt.setTexture2D(n, 0), gt.pixelStorei(37440, n.flipY), gt.pixelStorei(37441, n.premultiplyAlpha), gt.pixelStorei(3317, n.unpackAlignment), e.isDataTexture ? gt.texSubImage2D(3553, i, t.x, t.y, r, s, o, a, e.image.data) : e.isCompressedTexture ? gt.compressedTexSubImage2D(3553, i, t.x, t.y, e.mipmaps[0].width, e.mipmaps[0].height, o, e.mipmaps[0].data) : gt.texSubImage2D(3553, i, t.x, t.y, o, a, e.image), 0 === i && n.generateMipmaps && gt.generateMipmap(3553), K.unbindTexture()
      }, this.initTexture = function(t) {
          tt.setTexture2D(t, 0), K.unbindTexture()
      }, this.resetState = function() {
          K.reset(), mt.reset()
      }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
          detail: this
      }))
  }

  function Cr(t) {
      Pr.call(this, t)
  }
  xr.prototype = Object.create(me.prototype), xr.prototype.constructor = xr, xr.prototype.isMeshDepthMaterial = !0, xr.prototype.copy = function(t) {
      return me.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
  }, _r.prototype = Object.create(me.prototype), _r.prototype.constructor = _r, _r.prototype.isMeshDistanceMaterial = !0, _r.prototype.copy = function(t) {
      return me.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
  }, Tr.prototype = Object.assign(Object.create(mn.prototype), {
      constructor: Tr,
      isArrayCamera: !0
  }), Er.prototype = Object.assign(Object.create(jt.prototype), {
      constructor: Er,
      isGroup: !0
  }), Object.assign(Ar.prototype, {
      constructor: Ar,
      getHandSpace: function() {
          if (null === this._hand && (this._hand = new Er, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = [], this._hand.inputState = {
                  pinching: !1
              }, window.XRHand))
              for (let t = 0; t <= window.XRHand.LITTLE_PHALANX_TIP; t++) {
                  const t = new Er;
                  t.matrixAutoUpdate = !1, t.visible = !1, this._hand.joints.push(t), this._hand.add(t)
              }
          return this._hand
      },
      getTargetRaySpace: function() {
          return null === this._targetRay && (this._targetRay = new Er, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1), this._targetRay
      },
      getGripSpace: function() {
          return null === this._grip && (this._grip = new Er, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1), this._grip
      },
      dispatchEvent: function(t) {
          return null !== this._targetRay && this._targetRay.dispatchEvent(t), null !== this._grip && this._grip.dispatchEvent(t), null !== this._hand && this._hand.dispatchEvent(t), this
      },
      disconnect: function(t) {
          return this.dispatchEvent({
              type: "disconnected",
              data: t
          }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this
      },
      update: function(t, e, n) {
          let i = null,
              r = null,
              s = null;
          const o = this._targetRay,
              a = this._grip,
              c = this._hand;
          if (t && "visible-blurred" !== e.session.visibilityState)
              if (c && t.hand) {
                  s = !0;
                  for (let i = 0; i <= window.XRHand.LITTLE_PHALANX_TIP; i++)
                      if (t.hand[i]) {
                          const r = e.getJointPose(t.hand[i], n),
                              s = c.joints[i];
                          null !== r && (s.matrix.fromArray(r.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), s.jointRadius = r.radius), s.visible = null !== r;
                          const o = c.joints[window.XRHand.INDEX_PHALANX_TIP],
                              a = c.joints[window.XRHand.THUMB_PHALANX_TIP],
                              l = o.position.distanceTo(a.position),
                              h = .02,
                              u = .005;
                          c.inputState.pinching && l > h + u ? (c.inputState.pinching = !1, this.dispatchEvent({
                              type: "pinchend",
                              handedness: t.handedness,
                              target: this
                          })) : !c.inputState.pinching && l <= h - u && (c.inputState.pinching = !0, this.dispatchEvent({
                              type: "pinchstart",
                              handedness: t.handedness,
                              target: this
                          }))
                      }
              } else null !== o && (i = e.getPose(t.targetRaySpace, n), null !== i && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale))), null !== a && t.gripSpace && (r = e.getPose(t.gripSpace, n), null !== r && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale)));
          return null !== o && (o.visible = null !== i), null !== a && (a.visible = null !== r), null !== c && (c.visible = null !== s), this
      }
  }), Object.assign(Lr.prototype, P.prototype), Cr.prototype = Object.assign(Object.create(Pr.prototype), {
      constructor: Cr,
      isWebGL1Renderer: !0
  });
  class Nr extends jt {
      constructor() {
          super(), Object.defineProperty(this, "isScene", {
              value: !0
          }), this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
              detail: this
          }))
      }
      copy(t, e) {
          return super.copy(t, e), null !== t.background && (this.background = t.background.clone()), null !== t.environment && (this.environment = t.environment.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
      }
      toJSON(t) {
          const e = super.toJSON(t);
          return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.environment && (e.object.environment = this.environment.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
      }
  }

  function Or(t, e) {
      this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.usage = A, this.updateRange = {
          offset: 0,
          count: -1
      }, this.version = 0, this.uuid = O.generateUUID()
  }
  Object.defineProperty(Or.prototype, "needsUpdate", {
      set: function(t) {
          !0 === t && this.version++
      }
  }), Object.assign(Or.prototype, {
      isInterleavedBuffer: !0,
      onUploadCallback: function() {},
      setUsage: function(t) {
          return this.usage = t, this
      },
      copy: function(t) {
          return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this
      },
      copyAt: function(t, e, n) {
          t *= this.stride, n *= e.stride;
          for (let i = 0, r = this.stride; i < r; i++) this.array[t + i] = e.array[n + i];
          return this
      },
      set: function(t, e = 0) {
          return this.array.set(t, e), this
      },
      clone: function(t) {
          void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = O.generateUUID()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
          const e = new Or(new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), this.stride);
          return e.setUsage(this.usage), e
      },
      onUpload: function(t) {
          return this.onUploadCallback = t, this
      },
      toJSON: function(t) {
          return void 0 === t.arrayBuffers && (t.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = O.generateUUID()), void 0 === t.arrayBuffers[this.array.buffer._uuid] && (t.arrayBuffers[this.array.buffer._uuid] = Array.prototype.slice.call(new Uint32Array(this.array.buffer))), {
              uuid: this.uuid,
              buffer: this.array.buffer._uuid,
              type: this.array.constructor.name,
              stride: this.stride
          }
      }
  });
  const Ir = new W;

  function Dr(t, e, n, i) {
      this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = !0 === i
  }

  function Ur(t) {
      me.call(this), this.type = "SpriteMaterial", this.color = new de(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.setValues(t)
  }
  let Fr;
  Object.defineProperties(Dr.prototype, {
      count: {
          get: function() {
              return this.data.count
          }
      },
      array: {
          get: function() {
              return this.data.array
          }
      },
      needsUpdate: {
          set: function(t) {
              this.data.needsUpdate = t
          }
      }
  }), Object.assign(Dr.prototype, {
      isInterleavedBufferAttribute: !0,
      applyMatrix4: function(t) {
          for (let e = 0, n = this.data.count; e < n; e++) Ir.x = this.getX(e), Ir.y = this.getY(e), Ir.z = this.getZ(e), Ir.applyMatrix4(t), this.setXYZ(e, Ir.x, Ir.y, Ir.z);
          return this
      },
      setX: function(t, e) {
          return this.data.array[t * this.data.stride + this.offset] = e, this
      },
      setY: function(t, e) {
          return this.data.array[t * this.data.stride + this.offset + 1] = e, this
      },
      setZ: function(t, e) {
          return this.data.array[t * this.data.stride + this.offset + 2] = e, this
      },
      setW: function(t, e) {
          return this.data.array[t * this.data.stride + this.offset + 3] = e, this
      },
      getX: function(t) {
          return this.data.array[t * this.data.stride + this.offset]
      },
      getY: function(t) {
          return this.data.array[t * this.data.stride + this.offset + 1]
      },
      getZ: function(t) {
          return this.data.array[t * this.data.stride + this.offset + 2]
      },
      getW: function(t) {
          return this.data.array[t * this.data.stride + this.offset + 3]
      },
      setXY: function(t, e, n) {
          return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this
      },
      setXYZ: function(t, e, n, i) {
          return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this
      },
      setXYZW: function(t, e, n, i, r) {
          return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, this
      },
      clone: function(t) {
          if (void 0 === t) {
              console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");
              const t = [];
              for (let e = 0; e < this.count; e++) {
                  const n = e * this.data.stride + this.offset;
                  for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e])
              }
              return new xe(new this.array.constructor(t), this.itemSize, this.normalized)
          }
          return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new Dr(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized)
      },
      toJSON: function(t) {
          if (void 0 === t) {
              console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");
              const t = [];
              for (let e = 0; e < this.count; e++) {
                  const n = e * this.data.stride + this.offset;
                  for (let e = 0; e < this.itemSize; e++) t.push(this.data.array[n + e])
              }
              return {
                  itemSize: this.itemSize,
                  type: this.array.constructor.name,
                  array: t,
                  normalized: this.normalized
              }
          }
          return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
              isInterleavedBufferAttribute: !0,
              itemSize: this.itemSize,
              data: this.data.uuid,
              offset: this.offset,
              normalized: this.normalized
          }
      }
  }), Ur.prototype = Object.create(me.prototype), Ur.prototype.constructor = Ur, Ur.prototype.isSpriteMaterial = !0, Ur.prototype.copy = function(t) {
      return me.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this
  };
  const Hr = new W,
      zr = new W,
      Br = new W,
      Gr = new I,
      kr = new I,
      Vr = new xt,
      jr = new W,
      Wr = new W,
      qr = new W,
      Xr = new I,
      Yr = new I,
      Zr = new I;

  function Jr(t) {
      if (jt.call(this), this.type = "Sprite", void 0 === Fr) {
          Fr = new Ge;
          const t = new Or(new Float32Array([-.5, -.5, 0, 0, 0, .5, -.5, 0, 1, 0, .5, .5, 0, 1, 1, -.5, .5, 0, 0, 1]), 5);
          Fr.setIndex([0, 1, 2, 0, 2, 3]), Fr.setAttribute("position", new Dr(t, 3, 0, !1)), Fr.setAttribute("uv", new Dr(t, 2, 3, !1))
      }
      this.geometry = Fr, this.material = void 0 !== t ? t : new Ur, this.center = new I(.5, .5)
  }

  function Kr(t, e, n, i, r, s) {
      Gr.subVectors(t, n).addScalar(.5).multiply(i), void 0 !== r ? (kr.x = s * Gr.x - r * Gr.y, kr.y = r * Gr.x + s * Gr.y) : kr.copy(Gr), t.copy(e), t.x += kr.x, t.y += kr.y, t.applyMatrix4(Vr)
  }
  Jr.prototype = Object.assign(Object.create(jt.prototype), {
      constructor: Jr,
      isSprite: !0,
      raycast: function(t, e) {
          null === t.camera && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), zr.setFromMatrixScale(this.matrixWorld), Vr.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), Br.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && !1 === this.material.sizeAttenuation && zr.multiplyScalar(-Br.z);
          const n = this.material.rotation;
          let i, r;
          0 !== n && (r = Math.cos(n), i = Math.sin(n));
          const s = this.center;
          Kr(jr.set(-.5, -.5, 0), Br, s, zr, i, r), Kr(Wr.set(.5, -.5, 0), Br, s, zr, i, r), Kr(qr.set(.5, .5, 0), Br, s, zr, i, r), Xr.set(0, 0), Yr.set(1, 0), Zr.set(1, 1);
          let o = t.ray.intersectTriangle(jr, Wr, qr, !1, Hr);
          if (null === o && (Kr(Wr.set(-.5, .5, 0), Br, s, zr, i, r), Yr.set(0, 1), o = t.ray.intersectTriangle(jr, qr, Wr, !1, Hr), null === o)) return;
          const a = t.ray.origin.distanceTo(Hr);
          a < t.near || a > t.far || e.push({
              distance: a,
              point: Hr.clone(),
              uv: se.getUV(Hr, jr, Wr, qr, Xr, Yr, Zr, new I),
              face: null,
              object: this
          })
      },
      copy: function(t) {
          return jt.prototype.copy.call(this, t), void 0 !== t.center && this.center.copy(t.center), this.material = t.material, this
      }
  });
  const Qr = new W,
      $r = new W;

  function ts() {
      jt.call(this), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
          levels: {
              enumerable: !0,
              value: []
          }
      }), this.autoUpdate = !0
  }
  ts.prototype = Object.assign(Object.create(jt.prototype), {
      constructor: ts,
      isLOD: !0,
      copy: function(t) {
          jt.prototype.copy.call(this, t, !1);
          const e = t.levels;
          for (let t = 0, n = e.length; t < n; t++) {
              const n = e[t];
              this.addLevel(n.object.clone(), n.distance)
          }
          return this.autoUpdate = t.autoUpdate, this
      },
      addLevel: function(t, e = 0) {
          e = Math.abs(e);
          const n = this.levels;
          let i;
          for (i = 0; i < n.length && !(e < n[i].distance); i++);
          return n.splice(i, 0, {
              distance: e,
              object: t
          }), this.add(t), this
      },
      getCurrentLevel: function() {
          return this._currentLevel
      },
      getObjectForDistance: function(t) {
          const e = this.levels;
          if (e.length > 0) {
              let n, i;
              for (n = 1, i = e.length; n < i && !(t < e[n].distance); n++);
              return e[n - 1].object
          }
          return null
      },
      raycast: function(t, e) {
          if (this.levels.length > 0) {
              Qr.setFromMatrixPosition(this.matrixWorld);
              const n = t.ray.origin.distanceTo(Qr);
              this.getObjectForDistance(n).raycast(t, e)
          }
      },
      update: function(t) {
          const e = this.levels;
          if (e.length > 1) {
              Qr.setFromMatrixPosition(t.matrixWorld), $r.setFromMatrixPosition(this.matrixWorld);
              const n = Qr.distanceTo($r) / t.zoom;
              let i, r;
              for (e[0].object.visible = !0, i = 1, r = e.length; i < r && n >= e[i].distance; i++) e[i - 1].object.visible = !1, e[i].object.visible = !0;
              for (this._currentLevel = i - 1; i < r; i++) e[i].object.visible = !1
          }
      },
      toJSON: function(t) {
          const e = jt.prototype.toJSON.call(this, t);
          !1 === this.autoUpdate && (e.object.autoUpdate = !1), e.object.levels = [];
          const n = this.levels;
          for (let t = 0, i = n.length; t < i; t++) {
              const i = n[t];
              e.object.levels.push({
                  object: i.object.uuid,
                  distance: i.distance
              })
          }
          return e
      }
  });
  const es = new W,
      ns = new G,
      is = new G,
      rs = new W,
      ss = new xt;

  function os(t, e) {
      t && t.isGeometry && console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."), on.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new xt, this.bindMatrixInverse = new xt
  }

  function as() {
      jt.call(this), this.type = "Bone"
  }
  os.prototype = Object.assign(Object.create(on.prototype), {
      constructor: os,
      isSkinnedMesh: !0,
      copy: function(t) {
          return on.prototype.copy.call(this, t), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, this
      },
      bind: function(t, e) {
          this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert()
      },
      pose: function() {
          this.skeleton.pose()
      },
      normalizeSkinWeights: function() {
          const t = new G,
              e = this.geometry.attributes.skinWeight;
          for (let n = 0, i = e.count; n < i; n++) {
              t.x = e.getX(n), t.y = e.getY(n), t.z = e.getZ(n), t.w = e.getW(n);
              const i = 1 / t.manhattanLength();
              i !== 1 / 0 ? t.multiplyScalar(i) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w)
          }
      },
      updateMatrixWorld: function(t) {
          on.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : "detached" === this.bindMode ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
      },
      boneTransform: function(t, e) {
          const n = this.skeleton,
              i = this.geometry;
          ns.fromBufferAttribute(i.attributes.skinIndex, t), is.fromBufferAttribute(i.attributes.skinWeight, t), es.fromBufferAttribute(i.attributes.position, t).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
          for (let t = 0; t < 4; t++) {
              const i = is.getComponent(t);
              if (0 !== i) {
                  const r = ns.getComponent(t);
                  ss.multiplyMatrices(n.bones[r].matrixWorld, n.boneInverses[r]), e.addScaledVector(rs.copy(es).applyMatrix4(ss), i)
              }
          }
          return e.applyMatrix4(this.bindMatrixInverse)
      }
  }), as.prototype = Object.assign(Object.create(jt.prototype), {
      constructor: as,
      isBone: !0
  });
  const cs = new xt,
      ls = new xt;

  function hs(t = [], e = []) {
      this.uuid = O.generateUUID(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.boneTextureSize = 0, this.frame = -1, this.init()
  }
  Object.assign(hs.prototype, {
      init: function() {
          const t = this.bones,
              e = this.boneInverses;
          if (this.boneMatrices = new Float32Array(16 * t.length), 0 === e.length) this.calculateInverses();
          else if (t.length !== e.length) {
              console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
              for (let t = 0, e = this.bones.length; t < e; t++) this.boneInverses.push(new xt)
          }
      },
      calculateInverses: function() {
          this.boneInverses.length = 0;
          for (let t = 0, e = this.bones.length; t < e; t++) {
              const e = new xt;
              this.bones[t] && e.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(e)
          }
      },
      pose: function() {
          for (let t = 0, e = this.bones.length; t < e; t++) {
              const e = this.bones[t];
              e && e.matrixWorld.copy(this.boneInverses[t]).invert()
          }
          for (let t = 0, e = this.bones.length; t < e; t++) {
              const e = this.bones[t];
              e && (e.parent && e.parent.isBone ? (e.matrix.copy(e.parent.matrixWorld).invert(), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
          }
      },
      update: function() {
          const t = this.bones,
              e = this.boneInverses,
              n = this.boneMatrices,
              i = this.boneTexture;
          for (let i = 0, r = t.length; i < r; i++) {
              const r = t[i] ? t[i].matrixWorld : ls;
              cs.multiplyMatrices(r, e[i]), cs.toArray(n, 16 * i)
          }
          null !== i && (i.needsUpdate = !0)
      },
      clone: function() {
          return new hs(this.bones, this.boneInverses)
      },
      getBoneByName: function(t) {
          for (let e = 0, n = this.bones.length; e < n; e++) {
              const n = this.bones[e];
              if (n.name === t) return n
          }
      },
      dispose: function() {
          null !== this.boneTexture && (this.boneTexture.dispose(), this.boneTexture = null)
      },
      fromJSON: function(t, e) {
          this.uuid = t.uuid;
          for (let n = 0, i = t.bones.length; n < i; n++) {
              const i = t.bones[n];
              let r = e[i];
              void 0 === r && (console.warn("THREE.Skeleton: No bone found with UUID:", i), r = new as), this.bones.push(r), this.boneInverses.push((new xt).fromArray(t.boneInverses[n]))
          }
          return this.init(), this
      },
      toJSON: function() {
          const t = {
              metadata: {
                  version: 4.5,
                  type: "Skeleton",
                  generator: "Skeleton.toJSON"
              },
              bones: [],
              boneInverses: []
          };
          t.uuid = this.uuid;
          const e = this.bones,
              n = this.boneInverses;
          for (let i = 0, r = e.length; i < r; i++) {
              const r = e[i];
              t.bones.push(r.uuid);
              const s = n[i];
              t.boneInverses.push(s.toArray())
          }
          return t
      }
  });
  const us = new xt,
      ds = new xt,
      ps = [],
      fs = new on;

  function ms(t, e, n) {
      on.call(this, t, e), this.instanceMatrix = new xe(new Float32Array(16 * n), 16), this.instanceColor = null, this.count = n, this.frustumCulled = !1
  }

  function gs(t) {
      me.call(this), this.type = "LineBasicMaterial", this.color = new de(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.morphTargets = !1, this.setValues(t)
  }
  ms.prototype = Object.assign(Object.create(on.prototype), {
      constructor: ms,
      isInstancedMesh: !0,
      copy: function(t) {
          return on.prototype.copy.call(this, t), this.instanceMatrix.copy(t.instanceMatrix), this.count = t.count, this
      },
      getColorAt: function(t, e) {
          e.fromArray(this.instanceColor.array, 3 * t)
      },
      getMatrixAt: function(t, e) {
          e.fromArray(this.instanceMatrix.array, 16 * t)
      },
      raycast: function(t, e) {
          const n = this.matrixWorld,
              i = this.count;
          if (fs.geometry = this.geometry, fs.material = this.material, void 0 !== fs.material)
              for (let r = 0; r < i; r++) {
                  this.getMatrixAt(r, us), ds.multiplyMatrices(n, us), fs.matrixWorld = ds, fs.raycast(t, ps);
                  for (let t = 0, n = ps.length; t < n; t++) {
                      const n = ps[t];
                      n.instanceId = r, n.object = this, e.push(n)
                  }
                  ps.length = 0
              }
      },
      setColorAt: function(t, e) {
          null === this.instanceColor && (this.instanceColor = new xe(new Float32Array(3 * this.count), 3)), e.toArray(this.instanceColor.array, 3 * t)
      },
      setMatrixAt: function(t, e) {
          e.toArray(this.instanceMatrix.array, 16 * t)
      },
      updateMorphTargets: function() {},
      dispose: function() {
          this.dispatchEvent({
              type: "dispose"
          })
      }
  }), gs.prototype = Object.create(me.prototype), gs.prototype.constructor = gs, gs.prototype.isLineBasicMaterial = !0, gs.prototype.copy = function(t) {
      return me.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.morphTargets = t.morphTargets, this
  };
  const vs = new W,
      ys = new W,
      xs = new xt,
      _s = new yt,
      bs = new ht;

  function ws(t = new Ge, e = new gs) {
      jt.call(this), this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets()
  }
  ws.prototype = Object.assign(Object.create(jt.prototype), {
      constructor: ws,
      isLine: !0,
      copy: function(t) {
          return jt.prototype.copy.call(this, t), this.material = t.material, this.geometry = t.geometry, this
      },
      computeLineDistances: function() {
          const t = this.geometry;
          if (t.isBufferGeometry)
              if (null === t.index) {
                  const e = t.attributes.position,
                      n = [0];
                  for (let t = 1, i = e.count; t < i; t++) vs.fromBufferAttribute(e, t - 1), ys.fromBufferAttribute(e, t), n[t] = n[t - 1], n[t] += vs.distanceTo(ys);
                  t.setAttribute("lineDistance", new Le(n, 1))
              } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
          else if (t.isGeometry) {
              const e = t.vertices,
                  n = t.lineDistances;
              n[0] = 0;
              for (let t = 1, i = e.length; t < i; t++) n[t] = n[t - 1], n[t] += e[t - 1].distanceTo(e[t])
          }
          return this
      },
      raycast: function(t, e) {
          const n = this.geometry,
              i = this.matrixWorld,
              r = t.params.Line.threshold;
          if (null === n.boundingSphere && n.computeBoundingSphere(), bs.copy(n.boundingSphere), bs.applyMatrix4(i), bs.radius += r, !1 === t.ray.intersectsSphere(bs)) return;
          xs.copy(i).invert(), _s.copy(t.ray).applyMatrix4(xs);
          const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
              o = s * s,
              a = new W,
              c = new W,
              l = new W,
              h = new W,
              u = this.isLineSegments ? 2 : 1;
          if (n.isBufferGeometry) {
              const i = n.index,
                  r = n.attributes.position;
              if (null !== i) {
                  const n = i.array;
                  for (let i = 0, s = n.length - 1; i < s; i += u) {
                      const s = n[i],
                          u = n[i + 1];
                      if (a.fromBufferAttribute(r, s), c.fromBufferAttribute(r, u), _s.distanceSqToSegment(a, c, h, l) > o) continue;
                      h.applyMatrix4(this.matrixWorld);
                      const d = t.ray.origin.distanceTo(h);
                      d < t.near || d > t.far || e.push({
                          distance: d,
                          point: l.clone().applyMatrix4(this.matrixWorld),
                          index: i,
                          face: null,
                          faceIndex: null,
                          object: this
                      })
                  }
              } else
                  for (let n = 0, i = r.count - 1; n < i; n += u) {
                      if (a.fromBufferAttribute(r, n), c.fromBufferAttribute(r, n + 1), _s.distanceSqToSegment(a, c, h, l) > o) continue;
                      h.applyMatrix4(this.matrixWorld);
                      const i = t.ray.origin.distanceTo(h);
                      i < t.near || i > t.far || e.push({
                          distance: i,
                          point: l.clone().applyMatrix4(this.matrixWorld),
                          index: n,
                          face: null,
                          faceIndex: null,
                          object: this
                      })
                  }
          } else if (n.isGeometry) {
              const i = n.vertices,
                  r = i.length;
              for (let n = 0; n < r - 1; n += u) {
                  if (_s.distanceSqToSegment(i[n], i[n + 1], h, l) > o) continue;
                  h.applyMatrix4(this.matrixWorld);
                  const r = t.ray.origin.distanceTo(h);
                  r < t.near || r > t.far || e.push({
                      distance: r,
                      point: l.clone().applyMatrix4(this.matrixWorld),
                      index: n,
                      face: null,
                      faceIndex: null,
                      object: this
                  })
              }
          }
      },
      updateMorphTargets: function() {
          const t = this.geometry;
          if (t.isBufferGeometry) {
              const e = t.morphAttributes,
                  n = Object.keys(e);
              if (n.length > 0) {
                  const t = e[n[0]];
                  if (void 0 !== t) {
                      this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                      for (let e = 0, n = t.length; e < n; e++) {
                          const n = t[e].name || String(e);
                          this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e
                      }
                  }
              }
          } else {
              const e = t.morphTargets;
              void 0 !== e && e.length > 0 && console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
          }
      }
  });
  const Ms = new W,
      Ss = new W;

  function Ts(t, e) {
      ws.call(this, t, e), this.type = "LineSegments"
  }

  function Es(t, e) {
      ws.call(this, t, e), this.type = "LineLoop"
  }

  function As(t) {
      me.call(this), this.type = "PointsMaterial", this.color = new de(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.morphTargets = !1, this.setValues(t)
  }
  Ts.prototype = Object.assign(Object.create(ws.prototype), {
      constructor: Ts,
      isLineSegments: !0,
      computeLineDistances: function() {
          const t = this.geometry;
          if (t.isBufferGeometry)
              if (null === t.index) {
                  const e = t.attributes.position,
                      n = [];
                  for (let t = 0, i = e.count; t < i; t += 2) Ms.fromBufferAttribute(e, t), Ss.fromBufferAttribute(e, t + 1), n[t] = 0 === t ? 0 : n[t - 1], n[t + 1] = n[t] + Ms.distanceTo(Ss);
                  t.setAttribute("lineDistance", new Le(n, 1))
              } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
          else if (t.isGeometry) {
              const e = t.vertices,
                  n = t.lineDistances;
              for (let t = 0, i = e.length; t < i; t += 2) Ms.copy(e[t]), Ss.copy(e[t + 1]), n[t] = 0 === t ? 0 : n[t - 1], n[t + 1] = n[t] + Ms.distanceTo(Ss)
          }
          return this
      }
  }), Es.prototype = Object.assign(Object.create(ws.prototype), {
      constructor: Es,
      isLineLoop: !0
  }), As.prototype = Object.create(me.prototype), As.prototype.constructor = As, As.prototype.isPointsMaterial = !0, As.prototype.copy = function(t) {
      return me.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.morphTargets = t.morphTargets, this
  };
  const Ls = new xt,
      Rs = new yt,
      Ps = new ht,
      Cs = new W;

  function Ns(t = new Ge, e = new As) {
      jt.call(this), this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets()
  }

  function Os(t, e, n, i, r, s, o) {
      const a = Rs.distanceSqToPoint(t);
      if (a < n) {
          const n = new W;
          Rs.closestPointToPoint(t, n), n.applyMatrix4(i);
          const c = r.ray.origin.distanceTo(n);
          if (c < r.near || c > r.far) return;
          s.push({
              distance: c,
              distanceToRay: Math.sqrt(a),
              point: n,
              index: e,
              face: null,
              object: o
          })
      }
  }

  function Is(t, e, n, i, r, s, o, c, l) {
      z.call(this, t, e, n, i, r, s, o, c, l), this.format = void 0 !== o ? o : f, this.minFilter = void 0 !== s ? s : a, this.magFilter = void 0 !== r ? r : a, this.generateMipmaps = !1;
      const h = this;
      "requestVideoFrameCallback" in t && t.requestVideoFrameCallback((function e() {
          h.needsUpdate = !0, t.requestVideoFrameCallback(e)
      }))
  }

  function Ds(t, e, n, i, r, s, o, a, c, l, h, u) {
      z.call(this, null, s, o, a, c, l, i, r, h, u), this.image = {
          width: e,
          height: n
      }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
  }

  function Us(t, e, n, i, r, s, o, a, c) {
      z.call(this, t, e, n, i, r, s, o, a, c), this.needsUpdate = !0
  }

  function Fs(t, e, n, i, s, o, a, c, h, u) {
      if ((u = void 0 !== u ? u : g) !== g && u !== v) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      void 0 === n && u === g && (n = l), void 0 === n && u === v && (n = p), z.call(this, null, i, s, o, a, c, u, n, h), this.image = {
          width: t,
          height: e
      }, this.magFilter = void 0 !== a ? a : r, this.minFilter = void 0 !== c ? c : r, this.flipY = !1, this.generateMipmaps = !1
  }
  Ns.prototype = Object.assign(Object.create(jt.prototype), {
      constructor: Ns,
      isPoints: !0,
      copy: function(t) {
          return jt.prototype.copy.call(this, t), this.material = t.material, this.geometry = t.geometry, this
      },
      raycast: function(t, e) {
          const n = this.geometry,
              i = this.matrixWorld,
              r = t.params.Points.threshold;
          if (null === n.boundingSphere && n.computeBoundingSphere(), Ps.copy(n.boundingSphere), Ps.applyMatrix4(i), Ps.radius += r, !1 === t.ray.intersectsSphere(Ps)) return;
          Ls.copy(i).invert(), Rs.copy(t.ray).applyMatrix4(Ls);
          const s = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
              o = s * s;
          if (n.isBufferGeometry) {
              const r = n.index,
                  s = n.attributes.position;
              if (null !== r) {
                  const n = r.array;
                  for (let r = 0, a = n.length; r < a; r++) {
                      const a = n[r];
                      Cs.fromBufferAttribute(s, a), Os(Cs, a, o, i, t, e, this)
                  }
              } else
                  for (let n = 0, r = s.count; n < r; n++) Cs.fromBufferAttribute(s, n), Os(Cs, n, o, i, t, e, this)
          } else {
              const r = n.vertices;
              for (let n = 0, s = r.length; n < s; n++) Os(r[n], n, o, i, t, e, this)
          }
      },
      updateMorphTargets: function() {
          const t = this.geometry;
          if (t.isBufferGeometry) {
              const e = t.morphAttributes,
                  n = Object.keys(e);
              if (n.length > 0) {
                  const t = e[n[0]];
                  if (void 0 !== t) {
                      this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                      for (let e = 0, n = t.length; e < n; e++) {
                          const n = t[e].name || String(e);
                          this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = e
                      }
                  }
              }
          } else {
              const e = t.morphTargets;
              void 0 !== e && e.length > 0 && console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")
          }
      }
  }), Is.prototype = Object.assign(Object.create(z.prototype), {
      constructor: Is,
      clone: function() {
          return new this.constructor(this.image).copy(this)
      },
      isVideoTexture: !0,
      update: function() {
          const t = this.image;
          !1 == "requestVideoFrameCallback" in t && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0)
      }
  }), Ds.prototype = Object.create(z.prototype), Ds.prototype.constructor = Ds, Ds.prototype.isCompressedTexture = !0, Us.prototype = Object.create(z.prototype), Us.prototype.constructor = Us, Us.prototype.isCanvasTexture = !0, Fs.prototype = Object.create(z.prototype), Fs.prototype.constructor = Fs, Fs.prototype.isDepthTexture = !0;
  let Hs = 0;
  const zs = new xt,
      Bs = new jt,
      Gs = new W;

  function ks() {
      Object.defineProperty(this, "id", {
          value: Hs += 2
      }), this.uuid = O.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
          []
      ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
  }
  ks.prototype = Object.assign(Object.create(P.prototype), {
      constructor: ks,
      isGeometry: !0,
      applyMatrix4: function(t) {
          const e = (new D).getNormalMatrix(t);
          for (let e = 0, n = this.vertices.length; e < n; e++) this.vertices[e].applyMatrix4(t);
          for (let t = 0, n = this.faces.length; t < n; t++) {
              const n = this.faces[t];
              n.normal.applyMatrix3(e).normalize();
              for (let t = 0, i = n.vertexNormals.length; t < i; t++) n.vertexNormals[t].applyMatrix3(e).normalize()
          }
          return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
      },
      rotateX: function(t) {
          return zs.makeRotationX(t), this.applyMatrix4(zs), this
      },
      rotateY: function(t) {
          return zs.makeRotationY(t), this.applyMatrix4(zs), this
      },
      rotateZ: function(t) {
          return zs.makeRotationZ(t), this.applyMatrix4(zs), this
      },
      translate: function(t, e, n) {
          return zs.makeTranslation(t, e, n), this.applyMatrix4(zs), this
      },
      scale: function(t, e, n) {
          return zs.makeScale(t, e, n), this.applyMatrix4(zs), this
      },
      lookAt: function(t) {
          return Bs.lookAt(t), Bs.updateMatrix(), this.applyMatrix4(Bs.matrix), this
      },
      fromBufferGeometry: function(t) {
          const e = this,
              n = null !== t.index ? t.index : void 0,
              i = t.attributes;
          if (void 0 === i.position) return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."), this;
          const r = i.position,
              s = i.normal,
              o = i.color,
              a = i.uv,
              c = i.uv2;
          void 0 !== c && (this.faceVertexUvs[1] = []);
          for (let t = 0; t < r.count; t++) e.vertices.push((new W).fromBufferAttribute(r, t)), void 0 !== o && e.colors.push((new de).fromBufferAttribute(o, t));

          function l(t, n, i, r) {
              const l = void 0 === o ? [] : [e.colors[t].clone(), e.colors[n].clone(), e.colors[i].clone()],
                  h = void 0 === s ? [] : [(new W).fromBufferAttribute(s, t), (new W).fromBufferAttribute(s, n), (new W).fromBufferAttribute(s, i)],
                  u = new pe(t, n, i, h, l, r);
              e.faces.push(u), void 0 !== a && e.faceVertexUvs[0].push([(new I).fromBufferAttribute(a, t), (new I).fromBufferAttribute(a, n), (new I).fromBufferAttribute(a, i)]), void 0 !== c && e.faceVertexUvs[1].push([(new I).fromBufferAttribute(c, t), (new I).fromBufferAttribute(c, n), (new I).fromBufferAttribute(c, i)])
          }
          const h = t.groups;
          if (h.length > 0)
              for (let t = 0; t < h.length; t++) {
                  const e = h[t],
                      i = e.start;
                  for (let t = i, r = i + e.count; t < r; t += 3) void 0 !== n ? l(n.getX(t), n.getX(t + 1), n.getX(t + 2), e.materialIndex) : l(t, t + 1, t + 2, e.materialIndex)
              } else if (void 0 !== n)
                  for (let t = 0; t < n.count; t += 3) l(n.getX(t), n.getX(t + 1), n.getX(t + 2));
              else
                  for (let t = 0; t < r.count; t += 3) l(t, t + 1, t + 2);
          return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
      },
      center: function() {
          return this.computeBoundingBox(), this.boundingBox.getCenter(Gs).negate(), this.translate(Gs.x, Gs.y, Gs.z), this
      },
      normalize: function() {
          this.computeBoundingSphere();
          const t = this.boundingSphere.center,
              e = this.boundingSphere.radius,
              n = 0 === e ? 1 : 1 / e,
              i = new xt;
          return i.set(n, 0, 0, -n * t.x, 0, n, 0, -n * t.y, 0, 0, n, -n * t.z, 0, 0, 0, 1), this.applyMatrix4(i), this
      },
      computeFaceNormals: function() {
          const t = new W,
              e = new W;
          for (let n = 0, i = this.faces.length; n < i; n++) {
              const i = this.faces[n],
                  r = this.vertices[i.a],
                  s = this.vertices[i.b],
                  o = this.vertices[i.c];
              t.subVectors(o, s), e.subVectors(r, s), t.cross(e), t.normalize(), i.normal.copy(t)
          }
      },
      computeVertexNormals: function(t = !0) {
          const e = new Array(this.vertices.length);
          for (let t = 0, n = this.vertices.length; t < n; t++) e[t] = new W;
          if (t) {
              const t = new W,
                  n = new W;
              for (let i = 0, r = this.faces.length; i < r; i++) {
                  const r = this.faces[i],
                      s = this.vertices[r.a],
                      o = this.vertices[r.b],
                      a = this.vertices[r.c];
                  t.subVectors(a, o), n.subVectors(s, o), t.cross(n), e[r.a].add(t), e[r.b].add(t), e[r.c].add(t)
              }
          } else {
              this.computeFaceNormals();
              for (let t = 0, n = this.faces.length; t < n; t++) {
                  const n = this.faces[t];
                  e[n.a].add(n.normal), e[n.b].add(n.normal), e[n.c].add(n.normal)
              }
          }
          for (let t = 0, n = this.vertices.length; t < n; t++) e[t].normalize();
          for (let t = 0, n = this.faces.length; t < n; t++) {
              const n = this.faces[t],
                  i = n.vertexNormals;
              3 === i.length ? (i[0].copy(e[n.a]), i[1].copy(e[n.b]), i[2].copy(e[n.c])) : (i[0] = e[n.a].clone(), i[1] = e[n.b].clone(), i[2] = e[n.c].clone())
          }
          this.faces.length > 0 && (this.normalsNeedUpdate = !0)
      },
      computeFlatVertexNormals: function() {
          this.computeFaceNormals();
          for (let t = 0, e = this.faces.length; t < e; t++) {
              const e = this.faces[t],
                  n = e.vertexNormals;
              3 === n.length ? (n[0].copy(e.normal), n[1].copy(e.normal), n[2].copy(e.normal)) : (n[0] = e.normal.clone(), n[1] = e.normal.clone(), n[2] = e.normal.clone())
          }
          this.faces.length > 0 && (this.normalsNeedUpdate = !0)
      },
      computeMorphNormals: function() {
          for (let t = 0, e = this.faces.length; t < e; t++) {
              const e = this.faces[t];
              e.__originalFaceNormal ? e.__originalFaceNormal.copy(e.normal) : e.__originalFaceNormal = e.normal.clone(), e.__originalVertexNormals || (e.__originalVertexNormals = []);
              for (let t = 0, n = e.vertexNormals.length; t < n; t++) e.__originalVertexNormals[t] ? e.__originalVertexNormals[t].copy(e.vertexNormals[t]) : e.__originalVertexNormals[t] = e.vertexNormals[t].clone()
          }
          const t = new ks;
          t.faces = this.faces;
          for (let e = 0, n = this.morphTargets.length; e < n; e++) {
              if (!this.morphNormals[e]) {
                  this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
                  const t = this.morphNormals[e].faceNormals,
                      n = this.morphNormals[e].vertexNormals;
                  for (let e = 0, i = this.faces.length; e < i; e++) {
                      const e = new W,
                          i = {
                              a: new W,
                              b: new W,
                              c: new W
                          };
                      t.push(e), n.push(i)
                  }
              }
              const n = this.morphNormals[e];
              t.vertices = this.morphTargets[e].vertices, t.computeFaceNormals(), t.computeVertexNormals();
              for (let t = 0, e = this.faces.length; t < e; t++) {
                  const e = this.faces[t],
                      i = n.faceNormals[t],
                      r = n.vertexNormals[t];
                  i.copy(e.normal), r.a.copy(e.vertexNormals[0]), r.b.copy(e.vertexNormals[1]), r.c.copy(e.vertexNormals[2])
              }
          }
          for (let t = 0, e = this.faces.length; t < e; t++) {
              const e = this.faces[t];
              e.normal = e.__originalFaceNormal, e.vertexNormals = e.__originalVertexNormals
          }
      },
      computeBoundingBox: function() {
          null === this.boundingBox && (this.boundingBox = new Y), this.boundingBox.setFromPoints(this.vertices)
      },
      computeBoundingSphere: function() {
          null === this.boundingSphere && (this.boundingSphere = new ht), this.boundingSphere.setFromPoints(this.vertices)
      },
      merge: function(t, e, n = 0) {
          if (!t || !t.isGeometry) return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t);
          let i;
          const r = this.vertices.length,
              s = this.vertices,
              o = t.vertices,
              a = this.faces,
              c = t.faces,
              l = this.colors,
              h = t.colors;
          void 0 !== e && (i = (new D).getNormalMatrix(e));
          for (let t = 0, n = o.length; t < n; t++) {
              const n = o[t].clone();
              void 0 !== e && n.applyMatrix4(e), s.push(n)
          }
          for (let t = 0, e = h.length; t < e; t++) l.push(h[t].clone());
          for (let t = 0, e = c.length; t < e; t++) {
              const e = c[t];
              let s, o;
              const l = e.vertexNormals,
                  h = e.vertexColors,
                  u = new pe(e.a + r, e.b + r, e.c + r);
              u.normal.copy(e.normal), void 0 !== i && u.normal.applyMatrix3(i).normalize();
              for (let t = 0, e = l.length; t < e; t++) s = l[t].clone(), void 0 !== i && s.applyMatrix3(i).normalize(), u.vertexNormals.push(s);
              u.color.copy(e.color);
              for (let t = 0, e = h.length; t < e; t++) o = h[t], u.vertexColors.push(o.clone());
              u.materialIndex = e.materialIndex + n, a.push(u)
          }
          for (let e = 0, n = t.faceVertexUvs.length; e < n; e++) {
              const n = t.faceVertexUvs[e];
              void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []);
              for (let t = 0, i = n.length; t < i; t++) {
                  const i = n[t],
                      r = [];
                  for (let t = 0, e = i.length; t < e; t++) r.push(i[t].clone());
                  this.faceVertexUvs[e].push(r)
              }
          }
      },
      mergeMesh: function(t) {
          t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t)
      },
      mergeVertices: function(t = 4) {
          const e = {},
              n = [],
              i = [],
              r = Math.pow(10, t);
          for (let t = 0, s = this.vertices.length; t < s; t++) {
              const s = this.vertices[t],
                  o = Math.round(s.x * r) + "_" + Math.round(s.y * r) + "_" + Math.round(s.z * r);
              void 0 === e[o] ? (e[o] = t, n.push(this.vertices[t]), i[t] = n.length - 1) : i[t] = i[e[o]]
          }
          const s = [];
          for (let t = 0, e = this.faces.length; t < e; t++) {
              const e = this.faces[t];
              e.a = i[e.a], e.b = i[e.b], e.c = i[e.c];
              const n = [e.a, e.b, e.c];
              for (let e = 0; e < 3; e++)
                  if (n[e] === n[(e + 1) % 3]) {
                      s.push(t);
                      break
                  }
          }
          for (let t = s.length - 1; t >= 0; t--) {
              const e = s[t];
              this.faces.splice(e, 1);
              for (let t = 0, n = this.faceVertexUvs.length; t < n; t++) this.faceVertexUvs[t].splice(e, 1)
          }
          const o = this.vertices.length - n.length;
          return this.vertices = n, o
      },
      setFromPoints: function(t) {
          this.vertices = [];
          for (let e = 0, n = t.length; e < n; e++) {
              const n = t[e];
              this.vertices.push(new W(n.x, n.y, n.z || 0))
          }
          return this
      },
      sortFacesByMaterialIndex: function() {
          const t = this.faces,
              e = t.length;
          for (let n = 0; n < e; n++) t[n]._id = n;
          t.sort((function(t, e) {
              return t.materialIndex - e.materialIndex
          }));
          const n = this.faceVertexUvs[0],
              i = this.faceVertexUvs[1];
          let r, s;
          n && n.length === e && (r = []), i && i.length === e && (s = []);
          for (let o = 0; o < e; o++) {
              const e = t[o]._id;
              r && r.push(n[e]), s && s.push(i[e])
          }
          r && (this.faceVertexUvs[0] = r), s && (this.faceVertexUvs[1] = s)
      },
      toJSON: function() {
          const t = {
              metadata: {
                  version: 4.5,
                  type: "Geometry",
                  generator: "Geometry.toJSON"
              }
          };
          if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
              const e = this.parameters;
              for (const n in e) void 0 !== e[n] && (t[n] = e[n]);
              return t
          }
          const e = [];
          for (let t = 0; t < this.vertices.length; t++) {
              const n = this.vertices[t];
              e.push(n.x, n.y, n.z)
          }
          const n = [],
              i = [],
              r = {},
              s = [],
              o = {},
              a = [],
              c = {};
          for (let t = 0; t < this.faces.length; t++) {
              const e = this.faces[t],
                  i = !0,
                  r = !1,
                  s = void 0 !== this.faceVertexUvs[0][t],
                  o = e.normal.length() > 0,
                  a = e.vertexNormals.length > 0,
                  c = 1 !== e.color.r || 1 !== e.color.g || 1 !== e.color.b,
                  p = e.vertexColors.length > 0;
              let f = 0;
              if (f = l(f, 0, 0), f = l(f, 1, i), f = l(f, 2, r), f = l(f, 3, s), f = l(f, 4, o), f = l(f, 5, a), f = l(f, 6, c), f = l(f, 7, p), n.push(f), n.push(e.a, e.b, e.c), n.push(e.materialIndex), s) {
                  const e = this.faceVertexUvs[0][t];
                  n.push(d(e[0]), d(e[1]), d(e[2]))
              }
              if (o && n.push(h(e.normal)), a) {
                  const t = e.vertexNormals;
                  n.push(h(t[0]), h(t[1]), h(t[2]))
              }
              if (c && n.push(u(e.color)), p) {
                  const t = e.vertexColors;
                  n.push(u(t[0]), u(t[1]), u(t[2]))
              }
          }

          function l(t, e, n) {
              return n ? t | 1 << e : t & ~(1 << e)
          }

          function h(t) {
              const e = t.x.toString() + t.y.toString() + t.z.toString();
              return void 0 !== r[e] || (r[e] = i.length / 3, i.push(t.x, t.y, t.z)), r[e]
          }

          function u(t) {
              const e = t.r.toString() + t.g.toString() + t.b.toString();
              return void 0 !== o[e] || (o[e] = s.length, s.push(t.getHex())), o[e]
          }

          function d(t) {
              const e = t.x.toString() + t.y.toString();
              return void 0 !== c[e] || (c[e] = a.length / 2, a.push(t.x, t.y)), c[e]
          }
          return t.data = {}, t.data.vertices = e, t.data.normals = i, s.length > 0 && (t.data.colors = s), a.length > 0 && (t.data.uvs = [a]), t.data.faces = n, t
      },
      clone: function() {
          return (new ks).copy(this)
      },
      copy: function(t) {
          this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
              []
          ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
          const e = t.vertices;
          for (let t = 0, n = e.length; t < n; t++) this.vertices.push(e[t].clone());
          const n = t.colors;
          for (let t = 0, e = n.length; t < e; t++) this.colors.push(n[t].clone());
          const i = t.faces;
          for (let t = 0, e = i.length; t < e; t++) this.faces.push(i[t].clone());
          for (let e = 0, n = t.faceVertexUvs.length; e < n; e++) {
              const n = t.faceVertexUvs[e];
              void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []);
              for (let t = 0, i = n.length; t < i; t++) {
                  const i = n[t],
                      r = [];
                  for (let t = 0, e = i.length; t < e; t++) {
                      const e = i[t];
                      r.push(e.clone())
                  }
                  this.faceVertexUvs[e].push(r)
              }
          }
          const r = t.morphTargets;
          for (let t = 0, e = r.length; t < e; t++) {
              const e = {};
              if (e.name = r[t].name, void 0 !== r[t].vertices) {
                  e.vertices = [];
                  for (let n = 0, i = r[t].vertices.length; n < i; n++) e.vertices.push(r[t].vertices[n].clone())
              }
              if (void 0 !== r[t].normals) {
                  e.normals = [];
                  for (let n = 0, i = r[t].normals.length; n < i; n++) e.normals.push(r[t].normals[n].clone())
              }
              this.morphTargets.push(e)
          }
          const s = t.morphNormals;
          for (let t = 0, e = s.length; t < e; t++) {
              const e = {};
              if (void 0 !== s[t].vertexNormals) {
                  e.vertexNormals = [];
                  for (let n = 0, i = s[t].vertexNormals.length; n < i; n++) {
                      const i = s[t].vertexNormals[n],
                          r = {};
                      r.a = i.a.clone(), r.b = i.b.clone(), r.c = i.c.clone(), e.vertexNormals.push(r)
                  }
              }
              if (void 0 !== s[t].faceNormals) {
                  e.faceNormals = [];
                  for (let n = 0, i = s[t].faceNormals.length; n < i; n++) e.faceNormals.push(s[t].faceNormals[n].clone())
              }
              this.morphNormals.push(e)
          }
          const o = t.skinWeights;
          for (let t = 0, e = o.length; t < e; t++) this.skinWeights.push(o[t].clone());
          const a = t.skinIndices;
          for (let t = 0, e = a.length; t < e; t++) this.skinIndices.push(a[t].clone());
          const c = t.lineDistances;
          for (let t = 0, e = c.length; t < e; t++) this.lineDistances.push(c[t]);
          const l = t.boundingBox;
          null !== l && (this.boundingBox = l.clone());
          const h = t.boundingSphere;
          return null !== h && (this.boundingSphere = h.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
      },
      dispose: function() {
          this.dispatchEvent({
              type: "dispose"
          })
      }
  }), new W, new W, new W, new se;

  function Vs(t, e, n, i, r) {
      let s, o;
      if (r === function(t, e, n, i) {
              let r = 0;
              for (let s = e, o = n - i; s < n; s += i) r += (t[o] - t[s]) * (t[s + 1] + t[o + 1]), o = s;
              return r
          }(t, e, n, i) > 0)
          for (s = e; s < n; s += i) o = ho(s, t[s], t[s + 1], o);
      else
          for (s = n - i; s >= e; s -= i) o = ho(s, t[s], t[s + 1], o);
      return o && ro(o, o.next) && (uo(o), o = o.next), o
  }

  function js(t, e) {
      if (!t) return t;
      e || (e = t);
      let n, i = t;
      do {
          if (n = !1, i.steiner || !ro(i, i.next) && 0 !== io(i.prev, i, i.next)) i = i.next;
          else {
              if (uo(i), i = e = i.prev, i === i.next) break;
              n = !0
          }
      } while (n || i !== e);
      return e
  }

  function Ws(t, e, n, i, r, s, o) {
      if (!t) return;
      !o && s && function(t, e, n, i) {
          let r = t;
          do {
              null === r.z && (r.z = $s(r.x, r.y, e, n, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
          } while (r !== t);
          r.prevZ.nextZ = null, r.prevZ = null,
              function(t) {
                  let e, n, i, r, s, o, a, c, l = 1;
                  do {
                      for (n = t, t = null, s = null, o = 0; n;) {
                          for (o++, i = n, a = 0, e = 0; e < l && (a++, i = i.nextZ, i); e++);
                          for (c = l; a > 0 || c > 0 && i;) 0 !== a && (0 === c || !i || n.z <= i.z) ? (r = n, n = n.nextZ, a--) : (r = i, i = i.nextZ, c--), s ? s.nextZ = r : t = r, r.prevZ = s, s = r;
                          n = i
                      }
                      s.nextZ = null, l *= 2
                  } while (o > 1)
              }(r)
      }(t, i, r, s);
      let a, c, l = t;
      for (; t.prev !== t.next;)
          if (a = t.prev, c = t.next, s ? Xs(t, i, r, s) : qs(t)) e.push(a.i / n), e.push(t.i / n), e.push(c.i / n), uo(t), t = c.next, l = c.next;
          else if ((t = c) === l) {
          o ? 1 === o ? Ws(t = Ys(js(t), e, n), e, n, i, r, s, 2) : 2 === o && Zs(t, e, n, i, r, s) : Ws(js(t), e, n, i, r, s, 1);
          break
      }
  }

  function qs(t) {
      const e = t.prev,
          n = t,
          i = t.next;
      if (io(e, n, i) >= 0) return !1;
      let r = t.next.next;
      for (; r !== t.prev;) {
          if (eo(e.x, e.y, n.x, n.y, i.x, i.y, r.x, r.y) && io(r.prev, r, r.next) >= 0) return !1;
          r = r.next
      }
      return !0
  }

  function Xs(t, e, n, i) {
      const r = t.prev,
          s = t,
          o = t.next;
      if (io(r, s, o) >= 0) return !1;
      const a = r.x < s.x ? r.x < o.x ? r.x : o.x : s.x < o.x ? s.x : o.x,
          c = r.y < s.y ? r.y < o.y ? r.y : o.y : s.y < o.y ? s.y : o.y,
          l = r.x > s.x ? r.x > o.x ? r.x : o.x : s.x > o.x ? s.x : o.x,
          h = r.y > s.y ? r.y > o.y ? r.y : o.y : s.y > o.y ? s.y : o.y,
          u = $s(a, c, e, n, i),
          d = $s(l, h, e, n, i);
      let p = t.prevZ,
          f = t.nextZ;
      for (; p && p.z >= u && f && f.z <= d;) {
          if (p !== t.prev && p !== t.next && eo(r.x, r.y, s.x, s.y, o.x, o.y, p.x, p.y) && io(p.prev, p, p.next) >= 0) return !1;
          if (p = p.prevZ, f !== t.prev && f !== t.next && eo(r.x, r.y, s.x, s.y, o.x, o.y, f.x, f.y) && io(f.prev, f, f.next) >= 0) return !1;
          f = f.nextZ
      }
      for (; p && p.z >= u;) {
          if (p !== t.prev && p !== t.next && eo(r.x, r.y, s.x, s.y, o.x, o.y, p.x, p.y) && io(p.prev, p, p.next) >= 0) return !1;
          p = p.prevZ
      }
      for (; f && f.z <= d;) {
          if (f !== t.prev && f !== t.next && eo(r.x, r.y, s.x, s.y, o.x, o.y, f.x, f.y) && io(f.prev, f, f.next) >= 0) return !1;
          f = f.nextZ
      }
      return !0
  }

  function Ys(t, e, n) {
      let i = t;
      do {
          const r = i.prev,
              s = i.next.next;
          !ro(r, s) && so(r, i, i.next, s) && co(r, s) && co(s, r) && (e.push(r.i / n), e.push(i.i / n), e.push(s.i / n), uo(i), uo(i.next), i = t = s), i = i.next
      } while (i !== t);
      return js(i)
  }

  function Zs(t, e, n, i, r, s) {
      let o = t;
      do {
          let t = o.next.next;
          for (; t !== o.prev;) {
              if (o.i !== t.i && no(o, t)) {
                  let a = lo(o, t);
                  return o = js(o, o.next), a = js(a, a.next), Ws(o, e, n, i, r, s), void Ws(a, e, n, i, r, s)
              }
              t = t.next
          }
          o = o.next
      } while (o !== t)
  }

  function Js(t, e) {
      return t.x - e.x
  }

  function Ks(t, e) {
      if (e = function(t, e) {
              let n = e;
              const i = t.x,
                  r = t.y;
              let s, o = -1 / 0;
              do {
                  if (r <= n.y && r >= n.next.y && n.next.y !== n.y) {
                      const t = n.x + (r - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
                      if (t <= i && t > o) {
                          if (o = t, t === i) {
                              if (r === n.y) return n;
                              if (r === n.next.y) return n.next
                          }
                          s = n.x < n.next.x ? n : n.next
                      }
                  }
                  n = n.next
              } while (n !== e);
              if (!s) return null;
              if (i === o) return s;
              const a = s,
                  c = s.x,
                  l = s.y;
              let h, u = 1 / 0;
              n = s;
              do {
                  i >= n.x && n.x >= c && i !== n.x && eo(r < l ? i : o, r, c, l, r < l ? o : i, r, n.x, n.y) && (h = Math.abs(r - n.y) / (i - n.x), co(n, t) && (h < u || h === u && (n.x > s.x || n.x === s.x && Qs(s, n))) && (s = n, u = h)), n = n.next
              } while (n !== a);
              return s
          }(t, e)) {
          const n = lo(e, t);
          js(e, e.next), js(n, n.next)
      }
  }

  function Qs(t, e) {
      return io(t.prev, t, e.prev) < 0 && io(e.next, t, t.next) < 0
  }

  function $s(t, e, n, i, r) {
      return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - i) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
  }

  function to(t) {
      let e = t,
          n = t;
      do {
          (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next
      } while (e !== t);
      return n
  }

  function eo(t, e, n, i, r, s, o, a) {
      return (r - o) * (e - a) - (t - o) * (s - a) >= 0 && (t - o) * (i - a) - (n - o) * (e - a) >= 0 && (n - o) * (s - a) - (r - o) * (i - a) >= 0
  }

  function no(t, e) {
      return t.next.i !== e.i && t.prev.i !== e.i && ! function(t, e) {
          let n = t;
          do {
              if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && so(n, n.next, t, e)) return !0;
              n = n.next
          } while (n !== t);
          return !1
      }(t, e) && (co(t, e) && co(e, t) && function(t, e) {
          let n = t,
              i = !1;
          const r = (t.x + e.x) / 2,
              s = (t.y + e.y) / 2;
          do {
              n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next
          } while (n !== t);
          return i
      }(t, e) && (io(t.prev, t, e.prev) || io(t, e.prev, e)) || ro(t, e) && io(t.prev, t, t.next) > 0 && io(e.prev, e, e.next) > 0)
  }

  function io(t, e, n) {
      return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
  }

  function ro(t, e) {
      return t.x === e.x && t.y === e.y
  }

  function so(t, e, n, i) {
      const r = ao(io(t, e, n)),
          s = ao(io(t, e, i)),
          o = ao(io(n, i, t)),
          a = ao(io(n, i, e));
      return r !== s && o !== a || !(0 !== r || !oo(t, n, e)) || !(0 !== s || !oo(t, i, e)) || !(0 !== o || !oo(n, t, i)) || !(0 !== a || !oo(n, e, i))
  }

  function oo(t, e, n) {
      return e.x <= Math.max(t.x, n.x) && e.x >= Math.min(t.x, n.x) && e.y <= Math.max(t.y, n.y) && e.y >= Math.min(t.y, n.y)
  }

  function ao(t) {
      return t > 0 ? 1 : t < 0 ? -1 : 0
  }

  function co(t, e) {
      return io(t.prev, t, t.next) < 0 ? io(t, e, t.next) >= 0 && io(t, t.prev, e) >= 0 : io(t, e, t.prev) < 0 || io(t, t.next, e) < 0
  }

  function lo(t, e) {
      const n = new po(t.i, t.x, t.y),
          i = new po(e.i, e.x, e.y),
          r = t.next,
          s = e.prev;
      return t.next = e, e.prev = t, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, i.prev = s, i
  }

  function ho(t, e, n, i) {
      const r = new po(t, e, n);
      return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r
  }

  function uo(t) {
      t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
  }

  function po(t, e, n) {
      this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
  }
  const fo = {
      area: function(t) {
          const e = t.length;
          let n = 0;
          for (let i = e - 1, r = 0; r < e; i = r++) n += t[i].x * t[r].y - t[r].x * t[i].y;
          return .5 * n
      },
      isClockWise: function(t) {
          return fo.area(t) < 0
      },
      triangulateShape: function(t, e) {
          const n = [],
              i = [],
              r = [];
          mo(t), go(n, t);
          let s = t.length;
          e.forEach(mo);
          for (let t = 0; t < e.length; t++) i.push(s), s += e[t].length, go(n, e[t]);
          const o = function(t, e, n) {
              n = n || 2;
              const i = e && e.length,
                  r = i ? e[0] * n : t.length;
              let s = Vs(t, 0, r, n, !0);
              const o = [];
              if (!s || s.next === s.prev) return o;
              let a, c, l, h, u, d, p;
              if (i && (s = function(t, e, n, i) {
                      const r = [];
                      let s, o, a, c, l;
                      for (s = 0, o = e.length; s < o; s++) a = e[s] * i, c = s < o - 1 ? e[s + 1] * i : t.length, l = Vs(t, a, c, i, !1), l === l.next && (l.steiner = !0), r.push(to(l));
                      for (r.sort(Js), s = 0; s < r.length; s++) Ks(r[s], n), n = js(n, n.next);
                      return n
                  }(t, e, s, n)), t.length > 80 * n) {
                  a = l = t[0], c = h = t[1];
                  for (let e = n; e < r; e += n) u = t[e], d = t[e + 1], u < a && (a = u), d < c && (c = d), u > l && (l = u), d > h && (h = d);
                  p = Math.max(l - a, h - c), p = 0 !== p ? 1 / p : 0
              }
              return Ws(s, o, n, a, c, p), o
          }(n, i);
          for (let t = 0; t < o.length; t += 3) r.push(o.slice(t, t + 3));
          return r
      }
  };

  function mo(t) {
      const e = t.length;
      e > 2 && t[e - 1].equals(t[0]) && t.pop()
  }

  function go(t, e) {
      for (let n = 0; n < e.length; n++) t.push(e[n].x), t.push(e[n].y)
  }
  class vo extends Ge {
      constructor(t, e) {
          super(), this.type = "ExtrudeBufferGeometry", this.parameters = {
              shapes: t,
              options: e
          }, t = Array.isArray(t) ? t : [t];
          const n = this,
              i = [],
              r = [];
          for (let e = 0, n = t.length; e < n; e++) s(t[e]);

          function s(t) {
              const s = [],
                  o = void 0 !== e.curveSegments ? e.curveSegments : 12,
                  a = void 0 !== e.steps ? e.steps : 1;
              let c = void 0 !== e.depth ? e.depth : 100,
                  l = void 0 === e.bevelEnabled || e.bevelEnabled,
                  h = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
                  u = void 0 !== e.bevelSize ? e.bevelSize : h - 2,
                  d = void 0 !== e.bevelOffset ? e.bevelOffset : 0,
                  p = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
              const f = e.extrudePath,
                  m = void 0 !== e.UVGenerator ? e.UVGenerator : yo;
              void 0 !== e.amount && (console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."), c = e.amount);
              let g, v, y, x, _, b = !1;
              f && (g = f.getSpacedPoints(a), b = !0, l = !1, v = f.computeFrenetFrames(a, !1), y = new W, x = new W, _ = new W), l || (p = 0, h = 0, u = 0, d = 0);
              const w = t.extractPoints(o);
              let M = w.shape;
              const S = w.holes;
              if (!fo.isClockWise(M)) {
                  M = M.reverse();
                  for (let t = 0, e = S.length; t < e; t++) {
                      const e = S[t];
                      fo.isClockWise(e) && (S[t] = e.reverse())
                  }
              }
              const T = fo.triangulateShape(M, S),
                  E = M;
              for (let t = 0, e = S.length; t < e; t++) {
                  const e = S[t];
                  M = M.concat(e)
              }

              function A(t, e, n) {
                  return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(n).add(t)
              }
              const L = M.length,
                  R = T.length;

              function P(t, e, n) {
                  let i, r, s;
                  const o = t.x - e.x,
                      a = t.y - e.y,
                      c = n.x - t.x,
                      l = n.y - t.y,
                      h = o * o + a * a,
                      u = o * l - a * c;
                  if (Math.abs(u) > Number.EPSILON) {
                      const u = Math.sqrt(h),
                          d = Math.sqrt(c * c + l * l),
                          p = e.x - a / u,
                          f = e.y + o / u,
                          m = ((n.x - l / d - p) * l - (n.y + c / d - f) * c) / (o * l - a * c);
                      i = p + o * m - t.x, r = f + a * m - t.y;
                      const g = i * i + r * r;
                      if (g <= 2) return new I(i, r);
                      s = Math.sqrt(g / 2)
                  } else {
                      let t = !1;
                      o > Number.EPSILON ? c > Number.EPSILON && (t = !0) : o < -Number.EPSILON ? c < -Number.EPSILON && (t = !0) : Math.sign(a) === Math.sign(l) && (t = !0), t ? (i = -a, r = o, s = Math.sqrt(h)) : (i = o, r = a, s = Math.sqrt(h / 2))
                  }
                  return new I(i / s, r / s)
              }
              const C = [];
              for (let t = 0, e = E.length, n = e - 1, i = t + 1; t < e; t++, n++, i++) n === e && (n = 0), i === e && (i = 0), C[t] = P(E[t], E[n], E[i]);
              const N = [];
              let O, D = C.concat();
              for (let t = 0, e = S.length; t < e; t++) {
                  const e = S[t];
                  O = [];
                  for (let t = 0, n = e.length, i = n - 1, r = t + 1; t < n; t++, i++, r++) i === n && (i = 0), r === n && (r = 0), O[t] = P(e[t], e[i], e[r]);
                  N.push(O), D = D.concat(O)
              }
              for (let t = 0; t < p; t++) {
                  const e = t / p,
                      n = h * Math.cos(e * Math.PI / 2),
                      i = u * Math.sin(e * Math.PI / 2) + d;
                  for (let t = 0, e = E.length; t < e; t++) {
                      const e = A(E[t], C[t], i);
                      H(e.x, e.y, -n)
                  }
                  for (let t = 0, e = S.length; t < e; t++) {
                      const e = S[t];
                      O = N[t];
                      for (let t = 0, r = e.length; t < r; t++) {
                          const r = A(e[t], O[t], i);
                          H(r.x, r.y, -n)
                      }
                  }
              }
              const U = u + d;
              for (let t = 0; t < L; t++) {
                  const e = l ? A(M[t], D[t], U) : M[t];
                  b ? (x.copy(v.normals[0]).multiplyScalar(e.x), y.copy(v.binormals[0]).multiplyScalar(e.y), _.copy(g[0]).add(x).add(y), H(_.x, _.y, _.z)) : H(e.x, e.y, 0)
              }
              for (let t = 1; t <= a; t++)
                  for (let e = 0; e < L; e++) {
                      const n = l ? A(M[e], D[e], U) : M[e];
                      b ? (x.copy(v.normals[t]).multiplyScalar(n.x), y.copy(v.binormals[t]).multiplyScalar(n.y), _.copy(g[t]).add(x).add(y), H(_.x, _.y, _.z)) : H(n.x, n.y, c / a * t)
                  }
              for (let t = p - 1; t >= 0; t--) {
                  const e = t / p,
                      n = h * Math.cos(e * Math.PI / 2),
                      i = u * Math.sin(e * Math.PI / 2) + d;
                  for (let t = 0, e = E.length; t < e; t++) {
                      const e = A(E[t], C[t], i);
                      H(e.x, e.y, c + n)
                  }
                  for (let t = 0, e = S.length; t < e; t++) {
                      const e = S[t];
                      O = N[t];
                      for (let t = 0, r = e.length; t < r; t++) {
                          const r = A(e[t], O[t], i);
                          b ? H(r.x, r.y + g[a - 1].y, g[a - 1].x + n) : H(r.x, r.y, c + n)
                      }
                  }
              }

              function F(t, e) {
                  let n = t.length;
                  for (; --n >= 0;) {
                      const i = n;
                      let r = n - 1;
                      r < 0 && (r = t.length - 1);
                      for (let t = 0, n = a + 2 * p; t < n; t++) {
                          const n = L * t,
                              s = L * (t + 1);
                          B(e + i + n, e + r + n, e + r + s, e + i + s)
                      }
                  }
              }

              function H(t, e, n) {
                  s.push(t), s.push(e), s.push(n)
              }

              function z(t, e, r) {
                  G(t), G(e), G(r);
                  const s = i.length / 3,
                      o = m.generateTopUV(n, i, s - 3, s - 2, s - 1);
                  k(o[0]), k(o[1]), k(o[2])
              }

              function B(t, e, r, s) {
                  G(t), G(e), G(s), G(e), G(r), G(s);
                  const o = i.length / 3,
                      a = m.generateSideWallUV(n, i, o - 6, o - 3, o - 2, o - 1);
                  k(a[0]), k(a[1]), k(a[3]), k(a[1]), k(a[2]), k(a[3])
              }

              function G(t) {
                  i.push(s[3 * t + 0]), i.push(s[3 * t + 1]), i.push(s[3 * t + 2])
              }

              function k(t) {
                  r.push(t.x), r.push(t.y)
              }! function() {
                  const t = i.length / 3;
                  if (l) {
                      let t = 0,
                          e = L * t;
                      for (let t = 0; t < R; t++) {
                          const n = T[t];
                          z(n[2] + e, n[1] + e, n[0] + e)
                      }
                      t = a + 2 * p, e = L * t;
                      for (let t = 0; t < R; t++) {
                          const n = T[t];
                          z(n[0] + e, n[1] + e, n[2] + e)
                      }
                  } else {
                      for (let t = 0; t < R; t++) {
                          const e = T[t];
                          z(e[2], e[1], e[0])
                      }
                      for (let t = 0; t < R; t++) {
                          const e = T[t];
                          z(e[0] + L * a, e[1] + L * a, e[2] + L * a)
                      }
                  }
                  n.addGroup(t, i.length / 3 - t, 0)
              }(),
              function() {
                  const t = i.length / 3;
                  let e = 0;
                  F(E, e), e += E.length;
                  for (let t = 0, n = S.length; t < n; t++) {
                      const n = S[t];
                      F(n, e), e += n.length
                  }
                  n.addGroup(t, i.length / 3 - t, 1)
              }()
          }
          this.setAttribute("position", new Le(i, 3)), this.setAttribute("uv", new Le(r, 2)), this.computeVertexNormals()
      }
      toJSON() {
          const t = Ge.prototype.toJSON.call(this);
          return function(t, e, n) {
              if (n.shapes = [], Array.isArray(t))
                  for (let e = 0, i = t.length; e < i; e++) {
                      const i = t[e];
                      n.shapes.push(i.uuid)
                  } else n.shapes.push(t.uuid);
              return void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON()), n
          }(this.parameters.shapes, this.parameters.options, t)
      }
  }
  const yo = {
      generateTopUV: function(t, e, n, i, r) {
          const s = e[3 * n],
              o = e[3 * n + 1],
              a = e[3 * i],
              c = e[3 * i + 1],
              l = e[3 * r],
              h = e[3 * r + 1];
          return [new I(s, o), new I(a, c), new I(l, h)]
      },
      generateSideWallUV: function(t, e, n, i, r, s) {
          const o = e[3 * n],
              a = e[3 * n + 1],
              c = e[3 * n + 2],
              l = e[3 * i],
              h = e[3 * i + 1],
              u = e[3 * i + 2],
              d = e[3 * r],
              p = e[3 * r + 1],
              f = e[3 * r + 2],
              m = e[3 * s],
              g = e[3 * s + 1],
              v = e[3 * s + 2];
          return Math.abs(a - h) < .01 ? [new I(o, 1 - c), new I(l, 1 - u), new I(d, 1 - f), new I(m, 1 - v)] : [new I(a, 1 - c), new I(h, 1 - u), new I(p, 1 - f), new I(g, 1 - v)]
      }
  };
  class xo extends ks {
      constructor(t, e) {
          super(), this.type = "ExtrudeGeometry", this.parameters = {
              shapes: t,
              options: e
          }, this.fromBufferGeometry(new vo(t, e)), this.mergeVertices()
      }
      toJSON() {
          const t = super.toJSON();
          return function(t, e, n) {
              if (n.shapes = [], Array.isArray(t))
                  for (let e = 0, i = t.length; e < i; e++) {
                      const i = t[e];
                      n.shapes.push(i.uuid)
                  } else n.shapes.push(t.uuid);
              return void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON()), n
          }(this.parameters.shapes, this.parameters.options, t)
      }
  }

  function _o(t, e, n) {
      Ge.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
          func: t,
          slices: e,
          stacks: n
      };
      const i = [],
          r = [],
          s = [],
          o = [],
          a = 1e-5,
          c = new W,
          l = new W,
          h = new W,
          u = new W,
          d = new W;
      t.length < 3 && console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
      const p = e + 1;
      for (let i = 0; i <= n; i++) {
          const p = i / n;
          for (let n = 0; n <= e; n++) {
              const i = n / e;
              t(i, p, l), r.push(l.x, l.y, l.z), i - a >= 0 ? (t(i - a, p, h), u.subVectors(l, h)) : (t(i + a, p, h), u.subVectors(h, l)), p - a >= 0 ? (t(i, p - a, h), d.subVectors(l, h)) : (t(i, p + a, h), d.subVectors(h, l)), c.crossVectors(u, d).normalize(), s.push(c.x, c.y, c.z), o.push(i, p)
          }
      }
      for (let t = 0; t < n; t++)
          for (let n = 0; n < e; n++) {
              const e = t * p + n,
                  r = t * p + n + 1,
                  s = (t + 1) * p + n + 1,
                  o = (t + 1) * p + n;
              i.push(e, r, o), i.push(r, s, o)
          }
      this.setIndex(i), this.setAttribute("position", new Le(r, 3)), this.setAttribute("normal", new Le(s, 3)), this.setAttribute("uv", new Le(o, 2))
  }

  function bo(t, e, n) {
      ks.call(this), this.type = "ParametricGeometry", this.parameters = {
          func: t,
          slices: e,
          stacks: n
      }, this.fromBufferGeometry(new _o(t, e, n)), this.mergeVertices()
  }
  _o.prototype = Object.create(Ge.prototype), _o.prototype.constructor = _o, bo.prototype = Object.create(ks.prototype), bo.prototype.constructor = bo;
  class wo extends Ge {
      constructor(t, e = 12) {
          super(), this.type = "ShapeBufferGeometry", this.parameters = {
              shapes: t,
              curveSegments: e
          };
          const n = [],
              i = [],
              r = [],
              s = [];
          let o = 0,
              a = 0;
          if (!1 === Array.isArray(t)) c(t);
          else
              for (let e = 0; e < t.length; e++) c(t[e]), this.addGroup(o, a, e), o += a, a = 0;

          function c(t) {
              const o = i.length / 3,
                  c = t.extractPoints(e);
              let l = c.shape;
              const h = c.holes;
              !1 === fo.isClockWise(l) && (l = l.reverse());
              for (let t = 0, e = h.length; t < e; t++) {
                  const e = h[t];
                  !0 === fo.isClockWise(e) && (h[t] = e.reverse())
              }
              const u = fo.triangulateShape(l, h);
              for (let t = 0, e = h.length; t < e; t++) {
                  const e = h[t];
                  l = l.concat(e)
              }
              for (let t = 0, e = l.length; t < e; t++) {
                  const e = l[t];
                  i.push(e.x, e.y, 0), r.push(0, 0, 1), s.push(e.x, e.y)
              }
              for (let t = 0, e = u.length; t < e; t++) {
                  const e = u[t],
                      i = e[0] + o,
                      r = e[1] + o,
                      s = e[2] + o;
                  n.push(i, r, s), a += 3
              }
          }
          this.setIndex(n), this.setAttribute("position", new Le(i, 3)), this.setAttribute("normal", new Le(r, 3)), this.setAttribute("uv", new Le(s, 2))
      }
      toJSON() {
          const t = Ge.prototype.toJSON.call(this);
          return function(t, e) {
              if (e.shapes = [], Array.isArray(t))
                  for (let n = 0, i = t.length; n < i; n++) {
                      const i = t[n];
                      e.shapes.push(i.uuid)
                  } else e.shapes.push(t.uuid);
              return e
          }(this.parameters.shapes, t)
      }
  }
  class Mo extends ks {
      constructor(t, e) {
          super(), this.type = "ShapeGeometry", "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), e = e.curveSegments), this.parameters = {
              shapes: t,
              curveSegments: e
          }, this.fromBufferGeometry(new wo(t, e)), this.mergeVertices()
      }
      toJSON() {
          const t = ks.prototype.toJSON.call(this);
          return function(t, e) {
              if (e.shapes = [], Array.isArray(t))
                  for (let n = 0, i = t.length; n < i; n++) {
                      const i = t[n];
                      e.shapes.push(i.uuid)
                  } else e.shapes.push(t.uuid);
              return e
          }(this.parameters.shapes, t)
      }
  }
  class So extends Ge {
      constructor(t = 1, e = 8, n = 6, i = 0, r = 2 * Math.PI, s = 0, o = Math.PI) {
          super(), this.type = "SphereBufferGeometry", this.parameters = {
              radius: t,
              widthSegments: e,
              heightSegments: n,
              phiStart: i,
              phiLength: r,
              thetaStart: s,
              thetaLength: o
          }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
          const a = Math.min(s + o, Math.PI);
          let c = 0;
          const l = [],
              h = new W,
              u = new W,
              d = [],
              p = [],
              f = [],
              m = [];
          for (let d = 0; d <= n; d++) {
              const g = [],
                  v = d / n;
              let y = 0;
              0 == d && 0 == s ? y = .5 / e : d == n && a == Math.PI && (y = -.5 / e);
              for (let n = 0; n <= e; n++) {
                  const a = n / e;
                  h.x = -t * Math.cos(i + a * r) * Math.sin(s + v * o), h.y = t * Math.cos(s + v * o), h.z = t * Math.sin(i + a * r) * Math.sin(s + v * o), p.push(h.x, h.y, h.z), u.copy(h).normalize(), f.push(u.x, u.y, u.z), m.push(a + y, 1 - v), g.push(c++)
              }
              l.push(g)
          }
          for (let t = 0; t < n; t++)
              for (let i = 0; i < e; i++) {
                  const e = l[t][i + 1],
                      r = l[t][i],
                      o = l[t + 1][i],
                      c = l[t + 1][i + 1];
                  (0 !== t || s > 0) && d.push(e, r, c), (t !== n - 1 || a < Math.PI) && d.push(r, o, c)
              }
          this.setIndex(d), this.setAttribute("position", new Le(p, 3)), this.setAttribute("normal", new Le(f, 3)), this.setAttribute("uv", new Le(m, 2))
      }
  }

  function To(t) {
      me.call(this), this.type = "ShadowMaterial", this.color = new de(0), this.transparent = !0, this.setValues(t)
  }

  function Eo(t) {
      pn.call(this, t), this.type = "RawShaderMaterial"
  }

  function Ao(t) {
      me.call(this), this.defines = {
          STANDARD: ""
      }, this.type = "MeshStandardMaterial", this.color = new de(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new de(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new I(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.vertexTangents = !1, this.setValues(t)
  }

  function Lo(t) {
      Ao.call(this), this.defines = {
          STANDARD: "",
          PHYSICAL: ""
      }, this.type = "MeshPhysicalMaterial", this.clearcoat = 0, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new I(1, 1), this.clearcoatNormalMap = null, this.reflectivity = .5, Object.defineProperty(this, "ior", {
          get: function() {
              return (1 + .4 * this.reflectivity) / (1 - .4 * this.reflectivity)
          },
          set: function(t) {
              this.reflectivity = O.clamp(2.5 * (t - 1) / (t + 1), 0, 1)
          }
      }), this.sheen = null, this.transmission = 0, this.transmissionMap = null, this.setValues(t)
  }

  function Ro(t) {
      me.call(this), this.type = "MeshPhongMaterial", this.color = new de(16777215), this.specular = new de(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new de(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new I(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
  }

  function Po(t) {
      me.call(this), this.defines = {
          TOON: ""
      }, this.type = "MeshToonMaterial", this.color = new de(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new de(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new I(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
  }

  function Co(t) {
      me.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new I(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
  }

  function No(t) {
      me.call(this), this.type = "MeshLambertMaterial", this.color = new de(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new de(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
  }

  function Oo(t) {
      me.call(this), this.defines = {
          MATCAP: ""
      }, this.type = "MeshMatcapMaterial", this.color = new de(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new I(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
  }

  function Io(t) {
      gs.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
  }
  To.prototype = Object.create(me.prototype), To.prototype.constructor = To, To.prototype.isShadowMaterial = !0, To.prototype.copy = function(t) {
      return me.prototype.copy.call(this, t), this.color.copy(t.color), this
  }, Eo.prototype = Object.create(pn.prototype), Eo.prototype.constructor = Eo, Eo.prototype.isRawShaderMaterial = !0, Ao.prototype = Object.create(me.prototype), Ao.prototype.constructor = Ao, Ao.prototype.isMeshStandardMaterial = !0, Ao.prototype.copy = function(t) {
      return me.prototype.copy.call(this, t), this.defines = {
          STANDARD: ""
      }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.vertexTangents = t.vertexTangents, this
  }, Lo.prototype = Object.create(Ao.prototype), Lo.prototype.constructor = Lo, Lo.prototype.isMeshPhysicalMaterial = !0, Lo.prototype.copy = function(t) {
      return Ao.prototype.copy.call(this, t), this.defines = {
          STANDARD: "",
          PHYSICAL: ""
      }, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.reflectivity = t.reflectivity, t.sheen ? this.sheen = (this.sheen || new de).copy(t.sheen) : this.sheen = null, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this
  }, Ro.prototype = Object.create(me.prototype), Ro.prototype.constructor = Ro, Ro.prototype.isMeshPhongMaterial = !0, Ro.prototype.copy = function(t) {
      return me.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, Po.prototype = Object.create(me.prototype), Po.prototype.constructor = Po, Po.prototype.isMeshToonMaterial = !0, Po.prototype.copy = function(t) {
      return me.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, Co.prototype = Object.create(me.prototype), Co.prototype.constructor = Co, Co.prototype.isMeshNormalMaterial = !0, Co.prototype.copy = function(t) {
      return me.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, No.prototype = Object.create(me.prototype), No.prototype.constructor = No, No.prototype.isMeshLambertMaterial = !0, No.prototype.copy = function(t) {
      return me.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, Oo.prototype = Object.create(me.prototype), Oo.prototype.constructor = Oo, Oo.prototype.isMeshMatcapMaterial = !0, Oo.prototype.copy = function(t) {
      return me.prototype.copy.call(this, t), this.defines = {
          MATCAP: ""
      }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
  }, Io.prototype = Object.create(gs.prototype), Io.prototype.constructor = Io, Io.prototype.isLineDashedMaterial = !0, Io.prototype.copy = function(t) {
      return gs.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
  };
  var Do = Object.freeze({
      __proto__: null,
      ShadowMaterial: To,
      SpriteMaterial: Ur,
      RawShaderMaterial: Eo,
      ShaderMaterial: pn,
      PointsMaterial: As,
      MeshPhysicalMaterial: Lo,
      MeshStandardMaterial: Ao,
      MeshPhongMaterial: Ro,
      MeshToonMaterial: Po,
      MeshNormalMaterial: Co,
      MeshLambertMaterial: No,
      MeshDepthMaterial: xr,
      MeshDistanceMaterial: _r,
      MeshBasicMaterial: ge,
      MeshMatcapMaterial: Oo,
      LineDashedMaterial: Io,
      LineBasicMaterial: gs,
      Material: me
  });
  const Uo = {
      arraySlice: function(t, e, n) {
          return Uo.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== n ? n : t.length)) : t.slice(e, n)
      },
      convertArray: function(t, e, n) {
          return !t || !n && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
      },
      isTypedArray: function(t) {
          return ArrayBuffer.isView(t) && !(t instanceof DataView)
      },
      getKeyframeOrder: function(t) {
          const e = t.length,
              n = new Array(e);
          for (let t = 0; t !== e; ++t) n[t] = t;
          return n.sort((function(e, n) {
              return t[e] - t[n]
          })), n
      },
      sortedArray: function(t, e, n) {
          const i = t.length,
              r = new t.constructor(i);
          for (let s = 0, o = 0; o !== i; ++s) {
              const i = n[s] * e;
              for (let n = 0; n !== e; ++n) r[o++] = t[i + n]
          }
          return r
      },
      flattenJSON: function(t, e, n, i) {
          let r = 1,
              s = t[0];
          for (; void 0 !== s && void 0 === s[i];) s = t[r++];
          if (void 0 === s) return;
          let o = s[i];
          if (void 0 !== o)
              if (Array.isArray(o))
                  do {
                      o = s[i], void 0 !== o && (e.push(s.time), n.push.apply(n, o)), s = t[r++]
                  } while (void 0 !== s);
              else if (void 0 !== o.toArray)
              do {
                  o = s[i], void 0 !== o && (e.push(s.time), o.toArray(n, n.length)), s = t[r++]
              } while (void 0 !== s);
          else
              do {
                  o = s[i], void 0 !== o && (e.push(s.time), n.push(o)), s = t[r++]
              } while (void 0 !== s)
      },
      subclip: function(t, e, n, i, r = 30) {
          const s = t.clone();
          s.name = e;
          const o = [];
          for (let t = 0; t < s.tracks.length; ++t) {
              const e = s.tracks[t],
                  a = e.getValueSize(),
                  c = [],
                  l = [];
              for (let t = 0; t < e.times.length; ++t) {
                  const s = e.times[t] * r;
                  if (!(s < n || s >= i)) {
                      c.push(e.times[t]);
                      for (let n = 0; n < a; ++n) l.push(e.values[t * a + n])
                  }
              }
              0 !== c.length && (e.times = Uo.convertArray(c, e.times.constructor), e.values = Uo.convertArray(l, e.values.constructor), o.push(e))
          }
          s.tracks = o;
          let a = 1 / 0;
          for (let t = 0; t < s.tracks.length; ++t) a > s.tracks[t].times[0] && (a = s.tracks[t].times[0]);
          for (let t = 0; t < s.tracks.length; ++t) s.tracks[t].shift(-1 * a);
          return s.resetDuration(), s
      },
      makeClipAdditive: function(t, e = 0, n = t, i = 30) {
          i <= 0 && (i = 30);
          const r = n.tracks.length,
              s = e / i;
          for (let e = 0; e < r; ++e) {
              const i = n.tracks[e],
                  r = i.ValueTypeName;
              if ("bool" === r || "string" === r) continue;
              const o = t.tracks.find((function(t) {
                  return t.name === i.name && t.ValueTypeName === r
              }));
              if (void 0 === o) continue;
              let a = 0;
              const c = i.getValueSize();
              i.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (a = c / 3);
              let l = 0;
              const h = o.getValueSize();
              o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (l = h / 3);
              const u = i.times.length - 1;
              let d;
              if (s <= i.times[0]) {
                  const t = a,
                      e = c - a;
                  d = Uo.arraySlice(i.values, t, e)
              } else if (s >= i.times[u]) {
                  const t = u * c + a,
                      e = t + c - a;
                  d = Uo.arraySlice(i.values, t, e)
              } else {
                  const t = i.createInterpolant(),
                      e = a,
                      n = c - a;
                  t.evaluate(s), d = Uo.arraySlice(t.resultBuffer, e, n)
              }
              "quaternion" === r && (new j).fromArray(d).normalize().conjugate().toArray(d);
              const p = o.times.length;
              for (let t = 0; t < p; ++t) {
                  const e = t * h + l;
                  if ("quaternion" === r) j.multiplyQuaternionsFlat(o.values, e, d, 0, o.values, e);
                  else {
                      const t = h - 2 * l;
                      for (let n = 0; n < t; ++n) o.values[e + n] -= d[n]
                  }
              }
          }
          return t.blendMode = 2501, t
      }
  };

  function Fo(t, e, n, i) {
      this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n
  }

  function Ho(t, e, n, i) {
      Fo.call(this, t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
  }

  function zo(t, e, n, i) {
      Fo.call(this, t, e, n, i)
  }

  function Bo(t, e, n, i) {
      Fo.call(this, t, e, n, i)
  }

  function Go(t, e, n, i) {
      if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
      this.name = t, this.times = Uo.convertArray(e, this.TimeBufferType), this.values = Uo.convertArray(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation)
  }

  function ko(t, e, n) {
      Go.call(this, t, e, n)
  }

  function Vo(t, e, n, i) {
      Go.call(this, t, e, n, i)
  }

  function jo(t, e, n, i) {
      Go.call(this, t, e, n, i)
  }

  function Wo(t, e, n, i) {
      Fo.call(this, t, e, n, i)
  }

  function qo(t, e, n, i) {
      Go.call(this, t, e, n, i)
  }

  function Xo(t, e, n, i) {
      Go.call(this, t, e, n, i)
  }

  function Yo(t, e, n, i) {
      Go.call(this, t, e, n, i)
  }

  function Zo(t, e = -1, n, i = 2500) {
      this.name = t, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = O.generateUUID(), this.duration < 0 && this.resetDuration()
  }

  function Jo(t) {
      if (void 0 === t.type) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
      const e = function(t) {
          switch (t.toLowerCase()) {
              case "scalar":
              case "double":
              case "float":
              case "number":
              case "integer":
                  return jo;
              case "vector":
              case "vector2":
              case "vector3":
              case "vector4":
                  return Yo;
              case "color":
                  return Vo;
              case "quaternion":
                  return qo;
              case "bool":
              case "boolean":
                  return ko;
              case "string":
                  return Xo
          }
          throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + t)
      }(t.type);
      if (void 0 === t.times) {
          const e = [],
              n = [];
          Uo.flattenJSON(t.keys, e, n, "value"), t.times = e, t.values = n
      }
      return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
  }
  Object.assign(Fo.prototype, {
      evaluate: function(t) {
          const e = this.parameterPositions;
          let n = this._cachedIndex,
              i = e[n],
              r = e[n - 1];
          t: {
              e: {
                  let s;n: {
                      i: if (!(t < i)) {
                          for (let s = n + 2;;) {
                              if (void 0 === i) {
                                  if (t < r) break i;
                                  return n = e.length, this._cachedIndex = n, this.afterEnd_(n - 1, t, r)
                              }
                              if (n === s) break;
                              if (r = i, i = e[++n], t < i) break e
                          }
                          s = e.length;
                          break n
                      }if (t >= r) break t; {
                          const o = e[1];
                          t < o && (n = 2, r = o);
                          for (let s = n - 2;;) {
                              if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, i);
                              if (n === s) break;
                              if (i = r, r = e[--n - 1], t >= r) break e
                          }
                          s = n, n = 0
                      }
                  }
                  for (; n < s;) {
                      const i = n + s >>> 1;
                      t < e[i] ? s = i : n = i + 1
                  }
                  if (i = e[n], r = e[n - 1], void 0 === r) return this._cachedIndex = 0,
                  this.beforeStart_(0, t, i);
                  if (void 0 === i) return n = e.length,
                  this._cachedIndex = n,
                  this.afterEnd_(n - 1, r, t)
              }
              this._cachedIndex = n,
              this.intervalChanged_(n, r, i)
          }
          return this.interpolate_(n, r, t, i)
      },
      settings: null,
      DefaultSettings_: {},
      getSettings_: function() {
          return this.settings || this.DefaultSettings_
      },
      copySampleValue_: function(t) {
          const e = this.resultBuffer,
              n = this.sampleValues,
              i = this.valueSize,
              r = t * i;
          for (let t = 0; t !== i; ++t) e[t] = n[r + t];
          return e
      },
      interpolate_: function() {
          throw new Error("call to abstract method")
      },
      intervalChanged_: function() {}
  }), Object.assign(Fo.prototype, {
      beforeStart_: Fo.prototype.copySampleValue_,
      afterEnd_: Fo.prototype.copySampleValue_
  }), Ho.prototype = Object.assign(Object.create(Fo.prototype), {
      constructor: Ho,
      DefaultSettings_: {
          endingStart: b,
          endingEnd: b
      },
      intervalChanged_: function(t, e, n) {
          const i = this.parameterPositions;
          let r = t - 2,
              s = t + 1,
              o = i[r],
              a = i[s];
          if (void 0 === o) switch (this.getSettings_().endingStart) {
              case w:
                  r = t, o = 2 * e - n;
                  break;
              case M:
                  r = i.length - 2, o = e + i[r] - i[r + 1];
                  break;
              default:
                  r = t, o = n
          }
          if (void 0 === a) switch (this.getSettings_().endingEnd) {
              case w:
                  s = t, a = 2 * n - e;
                  break;
              case M:
                  s = 1, a = n + i[1] - i[0];
                  break;
              default:
                  s = t - 1, a = e
          }
          const c = .5 * (n - e),
              l = this.valueSize;
          this._weightPrev = c / (e - o), this._weightNext = c / (a - n), this._offsetPrev = r * l, this._offsetNext = s * l
      },
      interpolate_: function(t, e, n, i) {
          const r = this.resultBuffer,
              s = this.sampleValues,
              o = this.valueSize,
              a = t * o,
              c = a - o,
              l = this._offsetPrev,
              h = this._offsetNext,
              u = this._weightPrev,
              d = this._weightNext,
              p = (n - e) / (i - e),
              f = p * p,
              m = f * p,
              g = -u * m + 2 * u * f - u * p,
              v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * p + 1,
              y = (-1 - d) * m + (1.5 + d) * f + .5 * p,
              x = d * m - d * f;
          for (let t = 0; t !== o; ++t) r[t] = g * s[l + t] + v * s[c + t] + y * s[a + t] + x * s[h + t];
          return r
      }
  }), zo.prototype = Object.assign(Object.create(Fo.prototype), {
      constructor: zo,
      interpolate_: function(t, e, n, i) {
          const r = this.resultBuffer,
              s = this.sampleValues,
              o = this.valueSize,
              a = t * o,
              c = a - o,
              l = (n - e) / (i - e),
              h = 1 - l;
          for (let t = 0; t !== o; ++t) r[t] = s[c + t] * h + s[a + t] * l;
          return r
      }
  }), Bo.prototype = Object.assign(Object.create(Fo.prototype), {
      constructor: Bo,
      interpolate_: function(t) {
          return this.copySampleValue_(t - 1)
      }
  }), Object.assign(Go, {
      toJSON: function(t) {
          const e = t.constructor;
          let n;
          if (void 0 !== e.toJSON) n = e.toJSON(t);
          else {
              n = {
                  name: t.name,
                  times: Uo.convertArray(t.times, Array),
                  values: Uo.convertArray(t.values, Array)
              };
              const e = t.getInterpolation();
              e !== t.DefaultInterpolation && (n.interpolation = e)
          }
          return n.type = t.ValueTypeName, n
      }
  }), Object.assign(Go.prototype, {
      constructor: Go,
      TimeBufferType: Float32Array,
      ValueBufferType: Float32Array,
      DefaultInterpolation: x,
      InterpolantFactoryMethodDiscrete: function(t) {
          return new Bo(this.times, this.values, this.getValueSize(), t)
      },
      InterpolantFactoryMethodLinear: function(t) {
          return new zo(this.times, this.values, this.getValueSize(), t)
      },
      InterpolantFactoryMethodSmooth: function(t) {
          return new Ho(this.times, this.values, this.getValueSize(), t)
      },
      setInterpolation: function(t) {
          let e;
          switch (t) {
              case y:
                  e = this.InterpolantFactoryMethodDiscrete;
                  break;
              case x:
                  e = this.InterpolantFactoryMethodLinear;
                  break;
              case _:
                  e = this.InterpolantFactoryMethodSmooth
          }
          if (void 0 === e) {
              const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
              if (void 0 === this.createInterpolant) {
                  if (t === this.DefaultInterpolation) throw new Error(e);
                  this.setInterpolation(this.DefaultInterpolation)
              }
              return console.warn("THREE.KeyframeTrack:", e), this
          }
          return this.createInterpolant = e, this
      },
      getInterpolation: function() {
          switch (this.createInterpolant) {
              case this.InterpolantFactoryMethodDiscrete:
                  return y;
              case this.InterpolantFactoryMethodLinear:
                  return x;
              case this.InterpolantFactoryMethodSmooth:
                  return _
          }
      },
      getValueSize: function() {
          return this.values.length / this.times.length
      },
      shift: function(t) {
          if (0 !== t) {
              const e = this.times;
              for (let n = 0, i = e.length; n !== i; ++n) e[n] += t
          }
          return this
      },
      scale: function(t) {
          if (1 !== t) {
              const e = this.times;
              for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t
          }
          return this
      },
      trim: function(t, e) {
          const n = this.times,
              i = n.length;
          let r = 0,
              s = i - 1;
          for (; r !== i && n[r] < t;) ++r;
          for (; - 1 !== s && n[s] > e;) --s;
          if (++s, 0 !== r || s !== i) {
              r >= s && (s = Math.max(s, 1), r = s - 1);
              const t = this.getValueSize();
              this.times = Uo.arraySlice(n, r, s), this.values = Uo.arraySlice(this.values, r * t, s * t)
          }
          return this
      },
      validate: function() {
          let t = !0;
          const e = this.getValueSize();
          e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
          const n = this.times,
              i = this.values,
              r = n.length;
          0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
          let s = null;
          for (let e = 0; e !== r; e++) {
              const i = n[e];
              if ("number" == typeof i && isNaN(i)) {
                  console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e, i), t = !1;
                  break
              }
              if (null !== s && s > i) {
                  console.error("THREE.KeyframeTrack: Out of order keys.", this, e, i, s), t = !1;
                  break
              }
              s = i
          }
          if (void 0 !== i && Uo.isTypedArray(i))
              for (let e = 0, n = i.length; e !== n; ++e) {
                  const n = i[e];
                  if (isNaN(n)) {
                      console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e, n), t = !1;
                      break
                  }
              }
          return t
      },
      optimize: function() {
          const t = Uo.arraySlice(this.times),
              e = Uo.arraySlice(this.values),
              n = this.getValueSize(),
              i = this.getInterpolation() === _,
              r = t.length - 1;
          let s = 1;
          for (let o = 1; o < r; ++o) {
              let r = !1;
              const a = t[o];
              if (a !== t[o + 1] && (1 !== o || a !== a[0]))
                  if (i) r = !0;
                  else {
                      const t = o * n,
                          i = t - n,
                          s = t + n;
                      for (let o = 0; o !== n; ++o) {
                          const n = e[t + o];
                          if (n !== e[i + o] || n !== e[s + o]) {
                              r = !0;
                              break
                          }
                      }
                  } if (r) {
                  if (o !== s) {
                      t[s] = t[o];
                      const i = o * n,
                          r = s * n;
                      for (let t = 0; t !== n; ++t) e[r + t] = e[i + t]
                  }++s
              }
          }
          if (r > 0) {
              t[s] = t[r];
              for (let t = r * n, i = s * n, o = 0; o !== n; ++o) e[i + o] = e[t + o];
              ++s
          }
          return s !== t.length ? (this.times = Uo.arraySlice(t, 0, s), this.values = Uo.arraySlice(e, 0, s * n)) : (this.times = t, this.values = e), this
      },
      clone: function() {
          const t = Uo.arraySlice(this.times, 0),
              e = Uo.arraySlice(this.values, 0),
              n = new(0, this.constructor)(this.name, t, e);
          return n.createInterpolant = this.createInterpolant, n
      }
  }), ko.prototype = Object.assign(Object.create(Go.prototype), {
      constructor: ko,
      ValueTypeName: "bool",
      ValueBufferType: Array,
      DefaultInterpolation: y,
      InterpolantFactoryMethodLinear: void 0,
      InterpolantFactoryMethodSmooth: void 0
  }), Vo.prototype = Object.assign(Object.create(Go.prototype), {
      constructor: Vo,
      ValueTypeName: "color"
  }), jo.prototype = Object.assign(Object.create(Go.prototype), {
      constructor: jo,
      ValueTypeName: "number"
  }), Wo.prototype = Object.assign(Object.create(Fo.prototype), {
      constructor: Wo,
      interpolate_: function(t, e, n, i) {
          const r = this.resultBuffer,
              s = this.sampleValues,
              o = this.valueSize,
              a = (n - e) / (i - e);
          let c = t * o;
          for (let t = c + o; c !== t; c += 4) j.slerpFlat(r, 0, s, c - o, s, c, a);
          return r
      }
  }), qo.prototype = Object.assign(Object.create(Go.prototype), {
      constructor: qo,
      ValueTypeName: "quaternion",
      DefaultInterpolation: x,
      InterpolantFactoryMethodLinear: function(t) {
          return new Wo(this.times, this.values, this.getValueSize(), t)
      },
      InterpolantFactoryMethodSmooth: void 0
  }), Xo.prototype = Object.assign(Object.create(Go.prototype), {
      constructor: Xo,
      ValueTypeName: "string",
      ValueBufferType: Array,
      DefaultInterpolation: y,
      InterpolantFactoryMethodLinear: void 0,
      InterpolantFactoryMethodSmooth: void 0
  }), Yo.prototype = Object.assign(Object.create(Go.prototype), {
      constructor: Yo,
      ValueTypeName: "vector"
  }), Object.assign(Zo, {
      parse: function(t) {
          const e = [],
              n = t.tracks,
              i = 1 / (t.fps || 1);
          for (let t = 0, r = n.length; t !== r; ++t) e.push(Jo(n[t]).scale(i));
          const r = new Zo(t.name, t.duration, e, t.blendMode);
          return r.uuid = t.uuid, r
      },
      toJSON: function(t) {
          const e = [],
              n = t.tracks,
              i = {
                  name: t.name,
                  duration: t.duration,
                  tracks: e,
                  uuid: t.uuid,
                  blendMode: t.blendMode
              };
          for (let t = 0, i = n.length; t !== i; ++t) e.push(Go.toJSON(n[t]));
          return i
      },
      CreateFromMorphTargetSequence: function(t, e, n, i) {
          const r = e.length,
              s = [];
          for (let t = 0; t < r; t++) {
              let o = [],
                  a = [];
              o.push((t + r - 1) % r, t, (t + 1) % r), a.push(0, 1, 0);
              const c = Uo.getKeyframeOrder(o);
              o = Uo.sortedArray(o, 1, c), a = Uo.sortedArray(a, 1, c), i || 0 !== o[0] || (o.push(r), a.push(a[0])), s.push(new jo(".morphTargetInfluences[" + e[t].name + "]", o, a).scale(1 / n))
          }
          return new Zo(t, -1, s)
      },
      findByName: function(t, e) {
          let n = t;
          if (!Array.isArray(t)) {
              const e = t;
              n = e.geometry && e.geometry.animations || e.animations
          }
          for (let t = 0; t < n.length; t++)
              if (n[t].name === e) return n[t];
          return null
      },
      CreateClipsFromMorphTargetSequences: function(t, e, n) {
          const i = {},
              r = /^([\w-]*?)([\d]+)$/;
          for (let e = 0, n = t.length; e < n; e++) {
              const n = t[e],
                  s = n.name.match(r);
              if (s && s.length > 1) {
                  const t = s[1];
                  let e = i[t];
                  e || (i[t] = e = []), e.push(n)
              }
          }
          const s = [];
          for (const t in i) s.push(Zo.CreateFromMorphTargetSequence(t, i[t], e, n));
          return s
      },
      parseAnimation: function(t, e) {
          if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
          const n = function(t, e, n, i, r) {
                  if (0 !== n.length) {
                      const s = [],
                          o = [];
                      Uo.flattenJSON(n, s, o, i), 0 !== s.length && r.push(new t(e, s, o))
                  }
              },
              i = [],
              r = t.name || "default",
              s = t.fps || 30,
              o = t.blendMode;
          let a = t.length || -1;
          const c = t.hierarchy || [];
          for (let t = 0; t < c.length; t++) {
              const r = c[t].keys;
              if (r && 0 !== r.length)
                  if (r[0].morphTargets) {
                      const t = {};
                      let e;
                      for (e = 0; e < r.length; e++)
                          if (r[e].morphTargets)
                              for (let n = 0; n < r[e].morphTargets.length; n++) t[r[e].morphTargets[n]] = -1;
                      for (const n in t) {
                          const t = [],
                              s = [];
                          for (let i = 0; i !== r[e].morphTargets.length; ++i) {
                              const i = r[e];
                              t.push(i.time), s.push(i.morphTarget === n ? 1 : 0)
                          }
                          i.push(new jo(".morphTargetInfluence[" + n + "]", t, s))
                      }
                      a = t.length * (s || 1)
                  } else {
                      const s = ".bones[" + e[t].name + "]";
                      n(Yo, s + ".position", r, "pos", i), n(qo, s + ".quaternion", r, "rot", i), n(Yo, s + ".scale", r, "scl", i)
                  }
          }
          return 0 === i.length ? null : new Zo(r, a, i, o)
      }
  }), Object.assign(Zo.prototype, {
      resetDuration: function() {
          let t = 0;
          for (let e = 0, n = this.tracks.length; e !== n; ++e) {
              const n = this.tracks[e];
              t = Math.max(t, n.times[n.times.length - 1])
          }
          return this.duration = t, this
      },
      trim: function() {
          for (let t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
          return this
      },
      validate: function() {
          let t = !0;
          for (let e = 0; e < this.tracks.length; e++) t = t && this.tracks[e].validate();
          return t
      },
      optimize: function() {
          for (let t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
          return this
      },
      clone: function() {
          const t = [];
          for (let e = 0; e < this.tracks.length; e++) t.push(this.tracks[e].clone());
          return new Zo(this.name, this.duration, t, this.blendMode)
      },
      toJSON: function() {
          return Zo.toJSON(this)
      }
  });
  const Ko = {
      enabled: !1,
      files: {},
      add: function(t, e) {
          !1 !== this.enabled && (this.files[t] = e)
      },
      get: function(t) {
          if (!1 !== this.enabled) return this.files[t]
      },
      remove: function(t) {
          delete this.files[t]
      },
      clear: function() {
          this.files = {}
      }
  };

  function Qo(t, e, n) {
      const i = this;
      let r, s = !1,
          o = 0,
          a = 0;
      const c = [];
      this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(t) {
          a++, !1 === s && void 0 !== i.onStart && i.onStart(t, o, a), s = !0
      }, this.itemEnd = function(t) {
          o++, void 0 !== i.onProgress && i.onProgress(t, o, a), o === a && (s = !1, void 0 !== i.onLoad && i.onLoad())
      }, this.itemError = function(t) {
          void 0 !== i.onError && i.onError(t)
      }, this.resolveURL = function(t) {
          return r ? r(t) : t
      }, this.setURLModifier = function(t) {
          return r = t, this
      }, this.addHandler = function(t, e) {
          return c.push(t, e), this
      }, this.removeHandler = function(t) {
          const e = c.indexOf(t);
          return -1 !== e && c.splice(e, 2), this
      }, this.getHandler = function(t) {
          for (let e = 0, n = c.length; e < n; e += 2) {
              const n = c[e],
                  i = c[e + 1];
              if (n.global && (n.lastIndex = 0), n.test(t)) return i
          }
          return null
      }
  }
  const $o = new Qo;

  function ta(t) {
      this.manager = void 0 !== t ? t : $o, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
  }
  Object.assign(ta.prototype, {
      load: function() {},
      loadAsync: function(t, e) {
          const n = this;
          return new Promise((function(i, r) {
              n.load(t, i, e, r)
          }))
      },
      parse: function() {},
      setCrossOrigin: function(t) {
          return this.crossOrigin = t, this
      },
      setWithCredentials: function(t) {
          return this.withCredentials = t, this
      },
      setPath: function(t) {
          return this.path = t, this
      },
      setResourcePath: function(t) {
          return this.resourcePath = t, this
      },
      setRequestHeader: function(t) {
          return this.requestHeader = t, this
      }
  });
  const ea = {};

  function na(t) {
      ta.call(this, t)
  }

  function ia(t) {
      ta.call(this, t)
  }

  function ra(t) {
      ta.call(this, t)
  }

  function sa(t) {
      ta.call(this, t)
  }

  function oa(t) {
      ta.call(this, t)
  }

  function aa(t) {
      ta.call(this, t)
  }

  function ca(t) {
      ta.call(this, t)
  }

  function la() {
      this.type = "Curve", this.arcLengthDivisions = 200
  }

  function ha(t, e, n, i, r, s, o, a) {
      la.call(this), this.type = "EllipseCurve", this.aX = t || 0, this.aY = e || 0, this.xRadius = n || 1, this.yRadius = i || 1, this.aStartAngle = r || 0, this.aEndAngle = s || 2 * Math.PI, this.aClockwise = o || !1, this.aRotation = a || 0
  }

  function ua(t, e, n, i, r, s) {
      ha.call(this, t, e, n, n, i, r, s), this.type = "ArcCurve"
  }

  function da() {
      let t = 0,
          e = 0,
          n = 0,
          i = 0;

      function r(r, s, o, a) {
          t = r, e = o, n = -3 * r + 3 * s - 2 * o - a, i = 2 * r - 2 * s + o + a
      }
      return {
          initCatmullRom: function(t, e, n, i, s) {
              r(e, n, s * (n - t), s * (i - e))
          },
          initNonuniformCatmullRom: function(t, e, n, i, s, o, a) {
              let c = (e - t) / s - (n - t) / (s + o) + (n - e) / o,
                  l = (n - e) / o - (i - e) / (o + a) + (i - n) / a;
              c *= o, l *= o, r(e, n, c, l)
          },
          calc: function(r) {
              const s = r * r;
              return t + e * r + n * s + i * (s * r)
          }
      }
  }
  na.prototype = Object.assign(Object.create(ta.prototype), {
      constructor: na,
      load: function(t, e, n, i) {
          void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
          const r = this,
              s = Ko.get(t);
          if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function() {
              e && e(s), r.manager.itemEnd(t)
          }), 0), s;
          if (void 0 !== ea[t]) return void ea[t].push({
              onLoad: e,
              onProgress: n,
              onError: i
          });
          const o = t.match(/^data:(.*?)(;base64)?,(.*)$/);
          let a;
          if (o) {
              const n = o[1],
                  s = !!o[2];
              let a = o[3];
              a = decodeURIComponent(a), s && (a = atob(a));
              try {
                  let i;
                  const s = (this.responseType || "").toLowerCase();
                  switch (s) {
                      case "arraybuffer":
                      case "blob":
                          const t = new Uint8Array(a.length);
                          for (let e = 0; e < a.length; e++) t[e] = a.charCodeAt(e);
                          i = "blob" === s ? new Blob([t.buffer], {
                              type: n
                          }) : t.buffer;
                          break;
                      case "document":
                          const e = new DOMParser;
                          i = e.parseFromString(a, n);
                          break;
                      case "json":
                          i = JSON.parse(a);
                          break;
                      default:
                          i = a
                  }
                  setTimeout((function() {
                      e && e(i), r.manager.itemEnd(t)
                  }), 0)
              } catch (e) {
                  setTimeout((function() {
                      i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
                  }), 0)
              }
          } else {
              ea[t] = [], ea[t].push({
                  onLoad: e,
                  onProgress: n,
                  onError: i
              }), a = new XMLHttpRequest, a.open("GET", t, !0), a.addEventListener("load", (function(e) {
                  const n = this.response,
                      i = ea[t];
                  if (delete ea[t], 200 === this.status || 0 === this.status) {
                      0 === this.status && console.warn("THREE.FileLoader: HTTP Status 0 received."), Ko.add(t, n);
                      for (let t = 0, e = i.length; t < e; t++) {
                          const e = i[t];
                          e.onLoad && e.onLoad(n)
                      }
                      r.manager.itemEnd(t)
                  } else {
                      for (let t = 0, n = i.length; t < n; t++) {
                          const n = i[t];
                          n.onError && n.onError(e)
                      }
                      r.manager.itemError(t), r.manager.itemEnd(t)
                  }
              }), !1), a.addEventListener("progress", (function(e) {
                  const n = ea[t];
                  for (let t = 0, i = n.length; t < i; t++) {
                      const i = n[t];
                      i.onProgress && i.onProgress(e)
                  }
              }), !1), a.addEventListener("error", (function(e) {
                  const n = ea[t];
                  delete ea[t];
                  for (let t = 0, i = n.length; t < i; t++) {
                      const i = n[t];
                      i.onError && i.onError(e)
                  }
                  r.manager.itemError(t), r.manager.itemEnd(t)
              }), !1), a.addEventListener("abort", (function(e) {
                  const n = ea[t];
                  delete ea[t];
                  for (let t = 0, i = n.length; t < i; t++) {
                      const i = n[t];
                      i.onError && i.onError(e)
                  }
                  r.manager.itemError(t), r.manager.itemEnd(t)
              }), !1), void 0 !== this.responseType && (a.responseType = this.responseType), void 0 !== this.withCredentials && (a.withCredentials = this.withCredentials), a.overrideMimeType && a.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
              for (const t in this.requestHeader) a.setRequestHeader(t, this.requestHeader[t]);
              a.send(null)
          }
          return r.manager.itemStart(t), a
      },
      setResponseType: function(t) {
          return this.responseType = t, this
      },
      setMimeType: function(t) {
          return this.mimeType = t, this
      }
  }), ia.prototype = Object.assign(Object.create(ta.prototype), {
      constructor: ia,
      load: function(t, e, n, i) {
          const r = this,
              s = new na(r.manager);
          s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, (function(n) {
              try {
                  e(r.parse(JSON.parse(n)))
              } catch (e) {
                  i ? i(e) : console.error(e), r.manager.itemError(t)
              }
          }), n, i)
      },
      parse: function(t) {
          const e = [];
          for (let n = 0; n < t.length; n++) {
              const i = Zo.parse(t[n]);
              e.push(i)
          }
          return e
      }
  }), ra.prototype = Object.assign(Object.create(ta.prototype), {
      constructor: ra,
      load: function(t, e, n, i) {
          const r = this,
              s = [],
              o = new Ds,
              c = new na(this.manager);
          c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(r.withCredentials);
          let l = 0;

          function h(h) {
              c.load(t[h], (function(t) {
                  const n = r.parse(t, !0);
                  s[h] = {
                      width: n.width,
                      height: n.height,
                      format: n.format,
                      mipmaps: n.mipmaps
                  }, l += 1, 6 === l && (1 === n.mipmapCount && (o.minFilter = a), o.image = s, o.format = n.format, o.needsUpdate = !0, e && e(o))
              }), n, i)
          }
          if (Array.isArray(t))
              for (let e = 0, n = t.length; e < n; ++e) h(e);
          else c.load(t, (function(t) {
              const n = r.parse(t, !0);
              if (n.isCubemap) {
                  const t = n.mipmaps.length / n.mipmapCount;
                  for (let e = 0; e < t; e++) {
                      s[e] = {
                          mipmaps: []
                      };
                      for (let t = 0; t < n.mipmapCount; t++) s[e].mipmaps.push(n.mipmaps[e * n.mipmapCount + t]), s[e].format = n.format, s[e].width = n.width, s[e].height = n.height
                  }
                  o.image = s
              } else o.image.width = n.width, o.image.height = n.height, o.mipmaps = n.mipmaps;
              1 === n.mipmapCount && (o.minFilter = a), o.format = n.format, o.needsUpdate = !0, e && e(o)
          }), n, i);
          return o
      }
  }), sa.prototype = Object.assign(Object.create(ta.prototype), {
      constructor: sa,
      load: function(t, e, n, i) {
          void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
          const r = this,
              s = Ko.get(t);
          if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function() {
              e && e(s), r.manager.itemEnd(t)
          }), 0), s;
          const o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");

          function a() {
              o.removeEventListener("load", a, !1), o.removeEventListener("error", c, !1), Ko.add(t, this), e && e(this), r.manager.itemEnd(t)
          }

          function c(e) {
              o.removeEventListener("load", a, !1), o.removeEventListener("error", c, !1), i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
          }
          return o.addEventListener("load", a, !1), o.addEventListener("error", c, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(t), o.src = t, o
      }
  }), oa.prototype = Object.assign(Object.create(ta.prototype), {
      constructor: oa,
      load: function(t, e, n, i) {
          const r = new yn,
              s = new sa(this.manager);
          s.setCrossOrigin(this.crossOrigin), s.setPath(this.path);
          let o = 0;

          function a(n) {
              s.load(t[n], (function(t) {
                  r.images[n] = t, o++, 6 === o && (r.needsUpdate = !0, e && e(r))
              }), void 0, i)
          }
          for (let e = 0; e < t.length; ++e) a(e);
          return r
      }
  }), aa.prototype = Object.assign(Object.create(ta.prototype), {
      constructor: aa,
      load: function(t, e, i, r) {
          const s = this,
              o = new _n,
              l = new na(this.manager);
          return l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setPath(this.path), l.setWithCredentials(s.withCredentials), l.load(t, (function(t) {
              const i = s.parse(t);
              i && (void 0 !== i.image ? o.image = i.image : void 0 !== i.data && (o.image.width = i.width, o.image.height = i.height, o.image.data = i.data), o.wrapS = void 0 !== i.wrapS ? i.wrapS : n, o.wrapT = void 0 !== i.wrapT ? i.wrapT : n, o.magFilter = void 0 !== i.magFilter ? i.magFilter : a, o.minFilter = void 0 !== i.minFilter ? i.minFilter : a, o.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.format && (o.format = i.format), void 0 !== i.type && (o.type = i.type), void 0 !== i.mipmaps && (o.mipmaps = i.mipmaps, o.minFilter = c), 1 === i.mipmapCount && (o.minFilter = a), o.needsUpdate = !0, e && e(o, i))
          }), i, r), o
      }
  }), ca.prototype = Object.assign(Object.create(ta.prototype), {
      constructor: ca,
      load: function(t, e, n, i) {
          const r = new z,
              s = new sa(this.manager);
          return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(t, (function(n) {
              r.image = n;
              const i = t.search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/);
              r.format = i ? f : m, r.needsUpdate = !0, void 0 !== e && e(r)
          }), n, i), r
      }
  }), Object.assign(la.prototype, {
      getPoint: function() {
          return console.warn("THREE.Curve: .getPoint() not implemented."), null
      },
      getPointAt: function(t, e) {
          const n = this.getUtoTmapping(t);
          return this.getPoint(n, e)
      },
      getPoints: function(t = 5) {
          const e = [];
          for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
          return e
      },
      getSpacedPoints: function(t = 5) {
          const e = [];
          for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
          return e
      },
      getLength: function() {
          const t = this.getLengths();
          return t[t.length - 1]
      },
      getLengths: function(t) {
          if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
          this.needsUpdate = !1;
          const e = [];
          let n, i = this.getPoint(0),
              r = 0;
          e.push(0);
          for (let s = 1; s <= t; s++) n = this.getPoint(s / t), r += n.distanceTo(i), e.push(r), i = n;
          return this.cacheArcLengths = e, e
      },
      updateArcLengths: function() {
          this.needsUpdate = !0, this.getLengths()
      },
      getUtoTmapping: function(t, e) {
          const n = this.getLengths();
          let i = 0;
          const r = n.length;
          let s;
          s = e || t * n[r - 1];
          let o, a = 0,
              c = r - 1;
          for (; a <= c;)
              if (i = Math.floor(a + (c - a) / 2), o = n[i] - s, o < 0) a = i + 1;
              else {
                  if (!(o > 0)) {
                      c = i;
                      break
                  }
                  c = i - 1
              } if (i = c, n[i] === s) return i / (r - 1);
          const l = n[i];
          return (i + (s - l) / (n[i + 1] - l)) / (r - 1)
      },
      getTangent: function(t, e) {
          const n = 1e-4;
          let i = t - n,
              r = t + n;
          i < 0 && (i = 0), r > 1 && (r = 1);
          const s = this.getPoint(i),
              o = this.getPoint(r),
              a = e || (s.isVector2 ? new I : new W);
          return a.copy(o).sub(s).normalize(), a
      },
      getTangentAt: function(t, e) {
          const n = this.getUtoTmapping(t);
          return this.getTangent(n, e)
      },
      computeFrenetFrames: function(t, e) {
          const n = new W,
              i = [],
              r = [],
              s = [],
              o = new W,
              a = new xt;
          for (let e = 0; e <= t; e++) {
              const n = e / t;
              i[e] = this.getTangentAt(n, new W), i[e].normalize()
          }
          r[0] = new W, s[0] = new W;
          let c = Number.MAX_VALUE;
          const l = Math.abs(i[0].x),
              h = Math.abs(i[0].y),
              u = Math.abs(i[0].z);
          l <= c && (c = l, n.set(1, 0, 0)), h <= c && (c = h, n.set(0, 1, 0)), u <= c && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], o), s[0].crossVectors(i[0], r[0]);
          for (let e = 1; e <= t; e++) {
              if (r[e] = r[e - 1].clone(), s[e] = s[e - 1].clone(), o.crossVectors(i[e - 1], i[e]), o.length() > Number.EPSILON) {
                  o.normalize();
                  const t = Math.acos(O.clamp(i[e - 1].dot(i[e]), -1, 1));
                  r[e].applyMatrix4(a.makeRotationAxis(o, t))
              }
              s[e].crossVectors(i[e], r[e])
          }
          if (!0 === e) {
              let e = Math.acos(O.clamp(r[0].dot(r[t]), -1, 1));
              e /= t, i[0].dot(o.crossVectors(r[0], r[t])) > 0 && (e = -e);
              for (let n = 1; n <= t; n++) r[n].applyMatrix4(a.makeRotationAxis(i[n], e * n)), s[n].crossVectors(i[n], r[n])
          }
          return {
              tangents: i,
              normals: r,
              binormals: s
          }
      },
      clone: function() {
          return (new this.constructor).copy(this)
      },
      copy: function(t) {
          return this.arcLengthDivisions = t.arcLengthDivisions, this
      },
      toJSON: function() {
          const t = {
              metadata: {
                  version: 4.5,
                  type: "Curve",
                  generator: "Curve.toJSON"
              }
          };
          return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t
      },
      fromJSON: function(t) {
          return this.arcLengthDivisions = t.arcLengthDivisions, this
      }
  }), ha.prototype = Object.create(la.prototype), ha.prototype.constructor = ha, ha.prototype.isEllipseCurve = !0, ha.prototype.getPoint = function(t, e) {
      const n = e || new I,
          i = 2 * Math.PI;
      let r = this.aEndAngle - this.aStartAngle;
      const s = Math.abs(r) < Number.EPSILON;
      for (; r < 0;) r += i;
      for (; r > i;) r -= i;
      r < Number.EPSILON && (r = s ? 0 : i), !0 !== this.aClockwise || s || (r === i ? r = -i : r -= i);
      const o = this.aStartAngle + t * r;
      let a = this.aX + this.xRadius * Math.cos(o),
          c = this.aY + this.yRadius * Math.sin(o);
      if (0 !== this.aRotation) {
          const t = Math.cos(this.aRotation),
              e = Math.sin(this.aRotation),
              n = a - this.aX,
              i = c - this.aY;
          a = n * t - i * e + this.aX, c = n * e + i * t + this.aY
      }
      return n.set(a, c)
  }, ha.prototype.copy = function(t) {
      return la.prototype.copy.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
  }, ha.prototype.toJSON = function() {
      const t = la.prototype.toJSON.call(this);
      return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t
  }, ha.prototype.fromJSON = function(t) {
      return la.prototype.fromJSON.call(this, t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this
  }, ua.prototype = Object.create(ha.prototype), ua.prototype.constructor = ua, ua.prototype.isArcCurve = !0;
  const pa = new W,
      fa = new da,
      ma = new da,
      ga = new da;

  function va(t = [], e = !1, n = "centripetal", i = .5) {
      la.call(this), this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = i
  }

  function ya(t, e, n, i, r) {
      const s = .5 * (i - e),
          o = .5 * (r - n),
          a = t * t;
      return (2 * n - 2 * i + s + o) * (t * a) + (-3 * n + 3 * i - 2 * s - o) * a + s * t + n
  }

  function xa(t, e, n, i) {
      return function(t, e) {
          const n = 1 - t;
          return n * n * e
      }(t, e) + function(t, e) {
          return 2 * (1 - t) * t * e
      }(t, n) + function(t, e) {
          return t * t * e
      }(t, i)
  }

  function _a(t, e, n, i, r) {
      return function(t, e) {
          const n = 1 - t;
          return n * n * n * e
      }(t, e) + function(t, e) {
          const n = 1 - t;
          return 3 * n * n * t * e
      }(t, n) + function(t, e) {
          return 3 * (1 - t) * t * t * e
      }(t, i) + function(t, e) {
          return t * t * t * e
      }(t, r)
  }

  function ba(t = new I, e = new I, n = new I, i = new I) {
      la.call(this), this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i
  }

  function wa(t = new W, e = new W, n = new W, i = new W) {
      la.call(this), this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i
  }

  function Ma(t = new I, e = new I) {
      la.call(this), this.type = "LineCurve", this.v1 = t, this.v2 = e
  }

  function Sa(t = new W, e = new W) {
      la.call(this), this.type = "LineCurve3", this.v1 = t, this.v2 = e
  }

  function Ta(t = new I, e = new I, n = new I) {
      la.call(this), this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n
  }

  function Ea(t = new W, e = new W, n = new W) {
      la.call(this), this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n
  }

  function Aa(t = []) {
      la.call(this), this.type = "SplineCurve", this.points = t
  }
  va.prototype = Object.create(la.prototype), va.prototype.constructor = va, va.prototype.isCatmullRomCurve3 = !0, va.prototype.getPoint = function(t, e = new W) {
      const n = e,
          i = this.points,
          r = i.length,
          s = (r - (this.closed ? 0 : 1)) * t;
      let o, a, c = Math.floor(s),
          l = s - c;
      this.closed ? c += c > 0 ? 0 : (Math.floor(Math.abs(c) / r) + 1) * r : 0 === l && c === r - 1 && (c = r - 2, l = 1), this.closed || c > 0 ? o = i[(c - 1) % r] : (pa.subVectors(i[0], i[1]).add(i[0]), o = pa);
      const h = i[c % r],
          u = i[(c + 1) % r];
      if (this.closed || c + 2 < r ? a = i[(c + 2) % r] : (pa.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), a = pa), "centripetal" === this.curveType || "chordal" === this.curveType) {
          const t = "chordal" === this.curveType ? .5 : .25;
          let e = Math.pow(o.distanceToSquared(h), t),
              n = Math.pow(h.distanceToSquared(u), t),
              i = Math.pow(u.distanceToSquared(a), t);
          n < 1e-4 && (n = 1), e < 1e-4 && (e = n), i < 1e-4 && (i = n), fa.initNonuniformCatmullRom(o.x, h.x, u.x, a.x, e, n, i), ma.initNonuniformCatmullRom(o.y, h.y, u.y, a.y, e, n, i), ga.initNonuniformCatmullRom(o.z, h.z, u.z, a.z, e, n, i)
      } else "catmullrom" === this.curveType && (fa.initCatmullRom(o.x, h.x, u.x, a.x, this.tension), ma.initCatmullRom(o.y, h.y, u.y, a.y, this.tension), ga.initCatmullRom(o.z, h.z, u.z, a.z, this.tension));
      return n.set(fa.calc(l), ma.calc(l), ga.calc(l)), n
  }, va.prototype.copy = function(t) {
      la.prototype.copy.call(this, t), this.points = [];
      for (let e = 0, n = t.points.length; e < n; e++) {
          const n = t.points[e];
          this.points.push(n.clone())
      }
      return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
  }, va.prototype.toJSON = function() {
      const t = la.prototype.toJSON.call(this);
      t.points = [];
      for (let e = 0, n = this.points.length; e < n; e++) {
          const n = this.points[e];
          t.points.push(n.toArray())
      }
      return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t
  }, va.prototype.fromJSON = function(t) {
      la.prototype.fromJSON.call(this, t), this.points = [];
      for (let e = 0, n = t.points.length; e < n; e++) {
          const n = t.points[e];
          this.points.push((new W).fromArray(n))
      }
      return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this
  }, ba.prototype = Object.create(la.prototype), ba.prototype.constructor = ba, ba.prototype.isCubicBezierCurve = !0, ba.prototype.getPoint = function(t, e = new I) {
      const n = e,
          i = this.v0,
          r = this.v1,
          s = this.v2,
          o = this.v3;
      return n.set(_a(t, i.x, r.x, s.x, o.x), _a(t, i.y, r.y, s.y, o.y)), n
  }, ba.prototype.copy = function(t) {
      return la.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
  }, ba.prototype.toJSON = function() {
      const t = la.prototype.toJSON.call(this);
      return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
  }, ba.prototype.fromJSON = function(t) {
      return la.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
  }, wa.prototype = Object.create(la.prototype), wa.prototype.constructor = wa, wa.prototype.isCubicBezierCurve3 = !0, wa.prototype.getPoint = function(t, e = new W) {
      const n = e,
          i = this.v0,
          r = this.v1,
          s = this.v2,
          o = this.v3;
      return n.set(_a(t, i.x, r.x, s.x, o.x), _a(t, i.y, r.y, s.y, o.y), _a(t, i.z, r.z, s.z, o.z)), n
  }, wa.prototype.copy = function(t) {
      return la.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this
  }, wa.prototype.toJSON = function() {
      const t = la.prototype.toJSON.call(this);
      return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t
  }, wa.prototype.fromJSON = function(t) {
      return la.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this
  }, Ma.prototype = Object.create(la.prototype), Ma.prototype.constructor = Ma, Ma.prototype.isLineCurve = !0, Ma.prototype.getPoint = function(t, e = new I) {
      const n = e;
      return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
  }, Ma.prototype.getPointAt = function(t, e) {
      return this.getPoint(t, e)
  }, Ma.prototype.getTangent = function(t, e) {
      const n = e || new I;
      return n.copy(this.v2).sub(this.v1).normalize(), n
  }, Ma.prototype.copy = function(t) {
      return la.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
  }, Ma.prototype.toJSON = function() {
      const t = la.prototype.toJSON.call(this);
      return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
  }, Ma.prototype.fromJSON = function(t) {
      return la.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
  }, Sa.prototype = Object.create(la.prototype), Sa.prototype.constructor = Sa, Sa.prototype.isLineCurve3 = !0, Sa.prototype.getPoint = function(t, e = new W) {
      const n = e;
      return 1 === t ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n
  }, Sa.prototype.getPointAt = function(t, e) {
      return this.getPoint(t, e)
  }, Sa.prototype.copy = function(t) {
      return la.prototype.copy.call(this, t), this.v1.copy(t.v1), this.v2.copy(t.v2), this
  }, Sa.prototype.toJSON = function() {
      const t = la.prototype.toJSON.call(this);
      return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
  }, Sa.prototype.fromJSON = function(t) {
      return la.prototype.fromJSON.call(this, t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
  }, Ta.prototype = Object.create(la.prototype), Ta.prototype.constructor = Ta, Ta.prototype.isQuadraticBezierCurve = !0, Ta.prototype.getPoint = function(t, e = new I) {
      const n = e,
          i = this.v0,
          r = this.v1,
          s = this.v2;
      return n.set(xa(t, i.x, r.x, s.x), xa(t, i.y, r.y, s.y)), n
  }, Ta.prototype.copy = function(t) {
      return la.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
  }, Ta.prototype.toJSON = function() {
      const t = la.prototype.toJSON.call(this);
      return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
  }, Ta.prototype.fromJSON = function(t) {
      return la.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
  }, Ea.prototype = Object.create(la.prototype), Ea.prototype.constructor = Ea, Ea.prototype.isQuadraticBezierCurve3 = !0, Ea.prototype.getPoint = function(t, e = new W) {
      const n = e,
          i = this.v0,
          r = this.v1,
          s = this.v2;
      return n.set(xa(t, i.x, r.x, s.x), xa(t, i.y, r.y, s.y), xa(t, i.z, r.z, s.z)), n
  }, Ea.prototype.copy = function(t) {
      return la.prototype.copy.call(this, t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this
  }, Ea.prototype.toJSON = function() {
      const t = la.prototype.toJSON.call(this);
      return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t
  }, Ea.prototype.fromJSON = function(t) {
      return la.prototype.fromJSON.call(this, t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this
  }, Aa.prototype = Object.create(la.prototype), Aa.prototype.constructor = Aa, Aa.prototype.isSplineCurve = !0, Aa.prototype.getPoint = function(t, e = new I) {
      const n = e,
          i = this.points,
          r = (i.length - 1) * t,
          s = Math.floor(r),
          o = r - s,
          a = i[0 === s ? s : s - 1],
          c = i[s],
          l = i[s > i.length - 2 ? i.length - 1 : s + 1],
          h = i[s > i.length - 3 ? i.length - 1 : s + 2];
      return n.set(ya(o, a.x, c.x, l.x, h.x), ya(o, a.y, c.y, l.y, h.y)), n
  }, Aa.prototype.copy = function(t) {
      la.prototype.copy.call(this, t), this.points = [];
      for (let e = 0, n = t.points.length; e < n; e++) {
          const n = t.points[e];
          this.points.push(n.clone())
      }
      return this
  }, Aa.prototype.toJSON = function() {
      const t = la.prototype.toJSON.call(this);
      t.points = [];
      for (let e = 0, n = this.points.length; e < n; e++) {
          const n = this.points[e];
          t.points.push(n.toArray())
      }
      return t
  }, Aa.prototype.fromJSON = function(t) {
      la.prototype.fromJSON.call(this, t), this.points = [];
      for (let e = 0, n = t.points.length; e < n; e++) {
          const n = t.points[e];
          this.points.push((new I).fromArray(n))
      }
      return this
  };
  var La = Object.freeze({
      __proto__: null,
      ArcCurve: ua,
      CatmullRomCurve3: va,
      CubicBezierCurve: ba,
      CubicBezierCurve3: wa,
      EllipseCurve: ha,
      LineCurve: Ma,
      LineCurve3: Sa,
      QuadraticBezierCurve: Ta,
      QuadraticBezierCurve3: Ea,
      SplineCurve: Aa
  });

  function Ra() {
      la.call(this), this.type = "CurvePath", this.curves = [], this.autoClose = !1
  }

  function Pa(t) {
      Ra.call(this), this.type = "Path", this.currentPoint = new I, t && this.setFromPoints(t)
  }

  function Ca(t) {
      Pa.call(this, t), this.uuid = O.generateUUID(), this.type = "Shape", this.holes = []
  }

  function Na(t, e = 1) {
      jt.call(this), this.type = "Light", this.color = new de(t), this.intensity = e
  }

  function Oa(t, e, n) {
      Na.call(this, t, n), this.type = "HemisphereLight", this.position.copy(jt.DefaultUp), this.updateMatrix(), this.groundColor = new de(e)
  }

  function Ia(t) {
      this.camera = t, this.bias = 0, this.normalBias = 0, this.radius = 1, this.mapSize = new I(512, 512), this.map = null, this.mapPass = null, this.matrix = new xt, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Mn, this._frameExtents = new I(1, 1), this._viewportCount = 1, this._viewports = [new G(0, 0, 1, 1)]
  }

  function Da() {
      Ia.call(this, new mn(50, 1, .5, 500)), this.focus = 1
  }

  function Ua(t, e, n, i, r, s) {
      Na.call(this, t, e), this.type = "SpotLight", this.position.copy(jt.DefaultUp), this.updateMatrix(), this.target = new jt, Object.defineProperty(this, "power", {
          get: function() {
              return this.intensity * Math.PI
          },
          set: function(t) {
              this.intensity = t / Math.PI
          }
      }), this.distance = void 0 !== n ? n : 0, this.angle = void 0 !== i ? i : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== s ? s : 1, this.shadow = new Da
  }

  function Fa() {
      Ia.call(this, new mn(90, 1, .5, 500)), this._frameExtents = new I(4, 2), this._viewportCount = 6, this._viewports = [new G(2, 1, 1, 1), new G(0, 1, 1, 1), new G(3, 1, 1, 1), new G(1, 1, 1, 1), new G(3, 0, 1, 1), new G(1, 0, 1, 1)], this._cubeDirections = [new W(1, 0, 0), new W(-1, 0, 0), new W(0, 0, 1), new W(0, 0, -1), new W(0, 1, 0), new W(0, -1, 0)], this._cubeUps = [new W(0, 1, 0), new W(0, 1, 0), new W(0, 1, 0), new W(0, 1, 0), new W(0, 0, 1), new W(0, 0, -1)]
  }

  function Ha(t, e, n, i) {
      Na.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
          get: function() {
              return 4 * this.intensity * Math.PI
          },
          set: function(t) {
              this.intensity = t / (4 * Math.PI)
          }
      }), this.distance = void 0 !== n ? n : 0, this.decay = void 0 !== i ? i : 1, this.shadow = new Fa
  }

  function za(t = -1, e = 1, n = 1, i = -1, r = .1, s = 2e3) {
      fn.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix()
  }

  function Ba() {
      Ia.call(this, new za(-5, 5, 5, -5, .5, 500))
  }

  function Ga(t, e) {
      Na.call(this, t, e), this.type = "DirectionalLight", this.position.copy(jt.DefaultUp), this.updateMatrix(), this.target = new jt, this.shadow = new Ba
  }

  function ka(t, e) {
      Na.call(this, t, e), this.type = "AmbientLight"
  }

  function Va(t, e, n, i) {
      Na.call(this, t, e), this.type = "RectAreaLight", this.width = void 0 !== n ? n : 10, this.height = void 0 !== i ? i : 10
  }
  Ra.prototype = Object.assign(Object.create(la.prototype), {
      constructor: Ra,
      add: function(t) {
          this.curves.push(t)
      },
      closePath: function() {
          const t = this.curves[0].getPoint(0),
              e = this.curves[this.curves.length - 1].getPoint(1);
          t.equals(e) || this.curves.push(new Ma(e, t))
      },
      getPoint: function(t) {
          const e = t * this.getLength(),
              n = this.getCurveLengths();
          let i = 0;
          for (; i < n.length;) {
              if (n[i] >= e) {
                  const t = n[i] - e,
                      r = this.curves[i],
                      s = r.getLength(),
                      o = 0 === s ? 0 : 1 - t / s;
                  return r.getPointAt(o)
              }
              i++
          }
          return null
      },
      getLength: function() {
          const t = this.getCurveLengths();
          return t[t.length - 1]
      },
      updateArcLengths: function() {
          this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
      },
      getCurveLengths: function() {
          if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
          const t = [];
          let e = 0;
          for (let n = 0, i = this.curves.length; n < i; n++) e += this.curves[n].getLength(), t.push(e);
          return this.cacheLengths = t, t
      },
      getSpacedPoints: function(t = 40) {
          const e = [];
          for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
          return this.autoClose && e.push(e[0]), e
      },
      getPoints: function(t = 12) {
          const e = [];
          let n;
          for (let i = 0, r = this.curves; i < r.length; i++) {
              const s = r[i],
                  o = s && s.isEllipseCurve ? 2 * t : s && (s.isLineCurve || s.isLineCurve3) ? 1 : s && s.isSplineCurve ? t * s.points.length : t,
                  a = s.getPoints(o);
              for (let t = 0; t < a.length; t++) {
                  const i = a[t];
                  n && n.equals(i) || (e.push(i), n = i)
              }
          }
          return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e
      },
      copy: function(t) {
          la.prototype.copy.call(this, t), this.curves = [];
          for (let e = 0, n = t.curves.length; e < n; e++) {
              const n = t.curves[e];
              this.curves.push(n.clone())
          }
          return this.autoClose = t.autoClose, this
      },
      toJSON: function() {
          const t = la.prototype.toJSON.call(this);
          t.autoClose = this.autoClose, t.curves = [];
          for (let e = 0, n = this.curves.length; e < n; e++) {
              const n = this.curves[e];
              t.curves.push(n.toJSON())
          }
          return t
      },
      fromJSON: function(t) {
          la.prototype.fromJSON.call(this, t), this.autoClose = t.autoClose, this.curves = [];
          for (let e = 0, n = t.curves.length; e < n; e++) {
              const n = t.curves[e];
              this.curves.push((new La[n.type]).fromJSON(n))
          }
          return this
      }
  }), Pa.prototype = Object.assign(Object.create(Ra.prototype), {
      constructor: Pa,
      setFromPoints: function(t) {
          this.moveTo(t[0].x, t[0].y);
          for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
          return this
      },
      moveTo: function(t, e) {
          return this.currentPoint.set(t, e), this
      },
      lineTo: function(t, e) {
          const n = new Ma(this.currentPoint.clone(), new I(t, e));
          return this.curves.push(n), this.currentPoint.set(t, e), this
      },
      quadraticCurveTo: function(t, e, n, i) {
          const r = new Ta(this.currentPoint.clone(), new I(t, e), new I(n, i));
          return this.curves.push(r), this.currentPoint.set(n, i), this
      },
      bezierCurveTo: function(t, e, n, i, r, s) {
          const o = new ba(this.currentPoint.clone(), new I(t, e), new I(n, i), new I(r, s));
          return this.curves.push(o), this.currentPoint.set(r, s), this
      },
      splineThru: function(t) {
          const e = new Aa([this.currentPoint.clone()].concat(t));
          return this.curves.push(e), this.currentPoint.copy(t[t.length - 1]), this
      },
      arc: function(t, e, n, i, r, s) {
          const o = this.currentPoint.x,
              a = this.currentPoint.y;
          return this.absarc(t + o, e + a, n, i, r, s), this
      },
      absarc: function(t, e, n, i, r, s) {
          return this.absellipse(t, e, n, n, i, r, s), this
      },
      ellipse: function(t, e, n, i, r, s, o, a) {
          const c = this.currentPoint.x,
              l = this.currentPoint.y;
          return this.absellipse(t + c, e + l, n, i, r, s, o, a), this
      },
      absellipse: function(t, e, n, i, r, s, o, a) {
          const c = new ha(t, e, n, i, r, s, o, a);
          if (this.curves.length > 0) {
              const t = c.getPoint(0);
              t.equals(this.currentPoint) || this.lineTo(t.x, t.y)
          }
          this.curves.push(c);
          const l = c.getPoint(1);
          return this.currentPoint.copy(l), this
      },
      copy: function(t) {
          return Ra.prototype.copy.call(this, t), this.currentPoint.copy(t.currentPoint), this
      },
      toJSON: function() {
          const t = Ra.prototype.toJSON.call(this);
          return t.currentPoint = this.currentPoint.toArray(), t
      },
      fromJSON: function(t) {
          return Ra.prototype.fromJSON.call(this, t), this.currentPoint.fromArray(t.currentPoint), this
      }
  }), Ca.prototype = Object.assign(Object.create(Pa.prototype), {
      constructor: Ca,
      getPointsHoles: function(t) {
          const e = [];
          for (let n = 0, i = this.holes.length; n < i; n++) e[n] = this.holes[n].getPoints(t);
          return e
      },
      extractPoints: function(t) {
          return {
              shape: this.getPoints(t),
              holes: this.getPointsHoles(t)
          }
      },
      copy: function(t) {
          Pa.prototype.copy.call(this, t), this.holes = [];
          for (let e = 0, n = t.holes.length; e < n; e++) {
              const n = t.holes[e];
              this.holes.push(n.clone())
          }
          return this
      },
      toJSON: function() {
          const t = Pa.prototype.toJSON.call(this);
          t.uuid = this.uuid, t.holes = [];
          for (let e = 0, n = this.holes.length; e < n; e++) {
              const n = this.holes[e];
              t.holes.push(n.toJSON())
          }
          return t
      },
      fromJSON: function(t) {
          Pa.prototype.fromJSON.call(this, t), this.uuid = t.uuid, this.holes = [];
          for (let e = 0, n = t.holes.length; e < n; e++) {
              const n = t.holes[e];
              this.holes.push((new Pa).fromJSON(n))
          }
          return this
      }
  }), Na.prototype = Object.assign(Object.create(jt.prototype), {
      constructor: Na,
      isLight: !0,
      copy: function(t) {
          return jt.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
      },
      toJSON: function(t) {
          const e = jt.prototype.toJSON.call(this, t);
          return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
      }
  }), Oa.prototype = Object.assign(Object.create(Na.prototype), {
      constructor: Oa,
      isHemisphereLight: !0,
      copy: function(t) {
          return Na.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
      }
  }), Object.assign(Ia.prototype, {
      _projScreenMatrix: new xt,
      _lightPositionWorld: new W,
      _lookTarget: new W,
      getViewportCount: function() {
          return this._viewportCount
      },
      getFrustum: function() {
          return this._frustum
      },
      updateMatrices: function(t) {
          const e = this.camera,
              n = this.matrix,
              i = this._projScreenMatrix,
              r = this._lookTarget,
              s = this._lightPositionWorld;
          s.setFromMatrixPosition(t.matrixWorld), e.position.copy(s), r.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(r), e.updateMatrixWorld(), i.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(i), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(e.projectionMatrix), n.multiply(e.matrixWorldInverse)
      },
      getViewport: function(t) {
          return this._viewports[t]
      },
      getFrameExtents: function() {
          return this._frameExtents
      },
      copy: function(t) {
          return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
      },
      clone: function() {
          return (new this.constructor).copy(this)
      },
      toJSON: function() {
          const t = {};
          return 0 !== this.bias && (t.bias = this.bias), 0 !== this.normalBias && (t.normalBias = this.normalBias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
      }
  }), Da.prototype = Object.assign(Object.create(Ia.prototype), {
      constructor: Da,
      isSpotLightShadow: !0,
      updateMatrices: function(t) {
          const e = this.camera,
              n = 2 * O.RAD2DEG * t.angle * this.focus,
              i = this.mapSize.width / this.mapSize.height,
              r = t.distance || e.far;
          n === e.fov && i === e.aspect && r === e.far || (e.fov = n, e.aspect = i, e.far = r, e.updateProjectionMatrix()), Ia.prototype.updateMatrices.call(this, t)
      }
  }), Ua.prototype = Object.assign(Object.create(Na.prototype), {
      constructor: Ua,
      isSpotLight: !0,
      copy: function(t) {
          return Na.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
      }
  }), Fa.prototype = Object.assign(Object.create(Ia.prototype), {
      constructor: Fa,
      isPointLightShadow: !0,
      updateMatrices: function(t, e = 0) {
          const n = this.camera,
              i = this.matrix,
              r = this._lightPositionWorld,
              s = this._lookTarget,
              o = this._projScreenMatrix;
          r.setFromMatrixPosition(t.matrixWorld), n.position.copy(r), s.copy(n.position), s.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(s), n.updateMatrixWorld(), i.makeTranslation(-r.x, -r.y, -r.z), o.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(o)
      }
  }), Ha.prototype = Object.assign(Object.create(Na.prototype), {
      constructor: Ha,
      isPointLight: !0,
      copy: function(t) {
          return Na.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
      }
  }), za.prototype = Object.assign(Object.create(fn.prototype), {
      constructor: za,
      isOrthographicCamera: !0,
      copy: function(t, e) {
          return fn.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
      },
      setViewOffset: function(t, e, n, i, r, s) {
          null === this.view && (this.view = {
              enabled: !0,
              fullWidth: 1,
              fullHeight: 1,
              offsetX: 0,
              offsetY: 0,
              width: 1,
              height: 1
          }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix()
      },
      clearViewOffset: function() {
          null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
      },
      updateProjectionMatrix: function() {
          const t = (this.right - this.left) / (2 * this.zoom),
              e = (this.top - this.bottom) / (2 * this.zoom),
              n = (this.right + this.left) / 2,
              i = (this.top + this.bottom) / 2;
          let r = n - t,
              s = n + t,
              o = i + e,
              a = i - e;
          if (null !== this.view && this.view.enabled) {
              const t = (this.right - this.left) / this.view.fullWidth / this.zoom,
                  e = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
              r += t * this.view.offsetX, s = r + t * this.view.width, o -= e * this.view.offsetY, a = o - e * this.view.height
          }
          this.projectionMatrix.makeOrthographic(r, s, o, a, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
      },
      toJSON: function(t) {
          const e = jt.prototype.toJSON.call(this, t);
          return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
      }
  }), Ba.prototype = Object.assign(Object.create(Ia.prototype), {
      constructor: Ba,
      isDirectionalLightShadow: !0,
      updateMatrices: function(t) {
          Ia.prototype.updateMatrices.call(this, t)
      }
  }), Ga.prototype = Object.assign(Object.create(Na.prototype), {
      constructor: Ga,
      isDirectionalLight: !0,
      copy: function(t) {
          return Na.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
      }
  }), ka.prototype = Object.assign(Object.create(Na.prototype), {
      constructor: ka,
      isAmbientLight: !0
  }), Va.prototype = Object.assign(Object.create(Na.prototype), {
      constructor: Va,
      isRectAreaLight: !0,
      copy: function(t) {
          return Na.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this
      },
      toJSON: function(t) {
          const e = Na.prototype.toJSON.call(this, t);
          return e.object.width = this.width, e.object.height = this.height, e
      }
  });
  class ja {
      constructor() {
          Object.defineProperty(this, "isSphericalHarmonics3", {
              value: !0
          }), this.coefficients = [];
          for (let t = 0; t < 9; t++) this.coefficients.push(new W)
      }
      set(t) {
          for (let e = 0; e < 9; e++) this.coefficients[e].copy(t[e]);
          return this
      }
      zero() {
          for (let t = 0; t < 9; t++) this.coefficients[t].set(0, 0, 0);
          return this
      }
      getAt(t, e) {
          const n = t.x,
              i = t.y,
              r = t.z,
              s = this.coefficients;
          return e.copy(s[0]).multiplyScalar(.282095), e.addScaledVector(s[1], .488603 * i), e.addScaledVector(s[2], .488603 * r), e.addScaledVector(s[3], .488603 * n), e.addScaledVector(s[4], n * i * 1.092548), e.addScaledVector(s[5], i * r * 1.092548), e.addScaledVector(s[6], .315392 * (3 * r * r - 1)), e.addScaledVector(s[7], n * r * 1.092548), e.addScaledVector(s[8], .546274 * (n * n - i * i)), e
      }
      getIrradianceAt(t, e) {
          const n = t.x,
              i = t.y,
              r = t.z,
              s = this.coefficients;
          return e.copy(s[0]).multiplyScalar(.886227), e.addScaledVector(s[1], 1.023328 * i), e.addScaledVector(s[2], 1.023328 * r), e.addScaledVector(s[3], 1.023328 * n), e.addScaledVector(s[4], .858086 * n * i), e.addScaledVector(s[5], .858086 * i * r), e.addScaledVector(s[6], .743125 * r * r - .247708), e.addScaledVector(s[7], .858086 * n * r), e.addScaledVector(s[8], .429043 * (n * n - i * i)), e
      }
      add(t) {
          for (let e = 0; e < 9; e++) this.coefficients[e].add(t.coefficients[e]);
          return this
      }
      addScaledSH(t, e) {
          for (let n = 0; n < 9; n++) this.coefficients[n].addScaledVector(t.coefficients[n], e);
          return this
      }
      scale(t) {
          for (let e = 0; e < 9; e++) this.coefficients[e].multiplyScalar(t);
          return this
      }
      lerp(t, e) {
          for (let n = 0; n < 9; n++) this.coefficients[n].lerp(t.coefficients[n], e);
          return this
      }
      equals(t) {
          for (let e = 0; e < 9; e++)
              if (!this.coefficients[e].equals(t.coefficients[e])) return !1;
          return !0
      }
      copy(t) {
          return this.set(t.coefficients)
      }
      clone() {
          return (new this.constructor).copy(this)
      }
      fromArray(t, e = 0) {
          const n = this.coefficients;
          for (let i = 0; i < 9; i++) n[i].fromArray(t, e + 3 * i);
          return this
      }
      toArray(t = [], e = 0) {
          const n = this.coefficients;
          for (let i = 0; i < 9; i++) n[i].toArray(t, e + 3 * i);
          return t
      }
      static getBasisAt(t, e) {
          const n = t.x,
              i = t.y,
              r = t.z;
          e[0] = .282095, e[1] = .488603 * i, e[2] = .488603 * r, e[3] = .488603 * n, e[4] = 1.092548 * n * i, e[5] = 1.092548 * i * r, e[6] = .315392 * (3 * r * r - 1), e[7] = 1.092548 * n * r, e[8] = .546274 * (n * n - i * i)
      }
  }

  function Wa(t, e) {
      Na.call(this, void 0, e), this.type = "LightProbe", this.sh = void 0 !== t ? t : new ja
  }

  function qa(t) {
      ta.call(this, t), this.textures = {}
  }
  Wa.prototype = Object.assign(Object.create(Na.prototype), {
      constructor: Wa,
      isLightProbe: !0,
      copy: function(t) {
          return Na.prototype.copy.call(this, t), this.sh.copy(t.sh), this
      },
      fromJSON: function(t) {
          return this.intensity = t.intensity, this.sh.fromArray(t.sh), this
      },
      toJSON: function(t) {
          const e = Na.prototype.toJSON.call(this, t);
          return e.object.sh = this.sh.toArray(), e
      }
  }), qa.prototype = Object.assign(Object.create(ta.prototype), {
      constructor: qa,
      load: function(t, e, n, i) {
          const r = this,
              s = new na(r.manager);
          s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, (function(n) {
              try {
                  e(r.parse(JSON.parse(n)))
              } catch (e) {
                  i ? i(e) : console.error(e), r.manager.itemError(t)
              }
          }), n, i)
      },
      parse: function(t) {
          const e = this.textures;

          function n(t) {
              return void 0 === e[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), e[t]
          }
          const i = new Do[t.type];
          if (void 0 !== t.uuid && (i.uuid = t.uuid), void 0 !== t.name && (i.name = t.name), void 0 !== t.color && void 0 !== i.color && i.color.setHex(t.color), void 0 !== t.roughness && (i.roughness = t.roughness), void 0 !== t.metalness && (i.metalness = t.metalness), void 0 !== t.sheen && (i.sheen = (new de).setHex(t.sheen)), void 0 !== t.emissive && void 0 !== i.emissive && i.emissive.setHex(t.emissive), void 0 !== t.specular && void 0 !== i.specular && i.specular.setHex(t.specular), void 0 !== t.shininess && (i.shininess = t.shininess), void 0 !== t.clearcoat && (i.clearcoat = t.clearcoat), void 0 !== t.clearcoatRoughness && (i.clearcoatRoughness = t.clearcoatRoughness), void 0 !== t.fog && (i.fog = t.fog), void 0 !== t.flatShading && (i.flatShading = t.flatShading), void 0 !== t.blending && (i.blending = t.blending), void 0 !== t.combine && (i.combine = t.combine), void 0 !== t.side && (i.side = t.side), void 0 !== t.opacity && (i.opacity = t.opacity), void 0 !== t.transparent && (i.transparent = t.transparent), void 0 !== t.alphaTest && (i.alphaTest = t.alphaTest), void 0 !== t.depthTest && (i.depthTest = t.depthTest), void 0 !== t.depthWrite && (i.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (i.colorWrite = t.colorWrite), void 0 !== t.stencilWrite && (i.stencilWrite = t.stencilWrite), void 0 !== t.stencilWriteMask && (i.stencilWriteMask = t.stencilWriteMask), void 0 !== t.stencilFunc && (i.stencilFunc = t.stencilFunc), void 0 !== t.stencilRef && (i.stencilRef = t.stencilRef), void 0 !== t.stencilFuncMask && (i.stencilFuncMask = t.stencilFuncMask), void 0 !== t.stencilFail && (i.stencilFail = t.stencilFail), void 0 !== t.stencilZFail && (i.stencilZFail = t.stencilZFail), void 0 !== t.stencilZPass && (i.stencilZPass = t.stencilZPass), void 0 !== t.wireframe && (i.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (i.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (i.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (i.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.rotation && (i.rotation = t.rotation), 1 !== t.linewidth && (i.linewidth = t.linewidth), void 0 !== t.dashSize && (i.dashSize = t.dashSize), void 0 !== t.gapSize && (i.gapSize = t.gapSize), void 0 !== t.scale && (i.scale = t.scale), void 0 !== t.polygonOffset && (i.polygonOffset = t.polygonOffset), void 0 !== t.polygonOffsetFactor && (i.polygonOffsetFactor = t.polygonOffsetFactor), void 0 !== t.polygonOffsetUnits && (i.polygonOffsetUnits = t.polygonOffsetUnits), void 0 !== t.skinning && (i.skinning = t.skinning), void 0 !== t.morphTargets && (i.morphTargets = t.morphTargets), void 0 !== t.morphNormals && (i.morphNormals = t.morphNormals), void 0 !== t.dithering && (i.dithering = t.dithering), void 0 !== t.vertexTangents && (i.vertexTangents = t.vertexTangents), void 0 !== t.visible && (i.visible = t.visible), void 0 !== t.toneMapped && (i.toneMapped = t.toneMapped), void 0 !== t.userData && (i.userData = t.userData), void 0 !== t.vertexColors && ("number" == typeof t.vertexColors ? i.vertexColors = t.vertexColors > 0 : i.vertexColors = t.vertexColors), void 0 !== t.uniforms)
              for (const e in t.uniforms) {
                  const r = t.uniforms[e];
                  switch (i.uniforms[e] = {}, r.type) {
                      case "t":
                          i.uniforms[e].value = n(r.value);
                          break;
                      case "c":
                          i.uniforms[e].value = (new de).setHex(r.value);
                          break;
                      case "v2":
                          i.uniforms[e].value = (new I).fromArray(r.value);
                          break;
                      case "v3":
                          i.uniforms[e].value = (new W).fromArray(r.value);
                          break;
                      case "v4":
                          i.uniforms[e].value = (new G).fromArray(r.value);
                          break;
                      case "m3":
                          i.uniforms[e].value = (new D).fromArray(r.value);
                          break;
                      case "m4":
                          i.uniforms[e].value = (new xt).fromArray(r.value);
                          break;
                      default:
                          i.uniforms[e].value = r.value
                  }
              }
          if (void 0 !== t.defines && (i.defines = t.defines), void 0 !== t.vertexShader && (i.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (i.fragmentShader = t.fragmentShader), void 0 !== t.extensions)
              for (const e in t.extensions) i.extensions[e] = t.extensions[e];
          if (void 0 !== t.shading && (i.flatShading = 1 === t.shading), void 0 !== t.size && (i.size = t.size), void 0 !== t.sizeAttenuation && (i.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (i.map = n(t.map)), void 0 !== t.matcap && (i.matcap = n(t.matcap)), void 0 !== t.alphaMap && (i.alphaMap = n(t.alphaMap)), void 0 !== t.bumpMap && (i.bumpMap = n(t.bumpMap)), void 0 !== t.bumpScale && (i.bumpScale = t.bumpScale), void 0 !== t.normalMap && (i.normalMap = n(t.normalMap)), void 0 !== t.normalMapType && (i.normalMapType = t.normalMapType), void 0 !== t.normalScale) {
              let e = t.normalScale;
              !1 === Array.isArray(e) && (e = [e, e]), i.normalScale = (new I).fromArray(e)
          }
          return void 0 !== t.displacementMap && (i.displacementMap = n(t.displacementMap)), void 0 !== t.displacementScale && (i.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (i.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (i.roughnessMap = n(t.roughnessMap)), void 0 !== t.metalnessMap && (i.metalnessMap = n(t.metalnessMap)), void 0 !== t.emissiveMap && (i.emissiveMap = n(t.emissiveMap)), void 0 !== t.emissiveIntensity && (i.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (i.specularMap = n(t.specularMap)), void 0 !== t.envMap && (i.envMap = n(t.envMap)), void 0 !== t.envMapIntensity && (i.envMapIntensity = t.envMapIntensity), void 0 !== t.reflectivity && (i.reflectivity = t.reflectivity), void 0 !== t.refractionRatio && (i.refractionRatio = t.refractionRatio), void 0 !== t.lightMap && (i.lightMap = n(t.lightMap)), void 0 !== t.lightMapIntensity && (i.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (i.aoMap = n(t.aoMap)), void 0 !== t.aoMapIntensity && (i.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (i.gradientMap = n(t.gradientMap)), void 0 !== t.clearcoatMap && (i.clearcoatMap = n(t.clearcoatMap)), void 0 !== t.clearcoatRoughnessMap && (i.clearcoatRoughnessMap = n(t.clearcoatRoughnessMap)), void 0 !== t.clearcoatNormalMap && (i.clearcoatNormalMap = n(t.clearcoatNormalMap)), void 0 !== t.clearcoatNormalScale && (i.clearcoatNormalScale = (new I).fromArray(t.clearcoatNormalScale)), void 0 !== t.transmission && (i.transmission = t.transmission), void 0 !== t.transmissionMap && (i.transmissionMap = n(t.transmissionMap)), i
      },
      setTextures: function(t) {
          return this.textures = t, this
      }
  });
  const Xa = function(t) {
          if ("undefined" != typeof TextDecoder) return (new TextDecoder).decode(t);
          let e = "";
          for (let n = 0, i = t.length; n < i; n++) e += String.fromCharCode(t[n]);
          try {
              return decodeURIComponent(escape(e))
          } catch (t) {
              return e
          }
      },
      Ya = function(t) {
          const e = t.lastIndexOf("/");
          return -1 === e ? "./" : t.substr(0, e + 1)
      };

  function Za() {
      Ge.call(this), this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0
  }

  function Ja(t, e, n, i) {
      "number" == typeof n && (i = n, n = !1, console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")), xe.call(this, t, e, n), this.meshPerAttribute = i || 1
  }

  function Ka(t) {
      ta.call(this, t)
  }

  function Qa(t) {
      "undefined" == typeof createImageBitmap && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), "undefined" == typeof fetch && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), ta.call(this, t), this.options = {
          premultiplyAlpha: "none"
      }
  }

  function $a() {
      this.type = "ShapePath", this.color = new de, this.subPaths = [], this.currentPath = null
  }

  function tc(t) {
      this.type = "Font", this.data = t
  }

  function ec(t, e, n, i, r) {
      const s = r.glyphs[t] || r.glyphs["?"];
      if (!s) return void console.error('THREE.Font: character "' + t + '" does not exists in font family ' + r.familyName + ".");
      const o = new $a;
      let a, c, l, h, u, d, p, f;
      if (s.o) {
          const t = s._cachedOutline || (s._cachedOutline = s.o.split(" "));
          for (let r = 0, s = t.length; r < s;) switch (t[r++]) {
              case "m":
                  a = t[r++] * e + n, c = t[r++] * e + i, o.moveTo(a, c);
                  break;
              case "l":
                  a = t[r++] * e + n, c = t[r++] * e + i, o.lineTo(a, c);
                  break;
              case "q":
                  l = t[r++] * e + n, h = t[r++] * e + i, u = t[r++] * e + n, d = t[r++] * e + i, o.quadraticCurveTo(u, d, l, h);
                  break;
              case "b":
                  l = t[r++] * e + n, h = t[r++] * e + i, u = t[r++] * e + n, d = t[r++] * e + i, p = t[r++] * e + n, f = t[r++] * e + i, o.bezierCurveTo(u, d, p, f, l, h)
          }
      }
      return {
          offsetX: s.ha * e,
          path: o
      }
  }

  function nc(t) {
      ta.call(this, t)
  }
  let ic;
  Za.prototype = Object.assign(Object.create(Ge.prototype), {
      constructor: Za,
      isInstancedBufferGeometry: !0,
      copy: function(t) {
          return Ge.prototype.copy.call(this, t), this.instanceCount = t.instanceCount, this
      },
      clone: function() {
          return (new this.constructor).copy(this)
      },
      toJSON: function() {
          const t = Ge.prototype.toJSON.call(this);
          return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t
      }
  }), Ja.prototype = Object.assign(Object.create(xe.prototype), {
      constructor: Ja,
      isInstancedBufferAttribute: !0,
      copy: function(t) {
          return xe.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
      },
      toJSON: function() {
          const t = xe.prototype.toJSON.call(this);
          return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t
      }
  }), Ka.prototype = Object.assign(Object.create(ta.prototype), {
      constructor: Ka,
      load: function(t, e, n, i) {
          const r = this,
              s = new na(r.manager);
          s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, (function(n) {
              try {
                  e(r.parse(JSON.parse(n)))
              } catch (e) {
                  i ? i(e) : console.error(e), r.manager.itemError(t)
              }
          }), n, i)
      },
      parse: function(t) {
          const e = {},
              n = {};

          function i(t, i) {
              if (void 0 !== e[i]) return e[i];
              const r = t.interleavedBuffers[i],
                  s = function(t, e) {
                      if (void 0 !== n[e]) return n[e];
                      const i = t.arrayBuffers[e],
                          r = new Uint32Array(i).buffer;
                      return n[e] = r, r
                  }(t, r.buffer),
                  o = new Or(Oe(r.type, s), r.stride);
              return o.uuid = r.uuid, e[i] = o, o
          }
          const r = t.isInstancedBufferGeometry ? new Za : new Ge,
              s = t.data.index;
          if (void 0 !== s) {
              const t = Oe(s.type, s.array);
              r.setIndex(new xe(t, 1))
          }
          const o = t.data.attributes;
          for (const e in o) {
              const n = o[e];
              let s;
              if (n.isInterleavedBufferAttribute) s = new Dr(i(t.data, n.data), n.itemSize, n.offset, n.normalized);
              else {
                  const t = Oe(n.type, n.array);
                  s = new(n.isInstancedBufferAttribute ? Ja : xe)(t, n.itemSize, n.normalized)
              }
              void 0 !== n.name && (s.name = n.name), r.setAttribute(e, s)
          }
          const a = t.data.morphAttributes;
          if (a)
              for (const e in a) {
                  const n = a[e],
                      s = [];
                  for (let e = 0, r = n.length; e < r; e++) {
                      const r = n[e];
                      let o;
                      o = r.isInterleavedBufferAttribute ? new Dr(i(t.data, r.data), r.itemSize, r.offset, r.normalized) : new xe(Oe(r.type, r.array), r.itemSize, r.normalized), void 0 !== r.name && (o.name = r.name), s.push(o)
                  }
                  r.morphAttributes[e] = s
              }
          t.data.morphTargetsRelative && (r.morphTargetsRelative = !0);
          const c = t.data.groups || t.data.drawcalls || t.data.offsets;
          if (void 0 !== c)
              for (let t = 0, e = c.length; t !== e; ++t) {
                  const e = c[t];
                  r.addGroup(e.start, e.count, e.materialIndex)
              }
          const l = t.data.boundingSphere;
          if (void 0 !== l) {
              const t = new W;
              void 0 !== l.center && t.fromArray(l.center), r.boundingSphere = new ht(t, l.radius)
          }
          return t.name && (r.name = t.name), t.userData && (r.userData = t.userData), r
      }
  }), Qa.prototype = Object.assign(Object.create(ta.prototype), {
      constructor: Qa,
      isImageBitmapLoader: !0,
      setOptions: function(t) {
          return this.options = t, this
      },
      load: function(t, e, n, i) {
          void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t), t = this.manager.resolveURL(t);
          const r = this,
              s = Ko.get(t);
          if (void 0 !== s) return r.manager.itemStart(t), setTimeout((function() {
              e && e(s), r.manager.itemEnd(t)
          }), 0), s;
          const o = {};
          o.credentials = "anonymous" === this.crossOrigin ? "same-origin" : "include", fetch(t, o).then((function(t) {
              return t.blob()
          })).then((function(t) {
              return createImageBitmap(t, r.options)
          })).then((function(n) {
              Ko.add(t, n), e && e(n), r.manager.itemEnd(t)
          })).catch((function(e) {
              i && i(e), r.manager.itemError(t), r.manager.itemEnd(t)
          })), r.manager.itemStart(t)
      }
  }), Object.assign($a.prototype, {
      moveTo: function(t, e) {
          return this.currentPath = new Pa, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this
      },
      lineTo: function(t, e) {
          return this.currentPath.lineTo(t, e), this
      },
      quadraticCurveTo: function(t, e, n, i) {
          return this.currentPath.quadraticCurveTo(t, e, n, i), this
      },
      bezierCurveTo: function(t, e, n, i, r, s) {
          return this.currentPath.bezierCurveTo(t, e, n, i, r, s), this
      },
      splineThru: function(t) {
          return this.currentPath.splineThru(t), this
      },
      toShapes: function(t, e) {
          function n(t) {
              const e = [];
              for (let n = 0, i = t.length; n < i; n++) {
                  const i = t[n],
                      r = new Ca;
                  r.curves = i.curves, e.push(r)
              }
              return e
          }

          function i(t, e) {
              const n = e.length;
              let i = !1;
              for (let r = n - 1, s = 0; s < n; r = s++) {
                  let n = e[r],
                      o = e[s],
                      a = o.x - n.x,
                      c = o.y - n.y;
                  if (Math.abs(c) > Number.EPSILON) {
                      if (c < 0 && (n = e[s], a = -a, o = e[r], c = -c), t.y < n.y || t.y > o.y) continue;
                      if (t.y === n.y) {
                          if (t.x === n.x) return !0
                      } else {
                          const e = c * (t.x - n.x) - a * (t.y - n.y);
                          if (0 === e) return !0;
                          if (e < 0) continue;
                          i = !i
                      }
                  } else {
                      if (t.y !== n.y) continue;
                      if (o.x <= t.x && t.x <= n.x || n.x <= t.x && t.x <= o.x) return !0
                  }
              }
              return i
          }
          const r = fo.isClockWise,
              s = this.subPaths;
          if (0 === s.length) return [];
          if (!0 === e) return n(s);
          let o, a, c;
          const l = [];
          if (1 === s.length) return a = s[0], c = new Ca, c.curves = a.curves, l.push(c), l;
          let h = !r(s[0].getPoints());
          h = t ? !h : h;
          const u = [],
              d = [];
          let p, f, m = [],
              g = 0;
          d[g] = void 0, m[g] = [];
          for (let e = 0, n = s.length; e < n; e++) a = s[e], p = a.getPoints(), o = r(p), o = t ? !o : o, o ? (!h && d[g] && g++, d[g] = {
              s: new Ca,
              p
          }, d[g].s.curves = a.curves, h && g++, m[g] = []) : m[g].push({
              h: a,
              p: p[0]
          });
          if (!d[0]) return n(s);
          if (d.length > 1) {
              let t = !1;
              const e = [];
              for (let t = 0, e = d.length; t < e; t++) u[t] = [];
              for (let n = 0, r = d.length; n < r; n++) {
                  const r = m[n];
                  for (let s = 0; s < r.length; s++) {
                      const o = r[s];
                      let a = !0;
                      for (let r = 0; r < d.length; r++) i(o.p, d[r].p) && (n !== r && e.push({
                          froms: n,
                          tos: r,
                          hole: s
                      }), a ? (a = !1, u[r].push(o)) : t = !0);
                      a && u[n].push(o)
                  }
              }
              e.length > 0 && (t || (m = u))
          }
          for (let t = 0, e = d.length; t < e; t++) {
              c = d[t].s, l.push(c), f = m[t];
              for (let t = 0, e = f.length; t < e; t++) c.holes.push(f[t].h)
          }
          return l
      }
  }), Object.assign(tc.prototype, {
      isFont: !0,
      generateShapes: function(t, e = 100) {
          const n = [],
              i = function(t, e, n) {
                  const i = Array.from ? Array.from(t) : String(t).split(""),
                      r = e / n.resolution,
                      s = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * r,
                      o = [];
                  let a = 0,
                      c = 0;
                  for (let t = 0; t < i.length; t++) {
                      const e = i[t];
                      if ("\n" === e) a = 0, c -= s;
                      else {
                          const t = ec(e, r, a, c, n);
                          a += t.offsetX, o.push(t.path)
                      }
                  }
                  return o
              }(t, e, this.data);
          for (let t = 0, e = i.length; t < e; t++) Array.prototype.push.apply(n, i[t].toShapes());
          return n
      }
  }), nc.prototype = Object.assign(Object.create(ta.prototype), {
      constructor: nc,
      load: function(t, e, n, i) {
          const r = this,
              s = new na(this.manager);
          s.setPath(this.path), s.setRequestHeader(this.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, (function(t) {
              let n;
              try {
                  n = JSON.parse(t)
              } catch (e) {
                  console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), n = JSON.parse(t.substring(65, t.length - 2))
              }
              const i = r.parse(n);
              e && e(i)
          }), n, i)
      },
      parse: function(t) {
          return new tc(t)
      }
  });

  function rc(t) {
      ta.call(this, t)
  }

  function sc(t, e, n) {
      Wa.call(this, void 0, n);
      const i = (new de).set(t),
          r = (new de).set(e),
          s = new W(i.r, i.g, i.b),
          o = new W(r.r, r.g, r.b),
          a = Math.sqrt(Math.PI),
          c = a * Math.sqrt(.75);
      this.sh.coefficients[0].copy(s).add(o).multiplyScalar(a), this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)
  }

  function oc(t, e) {
      Wa.call(this, void 0, e);
      const n = (new de).set(t);
      this.sh.coefficients[0].set(n.r, n.g, n.b).multiplyScalar(2 * Math.sqrt(Math.PI))
  }
  rc.prototype = Object.assign(Object.create(ta.prototype), {
      constructor: rc,
      load: function(t, e, n, i) {
          const r = this,
              s = new na(r.manager);
          s.setResponseType("arraybuffer"), s.setPath(r.path), s.setRequestHeader(r.requestHeader), s.setWithCredentials(r.withCredentials), s.load(t, (function(n) {
              try {
                  const t = n.slice(0);
                  (void 0 === ic && (ic = new(window.AudioContext || window.webkitAudioContext)), ic).decodeAudioData(t, (function(t) {
                      e(t)
                  }))
              } catch (e) {
                  i ? i(e) : console.error(e), r.manager.itemError(t)
              }
          }), n, i)
      }
  }), sc.prototype = Object.assign(Object.create(Wa.prototype), {
      constructor: sc,
      isHemisphereLightProbe: !0,
      copy: function(t) {
          return Wa.prototype.copy.call(this, t), this
      },
      toJSON: function(t) {
          return Wa.prototype.toJSON.call(this, t)
      }
  }), oc.prototype = Object.assign(Object.create(Wa.prototype), {
      constructor: oc,
      isAmbientLightProbe: !0,
      copy: function(t) {
          return Wa.prototype.copy.call(this, t), this
      },
      toJSON: function(t) {
          return Wa.prototype.toJSON.call(this, t)
      }
  });
  const ac = new xt,
      cc = new xt;
  Object.assign(function() {
      this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new mn, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new mn, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
          focus: null,
          fov: null,
          aspect: null,
          near: null,
          far: null,
          zoom: null,
          eyeSep: null
      }
  }.prototype, {
      update: function(t) {
          const e = this._cache;
          if (e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep) {
              e.focus = t.focus, e.fov = t.fov, e.aspect = t.aspect * this.aspect, e.near = t.near, e.far = t.far, e.zoom = t.zoom, e.eyeSep = this.eyeSep;
              const n = t.projectionMatrix.clone(),
                  i = e.eyeSep / 2,
                  r = i * e.near / e.focus,
                  s = e.near * Math.tan(O.DEG2RAD * e.fov * .5) / e.zoom;
              let o, a;
              cc.elements[12] = -i, ac.elements[12] = i, o = -s * e.aspect + r, a = s * e.aspect + r, n.elements[0] = 2 * e.near / (a - o), n.elements[8] = (a + o) / (a - o), this.cameraL.projectionMatrix.copy(n), o = -s * e.aspect - r, a = s * e.aspect - r, n.elements[0] = 2 * e.near / (a - o), n.elements[8] = (a + o) / (a - o), this.cameraR.projectionMatrix.copy(n)
          }
          this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(cc), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(ac)
      }
  });

  function lc() {
      return ("undefined" == typeof performance ? Date : performance).now()
  }

  function hc(t, e, n) {
      let i, r, s;
      switch (this.binding = t, this.valueSize = n, e) {
          case "quaternion":
              i = this._slerp, r = this._slerpAdditive, s = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(6 * n), this._workIndex = 5;
              break;
          case "string":
          case "bool":
              i = this._select, r = this._select, s = this._setAdditiveIdentityOther, this.buffer = new Array(5 * n);
              break;
          default:
              i = this._lerp, r = this._lerpAdditive, s = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(5 * n)
      }
      this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = s, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0
  }
  Object.assign(hc.prototype, {
      accumulate: function(t, e) {
          const n = this.buffer,
              i = this.valueSize,
              r = t * i + i;
          let s = this.cumulativeWeight;
          if (0 === s) {
              for (let t = 0; t !== i; ++t) n[r + t] = n[t];
              s = e
          } else {
              s += e;
              const t = e / s;
              this._mixBufferRegion(n, r, 0, t, i)
          }
          this.cumulativeWeight = s
      },
      accumulateAdditive: function(t) {
          const e = this.buffer,
              n = this.valueSize,
              i = n * this._addIndex;
          0 === this.cumulativeWeightAdditive && this._setIdentity(), this._mixBufferRegionAdditive(e, i, 0, t, n), this.cumulativeWeightAdditive += t
      },
      apply: function(t) {
          const e = this.valueSize,
              n = this.buffer,
              i = t * e + e,
              r = this.cumulativeWeight,
              s = this.cumulativeWeightAdditive,
              o = this.binding;
          if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
              const t = e * this._origIndex;
              this._mixBufferRegion(n, i, t, 1 - r, e)
          }
          s > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
          for (let t = e, r = e + e; t !== r; ++t)
              if (n[t] !== n[t + e]) {
                  o.setValue(n, i);
                  break
              }
      },
      saveOriginalState: function() {
          const t = this.binding,
              e = this.buffer,
              n = this.valueSize,
              i = n * this._origIndex;
          t.getValue(e, i);
          for (let t = n, r = i; t !== r; ++t) e[t] = e[i + t % n];
          this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0
      },
      restoreOriginalState: function() {
          const t = 3 * this.valueSize;
          this.binding.setValue(this.buffer, t)
      },
      _setAdditiveIdentityNumeric: function() {
          const t = this._addIndex * this.valueSize,
              e = t + this.valueSize;
          for (let n = t; n < e; n++) this.buffer[n] = 0
      },
      _setAdditiveIdentityQuaternion: function() {
          this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1
      },
      _setAdditiveIdentityOther: function() {
          const t = this._origIndex * this.valueSize,
              e = this._addIndex * this.valueSize;
          for (let n = 0; n < this.valueSize; n++) this.buffer[e + n] = this.buffer[t + n]
      },
      _select: function(t, e, n, i, r) {
          if (i >= .5)
              for (let i = 0; i !== r; ++i) t[e + i] = t[n + i]
      },
      _slerp: function(t, e, n, i) {
          j.slerpFlat(t, e, t, e, t, n, i)
      },
      _slerpAdditive: function(t, e, n, i, r) {
          const s = this._workIndex * r;
          j.multiplyQuaternionsFlat(t, s, t, e, t, n), j.slerpFlat(t, e, t, e, t, s, i)
      },
      _lerp: function(t, e, n, i, r) {
          const s = 1 - i;
          for (let o = 0; o !== r; ++o) {
              const r = e + o;
              t[r] = t[r] * s + t[n + o] * i
          }
      },
      _lerpAdditive: function(t, e, n, i, r) {
          for (let s = 0; s !== r; ++s) {
              const r = e + s;
              t[r] = t[r] + t[n + s] * i
          }
      }
  });
  const uc = new RegExp("[\\[\\]\\.:\\/]", "g"),
      dc = "[^\\[\\]\\.:\\/]",
      pc = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]",
      fc = /((?:WC+[\/:])*)/.source.replace("WC", dc),
      mc = /(WCOD+)?/.source.replace("WCOD", pc),
      gc = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", dc),
      vc = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", dc),
      yc = new RegExp("^" + fc + mc + gc + vc + "$"),
      xc = ["material", "materials", "bones"];

  function _c(t, e, n) {
      const i = n || bc.parseTrackName(e);
      this._targetGroup = t, this._bindings = t.subscribe_(e, i)
  }

  function bc(t, e, n) {
      this.path = e, this.parsedPath = n || bc.parseTrackName(e), this.node = bc.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
  }
  Object.assign(_c.prototype, {
      getValue: function(t, e) {
          this.bind();
          const n = this._targetGroup.nCachedObjects_,
              i = this._bindings[n];
          void 0 !== i && i.getValue(t, e)
      },
      setValue: function(t, e) {
          const n = this._bindings;
          for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t, e)
      },
      bind: function() {
          const t = this._bindings;
          for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].bind()
      },
      unbind: function() {
          const t = this._bindings;
          for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e) t[e].unbind()
      }
  }), Object.assign(bc, {
      Composite: _c,
      create: function(t, e, n) {
          return t && t.isAnimationObjectGroup ? new bc.Composite(t, e, n) : new bc(t, e, n)
      },
      sanitizeNodeName: function(t) {
          return t.replace(/\s/g, "_").replace(uc, "")
      },
      parseTrackName: function(t) {
          const e = yc.exec(t);
          if (!e) throw new Error("PropertyBinding: Cannot parse trackName: " + t);
          const n = {
                  nodeName: e[2],
                  objectName: e[3],
                  objectIndex: e[4],
                  propertyName: e[5],
                  propertyIndex: e[6]
              },
              i = n.nodeName && n.nodeName.lastIndexOf(".");
          if (void 0 !== i && -1 !== i) {
              const t = n.nodeName.substring(i + 1); - 1 !== xc.indexOf(t) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = t)
          }
          if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
          return n
      },
      findNode: function(t, e) {
          if (!e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
          if (t.skeleton) {
              const n = t.skeleton.getBoneByName(e);
              if (void 0 !== n) return n
          }
          if (t.children) {
              const n = function(t) {
                      for (let i = 0; i < t.length; i++) {
                          const r = t[i];
                          if (r.name === e || r.uuid === e) return r;
                          const s = n(r.children);
                          if (s) return s
                      }
                      return null
                  },
                  i = n(t.children);
              if (i) return i
          }
          return null
      }
  }), Object.assign(bc.prototype, {
      _getValue_unavailable: function() {},
      _setValue_unavailable: function() {},
      BindingType: {
          Direct: 0,
          EntireArray: 1,
          ArrayElement: 2,
          HasFromToArray: 3
      },
      Versioning: {
          None: 0,
          NeedsUpdate: 1,
          MatrixWorldNeedsUpdate: 2
      },
      GetterByBindingType: [function(t, e) {
          t[e] = this.node[this.propertyName]
      }, function(t, e) {
          const n = this.resolvedProperty;
          for (let i = 0, r = n.length; i !== r; ++i) t[e++] = n[i]
      }, function(t, e) {
          t[e] = this.resolvedProperty[this.propertyIndex]
      }, function(t, e) {
          this.resolvedProperty.toArray(t, e)
      }],
      SetterByBindingTypeAndVersioning: [
          [function(t, e) {
              this.targetObject[this.propertyName] = t[e]
          }, function(t, e) {
              this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
          }, function(t, e) {
              this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
          }],
          [function(t, e) {
              const n = this.resolvedProperty;
              for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++]
          }, function(t, e) {
              const n = this.resolvedProperty;
              for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
              this.targetObject.needsUpdate = !0
          }, function(t, e) {
              const n = this.resolvedProperty;
              for (let i = 0, r = n.length; i !== r; ++i) n[i] = t[e++];
              this.targetObject.matrixWorldNeedsUpdate = !0
          }],
          [function(t, e) {
              this.resolvedProperty[this.propertyIndex] = t[e]
          }, function(t, e) {
              this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
          }, function(t, e) {
              this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
          }],
          [function(t, e) {
              this.resolvedProperty.fromArray(t, e)
          }, function(t, e) {
              this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
          }, function(t, e) {
              this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
          }]
      ],
      getValue: function(t, e) {
          this.bind(), this.getValue(t, e)
      },
      setValue: function(t, e) {
          this.bind(), this.setValue(t, e)
      },
      bind: function() {
          let t = this.node;
          const e = this.parsedPath,
              n = e.objectName,
              i = e.propertyName;
          let r = e.propertyIndex;
          if (t || (t = bc.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
          if (n) {
              let i = e.objectIndex;
              switch (n) {
                  case "materials":
                      if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                      if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                      t = t.material.materials;
                      break;
                  case "bones":
                      if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                      t = t.skeleton.bones;
                      for (let e = 0; e < t.length; e++)
                          if (t[e].name === i) {
                              i = e;
                              break
                          } break;
                  default:
                      if (void 0 === t[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                      t = t[n]
              }
              if (void 0 !== i) {
                  if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                  t = t[i]
              }
          }
          const s = t[i];
          if (void 0 === s) {
              const n = e.nodeName;
              return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n + "." + i + " but it wasn't found.", t)
          }
          let o = this.Versioning.None;
          this.targetObject = t, void 0 !== t.needsUpdate ? o = this.Versioning.NeedsUpdate : void 0 !== t.matrixWorldNeedsUpdate && (o = this.Versioning.MatrixWorldNeedsUpdate);
          let a = this.BindingType.Direct;
          if (void 0 !== r) {
              if ("morphTargetInfluences" === i) {
                  if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                  if (!t.geometry.isBufferGeometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.", this);
                  if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                  void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r])
              }
              a = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r
          } else void 0 !== s.fromArray && void 0 !== s.toArray ? (a = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (a = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
          this.getValue = this.GetterByBindingType[a], this.setValue = this.SetterByBindingTypeAndVersioning[a][o]
      },
      unbind: function() {
          this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
      }
  }), Object.assign(bc.prototype, {
      _getValue_unbound: bc.prototype.getValue,
      _setValue_unbound: bc.prototype.setValue
  }), Object.assign(function() {
      this.uuid = O.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
      const t = {};
      this._indicesByUUID = t;
      for (let e = 0, n = arguments.length; e !== n; ++e) t[arguments[e].uuid] = e;
      this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
      const e = this;
      this.stats = {
          objects: {
              get total() {
                  return e._objects.length
              },
              get inUse() {
                  return this.total - e.nCachedObjects_
              }
          },
          get bindingsPerObject() {
              return e._bindings.length
          }
      }
  }.prototype, {
      isAnimationObjectGroup: !0,
      add: function() {
          const t = this._objects,
              e = this._indicesByUUID,
              n = this._paths,
              i = this._parsedPaths,
              r = this._bindings,
              s = r.length;
          let o, a = t.length,
              c = this.nCachedObjects_;
          for (let l = 0, h = arguments.length; l !== h; ++l) {
              const h = arguments[l],
                  u = h.uuid;
              let d = e[u];
              if (void 0 === d) {
                  d = a++, e[u] = d, t.push(h);
                  for (let t = 0, e = s; t !== e; ++t) r[t].push(new bc(h, n[t], i[t]))
              } else if (d < c) {
                  o = t[d];
                  const a = --c,
                      l = t[a];
                  e[l.uuid] = d, t[d] = l, e[u] = a, t[a] = h;
                  for (let t = 0, e = s; t !== e; ++t) {
                      const e = r[t],
                          s = e[a];
                      let o = e[d];
                      e[d] = s, void 0 === o && (o = new bc(h, n[t], i[t])), e[a] = o
                  }
              } else t[d] !== o && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
          }
          this.nCachedObjects_ = c
      },
      remove: function() {
          const t = this._objects,
              e = this._indicesByUUID,
              n = this._bindings,
              i = n.length;
          let r = this.nCachedObjects_;
          for (let s = 0, o = arguments.length; s !== o; ++s) {
              const o = arguments[s],
                  a = o.uuid,
                  c = e[a];
              if (void 0 !== c && c >= r) {
                  const s = r++,
                      l = t[s];
                  e[l.uuid] = c, t[c] = l, e[a] = s, t[s] = o;
                  for (let t = 0, e = i; t !== e; ++t) {
                      const e = n[t],
                          i = e[s],
                          r = e[c];
                      e[c] = i, e[s] = r
                  }
              }
          }
          this.nCachedObjects_ = r
      },
      uncache: function() {
          const t = this._objects,
              e = this._indicesByUUID,
              n = this._bindings,
              i = n.length;
          let r = this.nCachedObjects_,
              s = t.length;
          for (let o = 0, a = arguments.length; o !== a; ++o) {
              const a = arguments[o].uuid,
                  c = e[a];
              if (void 0 !== c)
                  if (delete e[a], c < r) {
                      const o = --r,
                          a = t[o],
                          l = --s,
                          h = t[l];
                      e[a.uuid] = c, t[c] = a, e[h.uuid] = o, t[o] = h, t.pop();
                      for (let t = 0, e = i; t !== e; ++t) {
                          const e = n[t],
                              i = e[o],
                              r = e[l];
                          e[c] = i, e[o] = r, e.pop()
                      }
                  } else {
                      const r = --s,
                          o = t[r];
                      r > 0 && (e[o.uuid] = c), t[c] = o, t.pop();
                      for (let t = 0, e = i; t !== e; ++t) {
                          const e = n[t];
                          e[c] = e[r], e.pop()
                      }
                  }
          }
          this.nCachedObjects_ = r
      },
      subscribe_: function(t, e) {
          const n = this._bindingsIndicesByPath;
          let i = n[t];
          const r = this._bindings;
          if (void 0 !== i) return r[i];
          const s = this._paths,
              o = this._parsedPaths,
              a = this._objects,
              c = a.length,
              l = this.nCachedObjects_,
              h = new Array(c);
          i = r.length, n[t] = i, s.push(t), o.push(e), r.push(h);
          for (let n = l, i = a.length; n !== i; ++n) {
              const i = a[n];
              h[n] = new bc(i, t, e)
          }
          return h
      },
      unsubscribe_: function(t) {
          const e = this._bindingsIndicesByPath,
              n = e[t];
          if (void 0 !== n) {
              const i = this._paths,
                  r = this._parsedPaths,
                  s = this._bindings,
                  o = s.length - 1,
                  a = s[o];
              e[t[o]] = n, s[n] = a, s.pop(), r[n] = r[o], r.pop(), i[n] = i[o], i.pop()
          }
      }
  });
  class wc {
      constructor(t, e, n = null, i = e.blendMode) {
          this._mixer = t, this._clip = e, this._localRoot = n, this.blendMode = i;
          const r = e.tracks,
              s = r.length,
              o = new Array(s),
              a = {
                  endingStart: b,
                  endingEnd: b
              };
          for (let t = 0; t !== s; ++t) {
              const e = r[t].createInterpolant(null);
              o[t] = e, e.settings = a
          }
          this._interpolantSettings = a, this._interpolants = o, this._propertyBindings = new Array(s), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
      }
      play() {
          return this._mixer._activateAction(this), this
      }
      stop() {
          return this._mixer._deactivateAction(this), this.reset()
      }
      reset() {
          return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
      }
      isRunning() {
          return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
      }
      isScheduled() {
          return this._mixer._isActiveAction(this)
      }
      startAt(t) {
          return this._startTime = t, this
      }
      setLoop(t, e) {
          return this.loop = t, this.repetitions = e, this
      }
      setEffectiveWeight(t) {
          return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
      }
      getEffectiveWeight() {
          return this._effectiveWeight
      }
      fadeIn(t) {
          return this._scheduleFading(t, 0, 1)
      }
      fadeOut(t) {
          return this._scheduleFading(t, 1, 0)
      }
      crossFadeFrom(t, e, n) {
          if (t.fadeOut(e), this.fadeIn(e), n) {
              const n = this._clip.duration,
                  i = t._clip.duration,
                  r = i / n,
                  s = n / i;
              t.warp(1, r, e), this.warp(s, 1, e)
          }
          return this
      }
      crossFadeTo(t, e, n) {
          return t.crossFadeFrom(this, e, n)
      }
      stopFading() {
          const t = this._weightInterpolant;
          return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
      }
      setEffectiveTimeScale(t) {
          return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
      }
      getEffectiveTimeScale() {
          return this._effectiveTimeScale
      }
      setDuration(t) {
          return this.timeScale = this._clip.duration / t, this.stopWarping()
      }
      syncWith(t) {
          return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
      }
      halt(t) {
          return this.warp(this._effectiveTimeScale, 0, t)
      }
      warp(t, e, n) {
          const i = this._mixer,
              r = i.time,
              s = this.timeScale;
          let o = this._timeScaleInterpolant;
          null === o && (o = i._lendControlInterpolant(), this._timeScaleInterpolant = o);
          const a = o.parameterPositions,
              c = o.sampleValues;
          return a[0] = r, a[1] = r + n, c[0] = t / s, c[1] = e / s, this
      }
      stopWarping() {
          const t = this._timeScaleInterpolant;
          return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
      }
      getMixer() {
          return this._mixer
      }
      getClip() {
          return this._clip
      }
      getRoot() {
          return this._localRoot || this._mixer._root
      }
      _update(t, e, n, i) {
          if (!this.enabled) return void this._updateWeight(t);
          const r = this._startTime;
          if (null !== r) {
              const i = (t - r) * n;
              if (i < 0 || 0 === n) return;
              this._startTime = null, e = n * i
          }
          e *= this._updateTimeScale(t);
          const s = this._updateTime(e),
              o = this._updateWeight(t);
          if (o > 0) {
              const t = this._interpolants,
                  e = this._propertyBindings;
              switch (this.blendMode) {
                  case 2501:
                      for (let n = 0, i = t.length; n !== i; ++n) t[n].evaluate(s), e[n].accumulateAdditive(o);
                      break;
                  case 2500:
                  default:
                      for (let n = 0, r = t.length; n !== r; ++n) t[n].evaluate(s), e[n].accumulate(i, o)
              }
          }
      }
      _updateWeight(t) {
          let e = 0;
          if (this.enabled) {
              e = this.weight;
              const n = this._weightInterpolant;
              if (null !== n) {
                  const i = n.evaluate(t)[0];
                  e *= i, t > n.parameterPositions[1] && (this.stopFading(), 0 === i && (this.enabled = !1))
              }
          }
          return this._effectiveWeight = e, e
      }
      _updateTimeScale(t) {
          let e = 0;
          if (!this.paused) {
              e = this.timeScale;
              const n = this._timeScaleInterpolant;
              null !== n && (e *= n.evaluate(t)[0], t > n.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e))
          }
          return this._effectiveTimeScale = e, e
      }
      _updateTime(t) {
          const e = this._clip.duration,
              n = this.loop;
          let i = this.time + t,
              r = this._loopCount;
          const s = 2202 === n;
          if (0 === t) return -1 === r ? i : s && 1 == (1 & r) ? e - i : i;
          if (2200 === n) {
              -1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
              t: {
                  if (i >= e) i = e;
                  else {
                      if (!(i < 0)) {
                          this.time = i;
                          break t
                      }
                      i = 0
                  }
                  this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                  this.time = i,
                  this._mixer.dispatchEvent({
                      type: "finished",
                      action: this,
                      direction: t < 0 ? -1 : 1
                  })
              }
          } else {
              if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, s)) : this._setEndings(0 === this.repetitions, !0, s)), i >= e || i < 0) {
                  const n = Math.floor(i / e);
                  i -= e * n, r += Math.abs(n);
                  const o = this.repetitions - r;
                  if (o <= 0) this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = t > 0 ? e : 0, this.time = i, this._mixer.dispatchEvent({
                      type: "finished",
                      action: this,
                      direction: t > 0 ? 1 : -1
                  });
                  else {
                      if (1 === o) {
                          const e = t < 0;
                          this._setEndings(e, !e, s)
                      } else this._setEndings(!1, !1, s);
                      this._loopCount = r, this.time = i, this._mixer.dispatchEvent({
                          type: "loop",
                          action: this,
                          loopDelta: n
                      })
                  }
              } else this.time = i;
              if (s && 1 == (1 & r)) return e - i
          }
          return i
      }
      _setEndings(t, e, n) {
          const i = this._interpolantSettings;
          n ? (i.endingStart = w, i.endingEnd = w) : (i.endingStart = t ? this.zeroSlopeAtStart ? w : b : M, i.endingEnd = e ? this.zeroSlopeAtEnd ? w : b : M)
      }
      _scheduleFading(t, e, n) {
          const i = this._mixer,
              r = i.time;
          let s = this._weightInterpolant;
          null === s && (s = i._lendControlInterpolant(), this._weightInterpolant = s);
          const o = s.parameterPositions,
              a = s.sampleValues;
          return o[0] = r, a[0] = e, o[1] = r + t, a[1] = n, this
      }
  }

  function Mc(t) {
      this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
  }
  Mc.prototype = Object.assign(Object.create(P.prototype), {
      constructor: Mc,
      _bindAction: function(t, e) {
          const n = t._localRoot || this._root,
              i = t._clip.tracks,
              r = i.length,
              s = t._propertyBindings,
              o = t._interpolants,
              a = n.uuid,
              c = this._bindingsByRootAndName;
          let l = c[a];
          void 0 === l && (l = {}, c[a] = l);
          for (let t = 0; t !== r; ++t) {
              const r = i[t],
                  c = r.name;
              let h = l[c];
              if (void 0 !== h) s[t] = h;
              else {
                  if (h = s[t], void 0 !== h) {
                      null === h._cacheIndex && (++h.referenceCount, this._addInactiveBinding(h, a, c));
                      continue
                  }
                  const i = e && e._propertyBindings[t].binding.parsedPath;
                  h = new hc(bc.create(n, c, i), r.ValueTypeName, r.getValueSize()), ++h.referenceCount, this._addInactiveBinding(h, a, c), s[t] = h
              }
              o[t].resultBuffer = h.buffer
          }
      },
      _activateAction: function(t) {
          if (!this._isActiveAction(t)) {
              if (null === t._cacheIndex) {
                  const e = (t._localRoot || this._root).uuid,
                      n = t._clip.uuid,
                      i = this._actionsByClip[n];
                  this._bindAction(t, i && i.knownActions[0]), this._addInactiveAction(t, n, e)
              }
              const e = t._propertyBindings;
              for (let t = 0, n = e.length; t !== n; ++t) {
                  const n = e[t];
                  0 == n.useCount++ && (this._lendBinding(n), n.saveOriginalState())
              }
              this._lendAction(t)
          }
      },
      _deactivateAction: function(t) {
          if (this._isActiveAction(t)) {
              const e = t._propertyBindings;
              for (let t = 0, n = e.length; t !== n; ++t) {
                  const n = e[t];
                  0 == --n.useCount && (n.restoreOriginalState(), this._takeBackBinding(n))
              }
              this._takeBackAction(t)
          }
      },
      _initMemoryManager: function() {
          this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
          const t = this;
          this.stats = {
              actions: {
                  get total() {
                      return t._actions.length
                  },
                  get inUse() {
                      return t._nActiveActions
                  }
              },
              bindings: {
                  get total() {
                      return t._bindings.length
                  },
                  get inUse() {
                      return t._nActiveBindings
                  }
              },
              controlInterpolants: {
                  get total() {
                      return t._controlInterpolants.length
                  },
                  get inUse() {
                      return t._nActiveControlInterpolants
                  }
              }
          }
      },
      _isActiveAction: function(t) {
          const e = t._cacheIndex;
          return null !== e && e < this._nActiveActions
      },
      _addInactiveAction: function(t, e, n) {
          const i = this._actions,
              r = this._actionsByClip;
          let s = r[e];
          if (void 0 === s) s = {
              knownActions: [t],
              actionByRoot: {}
          }, t._byClipCacheIndex = 0, r[e] = s;
          else {
              const e = s.knownActions;
              t._byClipCacheIndex = e.length, e.push(t)
          }
          t._cacheIndex = i.length, i.push(t), s.actionByRoot[n] = t
      },
      _removeInactiveAction: function(t) {
          const e = this._actions,
              n = e[e.length - 1],
              i = t._cacheIndex;
          n._cacheIndex = i, e[i] = n, e.pop(), t._cacheIndex = null;
          const r = t._clip.uuid,
              s = this._actionsByClip,
              o = s[r],
              a = o.knownActions,
              c = a[a.length - 1],
              l = t._byClipCacheIndex;
          c._byClipCacheIndex = l, a[l] = c, a.pop(), t._byClipCacheIndex = null, delete o.actionByRoot[(t._localRoot || this._root).uuid], 0 === a.length && delete s[r], this._removeInactiveBindingsForAction(t)
      },
      _removeInactiveBindingsForAction: function(t) {
          const e = t._propertyBindings;
          for (let t = 0, n = e.length; t !== n; ++t) {
              const n = e[t];
              0 == --n.referenceCount && this._removeInactiveBinding(n)
          }
      },
      _lendAction: function(t) {
          const e = this._actions,
              n = t._cacheIndex,
              i = this._nActiveActions++,
              r = e[i];
          t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
      },
      _takeBackAction: function(t) {
          const e = this._actions,
              n = t._cacheIndex,
              i = --this._nActiveActions,
              r = e[i];
          t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
      },
      _addInactiveBinding: function(t, e, n) {
          const i = this._bindingsByRootAndName,
              r = this._bindings;
          let s = i[e];
          void 0 === s && (s = {}, i[e] = s), s[n] = t, t._cacheIndex = r.length, r.push(t)
      },
      _removeInactiveBinding: function(t) {
          const e = this._bindings,
              n = t.binding,
              i = n.rootNode.uuid,
              r = n.path,
              s = this._bindingsByRootAndName,
              o = s[i],
              a = e[e.length - 1],
              c = t._cacheIndex;
          a._cacheIndex = c, e[c] = a, e.pop(), delete o[r], 0 === Object.keys(o).length && delete s[i]
      },
      _lendBinding: function(t) {
          const e = this._bindings,
              n = t._cacheIndex,
              i = this._nActiveBindings++,
              r = e[i];
          t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
      },
      _takeBackBinding: function(t) {
          const e = this._bindings,
              n = t._cacheIndex,
              i = --this._nActiveBindings,
              r = e[i];
          t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r
      },
      _lendControlInterpolant: function() {
          const t = this._controlInterpolants,
              e = this._nActiveControlInterpolants++;
          let n = t[e];
          return void 0 === n && (n = new zo(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer), n.__cacheIndex = e, t[e] = n), n
      },
      _takeBackControlInterpolant: function(t) {
          const e = this._controlInterpolants,
              n = t.__cacheIndex,
              i = --this._nActiveControlInterpolants,
              r = e[i];
          t.__cacheIndex = i, e[i] = t, r.__cacheIndex = n, e[n] = r
      },
      _controlInterpolantsResultBuffer: new Float32Array(1),
      clipAction: function(t, e, n) {
          const i = e || this._root,
              r = i.uuid;
          let s = "string" == typeof t ? Zo.findByName(i, t) : t;
          const o = null !== s ? s.uuid : t,
              a = this._actionsByClip[o];
          let c = null;
          if (void 0 === n && (n = null !== s ? s.blendMode : 2500), void 0 !== a) {
              const t = a.actionByRoot[r];
              if (void 0 !== t && t.blendMode === n) return t;
              c = a.knownActions[0], null === s && (s = c._clip)
          }
          if (null === s) return null;
          const l = new wc(this, s, e, n);
          return this._bindAction(l, c), this._addInactiveAction(l, o, r), l
      },
      existingAction: function(t, e) {
          const n = e || this._root,
              i = n.uuid,
              r = "string" == typeof t ? Zo.findByName(n, t) : t,
              s = r ? r.uuid : t,
              o = this._actionsByClip[s];
          return void 0 !== o && o.actionByRoot[i] || null
      },
      stopAllAction: function() {
          const t = this._actions;
          for (let e = this._nActiveActions - 1; e >= 0; --e) t[e].stop();
          return this
      },
      update: function(t) {
          t *= this.timeScale;
          const e = this._actions,
              n = this._nActiveActions,
              i = this.time += t,
              r = Math.sign(t),
              s = this._accuIndex ^= 1;
          for (let o = 0; o !== n; ++o) e[o]._update(i, t, r, s);
          const o = this._bindings,
              a = this._nActiveBindings;
          for (let t = 0; t !== a; ++t) o[t].apply(s);
          return this
      },
      setTime: function(t) {
          this.time = 0;
          for (let t = 0; t < this._actions.length; t++) this._actions[t].time = 0;
          return this.update(t)
      },
      getRoot: function() {
          return this._root
      },
      uncacheClip: function(t) {
          const e = this._actions,
              n = t.uuid,
              i = this._actionsByClip,
              r = i[n];
          if (void 0 !== r) {
              const t = r.knownActions;
              for (let n = 0, i = t.length; n !== i; ++n) {
                  const i = t[n];
                  this._deactivateAction(i);
                  const r = i._cacheIndex,
                      s = e[e.length - 1];
                  i._cacheIndex = null, i._byClipCacheIndex = null, s._cacheIndex = r, e[r] = s, e.pop(), this._removeInactiveBindingsForAction(i)
              }
              delete i[n]
          }
      },
      uncacheRoot: function(t) {
          const e = t.uuid,
              n = this._actionsByClip;
          for (const t in n) {
              const i = n[t].actionByRoot[e];
              void 0 !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
          }
          const i = this._bindingsByRootAndName[e];
          if (void 0 !== i)
              for (const t in i) {
                  const e = i[t];
                  e.restoreOriginalState(), this._removeInactiveBinding(e)
              }
      },
      uncacheAction: function(t, e) {
          const n = this.existingAction(t, e);
          null !== n && (this._deactivateAction(n), this._removeInactiveAction(n))
      }
  });
  class Sc {
      constructor(t) {
          "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t
      }
      clone() {
          return new Sc(void 0 === this.value.clone ? this.value : this.value.clone())
      }
  }

  function Tc(t, e, n) {
      Or.call(this, t, e), this.meshPerAttribute = n || 1
  }

  function Ec(t, e, n, i, r) {
      this.buffer = t, this.type = e, this.itemSize = n, this.elementSize = i, this.count = r, this.version = 0
  }

  function Ac(t, e, n, i) {
      this.ray = new yt(t, e), this.near = n || 0, this.far = i || 1 / 0, this.camera = null, this.layers = new Pt, this.params = {
          Mesh: {},
          Line: {
              threshold: 1
          },
          LOD: {},
          Points: {
              threshold: 1
          },
          Sprite: {}
      }, Object.defineProperties(this.params, {
          PointCloud: {
              get: function() {
                  return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
              }
          }
      })
  }

  function Lc(t, e) {
      return t.distance - e.distance
  }

  function Rc(t, e, n, i) {
      if (t.layers.test(e.layers) && t.raycast(e, n), !0 === i) {
          const i = t.children;
          for (let t = 0, r = i.length; t < r; t++) Rc(i[t], e, n, !0)
      }
  }
  Tc.prototype = Object.assign(Object.create(Or.prototype), {
      constructor: Tc,
      isInstancedInterleavedBuffer: !0,
      copy: function(t) {
          return Or.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
      },
      clone: function(t) {
          const e = Or.prototype.clone.call(this, t);
          return e.meshPerAttribute = this.meshPerAttribute, e
      },
      toJSON: function(t) {
          const e = Or.prototype.toJSON.call(this, t);
          return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e
      }
  }), Object.defineProperty(Ec.prototype, "needsUpdate", {
      set: function(t) {
          !0 === t && this.version++
      }
  }), Object.assign(Ec.prototype, {
      isGLBufferAttribute: !0,
      setBuffer: function(t) {
          return this.buffer = t, this
      },
      setType: function(t, e) {
          return this.type = t, this.elementSize = e, this
      },
      setItemSize: function(t) {
          return this.itemSize = t, this
      },
      setCount: function(t) {
          return this.count = t, this
      }
  }), Object.assign(Ac.prototype, {
      set: function(t, e) {
          this.ray.set(t, e)
      },
      setFromCamera: function(t, e) {
          e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type)
      },
      intersectObject: function(t, e, n) {
          const i = n || [];
          return Rc(t, this, i, e), i.sort(Lc), i
      },
      intersectObjects: function(t, e, n) {
          const i = n || [];
          if (!1 === Array.isArray(t)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), i;
          for (let n = 0, r = t.length; n < r; n++) Rc(t[n], this, i, e);
          return i.sort(Lc), i
      }
  });
  class Pc {
      constructor(t = 1, e = 0, n = 0) {
          return this.radius = t, this.phi = e, this.theta = n, this
      }
      set(t, e, n) {
          return this.radius = t, this.phi = e, this.theta = n, this
      }
      clone() {
          return (new this.constructor).copy(this)
      }
      copy(t) {
          return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
      }
      makeSafe() {
          const t = 1e-6;
          return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)), this
      }
      setFromVector3(t) {
          return this.setFromCartesianCoords(t.x, t.y, t.z)
      }
      setFromCartesianCoords(t, e, n) {
          return this.radius = Math.sqrt(t * t + e * e + n * n), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(O.clamp(e / this.radius, -1, 1))), this
      }
  }
  const Cc = new I,
      Nc = new W,
      Oc = new W;

  function Ic(t) {
      jt.call(this), this.material = t, this.render = function() {}, this.hasPositions = !1, this.hasNormals = !1, this.hasColors = !1, this.hasUvs = !1, this.positionArray = null, this.normalArray = null, this.colorArray = null, this.uvArray = null, this.count = 0
  }
  Ic.prototype = Object.create(jt.prototype), Ic.prototype.constructor = Ic, Ic.prototype.isImmediateRenderObject = !0;
  const Dc = new W,
      Uc = new xt,
      Fc = new xt;

  function Hc(t) {
      const e = [];
      t && t.isBone && e.push(t);
      for (let n = 0; n < t.children.length; n++) e.push.apply(e, Hc(t.children[n]));
      return e
  }
  const zc = new Float32Array(1),
      Bc = (new Int32Array(zc.buffer), Math.pow(2, 8), [.125, .215, .35, .446, .526, .582]),
      Gc = 5 + Bc.length,
      {
          _lodPlanes: kc,
          _sizeLods: Vc,
          _sigmas: jc
      } = Wc();

  function Wc() {
      const t = [],
          e = [],
          n = [];
      let i = 8;
      for (let r = 0; r < Gc; r++) {
          const s = Math.pow(2, i);
          e.push(s);
          let o = 1 / s;
          r > 4 ? o = Bc[r - 8 + 4 - 1] : 0 == r && (o = 0), n.push(o);
          const a = 1 / (s - 1),
              c = -a / 2,
              l = 1 + a / 2,
              h = [c, c, l, c, l, l, c, c, l, l, c, l],
              u = 6,
              d = 6,
              p = 3,
              f = 2,
              m = 1,
              g = new Float32Array(p * d * u),
              v = new Float32Array(f * d * u),
              y = new Float32Array(m * d * u);
          for (let t = 0; t < u; t++) {
              const e = t % 3 * 2 / 3 - 1,
                  n = t > 2 ? 0 : -1,
                  i = [e, n, 0, e + 2 / 3, n, 0, e + 2 / 3, n + 1, 0, e, n, 0, e + 2 / 3, n + 1, 0, e, n + 1, 0];
              g.set(i, p * d * t), v.set(h, f * d * t);
              const r = [t, t, t, t, t, t];
              y.set(r, m * d * t)
          }
          const x = new Ge;
          x.setAttribute("position", new xe(g, p)), x.setAttribute("uv", new xe(v, f)), x.setAttribute("faceIndex", new xe(y, m)), t.push(x), i > 4 && i--
      }
      return {
          _lodPlanes: t,
          _sizeLods: e,
          _sigmas: n
      }
  }

  function qc(t) {
      console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), va.call(this, t), this.type = "catmullrom"
  }
  Math.sqrt(5), la.create = function(t, e) {
      return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(la.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
  }, Object.assign(Ra.prototype, {
      createPointsGeometry: function(t) {
          console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
          const e = this.getPoints(t);
          return this.createGeometry(e)
      },
      createSpacedPointsGeometry: function(t) {
          console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
          const e = this.getSpacedPoints(t);
          return this.createGeometry(e)
      },
      createGeometry: function(t) {
          console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
          const e = new ks;
          for (let n = 0, i = t.length; n < i; n++) {
              const i = t[n];
              e.vertices.push(new W(i.x, i.y, i.z || 0))
          }
          return e
      }
  }), Object.assign(Pa.prototype, {
      fromPoints: function(t) {
          return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."), this.setFromPoints(t)
      }
  }), Object.create(va.prototype), Object.create(va.prototype), qc.prototype = Object.create(va.prototype), Object.assign(qc.prototype, {
      initFromArray: function() {
          console.error("THREE.Spline: .initFromArray() has been removed.")
      },
      getControlPointsArray: function() {
          console.error("THREE.Spline: .getControlPointsArray() has been removed.")
      },
      reparametrizeByArcLength: function() {
          console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
      }
  }), class extends Ts {
      constructor(t = 10, e = 10, n = 4473924, i = 8947848) {
          n = new de(n), i = new de(i);
          const r = e / 2,
              s = t / e,
              o = t / 2,
              a = [],
              c = [];
          for (let t = 0, l = 0, h = -o; t <= e; t++, h += s) {
              a.push(-o, 0, h, o, 0, h), a.push(h, 0, -o, h, 0, o);
              const e = t === r ? n : i;
              e.toArray(c, l), l += 3, e.toArray(c, l), l += 3, e.toArray(c, l), l += 3, e.toArray(c, l), l += 3
          }
          const l = new Ge;
          l.setAttribute("position", new Le(a, 3)), l.setAttribute("color", new Le(c, 3)), super(l, new gs({
              vertexColors: !0,
              toneMapped: !1
          })), this.type = "GridHelper"
      }
  }.prototype.setColors = function() {
      console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
  }, class extends Ts {
      constructor(t) {
          const e = Hc(t),
              n = new Ge,
              i = [],
              r = [],
              s = new de(0, 0, 1),
              o = new de(0, 1, 0);
          for (let t = 0; t < e.length; t++) {
              const n = e[t];
              n.parent && n.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(s.r, s.g, s.b), r.push(o.r, o.g, o.b))
          }
          n.setAttribute("position", new Le(i, 3)), n.setAttribute("color", new Le(r, 3)), super(n, new gs({
              vertexColors: !0,
              depthTest: !1,
              depthWrite: !1,
              toneMapped: !1,
              transparent: !0
          })), this.type = "SkeletonHelper", this.isSkeletonHelper = !0, this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1
      }
      updateMatrixWorld(t) {
          const e = this.bones,
              n = this.geometry,
              i = n.getAttribute("position");
          Fc.copy(this.root.matrixWorld).invert();
          for (let t = 0, n = 0; t < e.length; t++) {
              const r = e[t];
              r.parent && r.parent.isBone && (Uc.multiplyMatrices(Fc, r.matrixWorld), Dc.setFromMatrixPosition(Uc), i.setXYZ(n, Dc.x, Dc.y, Dc.z), Uc.multiplyMatrices(Fc, r.parent.matrixWorld), Dc.setFromMatrixPosition(Uc), i.setXYZ(n + 1, Dc.x, Dc.y, Dc.z), n += 2)
          }
          n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(t)
      }
  }.prototype.update = function() {
      console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
  }, Object.assign(ta.prototype, {
      extractUrlBase: function(t) {
          return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."), Ya(t)
      }
  }), ta.Handlers = {
      add: function() {
          console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")
      },
      get: function() {
          console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")
      }
  }, Object.assign(class {
      constructor(t, e) {
          Object.defineProperty(this, "isBox2", {
              value: !0
          }), this.min = void 0 !== t ? t : new I(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new I(-1 / 0, -1 / 0)
      }
      set(t, e) {
          return this.min.copy(t), this.max.copy(e), this
      }
      setFromPoints(t) {
          this.makeEmpty();
          for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
          return this
      }
      setFromCenterAndSize(t, e) {
          const n = Cc.copy(e).multiplyScalar(.5);
          return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
      }
      clone() {
          return (new this.constructor).copy(this)
      }
      copy(t) {
          return this.min.copy(t.min), this.max.copy(t.max), this
      }
      makeEmpty() {
          return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
      }
      isEmpty() {
          return this.max.x < this.min.x || this.max.y < this.min.y
      }
      getCenter(t) {
          return void 0 === t && (console.warn("THREE.Box2: .getCenter() target is now required"), t = new I), this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
      }
      getSize(t) {
          return void 0 === t && (console.warn("THREE.Box2: .getSize() target is now required"), t = new I), this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
      }
      expandByPoint(t) {
          return this.min.min(t), this.max.max(t), this
      }
      expandByVector(t) {
          return this.min.sub(t), this.max.add(t), this
      }
      expandByScalar(t) {
          return this.min.addScalar(-t), this.max.addScalar(t), this
      }
      containsPoint(t) {
          return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
      }
      containsBox(t) {
          return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
      }
      getParameter(t, e) {
          return void 0 === e && (console.warn("THREE.Box2: .getParameter() target is now required"), e = new I), e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
      }
      intersectsBox(t) {
          return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
      }
      clampPoint(t, e) {
          return void 0 === e && (console.warn("THREE.Box2: .clampPoint() target is now required"), e = new I), e.copy(t).clamp(this.min, this.max)
      }
      distanceToPoint(t) {
          return Cc.copy(t).clamp(this.min, this.max).sub(t).length()
      }
      intersect(t) {
          return this.min.max(t.min), this.max.min(t.max), this
      }
      union(t) {
          return this.min.min(t.min), this.max.max(t.max), this
      }
      translate(t) {
          return this.min.add(t), this.max.add(t), this
      }
      equals(t) {
          return t.min.equals(this.min) && t.max.equals(this.max)
      }
  }.prototype, {
      center: function(t) {
          return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t)
      },
      empty: function() {
          return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
      },
      isIntersectionBox: function(t) {
          return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
      },
      size: function(t) {
          return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t)
      }
  }), Object.assign(Y.prototype, {
      center: function(t) {
          return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t)
      },
      empty: function() {
          return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
      },
      isIntersectionBox: function(t) {
          return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
      },
      isIntersectionSphere: function(t) {
          return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
      },
      size: function(t) {
          return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t)
      }
  }), Object.assign(ht.prototype, {
      empty: function() {
          return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."), this.isEmpty()
      }
  }), Mn.prototype.setFromMatrix = function(t) {
      return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."), this.setFromProjectionMatrix(t)
  }, class {
      constructor(t, e) {
          this.start = void 0 !== t ? t : new W, this.end = void 0 !== e ? e : new W
      }
      set(t, e) {
          return this.start.copy(t), this.end.copy(e), this
      }
      clone() {
          return (new this.constructor).copy(this)
      }
      copy(t) {
          return this.start.copy(t.start), this.end.copy(t.end), this
      }
      getCenter(t) {
          return void 0 === t && (console.warn("THREE.Line3: .getCenter() target is now required"), t = new W), t.addVectors(this.start, this.end).multiplyScalar(.5)
      }
      delta(t) {
          return void 0 === t && (console.warn("THREE.Line3: .delta() target is now required"), t = new W), t.subVectors(this.end, this.start)
      }
      distanceSq() {
          return this.start.distanceToSquared(this.end)
      }
      distance() {
          return this.start.distanceTo(this.end)
      }
      at(t, e) {
          return void 0 === e && (console.warn("THREE.Line3: .at() target is now required"), e = new W), this.delta(e).multiplyScalar(t).add(this.start)
      }
      closestPointToPointParameter(t, e) {
          Nc.subVectors(t, this.start), Oc.subVectors(this.end, this.start);
          const n = Oc.dot(Oc);
          let i = Oc.dot(Nc) / n;
          return e && (i = O.clamp(i, 0, 1)), i
      }
      closestPointToPoint(t, e, n) {
          const i = this.closestPointToPointParameter(t, e);
          return void 0 === n && (console.warn("THREE.Line3: .closestPointToPoint() target is now required"), n = new W), this.delta(n).multiplyScalar(i).add(this.start)
      }
      applyMatrix4(t) {
          return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
      }
      equals(t) {
          return t.start.equals(this.start) && t.end.equals(this.end)
      }
  }.prototype.center = function(t) {
      return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t)
  }, Object.assign(O, {
      random16: function() {
          return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."), Math.random()
      },
      nearestPowerOfTwo: function(t) {
          return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."), O.floorPowerOfTwo(t)
      },
      nextPowerOfTwo: function(t) {
          return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."), O.ceilPowerOfTwo(t)
      }
  }), Object.assign(D.prototype, {
      flattenToArrayOffset: function(t, e) {
          return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
      },
      multiplyVector3: function(t) {
          return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
      },
      multiplyVector3Array: function() {
          console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
      },
      applyToBufferAttribute: function(t) {
          return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
      },
      applyToVector3Array: function() {
          console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
      },
      getInverse: function(t) {
          return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert()
      }
  }), Object.assign(xt.prototype, {
      extractPosition: function(t) {
          return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t)
      },
      flattenToArrayOffset: function(t, e) {
          return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
      },
      getPosition: function() {
          return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), (new W).setFromMatrixColumn(this, 3)
      },
      setRotationFromQuaternion: function(t) {
          return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t)
      },
      multiplyToArray: function() {
          console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
      },
      multiplyVector3: function(t) {
          return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
      },
      multiplyVector4: function(t) {
          return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
      },
      multiplyVector3Array: function() {
          console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
      },
      rotateAxis: function(t) {
          console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this)
      },
      crossVector: function(t) {
          return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
      },
      translate: function() {
          console.error("THREE.Matrix4: .translate() has been removed.")
      },
      rotateX: function() {
          console.error("THREE.Matrix4: .rotateX() has been removed.")
      },
      rotateY: function() {
          console.error("THREE.Matrix4: .rotateY() has been removed.")
      },
      rotateZ: function() {
          console.error("THREE.Matrix4: .rotateZ() has been removed.")
      },
      rotateByAxis: function() {
          console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
      },
      applyToBufferAttribute: function(t) {
          return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
      },
      applyToVector3Array: function() {
          console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
      },
      makeFrustum: function(t, e, n, i, r, s) {
          return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, i, n, r, s)
      },
      getInverse: function(t) {
          return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."), this.copy(t).invert()
      }
  }), Yt.prototype.isIntersectionLine = function(t) {
      return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t)
  }, Object.assign(j.prototype, {
      multiplyVector3: function(t) {
          return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this)
      },
      inverse: function() {
          return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."), this.invert()
      }
  }), Object.assign(yt.prototype, {
      isIntersectionBox: function(t) {
          return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
      },
      isIntersectionPlane: function(t) {
          return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t)
      },
      isIntersectionSphere: function(t) {
          return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
      }
  }), Object.assign(se.prototype, {
      area: function() {
          return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."), this.getArea()
      },
      barycoordFromPoint: function(t, e) {
          return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), this.getBarycoord(t, e)
      },
      midpoint: function(t) {
          return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."), this.getMidpoint(t)
      },
      normal: function(t) {
          return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), this.getNormal(t)
      },
      plane: function(t) {
          return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."), this.getPlane(t)
      }
  }), Object.assign(se, {
      barycoordFromPoint: function(t, e, n, i, r) {
          return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."), se.getBarycoord(t, e, n, i, r)
      },
      normal: function(t, e, n, i) {
          return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."), se.getNormal(t, e, n, i)
      }
  }), Object.assign(Ca.prototype, {
      extractAllPoints: function(t) {
          return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."), this.extractPoints(t)
      },
      extrude: function(t) {
          return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new xo(this, t)
      },
      makeGeometry: function(t) {
          return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Mo(this, t)
      }
  }), Object.assign(I.prototype, {
      fromAttribute: function(t, e, n) {
          return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
      },
      distanceToManhattan: function(t) {
          return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
      },
      lengthManhattan: function() {
          return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
      }
  }), Object.assign(W.prototype, {
      setEulerFromRotationMatrix: function() {
          console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
      },
      setEulerFromQuaternion: function() {
          console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
      },
      getPositionFromMatrix: function(t) {
          return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t)
      },
      getScaleFromMatrix: function(t) {
          return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t)
      },
      getColumnFromMatrix: function(t, e) {
          return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
      },
      applyProjection: function(t) {
          return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t)
      },
      fromAttribute: function(t, e, n) {
          return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
      },
      distanceToManhattan: function(t) {
          return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."), this.manhattanDistanceTo(t)
      },
      lengthManhattan: function() {
          return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
      }
  }), Object.assign(G.prototype, {
      fromAttribute: function(t, e, n) {
          return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, n)
      },
      lengthManhattan: function() {
          return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."), this.manhattanLength()
      }
  }), Object.assign(ks.prototype, {
      computeTangents: function() {
          console.error("THREE.Geometry: .computeTangents() has been removed.")
      },
      computeLineDistances: function() {
          console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")
      },
      applyMatrix: function(t) {
          return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t)
      }
  }), Object.assign(jt.prototype, {
      getChildByName: function(t) {
          return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t)
      },
      renderDepth: function() {
          console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
      },
      translate: function(t, e) {
          return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t)
      },
      getWorldRotation: function() {
          console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")
      },
      applyMatrix: function(t) {
          return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t)
      }
  }), Object.defineProperties(jt.prototype, {
      eulerOrder: {
          get: function() {
              return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
          },
          set: function(t) {
              console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t
          }
      },
      useQuaternion: {
          get: function() {
              console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
          },
          set: function() {
              console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
          }
      }
  }), Object.assign(on.prototype, {
      setDrawMode: function() {
          console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
      }
  }), Object.defineProperties(on.prototype, {
      drawMode: {
          get: function() {
              return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."), 0
          },
          set: function() {
              console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")
          }
      }
  }), Object.defineProperties(ts.prototype, {
      objects: {
          get: function() {
              return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
          }
      }
  }), Object.defineProperty(hs.prototype, "useVertexTexture", {
      get: function() {
          console.warn("THREE.Skeleton: useVertexTexture has been removed.")
      },
      set: function() {
          console.warn("THREE.Skeleton: useVertexTexture has been removed.")
      }
  }), os.prototype.initBones = function() {
      console.error("THREE.SkinnedMesh: initBones() has been removed.")
  }, Object.defineProperty(la.prototype, "__arcLengthDivisions", {
      get: function() {
          return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
      },
      set: function(t) {
          console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = t
      }
  }), mn.prototype.setLens = function(t, e) {
      console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
  }, Object.defineProperties(Na.prototype, {
      onlyShadow: {
          set: function() {
              console.warn("THREE.Light: .onlyShadow has been removed.")
          }
      },
      shadowCameraFov: {
          set: function(t) {
              console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t
          }
      },
      shadowCameraLeft: {
          set: function(t) {
              console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t
          }
      },
      shadowCameraRight: {
          set: function(t) {
              console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t
          }
      },
      shadowCameraTop: {
          set: function(t) {
              console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t
          }
      },
      shadowCameraBottom: {
          set: function(t) {
              console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t
          }
      },
      shadowCameraNear: {
          set: function(t) {
              console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t
          }
      },
      shadowCameraFar: {
          set: function(t) {
              console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t
          }
      },
      shadowCameraVisible: {
          set: function() {
              console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
          }
      },
      shadowBias: {
          set: function(t) {
              console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t
          }
      },
      shadowDarkness: {
          set: function() {
              console.warn("THREE.Light: .shadowDarkness has been removed.")
          }
      },
      shadowMapWidth: {
          set: function(t) {
              console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t
          }
      },
      shadowMapHeight: {
          set: function(t) {
              console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t
          }
      }
  }), Object.defineProperties(xe.prototype, {
      length: {
          get: function() {
              return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
          }
      },
      dynamic: {
          get: function() {
              return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.usage === L
          },
          set: function() {
              console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."), this.setUsage(L)
          }
      }
  }), Object.assign(xe.prototype, {
      setDynamic: function(t) {
          return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? L : A), this
      },
      copyIndicesArray: function() {
          console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")
      },
      setArray: function() {
          console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
      }
  }), Object.assign(Ge.prototype, {
      addIndex: function(t) {
          console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t)
      },
      addAttribute: function(t, e) {
          return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."), e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute ? "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e), this) : this.setAttribute(t, e) : (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.setAttribute(t, new xe(arguments[1], arguments[2])))
      },
      addDrawCall: function(t, e, n) {
          void 0 !== n && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e)
      },
      clearDrawCalls: function() {
          console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
      },
      computeTangents: function() {
          console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
      },
      computeOffsets: function() {
          console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
      },
      removeAttribute: function(t) {
          return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."), this.deleteAttribute(t)
      },
      applyMatrix: function(t) {
          return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."), this.applyMatrix4(t)
      }
  }), Object.defineProperties(Ge.prototype, {
      drawcalls: {
          get: function() {
              return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
          }
      },
      offsets: {
          get: function() {
              return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
          }
      }
  }), Object.defineProperties(Za.prototype, {
      maxInstancedCount: {
          get: function() {
              return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."), this.instanceCount
          },
          set: function(t) {
              console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."), this.instanceCount = t
          }
      }
  }), Object.defineProperties(Ac.prototype, {
      linePrecision: {
          get: function() {
              return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold
          },
          set: function(t) {
              console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."), this.params.Line.threshold = t
          }
      }
  }), Object.defineProperties(Or.prototype, {
      dynamic: {
          get: function() {
              return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.usage === L
          },
          set: function(t) {
              console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."), this.setUsage(t)
          }
      }
  }), Object.assign(Or.prototype, {
      setDynamic: function(t) {
          return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."), this.setUsage(!0 === t ? L : A), this
      },
      setArray: function() {
          console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")
      }
  }), Object.assign(vo.prototype, {
      getArrays: function() {
          console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")
      },
      addShapeList: function() {
          console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")
      },
      addShape: function() {
          console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")
      }
  }), Object.assign(Nr.prototype, {
      dispose: function() {
          console.error("THREE.Scene: .dispose() has been removed.")
      }
  }), Object.defineProperties(Sc.prototype, {
      dynamic: {
          set: function() {
              console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
          }
      },
      onUpdate: {
          value: function() {
              return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
          }
      }
  }), Object.defineProperties(me.prototype, {
      wrapAround: {
          get: function() {
              console.warn("THREE.Material: .wrapAround has been removed.")
          },
          set: function() {
              console.warn("THREE.Material: .wrapAround has been removed.")
          }
      },
      overdraw: {
          get: function() {
              console.warn("THREE.Material: .overdraw has been removed.")
          },
          set: function() {
              console.warn("THREE.Material: .overdraw has been removed.")
          }
      },
      wrapRGB: {
          get: function() {
              return console.warn("THREE.Material: .wrapRGB has been removed."), new de
          }
      },
      shading: {
          get: function() {
              console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
          },
          set: function(t) {
              console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t
          }
      },
      stencilMask: {
          get: function() {
              return console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask
          },
          set: function(t) {
              console.warn("THREE." + this.type + ": .stencilMask has been removed. Use .stencilFuncMask instead."), this.stencilFuncMask = t
          }
      }
  }), Object.defineProperties(Ro.prototype, {
      metal: {
          get: function() {
              return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
          },
          set: function() {
              console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
          }
      }
  }), Object.defineProperties(Lo.prototype, {
      transparency: {
          get: function() {
              return console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."), this.transmission
          },
          set: function(t) {
              console.warn("THREE.MeshPhysicalMaterial: .transparency has been renamed to .transmission."), this.transmission = t
          }
      }
  }), Object.defineProperties(pn.prototype, {
      derivatives: {
          get: function() {
              return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
          },
          set: function(t) {
              console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t
          }
      }
  }), Object.assign(Pr.prototype, {
      clearTarget: function(t, e, n, i) {
          console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."), this.setRenderTarget(t), this.clear(e, n, i)
      },
      animate: function(t) {
          console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."), this.setAnimationLoop(t)
      },
      getCurrentRenderTarget: function() {
          return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
      },
      getMaxAnisotropy: function() {
          return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
      },
      getPrecision: function() {
          return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
      },
      resetGLState: function() {
          return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."), this.state.reset()
      },
      supportsFloatTextures: function() {
          return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
      },
      supportsHalfFloatTextures: function() {
          return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
      },
      supportsStandardDerivatives: function() {
          return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
      },
      supportsCompressedTextureS3TC: function() {
          return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
      },
      supportsCompressedTexturePVRTC: function() {
          return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
      },
      supportsBlendMinMax: function() {
          return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
      },
      supportsVertexTextures: function() {
          return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
      },
      supportsInstancedArrays: function() {
          return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
      },
      enableScissorTest: function(t) {
          console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t)
      },
      initMaterial: function() {
          console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
      },
      addPrePlugin: function() {
          console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
      },
      addPostPlugin: function() {
          console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
      },
      updateShadowMap: function() {
          console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
      },
      setFaceCulling: function() {
          console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")
      },
      allocTextureUnit: function() {
          console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")
      },
      setTexture: function() {
          console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")
      },
      setTexture2D: function() {
          console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")
      },
      setTextureCube: function() {
          console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")
      },
      getActiveMipMapLevel: function() {
          return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."), this.getActiveMipmapLevel()
      }
  }), Object.defineProperties(Pr.prototype, {
      shadowMapEnabled: {
          get: function() {
              return this.shadowMap.enabled
          },
          set: function(t) {
              console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t
          }
      },
      shadowMapType: {
          get: function() {
              return this.shadowMap.type
          },
          set: function(t) {
              console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t
          }
      },
      shadowMapCullFace: {
          get: function() {
              console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
          },
          set: function() {
              console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")
          }
      },
      context: {
          get: function() {
              return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."), this.getContext()
          }
      },
      vr: {
          get: function() {
              return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"), this.xr
          }
      },
      gammaInput: {
          get: function() {
              return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."), !1
          },
          set: function() {
              console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")
          }
      },
      gammaOutput: {
          get: function() {
              return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), !1
          },
          set: function(t) {
              console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."), this.outputEncoding = !0 === t ? T : S
          }
      },
      toneMappingWhitePoint: {
          get: function() {
              return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."), 1
          },
          set: function() {
              console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")
          }
      }
  }), Object.defineProperties(br.prototype, {
      cullFace: {
          get: function() {
              console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
          },
          set: function() {
              console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")
          }
      },
      renderReverseSided: {
          get: function() {
              console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
          },
          set: function() {
              console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")
          }
      },
      renderSingleSided: {
          get: function() {
              console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
          },
          set: function() {
              console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")
          }
      }
  }), Object.defineProperties(k.prototype, {
      wrapS: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
          },
          set: function(t) {
              console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t
          }
      },
      wrapT: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
          },
          set: function(t) {
              console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t
          }
      },
      magFilter: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
          },
          set: function(t) {
              console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t
          }
      },
      minFilter: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
          },
          set: function(t) {
              console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t
          }
      },
      anisotropy: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
          },
          set: function(t) {
              console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t
          }
      },
      offset: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
          },
          set: function(t) {
              console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t
          }
      },
      repeat: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
          },
          set: function(t) {
              console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t
          }
      },
      format: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
          },
          set: function(t) {
              console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t
          }
      },
      type: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
          },
          set: function(t) {
              console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t
          }
      },
      generateMipmaps: {
          get: function() {
              return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
          },
          set: function(t) {
              console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t
          }
      }
  }), Object.defineProperties(class extends jt {
      constructor(t) {
          super(), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = []
      }
      getOutput() {
          return this.gain
      }
      setNodeSource(t) {
          return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
      }
      setMediaElementSource(t) {
          return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this
      }
      setMediaStreamSource(t) {
          return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this
      }
      setBuffer(t) {
          return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
      }
      play(t = 0) {
          if (!0 === this.isPlaying) return void console.warn("THREE.Audio: Audio is already playing.");
          if (!1 === this.hasPlaybackControl) return void console.warn("THREE.Audio: this Audio has no playback control.");
          this._startedAt = this.context.currentTime + t;
          const e = this.context.createBufferSource();
          return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect()
      }
      pause() {
          if (!1 !== this.hasPlaybackControl) return !0 === this.isPlaying && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, !0 === this.loop && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
          console.warn("THREE.Audio: this Audio has no playback control.")
      }
      stop() {
          if (!1 !== this.hasPlaybackControl) return this._progress = 0, this.source.stop(), this.source.onended = null, this.isPlaying = !1, this;
          console.warn("THREE.Audio: this Audio has no playback control.")
      }
      connect() {
          if (this.filters.length > 0) {
              this.source.connect(this.filters[0]);
              for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
              this.filters[this.filters.length - 1].connect(this.getOutput())
          } else this.source.connect(this.getOutput());
          return this._connected = !0, this
      }
      disconnect() {
          if (this.filters.length > 0) {
              this.source.disconnect(this.filters[0]);
              for (let t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
              this.filters[this.filters.length - 1].disconnect(this.getOutput())
          } else this.source.disconnect(this.getOutput());
          return this._connected = !1, this
      }
      getFilters() {
          return this.filters
      }
      setFilters(t) {
          return t || (t = []), !0 === this._connected ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this
      }
      setDetune(t) {
          if (this.detune = t, void 0 !== this.source.detune) return !0 === this.isPlaying && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, .01), this
      }
      getDetune() {
          return this.detune
      }
      getFilter() {
          return this.getFilters()[0]
      }
      setFilter(t) {
          return this.setFilters(t ? [t] : [])
      }
      setPlaybackRate(t) {
          if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, .01), this;
          console.warn("THREE.Audio: this Audio has no playback control.")
      }
      getPlaybackRate() {
          return this.playbackRate
      }
      onEnded() {
          this.isPlaying = !1
      }
      getLoop() {
          return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
      }
      setLoop(t) {
          if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
          console.warn("THREE.Audio: this Audio has no playback control.")
      }
      setLoopStart(t) {
          return this.loopStart = t, this
      }
      setLoopEnd(t) {
          return this.loopEnd = t, this
      }
      getVolume() {
          return this.gain.gain.value
      }
      setVolume(t) {
          return this.gain.gain.setTargetAtTime(t, this.context.currentTime, .01), this
      }
  }.prototype, {
      load: {
          value: function(t) {
              console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
              const e = this;
              return (new rc).load(t, (function(t) {
                  e.setBuffer(t)
              })), this
          }
      },
      startTime: {
          set: function() {
              console.warn("THREE.Audio: .startTime is now .play( delay ).")
          }
      }
  }), class {
      constructor(t, e = 2048) {
          this.analyser = t.context.createAnalyser(), this.analyser.fftSize = e, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
      }
      getFrequencyData() {
          return this.analyser.getByteFrequencyData(this.data), this.data
      }
      getAverageFrequency() {
          let t = 0;
          const e = this.getFrequencyData();
          for (let n = 0; n < e.length; n++) t += e[n];
          return t / e.length
      }
  }.prototype.getData = function() {
      return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
  }, vn.prototype.updateCubeMap = function(t, e) {
      return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e)
  }, vn.prototype.clear = function(t, e, n, i) {
      return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."), this.renderTarget.clear(t, e, n, i)
  }, F.crossOrigin = void 0, F.loadTexture = function(t, e, n, i) {
      console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
      const r = new ca;
      r.setCrossOrigin(this.crossOrigin);
      const s = r.load(t, n, void 0, i);
      return e && (s.mapping = e), s
  }, F.loadTextureCube = function(t, e, n, i) {
      console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
      const r = new oa;
      r.setCrossOrigin(this.crossOrigin);
      const s = r.load(t, n, void 0, i);
      return e && (s.mapping = e), s
  }, F.loadCompressedTexture = function() {
      console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
  }, F.loadCompressedTextureCube = function() {
      console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
  }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
      detail: {
          revision: "124"
      }
  }));
  var Xc = function(t, e) {
      var n, i, r, s, o, a;
      void 0 === e && console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'), e === document && console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'), this.object = t, this.domElement = e, this.enabled = !0, this.target = new W, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.enableKeys = !0, this.keys = {
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          BOTTOM: 40
      }, this.mouseButtons = {
          LEFT: 0,
          MIDDLE: 1,
          RIGHT: 2
      }, this.touches = {
          ONE: 0,
          TWO: 2
      }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = function() {
          return m.phi
      }, this.getAzimuthalAngle = function() {
          return m.theta
      }, this.saveState = function() {
          c.target0.copy(c.target), c.position0.copy(c.object.position), c.zoom0 = c.object.zoom
      }, this.reset = function() {
          c.target.copy(c.target0), c.object.position.copy(c.position0), c.object.zoom = c.zoom0, c.object.updateProjectionMatrix(), c.dispatchEvent(l), c.update(), p = d.NONE
      }, this.update = (n = new W, i = (new j).setFromUnitVectors(t.up, new W(0, 1, 0)), r = i.clone().invert(), s = new W, o = new j, a = 2 * Math.PI, function() {
          var t = c.object.position;
          n.copy(t).sub(c.target), n.applyQuaternion(i), m.setFromVector3(n), c.autoRotate && p === d.NONE && P(2 * Math.PI / 60 / 60 * c.autoRotateSpeed), c.enableDamping ? (m.theta += g.theta * c.dampingFactor, m.phi += g.phi * c.dampingFactor) : (m.theta += g.theta, m.phi += g.phi);
          var e = c.minAzimuthAngle,
              h = c.maxAzimuthAngle;
          return isFinite(e) && isFinite(h) && (e < -Math.PI ? e += a : e > Math.PI && (e -= a), h < -Math.PI ? h += a : h > Math.PI && (h -= a), m.theta = e <= h ? Math.max(e, Math.min(h, m.theta)) : m.theta > (e + h) / 2 ? Math.max(e, m.theta) : Math.min(h, m.theta)), m.phi = Math.max(c.minPolarAngle, Math.min(c.maxPolarAngle, m.phi)), m.makeSafe(), m.radius *= v, m.radius = Math.max(c.minDistance, Math.min(c.maxDistance, m.radius)), !0 === c.enableDamping ? c.target.addScaledVector(y, c.dampingFactor) : c.target.add(y), n.setFromSpherical(m), n.applyQuaternion(r), t.copy(c.target).add(n), c.object.lookAt(c.target), !0 === c.enableDamping ? (g.theta *= 1 - c.dampingFactor, g.phi *= 1 - c.dampingFactor, y.multiplyScalar(1 - c.dampingFactor)) : (g.set(0, 0, 0), y.set(0, 0, 0)), v = 1, !!(x || s.distanceToSquared(c.object.position) > f || 8 * (1 - o.dot(c.object.quaternion)) > f) && (c.dispatchEvent(l), s.copy(c.object.position), o.copy(c.object.quaternion), x = !1, !0)
      }), this.dispose = function() {
          c.domElement.removeEventListener("contextmenu", it, !1), c.domElement.removeEventListener("pointerdown", Z, !1), c.domElement.removeEventListener("wheel", Q, !1), c.domElement.removeEventListener("touchstart", tt, !1), c.domElement.removeEventListener("touchend", nt, !1), c.domElement.removeEventListener("touchmove", et, !1), c.domElement.ownerDocument.removeEventListener("pointermove", J, !1), c.domElement.ownerDocument.removeEventListener("pointerup", K, !1), c.domElement.removeEventListener("keydown", $, !1)
      };
      var c = this,
          l = {
              type: "change"
          },
          h = {
              type: "start"
          },
          u = {
              type: "end"
          },
          d = {
              NONE: -1,
              ROTATE: 0,
              DOLLY: 1,
              PAN: 2,
              TOUCH_ROTATE: 3,
              TOUCH_PAN: 4,
              TOUCH_DOLLY_PAN: 5,
              TOUCH_DOLLY_ROTATE: 6
          },
          p = d.NONE,
          f = 1e-6,
          m = new Pc,
          g = new Pc,
          v = 1,
          y = new W,
          x = !1,
          _ = new I,
          b = new I,
          w = new I,
          M = new I,
          S = new I,
          T = new I,
          E = new I,
          A = new I,
          L = new I;

      function R() {
          return Math.pow(.95, c.zoomSpeed)
      }

      function P(t) {
          g.theta -= t
      }

      function C(t) {
          g.phi -= t
      }
      var N, O = (N = new W, function(t, e) {
              N.setFromMatrixColumn(e, 0), N.multiplyScalar(-t), y.add(N)
          }),
          D = function() {
              var t = new W;
              return function(e, n) {
                  !0 === c.screenSpacePanning ? t.setFromMatrixColumn(n, 1) : (t.setFromMatrixColumn(n, 0), t.crossVectors(c.object.up, t)), t.multiplyScalar(e), y.add(t)
              }
          }(),
          U = function() {
              var t = new W;
              return function(e, n) {
                  var i = c.domElement;
                  if (c.object.isPerspectiveCamera) {
                      var r = c.object.position;
                      t.copy(r).sub(c.target);
                      var s = t.length();
                      s *= Math.tan(c.object.fov / 2 * Math.PI / 180), O(2 * e * s / i.clientHeight, c.object.matrix), D(2 * n * s / i.clientHeight, c.object.matrix)
                  } else c.object.isOrthographicCamera ? (O(e * (c.object.right - c.object.left) / c.object.zoom / i.clientWidth, c.object.matrix), D(n * (c.object.top - c.object.bottom) / c.object.zoom / i.clientHeight, c.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), c.enablePan = !1)
              }
          }();

      function F(t) {
          c.object.isPerspectiveCamera ? v /= t : c.object.isOrthographicCamera ? (c.object.zoom = Math.max(c.minZoom, Math.min(c.maxZoom, c.object.zoom * t)), c.object.updateProjectionMatrix(), x = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), c.enableZoom = !1)
      }

      function H(t) {
          c.object.isPerspectiveCamera ? v *= t : c.object.isOrthographicCamera ? (c.object.zoom = Math.max(c.minZoom, Math.min(c.maxZoom, c.object.zoom / t)), c.object.updateProjectionMatrix(), x = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), c.enableZoom = !1)
      }

      function z(t) {
          _.set(t.clientX, t.clientY)
      }

      function B(t) {
          M.set(t.clientX, t.clientY)
      }

      function G(t) {
          if (1 == t.touches.length) _.set(t.touches[0].pageX, t.touches[0].pageY);
          else {
              var e = .5 * (t.touches[0].pageX + t.touches[1].pageX),
                  n = .5 * (t.touches[0].pageY + t.touches[1].pageY);
              _.set(e, n)
          }
      }

      function k(t) {
          if (1 == t.touches.length) M.set(t.touches[0].pageX, t.touches[0].pageY);
          else {
              var e = .5 * (t.touches[0].pageX + t.touches[1].pageX),
                  n = .5 * (t.touches[0].pageY + t.touches[1].pageY);
              M.set(e, n)
          }
      }

      function V(t) {
          var e = t.touches[0].pageX - t.touches[1].pageX,
              n = t.touches[0].pageY - t.touches[1].pageY,
              i = Math.sqrt(e * e + n * n);
          E.set(0, i)
      }

      function q(t) {
          if (1 == t.touches.length) b.set(t.touches[0].pageX, t.touches[0].pageY);
          else {
              var e = .5 * (t.touches[0].pageX + t.touches[1].pageX),
                  n = .5 * (t.touches[0].pageY + t.touches[1].pageY);
              b.set(e, n)
          }
          w.subVectors(b, _).multiplyScalar(c.rotateSpeed);
          var i = c.domElement;
          P(2 * Math.PI * w.x / i.clientHeight), C(2 * Math.PI * w.y / i.clientHeight), _.copy(b)
      }

      function X(t) {
          if (1 == t.touches.length) S.set(t.touches[0].pageX, t.touches[0].pageY);
          else {
              var e = .5 * (t.touches[0].pageX + t.touches[1].pageX),
                  n = .5 * (t.touches[0].pageY + t.touches[1].pageY);
              S.set(e, n)
          }
          T.subVectors(S, M).multiplyScalar(c.panSpeed), U(T.x, T.y), M.copy(S)
      }

      function Y(t) {
          var e = t.touches[0].pageX - t.touches[1].pageX,
              n = t.touches[0].pageY - t.touches[1].pageY,
              i = Math.sqrt(e * e + n * n);
          A.set(0, i), L.set(0, Math.pow(A.y / E.y, c.zoomSpeed)), F(L.y), E.copy(A)
      }

      function Z(t) {
          if (!1 !== c.enabled) switch (t.pointerType) {
              case "mouse":
              case "pen":
                  ! function(t) {
                      var e;
                      switch (t.preventDefault(), c.domElement.focus ? c.domElement.focus() : window.focus(), t.button) {
                          case 0:
                              e = c.mouseButtons.LEFT;
                              break;
                          case 1:
                              e = c.mouseButtons.MIDDLE;
                              break;
                          case 2:
                              e = c.mouseButtons.RIGHT;
                              break;
                          default:
                              e = -1
                      }
                      switch (e) {
                          case 1:
                              if (!1 === c.enableZoom) return;
                              ! function(t) {
                                  E.set(t.clientX, t.clientY)
                              }(t), p = d.DOLLY;
                              break;
                          case 0:
                              if (t.ctrlKey || t.metaKey || t.shiftKey) {
                                  if (!1 === c.enablePan) return;
                                  B(t), p = d.PAN
                              } else {
                                  if (!1 === c.enableRotate) return;
                                  z(t), p = d.ROTATE
                              }
                              break;
                          case 2:
                              if (t.ctrlKey || t.metaKey || t.shiftKey) {
                                  if (!1 === c.enableRotate) return;
                                  z(t), p = d.ROTATE
                              } else {
                                  if (!1 === c.enablePan) return;
                                  B(t), p = d.PAN
                              }
                              break;
                          default:
                              p = d.NONE
                      }
                      p !== d.NONE && (c.domElement.ownerDocument.addEventListener("pointermove", J, !1), c.domElement.ownerDocument.addEventListener("pointerup", K, !1), c.dispatchEvent(h))
                  }(t)
          }
      }

      function J(t) {
          if (!1 !== c.enabled) switch (t.pointerType) {
              case "mouse":
              case "pen":
                  ! function(t) {
                      if (!1 !== c.enabled) switch (t.preventDefault(), p) {
                          case d.ROTATE:
                              if (!1 === c.enableRotate) return;
                              ! function(t) {
                                  b.set(t.clientX, t.clientY), w.subVectors(b, _).multiplyScalar(c.rotateSpeed);
                                  var e = c.domElement;
                                  P(2 * Math.PI * w.x / e.clientHeight), C(2 * Math.PI * w.y / e.clientHeight), _.copy(b), c.update()
                              }(t);
                              break;
                          case d.DOLLY:
                              if (!1 === c.enableZoom) return;
                              ! function(t) {
                                  A.set(t.clientX, t.clientY), L.subVectors(A, E), L.y > 0 ? F(R()) : L.y < 0 && H(R()), E.copy(A), c.update()
                              }(t);
                              break;
                          case d.PAN:
                              if (!1 === c.enablePan) return;
                              ! function(t) {
                                  S.set(t.clientX, t.clientY), T.subVectors(S, M).multiplyScalar(c.panSpeed), U(T.x, T.y), M.copy(S), c.update()
                              }(t)
                      }
                  }(t)
          }
      }

      function K(t) {
          switch (t.pointerType) {
              case "mouse":
              case "pen":
                  c.domElement.ownerDocument.removeEventListener("pointermove", J, !1), c.domElement.ownerDocument.removeEventListener("pointerup", K, !1), !1 !== c.enabled && (c.dispatchEvent(u), p = d.NONE)
          }
      }

      function Q(t) {
          !1 === c.enabled || !1 === c.enableZoom || p !== d.NONE && p !== d.ROTATE || (t.preventDefault(), t.stopPropagation(), c.dispatchEvent(h), function(t) {
              t.deltaY < 0 ? H(R()) : t.deltaY > 0 && F(R()), c.update()
          }(t), c.dispatchEvent(u))
      }

      function $(t) {
          !1 !== c.enabled && !1 !== c.enableKeys && !1 !== c.enablePan && function(t) {
              var e = !1;
              switch (t.keyCode) {
                  case c.keys.UP:
                      U(0, c.keyPanSpeed), e = !0;
                      break;
                  case c.keys.BOTTOM:
                      U(0, -c.keyPanSpeed), e = !0;
                      break;
                  case c.keys.LEFT:
                      U(c.keyPanSpeed, 0), e = !0;
                      break;
                  case c.keys.RIGHT:
                      U(-c.keyPanSpeed, 0), e = !0
              }
              e && (t.preventDefault(), c.update())
          }(t)
      }

      function tt(t) {
          if (!1 !== c.enabled) {
              switch (t.preventDefault(), t.touches.length) {
                  case 1:
                      switch (c.touches.ONE) {
                          case 0:
                              if (!1 === c.enableRotate) return;
                              G(t), p = d.TOUCH_ROTATE;
                              break;
                          case 1:
                              if (!1 === c.enablePan) return;
                              k(t), p = d.TOUCH_PAN;
                              break;
                          default:
                              p = d.NONE
                      }
                      break;
                  case 2:
                      switch (c.touches.TWO) {
                          case 2:
                              if (!1 === c.enableZoom && !1 === c.enablePan) return;
                              ! function(t) {
                                  c.enableZoom && V(t), c.enablePan && k(t)
                              }(t), p = d.TOUCH_DOLLY_PAN;
                              break;
                          case 3:
                              if (!1 === c.enableZoom && !1 === c.enableRotate) return;
                              ! function(t) {
                                  c.enableZoom && V(t), c.enableRotate && G(t)
                              }(t), p = d.TOUCH_DOLLY_ROTATE;
                              break;
                          default:
                              p = d.NONE
                      }
                      break;
                  default:
                      p = d.NONE
              }
              p !== d.NONE && c.dispatchEvent(h)
          }
      }

      function et(t) {
          if (!1 !== c.enabled) switch (t.preventDefault(), t.stopPropagation(), p) {
              case d.TOUCH_ROTATE:
                  if (!1 === c.enableRotate) return;
                  q(t), c.update();
                  break;
              case d.TOUCH_PAN:
                  if (!1 === c.enablePan) return;
                  X(t), c.update();
                  break;
              case d.TOUCH_DOLLY_PAN:
                  if (!1 === c.enableZoom && !1 === c.enablePan) return;
                  ! function(t) {
                      c.enableZoom && Y(t), c.enablePan && X(t)
                  }(t), c.update();
                  break;
              case d.TOUCH_DOLLY_ROTATE:
                  if (!1 === c.enableZoom && !1 === c.enableRotate) return;
                  ! function(t) {
                      c.enableZoom && Y(t), c.enableRotate && q(t)
                  }(t), c.update();
                  break;
              default:
                  p = d.NONE
          }
      }

      function nt(t) {
          !1 !== c.enabled && (c.dispatchEvent(u), p = d.NONE)
      }

      function it(t) {
          !1 !== c.enabled && t.preventDefault()
      }
      c.domElement.addEventListener("contextmenu", it, !1), c.domElement.addEventListener("pointerdown", Z, !1), c.domElement.addEventListener("wheel", Q, !1), c.domElement.addEventListener("touchstart", tt, !1), c.domElement.addEventListener("touchend", nt, !1), c.domElement.addEventListener("touchmove", et, !1), c.domElement.addEventListener("keydown", $, !1), this.update()
  };
  (Xc.prototype = Object.create(P.prototype)).constructor = Xc;
  var Yc = function(t, e) {
      Xc.call(this, t, e), this.screenSpacePanning = !1, this.mouseButtons.LEFT = 2, this.mouseButtons.RIGHT = 0, this.touches.ONE = 1, this.touches.TWO = 3
  };
  (Yc.prototype = Object.create(P.prototype)).constructor = Yc,
      function() {
          function t(t) {
              ta.call(this, t), this.dracoLoader = null, this.ddsLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register((function(t) {
                  return new m(t)
              })), this.register((function(t) {
                  return new v(t)
              })), this.register((function(t) {
                  return new _(t)
              })), this.register((function(t) {
                  return new g(t)
              })), this.register((function(t) {
                  return new d(t)
              })), this.register((function(t) {
                  return new b(t)
              }))
          }

          function l() {
              var t = {};
              return {
                  get: function(e) {
                      return t[e]
                  },
                  add: function(e, n) {
                      t[e] = n
                  },
                  remove: function(e) {
                      delete t[e]
                  },
                  removeAll: function() {
                      t = {}
                  }
              }
          }
          t.prototype = Object.assign(Object.create(ta.prototype), {
              constructor: t,
              load: function(t, e, n, i) {
                  var r, s = this;
                  r = "" !== this.resourcePath ? this.resourcePath : "" !== this.path ? this.path : Ya(t), this.manager.itemStart(t);
                  var o = function(e) {
                          i ? i(e) : console.error(e), s.manager.itemError(t), s.manager.itemEnd(t)
                      },
                      a = new na(this.manager);
                  a.setPath(this.path), a.setResponseType("arraybuffer"), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(t, (function(n) {
                      try {
                          s.parse(n, r, (function(n) {
                              e(n), s.manager.itemEnd(t)
                          }), o)
                      } catch (t) {
                          o(t)
                      }
                  }), n, o)
              },
              setDRACOLoader: function(t) {
                  return this.dracoLoader = t, this
              },
              setDDSLoader: function(t) {
                  return this.ddsLoader = t, this
              },
              setKTX2Loader: function(t) {
                  return this.ktx2Loader = t, this
              },
              setMeshoptDecoder: function(t) {
                  return this.meshoptDecoder = t, this
              },
              register: function(t) {
                  return -1 === this.pluginCallbacks.indexOf(t) && this.pluginCallbacks.push(t), this
              },
              unregister: function(t) {
                  return -1 !== this.pluginCallbacks.indexOf(t) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t), 1), this
              },
              parse: function(t, e, n, i) {
                  var r, s = {},
                      o = {};
                  if ("string" == typeof t) r = t;
                  else if (Xa(new Uint8Array(t, 0, 4)) === w) {
                      try {
                          s[h.KHR_BINARY_GLTF] = new M(t)
                      } catch (t) {
                          return void(i && i(t))
                      }
                      r = s[h.KHR_BINARY_GLTF].content
                  } else r = Xa(new Uint8Array(t));
                  var a = JSON.parse(r);
                  if (void 0 === a.asset || a.asset.version[0] < 2) i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
                  else {
                      var c = new q(a, {
                          path: e || this.resourcePath || "",
                          crossOrigin: this.crossOrigin,
                          manager: this.manager,
                          ktx2Loader: this.ktx2Loader,
                          meshoptDecoder: this.meshoptDecoder
                      });
                      c.fileLoader.setRequestHeader(this.requestHeader);
                      for (var l = 0; l < this.pluginCallbacks.length; l++) {
                          var d = this.pluginCallbacks[l](c);
                          o[d.name] = d, s[d.name] = !0
                      }
                      if (a.extensionsUsed)
                          for (l = 0; l < a.extensionsUsed.length; ++l) {
                              var f = a.extensionsUsed[l],
                                  m = a.extensionsRequired || [];
                              switch (f) {
                                  case h.KHR_MATERIALS_UNLIT:
                                      s[f] = new p;
                                      break;
                                  case h.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                                      s[f] = new L;
                                      break;
                                  case h.KHR_DRACO_MESH_COMPRESSION:
                                      s[f] = new S(a, this.dracoLoader);
                                      break;
                                  case h.MSFT_TEXTURE_DDS:
                                      s[f] = new u(this.ddsLoader);
                                      break;
                                  case h.KHR_TEXTURE_TRANSFORM:
                                      s[f] = new E;
                                      break;
                                  case h.KHR_MESH_QUANTIZATION:
                                      s[f] = new R;
                                      break;
                                  default:
                                      m.indexOf(f) >= 0 && void 0 === o[f] && console.warn('THREE.GLTFLoader: Unknown extension "' + f + '".')
                              }
                          }
                      c.setExtensions(s), c.setPlugins(o), c.parse(n, i)
                  }
              }
          });
          var h = {
              KHR_BINARY_GLTF: "KHR_binary_glTF",
              KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
              KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
              KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
              KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
              KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
              KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
              KHR_TEXTURE_BASISU: "KHR_texture_basisu",
              KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
              KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
              EXT_TEXTURE_WEBP: "EXT_texture_webp",
              EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
              MSFT_TEXTURE_DDS: "MSFT_texture_dds"
          };

          function u(t) {
              if (!t) throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing DDSLoader");
              this.name = h.MSFT_TEXTURE_DDS, this.ddsLoader = t
          }

          function d(t) {
              this.parser = t, this.name = h.KHR_LIGHTS_PUNCTUAL, this.cache = {
                  refs: {},
                  uses: {}
              }
          }

          function p() {
              this.name = h.KHR_MATERIALS_UNLIT
          }

          function m(t) {
              this.parser = t, this.name = h.KHR_MATERIALS_CLEARCOAT
          }

          function g(t) {
              this.parser = t, this.name = h.KHR_MATERIALS_TRANSMISSION
          }

          function v(t) {
              this.parser = t, this.name = h.KHR_TEXTURE_BASISU
          }

          function _(t) {
              this.parser = t, this.name = h.EXT_TEXTURE_WEBP, this.isSupported = null
          }

          function b(t) {
              this.name = h.EXT_MESHOPT_COMPRESSION, this.parser = t
          }
          d.prototype._markDefs = function() {
              for (var t = this.parser, e = this.parser.json.nodes || [], n = 0, i = e.length; n < i; n++) {
                  var r = e[n];
                  r.extensions && r.extensions[this.name] && void 0 !== r.extensions[this.name].light && t._addNodeRef(this.cache, r.extensions[this.name].light)
              }
          }, d.prototype._loadLight = function(t) {
              var e = this.parser,
                  n = "light:" + t,
                  i = e.cache.get(n);
              if (i) return i;
              var r, s = e.json,
                  o = ((s.extensions && s.extensions[this.name] || {}).lights || [])[t],
                  a = new de(16777215);
              void 0 !== o.color && a.fromArray(o.color);
              var c = void 0 !== o.range ? o.range : 0;
              switch (o.type) {
                  case "directional":
                      (r = new Ga(a)).target.position.set(0, 0, -1), r.add(r.target);
                      break;
                  case "point":
                      (r = new Ha(a)).distance = c;
                      break;
                  case "spot":
                      (r = new Ua(a)).distance = c, o.spot = o.spot || {}, o.spot.innerConeAngle = void 0 !== o.spot.innerConeAngle ? o.spot.innerConeAngle : 0, o.spot.outerConeAngle = void 0 !== o.spot.outerConeAngle ? o.spot.outerConeAngle : Math.PI / 4, r.angle = o.spot.outerConeAngle, r.penumbra = 1 - o.spot.innerConeAngle / o.spot.outerConeAngle, r.target.position.set(0, 0, -1), r.add(r.target);
                      break;
                  default:
                      throw new Error("THREE.GLTFLoader: Unexpected light type: " + o.type)
              }
              return r.position.set(0, 0, 0), r.decay = 2, void 0 !== o.intensity && (r.intensity = o.intensity), r.name = e.createUniqueName(o.name || "light_" + t), i = Promise.resolve(r), e.cache.add(n, i), i
          }, d.prototype.createNodeAttachment = function(t) {
              var e = this,
                  n = this.parser,
                  i = n.json.nodes[t],
                  r = (i.extensions && i.extensions[this.name] || {}).light;
              return void 0 === r ? null : this._loadLight(r).then((function(t) {
                  return n._getNodeRef(e.cache, r, t)
              }))
          }, p.prototype.getMaterialType = function() {
              return ge
          }, p.prototype.extendParams = function(t, e, n) {
              var i = [];
              t.color = new de(1, 1, 1), t.opacity = 1;
              var r = e.pbrMetallicRoughness;
              if (r) {
                  if (Array.isArray(r.baseColorFactor)) {
                      var s = r.baseColorFactor;
                      t.color.fromArray(s), t.opacity = s[3]
                  }
                  void 0 !== r.baseColorTexture && i.push(n.assignTexture(t, "map", r.baseColorTexture))
              }
              return Promise.all(i)
          }, m.prototype.getMaterialType = function(t) {
              var e = this.parser.json.materials[t];
              return e.extensions && e.extensions[this.name] ? Lo : null
          }, m.prototype.extendMaterialParams = function(t, e) {
              var n = this.parser,
                  i = n.json.materials[t];
              if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
              var r = [],
                  s = i.extensions[this.name];
              if (void 0 !== s.clearcoatFactor && (e.clearcoat = s.clearcoatFactor), void 0 !== s.clearcoatTexture && r.push(n.assignTexture(e, "clearcoatMap", s.clearcoatTexture)), void 0 !== s.clearcoatRoughnessFactor && (e.clearcoatRoughness = s.clearcoatRoughnessFactor), void 0 !== s.clearcoatRoughnessTexture && r.push(n.assignTexture(e, "clearcoatRoughnessMap", s.clearcoatRoughnessTexture)), void 0 !== s.clearcoatNormalTexture && (r.push(n.assignTexture(e, "clearcoatNormalMap", s.clearcoatNormalTexture)), void 0 !== s.clearcoatNormalTexture.scale)) {
                  var o = s.clearcoatNormalTexture.scale;
                  e.clearcoatNormalScale = new I(o, o)
              }
              return Promise.all(r)
          }, g.prototype.getMaterialType = function(t) {
              var e = this.parser.json.materials[t];
              return e.extensions && e.extensions[this.name] ? Lo : null
          }, g.prototype.extendMaterialParams = function(t, e) {
              var n = this.parser,
                  i = n.json.materials[t];
              if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
              var r = [],
                  s = i.extensions[this.name];
              return void 0 !== s.transmissionFactor && (e.transmission = s.transmissionFactor), void 0 !== s.transmissionTexture && r.push(n.assignTexture(e, "transmissionMap", s.transmissionTexture)), Promise.all(r)
          }, v.prototype.loadTexture = function(t) {
              var e = this.parser,
                  n = e.json,
                  i = n.textures[t];
              if (!i.extensions || !i.extensions[this.name]) return null;
              var r = i.extensions[this.name],
                  s = n.images[r.source],
                  o = e.options.ktx2Loader;
              if (!o) {
                  if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
                  return null
              }
              return e.loadTextureImage(t, s, o)
          }, _.prototype.loadTexture = function(t) {
              var e = this.name,
                  n = this.parser,
                  i = n.json,
                  r = i.textures[t];
              if (!r.extensions || !r.extensions[e]) return null;
              var s = r.extensions[e],
                  o = i.images[s.source],
                  a = o.uri ? n.options.manager.getHandler(o.uri) : n.textureLoader;
              return this.detectSupport().then((function(r) {
                  if (r) return n.loadTextureImage(t, o, a);
                  if (i.extensionsRequired && i.extensionsRequired.indexOf(e) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
                  return n.loadTexture(t)
              }))
          }, _.prototype.detectSupport = function() {
              return this.isSupported || (this.isSupported = new Promise((function(t) {
                  var e = new Image;
                  e.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", e.onload = e.onerror = function() {
                      t(1 === e.height)
                  }
              }))), this.isSupported
          }, b.prototype.loadBufferView = function(t) {
              var e = this.parser.json,
                  n = e.bufferViews[t];
              if (n.extensions && n.extensions[this.name]) {
                  var i = n.extensions[this.name],
                      r = this.parser.getDependency("buffer", i.buffer),
                      s = this.parser.options.meshoptDecoder;
                  if (!s || !s.supported) {
                      if (e.extensionsRequired && e.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                      return null
                  }
                  return Promise.all([r, s.ready]).then((function(t) {
                      var e = i.byteOffset || 0,
                          n = i.byteLength || 0,
                          r = i.count,
                          o = i.byteStride,
                          a = new ArrayBuffer(r * o),
                          c = new Uint8Array(t[0], e, n);
                      return s.decodeGltfBuffer(new Uint8Array(a), r, o, c, i.mode, i.filter), a
                  }))
              }
              return null
          };
          var w = "glTF";

          function M(t) {
              this.name = h.KHR_BINARY_GLTF, this.content = null, this.body = null;
              var e = new DataView(t, 0, 12);
              if (this.header = {
                      magic: Xa(new Uint8Array(t.slice(0, 4))),
                      version: e.getUint32(4, !0),
                      length: e.getUint32(8, !0)
                  }, this.header.magic !== w) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
              if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
              for (var n = new DataView(t, 12), i = 0; i < n.byteLength;) {
                  var r = n.getUint32(i, !0);
                  i += 4;
                  var s = n.getUint32(i, !0);
                  if (i += 4, 1313821514 === s) {
                      var o = new Uint8Array(t, 12 + i, r);
                      this.content = Xa(o)
                  } else if (5130562 === s) {
                      var a = 12 + i;
                      this.body = t.slice(a, a + r)
                  }
                  i += r
              }
              if (null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.")
          }

          function S(t, e) {
              if (!e) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
              this.name = h.KHR_DRACO_MESH_COMPRESSION, this.json = t, this.dracoLoader = e, this.dracoLoader.preload()
          }

          function E() {
              this.name = h.KHR_TEXTURE_TRANSFORM
          }

          function A(t) {
              Ao.call(this), this.isGLTFSpecularGlossinessMaterial = !0;
              var e = ["#ifdef USE_SPECULARMAP", "\tuniform sampler2D specularMap;", "#endif"].join("\n"),
                  n = ["#ifdef USE_GLOSSINESSMAP", "\tuniform sampler2D glossinessMap;", "#endif"].join("\n"),
                  i = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "\tvec4 texelSpecular = texture2D( specularMap, vUv );", "\ttexelSpecular = sRGBToLinear( texelSpecular );", "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tspecularFactor *= texelSpecular.rgb;", "#endif"].join("\n"),
                  r = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );", "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tglossinessFactor *= texelGlossiness.a;", "#endif"].join("\n"),
                  s = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );", "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );", "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );", "material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.", "material.specularRoughness += geometryRoughness;", "material.specularRoughness = min( material.specularRoughness, 1.0 );", "material.specularColor = specularFactor;"].join("\n"),
                  o = {
                      specular: {
                          value: (new de).setHex(16777215)
                      },
                      glossiness: {
                          value: 1
                      },
                      specularMap: {
                          value: null
                      },
                      glossinessMap: {
                          value: null
                      }
                  };
              this._extraUniforms = o, this.onBeforeCompile = function(t) {
                  for (var a in o) t.uniforms[a] = o[a];
                  t.fragmentShader = t.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", e).replace("#include <metalnessmap_pars_fragment>", n).replace("#include <roughnessmap_fragment>", i).replace("#include <metalnessmap_fragment>", r).replace("#include <lights_physical_fragment>", s)
              }, Object.defineProperties(this, {
                  specular: {
                      get: function() {
                          return o.specular.value
                      },
                      set: function(t) {
                          o.specular.value = t
                      }
                  },
                  specularMap: {
                      get: function() {
                          return o.specularMap.value
                      },
                      set: function(t) {
                          o.specularMap.value = t, t ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP
                      }
                  },
                  glossiness: {
                      get: function() {
                          return o.glossiness.value
                      },
                      set: function(t) {
                          o.glossiness.value = t
                      }
                  },
                  glossinessMap: {
                      get: function() {
                          return o.glossinessMap.value
                      },
                      set: function(t) {
                          o.glossinessMap.value = t, t ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV)
                      }
                  }
              }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(t)
          }

          function L() {
              return {
                  name: h.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
                  specularGlossinessParams: ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "normalMapType", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity", "refractionRatio"],
                  getMaterialType: function() {
                      return A
                  },
                  extendParams: function(t, e, n) {
                      var i = e.extensions[this.name];
                      t.color = new de(1, 1, 1), t.opacity = 1;
                      var r = [];
                      if (Array.isArray(i.diffuseFactor)) {
                          var s = i.diffuseFactor;
                          t.color.fromArray(s), t.opacity = s[3]
                      }
                      if (void 0 !== i.diffuseTexture && r.push(n.assignTexture(t, "map", i.diffuseTexture)), t.emissive = new de(0, 0, 0), t.glossiness = void 0 !== i.glossinessFactor ? i.glossinessFactor : 1, t.specular = new de(1, 1, 1), Array.isArray(i.specularFactor) && t.specular.fromArray(i.specularFactor), void 0 !== i.specularGlossinessTexture) {
                          var o = i.specularGlossinessTexture;
                          r.push(n.assignTexture(t, "glossinessMap", o)), r.push(n.assignTexture(t, "specularMap", o))
                      }
                      return Promise.all(r)
                  },
                  createMaterial: function(t) {
                      var e = new A(t);
                      return e.fog = !0, e.color = t.color, e.map = void 0 === t.map ? null : t.map, e.lightMap = null, e.lightMapIntensity = 1, e.aoMap = void 0 === t.aoMap ? null : t.aoMap, e.aoMapIntensity = 1, e.emissive = t.emissive, e.emissiveIntensity = 1, e.emissiveMap = void 0 === t.emissiveMap ? null : t.emissiveMap, e.bumpMap = void 0 === t.bumpMap ? null : t.bumpMap, e.bumpScale = 1, e.normalMap = void 0 === t.normalMap ? null : t.normalMap, e.normalMapType = 0, t.normalScale && (e.normalScale = t.normalScale), e.displacementMap = null, e.displacementScale = 1, e.displacementBias = 0, e.specularMap = void 0 === t.specularMap ? null : t.specularMap, e.specular = t.specular, e.glossinessMap = void 0 === t.glossinessMap ? null : t.glossinessMap, e.glossiness = t.glossiness, e.alphaMap = null, e.envMap = void 0 === t.envMap ? null : t.envMap, e.envMapIntensity = 1, e.refractionRatio = .98, e
                  }
              }
          }

          function R() {
              this.name = h.KHR_MESH_QUANTIZATION
          }

          function P(t, e, n, i) {
              Fo.call(this, t, e, n, i)
          }
          S.prototype.decodePrimitive = function(t, e) {
              var n = this.json,
                  i = this.dracoLoader,
                  r = t.extensions[this.name].bufferView,
                  s = t.extensions[this.name].attributes,
                  o = {},
                  a = {},
                  c = {};
              for (var l in s) {
                  var h = F[l] || l.toLowerCase();
                  o[h] = s[l]
              }
              for (l in t.attributes)
                  if (h = F[l] || l.toLowerCase(), void 0 !== s[l]) {
                      var u = n.accessors[t.attributes[l]],
                          d = C[u.componentType];
                      c[h] = d, a[h] = !0 === u.normalized
                  } return e.getDependency("bufferView", r).then((function(t) {
                  return new Promise((function(e) {
                      i.decodeDracoFile(t, (function(t) {
                          for (var n in t.attributes) {
                              var i = t.attributes[n],
                                  r = a[n];
                              void 0 !== r && (i.normalized = r)
                          }
                          e(t)
                      }), o, c)
                  }))
              }))
          }, E.prototype.extendTexture = function(t, e) {
              return t = t.clone(), void 0 !== e.offset && t.offset.fromArray(e.offset), void 0 !== e.rotation && (t.rotation = e.rotation), void 0 !== e.scale && t.repeat.fromArray(e.scale), void 0 !== e.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), t.needsUpdate = !0, t
          }, A.prototype = Object.create(Ao.prototype), A.prototype.constructor = A, A.prototype.copy = function(t) {
              return Ao.prototype.copy.call(this, t), this.specularMap = t.specularMap, this.specular.copy(t.specular), this.glossinessMap = t.glossinessMap, this.glossiness = t.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this
          }, P.prototype = Object.create(Fo.prototype), P.prototype.constructor = P, P.prototype.copySampleValue_ = function(t) {
              for (var e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t * i * 3 + i, s = 0; s !== i; s++) e[s] = n[r + s];
              return e
          }, P.prototype.beforeStart_ = P.prototype.copySampleValue_, P.prototype.afterEnd_ = P.prototype.copySampleValue_, P.prototype.interpolate_ = function(t, e, n, i) {
              for (var r = this.resultBuffer, s = this.sampleValues, o = this.valueSize, a = 2 * o, c = 3 * o, l = i - e, h = (n - e) / l, u = h * h, d = u * h, p = t * c, f = p - c, m = -2 * d + 3 * u, g = d - u, v = 1 - m, y = g - u + h, x = 0; x !== o; x++) {
                  var _ = s[f + x + o],
                      b = s[f + x + a] * l,
                      w = s[p + x + o],
                      M = s[p + x] * l;
                  r[x] = v * _ + y * b + m * w + g * M
              }
              return r
          };
          var C = {
                  5120: Int8Array,
                  5121: Uint8Array,
                  5122: Int16Array,
                  5123: Uint16Array,
                  5125: Uint32Array,
                  5126: Float32Array
              },
              N = {
                  9728: r,
                  9729: a,
                  9984: s,
                  9985: 1007,
                  9986: o,
                  9987: c
              },
              D = {
                  33071: n,
                  33648: i,
                  10497: e
              },
              U = {
                  SCALAR: 1,
                  VEC2: 2,
                  VEC3: 3,
                  VEC4: 4,
                  MAT2: 4,
                  MAT3: 9,
                  MAT4: 16
              },
              F = {
                  POSITION: "position",
                  NORMAL: "normal",
                  TANGENT: "tangent",
                  TEXCOORD_0: "uv",
                  TEXCOORD_1: "uv2",
                  COLOR_0: "color",
                  WEIGHTS_0: "skinWeight",
                  JOINTS_0: "skinIndex"
              },
              H = {
                  scale: "scale",
                  translation: "position",
                  rotation: "quaternion",
                  weights: "morphTargetInfluences"
              },
              z = {
                  CUBICSPLINE: void 0,
                  LINEAR: x,
                  STEP: y
              };

          function B(t, e) {
              return "string" != typeof t || "" === t ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t)
          }

          function G(t, e, n) {
              for (var i in n.extensions) void 0 === t[i] && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[i] = n.extensions[i])
          }

          function k(t, e) {
              void 0 !== e.extras && ("object" == typeof e.extras ? Object.assign(t.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras))
          }

          function V(t, e) {
              if (t.updateMorphTargets(), void 0 !== e.weights)
                  for (var n = 0, i = e.weights.length; n < i; n++) t.morphTargetInfluences[n] = e.weights[n];
              if (e.extras && Array.isArray(e.extras.targetNames)) {
                  var r = e.extras.targetNames;
                  if (t.morphTargetInfluences.length === r.length)
                      for (t.morphTargetDictionary = {}, n = 0, i = r.length; n < i; n++) t.morphTargetDictionary[r[n]] = n;
                  else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
              }
          }

          function j(t) {
              for (var e = "", n = Object.keys(t).sort(), i = 0, r = n.length; i < r; i++) e += n[i] + ":" + t[n[i]] + ";";
              return e
          }

          function q(t, e) {
              this.json = t || {}, this.extensions = {}, this.plugins = {}, this.options = e || {}, this.cache = new l, this.associations = new Map, this.primitiveCache = {}, this.meshCache = {
                  refs: {},
                  uses: {}
              }, this.cameraCache = {
                  refs: {},
                  uses: {}
              }, this.lightCache = {
                  refs: {},
                  uses: {}
              }, this.nodeNamesUsed = {}, "undefined" != typeof createImageBitmap && !1 === /Firefox/.test(navigator.userAgent) ? this.textureLoader = new Qa(this.options.manager) : this.textureLoader = new ca(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.fileLoader = new na(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
          }

          function X(t, e, n) {
              var i = e.attributes,
                  r = [];

              function s(e, i) {
                  return n.getDependency("accessor", e).then((function(e) {
                      t.setAttribute(i, e)
                  }))
              }
              for (var o in i) {
                  var a = F[o] || o.toLowerCase();
                  a in t.attributes || r.push(s(i[o], a))
              }
              if (void 0 !== e.indices && !t.index) {
                  var c = n.getDependency("accessor", e.indices).then((function(e) {
                      t.setIndex(e)
                  }));
                  r.push(c)
              }
              return k(t, e),
                  function(t, e, n) {
                      var i = e.attributes,
                          r = new Y;
                      if (void 0 !== i.POSITION) {
                          var s = (d = n.json.accessors[i.POSITION]).min,
                              o = d.max;
                          if (void 0 !== s && void 0 !== o) {
                              r.set(new W(s[0], s[1], s[2]), new W(o[0], o[1], o[2]));
                              var a = e.targets;
                              if (void 0 !== a) {
                                  for (var c = new W, l = new W, h = 0, u = a.length; h < u; h++) {
                                      var d, p = a[h];
                                      void 0 !== p.POSITION && (s = (d = n.json.accessors[p.POSITION]).min, o = d.max, void 0 !== s && void 0 !== o ? (l.setX(Math.max(Math.abs(s[0]), Math.abs(o[0]))), l.setY(Math.max(Math.abs(s[1]), Math.abs(o[1]))), l.setZ(Math.max(Math.abs(s[2]), Math.abs(o[2]))), c.max(l)) : console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION."))
                                  }
                                  r.expandByVector(c)
                              }
                              t.boundingBox = r;
                              var f = new ht;
                              r.getCenter(f.center), f.radius = r.min.distanceTo(r.max) / 2, t.boundingSphere = f
                          } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                      }
                  }(t, e, n), Promise.all(r).then((function() {
                      return void 0 !== e.targets ? function(t, e, n) {
                          for (var i = !1, r = !1, s = 0, o = e.length; s < o && (void 0 !== (l = e[s]).POSITION && (i = !0), void 0 !== l.NORMAL && (r = !0), !i || !r); s++);
                          if (!i && !r) return Promise.resolve(t);
                          var a = [],
                              c = [];
                          for (s = 0, o = e.length; s < o; s++) {
                              var l = e[s];
                              if (i) {
                                  var h = void 0 !== l.POSITION ? n.getDependency("accessor", l.POSITION) : t.attributes.position;
                                  a.push(h)
                              }
                              r && (h = void 0 !== l.NORMAL ? n.getDependency("accessor", l.NORMAL) : t.attributes.normal, c.push(h))
                          }
                          return Promise.all([Promise.all(a), Promise.all(c)]).then((function(e) {
                              var n = e[0],
                                  s = e[1];
                              return i && (t.morphAttributes.position = n), r && (t.morphAttributes.normal = s), t.morphTargetsRelative = !0, t
                          }))
                      }(t, e.targets, n) : t
                  }))
          }

          function Z(t, e) {
              var n = t.getIndex();
              if (null === n) {
                  var i = [],
                      r = t.getAttribute("position");
                  if (void 0 === r) return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), t;
                  for (var s = 0; s < r.count; s++) i.push(s);
                  t.setIndex(i), n = t.getIndex()
              }
              var o = n.count - 2,
                  a = [];
              if (2 === e)
                  for (s = 1; s <= o; s++) a.push(n.getX(0)), a.push(n.getX(s)), a.push(n.getX(s + 1));
              else
                  for (s = 0; s < o; s++) s % 2 == 0 ? (a.push(n.getX(s)), a.push(n.getX(s + 1)), a.push(n.getX(s + 2))) : (a.push(n.getX(s + 2)), a.push(n.getX(s + 1)), a.push(n.getX(s)));
              a.length / 3 !== o && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
              var c = t.clone();
              return c.setIndex(a), c
          }
          q.prototype.setExtensions = function(t) {
              this.extensions = t
          }, q.prototype.setPlugins = function(t) {
              this.plugins = t
          }, q.prototype.parse = function(t, e) {
              var n = this,
                  i = this.json,
                  r = this.extensions;
              this.cache.removeAll(), this._invokeAll((function(t) {
                  return t._markDefs && t._markDefs()
              })), Promise.all([this.getDependencies("scene"), this.getDependencies("animation"), this.getDependencies("camera")]).then((function(e) {
                  var s = {
                      scene: e[0][i.scene || 0],
                      scenes: e[0],
                      animations: e[1],
                      cameras: e[2],
                      asset: i.asset,
                      parser: n,
                      userData: {}
                  };
                  G(r, s, i), k(s, i), t(s)
              })).catch(e)
          }, q.prototype._markDefs = function() {
              for (var t = this.json.nodes || [], e = this.json.skins || [], n = this.json.meshes || [], i = 0, r = e.length; i < r; i++)
                  for (var s = e[i].joints, o = 0, a = s.length; o < a; o++) t[s[o]].isBone = !0;
              for (var c = 0, l = t.length; c < l; c++) {
                  var h = t[c];
                  void 0 !== h.mesh && (this._addNodeRef(this.meshCache, h.mesh), void 0 !== h.skin && (n[h.mesh].isSkinnedMesh = !0)), void 0 !== h.camera && this._addNodeRef(this.cameraCache, h.camera)
              }
          }, q.prototype._addNodeRef = function(t, e) {
              void 0 !== e && (void 0 === t.refs[e] && (t.refs[e] = t.uses[e] = 0), t.refs[e]++)
          }, q.prototype._getNodeRef = function(t, e, n) {
              if (t.refs[e] <= 1) return n;
              var i = n.clone();
              return i.name += "_instance_" + t.uses[e]++, i
          }, q.prototype._invokeOne = function(t) {
              var e = Object.values(this.plugins);
              e.push(this);
              for (var n = 0; n < e.length; n++) {
                  var i = t(e[n]);
                  if (i) return i
              }
          }, q.prototype._invokeAll = function(t) {
              var e = Object.values(this.plugins);
              e.unshift(this);
              for (var n = [], i = 0; i < e.length; i++) {
                  var r = t(e[i]);
                  r && n.push(r)
              }
              return n
          }, q.prototype.getDependency = function(t, e) {
              var n = t + ":" + e,
                  i = this.cache.get(n);
              if (!i) {
                  switch (t) {
                      case "scene":
                          i = this.loadScene(e);
                          break;
                      case "node":
                          i = this.loadNode(e);
                          break;
                      case "mesh":
                          i = this._invokeOne((function(t) {
                              return t.loadMesh && t.loadMesh(e)
                          }));
                          break;
                      case "accessor":
                          i = this.loadAccessor(e);
                          break;
                      case "bufferView":
                          i = this._invokeOne((function(t) {
                              return t.loadBufferView && t.loadBufferView(e)
                          }));
                          break;
                      case "buffer":
                          i = this.loadBuffer(e);
                          break;
                      case "material":
                          i = this._invokeOne((function(t) {
                              return t.loadMaterial && t.loadMaterial(e)
                          }));
                          break;
                      case "texture":
                          i = this._invokeOne((function(t) {
                              return t.loadTexture && t.loadTexture(e)
                          }));
                          break;
                      case "skin":
                          i = this.loadSkin(e);
                          break;
                      case "animation":
                          i = this.loadAnimation(e);
                          break;
                      case "camera":
                          i = this.loadCamera(e);
                          break;
                      default:
                          throw new Error("Unknown type: " + t)
                  }
                  this.cache.add(n, i)
              }
              return i
          }, q.prototype.getDependencies = function(t) {
              var e = this.cache.get(t);
              if (!e) {
                  var n = this,
                      i = this.json[t + ("mesh" === t ? "es" : "s")] || [];
                  e = Promise.all(i.map((function(e, i) {
                      return n.getDependency(t, i)
                  }))), this.cache.add(t, e)
              }
              return e
          }, q.prototype.loadBuffer = function(t) {
              var e = this.json.buffers[t],
                  n = this.fileLoader;
              if (e.type && "arraybuffer" !== e.type) throw new Error("THREE.GLTFLoader: " + e.type + " buffer type is not supported.");
              if (void 0 === e.uri && 0 === t) return Promise.resolve(this.extensions[h.KHR_BINARY_GLTF].body);
              var i = this.options;
              return new Promise((function(t, r) {
                  n.load(B(e.uri, i.path), t, void 0, (function() {
                      r(new Error('THREE.GLTFLoader: Failed to load buffer "' + e.uri + '".'))
                  }))
              }))
          }, q.prototype.loadBufferView = function(t) {
              var e = this.json.bufferViews[t];
              return this.getDependency("buffer", e.buffer).then((function(t) {
                  var n = e.byteLength || 0,
                      i = e.byteOffset || 0;
                  return t.slice(i, i + n)
              }))
          }, q.prototype.loadAccessor = function(t) {
              var e = this,
                  n = this.json,
                  i = this.json.accessors[t];
              if (void 0 === i.bufferView && void 0 === i.sparse) return Promise.resolve(null);
              var r = [];
              return void 0 !== i.bufferView ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), void 0 !== i.sparse && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then((function(t) {
                  var r, s = t[0],
                      o = U[i.type],
                      a = C[i.componentType],
                      c = a.BYTES_PER_ELEMENT,
                      l = c * o,
                      h = i.byteOffset || 0,
                      u = void 0 !== i.bufferView ? n.bufferViews[i.bufferView].byteStride : void 0,
                      d = !0 === i.normalized;
                  if (u && u !== l) {
                      var p = Math.floor(h / u),
                          f = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + p + ":" + i.count,
                          m = e.cache.get(f);
                      m || (m = new Or(new a(s, p * u, i.count * u / c), u / c), e.cache.add(f, m)), r = new Dr(m, o, h % u / c, d)
                  } else r = new xe(null === s ? new a(i.count * o) : new a(s, h, i.count * o), o, d);
                  if (void 0 !== i.sparse) {
                      var g = U.SCALAR,
                          v = C[i.sparse.indices.componentType],
                          y = i.sparse.indices.byteOffset || 0,
                          x = i.sparse.values.byteOffset || 0,
                          _ = new v(t[1], y, i.sparse.count * g),
                          b = new a(t[2], x, i.sparse.count * o);
                      null !== s && (r = new xe(r.array.slice(), r.itemSize, r.normalized));
                      for (var w = 0, M = _.length; w < M; w++) {
                          var S = _[w];
                          if (r.setX(S, b[w * o]), o >= 2 && r.setY(S, b[w * o + 1]), o >= 3 && r.setZ(S, b[w * o + 2]), o >= 4 && r.setW(S, b[w * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                      }
                  }
                  return r
              }))
          }, q.prototype.loadTexture = function(t) {
              var e, n, i = this.json,
                  r = this.options,
                  s = i.textures[t],
                  o = s.extensions || {};
              return (e = o[h.MSFT_TEXTURE_DDS] ? i.images[o[h.MSFT_TEXTURE_DDS].source] : i.images[s.source]).uri && (n = r.manager.getHandler(e.uri)), n || (n = o[h.MSFT_TEXTURE_DDS] ? this.extensions[h.MSFT_TEXTURE_DDS].ddsLoader : this.textureLoader), this.loadTextureImage(t, e, n)
          }, q.prototype.loadTextureImage = function(t, n, i) {
              var r = this,
                  s = this.json,
                  o = this.options,
                  l = s.textures[t],
                  h = self.URL || self.webkitURL,
                  u = n.uri,
                  d = !1,
                  p = !0;
              return "image/jpeg" === n.mimeType && (p = !1), void 0 !== n.bufferView && (u = r.getDependency("bufferView", n.bufferView).then((function(t) {
                  if ("image/png" === n.mimeType) {
                      var e = new DataView(t, 25, 1).getUint8(0, !1);
                      p = 6 === e || 4 === e || 3 === e
                  }
                  d = !0;
                  var i = new Blob([t], {
                      type: n.mimeType
                  });
                  return u = h.createObjectURL(i)
              }))), Promise.resolve(u).then((function(t) {
                  return new Promise((function(e, n) {
                      var r = e;
                      !0 === i.isImageBitmapLoader && (r = function(t) {
                          e(new Us(t))
                      }), i.load(B(t, o.path), r, void 0, n)
                  }))
              })).then((function(n) {
                  !0 === d && h.revokeObjectURL(u), n.flipY = !1, l.name && (n.name = l.name), p || (n.format = f);
                  var i = (s.samplers || {})[l.sampler] || {};
                  return n.magFilter = N[i.magFilter] || a, n.minFilter = N[i.minFilter] || c, n.wrapS = D[i.wrapS] || e, n.wrapT = D[i.wrapT] || e, r.associations.set(n, {
                      type: "textures",
                      index: t
                  }), n
              }))
          }, q.prototype.assignTexture = function(t, e, n) {
              var i = this;
              return this.getDependency("texture", n.index).then((function(r) {
                  if (void 0 === n.texCoord || 0 == n.texCoord || "aoMap" === e && 1 == n.texCoord || console.warn("THREE.GLTFLoader: Custom UV set " + n.texCoord + " for texture " + e + " not yet supported."), i.extensions[h.KHR_TEXTURE_TRANSFORM]) {
                      var s = void 0 !== n.extensions ? n.extensions[h.KHR_TEXTURE_TRANSFORM] : void 0;
                      if (s) {
                          var o = i.associations.get(r);
                          r = i.extensions[h.KHR_TEXTURE_TRANSFORM].extendTexture(r, s), i.associations.set(r, o)
                      }
                  }
                  t[e] = r
              }))
          }, q.prototype.assignFinalMaterial = function(t) {
              var e = t.geometry,
                  n = t.material,
                  i = void 0 !== e.attributes.tangent,
                  r = void 0 !== e.attributes.color,
                  s = void 0 === e.attributes.normal,
                  o = !0 === t.isSkinnedMesh,
                  a = Object.keys(e.morphAttributes).length > 0,
                  c = a && void 0 !== e.morphAttributes.normal;
              if (t.isPoints) {
                  var l = "PointsMaterial:" + n.uuid,
                      h = this.cache.get(l);
                  h || (h = new As, me.prototype.copy.call(h, n), h.color.copy(n.color), h.map = n.map, h.sizeAttenuation = !1, this.cache.add(l, h)), n = h
              } else if (t.isLine) {
                  l = "LineBasicMaterial:" + n.uuid;
                  var u = this.cache.get(l);
                  u || (u = new gs, me.prototype.copy.call(u, n), u.color.copy(n.color), this.cache.add(l, u)), n = u
              }
              if (i || r || s || o || a) {
                  l = "ClonedMaterial:" + n.uuid + ":", n.isGLTFSpecularGlossinessMaterial && (l += "specular-glossiness:"), o && (l += "skinning:"), i && (l += "vertex-tangents:"), r && (l += "vertex-colors:"), s && (l += "flat-shading:"), a && (l += "morph-targets:"), c && (l += "morph-normals:");
                  var d = this.cache.get(l);
                  d || (d = n.clone(), o && (d.skinning = !0), i && (d.vertexTangents = !0), r && (d.vertexColors = !0), s && (d.flatShading = !0), a && (d.morphTargets = !0), c && (d.morphNormals = !0), this.cache.add(l, d), this.associations.set(d, this.associations.get(n))), n = d
              }
              n.aoMap && void 0 === e.attributes.uv2 && void 0 !== e.attributes.uv && e.setAttribute("uv2", e.attributes.uv), n.normalScale && !i && (n.normalScale.y = -n.normalScale.y), n.clearcoatNormalScale && !i && (n.clearcoatNormalScale.y = -n.clearcoatNormalScale.y), t.material = n
          }, q.prototype.getMaterialType = function() {
              return Ao
          }, q.prototype.loadMaterial = function(t) {
              var e, n = this,
                  i = this.json,
                  r = this.extensions,
                  s = i.materials[t],
                  o = {},
                  a = s.extensions || {},
                  c = [];
              if (a[h.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
                  var l = r[h.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
                  e = l.getMaterialType(), c.push(l.extendParams(o, s, n))
              } else if (a[h.KHR_MATERIALS_UNLIT]) {
                  var u = r[h.KHR_MATERIALS_UNLIT];
                  e = u.getMaterialType(), c.push(u.extendParams(o, s, n))
              } else {
                  var d = s.pbrMetallicRoughness || {};
                  if (o.color = new de(1, 1, 1), o.opacity = 1, Array.isArray(d.baseColorFactor)) {
                      var p = d.baseColorFactor;
                      o.color.fromArray(p), o.opacity = p[3]
                  }
                  void 0 !== d.baseColorTexture && c.push(n.assignTexture(o, "map", d.baseColorTexture)), o.metalness = void 0 !== d.metallicFactor ? d.metallicFactor : 1, o.roughness = void 0 !== d.roughnessFactor ? d.roughnessFactor : 1, void 0 !== d.metallicRoughnessTexture && (c.push(n.assignTexture(o, "metalnessMap", d.metallicRoughnessTexture)), c.push(n.assignTexture(o, "roughnessMap", d.metallicRoughnessTexture))), e = this._invokeOne((function(e) {
                      return e.getMaterialType && e.getMaterialType(t)
                  })), c.push(Promise.all(this._invokeAll((function(e) {
                      return e.extendMaterialParams && e.extendMaterialParams(t, o)
                  }))))
              }!0 === s.doubleSided && (o.side = 2);
              var f = s.alphaMode || "OPAQUE";
              return "BLEND" === f ? (o.transparent = !0, o.depthWrite = !1) : (o.transparent = !1, "MASK" === f && (o.alphaTest = void 0 !== s.alphaCutoff ? s.alphaCutoff : .5)), void 0 !== s.normalTexture && e !== ge && (c.push(n.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new I(1, 1), void 0 !== s.normalTexture.scale && o.normalScale.set(s.normalTexture.scale, s.normalTexture.scale)), void 0 !== s.occlusionTexture && e !== ge && (c.push(n.assignTexture(o, "aoMap", s.occlusionTexture)), void 0 !== s.occlusionTexture.strength && (o.aoMapIntensity = s.occlusionTexture.strength)), void 0 !== s.emissiveFactor && e !== ge && (o.emissive = (new de).fromArray(s.emissiveFactor)), void 0 !== s.emissiveTexture && e !== ge && c.push(n.assignTexture(o, "emissiveMap", s.emissiveTexture)), Promise.all(c).then((function() {
                  var i;
                  return i = e === A ? r[h.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o) : new e(o), s.name && (i.name = s.name), i.map && (i.map.encoding = T), i.emissiveMap && (i.emissiveMap.encoding = T), k(i, s), n.associations.set(i, {
                      type: "materials",
                      index: t
                  }), s.extensions && G(r, i, s), i
              }))
          }, q.prototype.createUniqueName = function(t) {
              for (var e = bc.sanitizeNodeName(t || ""), n = e, i = 1; this.nodeNamesUsed[n]; ++i) n = e + "_" + i;
              return this.nodeNamesUsed[n] = !0, n
          }, q.prototype.loadGeometries = function(t) {
              var e = this,
                  n = this.extensions,
                  i = this.primitiveCache;

              function r(t) {
                  return n[h.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(t, e).then((function(n) {
                      return X(n, t, e)
                  }))
              }
              for (var s, o, a = [], c = 0, l = t.length; c < l; c++) {
                  var u, d = t[c],
                      p = (void 0, (o = (s = d).extensions && s.extensions[h.KHR_DRACO_MESH_COMPRESSION]) ? "draco:" + o.bufferView + ":" + o.indices + ":" + j(o.attributes) : s.indices + ":" + j(s.attributes) + ":" + s.mode),
                      f = i[p];
                  f ? a.push(f.promise) : (u = d.extensions && d.extensions[h.KHR_DRACO_MESH_COMPRESSION] ? r(d) : X(new Ge, d, e), i[p] = {
                      primitive: d,
                      promise: u
                  }, a.push(u))
              }
              return Promise.all(a)
          }, q.prototype.loadMesh = function(t) {
              for (var e, n = this, i = this.json, r = this.extensions, s = i.meshes[t], o = s.primitives, a = [], c = 0, l = o.length; c < l; c++) {
                  var h = void 0 === o[c].material ? (void 0 === (e = this.cache).DefaultMaterial && (e.DefaultMaterial = new Ao({
                      color: 16777215,
                      emissive: 0,
                      metalness: 1,
                      roughness: 1,
                      transparent: !1,
                      depthTest: !0,
                      side: 0
                  })), e.DefaultMaterial) : this.getDependency("material", o[c].material);
                  a.push(h)
              }
              return a.push(n.loadGeometries(o)), Promise.all(a).then((function(e) {
                  for (var i = e.slice(0, e.length - 1), a = e[e.length - 1], c = [], l = 0, h = a.length; l < h; l++) {
                      var u, d = a[l],
                          p = o[l],
                          f = i[l];
                      if (4 === p.mode || 5 === p.mode || 6 === p.mode || void 0 === p.mode) !0 !== (u = !0 === s.isSkinnedMesh ? new os(d, f) : new on(d, f)).isSkinnedMesh || u.geometry.attributes.skinWeight.normalized || u.normalizeSkinWeights(), 5 === p.mode ? u.geometry = Z(u.geometry, 1) : 6 === p.mode && (u.geometry = Z(u.geometry, 2));
                      else if (1 === p.mode) u = new Ts(d, f);
                      else if (3 === p.mode) u = new ws(d, f);
                      else if (2 === p.mode) u = new Es(d, f);
                      else {
                          if (0 !== p.mode) throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
                          u = new Ns(d, f)
                      }
                      Object.keys(u.geometry.morphAttributes).length > 0 && V(u, s), u.name = n.createUniqueName(s.name || "mesh_" + t), k(u, s), p.extensions && G(r, u, p), n.assignFinalMaterial(u), c.push(u)
                  }
                  if (1 === c.length) return c[0];
                  var m = new Er;
                  for (l = 0, h = c.length; l < h; l++) m.add(c[l]);
                  return m
              }))
          }, q.prototype.loadCamera = function(t) {
              var e, n = this.json.cameras[t],
                  i = n[n.type];
              if (i) return "perspective" === n.type ? e = new mn(O.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : "orthographic" === n.type && (e = new za(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (e.name = this.createUniqueName(n.name)), k(e, n), Promise.resolve(e);
              console.warn("THREE.GLTFLoader: Missing camera parameters.")
          }, q.prototype.loadSkin = function(t) {
              var e = this.json.skins[t],
                  n = {
                      joints: e.joints
                  };
              return void 0 === e.inverseBindMatrices ? Promise.resolve(n) : this.getDependency("accessor", e.inverseBindMatrices).then((function(t) {
                  return n.inverseBindMatrices = t, n
              }))
          }, q.prototype.loadAnimation = function(t) {
              for (var e = this.json.animations[t], n = [], i = [], r = [], s = [], o = [], a = 0, c = e.channels.length; a < c; a++) {
                  var l = e.channels[a],
                      h = e.samplers[l.sampler],
                      u = l.target,
                      d = void 0 !== u.node ? u.node : u.id,
                      p = void 0 !== e.parameters ? e.parameters[h.input] : h.input,
                      f = void 0 !== e.parameters ? e.parameters[h.output] : h.output;
                  n.push(this.getDependency("node", d)), i.push(this.getDependency("accessor", p)), r.push(this.getDependency("accessor", f)), s.push(h), o.push(u)
              }
              return Promise.all([Promise.all(n), Promise.all(i), Promise.all(r), Promise.all(s), Promise.all(o)]).then((function(n) {
                  for (var i = n[0], r = n[1], s = n[2], o = n[3], a = n[4], c = [], l = 0, h = i.length; l < h; l++) {
                      var u = i[l],
                          d = r[l],
                          p = s[l],
                          f = o[l],
                          m = a[l];
                      if (void 0 !== u) {
                          var g;
                          switch (u.updateMatrix(), u.matrixAutoUpdate = !0, H[m.path]) {
                              case H.weights:
                                  g = jo;
                                  break;
                              case H.rotation:
                                  g = qo;
                                  break;
                              case H.position:
                              case H.scale:
                              default:
                                  g = Yo
                          }
                          var v = u.name ? u.name : u.uuid,
                              y = void 0 !== f.interpolation ? z[f.interpolation] : x,
                              _ = [];
                          H[m.path] === H.weights ? u.traverse((function(t) {
                              !0 === t.isMesh && t.morphTargetInfluences && _.push(t.name ? t.name : t.uuid)
                          })) : _.push(v);
                          var b = p.array;
                          if (p.normalized) {
                              var w;
                              if (b.constructor === Int8Array) w = 1 / 127;
                              else if (b.constructor === Uint8Array) w = 1 / 255;
                              else if (b.constructor == Int16Array) w = 1 / 32767;
                              else {
                                  if (b.constructor !== Uint16Array) throw new Error("THREE.GLTFLoader: Unsupported output accessor component type.");
                                  w = 1 / 65535
                              }
                              for (var M = new Float32Array(b.length), S = 0, T = b.length; S < T; S++) M[S] = b[S] * w;
                              b = M
                          }
                          for (S = 0, T = _.length; S < T; S++) {
                              var E = new g(_[S] + "." + H[m.path], d.array, b, y);
                              "CUBICSPLINE" === f.interpolation && (E.createInterpolant = function(t) {
                                  return new P(this.times, this.values, this.getValueSize() / 3, t)
                              }, E.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), c.push(E)
                          }
                      }
                  }
                  return new Zo(e.name ? e.name : "animation_" + t, void 0, c)
              }))
          }, q.prototype.loadNode = function(t) {
              var e, n = this.json,
                  i = this.extensions,
                  r = this,
                  s = n.nodes[t],
                  o = s.name ? r.createUniqueName(s.name) : "";
              return (e = [], void 0 !== s.mesh && e.push(r.getDependency("mesh", s.mesh).then((function(t) {
                  var e = r._getNodeRef(r.meshCache, s.mesh, t);
                  return void 0 !== s.weights && e.traverse((function(t) {
                      if (t.isMesh)
                          for (var e = 0, n = s.weights.length; e < n; e++) t.morphTargetInfluences[e] = s.weights[e]
                  })), e
              }))), void 0 !== s.camera && e.push(r.getDependency("camera", s.camera).then((function(t) {
                  return r._getNodeRef(r.cameraCache, s.camera, t)
              }))), r._invokeAll((function(e) {
                  return e.createNodeAttachment && e.createNodeAttachment(t)
              })).forEach((function(t) {
                  e.push(t)
              })), Promise.all(e)).then((function(e) {
                  var n;
                  if ((n = !0 === s.isBone ? new as : e.length > 1 ? new Er : 1 === e.length ? e[0] : new jt) !== e[0])
                      for (var a = 0, c = e.length; a < c; a++) n.add(e[a]);
                  if (s.name && (n.userData.name = s.name, n.name = o), k(n, s), s.extensions && G(i, n, s), void 0 !== s.matrix) {
                      var l = new xt;
                      l.fromArray(s.matrix), n.applyMatrix4(l)
                  } else void 0 !== s.translation && n.position.fromArray(s.translation), void 0 !== s.rotation && n.quaternion.fromArray(s.rotation), void 0 !== s.scale && n.scale.fromArray(s.scale);
                  return r.associations.set(n, {
                      type: "nodes",
                      index: t
                  }), n
              }))
          }, q.prototype.loadScene = function() {
              function t(e, n, i, r) {
                  var s = i.nodes[e];
                  return r.getDependency("node", e).then((function(t) {
                      return void 0 === s.skin ? t : r.getDependency("skin", s.skin).then((function(t) {
                          for (var n = [], i = 0, s = (e = t).joints.length; i < s; i++) n.push(r.getDependency("node", e.joints[i]));
                          return Promise.all(n)
                      })).then((function(n) {
                          return t.traverse((function(t) {
                              if (t.isMesh) {
                                  for (var i = [], r = [], s = 0, o = n.length; s < o; s++) {
                                      var a = n[s];
                                      if (a) {
                                          i.push(a);
                                          var c = new xt;
                                          void 0 !== e.inverseBindMatrices && c.fromArray(e.inverseBindMatrices.array, 16 * s), r.push(c)
                                      } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', e.joints[s])
                                  }
                                  t.bind(new hs(i, r), t.matrixWorld)
                              }
                          })), t
                      }));
                      var e
                  })).then((function(e) {
                      n.add(e);
                      var o = [];
                      if (s.children)
                          for (var a = s.children, c = 0, l = a.length; c < l; c++) {
                              var h = a[c];
                              o.push(t(h, e, i, r))
                          }
                      return Promise.all(o)
                  }))
              }
              return function(e) {
                  var n = this.json,
                      i = this.extensions,
                      r = this.json.scenes[e],
                      s = new Er;
                  r.name && (s.name = this.createUniqueName(r.name)), k(s, r), r.extensions && G(i, s, r);
                  for (var o = r.nodes || [], a = [], c = 0, l = o.length; c < l; c++) a.push(t(o[c], s, n, this));
                  return Promise.all(a).then((function() {
                      return s
                  }))
              }
          }()
      }();
  const Zc = document.getElementsByClassName("loading-bar")[0],
      Jc = document.getElementsByClassName("loading-canvas")[0],
      Kc = document.querySelector("canvas.webgl"),
      Qc = new Nr,
      $c = new ca(new Qo((() => {
          Zc.hidden = "true", Jc.hidden = "true"
      }), ((t, e, n) => {
          const i = e / n;
          Zc.style.transform = `scaleX(${i})`
      }))),
      tl = $c.load("textures/earth-large.jpg");
  tl.encoding = T;
  const el = $c.load("textures/bump-large.jpg");
  el.encoding = T;
  const nl = $c.load("textures/clouds-large.jpg");
  nl.encoding = T;
  const il = new So(2, 320, 160),
      rl = new Ao({
          map: tl,
          displacementMap: el
      });
  rl.displacementScale = .05, rl.roughness = .6;
  const sl = new on(il, rl);
  Qc.add(sl);
  const ol = new on(new So(2.1, 32, 16), new Ao({
      map: nl,
      transparent: !0,
      alphaMap: nl,
      side: 2,
      bumpMap: nl
  }));
  Qc.add(ol);
  const al = new Ga("#ffffff", 3);
  al.castShadow = !0, al.shadow.mapSize.set(1024, 1024), al.shadow.camera.far = 15, al.shadow.normalBias = .05, al.position.set(.25, 3, 2), Qc.add(al);
  const cl = new ka(16777215, .8);
  Qc.add(cl);
  const ll = {
      width: window.innerWidth,
      height: window.innerHeight
  };
  window.addEventListener("resize", (() => {
      ll.width = window.innerWidth, ll.height = window.innerHeight, hl.aspect = ll.width / ll.height, hl.updateProjectionMatrix(), dl.setSize(ll.width, ll.height), dl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }));
  const hl = new mn(75, ll.width / ll.height, .1, 1e3);
  hl.position.set(0, 0, 5), hl.lookAt(0, 0, 0), Qc.add(hl);
  const ul = new Xc(hl, Kc);
  ul.autoRotate = !1, ul.enableDamping = !0, ul.minDistance = 3, ul.maxDistance = 7, ul.maxPolarAngle = 2.2, ul.minPolarAngle = .7;
  const dl = new Pr({
      canvas: Kc,
      antialias: !0
  });
  dl.shadowMap.enabled = !0, dl.shadowMap.type = 1, dl.physicallyCorrectLights = !0, dl.outputEncoding = T, dl.toneMapping = 2, dl.toneMappingExposure = 1.5, dl.setClearColor("#5CBEF7", 1), dl.setSize(ll.width, ll.height), dl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const pl = new class {
          constructor(t) {
              this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
          }
          start() {
              this.startTime = lc(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
          }
          stop() {
              this.getElapsedTime(), this.running = !1, this.autoStart = !1
          }
          getElapsedTime() {
              return this.getDelta(), this.elapsedTime
          }
          getDelta() {
              let t = 0;
              if (this.autoStart && !this.running) return this.start(), 0;
              if (this.running) {
                  const e = lc();
                  t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t
              }
              return t
          }
      },
      fl = () => {
          pl.getElapsedTime(), ul.update(), dl.render(Qc, hl), ol.rotation.y += .001, ol.rotation.x += 5e-4, window.requestAnimationFrame(fl)
      };
  fl()
})();
//# sourceMappingURL=bundle.b53f987209be8d2c1f83.js.map