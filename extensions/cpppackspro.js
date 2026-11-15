(function(Scratch) {
  'use strict';
  const vars = {}, vecs = {};
  let out = '';

  const cppIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBvbHlnb24gcG9pbnRzPSIyMCwyIDM2LDExIDM2LDI5IDIwLDM4IDQsMjkgNCwxMSIgZmlsbD0iIzAwNTk5QyIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIuNSIvPjx0ZXh0IHg9IjIwIiB5PSIyNSIgZmlsbD0iI2ZmZmZmZiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIxNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QysrPC90ZXh0Pjwvc3ZnPg==';

  class CppPro {
    getInfo() {
      return {
        id: 'cpppackspro',
        name: 'C++ Packs Pro',
        color1: '#1AB394',
        color2: '#15967C',
        color3: '#107A65',
        blockIconURI: cppIcon,
        blocks: [
          { blockType: Scratch.BlockType.LABEL, text: '1. Input / Output (iostream)' },
          { opcode: 'cout', blockType: Scratch.BlockType.COMMAND, text: 'cout: [V]', arguments: { V: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello ' } } },
          { opcode: 'coutLn', blockType: Scratch.BlockType.COMMAND, text: 'cout: [V] << endl', arguments: { V: { type: Scratch.ArgumentType.STRING, defaultValue: 'World!' } } },
          { opcode: 'cinSet', blockType: Scratch.BlockType.COMMAND, text: 'cin >> [K] (value: [VAL])', arguments: { K: { type: Scratch.ArgumentType.STRING, defaultValue: 'n' }, VAL: { type: Scratch.ArgumentType.STRING, defaultValue: '10' } } },
          { opcode: 'getOut', blockType: Scratch.BlockType.REPORTER, text: 'console output' },
          { opcode: 'cls', blockType: Scratch.BlockType.COMMAND, text: 'system("cls")' },

          { blockType: Scratch.BlockType.LABEL, text: '2. Variables & Assignment' },
          { opcode: 'setV', blockType: Scratch.BlockType.COMMAND, text: '[K] = [V]', arguments: { K: { type: Scratch.ArgumentType.STRING, defaultValue: 'x' }, V: { type: Scratch.ArgumentType.STRING, defaultValue: '0' } } },
          { opcode: 'opV', blockType: Scratch.BlockType.COMMAND, text: '[K] [O] [V]', arguments: { K: { type: Scratch.ArgumentType.STRING, defaultValue: 'x' }, O: { type: Scratch.ArgumentType.STRING, menu: 'ops', defaultValue: '+=' }, V: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 } } },
          { opcode: 'incV', blockType: Scratch.BlockType.COMMAND, text: '[K][O]', arguments: { K: { type: Scratch.ArgumentType.STRING, defaultValue: 'x' }, O: { type: Scratch.ArgumentType.STRING, menu: 'inc', defaultValue: '++' } } },
          { opcode: 'getV', blockType: Scratch.BlockType.REPORTER, text: 'var [K]', arguments: { K: { type: Scratch.ArgumentType.STRING, defaultValue: 'x' } } },

          { blockType: Scratch.BlockType.LABEL, text: '3. Loops (for / while)' },
          {
            opcode: 'forL',
            blockType: Scratch.BlockType.CONDITIONAL,
            isLoop: true,
            text: 'for ([K] = [S]; [K2] [CMP] [E]; [K3] [STEP_OP] [T])',
            arguments: {
              K: { type: Scratch.ArgumentType.STRING, defaultValue: 'i' },
              S: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
              K2: { type: Scratch.ArgumentType.STRING, defaultValue: 'i' },
              CMP: { type: Scratch.ArgumentType.STRING, menu: 'cmps', defaultValue: '<=' },
              E: { type: Scratch.ArgumentType.NUMBER, defaultValue: 10 },
              K3: { type: Scratch.ArgumentType.STRING, defaultValue: 'i' },
              STEP_OP: { type: Scratch.ArgumentType.STRING, menu: 'stepOps', defaultValue: '+=' },
              T: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 }
            }
          },
          { opcode: 'whileL', blockType: Scratch.BlockType.CONDITIONAL, isLoop: true, text: 'while ([C])', arguments: { C: { type: Scratch.ArgumentType.BOOLEAN } } },

          { blockType: Scratch.BlockType.LABEL, text: '4. Operators & Type Casting' },
          { opcode: 'tern', blockType: Scratch.BlockType.REPORTER, text: '([C] ? [A] : [B])', arguments: { C: { type: Scratch.ArgumentType.BOOLEAN }, A: { type: Scratch.ArgumentType.STRING, defaultValue: '1' }, B: { type: Scratch.ArgumentType.STRING, defaultValue: '0' } } },
          { opcode: 'bit', blockType: Scratch.BlockType.REPORTER, text: '[A] [O] [B]', arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }, O: { type: Scratch.ArgumentType.STRING, menu: 'bits', defaultValue: '^' }, B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 } } },
          { opcode: 'cast', blockType: Scratch.BlockType.REPORTER, text: 'static_cast<[T]>([V])', arguments: { T: { type: Scratch.ArgumentType.STRING, menu: 'types', defaultValue: 'int' }, V: { type: Scratch.ArgumentType.STRING, defaultValue: '3.99' } } },

          { blockType: Scratch.BlockType.LABEL, text: '5. Dynamic Array (std::vector)' },
          { opcode: 'vClr', blockType: Scratch.BlockType.COMMAND, text: '[N].clear()', arguments: { N: { type: Scratch.ArgumentType.STRING, defaultValue: 'a' } } },
          { opcode: 'vPush', blockType: Scratch.BlockType.COMMAND, text: '[N].push_back([V])', arguments: { N: { type: Scratch.ArgumentType.STRING, defaultValue: 'a' }, V: { type: Scratch.ArgumentType.STRING, defaultValue: '10' } } },
          { opcode: 'vSet', blockType: Scratch.BlockType.COMMAND, text: '[N].at([I]) = [V]', arguments: { N: { type: Scratch.ArgumentType.STRING, defaultValue: 'a' }, I: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }, V: { type: Scratch.ArgumentType.STRING, defaultValue: '99' } } },
          {
            opcode: 'vSort',
            blockType: Scratch.BlockType.COMMAND,
            text: 'sort([N].begin(), [N2].end(), [ORD])',
            arguments: {
              N: { type: Scratch.ArgumentType.STRING, defaultValue: 'a' },
              N2: { type: Scratch.ArgumentType.STRING, defaultValue: 'a' },
              ORD: { type: Scratch.ArgumentType.STRING, menu: 'sortOrds', defaultValue: 'less<>()' }
            }
          },
          { opcode: 'vAt', blockType: Scratch.BlockType.REPORTER, text: '[N].at([I])', arguments: { N: { type: Scratch.ArgumentType.STRING, defaultValue: 'a' }, I: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 } } },
          { opcode: 'vSize', blockType: Scratch.BlockType.REPORTER, text: '[N].size()', arguments: { N: { type: Scratch.ArgumentType.STRING, defaultValue: 'a' } } }
        ],
        menus: {
          ops: { acceptReporters: false, items: ['+=', '-=', '*=', '/=', '%='] },
          inc: { acceptReporters: false, items: ['++', '--'] },
          cmps: { acceptReporters: false, items: ['<=', '<', '>=', '>', '==', '!='] },
          stepOps: { acceptReporters: false, items: ['+=', '-=', '*=', '/=', '%='] },
          sortOrds: {
            acceptReporters: false,
            items: [
              { text: 'less<>() (Tăng dần)', value: 'less<>()' },
              { text: 'greater<>() (Giảm dần)', value: 'greater<>()' }
            ]
          },
          bits: { acceptReporters: false, items: ['^', '&', '|', '<<', '>>'] },
          types: { acceptReporters: false, items: ['int', 'double', 'bool', 'std::string'] }
        }
      };
    }
    cout(a) { out += String(a.V); }
    coutLn(a) { out += String(a.V) + '\n'; }
    cinSet(a) { const r = String(a.VAL); vars[a.K] = (r.trim() !== '' && !isNaN(Number(r))) ? Number(r) : r; }
    getOut() { return out; }
    cls() { out = ''; }
    setV(a) { const v = String(a.V); vars[a.K] = (v.trim() !== '' && !isNaN(Number(v))) ? Number(v) : v; }
    opV(a) { const c = Number(vars[a.K]) || 0, v = Number(a.V) || 0; vars[a.K] = a.O === '+=' ? c + v : a.O === '-=' ? c - v : a.O === '*=' ? c * v : a.O === '/=' ? (v ? c / v : 0) : (v ? c % v : 0); }
    incV(a) { vars[a.K] = (Number(vars[a.K]) || 0) + (a.O === '++' ? 1 : -1); }
    getV(a) { return (a.K in vars) ? vars[a.K] : 0; }

    forL(a, u) {
      const k = String(a.K), step = Number(a.T), end = Number(a.E);
      if (u.stackFrame.i === undefined) {
        u.stackFrame.i = Number(a.S);
      } else {
        const prev = u.stackFrame.i;
        if (a.STEP_OP === '+=') u.stackFrame.i += step;
        else if (a.STEP_OP === '-=') u.stackFrame.i -= step;
        else if (a.STEP_OP === '*=') { if (step === 0 || step === 1) return; u.stackFrame.i *= step; }
        else if (a.STEP_OP === '/=') { if (step === 0 || step === 1) return; u.stackFrame.i /= step; }
        else if (a.STEP_OP === '%=') { if (step === 0) return; u.stackFrame.i %= step; if (u.stackFrame.i === prev) return; }
      }
      const cur = u.stackFrame.i;
      vars[k] = cur;
      let ok = false;
      if (a.CMP === '<=') ok = cur <= end;
      else if (a.CMP === '<') ok = cur < end;
      else if (a.CMP === '>=') ok = cur >= end;
      else if (a.CMP === '>') ok = cur > end;
      else if (a.CMP === '==') ok = cur === end;
      else if (a.CMP === '!=') ok = cur !== end;
      if (ok) u.startBranch(1, true);
    }

    whileL(a, u) { if (Boolean(a.C)) u.startBranch(1, true); }
    tern(a) { return a.C ? a.A : a.B; }
    bit(a) { const x = Math.trunc(Number(a.A)), y = Math.trunc(Number(a.B)); return a.O === '^' ? x ^ y : a.O === '&' ? x & y : a.O === '|' ? x | y : a.O === '<<' ? x << y : x >> y; }
    cast(a) { return a.T === 'int' ? (Math.trunc(Number(a.V)) || 0) : a.T === 'double' ? (Number(a.V) || 0) : a.T === 'bool' ? Boolean(a.V && a.V !== '0' && a.V !== 'false') : String(a.V); }
    _v(n) { return vecs[n] || (vecs[n] = []); }
    vClr(a) { vecs[a.N] = []; }
    vPush(a) { this._v(a.N).push(a.V); }
    vSet(a) { const i = Math.trunc(Number(a.I)); if (i >= 0) this._v(a.N)[i] = a.V; }

    vSort(a) {
      const desc = a.ORD === 'greater<>()';
      this._v(a.N).sort((x, y) => {
        const cmp = (!isNaN(Number(x)) && !isNaN(Number(y))) ? Number(x) - Number(y) : String(x).localeCompare(String(y));
        return desc ? -cmp : cmp;
      });
    }

    vAt(a) { const v = this._v(a.N), i = Math.trunc(Number(a.I)); return (i >= 0 && i < v.length) ? v[i] : ''; }
    vSize(a) { return this._v(a.N).length; }
}
Scratch.extensions.register(new CppPro());
})(Scratch);
