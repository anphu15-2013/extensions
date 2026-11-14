(function(Scratch) {
  'use strict';
  const vars = {}, vecs = {};
  let out = '';

  class CppPro {
    getInfo() {
      return {
        id: 'cpppackspro',
        name: 'C++ Packs Pro',
        color1: '#1AB394',
        color2: '#15967C',
        color3: '#107A65',
        blocks: [
          { blockType: Scratch.BlockType.LABEL, text: '1. Nhập / Xuất (iostream)' },
          { opcode: 'cout', blockType: Scratch.BlockType.COMMAND, text: 'cout: [V]', arguments: { V: { type: Scratch.ArgumentType.STRING, defaultValue: 'Hello ' } } },
          { opcode: 'coutLn', blockType: Scratch.BlockType.COMMAND, text: 'cout: [V] (xuống dòng)', arguments: { V: { type: Scratch.ArgumentType.STRING, defaultValue: 'World!' } } },
          { opcode: 'cinSet', blockType: Scratch.BlockType.COMMAND, text: 'cin: lưu [VAL] vào biến [K]', arguments: { VAL: { type: Scratch.ArgumentType.STRING, defaultValue: '10' }, K: { type: Scratch.ArgumentType.STRING, defaultValue: 'n' } } },
          { opcode: 'getOut', blockType: Scratch.BlockType.REPORTER, text: 'màn hình console' },
          { opcode: 'cls', blockType: Scratch.BlockType.COMMAND, text: 'xóa console' },

          { blockType: Scratch.BlockType.LABEL, text: '2. Biến & Phép gán' },
          { opcode: 'setV', blockType: Scratch.BlockType.COMMAND, text: '[K] = [V]', arguments: { K: { type: Scratch.ArgumentType.STRING, defaultValue: 'x' }, V: { type: Scratch.ArgumentType.STRING, defaultValue: '0' } } },
          { opcode: 'opV', blockType: Scratch.BlockType.COMMAND, text: '[K] [O] [V]', arguments: { K: { type: Scratch.ArgumentType.STRING, defaultValue: 'x' }, O: { type: Scratch.ArgumentType.STRING, menu: 'ops', defaultValue: '+=' }, V: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 } } },
          { opcode: 'incV', blockType: Scratch.BlockType.COMMAND, text: '[K][O]', arguments: { K: { type: Scratch.ArgumentType.STRING, defaultValue: 'x' }, O: { type: Scratch.ArgumentType.STRING, menu: 'inc', defaultValue: '++' } } },
          { opcode: 'getV', blockType: Scratch.BlockType.REPORTER, text: 'biến [K]', arguments: { K: { type: Scratch.ArgumentType.STRING, defaultValue: 'x' } } },

          { blockType: Scratch.BlockType.LABEL, text: '3. Toán tử & Ép kiểu' },
          { opcode: 'tern', blockType: Scratch.BlockType.REPORTER, text: '([C] ? [A] : [B])', arguments: { C: { type: Scratch.ArgumentType.BOOLEAN }, A: { type: Scratch.ArgumentType.STRING, defaultValue: '1' }, B: { type: Scratch.ArgumentType.STRING, defaultValue: '0' } } },
          { opcode: 'bit', blockType: Scratch.BlockType.REPORTER, text: '[A] [O] [B]', arguments: { A: { type: Scratch.ArgumentType.NUMBER, defaultValue: 5 }, O: { type: Scratch.ArgumentType.STRING, menu: 'bits', defaultValue: '^' }, B: { type: Scratch.ArgumentType.NUMBER, defaultValue: 3 } } },
          { opcode: 'cast', blockType: Scratch.BlockType.REPORTER, text: 'static_cast<[T]>([V])', arguments: { T: { type: Scratch.ArgumentType.STRING, menu: 'types', defaultValue: 'int' }, V: { type: Scratch.ArgumentType.STRING, defaultValue: '3.99' } } },

          { blockType: Scratch.BlockType.LABEL, text: '4. Mảng (std::vector)' },
          { opcode: 'vClr', blockType: Scratch.BlockType.COMMAND, text: '[N].clear()', arguments: { N: { type: Scratch.ArgumentType.STRING, defaultValue: 'a' } } },
          { opcode: 'vPush', blockType: Scratch.BlockType.COMMAND, text: '[N].push_back([V])', arguments: { N: { type: Scratch.ArgumentType.STRING, defaultValue: 'a' }, V: { type: Scratch.ArgumentType.STRING, defaultValue: '10' } } },
          { opcode: 'vSet', blockType: Scratch.BlockType.COMMAND, text: '[N].at([I]) = [V]', arguments: { N: { type: Scratch.ArgumentType.STRING, defaultValue: 'a' }, I: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 }, V: { type: Scratch.ArgumentType.STRING, defaultValue: '99' } } },
          { opcode: 'vSort', blockType: Scratch.BlockType.COMMAND, text: 'sort([N].begin(), [N].end())', arguments: { N: { type: Scratch.ArgumentType.STRING, defaultValue: 'a' } } },
          { opcode: 'vAt', blockType: Scratch.BlockType.REPORTER, text: '[N].at([I])', arguments: { N: { type: Scratch.ArgumentType.STRING, defaultValue: 'a' }, I: { type: Scratch.ArgumentType.NUMBER, defaultValue: 0 } } },
          { opcode: 'vSize', blockType: Scratch.BlockType.REPORTER, text: '[N].size()', arguments: { N: { type: Scratch.ArgumentType.STRING, defaultValue: 'a' } } }
        ],
        menus: {
          ops: { acceptReporters: false, items: ['+=', '-=', '*=', '/=', '%='] },
          inc: { acceptReporters: false, items: ['++', '--'] },
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
    tern(a) { return a.C ? a.A : a.B; }
    bit(a) { const x = Math.trunc(Number(a.A)), y = Math.trunc(Number(a.B)); return a.O === '^' ? x ^ y : a.O === '&' ? x & y : a.O === '|' ? x | y : a.O === '<<' ? x << y : x >> y; }
    cast(a) { return a.T === 'int' ? (Math.trunc(Number(a.V)) || 0) : a.T === 'double' ? (Number(a.V) || 0) : a.T === 'bool' ? Boolean(a.V && a.V !== '0' && a.V !== 'false') : String(a.V); }
    _v(n) { return vecs[n] || (vecs[n] = []); }
    vClr(a) { vecs[a.N] = []; }
    vPush(a) { this._v(a.N).push(a.V); }
    vSet(a) { const i = Math.trunc(Number(a.I)); if (i >= 0) this._v(a.N)[i] = a.V; }
    vSort(a) { this._v(a.N).sort((x, y) => (!isNaN(Number(x)) && !isNaN(Number(y))) ? Number(x) - Number(y) : String(x).localeCompare(String(y))); }
    vAt(a) { const v = this._v(a.N), i = Math.trunc(Number(a.I)); return (i >= 0 && i < v.length) ? v[i] : ''; }
    vSize(a) { return this._v(a.N).length; }
  }
  Scratch.extensions.register(new CppPro());
})(Scratch);
