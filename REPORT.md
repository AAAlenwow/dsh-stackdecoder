# dsh-stackdecoder — Measured Report

Generated: 2026-10-21T04:00:52.011Z
Node: v22.22.2, Platform: darwin/arm64
Repo: https://github.com/AAAlenwow/dsh-ai-armor/tree/main/plugins/dsh-stackdecoder

## 摘要
- 总用例: **5**
- 通过: **5**
- 失败: **0**
- 状态: **✅ ALL PASS**

## 工具一览

| 工具 | 用途 | 平均延迟 | 平均输出 chars | 平均 tokens |
|---|---|---|---|---|
| `decode_stack` | 解析堆栈并定位每帧到本地代码 | 0.2ms | 3213 | 714 |

## 每个用例的明细

### 01-node-trace — `decode_stack` ✅

- 输入: `{"cwd":"/Users/hechao/Documents/deepseek-harness/default-workspace/subpkg-work/repos/dsh-stackdecoder/tests/cases/01-node-trace/sample-app","maxFrames":5,"contextBefore":2,"contextAfter":2,"trace":"TypeError: id is required ... (8 lines)"}`
- 延迟: **0.5ms**
- 输出大小: 5400 chars / ~1200 tokens (高估 1350, 低估 982)
- 断言:
  - ✓ `ok` = true (期望 `true`)
  - ✓ `language` = "javascript" (期望 `"javascript"`)
  - ✓ `frameCount` = 7 (期望 `7`)
  - ✓ `resolvedCount` = 4 (期望 `4`)
  - ✓ `truncated` = true (期望 `true`)
  - ✓ `frames.0.function` = "getUserById" (期望 `"getUserById"`)
  - ✓ `frames.0.line` = 4 (期望 `4`)
  - ✓ `frames.0.context.found` = true (期望 `true`)
  - ✓ `frames.0.context.snippet.2.highlight` = true (期望 `true`)
  - ✓ `frames.0.context.snippet.2.code` = "    throw new TypeError('id is required');  // <-- bug locat..." (期望 `"matches:throw new TypeError"`)
  - ✓ `frames.3.function` = "Object.<anonymous>" (期望 `"Object.<anonymous>"`)
  - ✓ `frames.3.context.found` = true (期望 `true`)
  - ✓ `frames.4.context.found` = false (期望 `false`)

**实际返回(片段):**
```json
{
  "ok": true,
  "language": "javascript",
  "frameCount": 7,
  "resolvedCount": 4,
  "missingCount": 1,
  "truncated": true,
  "frames": [
    {
      "language": "javascript",
      "function": "getUserById",
      "file": "src/handler.js",
      "line": 4,
      "column": 11,
      "raw": "    at getUserById (src/handler.js:4:11)",
      "context": {
        "file": "/Users/hechao/Documents/deepseek-harness/default-workspace/subpkg-work/repos/dsh-stackdecoder/tests/cases/01-node-trace/sample-app/src/handler.js",
        "line": 4,
        "found": true,
        "snippet": [
          {
            "line": 2,
            "code": "function getUserById(id) {",
            "highlight": false
          },
          {
            "line": 3,
            "code": "  if (id == null) {",
            "highlight": false
          },
          {
            "line": 4,
            "code": "    throw new TypeError('id is required');  // <-- bug location",
            "highlight": true
          },
          {
            "line": 5,
            "code": "  }",
            "highlight": false
          },
          {
            "line": 6,
            "code": "  return { id, name: 'mock' };",
            "highlight": false
          }
        ],
        "startLine": 2,
        "endLine": 6,
        "totalLines": 15
      }
    },
    {
      "language": "javascript",
      "function": "handleRequest",
      "file": "src/handler.js",
      "line": 11,
      "column": 10,
      "raw": "    at 
... [truncated for readability]
```

### 02-python-trace — `decode_stack` ✅

- 输入: `{"cwd":"/Users/hechao/Documents/deepseek-harness/default-workspace/subpkg-work/repos/dsh-stackdecoder/tests/cases/02-python-trace/sample-app","maxFrames":5,"contextBefore":2,"contextAfter":2,"trace":"Traceback (most recent call last): ... (6 lines)"}`
- 延迟: **0.2ms**
- 输出大小: 2494 chars / ~554 tokens (高估 624, 低估 453)
- 断言:
  - ✓ `ok` = true (期望 `true`)
  - ✓ `language` = "python" (期望 `"python"`)
  - ✓ `frameCount` = 2 (期望 `2`)
  - ✓ `frames.0.function` = "login" (期望 `"login"`)
  - ✓ `frames.0.line` = 9 (期望 `9`)
  - ✓ `frames.0.context.found` = true (期望 `true`)
  - ✓ `frames.1.function` = "validate_token" (期望 `"validate_token"`)
  - ✓ `frames.1.line` = 5 (期望 `5`)
  - ✓ `frames.1.context.snippet.2.highlight` = true (期望 `true`)
  - ✓ `frames.1.context.snippet.2.code` = "        raise ValueError("token is empty")" (期望 `"matches:raise ValueError"`)

