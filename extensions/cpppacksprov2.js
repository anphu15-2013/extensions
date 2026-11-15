// Name: C++ Packs Pro +V.2
// ID: cpppacksprov2
// Description: Extended C++ libraries (<string>, <cmath>, <algorithm>, prime checker).
// By: anphu15-2013
// License: MIT
(function(Scratch) {
  'use strict';

  const cppIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBvbHlnb24gcG9pbnRzPSIyMCwyIDM2LDExIDM2LDI5IDIwLDM4IDQsMjkgNCwxMSIgZmlsbD0iIzAwNTk5QyIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIuNSIvPjx0ZXh0IHg9IjIwIiB5PSIyNSIgZmlsbD0iI2ZmZmZmZiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QysrPC90ZXh0Pjwvc3ZnPg==';

  class CppProV2 {
    getInfo() {
      return {
        id: 'cpppacksprov2',
        name: 'C++ Packs Pro +V.2',
        color1: '#1AB394',
        color2: '#15967C',
        color3: '#107A65',
        blockIconURI: cppIcon,
        blocks: [
          { blockType: Scratch.BlockType.LABEL, text: '1. String Library (<string>)' },
          { opcode: 'sSub', blockType: Scratch.BlockType.REPORTER, text: '[S].substr([POS], [LEN])', arguments: { S: { type: Scratch.ArgumentType.STRING, defaultValue: 'TurboWarp' }, POS: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }, LEN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 } } },
          { opcode: 'sFind', blockType: Scratch.BlockType.REPORTER, text: '[S].find([SUB])', arguments: { S: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello C++' }, SUB: { type: Scratch.ArgumentType.STRING, defaultValue: 'C++' } } },
          { opcode: 'sRep', blockType: Scratch.BlockType.REPORTER, text: '[S].replace([POS], [LEN], [NEW])', arguments: { S: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello World' }, POS: { type: Scratch.ArgumentType.NUMBER, defaultValue: 6 }, LEN: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }, NEW: { type: Scratch.ArgumentType.STRING, defaultValue: 'C++' } } },
          { opcode: 'sCase', blockType: Scratch.BlockType.REPORTER, text: '[FN]([S])', arguments: { FN: { type: Scratch.ArgumentType.STRING, menu: 'caseMenus', defaultValue: 'toupper' }, S: { type: Scratch.ArgumentType.STRING, defaultValue: 'cpp' } } },
          { opcode: 'toStr', blockType: Scratch.BlockType.REPORTER, text: 'std::to_string([V])', arguments: { V: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2026 } } },
          { opcode: 'sToNum', blockType: Scratch.BlockType.REPORTER, text: '[FN]([S])', arguments: { FN: { type: Scratch.ArgumentType.STRING, menu: 'numMenus', defaultValue: 'std::stoi' }, S: { type: Scratch.ArgumentType.STRING, defaultValue: '42.9' } } },

          { blockType: Scratch.BlockType.LABEL, text: '2. Math Library (<cmath>)' },
          { opcode: 'mPow', blockType: Scratch.BlockType.REPORTER, text: 'std::pow([B], [E])', arguments: { B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 2 }, E: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 } } },
          { opcode: 'mHypot', blockType: Scratch.BlockType.REPORTER, text: 'std::hypot([X], [Y])', arguments: { X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 }, Y: { type: Scratch.ArgumentType.NUMBER, defaultValue: 4 } } },
          { opcode: 'mUnary', blockType: Scratch.BlockType.REPORTER, text: 'std::[FN]([X])', arguments: { FN: { type: Scratch.ArgumentType.STRING, menu: 'mathUnary', defaultValue: 'sqrt' }, X: { type: Scratch.ArgumentType.NUMBER, defaultValue: 16 } } },
          { opcode: 'mTrig', blockType: Scratch.BlockType.REPORTER, text: 'std::[FN]([RAD]) (rad)', arguments: { FN: { type: Scratch.ArgumentType.STRING, menu: 'trigMenus', defaultValue: 'sin' }, RAD: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 } } },
          { opcode: 'mConst', blockType: Scratch.BlockType.REPORTER, text: 'std::numbers::[C]', arguments: { C: { type: Scratch.ArgumentType.STRING, menu: 'constMenus', defaultValue: 'pi' } } },

          { blockType: Scratch.BlockType.LABEL, text: '3. Algorithms (<algorithm> & <numeric>)' },
          { opcode: 'aMinMax', blockType: Scratch.BlockType.REPORTER, text: 'std::[FN]([A], [B])', arguments: { FN: { type: Scratch.ArgumentType.STRING, menu: 'minMaxMenus', defaultValue: 'max' }, A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 15 }, B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 27 } } },
          { opcode: 'aClamp', blockType: Scratch.BlockType.REPORTER, text: 'std::clamp([V], [LO], [HI])', arguments: { V: { type: Scratch.ArgumentType.NUMBER, defaultValue: 150 }, LO: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }, HI: { type: Scratch.ArgumentType.NUMBER, defaultValue: 100 } } },
          { opcode: 'aGcdLcm', blockType: Scratch.BlockType.REPORTER, text: 'std::[FN]([A], [B])', arguments: { FN: { type: Scratch.ArgumentType.STRING, menu: 'gcdMenus', defaultValue: 'gcd' }, A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 12 }, B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 18 } } },
          { opcode: 'aRevStr', blockType: Scratch.BlockType.REPORTER, text: 'std::reverse([S])', arguments: { S: { type: Scratch.ArgumentType.STRING, defaultValue: 'Scratch' } } },
          { opcode: 'aCount', blockType: Scratch.BlockType.REPORTER, text: 'std::count([S], [CH])', arguments: { S: { type: Scratch.ArgumentType.STRING, defaultValue: 'banana' }, CH: { type: Scratch.ArgumentType.STRING, defaultValue: 'a' } } },
          { opcode: 'aPrime', blockType: Scratch.BlockType.BOOLEAN, text: 'is_prime([N])', arguments: { N: { type: Scratch.ArgumentType.NUMBER, defaultValue: 17 } } }
        ],
        menus: {
          caseMenus: { acceptReporters: false, items: ['toupper', 'tolower'] },
          numMenus: { acceptReporters: false, items: ['std::stoi', 'std::stod'] },
          mathUnary: { acceptReporters: false, items: ['sqrt', 'cbrt', 'abs', 'ceil', 'floor', 'round', 'log10', 'log2', 'exp'] },
          trigMenus: { acceptReporters: false, items: ['sin', 'cos', 'tan', 'asin', 'acos', 'atan'] },
          constMenus: { acceptReporters: false, items: ['pi', 'e', 'sqrt2', 'phi'] },
          minMaxMenus: { acceptReporters: false, items: ['max', 'min'] },
          gcdMenus: { acceptReporters: false, items: ['gcd', 'lcm'] }
        }
      };
    }

    // <string>
    sSub(a) { return String(a.S).substr(Math.max(0, Math.trunc(Number(a.POS))), Math.max(0, Math.trunc(Number(a.LEN)))); }
    sFind(a) { return String(a.S).indexOf(String(a.SUB)); }
    sRep(a) {
      const s = String(a.S), pos = Math.max(0, Math.trunc(Number(a.POS))), len = Math.max(0, Math.trunc(Number(a.LEN)));
      return s.slice(0, pos) + String(a.NEW) + s.slice(pos + len);
    }
    sCase(a) { return a.FN === 'toupper' ? String(a.S).toUpperCase() : String(a.S).toLowerCase(); }
    toStr(a) { return String(a.V); }
    sToNum(a) { return a.FN === 'std::stoi' ? (parseInt(String(a.S), 10) || 0) : (parseFloat(String(a.S)) || 0); }

    // <cmath>
    mPow(a) { return Math.pow(Number(a.B), Number(a.E)); }
    mHypot(a) { return Math.hypot(Number(a.X), Number(a.Y)); }
    mUnary(a) {
      const x = Number(a.X);
      switch (a.FN) {
        case 'sqrt': return Math.sqrt(x);
        case 'cbrt': return Math.cbrt(x);
        case 'abs': return Math.abs(x);
        case 'ceil': return Math.ceil(x);
        case 'floor': return Math.floor(x);
        case 'round': return Math.round(x);
        case 'log10': return Math.log10(x);
        case 'log2': return Math.log2(x);
        case 'exp': return Math.exp(x);
        default: return x;
      }
    }
    mTrig(a) {
      const r = Number(a.RAD);
      switch (a.FN) {
        case 'sin': return Math.sin(r);
        case 'cos': return Math.cos(r);
        case 'tan': return Math.tan(r);
        case 'asin': return Math.asin(r);
        case 'acos': return Math.acos(r);
        case 'atan': return Math.atan(r);
        default: return 0;
      }
    }
    mConst(a) {
      if (a.C === 'pi') return Math.PI;
      if (a.C === 'e') return Math.E;
      if (a.C === 'sqrt2') return Math.SQRT2;
      return 1.618033988749895;
    }

    // <algorithm> & <numeric>
    aMinMax(a) { const x = Number(a.A), y = Number(a.B); return a.FN === 'max' ? Math.max(x, y) : Math.min(x, y); }
    aClamp(a) { const v = Number(a.V), lo = Number(a.LO), hi = Number(a.HI); return Math.min(Math.max(v, lo), hi); }
    _gcd(x, y) { x = Math.abs(Math.trunc(x)); y = Math.abs(Math.trunc(y)); while (y) { const t = y; y = x % y; x = t; } return x; }
    aGcdLcm(a) {
      const x = Math.trunc(Number(a.A)), y = Math.trunc(Number(a.B));
      if (a.FN === 'gcd') return this._gcd(x, y);
      if (x === 0 || y === 0) return 0;
      return Math.abs(x * y) / this._gcd(x, y);
    }
    aRevStr(a) { return String(a.S).split('').reverse().join(''); }
    aCount(a) {
      const s = String(a.S), ch = String(a.CH);
      if (!ch) return 0;
      return s.split(ch).length - 1;
    }
    aPrime(a) {
      const n = Math.trunc(Number(a.N));
      if (n < 2) return false;
      if (n === 2 || n === 3) return true;
      if (n % 2 === 0 || n % 3 === 0) return false;
      for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
      }
      return true;
    }
  }

  Scratch.extensions.register(new CppProV2());
})(Scratch);
