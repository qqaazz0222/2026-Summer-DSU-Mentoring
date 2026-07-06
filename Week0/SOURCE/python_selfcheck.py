"""Week 0 자가진단 - Python 기초.
각 함수의 TODO를 채우고 실행. 전부 통과하면 Week1 진행 가능.
"""


def add(a, b):
    # TODO: a와 b를 더해서 반환
    pass


def is_even(n):
    # TODO: n이 짝수면 True, 홀수면 False 반환
    pass


def make_greeting(name):
    # TODO: "안녕하세요, {name}님!" 형태 문자열 반환
    pass


def sum_list(numbers):
    # TODO: numbers 리스트의 합계 반환 (for문 사용)
    pass


def count_words(text):
    # TODO: 공백 기준으로 나눈 단어 개수 반환
    pass


def student_grade(score):
    # TODO: 90이상 'A', 80이상 'B', 70이상 'C', 그 외 'F' 반환
    pass


class Counter:
    def __init__(self):
        # TODO: count 속성을 0으로 초기화
        pass

    def increment(self):
        # TODO: 호출될 때마다 count 1 증가
        pass


def run_tests():
    assert add(2, 3) == 5
    assert is_even(4) is True
    assert is_even(5) is False
    assert make_greeting("철수") == "안녕하세요, 철수님!"
    assert sum_list([1, 2, 3, 4]) == 10
    assert count_words("hello world foo") == 3
    assert student_grade(95) == "A"
    assert student_grade(82) == "B"
    assert student_grade(71) == "C"
    assert student_grade(50) == "F"

    c = Counter()
    assert c.count == 0
    c.increment()
    c.increment()
    assert c.count == 2

    print("모두 통과! Week1 준비 완료.")


if __name__ == "__main__":
    run_tests()