**实际返回(片段):**
```json
{
  "ok": true,
  "language": "python",
  "frameCount": 2,
  "resolvedCount": 2,
  "missingCount": 0,
  "truncated": false,
  "frames": [
    {
      "language": "python",
      "file": "src/auth.py",
      "line": 9,
      "function": "login",
      "raw": "  File \"src/auth.py\", line 9, in login",
      "context": {
        "file": "/Users/hechao/Documents/deepseek-harness/default-workspace/subpkg-work/repos/dsh-stackdecoder/tests/cases/02-python-trace/sample-app/src/auth.py",
        "line": 9,
        "found": true,
        "snippet": [
          {
            "line": 7,
            "code": "",
            "highlight": false
          },
          {
            "line": 8,
            "code": "def login(username, password):",
            "highlight": false
          },
          {
            "line": 9,
            "code": "    validate_token(None)  # triggers the throw",
            "highlight": true
          },
          {
            "line": 10,
            "code": "    return None",
            "highlight": false
          },
          {
            "line": 11,
            "code": "",
            "highlight": false
          }
        ],
        "startLine": 7,
        "endLine": 11,
        "totalLines": 11
      }
    },
    {
      "language": "python",
      "file": "src/auth.py",
      "line": 5,
      "function": "validate_token",
      "raw": "  File \"src/auth.py\", line 5, in validate_token",
      "context": {
        "file": "/Users/hechao/Documents/deepse
... [truncated for readability]
```

### 03-java-trace — `decode_stack` ✅

- 输入: `{"cwd":"/Users/hechao/Documents/deepseek-harness/default-workspace/subpkg-work/repos/dsh-stackdecoder/tests/cases/03-java-trace/sample-app","maxFrames":3,"contextBefore":2,"contextAfter":2,"trace":"java.lang.IllegalArgumentException: cardNumber is null ... (3 lines)"}`
- 延迟: **0.2ms**
- 输出大小: 2147 chars / ~477 tokens (高估 537, 低估 390)
- 断言:
  - ✓ `ok` = true (期望 `true`)
  - ✓ `language` = "java" (期望 `"java"`)
  - ✓ `frameCount` = 2 (期望 `2`)
  - ✓ `frames.0.function` = "com.example.PaymentService.charge" (期望 `"com.example.PaymentService.charge"`)
  - ✓ `frames.0.context.found` = true (期望 `true`)
  - ✓ `frames.1.context.found` = false (期望 `false`)

**实际返回(片段):**
```json
{
  "ok": true,
  "language": "java",
  "frameCount": 2,
  "resolvedCount": 1,
  "missingCount": 1,
  "truncated": false,
  "frames": [
    {
      "language": "java",
      "function": "com.example.PaymentService.charge",
      "file": "PaymentService.java",
      "line": 6,
      "raw": "    at com.example.PaymentService.charge(PaymentService.java:6)",
      "context": {
        "file": "/Users/hechao/Documents/deepseek-harness/default-workspace/subpkg-work/repos/dsh-stackdecoder/tests/cases/03-java-trace/sample-app/src/PaymentService.java",
        "line": 6,
        "found": true,
        "snippet": [
          {
            "line": 4,
            "code": "    public void charge(String cardNumber) {",
            "highlight": false
          },
          {
            "line": 5,
            "code": "        if (cardNumber == null) {",
            "highlight": false
          },
          {
            "line": 6,
            "code": "            throw new IllegalArgumentException(\"cardNumber is null\");",
            "highlight": true
          },
          {
            "line": 7,
            "code": "        }",
            "highlight": false
          },
          {
            "line": 8,
            "code": "    }",
            "highlight": false
          }
        ],
        "startLine": 4,
        "endLine": 8,
        "totalLines": 10
      }
    },
    {
      "language": "java",
      "function": "com.example.CheckoutController.checkout",
      "file": "Checkout
... [truncated for readability]
```

### 04-mixed-trace — `decode_stack` ✅

- 输入: `{"cwd":"/Users/hechao/Documents/deepseek-harness/default-workspace/subpkg-work/repos/dsh-stackdecoder/tests/cases/04-mixed-trace/sample-app","maxFrames":4,"contextBefore":1,"contextAfter":1,"trace":"TypeError: Cannot read property 'foo' of undefined ... (5 lines)"}`
- 延迟: **0.1ms**
- 输出大小: 3376 chars / ~750 tokens (高估 844, 低估 614)
- 断言:
  - ✓ `ok` = true (期望 `true`)
  - ✓ `language` = "javascript" (期望 `"javascript"`)
  - ✓ `frameCount` = 4 (期望 `4`)
  - ✓ `resolvedCount` = 2 (期望 `2`)
  - ✓ `missingCount` = 2 (期望 `2`)
  - ✓ `frames.0.context.found` = true (期望 `true`)
  - ✓ `frames.1.context.found` = true (期望 `true`)
  - ✓ `frames.2.context.found` = false (期望 `false`)
  - ✓ `frames.3.context.found` = false (期望 `false`)

