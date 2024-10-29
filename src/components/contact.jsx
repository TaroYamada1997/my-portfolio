function Contact() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-roboto font-bold mb-4">
              お問い合わせ
            </h2>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="メールアドレス"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="メッセージ"
                  className="w-full p-2 border border-gray-300 rounded h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#2c3e50] text-white px-6 py-2 rounded hover:bg-[#34495e]"
              >
                送信
              </button>
            </form>
        </div>
    )
}

export default Contact;