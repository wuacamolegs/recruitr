module Response
  module JSONParser
    def response_body
      Oj.load(response.body) if response.present?
    end
  end
end
