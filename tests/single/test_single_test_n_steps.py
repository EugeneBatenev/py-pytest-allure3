import allure
import pytest


@allure.feature("test results processing")
@allure.story("many unit tests")
@allure.title("Assert a tuple 001 and it will fail")
def test_unit_always_passing_001():
    with allure.step("Start stuff"):
        assert True
    with allure.step("Click stuff"):
        assert True
    with allure.step("Click stuff harder"):
        assert True
    with allure.step("Czech stuff"):
        assert True
    with allure.step("Check stuff"):
        assert True
