<template>
    <div class="shiritori-container">
      <h1 class="title">Pythonしりとり開始！</h1>  
      <ul class="turn-list">
        <li v-for="turn in turns" :key="turn.no" class="turn-item">
          <div class="turn-label">
            🎮 Turn {{ turn.no }}
            <span v-if="turn.label" class="sub-label">({{ turn.label }})</span>
          </div>
          <span class="arrow">≫</span>
          <span class="word">しりとりワード：{{ turn.word }}</span>
          <div>  
            <span class="comment">{{ turn.comment }}</span>        
            <p class="status">✅OK!</p>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, computed } from 'vue'

interface Situation {
  id: number
  num: number
  word: string
  status: boolean
  comment: string
}

// ここにご提供の配列を置く
const situationObj: Situation[] = [
  { id: 1, num: 1, word: 'def',       status: true, comment: "🌟 pyファイルないけど、めっちゃいい感じだよ〜〜💖✨ コード全部バッチリ使われてる感じがする〜〜🥰💕 ナイスワーク〜〜〜🎉"},
  { id: 1, num: 2, word: 'float',     status: true, comment: "🌟 pyファイルないけど、めっちゃいい感じだよ〜〜💖✨ コード全部バッチリ使われてる感じがする〜〜🥰💕 ナイスワーク〜〜〜🎉" },
  { id: 1, num: 3, word: 'try',       status: true, comment: "🌟 pyファイルないけど、めっちゃいい感じだよ〜〜💖✨ コード全部バッチリ使われてる感じがする〜〜🥰💕 ナイスワーク〜〜〜🎉" },
  { id: 2, num: 1, word: 'def',       status: true, comment: "🌟 pyファイルないけど、めっちゃいい感じだよ〜〜💖✨ コード全部バッチリ使われてる感じがする〜〜🥰💕 ナイスワーク〜〜〜🎉" },
  { id: 3, num: 1, word: 'def',       status: true, comment: "🌟 pyファイルないけど、めっちゃいい感じだよ〜〜💖✨ コード全部バッチリ使われてる感じがする〜〜🥰💕 ナイスワーク〜〜〜🎉" },
  { id: 4, num: 1, word: 'def',       status: true, comment: "🌟 pyファイルないけど、めっちゃいい感じだよ〜〜💖✨ コード全部バッチリ使われてる感じがする〜〜🥰💕 ナイスワーク〜〜〜🎉" },
  { id: 5, num: 1, word: 'def',       status: true, comment: "🌟 pyファイルないけど、めっちゃいい感じだよ〜〜💖✨ コード全部バッチリ使われてる感じがする〜〜🥰💕 ナイスワーク〜〜〜🎉" },
  { id: 5, num: 2, word: 'float',     status: true, comment: "🌟 pyファイルないけど、めっちゃいい感じだよ〜〜💖✨ コード全部バッチリ使われてる感じがする〜〜🥰💕 ナイスワーク〜〜〜🎉" },
  { id: 6, num: 1, word: 'try',       status: true, comment: "🌟 pyファイルないけど、めっちゃいい感じだよ〜〜💖✨ コード全部バッチリ使われてる感じがする〜〜🥰💕 ナイスワーク〜〜〜🎉"},
  { id: 6, num: 2, word: 'yield',     status: true, comment: "🌟 pyファイルないけど、めっちゃいい感じだよ〜〜💖✨ コード全部バッチリ使われてる感じがする〜〜🥰💕 ナイスワーク〜〜〜🎉" },
  { id: 6, num: 3, word: 'del',       status: true, comment: "🌟 pyファイルないけど、めっちゃいい感じだよ〜〜💖✨ コード全部バッチリ使われてる感じがする〜〜🥰💕 ナイスワーク〜〜〜🎉" },
  { id: 6, num: 4, word: 'logging',   status: true, comment: "🌟 pyファイルないけど、めっちゃいい感じだよ〜〜💖✨ コード全部バッチリ使われてる感じがする〜〜🥰💕 ナイスワーク〜〜〜🎉" },
  { id: 6, num: 5, word: 'getpass',   status: true, comment: "🌟 pyファイルないけど、めっちゃいい感じだよ〜〜💖✨ コード全部バッチリ使われてる感じがする〜〜🥰💕 ナイスワーク〜〜〜🎉" },
  { id: 6, num: 6, word: 'sys',       status: true, comment: "🌟 pyファイルないけど、めっちゃいい感じだよ〜〜💖✨ コード全部バッチリ使われてる感じがする〜〜🥰💕 ナイスワーク〜〜〜🎉" },
  { id: 6, num: 7, word: 'subprocess',status: true, comment: "🌟 pyファイルないけど、めっちゃいい感じだよ〜〜💖✨ コード全部バッチリ使われてる感じがする〜〜🥰💕 ナイスワーク〜〜〜🎉" },
  { id: 6, num: 8, word: 'statistics',status: true, comment: "🌟 pyファイルないけど、めっちゃいい感じだよ〜〜💖✨ コード全部バッチリ使われてる感じがする〜〜🥰💕 ナイスワーク〜〜〜🎉" },
  { id: 6, num: 9, word: 'socket',    status: true, comment: "🌟 pyファイルないけど、めっちゃいい感じだよ〜〜💖✨ コード全部バッチリ使われてる感じがする〜〜🥰💕 ナイスワーク〜〜〜🎉" },
  { id: 6, num:10, word: 'time',      status: true, comment: "🌟 pyファイルないけど、めっちゃいい感じだよ〜〜💖✨ コード全部バッチリ使われてる感じがする〜〜🥰💕 ナイスワーク〜〜〜🎉"},
]

const props = defineProps<{ id: string }>()
const turnId = computed(() => Number(props.id))

// id が一致・status=true のものだけを抽出し、num 昇順ソート
const filtered = computed(() =>
  situationObj
    .filter((s) => s.id === turnId.value && s.status)
    .sort((a, b) => a.num - b.num)
)

// いままでと同じ形 { no, label?, word } に変換
const turns = computed(() =>
  filtered.value.map((s, idx, arr) => ({
    no: s.num,
    label: idx === 0 ? '最初' : `前: ${arr[idx - 1].word}`,
    word: s.word,
    comment: s.comment
  }))
)
</script>

 
  
  <style scoped>
  /*.shiritori-container {
    max-width: 480px;
    margin: 0 auto;
    padding: 24px;
    font-family: 'Segoe UI', sans-serif;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  .title {
    font-size: 1.25rem;
    margin-bottom: 16px;
  }
  
  .turn-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .turn-item {
    display: flex;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
  }
  
  .turn-item:last-child {
    border-bottom: none;
  }
  
  .turn-label {
    flex-shrink: 0;
    width: 130px;
    font-weight: bold;
  }
  
  .sub-label {
    font-weight: normal;
    color: #666;
  }
  
  .arrow {
    margin: 0 8px;
    color: #999;
  }
  
  .word {
    flex-grow: 1;
    font-family: monospace;
  }
  
  .status {
    flex-shrink: 0;
    margin-left: 8px;
    color: #2e7d32;
    font-weight: bold;
  }*/
  </style>
  