**实际返回(片段):**
```json
{
  "ok": true,
  "language": "javascript",
  "frameCount": 4,
  "resolvedCount": 2,
  "missingCount": 2,
  "truncated": false,
  "frames": [
    {
      "language": "javascript",
      "function": "userHandler",
      "file": "src/handler.js",
      "line": 11,
      "column": 10,
      "raw": "    at userHandler (src/handler.js:11:10)",
      "context": {
        "file": "/Users/hechao/Documents/deepseek-harness/default-workspace/subpkg-work/repos/dsh-stackdecoder/tests/cases/04-mixed-trace/sample-app/src/handler.js",
        "line": 11,
        "found": true,
        "snippet": [
          {
            "line": 10,
            "code": "  const id = null;  // intentionally null to trigger the throw",
            "highlight": false
          },
          {
            "line": 11,
            "code": "  return getUserById(id);",
            "highlight": true
          },
          {
            "line": 12,
            "code": "}",
            "highlight": false
          }
        ],
        "startLine": 10,
        "endLine": 12,
        "totalLines": 15
      }
    },
    {
      "language": "javascript",
      "function": "Object.<anonymous>",
      "file": "src/server.js",
      "line": 6,
      "column": 5,
      "raw": "    at Object.<anonymous> (src/server.js:6:5)",
      "context": {
        "file": "/Users/hechao/Documents/deepseek-harness/default-workspace/subpkg-work/repos/dsh-stackdecoder/tests/cases/04-mixed-trace/sample-app/src/server.js",
        "line": 6,
   
... [truncated for readability]
```

### 05-missing-file — `decode_stack` ✅

- 输入: `{"cwd":"/Users/hechao/Documents/deepseek-harness/default-workspace/subpkg-work/repos/dsh-stackdecoder/tests/cases/05-missing-file/sample-app","maxFrames":3,"contextBefore":2,"contextAfter":2,"trace":"Error: something went wrong ... (4 lines)"}`
- 延迟: **0.1ms**
- 输出大小: 2646 chars / ~588 tokens (高估 662, 低估 481)
- 断言:
  - ✓ `ok` = true (期望 `true`)
  - ✓ `frameCount` = 3 (期望 `3`)
  - ✓ `resolvedCount` = 1 (期望 `1`)
  - ✓ `frames.0.context.found` = true (期望 `true`)
  - ✓ `frames.1.context.found` = false (期望 `false`)
  - ✓ `frames.2.context.found` = false (期望 `false`)

**实际返回(片段):**
```json
{
  "ok": true,
  "language": "javascript",
  "frameCount": 3,
  "resolvedCount": 1,
  "missingCount": 2,
  "truncated": false,
  "frames": [
    {
      "language": "javascript",
      "function": "handleRequest",
      "file": "src/handler.js",
      "line": 11,
      "column": 10,
      "raw": "    at handleRequest (src/handler.js:11:10)",
      "context": {
        "file": "/Users/hechao/Documents/deepseek-harness/default-workspace/subpkg-work/repos/dsh-stackdecoder/tests/cases/05-missing-file/sample-app/src/handler.js",
        "line": 11,
        "found": true,
        "snippet": [
          {
            "line": 9,
            "code": "function handleRequest(path) {",
            "highlight": false
          },
          {
            "line": 10,
            "code": "  const id = null;  // intentionally null to trigger the throw",
            "highlight": false
          },
          {
            "line": 11,
            "code": "  return getUserById(id);",
            "highlight": true
          },
          {
            "line": 12,
            "code": "}",
            "highlight": false
          },
          {
            "line": 13,
            "code": "",
            "highlight": false
          }
        ],
        "startLine": 9,
        "endLine": 13,
        "totalLines": 15
      }
    },
    {
      "language": "javascript",
      "function": "internalWrapper",
      "file": "node_modules/some-lib/wrapper.js",
      "line": 42,
      "column": 7,
      "raw
... [truncated for readability]
```

## 注意事项(本机实测)

1. 解析器按"匹配帧数最多"自动选语言,所以**多语言混合堆栈**也能跑(选帧最多的)。
2. `maxFrames` 默认 10——只解析顶部几帧;更深层堆栈通常来自框架/库,没有可操作上下文。
3. `contextBefore/After` 默认 5——输出 token 随这两个值线性增长,别开太大。
4. 找不到的文件(打包/混淆代码/已删除源码)返回 `context.found: false` 和一个 `reason`,**不要**当成错误。

## 复现方法

```bash
cd plugins/dsh-stackdecoder
node tests/run.mjs   # 重新跑全部 case,生成新的 REPORT.md
```

任何第三方在干净 macOS / Linux 上复现本报告所需的:
- Node.js >= 18
- 本仓库(或 tarball)+ cd 到插件根目录
