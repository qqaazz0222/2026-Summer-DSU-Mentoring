"""Week 0 환경 점검. 실행해서 에러 없이 정보 출력되면 환경설정 완료."""
import platform
import sys


def check_python_version():
    ok = sys.version_info >= (3, 9)
    status = "OK" if ok else "3.9 이상 권장"
    print(f"Python 버전: {sys.version.split()[0]} ({status})")
    return ok


def check_pip():
    try:
        import pip
        print(f"pip 설치됨: {pip.__version__}")
        return True
    except ImportError:
        print("pip 미설치 - 설치 필요 (python3 -m ensurepip)")
        return False


def main():
    print(f"운영체제: {platform.system()} {platform.release()}")
    py_ok = check_python_version()
    pip_ok = check_pip()
    print()
    if py_ok and pip_ok:
        print("환경 점검 통과. WORKBOOK.md 다음 단계로 진행.")
    else:
        print("문제 있음. WORKBOOK.md '자주 발생하는 설치 에러' 참고.")


if __name__ == "__main__":
    main()
